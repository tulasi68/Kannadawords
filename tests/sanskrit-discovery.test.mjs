import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const html=fs.readFileSync(new URL("../index.html",import.meta.url),"utf8");
const workbench=fs.readFileSync(new URL("../meaning-workbench.js",import.meta.url),"utf8");
const app=fs.readFileSync(new URL("../app.js",import.meta.url),"utf8");

test("Tab 4 provides a meaning-first discovery workflow instead of AI-generated replacements",()=>{
  assert.match(html,/Advanced research/);
  assert.match(html,/meaning-workbench-investigate/);
  assert.match(html,/mw-source-word/);
  assert.match(html,/mw-english-meaning/);
  assert.match(html,/mw-candidate/);
  assert.match(html,/meaning-workbench\.js/);
  assert.doesNotMatch(html,/>AI search<\/button>/);
  assert.match(workbench,/https:\/\/rala\.kutuhula\.in\/index\.html\?q=/);
  assert.match(workbench,/Alar/);
  assert.match(workbench,/investigateSelectedWord/);
  assert.ok(workbench.includes("https://alar.ink/dictionary/kannada/english?q="));
  assert.match(workbench,/selectionchange/);
  assert.match(html,/Padakanaja/);
  assert.match(workbench,/localStorage/);
  assert.match(workbench,/exportMeaningRecords/);
});

test("The first worked example starts from the English definition and keeps candidates unverified",()=>{
  assert.match(workbench,/ವಿಭಜನೆ/);
  assert.match(workbench,/a dividing or being divided; division/);
  assert.match(workbench,/ಹಂಚಿಕೆ/);
  assert.match(workbench,/ಒಡೆಯುವಿಕೆ/);
  assert.match(workbench,/not-verified/);
});

test("Tab 4 does not automatically infer word origin from a Sanskrit candidate list",()=>{
  assert.match(app,/Origin is not inferred from a word list/);
  assert.match(app,/Use the English meaning workbench/);
  assert.doesNotMatch(app,/addAchchaDiscoveryUnderlines\(preview, searchable/);
});
