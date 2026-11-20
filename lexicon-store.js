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
  function getCategories() {
    return manifest ? Object.keys(manifest.categoryIds) : [];
  }
  function getCategoryCount(category) {
    if (!manifest) return 0;
    return category === "all" ? manifest.entryCount : (manifest.categoryIds[category] || []).length;
  }
  function searchAchchaLexicon(text) {
    if (!writingIndex) return [];
    const query = String(text || "").normalize("NFC");
    return writingIndex.entries.filter(entry =>
      entry.candidates.length && (!query || entry.sourceForms.some(form => query.includes(String(form).normalize("NFC"))))
    ).slice(0, 100);
  }
  function getLabels() { return manifest?.etymologyLabels || {}; }
  function getReference(id) { return manifest?.references?.find(reference => reference.id === id) || null; }
  window.KannadaLexiconStore = { ready: initialize, loadPage, getCategories, getCategoryCount, searchAchchaLexicon, getLabels, getReference };
})();
