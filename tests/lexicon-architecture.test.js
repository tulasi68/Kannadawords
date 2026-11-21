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

test("the original 637-entry lexicon remains the default word collection", () => {
  const app = read("app.js");
  const html = read("index.html");
  const manifest = JSON.parse(read("lexicon-dist/manifest.json"));
  assert.equal(manifest.entryCount,637);
  assert.match(app,/let wordDatasetMode = "canonical"/);
  assert.match(app,/KannadaLexiconStore\.loadPage\(categorySelect\.value \|\| "all",currentWordPage,WORDS_PER_PAGE\)/);
  assert.match(html,/Original lexicon · 637/);
  assert.match(html,/setWordDataset\('canonical'\)/);
});

test("the 173 supplied entries are available as a separate additional collection", () => {
  const app = read("app.js");
  const html = read("index.html");
  const rows = JSON.parse(read("landing-words.json"));
  assert.equal(rows.length,173);
  assert.match(app,/fetch\("\.\/landing-words\.json"/);
  assert.match(app,/setWordDataset\('landing'\)/);
  assert.match(html,/Additional words · 173/);
});

test("the original lexicon renderer retains comparative Tamil and Tulu evidence", () => {
  const app = read("app.js");
  const renderer = app.slice(app.indexOf("function languageRows"),app.indexOf("const WORDS_PER_PAGE"));
  assert.match(renderer,/Native Kannada/);
  assert.match(renderer,/Tamil/);
  assert.match(renderer,/Tulu/);
  assert.match(renderer,/comparativeEvidence/);
  assert.match(renderer,/getReference/);
});
