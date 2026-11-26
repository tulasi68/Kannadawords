const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

const source = fs.readFileSync(
  path.join(__dirname, "../extension/news-converter/converter.js"),
  "utf8"
);
const context = {};
vm.runInNewContext(source + "\nthis.convertText = convertText; this.convertWord = convertWord;", context);

test("converts exact root words", () => {
  assert.equal(context.convertWord("ಸರ್ಕಾರ"), "ಆಳ್ವಿಕೆ");
  assert.equal(context.convertWord("ಪ್ರಕರಣ"), "ಸಂಗತಿ");
  assert.equal(context.convertWord("ವರದಿ"), "ಅರಿಕೆ");
});

test("reattaches common Kannada case suffixes", () => {
  assert.equal(context.convertWord("ಸರ್ಕಾರಕ್ಕೆ"), "ಆಳ್ವಿಕೆಗೆ");
  assert.equal(context.convertWord("ಪ್ರಕರಣಕ್ಕೆ"), "ಸಂಗತಿಗೆ");
  assert.equal(context.convertWord("ವರದಿಯ"), "ಅರಿಕೆಯ");
  assert.equal(context.convertWord("ಮಾಹಿತಿಯನ್ನು"), "ತಿಳಿವನ್ನು");
  assert.equal(context.convertWord("ಮಾಹಿತಿಯಲ್ಲಿ"), "ತಿಳಿವಿನಲ್ಲಿ");
});

test("replaces phrases before individual words", () => {
  assert.equal(context.convertText("ವಿಶೇಷ ವರದಿ ಪ್ರಕಟವಾಗಿದೆ"), "ನೆಟ್ಟರಿಕೆ ಪ್ರಕಟವಾಗಿದೆ");
  assert.equal(context.convertText("ನೇರ ಪ್ರಸಾರ"), "ನೇರ ಬಿತ್ತರ");
});

test("preserves unknown words and surrounding punctuation", () => {
  assert.equal(context.convertText("ಸರ್ಕಾರಕ್ಕೆ ಹೊಸ ಮಾಹಿತಿ!"), "ಆಳ್ವಿಕೆಗೆ ಹೊಸ ತಿಳಿವು!");
  assert.equal(context.convertText("ಬೆಂಗಳೂರು ಉತ್ತಮ ನಗರ."), "ಬೆಂಗಳೂರು ಉತ್ತಮ ನಗರ.");
});
