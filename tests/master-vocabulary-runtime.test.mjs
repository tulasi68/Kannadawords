import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const store = fs.readFileSync(path.join(root, "lexicon-store.js"), "utf8");

test("Tab 1 consumes the generated consolidated master vocabulary", () => {
  assert.match(app, /fetch\("\.\/master-vocabulary\.json"/);
  assert.match(app, /mergedVocabularyData\.schemaVersion !== 1/);
  assert.match(app, /mergedMasterEntries/);
  assert.match(app, /\.\.\.mergedMasterEntries/);
  assert.match(app, /Public Signboards/);
});

test("Tab 4 consumes the same consolidated master vocabulary", () => {
  assert.match(store, /new URL\("\.\.\/master-vocabulary\.json", base\)/);
  assert.match(store, /buildMergedMasterWritingIndex\(mergedData\)/);
  assert.match(store, /\.\.\.rootFamilies, \.\.\.mergedMaster/);
  assert.match(store, /reviewStatus:"needs_review"/);
});
