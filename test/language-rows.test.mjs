import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const app = readFileSync(new URL("../app.js", import.meta.url), "utf8");
const start = app.indexOf("function languageRows(entry, alts) {");
const end = app.indexOf("\nconst WORDS_PER_PAGE", start);
assert.notEqual(start, -1, "languageRows must exist");
assert.notEqual(end, -1, "languageRows boundary must exist");
const functionSource = app.slice(start, end);

test("language rows include evidence attached to later Kannada alternatives", () => {
  const context = {
    window: { KannadaLexiconStore: { getReference: () => null } },
    escapeHtml: value => String(value ?? "").replace(/[&<>"']/g, ch => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[ch]))
  };
  vm.runInNewContext(functionSource + "\nglobalThis.renderLanguageRows = languageRows;", context);
  const html = context.renderLanguageRows({ halegannada: "ಹಾಲು" }, [
    { word: "ಹಾಲು", comparativeEvidence: [] },
    { word: "ಪಾಲು", comparativeEvidence: [
      { language: "ta", form: "பால்", status: "not_assessed", sourceRefs: [] },
      { language: "tcy", form: "ಪಾಲ್", status: "provisional", sourceRefs: [] },
      { language: "proto-dravidian", form: "*pāl", status: "not_assessed", sourceRefs: [] }
    ] }
  ]);
  assert.match(html, /ಪಾಲು: பால்/);
  assert.match(html, /ಪಾಲು: ಪಾಲ್/);
  assert.match(html, /ಪಾಲು: \*pāl/);
  assert.match(html, /Halegannada/);
});
