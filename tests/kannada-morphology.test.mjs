import test from "node:test";
import assert from "node:assert/strict";
import morphology from "../language-engine/morphology.js";

test("tokenizer preserves original UTF-16 spans and punctuation gaps", () => {
  const source = "ಮನೆಗೆ, ಹೊಸ ಮಾಹಿತಿ!";
  const tokens = morphology.tokenizeKannada(source);
  assert.deepEqual(tokens.map(token => token.value), ["ಮನೆಗೆ", "ಹೊಸ", "ಮಾಹಿತಿ"]);
  assert.equal(source.slice(tokens[0].start, tokens[0].end), "ಮನೆಗೆ");
  assert.equal(source.slice(tokens[1].start, tokens[1].end), "ಹೊಸ");
});

test("known stem plus candidate suffix produces an analysis", () => {
  const result = morphology.analyzeInflection("ಮನೆಗೆ", ["ಮನೆ"]);
  assert.equal(result.status, "analyzed");
  assert.equal(result.analyses[0].stem, "ಮನೆ");
  assert.equal(result.analyses[0].suffix, "ಗೆ");
  assert.ok(result.analyses[0].features.includes("case:dative"));
});

test("unknown stem is not accepted just because a suffix matches", () => {
  const result = morphology.analyzeInflection("ಅಪರಿಚಿತಕ್ಕೆ", ["ಮನೆ", "ಮರ"]);
  assert.equal(result.status, "unresolved");
  assert.deepEqual(result.analyses, []);
});

test("ambiguous suffix hypotheses are surfaced instead of silently choosing one", () => {
  const result = morphology.analyzeInflection("ಮನೆಗಳು", ["ಮನೆ"]);
  assert.equal(result.status, "analyzed");
  assert.ok(result.analyses.some(item => item.features.includes("number:plural")));
});

test("non-Kannada and multiword inputs are not analysed as single words", () => {
  assert.equal(morphology.analyzeInflection("house", ["house"]).status, "unsupported");
  assert.equal(morphology.analyzeInflection("ಮನೆ ಗೆ", ["ಮನೆ"]).status, "unsupported");
});

test("analysis-only module does not pretend to generate replacement forms", () => {
  assert.equal(typeof morphology.generateForm, "undefined");
  assert.equal(morphology.version, "0.1.0-analysis-only");
});
