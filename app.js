// Kannada Desi community app — shared votes and suggestions via Cloudflare D1 API.
const API_BASE = "https://kannadawords-api.tulasianand6.workers.dev";
const DEVICE_KEY = "kannada_desi_device_v1";
const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const stats = document.getElementById("stats");
const notice = document.getElementById("notice");

let communityState = { votes: {}, suggestions: {} };
let apiAvailable = false;

function getDeviceId() {
  let id = localStorage.getItem(DEVICE_KEY);
  if (!id) {
    id = (crypto.randomUUID ? crypto.randomUUID() : "device_" + Math.random().toString(36).slice(2) + Date.now());
    localStorage.setItem(DEVICE_KEY, id);
  }
  return id;
}
const deviceId = getDeviceId();

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}
function getVoteCount(entryId, altId) {
  return Number(communityState.votes?.[entryId]?.[altId] || 0);
}
function getSuggestions(entryId) {
  return communityState.suggestions?.[entryId] || [];
}
function showNotice(message, type = "info") {
  notice.textContent = message;
  notice.className = "mb-5 rounded-lg px-4 py-3 text-sm " +
    (type === "error" ? "bg-red-50 text-red-700 border border-red-100" :
      "bg-emerald-50 text-emerald-800 border border-emerald-100");
  notice.classList.remove("hidden");
}
async function refreshCommunity() {
  try {
    const response = await fetch(API_BASE + "/api/community");
    if (!response.ok) throw new Error("Community data unavailable");
    communityState = await response.json();
    apiAvailable = true;
    filterAndRender();
  } catch (error) {
    apiAvailable = false;
    showNotice("Shared community storage is temporarily unavailable. Please try again shortly.", "error");
  }
}
async function castVote(entryId, altId) {
  if (!apiAvailable) return showNotice("Voting is unavailable until the shared database reconnects.", "error");
  try {
    const response = await fetch(API_BASE + "/api/vote", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ entryId, alternativeId: altId, deviceId })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Vote could not be saved");
    if (!result.recorded) showNotice("You have already voted for this word on this device.");
    else showNotice("Your vote has been shared with the Kannada community.");
    await refreshCommunity();
  } catch (error) { showNotice(error.message, "error"); }
}
async function addSuggestion(entryId, word) {
  if (!apiAvailable) return showNotice("Suggestions are unavailable until the shared database reconnects.", "error");
  try {
    const response = await fetch(API_BASE + "/api/suggestions", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ entryId, word, deviceId })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Suggestion could not be saved");
    showNotice("Thank you. Your suggestion is now visible to the community.");
    await refreshCommunity();
  } catch (error) { showNotice(error.message, "error"); }
}
function render(entries) {
  grid.innerHTML = "";
  if (entries.length === 0) {
    grid.innerHTML = '<p class="col-span-full text-center text-stone-500 py-12">No matching words found.</p>';
    stats.textContent = "0 entries shown";
    return;
  }
  entries.forEach(entry => {
    const card = document.createElement("article");
    card.className = "bg-white border border-stone-200 rounded-xl p-5 shadow-sm";
    const allAlts = [...entry.alternatives, ...getSuggestions(entry.id)];
    const totalVotes = allAlts.reduce((sum, alt) => sum + getVoteCount(entry.id, alt.id), 0);
    const altsHtml = allAlts.map(alt => {
      const count = getVoteCount(entry.id, alt.id);
      const percent = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
      const isUser = alt.id.startsWith("community_");
      let cognateHtml = "";
      if (alt.proto || alt.tamil || alt.tulu) {
        cognateHtml = '<div class="mt-1.5 text-xs text-stone-500 space-y-0.5">' +
          (alt.proto ? '<div><span class="font-medium text-stone-600">Proto-Dravidian:</span> ' + escapeHtml(alt.proto) + '</div>' : '') +
          (alt.tamil ? '<div><span class="font-medium text-stone-600">Tamil:</span> ' + escapeHtml(alt.tamil) + '</div>' : '') +
          (alt.tulu ? '<div><span class="font-medium text-stone-600">Tulu:</span> ' + escapeHtml(alt.tulu) + '</div>' : '') + '</div>';
      }
      return '<div class="py-3 border-b border-stone-100 last:border-0"><div class="flex items-start justify-between gap-3">' +
        '<div class="flex-1 min-w-0"><button onclick="castVote(\'' + escapeHtml(entry.id) + '\',\'' + escapeHtml(alt.id) + '\')" class="kn text-xl font-semibold text-emerald-700 hover:text-emerald-900 hover:underline text-left transition">' +
        escapeHtml(alt.word) + '</button>' +
        (alt.note ? '<p class="text-xs text-stone-500 mt-0.5">' + escapeHtml(alt.note) + (isUser ? ' · added by community' : '') + '</p>' : '') +
        cognateHtml + '</div><div class="text-right min-w-[55px] shrink-0 pt-1"><p class="text-sm font-medium text-stone-700">' + count +
        '</p>' + (totalVotes > 0 ? '<p class="text-xs text-stone-400">' + percent + '%</p>' : '<p class="text-xs text-stone-300">votes</p>') +
        '</div></div></div>';
    }).join("");

    card.innerHTML =
      '<div class="flex items-start justify-between gap-2 mb-3"><span class="text-xs font-medium uppercase tracking-wide text-amber-700 bg-amber-50 px-2 py-0.5 rounded">' +
      escapeHtml(entry.category) + '</span>' + (totalVotes > 0 ? '<span class="text-xs text-stone-400">' + totalVotes + ' total votes</span>' : '') + '</div>' +
      '<div class="mb-4"><p class="text-xs text-stone-400 mb-0.5">Sanskrit / Common form</p><p class="kn text-2xl font-medium text-stone-800">' +
      escapeHtml(entry.sanskrit) + '</p><p class="text-sm text-stone-600 mt-1">' + escapeHtml(entry.meaning) + '</p></div>' +
      '<div class="mb-4"><p class="text-xs font-medium text-stone-500 mb-1 uppercase tracking-wide">Click a word to vote · Cognates help invent better forms</p><div>' + altsHtml + '</div></div>' +
      '<div class="pt-3 border-t border-stone-100"><button onclick="toggleImproveForm(\'' + escapeHtml(entry.id) + '\')" class="text-sm font-medium text-amber-700 hover:text-amber-900 flex items-center gap-1"><span>Improve / Suggest better alternative</span><span aria-hidden="true">＋</span></button>' +
      '<div id="improve-' + escapeHtml(entry.id) + '" class="hidden mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200"><p class="text-xs text-stone-500 mb-2">Add a new native alternative for <span class="kn font-medium">' +
      escapeHtml(entry.sanskrit) + '</span></p><div class="flex flex-col sm:flex-row gap-2"><input id="newword-' + escapeHtml(entry.id) +
      '" type="text" maxlength="60" placeholder="New Kannada word..." class="flex-1 px-3 py-1.5 text-sm border border-stone-300 rounded-lg kn focus:outline-none focus:ring-2 focus:ring-amber-400" />' +
      '<button onclick="submitSuggestion(\'' + escapeHtml(entry.id) + '\')" class="px-4 py-1.5 text-sm font-medium rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition">Add</button></div></div></div>';
    grid.appendChild(card);
  });
  stats.textContent = entries.length + " entr" + (entries.length === 1 ? "y" : "ies") + " shown · shared votes: " +
    Object.values(communityState.votes || {}).reduce((sum, row) => sum + Object.values(row).reduce((a, b) => a + Number(b), 0), 0);
}
function toggleImproveForm(entryId) {
  const form = document.getElementById("improve-" + entryId);
  form.classList.toggle("hidden");
  if (!form.classList.contains("hidden")) document.getElementById("newword-" + entryId).focus();
}
async function submitSuggestion(entryId) {
  const input = document.getElementById("newword-" + entryId);
  if (!input.value.trim()) return input.focus();
  await addSuggestion(entryId, input.value);
  input.value = "";
  document.getElementById("improve-" + entryId).classList.add("hidden");
}
function filterAndRender() {
  const q = searchInput.value.trim().toLowerCase();
  const cat = categorySelect.value;
  let filtered = wordEntries;
  if (cat !== "all") filtered = filtered.filter(e => e.category === cat);
  if (q) filtered = filtered.filter(e => {
    const allAlts = [...e.alternatives, ...getSuggestions(e.id)];
    return e.sanskrit.toLowerCase().includes(q) || e.meaning.toLowerCase().includes(q) ||
      allAlts.some(a => a.word.toLowerCase().includes(q) ||
        (a.note && a.note.toLowerCase().includes(q)) ||
        (a.proto && a.proto.toLowerCase().includes(q)) ||
        (a.tamil && a.tamil.toLowerCase().includes(q)) ||
        (a.tulu && a.tulu.toLowerCase().includes(q)));
  });
  render(filtered);
}
window.castVote = castVote;
window.toggleImproveForm = toggleImproveForm;
window.submitSuggestion = submitSuggestion;
searchInput.addEventListener("input", filterAndRender);
categorySelect.addEventListener("change", filterAndRender);
filterAndRender();
refreshCommunity();
