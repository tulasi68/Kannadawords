import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const importer = require("../language-engine/vocabulary-import.js");

test("parses legacy JSON maps without approving imported alternatives", () => {
  const result = importer.parseVocabularyFile({
    name: "words.json",
    content: JSON.stringify({ "ಪರೀಕ್ಷೆ": "ಒರೆ", "ಅನು": ["ಮರು", "ಮತ್ತೆ"] })
  });
  assert.equal(result.report.proposedSources, 2);
  assert.equal(result.report.proposedCandidates, 3);
  assert.equal(result.entries[0].status, "proposed");
  assert.equal(result.entries[0].editorial.reviewStatus, "proposed");
  assert.equal(result.safety.modifiesCanonicalLexicon, false);
});

test("supports JSON arrays of objects and pair arrays", () => {
  const result = importer.parseVocabularyFile({
    name: "words.json",
    content: JSON.stringify([
      { sourceWord: "ಪದ", nativeWords: ["ನುಡಿ", "ಮಾತು"] },
      ["ಮನೆ", "ಇಲ್ಲ"]
    ])
  });
  assert.equal(result.report.proposedSources, 2);
  assert.deepEqual(result.entries[0].candidates.map(item => item.form), ["ನುಡಿ", "ಮಾತು"]);
});

test("parses quoted CSV fields containing commas and escaped quotes", () => {
  const result = importer.parseVocabularyFile({
    name: "words.csv",
    content: 'sourceForm,candidateForms,note\r\n"ಪದ, ರೂಪ","ಮಾತು, ನುಡಿ","quoted ""note"""'
  });
  assert.equal(result.entries.length, 1);
  assert.equal(result.entries[0].sourceForm, "ಪದ, ರೂಪ");
  assert.equal(result.entries[0].candidates[0].form, "ಮಾತು, ನುಡಿ");
});

test("detects TSV and supports a simple headerless two-column file", () => {
  const result = importer.parseVocabularyFile({
    name: "words.tsv",
    content: "ಪರೀಕ್ಷೆ\tಒರೆ\r\nಮನೆ\tಇಲ್ಲ"
  });
  assert.equal(result.report.proposedSources, 2);
});

test("merges repeated source rows without losing distinct alternatives", () => {
  const result = importer.parseVocabularyFile({
    name: "words.csv",
    content: "source,native\nಪದ,ನುಡಿ\nಪದ,ಮಾತು\nಪದ,ನುಡಿ"
  });
  assert.equal(result.entries.length, 1);
  assert.deepEqual(result.entries[0].candidates.map(item => item.form), ["ನುಡಿ", "ಮಾತು"]);
  assert.deepEqual(result.entries[0].provenance.sourceRows, [2, 3, 4]);
  assert.equal(result.report.duplicateSourceRowsMerged, 2);
});

test("reports malformed rows without discarding valid rows", () => {
  const result = importer.parseVocabularyFile({
    name: "words.txt",
    content: "ಪದ\tನುಡಿ\n\tಖಾಲಿ\nಮನೆ\tಇಲ್ಲ"
  });
  assert.equal(result.report.proposedSources, 2);
  assert.equal(result.report.rejectedRows, 1);
});

test("rejects malformed JSON, unsupported extensions and unterminated CSV quotes", () => {
  assert.throws(() => importer.parseVocabularyFile({ name: "words.json", content: "{" }), /Invalid JSON/u);
  assert.throws(() => importer.parseVocabularyFile({ name: "words.exe", content: "" }), /Unsupported file type/u);
  assert.throws(() => importer.parseVocabularyFile({ name: "words.csv", content: '"ಪದ,ನುಡಿ' }), /unterminated quoted field/u);
});

test("normalizes Unicode and rejects control characters", () => {
  const result = importer.parseVocabularyFile({
    name: "words.tsv",
    content: "ಪದ\u0001\tನುಡಿ\nಮನೆ\tಇಲ್ಲ"
  });
  assert.equal(result.report.rejectedRows, 1);
  assert.equal(result.entries[0].sourceForm, "ಮನೆ");
});

test("never mutates the caller's dictionary or persists imported data", () => {
  const existing = { ಪದ: "ನುಡಿ" };
  const before = JSON.stringify(existing);
  const result = importer.parseVocabularyFile({ name: "new.csv", content: "ಮನೆ,ಇಲ್ಲ" });
  assert.equal(JSON.stringify(existing), before);
  assert.equal(result.safety.writesToStorage, false);
});
