import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("provisional Sanskrit discovery list contains the four initial gap examples", async () => {
  const data = JSON.parse(await readFile(new URL("../sanskrit-discovery-words.json", import.meta.url), "utf8"));
  assert.equal(data.schemaVersion, 1);
  assert.ok(Array.isArray(data.entries));
  const forms = new Set(data.entries.flatMap(entry => entry.forms));
  for (const word of ["ವಾಹನ", "ನಾಯಕ", "ಅಲಂಕರಿಸಲ್ಪಟ್ಟ", "ಅತಿಥಿ"]) assert.ok(forms.has(word), word);
  assert.match(data.description, /provisional/i);
});
