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
  // Lazy-load only the English token shards and record chunks needed for a query.
  const ALAR_INDEX_BASE = "./alar/search-index/";
  const ALAR_RECORD_BASE = "./alar/search-records/";
  const RECORD_CHUNK_SIZE = 5000;
  const ENGLISH_STOP_WORDS = new Set([
    "a","an","the","of","or","and","being","be","is","are","to","for",
    "in","on","by","as","that","which","with","from","into","this","it","its"
  ]);
  const indexShardCache = new Map();
  const recordChunkCache = new Map();

  function normalizeEnglish(text) {
    return String(text || "").toLowerCase().normalize("NFKD")
      .replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-z0-9]+/g, " ")
      .trim().replace(/\\s+/g, " ");
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
  async function loadRecordChunk(chunkNo) {
    const key = String(chunkNo).padStart(3, "0");
    if (!recordChunkCache.has(key)) {
      recordChunkCache.set(key, fetchJson(ALAR_RECORD_BASE + key + ".json")
        .catch(error => { recordChunkCache.delete(key); throw error; }));
    }
    return recordChunkCache.get(key);
  }
  async function findAlarMatches(englishMeaning, originalWord) {
    const normalized = normalizeEnglish(englishMeaning);
    const terms = [...new Set(normalized.split(" ")
      .filter(term => term.length >= 3 && !ENGLISH_STOP_WORDS.has(term)))];
    if (!terms.length) return [];

    const prefixes = [...new Set(terms.map(term => term.slice(0, 2)))];
    const shards = await Promise.all(prefixes.map(loadIndexShard));
    const postings = new Map();
    for (const shard of shards) {
      for (const [prefix, ids] of Object.entries(shard)) postings.set(prefix, ids);
    }
    const lists = terms.map(term => postings.get(term) || [])
      .map(ids => ids.filter(id => Number.isInteger(id)));
    if (lists.some(list => !list.length)) return [];

    // Rank by token overlap instead of requiring every query word to occur.
    // This keeps broad dictionary glosses useful while bounding browser work.
    const hitCounts = new Map();
    for (const list of lists) {
      for (const id of list) hitCounts.set(id, (hitCounts.get(id) || 0) + 1);
    }
    const minimumHits = terms.length <= 2 ? 1 : Math.max(2, Math.ceil(terms.length * 0.4));
    const ids = [...hitCounts.entries()]
      .filter(([, count]) => count >= minimumHits)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2500)
      .map(([id]) => id);
    if (!ids.length) return [];

    const chunkNumbers = [...new Set(ids.map(id => Math.floor(id / RECORD_CHUNK_SIZE)))];
    const chunks = await Promise.all(chunkNumbers.map(loadRecordChunk));
    const byId = new Map();
    chunks.flat().forEach(record => byId.set(record.id, record));

    const excluded = String(originalWord || "").normalize("NFC").trim();
    const phrase = normalized;
    const results = [];
    for (const id of ids) {
      const record = byId.get(id);
      if (!record) continue;
      const word = String(record.word || "").normalize("NFC").trim();
      const definition = String(record.definition || "").trim();
      if (!word || word === excluded || !definition) continue;
      const normalizedDefinition = normalizeEnglish(definition);
      const matchedTerms = terms.filter(term => normalizedDefinition.split(" ").includes(term));
      const coverage = matchedTerms.length / terms.length;
      if (!matchedTerms.length) continue;
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
      .sort((a,b) => b.score-a.score || a.word.localeCompare(b.word, "kn"))
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
      : "No Alar headwords matched all searchable English terms. Try a shorter or more precise meaning.";
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
      status("Loading only the English index shards needed for this search…");
      const matches = await findAlarMatches(meaning, byId("mw-source-word").value);
      renderAlarMatches(matches);
      status("Search complete. Only matching index shards and record chunks were loaded. Dictionary matches do not prove native origin.");
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