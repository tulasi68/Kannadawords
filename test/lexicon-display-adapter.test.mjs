import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const source = readFileSync(new URL("../lexicon-display-adapter.js", import.meta.url), "utf8");
const window = {};
vm.runInNewContext(source, { window });
const adapter = window.KannadaLexiconDisplayAdapter;

test("displays comparative forms stored in evidenceVariants", () => {
  const result = adapter.toDisplayCandidate({
    id: "milk-1",
    form: "ಹಾಲು",
    comparativeEvidence: [],
    evidenceVariants: {
      tamil: ["பால் (pāl)", "பால் (pāl; DEDR 4096)"],
      tulu: ["ಪೇರ್ (pēr) / ಪಾಲ್"],
      proto: ["*pāl"]
    },
    flags: {}
  });
  assert.equal(result.tamil, "பால் (pāl)");
  assert.equal(result.tulu, "ಪೇರ್ (pēr) / ಪಾಲ್");
  assert.equal(result.proto, "*pāl");
  assert.equal(result.evidenceVariants.tamil.length, 2);
});

test("prefers normalized comparative evidence over legacy variants", () => {
  const result = adapter.toDisplayCandidate({
    id: "tree-1",
    form: "ಮರ",
    comparativeEvidence: [
      { language: "ta", form: "மரம் (maram)" },
      { language: "tcy", form: "mara" },
      { language: "proto-dravidian", form: "*mar-am" }
    ],
    evidenceVariants: {
      tamil: ["legacy Tamil"],
      tulu: ["legacy Tulu"],
      proto: ["legacy reconstruction"]
    },
    flags: {}
  });
  assert.equal(result.tamil, "மரம் (maram)");
  assert.equal(result.tulu, "mara");
  assert.equal(result.proto, "*mar-am");
});

test("falls back to legacy linguisticEvidence forms", () => {
  const result = adapter.toDisplayCandidate({
    id: "house-1",
    form: "ಮನೆ",
    comparativeEvidence: [],
    evidenceVariants: {},
    legacyFields: {
      linguisticEvidence: {
        tamil: { form: "மனை" },
        tulu: { form: "ಇಲ್ಲ್" },
        protoDravidian: { form: "*manay" }
      }
    },
    flags: {}
  });
  assert.equal(result.tamil, "மனை");
  assert.equal(result.tulu, "ಇಲ್ಲ್");
  assert.equal(result.proto, "*manay");
});

test("preserves entry-level Halegannada historical evidence", () => {
  const result = adapter.toDisplayEntry({
    id: "entry-1",
    sourceForm: "ಕ್ಷೀರ",
    sourceMeaning: "milk",
    category: "Everyday",
    candidates: [],
    historicalEvidence: {
      form: "ಹಾಲು",
      status: "not_assessed",
      sourceRefs: [],
      note: "Historical form requires review.",
      legacyEvidence: null,
      legacyVariants: []
    }
  });
  assert.equal(result.halegannada, "ಹಾಲು");
  assert.equal(result.halegannadaEvidence.status, "not_assessed");
});
