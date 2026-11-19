const test = require("node:test");
const assert = require("node:assert/strict");
const {
  KANNADA_LEXICON_SCHEMA_VERSION,
  lexiconMergeCandidateRecords,
  lexiconMergeEntryRecords
} = require("../lexicon-model.js");

test("schema version is explicit", () => {
  assert.equal(KANNADA_LEXICON_SCHEMA_VERSION, 1);
});

test("duplicate candidate fills missing comparative evidence and preserves ID", () => {
  const merged = lexiconMergeCandidateRecords([
    { id: "audited-medicine", word: "ಮದ್ದು", viability: "clean", tamil: null },
    { id: "supp-medicine", word: "ಮದ್ದು", viability: "clean", tamil: "மருந்து", tulu: "ಮರ್ದ್", proto: "*maruntu" }
  ]);
  assert.equal(merged.length, 1);
  assert.equal(merged[0].id, "audited-medicine");
  assert.equal(merged[0].tamil, "மருந்து");
  assert.equal(merged[0].tulu, "ಮರ್ದ್");
  assert.equal(merged[0].proto, "*maruntu");
});

test("conflicting evidence is preserved for editorial review", () => {
  const [candidate] = lexiconMergeCandidateRecords([
    { word: "ನುಡಿ", tamil: "மொழி" },
    { word: "ನುಡಿ", tamil: "சொல்" }
  ]);
  assert.equal(candidate.tamil, "மொழி");
  assert.deepEqual(candidate.evidenceVariants.tamil, ["மொழி", "சொல்"]);
});

test("different senses with the same spelling remain separate", () => {
  const merged = lexiconMergeCandidateRecords([
    { word: "ಮದ್ದು", senseKey: "medicine", tamil: "மருந்து" },
    { word: "ಮದ್ದು", senseKey: "treatment", tamil: "மருந்து" }
  ]);
  assert.equal(merged.length, 2);
});

test("less certain viability wins when source records disagree", () => {
  const [candidate] = lexiconMergeCandidateRecords([
    { word: "ಮದ್ದು", viability: "clean" },
    { word: "ಮದ್ದು", viability: "contested" }
  ]);
  assert.equal(candidate.viability, "contested");
});

test("null incoming entry evidence does not erase an existing value", () => {
  const merged = lexiconMergeEntryRecords(
    { id: "medicine", halegannada: "ಮರ್ದ್", halegannadaEvidence: { status: "provisional" } },
    { id: "medicine", halegannada: null, halegannadaEvidence: null }
  );
  assert.equal(merged.halegannada, "ಮರ್ದ್");
  assert.deepEqual(merged.halegannadaEvidence, { status: "provisional" });
});
