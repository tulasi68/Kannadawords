(() => {
  "use strict";
  const KEY = "kannadawords.meaningWorkbench.v1";
  const seed = {
    id: "vibhajane",
    sourceWord: "ವಿಭಜನೆ",
    englishMeaning: "a dividing or being divided; division",
    context: "",
    candidates: [
      { word: "ಹಂಚಿಕೆ", source: "Existing project list", originStatus: "not-verified", note: "Already present in the 2,087-word project spreadsheet; verify exact sense and origin." },
      { word: "ಒಡೆಯುವಿಕೆ", source: "Existing project list", originStatus: "not-verified", note: "Already present in the 2,087-word project spreadsheet; check whether it fits the intended sense." }
    ],
    updatedAt: "2026-11-23T00:00:00.000Z"
  };
  let records = [];
  let current = null;
  let selectedWord = "";
  const byId = id => document.getElementById(id);
  const read = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(KEY) || "[]");
      records = Array.isArray(parsed) ? parsed : [];
    } catch { records = []; }
    if (!records.some(item => item.sourceWord === seed.sourceWord)) records.unshift(seed);
  };
  const snapshot = () => ({
    id: current?.id || ("word-" + Date.now()),
    sourceWord: byId("mw-source-word").value.trim(),
    englishMeaning: byId("mw-english-meaning").value.trim(),
    context: byId("mw-context").value.trim(),
    candidates: current?.sourceWord === byId("mw-source-word").value.trim() && current?.candidates ? [...current.candidates] : [],
    updatedAt: new Date().toISOString()
  });
  const persist = () => {
    try { localStorage.setItem(KEY, JSON.stringify(records)); }
    catch { status("Could not save in this browser. Export the JSON as a backup."); }
  };
  const status = message => { const el=byId("mw-status"); if(el) el.textContent=message; };
  const safe = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  function renderCurrent() {
    const list=byId("mw-candidate-list"); if(!list) return;
    list.replaceChildren();
    const candidates=current?.candidates || [];
    if(!candidates.length){ const p=document.createElement("p");p.className="text-sm text-stone-500";p.textContent="No candidates recorded yet.";list.append(p);return; }
    candidates.forEach((item,index)=>{
      const card=document.createElement("div");card.className="rounded-lg border border-stone-200 bg-white p-3";
      const top=document.createElement("div");top.className="flex flex-wrap items-start justify-between gap-2";
      const word=document.createElement("strong");word.className="kn text-base";word.textContent=item.word;
      const remove=document.createElement("button");remove.type="button";remove.className="text-xs text-red-700 underline";remove.textContent="Remove";remove.addEventListener("click",()=>{current.candidates.splice(index,1);renderCurrent();});
      top.append(word,remove);card.append(top);
      const meta=document.createElement("p");meta.className="mt-1 text-xs text-stone-500";meta.textContent=item.source+" · "+item.originStatus;card.append(meta);
      if(item.note){const note=document.createElement("p");note.className="mt-1 text-sm text-stone-700";note.textContent=item.note;card.append(note);}
      list.append(card);
    });
  }
  function renderSaved() {
    const list=byId("mw-saved-list"); if(!list)return;
    list.replaceChildren();
    records.forEach((record,index)=>{
      const button=document.createElement("button");button.type="button";button.className="w-full rounded-lg border border-stone-200 bg-white p-3 text-left hover:border-sky-400";
      const title=document.createElement("span");title.className="kn font-semibold";title.textContent=record.sourceWord+" — ";
      const meaning=document.createElement("span");meaning.className="text-sm text-stone-700";meaning.textContent=record.englishMeaning;
      const count=document.createElement("span");count.className="block mt-1 text-xs text-stone-500";count.textContent=(record.candidates||[]).length+" candidate(s)";
      button.append(title,meaning,count);button.addEventListener("click",()=>loadRecord(index));list.append(button);
    });
  }
  function loadRecord(index) {
    current=JSON.parse(JSON.stringify(records[index]));
    byId("mw-source-word").value=current.sourceWord;
    byId("mw-english-meaning").value=current.englishMeaning;
    byId("mw-context").value=current.context||"";
    updateAlarLink(current.sourceWord);
    renderCurrent();status("Loaded saved word investigation.");
  }
  function sentenceAroundWord(word) {
    const editor = byId("achcha-input");
    const text = editor ? (editor.innerText || editor.textContent || "") : "";
    const at = text.indexOf(word);
    if (at < 0) return text.trim();
    const stops = /[.!?।\n]/u;
    let start = at, end = at + word.length;
    while (start > 0 && !stops.test(text[start - 1])) start--;
    while (end < text.length && !stops.test(text[end])) end++;
    return text.slice(start, end).trim();
  }
  function updateAlarLink(word) {
    const link = byId("mw-alar-link");
    if (link) link.href = "https://alar.ink/dictionary/kannada/english?q=" + encodeURIComponent(word || byId("mw-source-word").value.trim());
  }
  window.investigateSelectedWord = function() {
    const word = selectedWord.trim();
    if (!word) return;
    const existing = records.findIndex(item => item.sourceWord === word);
    if (existing >= 0) {
      loadRecord(existing);
    } else {
      current = { id: "word-" + Date.now(), sourceWord: word, englishMeaning: "", context: sentenceAroundWord(word), candidates: [] };
      byId("mw-source-word").value = word;
      byId("mw-english-meaning").value = "";
      byId("mw-context").value = current.context;
      renderCurrent();
      status("Word selected. Open Alar and enter the English definition for the exact sense.");
    }
    updateAlarLink(word);
    window.toggleMeaningWorkbench(true);
  };
  document.addEventListener("selectionchange", () => {
    const editor = byId("achcha-input");
    const button = byId("meaning-workbench-investigate");
    const selection = window.getSelection();
    if (button && document.activeElement === button) return;
    if (!editor || !button || !selection || selection.isCollapsed || !selection.rangeCount) {
      if (button) button.classList.add("hidden");
      selectedWord = "";
      return;
    }
    const range = selection.getRangeAt(0);
    const node = range.commonAncestorContainer;
    const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    if (!element || !editor.contains(element)) {
      button.classList.add("hidden");
      selectedWord = "";
      return;
    }
    const candidate = selection.toString().trim().normalize("NFC");
    if (!/^[\u0C80-\u0CFF]+$/u.test(candidate)) {
      button.classList.add("hidden");
      selectedWord = "";
      return;
    }
    selectedWord = candidate;
    button.classList.remove("hidden");
  });
  window.toggleMeaningWorkbench = function(force) {
    const panel=byId("meaning-workbench"); if(!panel)return;
    const show=typeof force==="boolean"?force:panel.classList.contains("hidden");
    panel.classList.toggle("hidden",!show);
    if(show){panel.scrollIntoView({behavior:"smooth",block:"nearest"});byId("mw-source-word")?.focus();updateAlarLink(byId("mw-source-word").value.trim());}
  };
  // Load only exact English-token shards. Rare-token shards carry their
  // matching records, so searches never fetch unrelated 5,000-record chunks.
  const ALAR_INDEX_BASE = "./alar/search-index/";
  const RARE_TOKEN_LIMIT = 500;
  const ENGLISH_STOP_WORDS = new Set([
    "a","an","the","of","or","and","being","be","is","are","to","for",
    "in","on","by","as","that","which","with","from","into","this","it","its"
  ]);
  const indexShardCache = new Map();
  const recordChunkCache = new Map();

  function normalizeEnglish(text) {
    return String(text || "").toLowerCase().normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ")
      .trim().replace(/\s+/g, " ");
  }
  async function fetchJson(url) {
    const response = await fetch(url, { cache: "force-cache" });
    if (!response.ok) throw new Error("Could not load " + url + " (HTTP " + response.status + ").");
    return response.json();
  }
  async function loadIndexShard(prefix) {
    if (!indexShardCache.has(prefix)) {
      indexShardCache.set(prefix, fetchJson(ALAR_INDEX_BASE + encodeURIComponent(prefix) + ".json")
        .catch(error => { indexShardCache.delete(prefix); throw error; }));
    }
    return indexShardCache.get(prefix);
  }
  async function loadRecordChunk(number) {
    if (!recordChunkCache.has(number)) {
      const name = String(number).padStart(3, "0");
      recordChunkCache.set(number, fetchJson("./alar/search-records/" + name + ".json")
        .catch(error => { recordChunkCache.delete(number); throw error; }));
    }
    return recordChunkCache.get(number);
  }

  async function findAlarMatches(englishMeaning, originalWord) {
    const normalized = normalizeEnglish(englishMeaning);
    const terms = [...new Set(normalized.split(" ")
      .filter(term => term.length >= 3 && !ENGLISH_STOP_WORDS.has(term)))];
    if (!terms.length) return [];

    const prefixes = [...new Set(terms.map(term => term.slice(0, 2)))];
    const shards = await Promise.all(prefixes.map(loadIndexShard));
    const tokenData = new Map();
    for (const shard of shards) {
      for (const [token, data] of Object.entries(shard)) tokenData.set(token, data);
    }

    // Support both published index formats:
    // 1. Older shards: token -> [record IDs], with records in 5,000-row chunks.
    // 2. Newer shards: token -> { ids, records }, with rare records embedded.
    const available = terms.map(term => {
      const data = tokenData.get(term);
      const ids = Array.isArray(data) ? data :
        (data && Array.isArray(data.ids) ? data.ids : []);
      return { term, data, ids };
    }).filter(item => item.ids.length);

    if (!available.length) return [];

    // Search across several selective tokens, not only the rarest one.
    // Anchoring on just one token (e.g. "skills") can hide relevant entries
    // whose definitions contain another part of the meaning (e.g. "study").
    available.sort((a, b) => a.ids.length - b.ids.length);
    const selected = available.filter(item => item.ids.length <= RARE_TOKEN_LIMIT).slice(0, 4);
    if (!selected.length) {
      throw new Error("This meaning is too broad for a precise search. Add a more specific word, such as 'learning', 'study', or 'teaching'.");
    }

    const excluded = String(originalWord || "").normalize("NFC").trim();
    const candidateIds = new Set();
    const recordsById = new Map();

    for (const item of selected) {
      if (item.data && !Array.isArray(item.data) && Array.isArray(item.data.records)) {
        for (const record of item.data.records) {
          if (record && record.id !== undefined) recordsById.set(String(record.id), record);
        }
      } else {
        for (const id of item.ids) candidateIds.add(String(id));
      }
    }

    // Older published shards store IDs only. Retrieve only the record chunks
    // that contain IDs selected by the rare-token postings.
    const chunkNumbers = [...new Set([...candidateIds].map(id =>
      Math.floor(Number(id) / 5000)))];
    const chunks = await Promise.all(chunkNumbers.map(loadRecordChunk));
    for (const chunk of chunks) {
      for (const record of chunk) {
        if (record && record.id !== undefined && candidateIds.has(String(record.id))) {
          recordsById.set(String(record.id), record);
        }
      }
    }

    const phrase = normalized;
    const results = [];
    for (const record of recordsById.values()) {
      const word = String(record.word || "").normalize("NFC").trim();
      const definition = String(record.definition || "").trim();
      if (!word || word === excluded || !definition) continue;
      const normalizedDefinition = normalizeEnglish(definition);
      const definitionTokens = new Set(normalizedDefinition.split(" "));
      const matchedTerms = terms.filter(term => definitionTokens.has(term));
      if (!matchedTerms.length) continue;
      const coverage = matchedTerms.length / terms.length;
      const phraseHit = phrase.length >= 5 && normalizedDefinition.includes(phrase);
      results.push({
        word, definition, entryId: record.entryId ?? "",
        definitionId: record.definitionId ?? "", type: record.type || "",
        score: (phraseHit ? 100 : 0) + Math.round(coverage * 30) + matchedTerms.length,
        matchedTerms, phraseHits: phraseHit ? [englishMeaning.trim()] : []
      });
    }

    const bestByWord = new Map();
    for (const item of results) {
      const old = bestByWord.get(item.word);
      if (!old || item.score > old.score) bestByWord.set(item.word, item);
    }
    return [...bestByWord.values()]
      .sort((a, b) => b.score - a.score || a.word.localeCompare(b.word, "kn"))
      .slice(0, 80);
  }
  function renderAlarMatches(matches) {
    const host = byId("mw-search-results");
    if (!host) return;
    host.replaceChildren();
    const heading = document.createElement("p");
    heading.className = "text-sm font-semibold text-stone-800";
    heading.textContent = matches.length
      ? matches.length + " Alar headwords matched this English meaning (up to 80 shown). Dictionary matching does not establish origin."
      : "No Alar headwords matched the searchable English terms. Try a shorter or more precise meaning.";
    host.append(heading);
    matches.forEach(item => {
      const card = document.createElement("article");
      card.className = "rounded-lg border border-stone-200 bg-white p-3";
      const top = document.createElement("div");
      top.className = "flex flex-wrap items-center justify-between gap-2";
      const word = document.createElement("strong");
      word.className = "kn text-lg text-stone-900";
      word.textContent = item.word;
      const refs = [];
      if (item.entryId !== "") refs.push("entry " + item.entryId);
      if (item.definitionId !== "") refs.push("definition " + item.definitionId);
      if (item.type) refs.push(item.type);
      const meta = document.createElement("span");
      meta.className = "text-xs text-stone-500";
      meta.textContent = "Alar " + refs.join(" · ");
      top.append(word, meta);
      const definition = document.createElement("p");
      definition.className = "mt-1 text-sm text-stone-700";
      definition.textContent = item.definition;
      const evidence = document.createElement("p");
      evidence.className = "mt-1 text-xs text-stone-500";
      evidence.textContent = "Matching English terms: " + item.matchedTerms.join(", ");
      const actions = document.createElement("div");
      actions.className = "mt-2 flex flex-wrap gap-3";
      const alarLink = document.createElement("a");
      alarLink.className = "text-xs font-semibold text-sky-800 underline";
      alarLink.href = "https://alar.ink/dictionary/kannada/english?q=" + encodeURIComponent(item.word);
      alarLink.target = "_blank";
      alarLink.rel = "noopener noreferrer";
      alarLink.textContent = "Open headword in Alar";
      const add = document.createElement("button");
      add.type = "button";
      add.className = "text-xs font-semibold text-amber-800 underline";
      add.textContent = "Record as candidate";
      add.addEventListener("click", () => {
        byId("mw-candidate").value = item.word;
        byId("mw-candidate-source").value = "Alar";
        byId("mw-origin-status").value = "not-verified";
        byId("mw-candidate-note").value = "Alar entry " + item.entryId +
          (item.definitionId ? ", definition " + item.definitionId : "") +
          ": " + item.definition;
        window.addMeaningCandidate();
      });
      actions.append(alarLink, add);
      card.append(top, definition, evidence, actions);
      host.append(card);
    });
  }
  window.searchAlarMeaning = async function() {
    const meaning = byId("mw-english-meaning").value.trim();
    if (!meaning) { status("Enter the English meaning first."); byId("mw-english-meaning").focus(); return; }
    const button = byId("mw-search-alar");
    if (button) { button.disabled = true; button.textContent = "Searching Alar…"; }
    try {
      status("Loading the smallest matching Alar token shard…");
      const matches = await findAlarMatches(meaning, byId("mw-source-word").value);
      renderAlarMatches(matches);
      status("Search complete. Only matching token shards and their relevant records were loaded. Dictionary matches do not prove native origin.");
    } catch (error) {
      status(error.message || "Alar search failed. Please retry.");
      const host = byId("mw-search-results");
      if (host) host.replaceChildren();
    } finally {
      if (button) { button.disabled = false; button.textContent = "Search Alar for Kannada equivalents"; }
    }
  };
  window.addMeaningCandidate = function() {
    const word=byId("mw-candidate").value.trim();
    if(!word){status("Enter a Kannada candidate first.");byId("mw-candidate").focus();return;}
    if(!current || current.sourceWord!==byId("mw-source-word").value.trim()) current=snapshot();
    if(current.candidates.some(item=>item.word===word)){status("That candidate is already recorded.");return;}
    current.candidates.push({
      word,
      source:byId("mw-candidate-source").value,
      originStatus:byId("mw-origin-status").value,
      note:byId("mw-candidate-note").value.trim()
    });
    byId("mw-candidate").value="";byId("mw-candidate-note").value="";
    renderCurrent();status("Candidate added. Save the word record to keep it.");
  };
  window.saveMeaningRecord = function() {
    const record=snapshot();
    if(!record.sourceWord||!record.englishMeaning){status("Enter both the Kannada word and its English meaning.");return;}
    record.candidates=current?.sourceWord===record.sourceWord && current?.candidates?[...current.candidates]:[];
    const index=records.findIndex(item=>item.sourceWord===record.sourceWord);
    if(index>=0) records[index]=record; else records.unshift(record);
    current=JSON.parse(JSON.stringify(record));persist();renderCurrent();renderSaved();
    status("Word investigation saved in this browser.");
  };
  window.exportMeaningRecords = function() {
    const blob=new Blob([JSON.stringify(records,null,2)],{type:"application/json;charset=utf-8"});
    const url=URL.createObjectURL(blob);const a=document.createElement("a");
    a.href=url;a.download="kannadawords-meaning-investigations.json";a.click();URL.revokeObjectURL(url);
    status("JSON export prepared.");
  };
  byId("mw-source-word")?.addEventListener("input", () => updateAlarLink(byId("mw-source-word").value.trim()));
  read();
  const initial=records.findIndex(item=>item.sourceWord==="ವಿಭಜನೆ");
  if(initial>=0) loadRecord(initial);
  else {current=seed;renderCurrent();}
  renderSaved();
})();