// Crowdsourcing app – click to vote + Improve + show Proto / Tamil / Tulu

const STORAGE_KEY = "kannada_desi_v3";

const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const stats = document.getElementById("stats");
const halegannadaGrid = document.getElementById("halegannada-grid");

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { votes: {}, suggestions: {} };
  } catch {
    return { votes: {}, suggestions: {} };
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getVoteCount(entryId, altId) {
  const state = loadState();
  return (state.votes[entryId] && state.votes[entryId][altId]) || 0;
}

function castVote(entryId, altId) {
  const state = loadState();
  if (!state.votes[entryId]) state.votes[entryId] = {};
  state.votes[entryId][altId] = (state.votes[entryId][altId] || 0) + 1;
  saveState(state);
  filterAndRender();
}

function getSuggestions(entryId) {
  const state = loadState();
  return state.suggestions[entryId] || [];
}

function addSuggestion(entryId, word) {
  if (!word || !word.trim()) return;
  const state = loadState();
  if (!state.suggestions[entryId]) state.suggestions[entryId] = [];
  
  const exists = state.suggestions[entryId].some(s => s.word === word.trim());
  if (exists) {
    alert("This alternative is already listed.");
    return;
  }

  const newId = "user_" + Date.now();
  state.suggestions[entryId].push({
    id: newId,
    word: word.trim(),
    note: "User suggestion",
    proto: null,
    tamil: null,
    tulu: null
  });
  saveState(state);
  filterAndRender();
}

function render(entries) {
  grid.innerHTML = "";

  if (entries.length === 0) {
    grid.innerHTML = `<p class="col-span-full text-center text-stone-500 py-12">No matching words found.</p>`;
    stats.textContent = "0 entries shown";
    return;
  }

  entries.forEach(entry => {
    const card = document.createElement("article");
    card.className = "bg-white border border-stone-200 rounded-xl p-5 shadow-sm";

    const allAlts = [
      ...entry.alternatives,
      ...getSuggestions(entry.id)
    ];

    let totalVotes = 0;
    allAlts.forEach(alt => {
      totalVotes += getVoteCount(entry.id, alt.id);
    });

    let altsHtml = allAlts.map(alt => {
      const count = getVoteCount(entry.id, alt.id);
      const percent = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
      const isUser = alt.id.startsWith("user_");

      let cognateHtml = "";
      if (alt.proto || alt.tamil || alt.tulu) {
        cognateHtml = `
          <div class="mt-1.5 text-xs text-stone-500 space-y-0.5">
            ${alt.proto ? `<div><span class="font-medium text-stone-600">Proto-Dravidian:</span> ${alt.proto}</div>` : ""}
            ${alt.tamil ? `<div><span class="font-medium text-stone-600">Tamil:</span> ${alt.tamil}</div>` : ""}
            ${alt.tulu ? `<div><span class="font-medium text-stone-600">Tulu:</span> ${alt.tulu}</div>` : ""}
          </div>
        `;
      }

      return `
        <div class="py-3 border-b border-stone-100 last:border-0">
          <div class="flex items-start justify-between gap-3">
            <div class="flex-1 min-w-0">
              <button 
                onclick="castVote('${entry.id}', '${alt.id}')"
                class="kn text-xl font-semibold text-emerald-700 hover:text-emerald-900 hover:underline text-left transition">
                ${alt.word}
              </button>
              ${alt.note ? `<p class="text-xs text-stone-500 mt-0.5">${alt.note}${isUser ? " · added by user" : ""}</p>` : ""}
              ${cognateHtml}
            </div>

            <div class="text-right min-w-[55px] shrink-0 pt-1">
              <p class="text-sm font-medium text-stone-700">${count}</p>
              ${totalVotes > 0 ? `<p class="text-xs text-stone-400">${percent}%</p>` : `<p class="text-xs text-stone-300">votes</p>`}
            </div>
          </div>
        </div>
      `;
    }).join("");

    card.innerHTML = `
      <div class="flex items-start justify-between gap-2 mb-3">
        <span class="text-xs font-medium uppercase tracking-wide text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
          ${entry.category}
        </span>
        ${totalVotes > 0 ? `<span class="text-xs text-stone-400">${totalVotes} total votes</span>` : ""}
      </div>

      <div class="mb-4">
        <p class="text-xs text-stone-400 mb-0.5">Sanskrit / Common form</p>
        <p class="kn text-2xl font-medium text-stone-800">${entry.sanskrit}</p>
        <p class="text-sm text-stone-600 mt-1">${entry.meaning}</p>
      </div>

      <div class="mb-4">
        <p class="text-xs font-medium text-stone-500 mb-1 uppercase tracking-wide">Click a word to vote · Cognates help invent better forms</p>
        <div>
          ${altsHtml}
        </div>
      </div>

      <div class="pt-3 border-t border-stone-100">
        <button 
          onclick="toggleImproveForm('${entry.id}')"
          class="text-sm font-medium text-amber-700 hover:text-amber-900 flex items-center gap-1">
          <span>Improve / Suggest better alternative</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>

        <div id="improve-${entry.id}" class="hidden mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200">
          <p class="text-xs text-stone-500 mb-2">Add a new native alternative for <span class="kn font-medium">${entry.sanskrit}</span></p>
          <div class="flex flex-col sm:flex-row gap-2">
            <input 
              id="newword-${entry.id}" 
              type="text" 
              placeholder="New Kannada word..." 
              class="flex-1 px-3 py-1.5 text-sm border border-stone-300 rounded-lg kn focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button 
              onclick="submitSuggestion('${entry.id}')"
              class="px-4 py-1.5 text-sm font-medium rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition">
              Add
            </button>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  stats.textContent = `${entries.length} entr${entries.length === 1 ? "y" : "ies"} shown`;
}

function toggleImproveForm(entryId) {
  const form = document.getElementById(`improve-${entryId}`);
  form.classList.toggle("hidden");
  if (!form.classList.contains("hidden")) {
    document.getElementById(`newword-${entryId}`).focus();
  }
}

function submitSuggestion(entryId) {
  const input = document.getElementById(`newword-${entryId}`);
  const word = input.value;
  if (!word.trim()) {
    input.focus();
    return;
  }
  addSuggestion(entryId, word);
  input.value = "";
  document.getElementById(`improve-${entryId}`).classList.add("hidden");
}


function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

function renderHalegannada(query = "") {
  if (!halegannadaGrid) return;
  const q = query.toLocaleLowerCase();
  const entries = (halegannadaEntries || []).filter(entry =>
    !q || [entry.word, entry.meaning, entry.modernKannada, entry.note]
      .filter(Boolean).some(value => value.toLocaleLowerCase().includes(q))
  );

  halegannadaGrid.innerHTML = entries.map(entry => {
    const sentence = entry.sentence;
    const sentenceHtml = sentence ? `
      <div class="mt-3 rounded-lg bg-stone-50 border border-stone-200 p-3">
        <p class="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-2">Same idea · sentence comparison</p>
        <div class="space-y-2 text-sm">
          <p><span class="text-xs text-stone-500 block">Sanskrit-derived wording (${escapeHtml(sentence.sanskritLabel || "source form")})</span><span class="kn">${escapeHtml(sentence.source)}</span></p>
          <p><span class="text-xs text-emerald-700 block">Modern Kannada</span><span class="kn">${escapeHtml(sentence.kannada)}</span></p>
          ${sentence.proto ? `<p><span class="text-xs text-violet-700 block">Proto-Dravidian root in an illustrative Kannada frame</span><span class="kn">${escapeHtml(sentence.proto)}</span></p>` : ""}
          <p><span class="text-xs text-amber-700 block">Halegannada</span><span class="kn">${escapeHtml(sentence.hale)}</span></p>
        </div>
        ${sentence.protoRoot ? `<p class="text-xs text-violet-800 mt-2">${escapeHtml(sentence.protoRoot)}</p>` : ""}
        ${sentence.note ? `<p class="text-xs text-stone-500 mt-2">${escapeHtml(sentence.note)}</p>` : ""}
      </div>` : "";

    return `
      <article class="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <p class="kn text-xl font-semibold text-amber-800">${escapeHtml(entry.word)}</p>
            <p class="text-sm text-stone-700 mt-1">${escapeHtml(entry.meaning)}</p>
            ${entry.modernKannada ? `<p class="text-xs text-stone-500 mt-1">Modern Kannada comparison: <span class="kn font-medium">${escapeHtml(entry.modernKannada)}</span></p>` : ""}
          </div>
          <span class="shrink-0 text-xs bg-amber-50 text-amber-800 rounded px-2 py-1">Halegannada</span>
        </div>
        ${entry.note ? `<p class="text-xs text-stone-500 mt-2">${escapeHtml(entry.note)}</p>` : ""}
        ${sentenceHtml}
      </article>`;
  }).join("");

  if (entries.length === 0) {
    halegannadaGrid.innerHTML = '<p class="col-span-full text-sm text-stone-500 py-4">No matching Halegannada words.</p>';
  }
}

function filterAndRender() {
  const q = searchInput.value.trim().toLowerCase();
  const cat = categorySelect.value;

  let filtered = wordEntries;

  if (cat !== "all") {
    filtered = filtered.filter(e => e.category === cat);
  }

  if (q) {
    filtered = filtered.filter(e => {
      const allAlts = [...e.alternatives, ...getSuggestions(e.id)];
      return (
        e.sanskrit.toLowerCase().includes(q) ||
        e.meaning.toLowerCase().includes(q) ||
        allAlts.some(a => 
          a.word.toLowerCase().includes(q) || 
          (a.note && a.note.toLowerCase().includes(q)) ||
          (a.proto && a.proto.toLowerCase().includes(q)) ||
          (a.tamil && a.tamil.toLowerCase().includes(q)) ||
          (a.tulu && a.tulu.toLowerCase().includes(q))
        )
      );
    });
  }

  render(filtered);
  renderHalegannada(q);
}

window.castVote = castVote;
window.toggleImproveForm = toggleImproveForm;
window.submitSuggestion = submitSuggestion;

searchInput.addEventListener("input", filterAndRender);
categorySelect.addEventListener("change", filterAndRender);

filterAndRender();
