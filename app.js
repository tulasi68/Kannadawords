// Simple client-side app for Kannada Desi Words

const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const stats = document.getElementById("stats");

function render(pairs) {
  grid.innerHTML = "";

  if (pairs.length === 0) {
    grid.innerHTML = `<p class="col-span-full text-center text-stone-500 py-12">No matching words found.</p>`;
    stats.textContent = "0 pairs shown";
    return;
  }

  pairs.forEach(pair => {
    const card = document.createElement("article");
    card.className = "card bg-white border border-stone-200 rounded-xl p-5 shadow-sm hover:shadow-md";

    card.innerHTML = `
      <div class="flex items-start justify-between gap-2 mb-3">
        <span class="text-xs font-medium uppercase tracking-wide text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
          ${pair.category}
        </span>
      </div>

      <div class="space-y-3">
        <div>
          <p class="text-xs text-stone-400 mb-0.5">Sanskrit / Common</p>
          <p class="kn text-xl font-medium text-stone-700">${pair.sanskrit}</p>
        </div>

        <div class="flex items-center gap-2 text-stone-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <div>
          <p class="text-xs text-stone-400 mb-0.5">Native / Desi</p>
          <p class="kn text-2xl font-semibold text-emerald-700">${pair.native}</p>
        </div>

        <div class="pt-2 border-t border-stone-100">
          <p class="text-sm font-medium text-stone-800">${pair.meaning}</p>
          ${pair.note ? `<p class="text-xs text-stone-500 mt-1">${pair.note}</p>` : ""}
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  stats.textContent = `${pairs.length} pair${pairs.length === 1 ? "" : "s"} shown`;
}

function filterAndRender() {
  const q = searchInput.value.trim().toLowerCase();
  const cat = categorySelect.value;

  let filtered = wordPairs;

  if (cat !== "all") {
    filtered = filtered.filter(p => p.category === cat);
  }

  if (q) {
    filtered = filtered.filter(p =>
      p.sanskrit.toLowerCase().includes(q) ||
      p.native.toLowerCase().includes(q) ||
      p.meaning.toLowerCase().includes(q) ||
      (p.note && p.note.toLowerCase().includes(q))
    );
  }

  render(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterAndRender);
categorySelect.addEventListener("change", filterAndRender);

// Initial render
filterAndRender();
