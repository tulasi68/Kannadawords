import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const data = JSON.parse(await readFile(new URL("../sanskrit-discovery-words.json", import.meta.url), "utf8"));
const app = await readFile(new URL("../app.js", import.meta.url), "utf8");

test("Tab 4 keeps Sanskrit-origin examples provisional until dictionary and Alar evidence is recorded", () => {
  assert.equal(data.schemaVersion, 2);
  assert.ok(Array.isArray(data.entries));
  for (const [id, forms] of Object.entries({
    avadhi: ["ಅವಧಿ", "ಅವಧಿಗೂ"],
    parinaama: ["ಪರಿಣಾಮ", "ಪರಿಣಾಮದ"],
    nireeksha: ["ನಿರೀಕ್ಷೆ", "ನಿರೀಕ್ಷೆಯಿದೆ"]
  })) {
    const entry = data.entries.find(item => item.id === id);
    assert.ok(entry, id);
    assert.equal(entry.originStatus, "candidate");
    assert.equal(entry.evidenceStatus, "pending");
    for (const form of forms) assert.ok(entry.forms.includes(form), form);
  }
  assert.match(data.description, /provisional/i);
  assert.ok(data.verificationWorkflow.some(step => /Kannada-to-English dictionary/i.test(step)));
  assert.ok(data.verificationWorkflow.some(step => /Alar/i.test(step)));
});

test("Tab 4 excludes known false positives from both vocabulary and origin-candidate matching", () => {
  for (const word of ["ಕೊರತೆ", "ಮತ್ತು"]) assert.ok(data.excludedForms.includes(word), word);
  assert.match(app, /achchaExcludedForms=data\.excludedForms/);
  assert.match(app, /!isExcluded\(form\)/);
  assert.match(app, /!isExcluded\(original\.slice\(at,end\)\)/);
});

test("Tab 4 labels vocabulary suggestions separately from word-origin candidates", () => {
  assert.match(app, /"Kannada alternatives":"Origin candidate"/);
});
