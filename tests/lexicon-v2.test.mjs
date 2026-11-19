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
  assert.equal(result.entryCount, 450);
  assert.equal(result.candidateCount, 962);
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

test("generated runtime artifacts are reproducible and current", () => {
  const loaded = loadSource();
  const built = buildArtifacts(loaded);
  for (const [relative,expected] of built.artifacts) {
    assert.equal(read(relative),expected,`stale generated artifact: ${relative}`);
  }
  const manifest = readJson("lexicon-dist/manifest.json");
  assert.equal(manifest.buildId,built.buildId);
  assert.equal(manifest.entryCount,450);
  assert.equal(manifest.entryOrder.length,450);
  assert.equal(manifest.shards.length,9);
});

test("canonical-to-display adapter preserves all existing user-visible vocabulary fields", () => {
  const loaded = loadSource();
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
    }
  }
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
  assert.equal(manifest.entryCount,450);
  assert.equal(store.getCategoryCount("Abstract"),48);
  const page = await store.loadPage("all",0,20);
  assert.equal(page.entries.length,20);
  assert.equal(page.total,450);
  assert.equal(page.entries[0].id,loaded.entries[0].id);
  const categoryPage = await store.loadPage("Abstract",0,20);
  assert.equal(categoryPage.entries.length,20);
  assert.ok(categoryPage.entries.every(entry=>entry.category==="Abstract"));
  const suggestions = store.searchAchchaLexicon("ಕ್ಷೀರ");
  assert.ok(suggestions.some(entry=>entry.sourceForms.includes("ಕ್ಷೀರ") && entry.candidates.some(candidate=>candidate.word==="ಹಾಲು")));
});
