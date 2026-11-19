const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

test("index loads all editorial inputs before the display-data boundary and app", () => {
  const html = read("index.html");
  const ordered = [
    'src="data.js"',
    'src="etymology-entries.js"',
    'src="contributor-equivalents.js',
    'src="lexicon-model.js',
    'src="lexicon-data.js',
    'src="app.js'
  ];
  let previous = -1;
  for (const marker of ordered) {
    const position = html.indexOf(marker);
    assert.notEqual(position, -1, `Missing script: ${marker}`);
    assert.ok(position > previous, `${marker} must load after the preceding dependency`);
    previous = position;
  }
});

test("vocabulary display collection is defined only in lexicon-data.js", () => {
  const data = read("lexicon-data.js");
  const app = read("app.js");
  assert.match(data, /const votingEntries\s*=/);
  assert.doesNotMatch(app, /const votingEntries\s*=/);
  assert.match(app, /votingEntries\.filter/);
});

test("app does not perform legacy-source assembly", () => {
  const app = read("app.js");
  assert.doesNotMatch(app, /auditedWordEntries|originAuditEntries|contributorWordEntries|wordEntries\.map/);
});


test("assembled display dataset has one record per stable entry ID", () => {
  const inputs = [
    "data.js",
    "sentence-examples.js",
    "contextual-examples.js",
    "etymology-entries.js",
    "contributor-equivalents.js",
    "dravidian-research-batch.js",
    "dravidian-research-batch-2.js",
    "coinage-review.js",
    "lexicon-model.js",
    "lexicon-data.js"
  ];
  const source = inputs.map(read).join("\\n\\n") + "\\nvotingEntries;";
  const entries = vm.runInNewContext(source, {});
  const ids = entries.map(entry => entry.id);
  assert.ok(ids.every(id => typeof id === "string" && id.trim()), "every display entry needs a stable ID");
  assert.equal(new Set(ids).size, ids.length, "entry IDs must be unique in the UI dataset");
});

test("duplicate source rows enrich one candidate instead of creating duplicate cards", () => {
  const inputs = [
    "data.js", "sentence-examples.js", "contextual-examples.js",
    "etymology-entries.js", "contributor-equivalents.js",
    "dravidian-research-batch.js", "dravidian-research-batch-2.js",
    "coinage-review.js", "lexicon-model.js", "lexicon-data.js"
  ];
  const entries = vm.runInNewContext(inputs.map(read).join("\\n\\n") + "\\nvotingEntries;", {});
  const medicine = entries.find(entry => entry.id === "medicine");
  const madda = medicine.alternatives.find(candidate => candidate.word === "ಮದ್ದು");
  assert.equal(madda.tamil, "மருந்து (maruntu)");
  assert.equal(madda.tulu, "ಮರ್ದ್");
  assert.equal(madda.proto, "*maruntu");
});
