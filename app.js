// Crowdsourcing voting app – localStorage version

const STORAGE_KEY = "kannada_desi_votes_v1";

const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const stats = document.getElementById("stats");

// ---------- Vote storage ----------
function loadVotes() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveVotes(votes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
}

function getVoteCount(entryId, altId) {
  const votes = loadVotes();
  return (votes[entryId] && votes[entryId][altId]) || 0;
}

function castVote(entryId, altId) {
  const votes = loadVotes();
  if (!votes[entryId]) votes[entryId] = {};
  votes[entryId][altId] = (votes[entryId][altId] || 0) + 1;
  saveVotes(votes);
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

    // Calculate total votes for this entry
    let totalVotes = 0;
    entry.alternatives.forEach(alt => {
      totalVotes += getVoteCount(entry.id, alt.id);
    });

    let altsHtml = entry.alternatives.map(alt => {
      const count = getVoteCount(entry.id, alt.id);
      const percent = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;

      return `
        <div class="flex items-center justify-between gap-3 py-2 border-b border-stone-100 last:border-0">
          <div class="flex-1 min-w-0">
            <p class="kn text-xl font-semibold text-emerald-700">${alt.word}</p>
            ${alt.note ? `<p class="text-xs text-stone-500 mt-0.5">${alt.note}</p>` : ""}
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <div class="text-right">
              <p class="text-sm font-medium text-stone-700">${count} vote${count === 1 ? "" : "s"}</p>
              ${totalVotes > 0 ? `<p class="text-xs text-stone-400">${percent}%</p>` : ""}
            </div>
            <button 
              onclick="castVote('${entry.id}', '${alt.id}')"
              class="px-3 py-1.5 text-sm font-medium rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition">
              Vote
            </button>
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

      <div>
        <p class="text-xs font-medium text-stone-500 mb-2 uppercase tracking-wide">Choose the best native alternative</p>
        <div class="space-y-1">
          ${altsHtml}
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  stats.textContent = `${entries.length} entr${entries.length === 1 ? "y" : "ies"} shown`;
}

function filterAndRender() {
  const q = searchInput.value.trim().toLowerCase();
  const cat = categorySelect.value;

  let filtered = wordEntries;

  if (cat !== "all") {
    filtered = filtered.filter(e => e.category === cat);
  }

  if (q) {
    filtered = filtered.filter(e =>
      e.sanskrit.toLowerCase().includes(q) ||
      e.meaning.toLowerCase().includes(q) ||
      e.alternatives.some(a => a.word.toLowerCase().includes(q) || (a.note && a.note.toLowerCase().includes(q)))
    );
  }

  render(filtered);
}

// Make castVote available globally for the onclick handlers
window.castVote = castVote;

// Event listeners
searchInput.addEventListener("input", filterAndRender);
categorySelect.addEventListener("change", filterAndRender);

// Initial render
filterAndRender();
