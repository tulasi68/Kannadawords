import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { loadSource, validateLexicon, buildArtifacts } from "../scripts/lexicon-lib.mjs";

const root = process.cwd();
const read = file => fs.readFileSync(path.join(root,file),"utf8");
const readJson = file => JSON.parse(read(file));

test("canonical source validates with stable entry and per-entry candidate identity", () => {
  const loaded = loadSource();
  const result = validateLexicon(loaded);
  assert.deepEqual(result.errors, []);
  assert.equal(result.entryCount, loaded.entries.length);
  assert.equal(result.candidateCount, loaded.entries.reduce((n,entry)=>n+entry.candidates.length,0));
  assert.equal(new Set(loaded.entries.map(entry=>entry.id)).size, loaded.entries.length);
  for (const entry of loaded.entries) {
    assert.equal(new Set(entry.candidates.map(candidate=>candidate.id)).size, entry.candidates.length);
  }
});

test("schema declares JSON Schema 2020-12 and the canonical required fields", () => {
  const schema = readJson("lexicon-source/schema/lexicon.schema.json");
  assert.equal(schema.$schema,"https://json-schema.org/draft/2020-12/schema");
  assert.ok(schema.required.includes("schemaVersion"));
  assert.ok(schema.$defs.entry.required.includes("id"));
  assert.ok(schema.$defs.entry.required.includes("sourceForm"));
  assert.ok(schema.$defs.entry.required.includes("candidates"));
  assert.ok(schema.$defs.candidate.required.includes("comparativeEvidence"));
  assert.ok(schema.$defs.candidate.properties.originClassification.enum.includes("verified_dravidian"));
  assert.ok(schema.$defs.entry.properties.sourceAliases);
  assert.equal(schema.$defs.entry.properties.sourceEtymology.oneOf.some(item=>item.type==="array"),true);
});

test("verified comparative evidence cannot be accepted without a source reference", () => {
  const loaded = loadSource();
  const entries = structuredClone(loaded.entries);
  entries[0].candidates[0].comparativeEvidence.push({
    language:"ta",form:"சோதனை",relationship:"cognate",status:"verified",sourceRefs:[]
  });
  const result = validateLexicon({...loaded,entries});
  assert.ok(result.errors.some(error=>error.includes("verified evidence requires at least one source reference")));
});

test("initial import does not promote unreviewed content to verified evidence", () => {
  const baseline = readJson("migration/v2-import-snapshot.json");
  for (const entry of baseline.entries) {
    assert.equal(entry.editorial.reviewStatus,"needs_review");
    for (const candidate of entry.candidates) {
      assert.equal(candidate.candidateKind,"unclassified");
      assert.equal(candidate.reviewStatus,"needs_review");
      for (const evidence of candidate.comparativeEvidence) {
        assert.equal(evidence.relationship,"unclassified");
        assert.equal(evidence.status,"not_assessed");
        assert.deepEqual(evidence.sourceRefs,[]);
      }
    }
  }
});

test("generated runtime artifacts are reproducible and current", () => {
  const loaded = loadSource();
  const built = buildArtifacts(loaded);
  for (const [relative,expected] of built.artifacts) {
    assert.equal(read(relative),expected,`stale generated artifact: ${relative}`);
  }
  const manifest = readJson("lexicon-dist/manifest.json");
  assert.equal(manifest.buildId,built.buildId);
  assert.equal(manifest.entryCount,loaded.entries.length);
  assert.equal(manifest.entryOrder.length,loaded.entries.length);
  assert.equal(manifest.shards.reduce((n,shard)=>n+shard.count,0),loaded.entries.length);
});

test("canonical-to-display adapter preserves all existing user-visible vocabulary fields", () => {
  const baseline = readJson("migration/v2-import-snapshot.json");
  const loaded = {entries:baseline.entries};
  const legacy = readJson("migration/legacy-v1-snapshot.json");
  const sandbox = {window:{}};
  vm.runInNewContext(read("lexicon-display-adapter.js"),sandbox);
  const adapter = sandbox.window.KannadaLexiconDisplayAdapter;
  assert.equal(loaded.entries.length,legacy.entries.length);
  const oldById = new Map(legacy.entries.map(entry=>[entry.id,entry]));
  for (const canonical of loaded.entries) {
    const old = oldById.get(canonical.id);
    assert.ok(old,`missing legacy entry ${canonical.id}`);
    const display = adapter.toDisplayEntry(canonical);
    assert.equal(display.sanskrit,old.sanskrit || old.sourceForm);
    assert.equal(display.meaning,old.meaning || old.sourceMeaning);
    assert.equal(display.category,old.category);
    assert.deepEqual(JSON.parse(JSON.stringify(display.sourceEtymology ?? null)),old.sourceEtymology ?? null);
    assert.equal(display.halegannada || null,old.halegannada || null);
    assert.deepEqual(JSON.parse(JSON.stringify(display.halegannadaEvidence || null)),old.halegannadaEvidence || null);
    assert.deepEqual(JSON.parse(JSON.stringify(display.halegannadaVariants || [])),old.halegannadaVariants || []);
    assert.equal(display.scopeNote || "",old.scopeNote || "");
    assert.equal(display.sourceDataset || null,old.sourceDataset || null);
    assert.deepEqual(JSON.parse(JSON.stringify(display.sources || [])),old.sources || []);
    assert.equal(!!display.noAlternative,!!old.noAlternative);
    assert.equal(!!display.scopeAudit,!!old.scopeAudit);
    assert.deepEqual(JSON.parse(JSON.stringify(display.rejectedAlternatives || [])),old.rejectedAlternatives || []);
    assert.equal(display.editorialNote || "",old.editorialNote || "");
    assert.equal(display.alternatives.length,old.alternatives.length);
    for (let i=0;i<old.alternatives.length;i++) {
      const a=old.alternatives[i],b=display.alternatives[i];
      for (const key of ["id"]) assert.equal(b[key],a[key]);
      assert.equal(b.word,a.word);
      assert.equal(b.note || "",a.note || "");
      assert.deepEqual(JSON.parse(JSON.stringify(b.etymologyParts || [])),a.etymologyParts || []);
      assert.equal(b.viability || null,a.viability || null);
      for (const key of ["tamil","tulu","proto"]) assert.equal(b[key] || null,a[key] || null);
      assert.deepEqual(JSON.parse(JSON.stringify(b.evidenceVariants || {})),a.evidenceVariants || {});
      assert.equal(!!b.isNoAlternative,!!a.isNoAlternative);
      assert.equal(!!b.isScopeAudit,!!a.isScopeAudit);
      assert.equal(b.editorialNote || "",a.editorialNote || "");
      assert.equal(b.sourceDataset || null,a.sourceDataset || null);
      assert.deepEqual(JSON.parse(JSON.stringify(b.sources || [])),a.sources || []);
    }
  }
});

test("writing index keeps unreviewed candidates uncertain and honours explicit aliases", () => {
  const loaded = loadSource();
  const entry = structuredClone(loaded.entries[0]);
  entry.sourceForm = "form-one / form-two";
  entry.sourceAliases = ["curated-alias"];
  const candidate = entry.candidates[0];
  candidate.reviewStatus = "needs_review";
  candidate.note = "Native Dravidian core";
  candidate.viability = "clean";
  candidate.etymologyParts = [{form:candidate.form,etymology:"dravidian"}];
  candidate.comparativeEvidence = [{language:"proto-dravidian",form:"*test",relationship:"unclassified",status:"not_assessed",sourceRefs:[]}];
  let built = buildArtifacts({entries:[entry],config:loaded.config,references:loaded.references});
  let index = JSON.parse(built.artifacts.get("lexicon-dist/writing-index.json"));
  assert.ok(index.entries.some(row=>row.sourceForms.includes("form-one / form-two")));
  assert.ok(index.entries.some(row=>row.sourceForms.includes("curated-alias")));
  entry.sourceEtymology = [{form:"historic-form",etymology:"unknown"}];
  built = buildArtifacts({entries:[entry],config:loaded.config,references:loaded.references});
  index = JSON.parse(built.artifacts.get("lexicon-dist/writing-index.json"));
  assert.ok(index.entries.some(row=>row.sourceForms.includes("historic-form")));
  assert.ok(!index.entries.some(row=>row.sourceForms.includes("form-one")));
  assert.equal(index.entries.find(row=>row.sourceForms.includes("form-one / form-two")).candidates[0].origin,"uncertain");
  candidate.reviewStatus = "verified";
  candidate.originClassification = "verified_dravidian";
  built = buildArtifacts({entries:[entry],config:loaded.config,references:loaded.references});
  index = JSON.parse(built.artifacts.get("lexicon-dist/writing-index.json"));
  assert.equal(index.entries.find(row=>row.sourceForms.includes("form-one / form-two")).candidates[0].origin,"verified_dravidian");
});

test("lazy browser store loads one page, category totals and writing suggestions", async () => {
  const loaded = loadSource();
  const built = buildArtifacts(loaded);
  const artifactMap = new Map(built.artifacts);
  const sandbox = {
    window:{},
    document:{currentScript:{src:"https://example.test/kannadawords/lexicon-store.js"}},
    URL,
    fetch:async input=>{
      const url = new URL(String(input));
      const relative = "lexicon-dist/" + url.pathname.split("/lexicon-dist/")[1];
      const raw = artifactMap.get(relative);
      if (raw === undefined) return {ok:false,status:404};
      return {
        ok:true,status:200,
        json:async()=>JSON.parse(raw),
        text:async()=>raw
      };
    }
  };
  vm.runInNewContext(read("lexicon-display-adapter.js"),sandbox);
  vm.runInNewContext(read("lexicon-store.js"),sandbox);
  const store = sandbox.window.KannadaLexiconStore;
  const manifest = await store.ready();
  assert.equal(manifest.entryCount,loaded.entries.length);
  assert.ok(store.getCategoryCount("Abstract") > 0);
  const page = await store.loadPage("all",0,20);
  assert.equal(page.entries.length,20);
  assert.equal(page.total,manifest.entryCount);
  assert.equal(page.entries[0].id,loaded.entries[0].id);
  const categoryPage = await store.loadPage("Abstract",0,20);
  assert.equal(categoryPage.entries.length,20);
  assert.ok(categoryPage.entries.every(entry=>entry.category==="Abstract"));
  const suggestions = store.searchAchchaLexicon("ಕ್ಷೀರ");
  assert.ok(suggestions.some(entry=>entry.sourceForms.includes("ಕ್ಷೀರ") && entry.candidates.some(candidate=>candidate.word==="ಹಾಲು")));
});


test("all 500 contributor records have canonical mappings and 187 are distinct imports",()=>{const x=readJson("migration/contributor-source-inventory.json"),e=loadSource().entries;assert.equal(x.records.length,500);assert.equal(x.records.filter(r=>r.mappingStatus==="imported").length,187);for(const r of x.records.filter(r=>r.mappingStatus==="imported"))assert.ok(e.some(v=>v.id===r.sourceId));});
test("writing index preserves North and Answer as separate senses of ಉತ್ತರ",()=>{const x=JSON.parse(buildArtifacts(loadSource()).artifacts.get("lexicon-dist/writing-index.json")),rows=x.entries.filter(r=>r.sourceForms.includes("ಉತ್ತರ"));assert.ok(rows.some(r=>r.meaning==="North"&&r.candidates.some(c=>c.word==="ಬಡಗಣ")));assert.ok(rows.some(r=>r.meaning==="Answer"));assert.ok(rows.every(r=>r.entryId&&r.senseKey));});
test("Kannada comparative evidence and not-found status validate",()=>{const x=loadSource(),e=structuredClone(x.entries);e[0].candidates[0].comparativeEvidence.push({language:"kn",form:"ಕನ್ನಡ ರೂಪ",relationship:"attested_form",status:"not_found",sourceRefs:[]});assert.deepEqual(validateLexicon({...x,entries:e}).errors,[]);});
test("generator version participates in manifest, index and shard identity",()=>{const x=buildArtifacts(loadSource()),i=JSON.parse(x.artifacts.get("lexicon-dist/writing-index.json"));assert.equal(x.manifest.generatorVersion,"2.1.0");assert.equal(i.generatorVersion,x.manifest.generatorVersion);for(const s of x.manifest.shards){const d=JSON.parse(x.artifacts.get("lexicon-dist/"+s.file));assert.equal(d.generatorVersion,x.manifest.generatorVersion);assert.equal(d.buildId,x.manifest.buildId);}});
