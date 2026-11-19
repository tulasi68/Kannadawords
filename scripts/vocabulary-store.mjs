#!/usr/bin/env node
/**
 * KannadaWords canonical vocabulary store tools.
 * No dependencies; Node.js 18+.
 *
 * Commands:
 *   node scripts/vocabulary-store.mjs validate
 *   node scripts/vocabulary-store.mjs count
 *   node scripts/vocabulary-store.mjs build
 *
 * Input: vocabulary/entries.jsonl (one JSON object per line).
 * Output: generated/vocabulary/* (disposable build artifacts).
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = process.cwd();
const INPUT = path.join(ROOT, "vocabulary", "entries.jsonl");
const OUT = path.join(ROOT, "generated", "vocabulary");
const SHARD_COUNT = 64;
const VALID_RECOGNITION = new Set(["verified", "provisional", "proposal", "rejected"]);
const VALID_EDITORIAL = new Set(["reviewed", "needs_review", "legacy_unreviewed"]);

function norm(value) { return String(value ?? "").normalize("NFC").replace(/\s+/gu, " ").trim(); }
function readEntries() {
  if (!fs.existsSync(INPUT)) throw new Error(`Missing canonical store: ${path.relative(ROOT, INPUT)}`);
  const lines = fs.readFileSync(INPUT, "utf8").split(/\r?\n/u);
  const entries = [];
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    try { entries.push(JSON.parse(lines[i])); }
    catch (e) { throw new Error(`Invalid JSON at ${path.relative(ROOT, INPUT)}:${i + 1}: ${e.message}`); }
  }
  return entries;
}
function validate(entries) {
  const errors = [], ids = new Map(), sources = new Map(), lookup = new Map();
  const add = (msg) => errors.push(msg);
  for (const [i, e] of entries.entries()) {
    const where = `record ${i + 1}`;
    if (!e || typeof e !== "object" || Array.isArray(e)) { add(`${where}: expected an object`); continue; }
    if (!e.id || typeof e.id !== "string") add(`${where}: missing string id`);
    else if (ids.has(e.id)) add(`${where}: duplicate id "${e.id}" (also record ${ids.get(e.id)})`);
    else ids.set(e.id, i + 1);
    if (!norm(e.source)) add(`${where}: missing source`);
    if (!Array.isArray(e.sourceForms) || !e.sourceForms.length) add(`${where}: sourceForms must be a non-empty array`);
    if (typeof e.meaning !== "string") add(`${where}: meaning must be a string`);
    if (!Array.isArray(e.alternatives)) add(`${where}: alternatives must be an array`);
    if (!VALID_RECOGNITION.has(e.recognitionStatus)) add(`${where}: invalid recognitionStatus`);
    if (!VALID_EDITORIAL.has(e.editorialStatus)) add(`${where}: invalid editorialStatus`);
    const forms = [e.source, ...(Array.isArray(e.sourceForms) ? e.sourceForms : [])].map(norm).filter(Boolean);
    for (const f of new Set(forms)) {
      if (sources.has(f) && sources.get(f) !== e.id) add(`${where}: duplicate source headword/form "${f}" also belongs to ${sources.get(f)}`);
      else sources.set(f, e.id);
      if (e.recognitionStatus === "verified") {
        if (lookup.has(f) && lookup.get(f) !== e.id) add(`${where}: lookup collision "${f}"`);
        else lookup.set(f, e.id);
      }
    }
    for (const [j, alt] of (Array.isArray(e.alternatives) ? e.alternatives : []).entries()) {
      if (!alt || !norm(alt.word)) add(`${where}: alternative ${j + 1} has no word`);
      if (alt?.status && !["verified", "provisional", "proposal"].includes(alt.status)) add(`${where}: alternative ${j + 1} has invalid status`);
    }
  }
  // A replacement is not allowed to become a lookup key just because it appears as an alternative.
  return { errors, uniqueHeadwords: sources.size, verifiedLookupForms: lookup.size, ids: ids.size };
}
function hash(text) { return crypto.createHash("sha256").update(text).digest("hex"); }
function shardFor(id) { return parseInt(hash(id).slice(0, 8), 16) % SHARD_COUNT; }
function writeJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(value) + "\n", "utf8");
}
function build(entries, stats) {
  fs.rmSync(OUT, { recursive: true, force: true });
  const shards = Array.from({ length: SHARD_COUNT }, () => []);
  const lookup = {};
  const search = [];
  for (const e of entries) {
    const shard = shardFor(e.id);
    shards[shard].push(e);
    const forms = [...new Set([e.source, ...(e.sourceForms || [])].map(norm).filter(Boolean))];
    if (e.recognitionStatus === "verified") {
      for (const form of forms) {
        if (!lookup[form]) lookup[form] = [];
        lookup[form].push({ id: e.id, shard });
      }
    }
    search.push({
      id: e.id, source: e.source, sourceForms: forms, meaning: e.meaning || "",
      alternatives: (e.alternatives || []).map(a => a.word).filter(Boolean),
      recognitionStatus: e.recognitionStatus, editorialStatus: e.editorialStatus
    });
  }
  const shardManifest = [];
  shards.forEach((records, i) => {
    if (!records.length) return;
    const name = `shards/${String(i).padStart(2, "0")}.json`;
    const body = JSON.stringify(records) + "\n";
    fs.mkdirSync(path.join(OUT, "shards"), { recursive: true });
    fs.writeFileSync(path.join(OUT, name), body, "utf8");
    shardManifest.push({ file: name, records: records.length, sha256: hash(body) });
  });
  writeJson(path.join(OUT, "lookup-index.json"), lookup);
  writeJson(path.join(OUT, "search-index.json"), search);
  writeJson(path.join(OUT, "manifest.json"), {
    schemaVersion: "1.0.0", generatedAt: null, deterministic: true,
    counts: { records: entries.length, uniqueHeadwords: stats.uniqueHeadwords,
      verifiedLookupForms: stats.verifiedLookupForms,
      verifiedEntries: entries.filter(e => e.recognitionStatus === "verified").length,
      provisionalEntries: entries.filter(e => e.recognitionStatus === "provisional").length,
      proposalEntries: entries.filter(e => e.recognitionStatus === "proposal").length },
    shardCount: SHARD_COUNT, shards: shardManifest,
    lookupIndex: "lookup-index.json", searchIndex: "search-index.json"
  });
}
const command = process.argv[2] || "help";
if (!["validate", "count", "build"].includes(command)) {
  console.log("Usage: node scripts/vocabulary-store.mjs <validate|count|build>");
  process.exit(command === "help" ? 0 : 2);
}
const entries = readEntries();
const stats = validate(entries);
if (stats.errors.length) {
  console.error(stats.errors.join("\n"));
  process.exit(1);
}
if (command === "validate") console.log(`Valid: ${entries.length} records; ${stats.uniqueHeadwords} unique source headwords; ${stats.verifiedLookupForms} verified lookup forms.`);
if (command === "count") console.log(JSON.stringify(stats, null, 2));
if (command === "build") {
  build(entries, stats);
  console.log(`Built ${entries.length} records into ${OUT}; ${stats.verifiedLookupForms} verified lookup forms.`);
}
