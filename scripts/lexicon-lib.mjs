import fs from "node:fs";
import path from "node:path";

function stableHash(value) {
  // FNV-1a 64-bit UTF-16 code-unit checksum: deterministic in Node and browsers, used for
  // cache versioning and accidental-corruption detection (not authentication).
  let hash = 0xcbf29ce484222325n;
  for (let index = 0; index < value.length; index++) {
    hash ^= BigInt(value.charCodeAt(index));
    hash = BigInt.asUintN(64, hash * 0x100000001b3n);
  }
  return hash.toString(16).padStart(16, "0");
}

export const ROOT = process.cwd();
export const SOURCE_DIR = path.join(ROOT, "lexicon-source");
export const DIST_DIR = path.join(ROOT, "lexicon-dist");

export function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}
export function sourceFiles() {
  return fs.readdirSync(path.join(SOURCE_DIR, "entries"))
    .filter(name => name.endsWith(".json"))
    .sort()
    .map(name => path.join(SOURCE_DIR, "entries", name));
}
export function loadSource() {
  const config = readJson(path.join(SOURCE_DIR, "config.json"));
  const referenceFile = readJson(path.join(SOURCE_DIR, "references.json"));
  const entries = [];
  for (const file of sourceFiles()) {
    const part = readJson(file);
    if (part.schemaVersion !== 2 || !Array.isArray(part.entries)) {
      throw new Error(`Invalid source shard envelope: ${path.relative(ROOT, file)}`);
    }
    entries.push(...part.entries);
  }
  return { config, references: referenceFile.references || [], entries };
}
const isText = value => typeof value === "string" && value.trim().length > 0;
const allowedLanguages = new Set(["ta", "tcy", "okn", "proto-dravidian"]);
const allowedRelationships = new Set(["unclassified", "cognate", "semantic_equivalent", "loan", "reconstruction", "attested_form", "proposed_coinage"]);
const allowedEvidenceStatuses = new Set(["not_assessed", "provisional", "verified", "contested", "rejected"]);
const allowedReviewStatuses = new Set(["needs_review", "in_review", "verified", "contested", "rejected", "proposed"]);

export function validateLexicon({ entries, references }) {
  const errors = [];
  const warnings = [];
  const entryIds = new Set();
  const referenceIds = new Set();
  const fail = (where, message) => errors.push(where + ": " + message);
  if (!Array.isArray(entries)) return { errors:["entries must be an array"], warnings };
  if (!Array.isArray(references)) return { errors:["references must be an array"], warnings };
  for (const [i, reference] of references.entries()) {
    const at = "references[" + i + "]";
    if (!reference || !/^[a-z0-9][a-z0-9-]*$/.test(reference.id || "")) fail(at, "reference needs a stable lowercase ID");
    else if (referenceIds.has(reference.id)) fail(at, "duplicate reference ID '" + reference.id + "'");
    else referenceIds.add(reference.id);
    if (!isText(reference.title)) fail(at, "title is required");
    if (!["dictionary","corpus","inscription","publication","website","contributor","other"].includes(reference.type)) fail(at, "invalid reference type");
  }
  for (const [i, entry] of entries.entries()) {
    const at = `entries[${i}]`;
    if (!entry || typeof entry !== "object") { fail(at, "must be an object"); continue; }
    if (!/^[a-z0-9][a-z0-9-]*$/.test(entry.id || "")) fail(at, "id must be a stable lowercase slug");
    else if (entryIds.has(entry.id)) fail(at, `duplicate entry id '${entry.id}'`);
    else entryIds.add(entry.id);
    for (const key of ["sourceForm","sourceMeaning","category"]) if (!isText(entry[key])) fail(at, `${key} is required`);
    if (!Array.isArray(entry.candidates)) { fail(at, "candidates must be an array"); continue; }
    if (!entry.editorial || !allowedReviewStatuses.has(entry.editorial.reviewStatus)) fail(at, "invalid editorial.reviewStatus");
    if (!entry.provenance || !Array.isArray(entry.provenance.sourceRefs)) fail(at, "provenance.sourceRefs must be an array");
    for (const ref of entry.provenance?.sourceRefs || []) if (!referenceIds.has(ref)) fail(at, `unknown source reference '${ref}'`);
    const candidateIds = new Set();
    for (const [j, candidate] of entry.candidates.entries()) {
      const ca = `${at}.candidates[${j}]`;
      if (!candidate || typeof candidate !== "object") { fail(ca, "must be an object"); continue; }
      if (!/^[a-z0-9][a-z0-9-]*$/.test(candidate.id || "")) fail(ca, "candidate id must be a stable lowercase slug");
      else if (candidateIds.has(candidate.id)) fail(ca, `duplicate candidate id '${candidate.id}' within entry`);
      else candidateIds.add(candidate.id);
      if (!isText(candidate.form)) fail(ca, "form is required");
      if (!allowedReviewStatuses.has(candidate.reviewStatus)) fail(ca, "invalid reviewStatus");
      if (!Array.isArray(candidate.comparativeEvidence)) fail(ca, "comparativeEvidence must be an array");
      for (const [k, evidence] of (candidate.comparativeEvidence || []).entries()) {
        const ea = `${ca}.comparativeEvidence[${k}]`;
        if (!allowedLanguages.has(evidence.language)) fail(ea, "unsupported language code");
        if (!isText(evidence.form)) fail(ea, "evidence form is required");
        if (!allowedRelationships.has(evidence.relationship)) fail(ea, "invalid evidence relationship");
        if (!allowedEvidenceStatuses.has(evidence.status)) fail(ea, "invalid evidence status");
        if (!Array.isArray(evidence.sourceRefs)) fail(ea, "sourceRefs must be an array");
        for (const ref of evidence.sourceRefs || []) if (!referenceIds.has(ref)) fail(ea, `unknown source reference '${ref}'`);
        if (evidence.status === "verified" && !(evidence.sourceRefs || []).length) fail(ea, "verified evidence requires at least one source reference");
        if (evidence.relationship === "cognate" && evidence.status === "verified" && !(evidence.sourceRefs || []).length) fail(ea, "verified cognate claims require citations");
      }
      if (candidate.reviewStatus === "verified" && !(candidate.provenance?.sourceRefs || []).length && !(candidate.comparativeEvidence || []).some(e => e.status === "verified" && e.sourceRefs.length)) {
        fail(ca, "verified candidate requires source references");
      }
      for (const ref of candidate.provenance?.sourceRefs || []) if (!referenceIds.has(ref)) fail(ca, `unknown source reference '${ref}'`);
    }
  }
  if (entries.length === 0) fail("entries", "must not be empty");
  if (errors.length) return { errors, warnings };
  return { errors, warnings, entryCount:entries.length, candidateCount:entries.reduce((n,e)=>n+e.candidates.length,0) };
}
function sourceForms(entry) {
  const values = [entry.sourceForm, entry.sourceEtymology?.form]
    .filter(isText)
    .flatMap(value => String(value).split(/\s*(?:\/|,|;|\|| ಅಥವಾ )\s*/u));
  return [...new Set(values.map(value => value.trim()).filter(value => value.length >= 2))];
}
function candidateOrigin(candidate) {
  const origins = (candidate.etymologyParts || []).map(part => part.etymology);
  if (candidate.viability === "coined" || origins.includes("coinage")) return "coined_from_dravidian";
  if (origins.includes("tadbhava")) return "tadbhava";
  if (origins.includes("dravidian") || origins.includes("native") || candidate.viability === "clean") return "verified_dravidian";
  if (candidate.comparativeEvidence.some(item => item.language === "proto-dravidian") || /native|dravidian|desi|core/i.test(candidate.note || "")) return "verified_dravidian";
  return "uncertain";
}
export function buildArtifacts({ entries, config }) {
  const buildId = stableHash(JSON.stringify({entries,config}));
  const shardSize = 50;
  const entryToShard = {};
  const shards = [];
  const artifacts = new Map();
  for (let i=0;i<entries.length;i+=shardSize) {
    const shardId = String(Math.floor(i/shardSize)+1).padStart(4,"0");
    const file = `shards/${shardId}.json`;
    const records = entries.slice(i,i+shardSize);
    records.forEach(entry => { entryToShard[entry.id] = shardId; });
    const content = JSON.stringify({schemaVersion:2,buildId,entries:records});
    const sha256 = stableHash(content);
    artifacts.set(`lexicon-dist/${file}`, content);
    shards.push({id:shardId,file,count:records.length,checksum:sha256});
  }
  const categoryIds = {};
  for (const entry of entries) (categoryIds[entry.category] ||= []).push(entry.id);
  const writingIndex = {
    schemaVersion:2,buildId,
    entries:entries.filter(entry => !entry.scope.noAlternative && !entry.scope.outsideTargetOrigin).map(entry => ({
      id:entry.id,sourceForms:sourceForms(entry),meaning:entry.sourceMeaning,
      candidates:entry.candidates.filter(c => c.form && !c.flags.noAlternative && !c.flags.outsideTargetOrigin).map(c => ({
        word:c.form,origin:candidateOrigin(c),note:c.note||"",
        proto:c.comparativeEvidence.find(e=>e.language==="proto-dravidian")?.form||"",
        tamil:c.comparativeEvidence.find(e=>e.language==="ta")?.form||"",
        tulu:c.comparativeEvidence.find(e=>e.language==="tcy")?.form||""
      }))
    }))
  };
  const searchContent = JSON.stringify(writingIndex);
  artifacts.set("lexicon-dist/writing-index.json",searchContent);
  const manifest = {
    schemaVersion:2,buildId,checksumAlgorithm:"fnv1a-64-utf16",entryCount:entries.length,candidateCount:entries.reduce((n,e)=>n+e.candidates.length,0),
    categoryIds,entryOrder:entries.map(entry=>entry.id),entryToShard,shards,writingIndex:"writing-index.json",
    etymologyLabels:config.etymologyLabels||{}
  };
  artifacts.set("lexicon-dist/manifest.json",JSON.stringify(manifest));
  return {buildId,manifest,artifacts};
}
export function validateSource() {
  const loaded = loadSource();
  return {...loaded,validation:validateLexicon(loaded)};
}
