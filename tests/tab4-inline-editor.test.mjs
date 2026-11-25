import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const html=fs.readFileSync(new URL("../index.html",import.meta.url),"utf8");
const app=fs.readFileSync(new URL("../app.js",import.meta.url),"utf8");
const store=fs.readFileSync(new URL("../lexicon-store.js",import.meta.url),"utf8");

test("Tab 4 uses one inline editable Kannada text field and four requested actions",()=>{
  assert.match(html,/id="achcha-input"[^>]*contenteditable="true"/);
  for(const label of ["Search in App","Advanced research","Clear","Apply"]) assert.ok(html.includes(">"+label+"</button>"),label);
  assert.doesNotMatch(html,/ಪಠ್ಯದ ಅರ್ಥವನ್ನು ಉಳಿಸಿಕೊಂಡು ಸಹಜ ಕನ್ನಡದಲ್ಲಿ ಮರುಬರೆಯಿರಿ/);
  assert.doesNotMatch(html,/ಪದಪಟ್ಟಿ ಹುಡುಕಾಟವು ಮೂಲ ಪದಕೋಶ ಮತ್ತು 2,134 ಪದಗಳ master corpus/);
  const tab4=html.slice(html.indexOf('<section id="translate-panel"'),html.indexOf("</section>",html.indexOf('<section id="translate-panel"')));
  assert.doesNotMatch(tab4,/id="achcha-preview|id="achcha-word-list|id="achcha-gap-panel|id="achcha-gap-results/);
});

test("Tab 4 applies selected red and blue word choices into a second Kannada text field",()=>{
  assert.match(html,/id="achcha-result-text"/);
  assert.match(app,/window\.findAchchaWords = async function/);
  assert.match(html,/meaning-workbench\.js/);
  assert.match(app,/achchaMatchState\.concat\(achchaDiscoveryState\)/);
  assert.match(app,/item\.suggestions=suggestions/);
});

test("Tab 4 suggestions are loaded from the authoritative master CSV only",()=>{
  assert.match(store,/MergedMasterCopy_10000\.csv/);
  assert.match(store,/buildMergedCsvWritingIndex\(records\)/);
  assert.match(store,/masterWritingIndex\.filter/);
  assert.doesNotMatch(store,/textbookWritingIndex = buildTextbookWritingIndex/);
  assert.doesNotMatch(store,/landingWritingIndex = buildLandingWritingIndex/);
});
