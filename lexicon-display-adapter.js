/* Converts canonical v2 records into the stable view model consumed by app.js. */
(() => {
  "use strict";
  function comparativeForm(candidate, language) {
    return (candidate.comparativeEvidence || []).find(item => item.language === language)?.form || null;
  }
  function toDisplayCandidate(candidate) {
    const result = {
      ...(candidate.legacyFields || {}),
      id: candidate.id,
      word: candidate.form,
      note: candidate.note || "",
      etymologyParts: candidate.etymologyParts || [],
      viability: candidate.viability || undefined,
      tamil: comparativeForm(candidate, "ta"),
      tulu: comparativeForm(candidate, "tcy"),
      proto: comparativeForm(candidate, "proto-dravidian"),
      evidenceVariants: candidate.evidenceVariants || {},
      comparativeEvidence: candidate.comparativeEvidence || []
    };
    if (candidate.flags?.noAlternative) result.isNoAlternative = true;
    if (candidate.flags?.outsideTargetOrigin) result.isScopeAudit = true;
    if (candidate.editorial?.note) result.editorialNote = candidate.editorial.note;
    return result;
  }
  function toDisplayEntry(entry) {
    const result = {
      ...(entry.legacyFields || {}),
      id: entry.id,
      sanskrit: entry.sourceForm,
      meaning: entry.sourceMeaning,
      category: entry.category,
      sourceEtymology: entry.sourceEtymology || undefined,
      alternatives: entry.candidates.map(toDisplayCandidate)
    };
    if (entry.historicalEvidence?.form) result.halegannada = entry.historicalEvidence.form;
    if (entry.historicalEvidence?.legacyEvidence) result.halegannadaEvidence = entry.historicalEvidence.legacyEvidence;
    else if (entry.historicalEvidence?.form || entry.historicalEvidence?.note || entry.historicalEvidence?.sourceRefs?.length) {
      result.halegannadaEvidence = {
        status:entry.historicalEvidence.status,
        note:entry.historicalEvidence.note || "",
        sourceRefs:entry.historicalEvidence.sourceRefs || []
      };
    }
    if (entry.historicalEvidence?.legacyVariants?.length) result.halegannadaVariants = entry.historicalEvidence.legacyVariants;
    if (entry.scope?.noAlternative) result.noAlternative = true;
    if (entry.scope?.outsideTargetOrigin) result.scopeAudit = true;
    if (entry.scope?.note) result.scopeNote = entry.scope.note;
    if (entry.rejectedCandidates?.length) result.rejectedAlternatives = entry.rejectedCandidates;
    if (entry.editorial?.note) result.editorialNote = entry.editorial.note;
    return result;
  }
  window.KannadaLexiconDisplayAdapter = { toDisplayEntry, toDisplayCandidate };
})();
