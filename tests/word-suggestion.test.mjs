import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import worker from "../worker/ai-rewrite.js";

test("frontend and worker JavaScript parse successfully", async () => {
  for (const file of ["app.js", "worker/ai-rewrite.js"]) {
    const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
    assert.equal(result.status, 0, result.stderr || file + " did not parse");
  }
});

test("word-only endpoint returns structured replacement suggestions, never paragraph rewrite fields", async () => {
  let calls = 0;
  let capturedOptions;
  const env = { AI: { run: async (_model, options) => {
    calls += 1;
    capturedOptions = options;
    return { response: JSON.stringify({
      word: "ವಾಹನ",
      suggestions: [{ replacement: "ಬಂಡಿ", reasonKannada: "ಬಳಕೆಯ ಸಂದರ್ಭಕ್ಕೆ ತಕ್ಕ ಸರಳ ಪದ.", basis: "uncertain" }],
      needsContext: false,
      noteKannada: "ಸಂದರ್ಭಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಆಯ್ಕೆಮಾಡಿ."
    }) };
  } } };
  const response = await worker.fetch(new Request("https://example.test/api/rewrite", {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ text: "ವಾಹನ", wordOnly: true })
  }), env);
  const payload = await response.json();
  assert.equal(response.status, 200);
  assert.equal(calls, 1);
  assert.equal(payload.word, "ವಾಹನ");
  assert.equal(payload.suggestions[0].replacement, "ಬಂಡಿ");
  assert.equal(typeof payload.suggestions[0].reasonKannada, "string");
  assert.equal("rewrittenKannada" in payload, false);
  assert.equal("replacements" in payload, false);
  assert.ok(capturedOptions.response_format.json_schema.properties.suggestions);
});

test("word-only endpoint rejects sentences and does not call the AI model", async () => {
  let calls = 0;
  const response = await worker.fetch(new Request("https://example.test/api/rewrite", {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ text: "ಇದು ಒಂದು ವಾಕ್ಯ", wordOnly: true })
  }), { AI: { run: async () => { calls += 1; return {}; } } });
  assert.equal(response.status, 400);
  assert.equal(calls, 0);
});

test("frontend renders radio alternatives and applies selections using detected word positions", async () => {
  const source = await readFile(new URL("../app.js", import.meta.url), "utf8");
  assert.match(source, /type="radio"/);
  assert.match(source, /selectAchchaGapAlternative/);
  assert.match(source, /achchaGapBaseText\.slice\(cursor,edit\.start\)/);
  assert.doesNotMatch(source, /ಈ ಪದವನ್ನು ಅಳವಡಿಸಿ/);
  assert.match(source, /body:JSON\.stringify\(\{text:word,wordOnly:true\}\)/);
});

test("sentence rewrite mode receives only user-selected replacements and returns one rewritten sentence", async () => {
  let capturedOptions;
  const env = { AI: { run: async (_model, options) => {
    capturedOptions = options;
    return { response: JSON.stringify({
      rewrittenKannada: "ಔತಣವನ್ನು ಏರ್ಪಡಿಸಲಾಗಿತ್ತು.",
      changed: true,
      explanationKannada: "",
      replacements: [{ original: "ಆಯೋಜಿಸಲಾಗಿತ್ತು", replacement: "ಏರ್ಪಡಿಸಲಾಗಿತ್ತು", basis: "uncertain", reasonKannada: "ಬಳಕೆದಾರರ ಆಯ್ಕೆ." }],
      wordsNeedingReview: []
    }) };
  } } };
  const response = await worker.fetch(new Request("https://example.test/api/rewrite", {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({
      text: "ಔತಣಕೂಟವನ್ನು ಆಯೋಜಿಸಲಾಗಿತ್ತು.",
      sentenceRewrite: true,
      selectedReplacements: [{ original: "ಆಯೋಜಿಸಲಾಗಿತ್ತು", replacement: "ಏರ್ಪಡಿಸಲಾಗಿತ್ತು" }]
    })
  }), env);
  const payload = await response.json();
  assert.equal(response.status, 200);
  assert.equal(payload.rewrittenKannada, "ಔತಣವನ್ನು ಏರ್ಪಡಿಸಲಾಗಿತ್ತು.");
  assert.match(capturedOptions.messages[0].content, /ಬಳಕೆದಾರರು ಆರಿಸಿದ ಪರ್ಯಾಯಗಳನ್ನೇ ಬಳಸಿ/);
  assert.match(capturedOptions.messages[0].content, /ಹೊಸ ಪರ್ಯಾಯಗಳನ್ನು ಸೃಷ್ಟಿಸಬೇಡಿ/);
  assert.match(capturedOptions.messages[1].content, /ಆಯೋಜಿಸಲಾಗಿತ್ತು/);
});

test("sentence rewrite mode rejects unrelated selected replacements without calling AI", async () => {
  let calls = 0;
  const env = { AI: { run: async () => { calls++; return {}; } } };
  const response = await worker.fetch(new Request("https://example.test/api/rewrite", {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({
      text: "ಔತಣಕೂಟವನ್ನು ಆಯೋಜಿಸಲಾಗಿತ್ತು.",
      sentenceRewrite: true,
      selectedReplacements: [{ original: "ಶೃಂಗಸಭೆ", replacement: "ಕೂಟ" }]
    })
  }), env);
  assert.equal(response.status, 400);
  assert.equal(calls, 0);
});

test("Tab 4 Apply sends sentence-level requests with only selected replacements", async () => {
  const source = await readFile(new URL("../app.js", import.meta.url), "utf8");
  assert.match(source, /sentenceRewrite:true,selectedReplacements:choices/);
  assert.match(source, /sourceText\.matchAll\(sentencePattern\)/);
  assert.match(source, /payload\.rewrittenKannada/);
  assert.match(source, /failedCount/);
  assert.match(source, /achcha-rewrite-status/);
});
