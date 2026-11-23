import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const data = JSON.parse(await readFile(new URL("../sanskrit-discovery-words.json", import.meta.url), "utf8"));
const app = await readFile(new URL("../app.js", import.meta.url), "utf8");

const passage = "ಮೈಸೂರಲ್ಲಿ ಈ ಬಾರಿ ಅವಧಿಗೂ ಮುನ್ನವೇ ಚಳಿಗಾಲದ ಅಬ್ಬರ ಶುರುವಾಗಿದ್ದು, ಜನ ಗಡಗಡ ನಡಗುವ ಪರಿಸ್ಥಿತಿ ನಿರ್ಮಾಣವಾಗಿದೆ. ಮೈಸೂರು ರಾತ್ರಿ ಕನಿಷ್ಠ ತಾಪಮಾನ 13–14 ಡಿಗ್ರಿ ಸೆಲ್ಸಿಯಸ್‌ಗೆ ಇಳಿದಿದ್ದು, ಜನವರಿವರೆಗೂ ಮೈಕೊರೆಯುವ ಚಳಿ ತೀವ್ರವಾಗುವ ನಿರೀಕ್ಷೆಯಿದೆ. ಮುಂಗಾರಿನಲ್ಲಿ ಶೇ.59 ಮಳೆ ಕೊರತೆ, ನವೆಂಬರ್‌ನಲ್ಲಿ 35.7 ಮಿ.ಮೀ. ಮಾತ್ರ ಮಳೆ ಹಾಗೂ ಎಲ್‌ನಿನೊ ಪರಿಣಾಮದ ಒಣ ಹವೆಯಿಂದ ಹಗಲು ಬಿಸಿಲು, ರಾತ್ರಿ ಚಳಿ ಹೆಚ್ಚಾಗಿದೆ.";

function hasWholeForm(text, form) {
  const isWord = ch => !!ch && /[\p{L}\p{M}\p{N}_]/u.test(ch);
  let at = text.indexOf(form);
  while (at !== -1) {
    const end = at + form.length;
    if ((at === 0 || !isWord(text[at - 1])) && (end === text.length || !isWord(text[end]))) return true;
    at = text.indexOf(form, at + 1);
  }
  return false;
}

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

test("Mysuru cold-weather passage detects the intended inflected Sanskrit-origin candidates", () => {
  const forms = new Set(data.entries.flatMap(entry => entry.forms));
  for (const word of ["ಅವಧಿಗೂ", "ನಿರೀಕ್ಷೆಯಿದೆ", "ಪರಿಣಾಮದ"]) {
    assert.ok(forms.has(word), word);
    assert.ok(hasWholeForm(passage, word), word);
  }
});

test("Tab 4 excludes known false positives from both vocabulary and origin-candidate matching", () => {
  for (const word of ["ಕೊರತೆ", "ಕೊರತೆಯ", "ಕೊರತೆಯಿಂದ", "ಮತ್ತು"]) assert.ok(data.excludedForms.includes(word), word);
  assert.match(app, /achchaExcludedForms=data\.excludedForms/);
  assert.match(app, /!isExcluded\(form\)/);
  assert.match(app, /!isExcluded\(original\.slice\(at,end\)\)/);
  assert.match(app, /!isOriginCandidate\(form\)/);
  assert.match(app, /!isOriginCandidate\(original\.slice\(at,end\)\)/);
  assert.equal(hasWholeForm("ಕಿಮ್ಮತ್ತು", "ಮತ್ತು"), false);
});

test("Tab 4 labels vocabulary suggestions separately from word-origin candidates", () => {
  assert.match(app, /"Kannada alternatives":"Origin candidate"/);
});
