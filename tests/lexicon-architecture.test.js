const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.join(__dirname, "..");
const read = file => fs.readFileSync(path.join(root,file),"utf8");

test("runtime loads the canonical adapter and store before the UI", () => {
  const html = read("index.html");
  const adapter = html.indexOf('src="lexicon-display-adapter.js');
  const store = html.indexOf('src="lexicon-store.js');
  const app = html.indexOf('src="app.js');
  assert.ok(adapter >= 0 && store > adapter && app > store);
});

test("unified word list includes the canonical lexicon and preserves signboard priority", () => {
  const app = read("app.js");
  const manifest = JSON.parse(read("lexicon-dist/manifest.json"));
  assert.equal(manifest.entryCount,830);
  assert.match(app,/KannadaLexiconStore\\.loadAllEntries\\(\\)/);
  assert.match(app,/entry\\.categories\\.includes\\("Public Signboards"\\)/);
  assert.match(app,/a === "Public Signboards"/);
});

test("the 173 civic, media and education entries remain in the unified collection", () => {
  const app = read("app.js");
  const rows = JSON.parse(read("landing-words.json"));
  assert.equal(rows.length,173);
  assert.match(app,/fetch\\("\.\\/landing-words\\.json"/);
  assert.match(app,/const landingEntries = landingData\\.map/);
});

test("textbook words are added as a separate unreviewed category", () => {
  const app = read("app.js");
  const dataset = JSON.parse(read("textbook-words.json"));
  assert.equal(dataset.entryCount,4559);
  assert.match(app,/fetch\\("\.\\/textbook-words\\.json"/);
  assert.match(app,/category:"School Textbooks"/);
  assert.match(app,/Public Signboards/);
});
