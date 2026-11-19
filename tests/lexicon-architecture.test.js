const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

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
