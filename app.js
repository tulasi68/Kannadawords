// Crowdsourcing app – click to vote + Improve to add new alternative

const STORAGE_KEY = "kannada_desi_v2";

const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const stats = document.getElementById("stats");

// ---------- Storage ----------
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

function addSuggestion(entryId, word, note = "") {
  if (!word || !word.trim()) return;
  const state = loadState();
  if (!state.suggestions[entryId]) state.suggestions[entryId] = [];
  
  // Avoid exact duplicates
  const exists = state.suggestions[entryId].some(s => s.word === word.trim());
  if (exists) {
    alert("This alternative is already listed.");
    return;
  }

  const newId = "user_" + Date.now();
  state.suggestions[entryId].push({
    id: newId,
    word: word.trim(),
    note: note.trim() || "User suggestion"
  });
  saveState(state);
  filterAndRender();
}

// ---------- Rendering ----------
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

    // Merge original alternatives + user suggestions
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

      return `
        <div class="flex items-center justify-between gap-3 py-3 border-b border-stone-100 last:border-0 group">
          <div class="flex-1 min-w-0">
            <button 
              onclick="castVote('${entry.id}', '${alt.id}')"
              class="kn text-xl font-semibold text-emerald-700 hover:text-emerald-900 hover:underline text-left transition">
              ${alt.word}
            </button>
            ${alt.note ? `<p class="text-xs text-stone-500 mt-0.5">${alt.note}${isUser ? " · added by user" : ""}</p>` : ""}
          </div>

          <div class="flex items-center gap-3 shrink-0">
            <div class="text-right min-w-[60px]">
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
        <p class="text-xs font-medium text-stone-500 mb-1 uppercase tracking-wide">Click a word to vote for it</p>
        <div>
          ${altsHtml}
        </div>
      </div>

      <!-- Improve section -->
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
        allAlts.some(a => a.word.toLowerCase().includes(q) || (a.note && a.note.toLowerCase().includes(q)))
      );
    });
  }

  render(filtered);
}

// Global functions for onclick
window.castVote = castVote;
window.toggleImproveForm = toggleImproveForm;
window.submitSuggestion = submitSuggestion;

// Event listeners
searchInput.addEventListener("input", filterAndRender);
categorySelect.addEventListener("change", filterAndRender);

// Initial render
filterAndRender();
