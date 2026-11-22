/* KannadaWords canonical merge helpers.
 * Additive compatibility layer for the legacy source files.
 * Schema version 1: stable entry IDs; candidate identity = normalized Kannada form + senseKey.
 */
const KANNADA_LEXICON_SCHEMA_VERSION = 1;

function lexiconNormalizeForm(value) {
  return String(value || "").normalize("NFC").replace(/\s+/gu, " ").trim();
}

function lexiconUniqueStrings(values) {
  const seen = new Set();
  return (values || []).filter(value => {
    const key = typeof value === "string" ? value.normalize("NFC").trim() : JSON.stringify(value);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function lexiconMergeCandidateRecords(records) {
  const merged = new Map();
  (records || []).filter(Boolean).forEach(candidate => {
    const word = lexiconNormalizeForm(candidate.word);
    if (!word) return;
    // Different senses must remain separate even when the Kannada spelling is identical.
    const key = word + "::" + lexiconNormalizeForm(candidate.senseKey || "");
    const previous = merged.get(key);
    if (!previous) {
      merged.set(key, {
        ...candidate,
        word,
        sources: lexiconUniqueStrings([...(candidate.sources || []), candidate.sourceDataset || "legacy-source"])
      });
      return;
    }
    const next = { ...previous, ...candidate, id: previous.id || candidate.id, word };
    const variants = { ...(previous.evidenceVariants || {}), ...(candidate.evidenceVariants || {}) };
    ["tamil", "tulu", "proto"].forEach(field => {
      const a = previous[field], b = candidate[field];
      if (!a && b) next[field] = b;
      else if (a && b && lexiconNormalizeForm(a) !== lexiconNormalizeForm(b)) {
        variants[field] = lexiconUniqueStrings([...(variants[field] || []), a, b]);
        next[field] = a; // preserve first published value; expose conflict for editorial review
      } else if (a) next[field] = a;
    });
    next.evidenceVariants = Object.keys(variants).length ? variants : undefined;
    next.etymologyParts = lexiconUniqueStrings([...(previous.etymologyParts || []), ...(candidate.etymologyParts || [])]);
    next.sources = lexiconUniqueStrings([...(previous.sources || []), ...(candidate.sources || []), candidate.sourceDataset || "legacy-source"]);
    next.note = lexiconUniqueStrings([previous.note, candidate.note]).join(" ");
    next.editorialNote = lexiconUniqueStrings([previous.editorialNote, candidate.editorialNote]).join(" ");
    // Never upgrade a candidate's status merely because a second source is more confident.
    const rank = { no_alternative: 0, contested: 1, proposed: 2, coined: 3, clean: 4 };
    if (rank[candidate.viability] !== undefined &&
        (rank[previous.viability] === undefined || rank[candidate.viability] < rank[previous.viability])) {
      next.viability = candidate.viability;
    }
    merged.set(key, next);
  });
  return [...merged.values()];
}

function lexiconMergeEntryRecords(previous, incoming) {
  if (!previous) return { ...incoming };
  const next = { ...previous, ...incoming, id: previous.id || incoming.id };
  next.alternatives = lexiconMergeCandidateRecords([
    ...(previous.alternatives || []).map(candidate => ({...candidate, sourceDataset:candidate.sourceDataset || previous.sourceDataset})),
    ...(incoming.alternatives || []).map(candidate => ({...candidate, sourceDataset:candidate.sourceDataset || incoming.sourceDataset}))
  ]);
  ["halegannada", "halegannadaEvidence", "sourceEtymology", "sourceMeaning", "meaning"].forEach(field => {
    if (!incoming[field] && previous[field]) next[field] = previous[field];
  });
  if (previous.halegannada && incoming.halegannada &&
      lexiconNormalizeForm(previous.halegannada) !== lexiconNormalizeForm(incoming.halegannada)) {
    next.halegannadaVariants = lexiconUniqueStrings([...(previous.halegannadaVariants || []), previous.halegannada, incoming.halegannada]);
    next.halegannada = previous.halegannada;
  }
  next.editorialNote = lexiconUniqueStrings([previous.editorialNote, incoming.editorialNote]).join(" ");
  next.sources = lexiconUniqueStrings([...(previous.sources || []), ...(incoming.sources || []), incoming.sourceDataset || "legacy-source"]);
  return next;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    KANNADA_LEXICON_SCHEMA_VERSION,
    lexiconNormalizeForm,
    lexiconMergeCandidateRecords,
    lexiconMergeEntryRecords
  };
}
