/*
 * Conservative Kannada morphology analysis primitives.
 *
 * This first layer deliberately analyses possible suffix boundaries but does
 * not generate replacement forms. A suffix hypothesis is accepted only when
 * the remaining stem is independently present in the caller's known-stem set.
 * Generation will be added only with linguistically reviewed paradigms.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.KannadaMorphology = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  // Ordered longest-first. These are analysis hypotheses, not proof that every
  // matching final string is a suffix in the current sentence.
  const SUFFIX_HYPOTHESES = Object.freeze([
    { form: "ಗಳಿಂದ", features: ["case:ablative", "number:plural"], label: "plural ablative/instrumental" },
    { form: "ಗಳಿಗೆ", features: ["case:dative", "number:plural"], label: "plural dative" },
    { form: "ಗಳಲ್ಲಿ", features: ["case:locative", "number:plural"], label: "plural locative" },
    { form: "ಗಳನ್ನು", features: ["case:accusative", "number:plural"], label: "plural accusative" },
    { form: "ಗಳ", features: ["case:genitive", "number:plural"], label: "plural genitive" },
    { form: "ಯಿಂದ", features: ["case:ablative"], label: "ablative" },
    { form: "ದಿಂದ", features: ["case:ablative"], label: "ablative" },
    { form: "ದಲ್ಲಿ", features: ["case:locative"], label: "locative" },
    { form: "ಕ್ಕೆ", features: ["case:dative"], label: "dative" },
    { form: "ಗೆ", features: ["case:dative"], label: "dative" },
    { form: "ವನ್ನು", features: ["case:accusative"], label: "accusative" },
    { form: "ಅನ್ನು", features: ["case:accusative"], label: "accusative" },
    { form: "ನ", features: ["case:genitive"], label: "genitive (ambiguous)" },
    { form: "ದ", features: ["case:genitive"], label: "genitive (ambiguous)" },
    { form: "ಗಳು", features: ["number:plural"], label: "plural" },
    { form: "ಗಳು", features: ["number:plural"], label: "plural" }
  ]);

  const normalize = value => String(value ?? "").normalize("NFC");
  const isKannada = value => /[\u0C80-\u0CFF]/u.test(value);
  const unique = values => [...new Set(values)];

  function analyzeInflection(surface, knownStems = []) {
    const word = normalize(surface);
    if (!word || /\s/u.test(word) || !isKannada(word)) {
      return { surface: word, status: "unsupported", analyses: [] };
    }

    const stems = new Set(knownStems.map(normalize).filter(Boolean));
    const analyses = [];
    for (const rule of SUFFIX_HYPOTHESES) {
      if (!word.endsWith(rule.form) || word.length <= rule.form.length) continue;
      const stem = word.slice(0, -rule.form.length);
      if (!stems.has(stem)) continue;
      analyses.push({
        stem,
        suffix: rule.form,
        features: unique(rule.features),
        label: rule.label,
        confidence: rule.features.includes("case:genitive") ? "low" : "candidate"
      });
    }

    // A full known stem is not an inflected analysis. Callers should try exact
    // surface lookup before this function.
    if (!analyses.length) return { surface: word, status: "unresolved", analyses: [] };
    return {
      surface: word,
      status: analyses.length > 1 ? "ambiguous" : "analyzed",
      analyses
    };
  }

  function tokenizeKannada(text) {
    const source = String(text ?? "");
    const tokens = [];
    const pattern = /[\u0C80-\u0CFF\p{M}\p{N}]+/gu;
    for (const match of source.matchAll(pattern)) {
      const value = match[0];
      tokens.push({
        value,
        normalized: normalize(value),
        start: match.index,
        end: match.index + value.length,
        script: isKannada(value) ? "kannada" : "other"
      });
    }
    return tokens;
  }

  return Object.freeze({
    version: "0.1.0-analysis-only",
    tokenizeKannada,
    analyzeInflection,
    suffixHypotheses: SUFFIX_HYPOTHESES
  });
});
