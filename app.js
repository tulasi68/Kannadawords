// Sanskrit-first comparative Kannada vocabulary explorer.
// Each entry starts with the Sanskrit-derived form used in Kannada, then compares
// native Kannada, Tamil, Tulu and (only where sourced) Halegannada equivalents.

const STORAGE_KEY = "kannada_desi_v3";
const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const stats = document.getElementById("stats");

function loadState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { votes: {}, suggestions: {} }; }
  catch { return { votes: {}, suggestions: {} }; }
}
function saveState(state) { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function getVoteCount(entryId, altId) {
  const state = loadState();
  return (state.votes[entryId] && state.votes[entryId][altId]) || 0;
}
function castVote(entryId, altId) {
  const state = loadState();
  if (!state.votes[entryId]) state.votes[entryId] = {};
  state.votes[entryId][altId] = (state.votes[entryId][altId] || 0) + 1;
  saveState(state); filterAndRender();
renderContextual();
}
function getSuggestions(entryId) {
  const state = loadState(); return state.suggestions[entryId] || [];
}
function addSuggestion(entryId, word) {
  if (!word || !word.trim()) return;
  const state = loadState();
  if (!state.suggestions[entryId]) state.suggestions[entryId] = [];
  if (state.suggestions[entryId].some(s => s.word === word.trim())) {
    alert("This alternative is already listed."); return;
  }
  state.suggestions[entryId].push({ id:"user_"+Date.now(), word:word.trim(), note:"User suggestion", proto:null, tamil:null, tulu:null });
  saveState(state); filterAndRender();
}
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function languageRows(entry, alts) {
  const first = alts[0] || {};
  const rows = [
    ["Native Kannada", first.word || "—"],
    ["Tamil", first.tamil || "—"],
    ["Tulu", first.tulu || "—"],
    ["Halegannada", entry.halegannada || "Not yet sourced"],
    ["Proto-Dravidian root", first.proto || "Not reconstructed / not yet sourced"]
  ];
  return rows.map(([label,value]) => `
    <div class="grid grid-cols-[112px_1fr] gap-2 py-2 border-b border-stone-100 last:border-0">
      <span class="text-xs text-stone-500">${label}</span>
      <span class="kn text-base text-stone-800">${escapeHtml(value)}</span>
    </div>`).join("");
}
function render(entries) {
  grid.innerHTML = "";
  if (!entries.length) {
    grid.innerHTML = '<p class="col-span-full text-center text-stone-500 py-12">No matching words found.</p>';
    stats.textContent = "0 entries shown"; return;
  }
  entries.forEach(entry => {
    const card = document.createElement("article");
    card.className = "bg-white border border-stone-200 rounded-xl p-5 shadow-sm";
    const alts = [...entry.alternatives, ...getSuggestions(entry.id)];
    const totalVotes = alts.reduce((sum, alt) => sum + getVoteCount(entry.id,alt.id),0);
    const first = alts[0] || {};
    const rows = languageRows(entry, alts);
    const sentence = sentenceExamples[entry.id];
    const sentenceHtml = sentence ? `
      <section class="mt-4 pt-4 border-t border-stone-200">
        <h3 class="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-1">Sentence comparison</h3>
        <p class="text-xs text-stone-500 mb-3">Illustrative sample sentences, not historical quotations. Proto-Dravidian forms are reconstructed roots, not complete attested sentences.</p>
        <div class="space-y-3">
          <div><p class="text-xs text-stone-500 mb-1">Sample Kannada sentence using the Sanskrit-derived word</p><p class="kn text-base">${escapeHtml(sentence.source)}</p></div>
          <div><p class="text-xs text-emerald-700 mb-1">Rewritten with a native Kannada equivalent</p><p class="kn text-base">${escapeHtml(sentence.kannada)}</p></div>
          ${sentence.proto ? `<div><p class="text-xs text-violet-700 mb-1">Proto-Dravidian root (illustrative substitution)</p><p class="kn text-base">${escapeHtml(sentence.proto)}</p></div>` : ""}
          ${sentence.hale ? `<div><p class="text-xs text-amber-700 mb-1">Halegannada wording</p><p class="kn text-base">${escapeHtml(sentence.hale)}</p></div>` : ""}
        </div>
        ${sentence.note ? `<p class="text-xs text-stone-500 mt-2">${escapeHtml(sentence.note)}</p>` : ""}
      </section>` : `
      <section class="mt-4 pt-4 border-t border-stone-200">
        <h3 class="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-1">Sentence comparison</h3>
        <p class="text-xs text-stone-500">A reviewed sentence example has not yet been added for this entry.</p>
      </section>`;
    const voteHtml = alts.map(alt => {
      const count = getVoteCount(entry.id,alt.id);
      return `<button onclick="castVote('${entry.id}','${alt.id}')" class="text-xs border border-emerald-200 text-emerald-800 rounded-full px-2 py-1 hover:bg-emerald-50">${escapeHtml(alt.word)} · ${count} vote${count===1?"":"s"}</button>`;
    }).join(" ");
    card.innerHTML = `
      <div class="flex items-start justify-between gap-2 mb-3">
        <span class="text-xs font-medium uppercase tracking-wide text-amber-700 bg-amber-50 px-2 py-0.5 rounded">${escapeHtml(entry.category)}</span>
        ${totalVotes ? `<span class="text-xs text-stone-400">${totalVotes} votes</span>` : ""}
      </div>
      <div class="mb-3">
        <p class="text-xs text-stone-400 mb-0.5">Sanskrit-derived word used in Kannada</p>
        <p class="kn text-2xl font-medium text-stone-800">${escapeHtml(entry.sanskrit)}</p>
        <p class="text-sm text-stone-600 mt-1">${escapeHtml(entry.meaning)}</p>
      </div>
      <section class="rounded-lg bg-stone-50 border border-stone-200 px-3 py-2">
        <h3 class="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-1">Equivalent words across languages</h3>
        ${rows}
      </section>
      ${sentenceHtml}
      <div class="mt-3 pt-3 border-t border-stone-100">
        <p class="text-xs text-stone-500 mb-2">Vote for a Kannada alternative</p>
        <div class="flex flex-wrap gap-2">${voteHtml}</div>
        <button onclick="toggleImproveForm('${entry.id}')" class="mt-3 text-sm font-medium text-amber-700 hover:text-amber-900">Improve / Suggest a Kannada alternative</button>
        <div id="improve-${entry.id}" class="hidden mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200">
          <input id="newword-${entry.id}" type="text" placeholder="New Kannada word..." class="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg kn"/>
          <button onclick="submitSuggestion('${entry.id}')" class="mt-2 px-4 py-1.5 text-sm rounded-lg bg-amber-600 text-white">Add</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
  stats.textContent = `${entries.length} entr${entries.length===1?"y":"ies"} shown`;
}
function toggleImproveForm(id) {
  const form=document.getElementById("improve-"+id); form.classList.toggle("hidden");
  if(!form.classList.contains("hidden")) document.getElementById("newword-"+id).focus();
}
function submitSuggestion(id) {
  const input=document.getElementById("newword-"+id);
  if(!input.value.trim()){input.focus();return;}
  addSuggestion(id,input.value); input.value=""; document.getElementById("improve-"+id).classList.add("hidden");
}

const contextualGrid = document.getElementById("contextual-grid");
const naturalnessBody = document.getElementById("naturalness-body");
function highlightSwaps(text, swaps, side) {
  let safe = escapeHtml(text);
  const terms = swaps.map(pair => pair[side]).filter(Boolean).sort((a,b)=>b.length-a.length);
  terms.forEach(term => {
    const literal = escapeHtml(term);
    safe = safe.split(literal).join("<strong class=\"font-bold text-amber-800\">" + literal + "</strong>");
  });
  return safe;
}
function voteContext(id, choice) {
  const state = loadState();
  if (!state.contextualVotes) state.contextualVotes = {};
  if (!state.contextualVotes[id]) state.contextualVotes[id] = { support:0, revise:0 };
  state.contextualVotes[id][choice] = (state.contextualVotes[id][choice] || 0) + 1;
  saveState(state); renderContextual();
}
function renderContextual() {
  if (!contextualGrid || typeof contextualExamples === "undefined") return;
  const state = loadState();
  const submitted = state.submittedContextualExamples || [];
  const allExamples = [...contextualExamples, ...submitted];
  contextualGrid.innerHTML = allExamples.map(item => {
    const votes = (state.contextualVotes && state.contextualVotes[item.id]) || {support:0,revise:0};
    const swaps = item.swaps || [];
    return `<article class="bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
      <div class="flex items-start justify-between gap-2 mb-3"><h3 class="font-semibold text-stone-800">${escapeHtml(item.title)}</h3>${item.submitted ? '<span class="text-xs rounded-full bg-sky-50 text-sky-800 px-2 py-1">Community submission</span>' : ''}</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="rounded-lg bg-stone-50 p-3"><p class="text-xs uppercase tracking-wide text-stone-500 mb-2">Original sentence</p><p class="kn leading-7">${highlightSwaps(item.original,swaps,0)}</p></div>
        <div class="rounded-lg bg-amber-50 p-3"><p class="text-xs uppercase tracking-wide text-amber-800 mb-2">Proposed rendering</p><p class="kn leading-7">${highlightSwaps(item.proposed,swaps,1)}</p></div>
      </div>
      <p class="text-xs text-stone-500 mt-3">${swaps.map(pair=>escapeHtml(pair[0])+" → "+escapeHtml(pair[1])).join(" · ")}</p>
      ${item.note ? `<p class="text-xs text-stone-500 mt-2">${escapeHtml(item.note)}</p>` : ""}
      <div class="flex flex-wrap items-center gap-2 mt-4">
        <button onclick="voteContext('${item.id}','support')" class="text-xs rounded-full border border-emerald-300 text-emerald-800 px-3 py-1.5 hover:bg-emerald-50">Works in context · ${votes.support||0}</button>
        <button onclick="voteContext('${item.id}','revise')" class="text-xs rounded-full border border-orange-300 text-orange-800 px-3 py-1.5 hover:bg-orange-50">Needs revision · ${votes.revise||0}</button>
      </div>
    </article>`;
  }).join("");
  if (naturalnessBody && typeof replacementNaturalness !== "undefined") {
    naturalnessBody.innerHTML = replacementNaturalness.map(row => `<tr class="border-t border-stone-100">
      <td class="p-2 kn">${escapeHtml(row.word)}</td><td class="p-2 kn">${escapeHtml(row.alternative)}</td>
      <td class="p-2"><span class="inline-block rounded-full px-2 py-0.5 text-xs ${row.status==="natural"?"bg-emerald-100 text-emerald-800":row.status==="coined"?"bg-yellow-100 text-yellow-800":row.status==="contested"?"bg-orange-100 text-orange-800":row.status==="archaic"?"bg-red-100 text-red-800":"bg-stone-200 text-stone-800"}">${escapeHtml(row.status)}</span></td>
      <td class="p-2 text-stone-600">${escapeHtml(row.why)}</td></tr>`).join("");
  }
}
window.voteContext = voteContext;

function showTab(tab) {
  const words = tab === "words";
  document.getElementById("words-panel").classList.toggle("hidden", !words);
  document.getElementById("sentences-panel").classList.toggle("hidden", words);
  document.getElementById("word-tab").className = words
    ? "px-4 py-3 text-sm font-semibold border-b-2 border-amber-600 text-amber-800"
    : "px-4 py-3 text-sm font-semibold border-b-2 border-transparent text-stone-500";
  document.getElementById("sentence-tab").className = !words
    ? "px-4 py-3 text-sm font-semibold border-b-2 border-amber-600 text-amber-800"
    : "px-4 py-3 text-sm font-semibold border-b-2 border-transparent text-stone-500";
  const controls = document.querySelector("header .flex.gap-2");
  if (controls) controls.classList.toggle("hidden", !words);
}
function toggleSentenceForm() {
  const form = document.getElementById("sentence-form");
  form.classList.toggle("hidden");
  if (!form.classList.contains("hidden")) document.getElementById("review-title").focus();
}
function submitSentenceReview(event) {
  event.preventDefault();
  const title = document.getElementById("review-title").value.trim();
  const original = document.getElementById("review-original").value.trim();
  const proposed = document.getElementById("review-proposed").value.trim();
  const note = document.getElementById("review-note").value.trim();
  if (!title || !original || !proposed) return;
  const state = loadState();
  if (!state.submittedContextualExamples) state.submittedContextualExamples = [];
  state.submittedContextualExamples.unshift({
    id: "community-" + Date.now(), title, original, proposed, note,
    swaps: [], submitted: true
  });
  saveState(state);
  document.getElementById("sentence-form").reset();
  document.getElementById("sentence-form").classList.add("hidden");
  renderContextual();
  alert("Your sentence review has been added on this device.");
}
window.showTab = showTab;
window.toggleSentenceForm = toggleSentenceForm;
window.submitSentenceReview = submitSentenceReview;

function filterAndRender() {
  const q=searchInput.value.trim().toLocaleLowerCase(), cat=categorySelect.value;
  const filtered=wordEntries.filter(e => {
    if(cat!=="all" && e.category!==cat) return false;
    const sentence=sentenceExamples[e.id] || {};
    const terms=[e.sanskrit,e.meaning,e.halegannada,...e.alternatives.flatMap(a=>[a.word,a.tamil,a.tulu,a.proto]),sentence.source,sentence.kannada,sentence.proto,sentence.hale].filter(Boolean);
    return !q || terms.some(v=>String(v).toLocaleLowerCase().includes(q));
  });
  render(filtered);
}
window.castVote=castVote; window.toggleImproveForm=toggleImproveForm; window.submitSuggestion=submitSuggestion;
searchInput.addEventListener("input",filterAndRender);
categorySelect.addEventListener("change",filterAndRender);
filterAndRender();
renderContextual();
