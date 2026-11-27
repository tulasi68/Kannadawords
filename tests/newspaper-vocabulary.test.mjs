import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const batch = JSON.parse(fs.readFileSync(path.join(root, "newspaper-vocabulary.json"), "utf8"));

test("newspaper batch has one record per distinct source word", () => {
  assert.equal(batch.schemaVersion, 1);
  assert.equal(batch.sourceFile, "moreKannadawords_newspapers1.csv");
  assert.equal(batch.entryCount, batch.entries.length);
  const words = batch.entries.map(row => row.word.normalize("NFC").trim());
  assert.equal(new Set(words).size, words.length);
  assert.ok(batch.entries.length > 0);
});

test("newspaper proposals retain source rows and remain unreviewed", () => {
  for (const row of batch.entries) {
    assert.ok(row.word.trim());
    assert.ok(Array.isArray(row.sourceRows) && row.sourceRows.length > 0);
    assert.equal(row.reviewStatus, "needs_review");
    assert.ok(Array.isArray(row.alternatives));
    assert.equal(new Set(row.alternatives).size, row.alternatives.length);
    assert.ok(row.alternatives.every(word => word && word !== row.word));
  }
});
