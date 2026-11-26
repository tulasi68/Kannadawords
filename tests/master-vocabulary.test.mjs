import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const vocabulary = JSON.parse(fs.readFileSync(path.join(root, "master-vocabulary.json"), "utf8"));

test("master vocabulary export has a consistent, compact schema", () => {
  assert.equal(vocabulary.schemaVersion, 1);
  assert.equal(vocabulary.entryCount, vocabulary.entries.length);
  assert.ok(vocabulary.entries.length > 0);
  for (const entry of vocabulary.entries) {
    assert.deepEqual(Object.keys(entry).sort(), ["alternatives", "meaning", "word"]);
    assert.equal(typeof entry.word, "string");
    assert.ok(entry.word.length > 0);
    assert.equal(typeof entry.meaning, "string");
    assert.ok(Array.isArray(entry.alternatives));
    assert.ok(entry.alternatives.length > 0);
    assert.ok(entry.alternatives.every(value => typeof value === "string" && value.length > 0));
    assert.equal(new Set(entry.alternatives).size, entry.alternatives.length);
  }
});

test("master vocabulary export has no duplicate source words", () => {
  const words = vocabulary.entries.map(entry => entry.word);
  assert.equal(new Set(words).size, words.length);
});

test("master vocabulary export contains no per-record audit metadata", () => {
  const forbidden = /"(?:source|sourceFile|sourceLine|sourceBlobSha|status|reviewStatus|editorial|provenance|sourceRefs|sourceDatasets|reviewedBy|reviewedAt)"\s*:/i;
  assert.equal(forbidden.test(JSON.stringify(vocabulary)), false);
});


test("master vocabulary retains all alternatives from MergedMasterCopy_10000.csv", () => {
  const byWord = new Map(vocabulary.entries.map(entry => [entry.word, entry]));
  const repeat = byWord.get("ಪುನರುಚ್ಛರಿಸು");
  assert.ok(repeat, "CSV source word is present");
  assert.ok(repeat.alternatives.includes("ಮತ್ತೆ ಹೇಳು"));
  assert.ok(repeat.alternatives.includes("ಮರಳಿ ನುಡಿ"));

  const repeatNoun = byWord.get("ಪುನರುಚ್ಛಾರ");
  assert.ok(repeatNoun, "CSV source noun is present");
  assert.ok(repeatNoun.alternatives.includes("ಮತ್ತೆ ಹೇಳುವಿಕೆ"));
  assert.ok(repeatNoun.alternatives.includes("ಮರುನುಡಿ"));
});

test("multi-option source entries retain every distinct Kannada choice", () => {
  const tree = vocabulary.entries.find(entry => entry.word === "ವೃಕ್ಷ");
  assert.ok(tree);
  assert.ok(tree.alternatives.includes("ಮರ"));
  assert.ok(tree.alternatives.includes("ಗಿಡ"));
});

test("combined source labels and their individual forms are retained", () => {
  const byWord = new Map(vocabulary.entries.map(entry => [entry.word, entry]));
  for (const word of ["ಸರ್ಪ / ನಾಗ", "ಸರ್ಪ", "ನಾಗ"]) {
    const entry = byWord.get(word);
    assert.ok(entry, word + " is present");
    assert.ok(entry.alternatives.includes("ಹಾವು"));
  }
});
