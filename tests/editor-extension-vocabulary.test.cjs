const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  parseMarkdownRows,
  buildVocabularyIndex,
  parseVocabularyFile
} = require("../editorExtension/vocabulary-import.js");
const { AccagannadaTrie } = require("../editorExtension/trie_converter.js");

const root = path.join(__dirname, "..");
const source = fs.readFileSync(path.join(root, "newwords.txt"), "utf8");

test("parses all three source-table layouts without shifting empty cells", () => {
  const rows = parseMarkdownRows(source);
  assert.equal(rows.length, 4559);
  assert.equal(rows.filter(row => row.sourceFormat === "nuance").length, 2593);
  assert.equal(rows.filter(row => row.sourceFormat === "native-table").length, 1310);
  assert.equal(rows.filter(row => row.sourceFormat === "master-table").length, 656);
});

test("deduplicates repeated source forms and marks conflicting preferred alternatives", () => {
  const entries = buildVocabularyIndex(parseMarkdownRows(source));
  assert.equal(entries.length, 3974);
  assert.equal(entries.filter(entry => entry.ambiguous).length, 238);
  assert.ok(entries.every(entry => entry.primary && Array.isArray(entry.alternatives)));
  assert.ok(entries.filter(entry => entry.ambiguous).every(entry => entry.autoConvert === false));
});

test("keeps exact inflected forms rather than inventing a stripped root", () => {
  const entries = buildVocabularyIndex(parseMarkdownRows(source));
  const genitive = entries.find(entry => entry.inputWord === "ಪ್ರಜಾಪ್ರಭುತ್ವದ");
  assert.ok(genitive);
  assert.equal(genitive.primary, "ಮಂದಿಯಾಳ್ವಿಕೆಯ");
  assert.equal(genitive.autoConvert, true);
});

test("Markdown parser preserves blank columns and notes", () => {
  const input = [
    "| # | Input Word | Primary Accha Kannada | Alternative Native Options | Nuance / Usage Note |",
    "| --- | --- | --- | --- | --- |",
    "| 1 | ಮೂಲಪದ | ಹೊಸಪದ |  | usage note |"
  ].join("\n");
  const entries = parseVocabularyFile(input, "sample.md");
  assert.equal(entries.length, 1);
  assert.equal(entries[0].primary, "ಹೊಸಪದ");
  assert.deepEqual(entries[0].alternatives, []);
  assert.deepEqual(entries[0].notes, ["usage note"]);
});

test("CSV parser respects quoted commas and escaped quotes", () => {
  const input = 'Input Word,Primary,Alternatives,Note\n"ಮೂಲಪದ","ಹೊಸಪದ","ಪರ್ಯಾಯ, ಇನ್ನೊಂದು","ಅರ್ಥ ""ವಿವರ"""\n';
  const entries = parseVocabularyFile(input, "sample.csv");
  assert.equal(entries.length, 1);
  assert.deepEqual(entries[0].alternatives, ["ಪರ್ಯಾಯ", "ಇನ್ನೊಂದು"]);
  assert.equal(entries[0].notes[0], 'ಅರ್ಥ "ವಿವರ"');
});

test("JSON importer accepts nested phrases and roots", () => {
  const input = JSON.stringify({
    phrases: { "ಹಳೆಯ ಮಾತು": { primary: "ಹೊಸ ಮಾತು", alts: ["ಮತ್ತೊಂದು"] } },
    roots: { "ಮೂಲಪದ": { primary: "ಹೊಸಪದ", note: "ಸೂಚನೆ" } }
  });
  const entries = parseVocabularyFile(input, "dictionary.json");
  assert.equal(entries.length, 2);
  assert.ok(entries.some(entry => entry.inputWord === "ಹಳೆಯ ಮಾತು"));
  assert.ok(entries.some(entry => entry.inputWord === "ಮೂಲಪದ"));
});

test("converter uses longest exact phrase and leaves unknown and ambiguous forms unchanged", () => {
  const trie = new AccagannadaTrie();
  trie.loadDictionary({ entries: [
    { inputWord: "ಸುದ್ದಿ", primary: "ಹೊಸತು", autoConvert: true },
    { inputWord: "ಹೊಸ ಸುದ್ದಿ", primary: "ಹೊಸ ಬಿತ್ತಿ", autoConvert: true },
    { inputWord: "ಗೊಂದಲ", primary: "ತಿಕ್ಕಾಟ", ambiguous: true, autoConvert: false }
  ] });
  assert.equal(trie.convertText("ಹೊಸ ಸುದ್ದಿ ಬಂದಿದೆ."), "ಹೊಸ ಬಿತ್ತಿ ಬಂದಿದೆ.");
  assert.equal(trie.convertText("ಸುದ್ದಿ, ಗೊಂದಲ ಮತ್ತು ಅಪರಿಚಿತಪದ"), "ಹೊಸತು, ಗೊಂದಲ ಮತ್ತು ಅಪರಿಚಿತಪದ");
});


test("bundled extension dataset matches the source vocabulary build", () => {
  const dataset = JSON.parse(fs.readFileSync(path.join(root, "editorExtension/vocabulary.json"), "utf8"));
  assert.equal(dataset.stats.sourceRows, 4559);
  assert.equal(dataset.stats.uniqueForms, 3974);
  assert.equal(dataset.stats.autoConvertibleForms, 3736);
  assert.equal(dataset.stats.ambiguousForms, 238);
  assert.equal(dataset.stats.rootCandidates, 656);
  const rootCandidates = JSON.parse(fs.readFileSync(path.join(root, "editorExtension/root-candidates.json"), "utf8"));
  const morphology = JSON.parse(fs.readFileSync(path.join(root, "editorExtension/morphology-rules.json"), "utf8"));
  assert.equal(rootCandidates.length, 656);
  assert.deepEqual(morphology.approvedRootParadigms, []);
});

test("JSON export round-trip preserves ambiguity and usage notes", () => {
  const exported = {
    schemaVersion: 2,
    entries: [{
      inputWord: "ಪರೀಕ್ಷಾಪದ",
      primary: "ಪರೀಕ್ಷೆಯ ಪದ",
      alternatives: ["ಇನ್ನೊಂದು ಪದ"],
      notes: ["ಸಂದರ್ಭದ ಸೂಚನೆ"],
      ambiguous: true,
      autoConvert: false
    }]
  };
  const imported = parseVocabularyFile(JSON.stringify(exported), "roundtrip.json");
  assert.equal(imported.length, 1);
  assert.equal(imported[0].autoConvert, false);
  assert.equal(imported[0].ambiguous, true);
  assert.deepEqual(imported[0].notes, ["ಸಂದರ್ಭದ ಸೂಚನೆ"]);
});


test("real vocabulary entries convert exactly while conflicting entries stay unchanged", () => {
  const index = JSON.parse(fs.readFileSync(path.join(root, "editorExtension/vocabulary.json"), "utf8"));
  const tuples = index.shards.flatMap(file => JSON.parse(fs.readFileSync(path.join(root, "editorExtension", file), "utf8")));
  const entries = tuples.map(tuple => ({
    inputWord: tuple[0], primary: tuple[1], alternatives: tuple[2],
    notes: tuple[3], ambiguous: Boolean(tuple[4]), autoConvert: !Boolean(tuple[4])
  }));
  const trie = new AccagannadaTrie();
  trie.loadDictionary({ entries });
  assert.equal(trie.convertText("ಪ್ರಜಾಪ್ರಭುತ್ವದ"), "ಮಂದಿಯಾಳ್ವಿಕೆಯ");
  assert.equal(trie.convertText("ಅಂತಃಪ್ರಜ್ಞೆಯನ್ನು"), "ಒಳ್ತಿಳುವಳಿಕೆಯನ್ನು");
  assert.equal(trie.convertText("ಸಹಭಾಗಿತ್ವ"), "ಸಹಭಾಗಿತ್ವ");
  assert.equal(trie.convertText("ಅಪರಿಚಿತ ಪದ"), "ಅಪರಿಚಿತ ಪದ");
});
