const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

test("runtime loads the canonical lexicon before the app and not legacy vocabulary sources", () => {
  const html = read("index.html");
  const forbidden = [
    'src="data.js"',
    'src="etymology-entries.js"',
    'src="contributor-equivalents.js',
    'src="dravidian-research-batch.js',
    'src="dravidian-research-batch-2.js',
    'src="lexicon-model.js'
  ];
  for (const marker of forbidden) assert.ok(!html.includes(marker), `Legacy runtime source still loaded: ${marker}`);
  const data = html.indexOf('src="lexicon-data.js');
  const app = html.indexOf('src="app.js');
  assert.ok(data >= 0 && app > data, "canonical lexicon must load before app.js");
});

test("lexicon-data.js is the sole vocabulary content source consumed by app.js", () => {
  const data = read("lexicon-data.js");
  const app = read("app.js");
  assert.match(data, /const KANNADA_LEXICON\s*=/);
  assert.match(data, /const votingEntries\s*=\s*KANNADA_LEXICON\.entries/);
  assert.doesNotMatch(app, /auditedWordEntries|originAuditEntries|contributorWordEntries|wordEntries\.map/);
  assert.match(app, /votingEntries\.filter/);
});

test("canonical runtime entries have unique, non-empty stable IDs", () => {
  const lexicon = vm.runInNewContext(read("lexicon-data.js") + "\nKANNADA_LEXICON;", {});
  const ids = lexicon.entries.map(entry => entry.id);
  assert.ok(ids.every(id => typeof id === "string" && id.trim()), "every entry needs a stable ID");
  assert.equal(new Set(ids).size, ids.length, "entry IDs must be unique");
});

test("canonical candidate retains merged comparative evidence", () => {
  const lexicon = vm.runInNewContext(read("lexicon-data.js") + "\nKANNADA_LEXICON;", {});
  const medicine = lexicon.entries.find(entry => entry.id === "medicine");
  const madda = medicine.alternatives.find(candidate => candidate.word === "ಮದ್ದು");
  assert.equal(madda.tamil, "மருந்து (maruntu)");
  assert.equal(madda.tulu, "ಮர್ದ್".replace("ம", "ಮ")); // retain the stored Tulu form exactly
  assert.equal(madda.proto, "*maruntu");
});
