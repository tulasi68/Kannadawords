const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.join(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

test("runtime loads the canonical adapter and store before the UI", () => {
  const html = read("index.html");
  const adapter = html.indexOf('src="lexicon-display-adapter.js');
  const store = html.indexOf('src="lexicon-store.js');
  const app = html.indexOf('src="app.js');
  assert.ok(adapter >= 0 && store > adapter && app > store);
});

test("the master CSV drives the website word browser and preserves signboard priority", () => {
  const app = read("app.js");
  const csv = read("MergedMasterCopy_10000.csv");
  assert.match(app, /MergedMasterCopy_10000\.csv/);
  assert.match(app, /parsed\.length !== 8470/);
  assert.match(app, /entry\.categories\.includes\("Public Signboards"\)/);
  assert.match(app, /a === "Public Signboards"/);
  assert.ok(csv.startsWith("Entry ID,Source Word / Loanword,Primary Accha Kannada"));
});

test("legacy landing and textbook datasets are not merged into the active word browser", () => {
  const app = read("app.js");
  assert.doesNotMatch(app, /fetch\("\.\/landing-words\.json"/);
  assert.doesNotMatch(app, /fetch\("\.\/textbook-words\.json"/);
  assert.match(app, /sourceFile: "MergedMasterCopy_10000\.csv"/);
});

test("the master CSV remains the 12-column source and extension build input", () => {
  const csv = read("MergedMasterCopy_10000.csv");
  assert.match(csv.split("\n")[0], /All Sources/);
  assert.equal(csv.trimEnd().split(/\r?\n/u).length - 1, 8470);
});
