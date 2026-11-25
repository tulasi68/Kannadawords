import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { loadSource, buildArtifacts } from "../scripts/lexicon-lib.mjs";

const root = process.cwd();
const read = file => fs.readFileSync(path.join(root, file), "utf8");
const readJson = file => JSON.parse(read(file));

test("Tab 4 uses the master CSV only and supports explicit parenthetical aliases", async () => {
  const loaded = loadSource();
  const artifacts = new Map(buildArtifacts(loaded).artifacts);
  const csv = read("MergedMasterCopy_10000.csv");
  const sandbox = {
    window: {},
    document: { currentScript: { src: "https://example.test/kannadawords/lexicon-store.js" } },
    URL,
    console: { warn() {} },
    fetch: async input => {
      const url = new URL(String(input));
      const relative = url.pathname.split("/kannadawords/")[1];
      if (relative.startsWith("lexicon-dist/")) {
        const raw = artifacts.get(relative);
        if (raw === undefined) return { ok: false, status: 404 };
        return { ok: true, status: 200, json: async () => JSON.parse(raw), text: async () => raw };
      }
      if (relative === "MergedMasterCopy_10000.csv") {
        return { ok: true, status: 200, text: async () => csv };
      }
      return { ok: false, status: 404 };
    }
  };
  vm.runInNewContext(read("lexicon-display-adapter.js"), sandbox);
  vm.runInNewContext(read("lexicon-store.js"), sandbox);
  const store = sandbox.window.KannadaLexiconStore;
  await store.ready();

  const varna = store.searchAchchaLexicon("varna");
  assert.ok(varna.some(entry => entry.sourceForms.includes("varna") &&
    entry.candidates.some(candidate => candidate.word === "ಬಣ್ಣ")));

  const jagatika = store.searchAchchaLexicon("ಜಾಗತಿಕ");
  assert.ok(jagatika.some(entry => entry.candidates.some(candidate => candidate.word === "ಇಡೀ ಜಗತ್ತಿನ")));
  assert.ok(jagatika.every(entry => entry.candidates.every(candidate => candidate.origin === "uncertain")));

  const shaili = store.searchAchchaLexicon("ಶೈಲಿ");
  assert.ok(shaili.some(entry => entry.candidates.some(candidate => candidate.word === "ಬಗೆ")));
  assert.ok(shaili.every(entry => !entry.rootFamilyIds));
});
