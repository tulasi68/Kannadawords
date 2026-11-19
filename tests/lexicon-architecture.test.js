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

test("vocabulary UI pages are loaded through the canonical store", () => {
  const app = read("app.js");
  const store = read("lexicon-store.js");
  assert.match(app,/KannadaLexiconStore\.loadPage/);
  assert.match(app,/KannadaLexiconStore\.getCategoryCount/);
  assert.doesNotMatch(app,/auditedWordEntries|originAuditEntries|contributorWordEntries|wordEntries\.map/);
  assert.match(store,/checksum\(raw\) !== info\.checksum/);
});

test("category selector is populated from the actual dataset categories", () => {
  const app = read("app.js");
  assert.match(app,/populateCategoryOptions/);
  assert.match(app,/getCategories\(\)/);
});
