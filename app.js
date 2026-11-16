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
    ["Halegannada", entry.halegannada || "Not yet sourced"]
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
        <h3 class="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2">Sentence comparison</h3>
        <div class="space-y-3">
          <div><p class="text-xs text-stone-500 mb-1">Sanskrit-derived Kannada sentence</p><p class="kn text-base">${escapeHtml(sentence.source)}</p></div>
          <div><p class="text-xs text-emerald-700 mb-1">Rewritten with native Kannada</p><p class="kn text-base">${escapeHtml(sentence.kannada)}</p></div>
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
