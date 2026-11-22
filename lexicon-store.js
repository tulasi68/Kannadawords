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
      // Load the separately maintained master corpus for sentence-level lookup.
      // A master-file problem must not prevent the original comparative lexicon loading.
      try {
        const masterUrl = new URL("../master-lexicon.json", base);
        const masterData = await getJson(masterUrl, "no-cache");
        if (masterData.schemaVersion !== 1 || !Array.isArray(masterData.entries) ||
            masterData.entryCount !== masterData.entries.length ||
            masterData.entries.some(row => !Array.isArray(row.fields) || row.fields.length !== 8)) {
          throw new Error("Master lexicon structure or row count is invalid.");
        }
        masterWritingIndex = [...buildMasterWritingIndex(masterData), ...buildAchchaCoverageSupplements()];
      } catch (masterError) {
        masterWritingIndex = [];
        console.warn("Master corpus unavailable for sentence lookup; canonical lexicon remains available.", masterError);
      }
      // The textbook vocabulary is a separate editorial source. Load it into the
      // sentence matcher as unreviewed suggestions, without promoting its origin.
      try {
        const textbookUrl = new URL("../textbook-words.json", base);
        const textbookData = await getJson(textbookUrl, "no-cache");
        if (textbookData.schemaVersion !== 1 || textbookData.sourceFile !== "newwords.txt" ||
            !Array.isArray(textbookData.entries) || textbookData.entryCount !== textbookData.entries.length) {
          throw new Error("Textbook vocabulary structure or row count is invalid.");
        }
        textbookWritingIndex = buildTextbookWritingIndex(textbookData);
      } catch (textbookError) {
        textbookWritingIndex = [];
        console.warn("Textbook vocabulary unavailable for sentence lookup; other lexicons remain available.", textbookError);
      }
      // The civic/media/school signboard list is also part of the unified
      // lookup corpus; load it here so Tab 4 sees the same collection as Tab 1.
      try {
        const landingUrl = new URL("../landing-words.json", base);
        const landingData = await getJson(landingUrl, "no-cache");
        if (!Array.isArray(landingData) || landingData.length !== 173 ||
            landingData.some(row => !Array.isArray(row) || row.length !== 6)) {
          throw new Error("Landing vocabulary structure or row count is invalid.");
        }
        landingWritingIndex = buildLandingWritingIndex(landingData);
      } catch (landingError) {
        landingWritingIndex = [];
        console.warn("Landing vocabulary unavailable for sentence lookup; other lexicons remain available.", landingError);
      }
      // Load the conservative, editorially maintained root-family index.
      // It contains explicit word forms only; unknown forms are never guessed by suffix stripping.
      try {
        const familyUrl = new URL("../root-families.json", base);
        const familyData = await getJson(familyUrl, "no-cache");
        if (familyData.schemaVersion !== 1 || !Array.isArray(familyData.families) ||
            familyData.families.some(family => !family.id || !family.root || !Array.isArray(family.forms) ||
              family.forms.some(form => !form.word || !Array.isArray(form.alternatives)))) {
          throw new Error("Root-family data structure is invalid.");
        }
        rootFamilyWritingIndex = buildRootFamilyWritingIndex(familyData);
      } catch (familyError) {
        rootFamilyWritingIndex = [];
        console.warn("Root-family index unavailable; existing lexicons remain available.", familyError);
      }
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
    if (!writingIndex) return [];
    const query = String(text || "").normalize("NFC");
    const foldedQuery = query.toLocaleLowerCase();
    const canonical = writingIndex.entries.flatMap(entry => {
      if (!entry.candidates.length) return [];
      const forms = (entry.sourceForms || []).map(form => String(form).normalize("NFC")).filter(form => !query || foldedQuery.includes(String(form).toLocaleLowerCase()));
      return forms.map(form => ({ ...entry, sourceForms: [form] }));
    });
    const master = query
      ? masterWritingIndex.filter(entry => entry.sourceForms.some(form => foldedQuery.includes(String(form).toLocaleLowerCase())))
      : masterWritingIndex.slice(0, 100);
    const textbook = query
      ? textbookWritingIndex.filter(entry => entry.sourceForms.some(form => foldedQuery.includes(String(form).toLocaleLowerCase())))
      : textbookWritingIndex.slice(0, 100);
    const landing = query
      ? landingWritingIndex.filter(entry => entry.sourceForms.some(form => foldedQuery.includes(String(form).toLocaleLowerCase())))
      : landingWritingIndex.slice(0, 100);
    const rootFamilies = query
      ? rootFamilyWritingIndex.filter(entry => entry.sourceForms.some(form => foldedQuery.includes(String(form).toLocaleLowerCase())))
      : rootFamilyWritingIndex.slice(0, 100);
    // Merge every live source by source spelling so Tab 4 sees the same
    // alternatives available across the unified word collection.
    const merged = new Map();
    for (const entry of [...canonical, ...master, ...textbook, ...landing, ...rootFamilies]) {
      const form = entry.sourceForms[0];
      if (!merged.has(form)) merged.set(form, { ...entry, sourceForms: [form], candidates: [] });
      const target = merged.get(form);
      if (!target.meaning && entry.meaning) target.meaning = entry.meaning;
      if (entry.rootFamilyId) {
        target.rootFamilyIds = [...new Set([...(target.rootFamilyIds || []), entry.rootFamilyId])];
        target.rootFamilyRoots = [...new Set([...(target.rootFamilyRoots || []), entry.root])];
        target.relationshipTypes = [...new Set([...(target.relationshipTypes || []), entry.relationshipType])];
      }
      for (const candidate of entry.candidates || []) {
        if (candidate.word && !target.candidates.some(existing => existing.word === candidate.word)) target.candidates.push(candidate);
      }
    }
    const matched = [...merged.values()].filter(entry => entry.candidates.length);
    // When scanning a passage, return every matching entry (not a hard 100-cap).
    // Cap only the unfiltered dump used for diagnostics.
    return query ? matched : matched.slice(0, 100);
  }
  function getLabels() { return manifest?.etymologyLabels || {}; }
  function getReference(id) { return manifest?.references?.find(reference => reference.id === id) || null; }
  window.KannadaLexiconStore = { ready: initialize, loadPage, loadAllEntries, getCategories, getCategoryCount, searchAchchaLexicon, getLabels, getReference };
})();
