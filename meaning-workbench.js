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
    renderCurrent();status("Loaded saved word investigation.");
  }
  window.toggleMeaningWorkbench = function(force) {
    const panel=byId("meaning-workbench"); if(!panel)return;
    const show=typeof force==="boolean"?force:panel.classList.contains("hidden");
    panel.classList.toggle("hidden",!show);
    if(show){panel.scrollIntoView({behavior:"smooth",block:"nearest"});byId("mw-source-word")?.focus();}
  };
  window.searchMeaningInRala = function() {
    const meaning=byId("mw-english-meaning").value.trim();
    if(!meaning){status("Enter the English meaning first.");byId("mw-english-meaning").focus();return;}
    const url="https://rala.kutuhula.in/index.html?q="+encodeURIComponent(meaning);
    window.open(url,"_blank","noopener,noreferrer");
    status("Rala opened for this English meaning. Check the source shown for each result.");
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
  read();
  const initial=records.findIndex(item=>item.sourceWord==="ವಿಭಜನೆ");
  if(initial>=0) loadRecord(initial);
  else {current=seed;renderCurrent();}
  renderSaved();
})();