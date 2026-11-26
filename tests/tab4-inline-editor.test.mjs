import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const html=fs.readFileSync(new URL("../index.html",import.meta.url),"utf8");
const app=fs.readFileSync(new URL("../app.js",import.meta.url),"utf8");
const store=fs.readFileSync(new URL("../lexicon-store.js",import.meta.url),"utf8");

test("Tab 4 keeps matches and replacements in the original editable text",()=>{
  assert.match(html,/id="achcha-input"[^>]*contenteditable="true"/);
  assert.ok(html.includes(">Search in App</button>"));
  assert.ok(html.includes(">Clear</button>"));
  assert.ok(html.includes('id="achcha-find-status"'));
  assert.ok(html.includes('id="achcha-matches"'));
  assert.ok(!html.includes('id="achcha-apply"') && !html.includes(">Apply</button>"));
  assert.ok(!html.includes('id="achcha-output"') && !html.includes('id="achcha-result-text"'));
  assert.match(app,/function decorateAchchaEditor\(text, matches\)/);
  assert.match(app,/function applyAchchaReplacement\(index, word\)/);
  assert.match(app,/findAchchaWords\(\);/);
  assert.match(app,/achchaUndoStack\.push\(current\)/);
  assert.match(html,/Ctrl\+Z/);
  assert.match(html,/meaning-workbench\.js/);
});

test("Tab 4 replacement choices preserve the source text and refresh remaining matches",()=>{
  assert.match(app,/current\.slice\(0, match\.start\) \+ word \+ current\.slice\(match\.end\)/);
  assert.match(app,/decorateAchchaEditor\(searchable, matches\)/);
  assert.match(app,/button\.addEventListener\("click", \(\) => applyAchchaReplacement\(index, candidate\.word\)\)/);
  assert.match(app,/container\.classList\.remove\("hidden"\)/);
});

test("Tab 4 choice click mutates the source text instead of only changing popup selection",()=>{
  assert.match(app,/const chosen = option\.dataset\.word \|\| item\.source/);
  assert.match(app,/sourceText = sourceText\.slice\(0, item\.start\) \+ chosen \+ sourceText\.slice\(item\.end\)/);
  assert.match(app,/editor\.textContent = sourceText/);
  assert.match(app,/window\.findAchchaWords\(\)/);
});

test("Tab 4 lookup includes canonical, master, textbook, landing and root-family collections",()=>{
  assert.match(store,/landingWritingIndex = buildLandingWritingIndex\(landingData\)/);
  assert.match(store,/rootFamilyWritingIndex = buildRootFamilyWritingIndex\(familyData\)/);
  assert.match(store,/\.\.\.rootFamilies, \.\.\.mergedMaster/);
});
