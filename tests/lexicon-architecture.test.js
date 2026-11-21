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
  for (const legacy of ['src="data.js"','src="etymology-entries.js"','src="contributor-equivalents.js','src="lexicon-data.js']) {
    assert.ok(!html.includes(legacy), "legacy runtime script still loaded: "+legacy);
  }
});

test("landing word tab loads the supplied civic, media and school word set", () => {
  const app = read("app.js");
  const rows = JSON.parse(read("landing-words.json"));
  assert.equal(rows.length,173);
  assert.match(app,/fetch\("\.\/landing-words\.json"/);
  assert.match(app,/rows\.length !== 173/);
  assert.match(app,/getFilteredLandingRows/);
  const renderer = app.slice(app.indexOf("function languageRows"),app.indexOf("const WORDS_PER_PAGE"));
  assert.doesNotMatch(renderer,/Tamil|Tulu/);
  assert.doesNotMatch(renderer,/comparativeEvidence/);
});

test("landing filters use the four domains in the supplied data", () => {
  const html = read("index.html");
  const app = read("app.js");
  const rows = JSON.parse(read("landing-words.json"));
  const domains = [...new Set(rows.map(row=>row[4]))];
  assert.deepEqual(domains,["Public Signboards","Government Announcements","Newspapers & Media","School & Textbooks"]);
  for (const domain of domains) assert.ok(html.includes(domain.replace("&","&amp;")));
  assert.match(app,/getFilteredLandingRows/);
  assert.match(app,/wordSearchInput/);
});
