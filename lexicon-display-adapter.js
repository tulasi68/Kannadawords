/* Converts canonical v2 records into the stable view model consumed by app.js. */
(() => {
  "use strict";
  const isText = value => typeof value === "string" && value.trim().length > 0;

  function comparativeForm(candidate, language, variantKey, legacyKey) {
    const record = (candidate.comparativeEvidence || []).find(item => item.language === language && isText(item.form));
    if (record) return record.form;
    const variants = candidate.evidenceVariants?.[variantKey];
    const variant = Array.isArray(variants) ? variants.find(isText) : variants;
    if (isText(variant)) return variant;
    const legacy = candidate.legacyFields?.linguisticEvidence?.[legacyKey]?.form;
    return isText(legacy) ? legacy : null;
  }

  function toDisplayCandidate(candidate) {
    const result = {
      ...(candidate.legacyFields || {}),
      id: candidate.id,
      word: candidate.form,
      reviewStatus: candidate.reviewStatus || "needs_review",
      originClassification: candidate.originClassification || "uncertain",
      note: candidate.note || "",
      etymologyParts: candidate.etymologyParts || [],
      viability: candidate.viability || undefined,
      tamil: comparativeForm(candidate, "ta", "tamil", "tamil"),
      tulu: comparativeForm(candidate, "tcy", "tulu", "tulu"),
      proto: comparativeForm(candidate, "proto-dravidian", "proto", "protoDravidian"),
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
    if (entry.editorial?.note && !entry.editorial.note.startsWith("Batch 3 candidate. User-supplied gloss and alternatives retained.")) {
      result.editorialNote = entry.editorial.note;
    }
    return result;
  }

  window.KannadaLexiconDisplayAdapter = { toDisplayEntry, toDisplayCandidate };
})();
