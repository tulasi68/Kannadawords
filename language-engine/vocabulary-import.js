/*
 * Safe, non-destructive vocabulary-file ingestion.
 *
 * This module parses legacy two-column dictionaries and structured JSON into
 * a review queue. It never writes to browser storage or canonical lexicon files.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.KannadaVocabularyImport = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const SOURCE_KEYS = ["sourceForm", "sourceWord", "source", "inputWord", "sanskritWord", "skt", "word"];
  const CANDIDATE_KEYS = ["candidateForms", "candidates", "nativeWords", "nativeWord", "replacement", "alternative", "target", "nat"];
  const HEADER_SOURCE = new Set(["sourceform", "sourceword", "source", "inputword", "sanskritword", "skt", "word", "ಮೂಲಪದ"]);
  const HEADER_CANDIDATE = new Set(["candidateforms", "candidates", "nativewords", "nativeword", "replacement", "alternative", "target", "nat", "ಪರ್ಯಾಯ", "ಪರ್ಯಾಯಪದ"]);

  const normalize = value => String(value ?? "").normalize("NFC").trim();
  const isControlText = value => /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/u.test(value);

  function splitDelimited(text, delimiter) {
    const rows = [];
    let row = [], field = "", quoted = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (quoted) {
        if (ch === '"') {
          if (text[i + 1] === '"') { field += '"'; i++; }
          else quoted = false;
        } else field += ch;
      } else if (ch === '"' && field.length === 0) {
        quoted = true;
      } else if (ch === delimiter) {
        row.push(field); field = "";
      } else if (ch === "\n" || ch === "\r") {
        if (ch === "\r" && text[i + 1] === "\n") i++;
        row.push(field); rows.push(row); row = []; field = "";
      } else {
        field += ch;
      }
    }
    if (quoted) throw new Error("Delimited file contains an unterminated quoted field.");
    if (field.length || row.length) { row.push(field); rows.push(row); }
    return rows;
  }

  function detectDelimiter(text) {
    const first = text.split(/\r?\n/u).find(line => line.trim()) || "";
    const count = delimiter => {
      let quoted = false, total = 0;
      for (let i = 0; i < first.length; i++) {
        if (first[i] === '"' && first[i + 1] === '"' && quoted) i++;
        else if (first[i] === '"') quoted = !quoted;
        else if (first[i] === delimiter && !quoted) total++;
      }
      return total;
    };
    return count("\t") > count(",") ? "\t" : ",";
  }

  function getField(record, keys) {
    if (!record || typeof record !== "object" || Array.isArray(record)) return undefined;
    for (const key of keys) {
      if (Object.prototype.hasOwnProperty.call(record, key) && record[key] != null && record[key] !== "") return record[key];
      const match = Object.keys(record).find(name => name.toLowerCase() === key.toLowerCase());
      if (match && record[match] != null && record[match] !== "") return record[match];
    }
    return undefined;
  }

  function asCandidates(value) {
    const values = Array.isArray(value) ? value : [value];
    return [...new Set(values.flatMap(item => typeof item === "string" ? item.split(/\s*[;|]\s*/u) : [item])
      .map(normalize).filter(Boolean))];
  }

  function rowToProposal(source, candidates, sourceFile, sourceRow, raw) {
    const sourceForm = normalize(source);
    const candidateForms = asCandidates(candidates);
    const errors = [];
    if (!sourceForm) errors.push("missing source form");
    if (!candidateForms.length) errors.push("missing candidate form");
    if (isControlText(sourceForm) || candidateForms.some(isControlText)) errors.push("contains control characters");
    if (sourceForm.length > 300 || candidateForms.some(value => value.length > 300)) errors.push("word or phrase exceeds 300 characters");
    if (errors.length) return { sourceFile, sourceRow, raw, status: "rejected", errors };

    return {
      sourceForm,
      candidates: candidateForms.map((form, index) => ({
        id: "import-row-" + sourceRow + "-candidate-" + (index + 1),
        form,
        reviewStatus: "proposed",
        editorial: {
          reviewStatus: "proposed",
          note: "Bulk-imported suggestion; not linguistically or etymologically verified."
        }
      })),
      provenance: { sourceFile, sourceRow, importMethod: "bulk-file" },
      editorial: {
        reviewStatus: "proposed",
        note: "Imported record awaiting human review."
      },
      status: "proposed"
    };
  }

  function parseJson(text, sourceFile) {
    let parsed;
    try { parsed = JSON.parse(text); }
    catch (error) { throw new Error("Invalid JSON: " + error.message); }
    const records = [];
    if (Array.isArray(parsed)) {
      parsed.forEach((item, index) => {
        if (Array.isArray(item)) records.push(rowToProposal(item[0], item[1], sourceFile, index + 1, item));
        else records.push(rowToProposal(getField(item, SOURCE_KEYS), getField(item, CANDIDATE_KEYS), sourceFile, index + 1, item));
      });
    } else if (parsed && typeof parsed === "object") {
      if (Array.isArray(parsed.entries)) {
        parsed.entries.forEach((item, index) => {
          if (Array.isArray(item)) records.push(rowToProposal(item[0], item[1], sourceFile, index + 1, item));
          else records.push(rowToProposal(getField(item, SOURCE_KEYS), getField(item, CANDIDATE_KEYS), sourceFile, index + 1, item));
        });
      } else {
        Object.entries(parsed).forEach(([source, candidate], index) =>
          records.push(rowToProposal(source, candidate, sourceFile, index + 1, { [source]: candidate })));
      }
    } else {
      throw new Error("JSON must contain an object map, an array of pairs, or an entries array.");
    }
    return records;
  }

  function parseDelimited(text, sourceFile) {
    const delimiter = detectDelimiter(text);
    const rows = splitDelimited(text, delimiter);
    const nonEmpty = rows.map((row, index) => ({ row, sourceRow: index + 1 }))
      .filter(item => item.row.some(cell => String(cell).trim()));
    if (!nonEmpty.length) return [];
    const first = nonEmpty[0].row.map(value => normalize(value).toLowerCase().replace(/[\s_-]/gu, ""));
    const sourceIndex = first.findIndex(value => HEADER_SOURCE.has(value));
    const candidateIndex = first.findIndex(value => HEADER_CANDIDATE.has(value));
    const hasHeader = sourceIndex >= 0 && candidateIndex >= 0;
    const dataRows = hasHeader ? nonEmpty.slice(1) : nonEmpty;
    return dataRows.map(({ row, sourceRow }) => {
      const source = hasHeader ? row[sourceIndex] : row[0];
      const candidates = hasHeader ? row[candidateIndex] : row[1];
      return rowToProposal(source, candidates, sourceFile, sourceRow, row);
    });
  }

  function mergeDuplicateSources(records) {
    const grouped = new Map(), rejected = [];
    for (const record of records) {
      if (record.status === "rejected") { rejected.push(record); continue; }
      const key = record.sourceForm.normalize("NFC").toLocaleLowerCase();
      if (!grouped.has(key)) grouped.set(key, { ...record, candidates: [...record.candidates], provenance: { ...record.provenance, sourceRows: [record.provenance.sourceRow] } });
      else {
        const existing = grouped.get(key);
        existing.provenance.sourceRows.push(record.provenance.sourceRow);
        for (const candidate of record.candidates) {
          if (!existing.candidates.some(item => item.form === candidate.form)) existing.candidates.push(candidate);
        }
      }
    }
    return [...grouped.values(), ...rejected];
  }

  function parseVocabularyFile({ name = "vocabulary.txt", content = "" } = {}) {
    const sourceFile = String(name);
    const extension = sourceFile.toLowerCase().split(".").pop();
    if (!["json", "csv", "tsv", "txt"].includes(extension)) {
      throw new Error("Unsupported file type. Use JSON, CSV, TSV or TXT.");
    }
    const text = String(content).replace(/^\uFEFF/u, "");
    const parsed = extension === "json" ? parseJson(text, sourceFile) : parseDelimited(text, sourceFile);
    const entries = mergeDuplicateSources(parsed);
    const rejected = entries.filter(item => item.status === "rejected");
    const proposed = entries.filter(item => item.status === "proposed");
    return Object.freeze({
      schemaVersion: 1,
      kind: "kannadawords-vocabulary-import-review",
      sourceFile,
      entries: proposed,
      rejected,
      report: {
        inputRows: parsed.length,
        proposedSources: proposed.length,
        proposedCandidates: proposed.reduce((total, item) => total + item.candidates.length, 0),
        rejectedRows: rejected.length,
        duplicateSourceRowsMerged: parsed.filter(item => item.status === "proposed").length - proposed.length
      },
      safety: {
        writesToStorage: false,
        modifiesCanonicalLexicon: false,
        autoApprovesVocabulary: false
      }
    });
  }

  return Object.freeze({ parseVocabularyFile, splitDelimited });
});
