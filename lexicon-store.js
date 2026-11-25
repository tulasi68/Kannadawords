/* Browser-side, versioned and lazy-loading lexicon store. */
(() => {
  "use strict";
  const script = document.currentScript;
  const base = new URL("./lexicon-dist/", script ? script.src : document.baseURI);
  const shardCache = new Map();
  let manifest = null;
  let writingIndex = null;
  let initPromise = null;

  function checksum(value) {
    let hash = 0xcbf29ce484222325n;
    for (let i = 0; i < value.length; i++) {
      hash ^= BigInt(value.charCodeAt(i));
      hash = BigInt.asUintN(64, hash * 0x100000001b3n);
    }
    return hash.toString(16).padStart(16, "0");
  }
  async function getJson(url, cache) {
    const response = await fetch(url, { cache: cache || "force-cache" });
    if (!response.ok) throw new Error("Lexicon request failed (" + response.status + "): " + url);
    return response.json();
  }
  async function initialize() {
    if (initPromise) return initPromise;
    initPromise = (async () => {
      const manifestUrl = new URL("manifest.json", base);
      manifest = await getJson(manifestUrl, "no-cache");
      if (manifest.schemaVersion !== 2 || manifest.generatorVersion !== "2.1.0" || !manifest.buildId || manifest.checksumAlgorithm !== "fnv1a-64-utf16" ||
          !Array.isArray(manifest.entryOrder) || !Array.isArray(manifest.shards) ||
          !manifest.entryToShard || !manifest.categoryIds || !Array.isArray(manifest.references)) {
        throw new Error("Unsupported or incomplete lexicon manifest.");
      }
      if (manifest.entryOrder.length !== manifest.entryCount ||
          new Set(manifest.entryOrder).size !== manifest.entryCount ||
          Object.keys(manifest.entryToShard).length !== manifest.entryCount ||
          manifest.shards.reduce((total, shard) => total + shard.count, 0) !== manifest.entryCount) {
        throw new Error("Lexicon manifest identity or shard counts are inconsistent.");
      }
      for (const id of manifest.entryOrder) {
        if (!manifest.entryToShard[id]) throw new Error("Manifest has no shard for entry " + id);
      }
      for (const ids of Object.values(manifest.categoryIds)) {
        if (!Array.isArray(ids) || ids.some(id => !manifest.entryToShard[id])) throw new Error("Invalid category index in lexicon manifest.");
      }
      const indexUrl = new URL(manifest.writingIndex + "?v=" + encodeURIComponent(manifest.buildId), base);
      writingIndex = await getJson(indexUrl);
      if (writingIndex.schemaVersion !== manifest.schemaVersion || writingIndex.generatorVersion !== manifest.generatorVersion || writingIndex.buildId !== manifest.buildId || !Array.isArray(writingIndex.entries)) {
        throw new Error("Writing index and lexicon manifest versions do not match.");
      }
      // The master CSV is the sole source for vocabulary suggestions in Tab 4.
      // Legacy datasets remain in the repository for historical/reference purposes only.
      const csvUrl = new URL("../MergedMasterCopy_10000.csv", base);
      const csvResponse = await fetch(csvUrl, { cache: "no-cache" });
      if (!csvResponse.ok) throw new Error("Master vocabulary CSV could not be loaded (" + csvResponse.status + ").");
      const csvRows = parseMasterCsvRows(await csvResponse.text());
      const expectedHeader = ["Entry ID", "Source Word / Loanword", "Primary Accha Kannada", "Alternative Native Options", "English Meaning", "Category / Domain", "Naturalness Fit", "Dravidian Root", "Usage & Etymology Notes", "Dataset Origin", "Resolution Status", "All Sources"];
      if (!csvRows.length || expectedHeader.some((name, index) => csvRows[0][index] !== name)) throw new Error("Master vocabulary CSV header failed integrity validation.");
      const records = csvRows.slice(1).filter(row => row.some(value => value.trim()));
      if (records.length !== 8470 || records.some(row => row.length !== 12)) throw new Error("Master vocabulary CSV row count or schema failed integrity validation.");
      masterWritingIndex = buildMergedCsvWritingIndex(records);
      textbookWritingIndex = [];
      landingWritingIndex = [];
      rootFamilyWritingIndex = [];
      return manifest;
    })().catch(error => { initPromise = null; throw error; });
    return initPromise;
  }
  async function loadShard(shardId) {
    if (shardCache.has(shardId)) return shardCache.get(shardId);
    const info = manifest.shards.find(item => item.id === shardId);
    if (!info) throw new Error("Unknown lexicon shard: " + shardId);
    const promise = (async () => {
      const url = new URL(info.file + "?v=" + encodeURIComponent(manifest.buildId), base);
      const response = await fetch(url, { cache: "no-cache" });
      if (!response.ok) throw new Error("Could not load lexicon shard " + shardId + " (" + response.status + ").");
      const raw = await response.text();
      if (checksum(raw) !== info.checksum) throw new Error("Lexicon shard checksum mismatch: " + shardId);
      const data = JSON.parse(raw);
      if (data.schemaVersion !== manifest.schemaVersion || data.generatorVersion !== manifest.generatorVersion || data.buildId !== manifest.buildId || !Array.isArray(data.entries) || data.entries.length !== info.count) {
        throw new Error("Lexicon shard metadata mismatch: " + shardId);
      }
      const map = new Map();
      for (const entry of data.entries) {
        if (!entry.id || map.has(entry.id) || manifest.entryToShard[entry.id] !== shardId) {
          throw new Error("Invalid or misplaced entry in shard " + shardId);
        }
        map.set(entry.id, entry);
      }
      return map;
    })();
    shardCache.set(shardId, promise);
    try { return await promise; }
    catch (error) { shardCache.delete(shardId); throw error; }
  }
  async function loadPage(category, page, pageSize) {
    await initialize();
    const ids = category === "all" ? manifest.entryOrder : (manifest.categoryIds[category] || []);
    const total = ids.length;
    const start = Math.max(0, Number(page) || 0) * Math.max(1, Number(pageSize) || 20);
    const pageIds = ids.slice(start, start + Math.max(1, Number(pageSize) || 20));
    const shardIds = [...new Set(pageIds.map(id => manifest.entryToShard[id]).filter(Boolean))];
    const maps = await Promise.all(shardIds.map(loadShard));
    const records = new Map();
    maps.forEach(map => map.forEach((value,key) => records.set(key,value)));
    const missing = pageIds.filter(id => !records.has(id));
    if (missing.length) throw new Error("Lexicon page is incomplete; missing IDs: " + missing.join(", "));
    return { entries: pageIds.map(id => window.KannadaLexiconDisplayAdapter.toDisplayEntry(records.get(id))), total, page, pageSize };
  }
  async function loadAllEntries() {
    await initialize();
    const entries = [];
    const pageSize = 100;
    const pages = Math.ceil(manifest.entryCount / pageSize);
    for (let page = 0; page < pages; page++) {
      const result = await loadPage("all", page, pageSize);
      entries.push(...result.entries);
    }
    if (entries.length !== manifest.entryCount) throw new Error("Complete lexicon load returned an unexpected entry count.");
    return entries;
  }
  function getCategories() {
    return manifest ? Object.keys(manifest.categoryIds) : [];
  }
  function getCategoryCount(category) {
    if (!manifest) return 0;
    return category === "all" ? manifest.entryCount : (manifest.categoryIds[category] || []).length;
  }
  let masterWritingIndex = [];
  let textbookWritingIndex = [];
  let landingWritingIndex = [];
  let rootFamilyWritingIndex = [];

  function parseMasterCsvRows(text) {
    const rows = []; let row = [], cell = "", quoted = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (quoted) {
        if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
        else if (ch === '"') quoted = false;
        else cell += ch;
      } else if (ch === '"') quoted = true;
      else if (ch === ",") { row.push(cell); cell = ""; }
      else if (ch === "\n") { row.push(cell); rows.push(row); row = []; cell = ""; }
      else if (ch !== "\r") cell += ch;
    }
    if (cell.length || row.length) { row.push(cell); rows.push(row); }
    if (quoted) throw new Error("Master vocabulary CSV contains an unterminated quoted field.");
    return rows;
  }
  function buildMergedCsvWritingIndex(rows) {
    const bySource = new Map();
    for (const fields of rows) {
      const id = String(fields[0] || "").trim();
      const sourceForms = String(fields[1] || "").split(/\s*\/\s*/u).map(value => value.trim().normalize("NFC")).filter(Boolean);
      let primary, alternatives;
      const parseOptions = raw => {
        const value = String(raw || "").trim();
        try {
          const parsed = JSON.parse(value || "[]");
          if (Array.isArray(parsed)) return parsed;
        } catch {}
        // Plain-text legacy cells are slash-delimited. Malformed bracketed
        // arrays are quarantined rather than heuristically reconstructed.
        return value.startsWith("[") ? [] : value.split(/\\s*\\/\\s*/u).filter(Boolean);
      };
      primary = parseOptions(fields[2]);
      alternatives = parseOptions(fields[3]);
      const words = [...new Set([...primary, ...alternatives].map(cleanCandidateLabel).filter(Boolean))];
      if (!words.length) continue;
      const meaning = String(fields[4] || "").trim();
      const notes = [
        fields[6] ? "Naturalness fit: " + fields[6] : "",
        fields[7] ? "Dravidian root field: " + fields[7] : "",
        fields[8] ? String(fields[8]).trim() : ""
      ].filter(Boolean).join(" · ");
      for (const form of sourceForms) {
        if (!bySource.has(form)) bySource.set(form, { entryId: "merged-csv:" + id, sourceForms: [form], meaning, candidates: [] });
        const target = bySource.get(form);
        if (!target.meaning && meaning) target.meaning = meaning;
        for (const word of words) {
          if (!target.candidates.some(candidate => candidate.word === word)) target.candidates.push({
            word, origin: "uncertain", reviewStatus: "needs_review", originClassification: "uncertain",
            note: notes || "Suggestion from MergedMasterCopy_10000.csv; no new linguistic or etymological claim is made.",
            masterCsvEntryId: id
          });
        }
      }
    }
    return [...bySource.values()];
  }
  function cleanCandidateLabel(value) {
    const candidate = String(value || "").trim();
    const parenthetical = candidate.match(/^(.+?)\s*\(([^()]*)\)\s*$/u);
    if (parenthetical && /^[A-Za-z][A-Za-z .'-]*$/.test(parenthetical[2].trim())) {
      return parenthetical[1].trim();
    }
    return candidate;
  }
  function buildMasterWritingIndex(data) {
    const bySource = new Map();
    for (const row of data.entries) {
      const fields = row.fields;
      if (!Array.isArray(fields) || fields.length !== 8) continue;
      const sourceForms = String(fields[1] || "").split(/\s*\/\s*/).flatMap(value => {
        const source = value.trim().normalize("NFC");
        if (!source) return [];
        // Preserve the corpus spelling and expose parenthesized transliterations
        // as independent lookup forms (e.g. "ವರ್ಣ (Varna)" -> "ವರ್ಣ", "Varna").
        const forms = [source];
        const parenthetical = source.match(/^(.+?)\s*\(([^()]*)\)\s*$/);
        if (parenthetical) {
          forms.push(parenthetical[1].trim().normalize("NFC"));
          forms.push(parenthetical[2].trim().normalize("NFC"));
        }
        return [...new Set(forms.filter(Boolean))];
      });
      const rawAlternatives = String(fields[2] || "").trim();
      let alternatives = [];
      // Some imported spreadsheet rows contain a JSON array escaped as a TSV cell.
      // Decode that representation before falling back to the ordinary slash list.
      if (rawAlternatives.startsWith('"[') && rawAlternatives.endsWith(']"')) {
        try { alternatives = JSON.parse(rawAlternatives.slice(1, -1).replace(/""/g, '"')); } catch { alternatives = []; }
      } else if (rawAlternatives.startsWith("[")) {
        try { alternatives = JSON.parse(rawAlternatives); } catch { alternatives = []; }
      }
      if (!Array.isArray(alternatives) || !alternatives.length) {
        alternatives = rawAlternatives.split(/\s*\/\s*/);
      }
      alternatives = alternatives.map(cleanCandidateLabel).filter(Boolean);
      const meaning = String(fields[3] || "").trim();
      const fit = String(fields[5] || "").trim();
      const root = String(fields[6] || "").trim();
      const usage = String(fields[7] || "").trim();
      const noteParts = ["Master corpus entry"];
      if (fit) noteParts.push("Naturalness fit: " + fit);
      if (root) noteParts.push("Dravidian root recorded: " + root);
      if (usage) noteParts.push(usage);
      const note = noteParts.join(" · ");
      const candidates = alternatives.map(word => ({
        word,
        origin: "uncertain",
        reviewStatus: "needs_review",
        originClassification: "uncertain",
        note,
        masterSourceId: row.id
      }));
      for (const form of sourceForms) {
        if (!bySource.has(form)) bySource.set(form, { entryId: "master:" + row.id, sourceForms: [form], meaning, candidates: [] });
        const target = bySource.get(form);
        if (!target.meaning && meaning) target.meaning = meaning;
        for (const candidate of candidates) {
          if (!target.candidates.some(existing => existing.word === candidate.word)) target.candidates.push(candidate);
        }
      }
    }
    return [...bySource.values()];
  }
  function buildTextbookWritingIndex(data) {
    const bySource = new Map();
    for (const row of data.entries) {
      const forms = Array.isArray(row.sourceForms) && row.sourceForms.length
        ? row.sourceForms
        : expandMasterSourceForms(row.inputWord);
      const rawCandidates = [
        ...String(row.primary || "").split(/\s*\/\s*/u),
        ...(Array.isArray(row.alternatives) ? row.alternatives : [])
      ].map(cleanCandidateLabel).filter(Boolean);
      const candidates = [...new Set(rawCandidates)].map(word => ({
        word,
        origin:"uncertain",
        reviewStatus:"needs_review",
        originClassification:"uncertain",
        note:"User-supplied textbook suggestion; editorial and etymological review is pending.",
        textbookSourceId:row.id
      }));
      if (!candidates.length) continue;
      const meaning = String(row.meaning || "").trim();
      const note = [row.sourceCategory, row.usageNote].filter(Boolean).join(" · ");
      for (const rawForm of forms) {
        const form = String(rawForm || "").trim().normalize("NFC");
        if (!form) continue;
        if (!bySource.has(form)) bySource.set(form, {
          entryId:"textbook:" + row.id, sourceForms:[form], meaning, candidates:[], note,
          sourceDataset:"kannada-textbooks", sourceLine:row.sourceLine
        });
        const target = bySource.get(form);
        if (!target.meaning && meaning) target.meaning = meaning;
        for (const candidate of candidates) {
          if (!target.candidates.some(existing => existing.word === candidate.word)) target.candidates.push(candidate);
        }
      }
    }
    return [...bySource.values()];
  }
  function expandMasterSourceForms(value) {
    const forms = new Set();
    for (const part of String(value || "").split(/\s*\/\s*/u)) {
      const source = part.trim().normalize("NFC");
      if (!source) continue;
      const parenthetical = source.match(/^(.+?)\s*\(([^()]*)\)\s*$/u);
      if (parenthetical) {
        forms.add(parenthetical[1].trim().normalize("NFC"));
        forms.add(parenthetical[2].trim().normalize("NFC"));
      } else forms.add(source);
    }
    return [...forms];
  }
  function buildLandingWritingIndex(rows) {
    const bySource = new Map();
    for (const row of rows) {
      const sourceForms = expandMasterSourceForms(row[1]);
      const alternatives = String(row[2] || "").split(/\s*\/\s*/u).map(cleanCandidateLabel).filter(Boolean);
      const candidates = [...new Set(alternatives)].map(word => ({
        word, origin:"uncertain", reviewStatus:"needs_review",
        originClassification:"uncertain",
        note:"Civic, media or education collection proposal; editorial review is pending.",
        landingSourceId:String(row[0] || "")
      }));
      for (const form of sourceForms) {
        if (!bySource.has(form)) bySource.set(form, {
          entryId:"landing:"+String(row[0] || form), sourceForms:[form],
          meaning:String(row[3] || "").trim(), candidates:[]
        });
        const target=bySource.get(form);
        for (const candidate of candidates) {
          if (!target.candidates.some(existing=>existing.word===candidate.word)) target.candidates.push(candidate);
        }
      }
    }
    return [...bySource.values()];
  }
  function buildRootFamilyWritingIndex(data) {
    const entries = [];
    for (const family of data.families) {
      for (const form of family.forms) {
        const candidates = [...new Set(form.alternatives.map(cleanCandidateLabel).filter(Boolean))].map(word => ({
          word,
          origin: "uncertain",
          reviewStatus: "needs_review",
          originClassification: "uncertain",
          note: [form.note, "Root-family relationship is editorially maintained and awaiting linguistic review."].filter(Boolean).join(" · "),
          rootFamilyId: family.id
        }));
        if (!candidates.length) continue;
        entries.push({
          entryId: "root-family:" + family.id + ":" + form.word,
          sourceForms: [String(form.word).normalize("NFC")],
          meaning: String(form.meaning || family.rootMeaning || "").trim(),
          candidates,
          rootFamilyId: family.id,
          root: family.root,
          relationshipType: family.relationshipType,
          familyReviewStatus: family.reviewStatus || "needs_review"
        });
      }
    }
    return entries;
  }
  // Carefully curated coverage additions for frequent forms missing from the
  // source collections. These remain provisional suggestions, not verified etymologies.
  function buildAchchaCoverageSupplements() {
    const rows = [
      ["ಅತಿಥಿ", "Guest", ["ನೆಂಟ", "ಬಂದವರು"]],
      ["ಅತಿಥಿಗಳು", "Guests", ["ನೆಂಟರು", "ಬಂದವರು"]],
      ["ಅತಿಥಿಯನ್ನು", "Guest (object form)", ["ನೆಂಟರನ್ನು"]],
      ["ಅತಿಥಿಗಳಿಗೆ", "To guests", ["ನೆಂಟರಿಗೆ"]],
      ["ಆಯೋಜಿಸಿದ್ದ", "Had organised / arranged", ["ಏರ್ಪಡಿಸಿದ್ದ"]],
      ["ಆಯೋಜಿಸಿದ", "Organised / arranged", ["ಏರ್ಪಡಿಸಿದ"]],
      ["ಆಯೋಜಿಸಿರುವ", "Having organised / arranged", ["ಏರ್ಪಡಿಸಿರುವ"]],
      ["ವರ್ಣರಂಜಿತ", "Colourful", ["ಬಣ್ಣಬಣ್ಣದ", "ರಂಗುರಂಗಿನ"]],
      ["ವರ್ಣ ರಂಜಿತ", "Colourful", ["ಬಣ್ಣಬಣ್ಣದ", "ರಂಗುರಂಗಿನ"]],
      ["ಶೈಲಿ", "Style", ["ಬಗೆ", "ರೀತಿ", "ಮಾದರಿ"]],
      ["ಶೈಲಿಯ", "Of the style", ["ಬಗೆಯ", "ರೀತಿಯ", "ಮಾದರಿಯ"]]
    ];
    return rows.map(([form, meaning, words], index) => ({
      entryId: "coverage-supplement:" + index,
      sourceForms: [form],
      meaning,
      candidates: words.map(word => ({
        word,
        origin: "uncertain",
        reviewStatus: "needs_review",
        originClassification: "uncertain",
        note: "Coverage supplement; semantic fit and natural usage should be checked in context."
      }))
    }));
  }
  function searchAchchaLexicon(text) {
    if (!masterWritingIndex.length) return [];
    const query = String(text || "").normalize("NFC");
    const foldedQuery = query.toLocaleLowerCase();
    const matches = query
      ? masterWritingIndex.filter(entry => entry.sourceForms.some(form => foldedQuery.includes(String(form).toLocaleLowerCase())))
      : masterWritingIndex.slice(0, 100);
    return matches
      .map(entry => ({ ...entry, sourceForms: [...entry.sourceForms] }))
      .sort((a, b) => b.sourceForms[0].length - a.sourceForms[0].length);
  }
  function getLabels() { return manifest?.etymologyLabels || {}; }
  function getReference(id) { return manifest?.references?.find(reference => reference.id === id) || null; }
  window.KannadaLexiconStore = { ready: initialize, loadPage, loadAllEntries, getCategories, getCategoryCount, searchAchchaLexicon, getLabels, getReference };
})();
