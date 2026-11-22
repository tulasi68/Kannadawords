
// Sanskrit-first comparative Kannada vocabulary explorer.
// Each entry starts with the Sanskrit-derived form used in Kannada, then compares
// native Kannada, Tamil, Tulu and (only where sourced) Halegannada equivalents.

const STORAGE_KEY = "kannada_desi_v3";
const grid = document.getElementById("grid");
const categorySelect = document.getElementById("category");
const MODERATION_API = window.KANNADA_MODERATION_API || "https://kannadawords-moderation.tulasianand6.workers.dev";
let approvedCommunitySuggestions = [];
let suggestionSubmittedEntries = new Set();

const stats = document.getElementById("stats");

// The browser store is the only vocabulary provider. votingEntries contains the
// current page only; the complete dataset is never assembled in app.js.
let votingEntries = [];
const etymologyLabels = {};
let lexiconPageRequest = 0;
let lexiconInitialized = false;
const etymologyName = code => etymologyLabels[code] || code || "Unknown";

function loadState() {
  try {
    const state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    state.votes = state.votes || {};
    state.suggestions = state.suggestions || {};
    state.voteSelections = state.voteSelections || {};
    // Earlier builds allowed one browser to increment every option independently.
    // Those counts cannot be reconciled into single-choice votes, so reset them once.
    if (state.votingModelVersion !== 2) {
      state.votes = {};
      state.voteSelections = {};
      state.votingModelVersion = 2;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
    return state;
  } catch {
    return { votes: {}, suggestions: {}, voteSelections: {}, votingModelVersion: 2 };
  }
}
function saveState(state) { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
const VOTER_KEY = "kannada_desi_voter_id";
function makeVoterId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,c=>{const r=Math.random()*16|0;return (c==="x"?r:(r&3|8)).toString(16);});
}
let voterId = localStorage.getItem(VOTER_KEY);
if (!voterId || !/^[0-9a-f-]{36}$/i.test(voterId)) { voterId=makeVoterId(); localStorage.setItem(VOTER_KEY,voterId); }
let remoteVoteCounts = {}, remoteVoteSelections = {}, voteSyncError = false;
function getVoteCount(entryId, altId) {
  return remoteVoteCounts["word:"+entryId+":"+altId] || 0;
}
function getSelectedVote(entryId) {
  return remoteVoteSelections["word:"+entryId] || null;
}
function getAltVoteRefs(entry, alt) {
  return Array.isArray(alt.voteRefs) && alt.voteRefs.length ? alt.voteRefs : [{ entryId: entry.id, altId: alt.id }];
}
function getAltVoteCount(entry, alt) {
  return getAltVoteRefs(entry, alt).reduce((total, ref) => total + getVoteCount(ref.entryId, ref.altId), 0);
}
function isAltSelected(entry, alt) {
  return getAltVoteRefs(entry, alt).some(ref => getSelectedVote(ref.entryId) === ref.altId);
}
async function loadRemoteVotes() {
  try {
    const response=await fetch(MODERATION_API+"/api/votes?voterId="+encodeURIComponent(voterId),{cache:"no-store"});
    const data=await response.json();
    if(!response.ok) throw new Error(data.error||"Could not load votes.");
    remoteVoteCounts={}; remoteVoteSelections={};
    (data.counts||[]).forEach(v=>{remoteVoteCounts[v.kind+":"+v.itemId+":"+v.choice]=Number(v.count)||0;});
    (data.selections||[]).forEach(v=>{remoteVoteSelections[v.kind+":"+v.itemId]=v.choice;});
    voteSyncError=false;
    filterAndRender(); renderContextual();
  } catch(error) { voteSyncError=true; console.warn("Central voting is temporarily unavailable.",error); }
}
async function submitRemoteVote(kind,itemId,choice) {
  const response=await fetch(MODERATION_API+"/api/votes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({voterId,kind,itemId,choice})});
  const data=await response.json();
  if(!response.ok) throw new Error(data.error||"Your vote could not be saved.");
  await loadRemoteVotes();
}
async function castVote(entryId, altId) {
  if(getSelectedVote(entryId)===altId) return;
  try { await submitRemoteVote("word",entryId,altId); }
  catch(error) { alert(error.message||"Voting service is unavailable. Please try again."); }
}
function getSuggestions(entryId) {
  return approvedCommunitySuggestions.filter(item => item.entryId === entryId).map(item => ({
    id: "community-" + item.id, word: item.word,
    note: "Community suggestion — approved by administrator",
    proto: null, tamil: null, tulu: null,
    etymologyParts: [{form:item.word,etymology:"unknown"}],
    viability:"proposed", unreviewed:true,
    voteRefs: [{entryId:item.entryId,altId:"community-"+item.id}]
  }));
}
async function addSuggestion(entryId, word) {
  if (!word || !word.trim()) return;
  try {
    const response = await fetch(MODERATION_API + "/api/suggestions", {
      method:"POST", headers:{"Content-Type":"application/json"},
      body:JSON.stringify({entryId,word:word.trim(),voterId})
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Could not submit suggestion.");
    suggestionSubmittedEntries.add(entryId);
    filterAndRender();
    alert("Thank you. Your one suggestion for this word has been sent for administrator review. It will appear in voting only if approved.");
  } catch (error) {
    alert(error.message || "Could not reach the suggestion service. Please try again later.");
  }
}
async function loadApprovedSuggestions() {
  try {
    const response = await fetch(MODERATION_API + "/api/suggestions?voterId=" + encodeURIComponent(voterId), {cache:"no-store"});
    if (!response.ok) throw new Error("Could not load approved suggestions.");
    const data = await response.json();
    approvedCommunitySuggestions = Array.isArray(data.suggestions) ? data.suggestions : [];
    suggestionSubmittedEntries = new Set(Array.isArray(data.submittedEntryIds) ? data.submittedEntryIds : []);
    filterAndRender();
  } catch (error) {
    console.warn("Community suggestions are temporarily unavailable.", error);
  }
}
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function languageRows(entry, alts) {
  const nativeAlternatives = alts.filter(alt => !alt.isOriginal && alt.word);
  // Show every distinct Kannada equivalent on the card. The voting controls below
  // render each alternative as its own independently selectable option.
  const nativeDisplay = nativeAlternatives.map(alt => alt.word).join(" · ") || "—";
  // Comparative evidence belongs to a Kannada candidate, not just to the first
  // candidate in the card. Show every candidate's sourced forms so valid evidence
  // on later alternatives is not silently hidden.
  const evidenceFor = language => alts.flatMap(alt =>
    (alt.comparativeEvidence || [])
      .filter(item => item.language === language && item.form)
      .map(item => ({ ...item, candidateForm: alt.word || "Candidate" }))
  );
  const evidenceValue = language => {
    const seen = new Set();
    return evidenceFor(language).map(item => {
      const value = item.candidateForm + ": " + item.form;
      if (seen.has(value)) return null;
      seen.add(value);
      return value;
    }).filter(Boolean).join(" · ");
  };
  // Tamil and Tulu comparisons remain in the research data, but are intentionally
  // masked in the public word-card interface.
  const rows = [
    ["Native Kannada", nativeDisplay, null, []]
  ];
  const statusLabels = {
    not_assessed:"Not yet reviewed",
    provisional:"Provisional evidence — primary check needed",
    verified:"Verified source",
    contested:"Contested evidence",
    rejected:"Rejected evidence",
    unverified:"Unverified — source needed"
  };
  const relationshipLabels = {
    cognate:"Cognate",
    semantic_equivalent:"Semantic equivalent",
    loan:"Loan",
    reconstruction:"Reconstruction",
    attested_form:"Attested form",
    proposed_coinage:"Proposed coinage"
  };
  return rows.map(([label,value,conflicts,evidenceRecords]) => {
    const statuses = [...new Set(evidenceRecords.map(item=>item.status).filter(Boolean))];
    const relationships = [...new Set(evidenceRecords.map(item=>relationshipLabels[item.relationship]).filter(Boolean))];
    const status = statuses.includes("verified") ? "verified" : statuses[0] || null;
    const statusLabel = statuses.map(item=>statusLabels[item]).filter(Boolean).join(" · ");
    const statusClass = status==="verified" ? "text-emerald-700" : status==="provisional" ? "text-amber-700" : status==="contested" ? "text-orange-700" : status==="rejected" ? "text-red-700" : "text-stone-500";
    const sourceIds = [...new Set(evidenceRecords.flatMap(item=>item.sourceRefs || []))];
    const sourceLinks = sourceIds.map(id => {
      const source = window.KannadaLexiconStore.getReference(id);
      if (!source) return '<span class="block text-xs text-stone-500 mt-1">Source reference unavailable: '+escapeHtml(id)+'</span>';
      const title = source.title + (source.locator ? " · "+source.locator : "");
      return source.url
        ? '<a class="block text-xs underline text-stone-600 mt-1" href="'+escapeHtml(source.url)+'" target="_blank" rel="noopener noreferrer">'+escapeHtml(title)+'</a>'
        : '<span class="block text-xs text-stone-600 mt-1">'+escapeHtml(title)+'</span>';
    }).join("");
    const legacySource = evidenceRecords[0]?.sourceUrl && evidenceRecords[0]?.sourceTitle
      ? '<a class="block text-xs underline text-stone-600 mt-1" href="'+escapeHtml(evidenceRecords[0].sourceUrl)+'" target="_blank" rel="noopener noreferrer">'+escapeHtml(evidenceRecords[0].sourceTitle)+'</a>'
      : "";
    const notes = [...new Set(evidenceRecords.map(item=>item.note).filter(Boolean))];
    const note = notes.length ? '<span class="block text-xs text-stone-500 mt-1">'+notes.map(escapeHtml).join(" · ")+'</span>' : "";
    const relationship = relationships.length ? '<span class="block text-xs text-stone-500 mt-1">'+relationships.join(" · ")+'</span>' : "";
    const conflict = conflicts?.length
      ? '<span class="block text-xs text-orange-700 mt-1">Additional recorded forms: '+conflicts.map(escapeHtml).join(" · ")+'</span>'
      : "";
    const meta = (statusLabel ? '<span class="block text-xs '+statusClass+' mt-1">'+escapeHtml(statusLabel)+'</span>' : "") + relationship + sourceLinks + legacySource + note + conflict;
    return `
    <div class="grid grid-cols-[112px_1fr] gap-2 py-2 border-b border-stone-100 last:border-0">
      <span class="text-xs text-stone-500">${label}</span>
      <span class="kn text-base text-stone-800">${escapeHtml(value)}${meta}</span>
    </div>`;
  }).join("");
}
const WORDS_PER_PAGE = 20;
let currentWordPage = 0;
const pagination = document.getElementById("word-pagination");
const pageStatus = document.getElementById("word-page-status");
const previousPageButton = document.getElementById("word-prev");
const nextPageButton = document.getElementById("word-next");

function updateWordPagination(total) {
  const pageCount = Math.max(1, Math.ceil(total / WORDS_PER_PAGE));
  currentWordPage = Math.min(currentWordPage, pageCount - 1);
  const start = total ? currentWordPage * WORDS_PER_PAGE + 1 : 0;
  const end = Math.min((currentWordPage + 1) * WORDS_PER_PAGE, total);
  if (pageStatus) pageStatus.textContent = total ? `Showing ${start}–${end} of ${total} words · Page ${currentWordPage + 1} of ${pageCount}` : "No words to display";
  if (previousPageButton) previousPageButton.disabled = currentWordPage === 0;
  if (nextPageButton) nextPageButton.disabled = currentWordPage >= pageCount - 1;
  if (pagination) pagination.classList.toggle("hidden", total <= WORDS_PER_PAGE);
}
async function changeWordPage(direction) {
  await loadUnifiedRows();
  const total = getFilteredUnifiedRows().length;
  const pageCount = Math.max(1, Math.ceil(total / WORDS_PER_PAGE));
  currentWordPage = Math.max(0, Math.min(pageCount - 1, currentWordPage + direction));
  await filterAndRender();
  document.getElementById("words-panel").scrollIntoView({behavior:"smooth",block:"start"});
}
window.changeWordPage = changeWordPage;

function render(entries, totalEntries = entries.length) {
  updateWordPagination(totalEntries);
  grid.innerHTML = "";
  if (!entries.length) {
    grid.innerHTML = '<p class="col-span-full text-center text-stone-500 py-12">No matching words found.</p>';
    stats.textContent = "0 entries shown"; return;
  }
  entries.forEach(entry => {
    const card = document.createElement("article");
    card.className = "bg-white border border-amber-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow";
    const nativeAlts = [...entry.alternatives, ...(entry.sourceRecordIds || [entry.id]).flatMap(getSuggestions)];
    const originalOption = !entry.scopeAudit ? [{
      id: "original-" + entry.id,
      word: entry.sanskrit,
      isOriginal: true,
      voteRefs: (entry.sourceRecordIds || [entry.id]).map(sourceId => ({entryId:sourceId,altId:"original-"+sourceId}))
    }] : [];
    const alts = [...nativeAlts, ...originalOption];
    const totalVotes = alts.reduce((sum, alt) => sum + getAltVoteCount(entry,alt),0);
    const first = alts[0] || {};
    const rows = languageRows(entry, alts);
    const voteHtml = alts.map(alt => {
      const count = getAltVoteCount(entry,alt);
      const selected = isAltSelected(entry,alt);
      const voteRef = getAltVoteRefs(entry,alt)[0];
      const viabilityLabel = ({clean:"Clean Dravidian",coined:"Proposed coinage",contested:"Contested",no_alternative:"No viable native alternative"})[alt.viability] || "";
      const label = alt.isOriginal ? "Keep original: " + alt.word : alt.isNoAlternative || alt.viability==="no_alternative" ? "No viable native alternative" : alt.isScopeAudit ? "Outside Sanskrit-origin scope" : alt.unreviewed ? alt.word : alt.word + (viabilityLabel ? " · " + viabilityLabel : "");
      return `<button onclick="castVote('${voteRef.entryId}','${voteRef.altId}')" aria-pressed="${selected}" class="block w-full text-left text-sm border ${selected ? "border-emerald-600 bg-emerald-100 font-semibold" : "border-emerald-200 bg-white"} text-emerald-800 rounded-lg px-3 py-2 hover:bg-emerald-50">${selected ? "✓ " : ""}${escapeHtml(label)} · ${count} vote${count===1?"":"s"}</button>`;
    }).join(" ");
    card.innerHTML = `
      <div class="flex items-start justify-between gap-2 mb-3">
        <span class="text-xs font-bold uppercase tracking-wide text-red-800 bg-yellow-100 px-2 py-1 rounded-full">${escapeHtml((entry.categories || [entry.category]).join(" · "))}</span>
        ${totalVotes ? `<span class="text-xs text-stone-400">${totalVotes} votes</span>` : ""}
      </div>
      ${entry.noAlternative ? '<div class="mb-3 rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-sm text-orange-900"><strong>No viable native alternative</strong><p class="text-xs mt-1">This is an honest open category, not a failed card. Community proposals can still be added for review.</p></div>' : entry.scopeAudit ? '<div class="mb-3 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-sm text-sky-900"><strong>Origin audit — outside the Sanskrit-derived replacement set</strong><p class="text-xs mt-1">The proposed loanword origin needs independent verification.</p></div>' : ''}
      <div class="mb-3">
        <p class="text-xs font-semibold text-red-700 mb-0.5">Word used in Kannada</p>
        <p class="kn text-2xl font-semibold text-red-900">${escapeHtml(entry.sanskrit)}</p>
        <p class="text-sm text-stone-600 mt-1">${escapeHtml(entry.meaning)}</p>
      </div>
      <section class="rounded-xl bg-yellow-50/70 border border-yellow-200 px-3 py-3">
        <h3 class="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-1">Suggested Kannada alternatives</h3>
        ${rows}
      </section>
      ${entry.rejectedAlternatives && entry.rejectedAlternatives.length ? `<div class="mt-3 rounded-lg border border-red-100 bg-red-50 px-3 py-2"><p class="text-xs font-semibold text-red-800 mb-1">Rejected / non-native proposals</p>${entry.rejectedAlternatives.map(item => `<p class="text-xs text-red-900 mt-1"><span class="kn font-semibold">${escapeHtml(item.word)}</span> · ${(item.etymologyParts || [{form:item.word,etymology:item.etymology}]).map(part => escapeHtml(part.form) + " (" + escapeHtml(etymologyName(part.etymology)) + ")").join(" · ")} — ${escapeHtml(item.reason || "Not accepted as a Dravidian-only alternative.")}</p>`).join("")}</div>` : ""}
      ${entry.editorialNote ? `<p class="text-xs text-stone-600 mt-2">${escapeHtml(entry.editorialNote)}</p>` : ""}
      <div class="mt-3 pt-3 border-t border-stone-100">
        <p class="text-xs text-stone-500 mb-2">${entry.noAlternative || entry.scopeAudit ? "Vote on this classification" : "Choose one option for this word · you can change your vote"}</p>
        <div class="flex flex-col gap-2">${alts.length > 1 ? voteHtml : '<span class="text-xs text-stone-400">Voting will appear when another option is available.</span>'}</div>
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3">
          <button onclick="toggleImproveForm('${entry.id}')" class="text-sm font-medium text-amber-700 hover:text-amber-900">Improve</button>
          <button onclick="toggleThoughts('${entry.id}')" class="text-sm font-medium text-sky-700 hover:text-sky-900">Your thoughts</button>
        </div>
        <div id="thoughts-${entry.id}" class="hidden mt-3 p-3 bg-sky-50 rounded-lg border border-sky-200">
          <p class="text-xs text-stone-600 mb-2">Share your opinion about this word or its proposed alternative. Comments are visible to everyone.</p>
          <div id="thought-list-${entry.id}" class="space-y-2 mb-3"><p class="text-xs text-stone-500">Open to load comments…</p></div>
          <textarea id="thought-input-${entry.id}" maxlength="1200" rows="3" placeholder="Write Your thoughts (up to 1,200 characters)…" class="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg"></textarea>
          <div class="flex flex-wrap items-center justify-between gap-2 mt-2">
            <span class="text-xs text-stone-500">No login required. Please keep comments respectful.</span>
            <div class="flex items-center gap-2">
              <button onclick="submitThought('${entry.id}')" class="px-4 py-1.5 text-sm rounded-lg bg-sky-700 text-white hover:bg-sky-800">Post comment</button>
              <button onclick="cancelThoughts('${entry.id}')" class="px-4 py-1.5 text-sm rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100">Cancel</button>
            </div>
          </div>
        </div>
        <div id="improve-${entry.id}" class="hidden mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200">
          <input id="newword-${entry.id}" type="text" placeholder="New Kannada word..." class="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg kn"/>
          <div class="flex flex-wrap gap-2 mt-2">
            <button onclick="submitSuggestion('${entry.id}')" class="px-4 py-1.5 text-sm rounded-lg bg-amber-600 text-white">Add</button>
            <button onclick="cancelImproveForm('${entry.id}')" class="px-4 py-1.5 text-sm rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100">Cancel</button>
          </div>
        </div>
      </div>`;
    grid.appendChild(card);
  });
  stats.textContent = `${entries.length} entr${entries.length===1?"y":"ies"} shown on this page`;
}
function toggleImproveForm(id) {
  if (suggestionSubmittedEntries.has(id)) { alert("You have already used your one suggestion for this word."); return; }
  const form=document.getElementById("improve-"+id); form.classList.toggle("hidden");
  if(!form.classList.contains("hidden")) document.getElementById("newword-"+id).focus();
}
function submitSuggestion(id) {
  const input=document.getElementById("newword-"+id);
  if(!input.value.trim()){input.focus();return;}
  const word = input.value.trim(); input.value=""; document.getElementById("improve-"+id).classList.add("hidden");
  addSuggestion(id,word);
}
function cancelImproveForm(id) {
  const input = document.getElementById("newword-" + id);
  input.value = "";
  document.getElementById("improve-" + id).classList.add("hidden");
}

function renderThoughts(id, comments) {
  const list = document.getElementById("thought-list-" + id);
  if (!list) return;
  if (!comments || !comments.length) {
    list.innerHTML = '<p class="text-xs text-stone-500">No comments yet. Be the first to share Your thoughts.</p>';
    return;
  }
  list.innerHTML = comments.map(item => {
    const date = item.createdAt ? new Date(item.createdAt.replace(" ", "T") + (item.createdAt.endsWith("Z") ? "" : "Z")).toLocaleString() : "";
    return '<article class="rounded-lg bg-white border border-sky-100 p-3"><p class="text-sm text-stone-800 whitespace-pre-wrap break-words">' + escapeHtml(item.comment) + '</p><p class="text-xs text-stone-400 mt-2">' + escapeHtml(date) + '</p></article>';
  }).join("");
}
async function loadThoughts(id) {
  const list = document.getElementById("thought-list-" + id);
  if (list) list.innerHTML = '<p class="text-xs text-stone-500">Loading comments…</p>';
  try {
    const response = await fetch(MODERATION_API + "/api/comments?entryId=" + encodeURIComponent(id), {cache:"no-store"});
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Could not load comments.");
    renderThoughts(id, data.comments || []);
  } catch (error) {
    if (list) list.innerHTML = '<p class="text-xs text-red-700">' + escapeHtml(error.message || "Comments are temporarily unavailable.") + '</p>';
  }
}
function toggleThoughts(id) {
  const panel = document.getElementById("thoughts-" + id);
  panel.classList.toggle("hidden");
  if (!panel.classList.contains("hidden")) loadThoughts(id);
}
function cancelThoughts(id) {
  const input = document.getElementById("thought-input-" + id);
  if (input) input.value = "";
  document.getElementById("thoughts-" + id).classList.add("hidden");
}
async function submitThought(id) {
  const input = document.getElementById("thought-input-" + id);
  const comment = input.value.trim();
  if (!comment) { input.focus(); return; }
  const button = input.parentElement.querySelector("button");
  button.disabled = true;
  button.textContent = "Posting…";
  try {
    const response = await fetch(MODERATION_API + "/api/comments", {
      method:"POST", headers:{"Content-Type":"application/json"},
      body:JSON.stringify({entryId:id,commenterId:voterId,comment})
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Your comment could not be posted.");
    input.value = "";
    await loadThoughts(id);
  } catch (error) {
    alert(error.message || "Comments are temporarily unavailable. Please try again.");
  } finally {
    button.disabled = false;
    button.textContent = "Post comment";
  }
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
async function voteContext(id, choice) {
  if(!["support","revise"].includes(choice)) return;
  if(remoteVoteSelections["context:"+id]===choice) return;
  try { await submitRemoteVote("context",id,choice); }
  catch(error) { alert(error.message||"Voting service is unavailable. Please try again."); }
}
let activeContextualDomain = "all";
function filterContextualByDomain(domain) {
  activeContextualDomain = domain;
  renderContextual();
}
window.filterContextualByDomain = filterContextualByDomain;
function renderContextual() {
  if (!contextualGrid || typeof contextualExamples === "undefined") return;
  const state = loadState();
  const submitted = state.submittedContextualExamples || [];
  const allExamples = [...contextualExamples, ...submitted];
  const seenSentences = new Set();
  const visibleExamples = allExamples.filter(item => {
    const domain = item.sourceDomain || (item.id === "gruha-mandali" ? "Legislative Council" : item.submitted ? "Community submissions" : "Earlier examples");
    if (activeContextualDomain !== "all" && domain !== activeContextualDomain) return false;
    const sentenceKey = [item.original, item.proposed].map(value => String(value || "").replace(/\\s+/g, " ").trim()).join("|||");
    if (seenSentences.has(sentenceKey)) return false;
    seenSentences.add(sentenceKey);
    return true;
  });
  contextualGrid.innerHTML = visibleExamples.map(item => {
    const votes = {support:remoteVoteCounts["context:"+item.id+":support"]||0,revise:remoteVoteCounts["context:"+item.id+":revise"]||0};
    const swaps = item.swaps || [];
    return `<article class="bg-white border border-stone-200 rounded-xl p-4 shadow-sm">
      <div class="flex items-start justify-between gap-2 mb-3"><div>${item.sourceDomain === "Government Departments" ? "" : `<h3 class="font-semibold text-stone-800">${escapeHtml(item.title || "")}</h3>`}<p class="text-xs text-stone-500 mt-1">${escapeHtml(item.sourceDomain === "Government Departments" ? "" : (item.sourceDomain || (item.id === "gruha-mandali" ? "Legislative Council" : item.submitted ? "Community submissions" : "Earlier examples")) )}</p></div>${item.submitted ? '<span class="text-xs rounded-full bg-sky-50 text-sky-800 px-2 py-1">Community submission</span>' : ''}</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="rounded-lg bg-stone-50 p-3"><p class="text-xs uppercase tracking-wide text-stone-500 mb-2">Original sentence</p><p class="kn leading-7">${highlightSwaps(item.original,swaps,0)}</p></div>
        <div class="rounded-lg bg-amber-50 p-3"><p class="text-xs uppercase tracking-wide text-amber-800 mb-2">Proposed rendering</p><p class="kn leading-7">${highlightSwaps(item.proposed,swaps,1)}</p></div>
      </div>
      <p class="text-xs text-stone-500 mt-3">${swaps.filter(pair=>pair[0] && pair[1]).map(pair=>escapeHtml(pair[0])+" → "+escapeHtml(pair[1])).join(" · ")}</p>
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
      <td class="p-2 text-stone-500">${escapeHtml(row.sourceDomain || "Earlier examples")}</td><td class="p-2 text-stone-600">${escapeHtml(row.why)}</td></tr>`).join("");
  }
}
window.voteContext = voteContext;

function achchaAlternativeKind(alt) {
 if (alt.reviewStatus !== "verified") return "uncertain";
 const classification = alt.originClassification;
 return ["verified_dravidian","tadbhava","coined_from_dravidian","uncertain"].includes(classification) ? classification : "uncertain";
}
function buildAchchaLexicon(text = "") {
  return window.KannadaLexiconStore
    ? window.KannadaLexiconStore.searchAchchaLexicon(text)
    : [];
}
window.buildAchchaLexicon = buildAchchaLexicon;
function showAchchaResult(result,original){
 document.getElementById("achcha-original").textContent=original;
 document.getElementById("achcha-result").textContent=result.rewrittenKannada||original;
 const status=document.getElementById("achcha-version-label");
 status.textContent=result.changed?"AI ಮರುಬರಹ · "+(result.replacements||[]).length+" ಪದ ಆಯ್ಕೆಗಳ ಪರಿಶೀಲನೆ":"ವಿಶ್ವಾಸಾರ್ಹ ಬದಲಾವಣೆ ಸಿಗಲಿಲ್ಲ";
 const notes=document.getElementById("achcha-notes");
 notes.replaceChildren();
 const addLine=(label,value)=>{
  if(!value)return;
  const p=document.createElement("p");p.className="mt-2";
  const strong=document.createElement("strong");strong.textContent=label+" ";
  p.append(strong,document.createTextNode(value));notes.append(p);
 };
 addLine("ವಿವರಣೆ:",result.explanationKannada);
 (result.replacements||[]).forEach(item=>{
  const p=document.createElement("p");p.className="mt-2";
  const strong=document.createElement("strong");strong.textContent=(item.original||"")+(item.replacement?" → "+item.replacement:"");
  const basisLabels={verified_dravidian:"ಪದಪಟ್ಟಿಯಲ್ಲಿ ಪರಿಶೀಲಿತ",tadbhava:"ತದ್ಭವ",coined_from_dravidian:"ಹೊಸ ದ್ರಾವಿಡ ರೂಪ",uncertain:"ಸಮುದಾಯದ ಪರಿಶೀಲನೆ ಅಗತ್ಯ"};
  p.append(strong,document.createTextNode(" · "+(basisLabels[item.basis]||"")+((item.reasonKannada)?" · "+item.reasonKannada:"")));
  notes.append(p);
 });
 if((result.wordsNeedingReview||[]).length)addLine("ಮರುಪರಿಶೀಲಿಸಬೇಕಾದ ಪದಗಳು:",result.wordsNeedingReview.join(", "));
 if((result.lexiconMatches||[]).length) {
  const findings = result.lexiconMatches.map(item => item.source + " → " + (item.candidates||[]).map(candidate => candidate.word).join(" / "));
  addLine("ಪದಪಟ್ಟಿಯಲ್ಲಿ ಕಂಡ ಪದಗಳು ಮತ್ತು ಪರ್ಯಾಯಗಳು:",findings.join(" · "));
 }
 if(!(result.replacements||[]).length && !(result.wordsNeedingReview||[]).length && !(result.lexiconMatches||[]).length) {
  addLine("ಪದಗಳ ಪಟ್ಟಿ:","ಈ ಬಾರಿ ಎಂಜಿನ್ ಯಾವುದೇ ಪದಬದಲಾವಣೆ ಅಥವಾ ಮರುಪರಿಶೀಲನೆಗೆ ಪದವನ್ನು ದಾಖಲಿಸಿಲ್ಲ. ಇದನ್ನು ಪದಗಳ ಪರಿಶೀಲನೆ ಪೂರ್ಣವಾಗಿದೆ ಎಂದು ಅರ್ಥೈಸಬೇಡಿ.");
 }
 if(!result.changed)addLine("ಗಮನಿಸಿ:","ಮೂಲ ಪಠ್ಯದಲ್ಲೇ ಉಳಿಸಲಾಗಿದೆ; ನಂಬಿಕೆಯಿಂದ ಬದಲಾಯಿಸಬಹುದಾದ ಪದವನ್ನು ಎಂಜಿನ್ ಗುರುತಿಸಲಿಲ್ಲ.");
}
// --- Word-by-word Achcha Kannada rewrite (lexicon-based) ---
let achchaMatchState = [];
let achchaDiscoveryState = [];
let achchaDiscoveryData = null;
let achchaPreserveGapResults = false;
async function loadAchchaDiscoveryData() {
 if (achchaDiscoveryData) return achchaDiscoveryData;
 const response=await fetch("./sanskrit-discovery-words.json",{cache:"no-cache"});
 if(!response.ok) throw new Error("ಸಂಸ್ಕೃತ ಪದಗಳ ಪ್ರಾಥಮಿಕ ಪಟ್ಟಿ ಲಭ್ಯವಿಲ್ಲ.");
 const data=await response.json();
 if(data.schemaVersion!==1||!Array.isArray(data.entries)) throw new Error("ಸಂಸ್ಕೃತ ಪದಗಳ ಪಟ್ಟಿಯ ಸ್ವರೂಪ ಸರಿಯಿಲ್ಲ.");
 achchaDiscoveryData=data.entries; return achchaDiscoveryData;
}
function addAchchaDiscoveryUnderlines(preview, original, knownMatches, entries) {
 achchaDiscoveryState=[];
 const blocked=knownMatches.map(m=>[m.start,m.end]);
 const forms=[];
 entries.forEach(entry=>(entry.forms||[]).forEach(form=>{if(typeof form==="string"&&form)forms.push({form:form.normalize("NFC"),entry});}));
 forms.sort((a,b)=>b.form.length-a.form.length);
 const source=original.normalize("NFC"), lower=source.toLocaleLowerCase();
 const isWord=ch=>!!ch&&/[\\p{L}\\p{M}\\p{N}_]/u.test(ch);
 forms.forEach(item=>{
  const needle=item.form.toLocaleLowerCase(); let from=0;
  while(from<lower.length){
   const at=lower.indexOf(needle,from); if(at<0)break;
   const end=at+item.form.length;
   const boundary=(at===0||!isWord(source[at-1]))&&(end===source.length||!isWord(source[end]));
   const overlap=blocked.some(([s,e])=>at<e&&end>s);
   if(boundary&&!overlap&&!achchaDiscoveryState.some(x=>x.start===at&&x.end===end)){
    achchaDiscoveryState.push({source:source.slice(at,end),start:at,end,id:item.entry.id,selected:true}); blocked.push([at,end]);
   }
   from=at+1;
  }
 });
 achchaDiscoveryState.sort((a,b)=>a.start-b.start);
 if(!achchaDiscoveryState.length){
  if(achchaPreserveGapResults){
   const panel=document.getElementById("achcha-gap-panel"), words=document.getElementById("achcha-gap-words"), button=document.getElementById("achcha-gap-ai"), status=document.getElementById("achcha-gap-status");
   if(panel)panel.classList.remove("hidden"); if(words)words.replaceChildren(); if(button)button.disabled=true;
   if(status)status.textContent="ಈ ಪಠ್ಯದಲ್ಲಿ ಉಳಿದ ನೀಲಿ ಗುರುತಿನ ಪದಗಳಿಲ್ಲ. ಕೆಳಗೆ ಅಳವಡಿಸಿದ ಸಲಹೆಗಳನ್ನು ನೋಡಬಹುದು.";
  }
  return;
 }
 // Replace text nodes only; existing red lexicon hits are deliberately excluded.
 const walker=document.createTreeWalker(preview,NodeFilter.SHOW_TEXT), nodes=[];
 while(walker.nextNode()){const n=walker.currentNode;if(n.nodeValue&&n.parentElement&&!n.parentElement.closest(".achcha-hit"))nodes.push(n);}
 let docOffset=0;
 nodes.forEach(node=>{
  const value=node.nodeValue, startOffset=original.normalize("NFC").indexOf(value,docOffset);
  if(startOffset<0){docOffset+=value.length;return;}
  const local=[];
  achchaDiscoveryState.forEach((m,index)=>{if(m.start>=startOffset&&m.end<=startOffset+value.length)local.push({index,start:m.start-startOffset,end:m.end-startOffset});});
  docOffset=startOffset+value.length;
  if(!local.length)return;
  local.sort((a,b)=>a.start-b.start);
  const fragment=document.createDocumentFragment();let cursor=0;
  local.forEach(hit=>{if(hit.start<cursor)return;fragment.append(document.createTextNode(value.slice(cursor,hit.start)));const span=document.createElement("span");span.className="achcha-discovery-underline";span.title="Possible Sanskrit-derived word · AI review";span.textContent=value.slice(hit.start,hit.end);fragment.append(span);cursor=hit.end;});
  fragment.append(document.createTextNode(value.slice(cursor)));node.parentNode.replaceChild(fragment,node);
 });
 const panel=document.getElementById("achcha-gap-panel"), words=document.getElementById("achcha-gap-words"), button=document.getElementById("achcha-gap-ai");
 if(panel&&words){panel.classList.remove("hidden");words.innerHTML=achchaDiscoveryState.map((m,i)=>'<label class="inline-flex items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2"><input type="checkbox" data-gap-index="'+i+'" checked class="accent-sky-700"><span class="kn text-sm font-semibold text-sky-900">'+escapeHtmlAchcha(m.source)+'</span></label>').join("");}
 if(button)button.disabled=false;
}

function escapeHtmlAchcha(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}

async function findAchchaWords() {
  if (!achchaPreserveGapResults) {
    const oldPanel=document.getElementById("achcha-gap-panel"); if(oldPanel)oldPanel.classList.add("hidden");
    const oldResults=document.getElementById("achcha-gap-results"); if(oldResults)oldResults.replaceChildren();
    const oldButton=document.getElementById("achcha-gap-ai"); if(oldButton)oldButton.disabled=true;
  }
  const status = document.getElementById("achcha-find-status");
  try { await window.KannadaLexiconStore.ready(); }
  catch (error) {
    if (status) status.textContent = "Vocabulary could not load: " + (error.message || "Please retry.");
    return;
  }
  const input = document.getElementById("achcha-input");
  const original = (input && input.value || "").trim();
  if (!original) { input && input.focus(); return; }
  // Match against a normalized, case-folded copy so Latin aliases such as
  // Varna also match VARNA / varna. Keep offsets aligned with the displayed text.
  const searchable = original.normalize("NFC");
  const foldedText = searchable.toLocaleLowerCase();

  const lexicon = buildAchchaLexicon(searchable);
  const forms = [];
  lexicon.forEach(entry => {
    (entry.sourceForms || []).forEach(sf => {
      if (sf && sf.length >= 2) forms.push({ form: sf.normalize("NFC"), entry });
    });
  });
  forms.sort((a, b) => b.form.length - a.form.length);

  // Match complete Kannada words, not accidental substrings inside longer words.
  // Unicode marks are included because Kannada vowel signs/viramas are combining marks.
  const isWordCharacter = char => !!char && /[\p{L}\p{M}\p{N}_]/u.test(char);
  const occupied = new Array(original.length).fill(false);
  const matches = [];

  for (const { form, entry } of forms) {
    const foldedForm = form.toLocaleLowerCase();
    let from = 0;
    while (from < searchable.length) {
      const idx = foldedText.indexOf(foldedForm, from);
      if (idx < 0) break;
      const end = idx + form.length;
      const leftBoundary = idx === 0 || !isWordCharacter(searchable[idx - 1]);
      const rightBoundary = end === searchable.length || !isWordCharacter(searchable[end]);
      let overlap = false;
      for (let i = idx; i < end; i++) if (occupied[i]) { overlap = true; break; }
      if (leftBoundary && rightBoundary && !overlap) {
        for (let i = idx; i < end; i++) occupied[i] = true;
        const candidates = (entry.candidates || []).filter(c => c.word);
        if (candidates.length) {
          matches.push({
            source: searchable.slice(idx, end),
            meaning: entry.meaning || "",
            candidates,
            selected: candidates[0].word,
            start: idx,
            end
          });
        }
      }
      from = idx + 1;
    }
  }

  matches.sort((a, b) => a.start - b.start);
  achchaMatchState = matches;

  const list = document.getElementById("achcha-word-list");
  const container = document.getElementById("achcha-matches");
  const output = document.getElementById("achcha-output");
  if (output) output.classList.add("hidden");

  if (!matches.length) {
    list.classList.add("hidden");
    container.replaceChildren();
    status.textContent = "No known vocabulary matches; checking provisional Sanskrit candidates…";
    const previewWrap = document.getElementById("achcha-preview-wrap");
    const preview = document.getElementById("achcha-preview");
    if (previewWrap) previewWrap.classList.remove("hidden");
    if (preview) {
      preview.textContent = searchable;
      try { addAchchaDiscoveryUnderlines(preview, searchable, [], await loadAchchaDiscoveryData()); }
      catch(error) { console.warn("Sanskrit discovery list unavailable:",error); }
    }
    if (!achchaDiscoveryState.length) {
      status.textContent = "ಪರಿಶೀಲಿತ ಪದಪಟ್ಟಿಯಲ್ಲಿಯೂ ಪ್ರಾಥಮಿಕ ಸಂಸ್ಕೃತ ಪದಪಟ್ಟಿಯಲ್ಲಿಯೂ ಹೊಂದಾಣಿಕೆ ಸಿಗಲಿಲ್ಲ.";
    } else {
      status.textContent = "0 known words · " + achchaDiscoveryState.length + " possible Sanskrit-origin word(s) for review";
    }
    return;
  }
  const previewWrap = document.getElementById("achcha-preview-wrap");
  if (previewWrap) previewWrap.classList.remove("hidden");

  status.textContent = matches.length + " word" + (matches.length === 1 ? "" : "s") + " found · hover underlined words for alternatives";

  // Build interactive underlined preview of the original text.
  const preview = document.getElementById("achcha-preview");
  if (preview) {
    let html = "";
    let cursor = 0;
    const text = searchable;
    matches.forEach((m, i) => {
      if (m.start > cursor) {
        html += escapeHtmlAchcha(text.slice(cursor, m.start));
      }
      const chosen = m.selected || (m.candidates[0] && m.candidates[0].word) || m.source;
      const opts = m.candidates.map((c, j) => {
        const active = (m.selected || m.candidates[0].word) === c.word ? " achcha-opt-active" : "";
        return '<button type="button" class="achcha-opt kn' + active + '" data-match="' + i + '" data-word="' + escapeHtmlAchcha(c.word) + '">' + escapeHtmlAchcha(c.word) + '</button>';
      }).join("");
      const keepActive = (m.selected === m.source) ? " achcha-opt-active" : "";
      const keep = '<button type="button" class="achcha-opt achcha-opt-keep' + keepActive + '" data-match="' + i + '" data-word="' + escapeHtmlAchcha(m.source) + '">keep “' + escapeHtmlAchcha(m.source) + '”</button>';
      html += '<span class="achcha-hit" tabindex="0" data-match="' + i + '" role="button" aria-label="Alternatives for ' + escapeHtmlAchcha(m.source) + '">'
        + '<span class="achcha-underline kn">' + escapeHtmlAchcha(m.source) + '</span>'
        + '<span class="achcha-pop" role="listbox">'
        + '<span class="achcha-pop-title">Native alternatives for <strong class="kn">' + escapeHtmlAchcha(m.source) + '</strong>'
        + (m.meaning ? ' <span class="achcha-pop-meaning">(' + escapeHtmlAchcha(m.meaning) + ')</span>' : '')
        + '</span>'
        + '<span class="achcha-pop-opts">' + opts + keep + '</span>'
        + '</span></span>';
      cursor = m.end;
    });
    if (cursor < text.length) html += escapeHtmlAchcha(text.slice(cursor));
    // Preserve newlines
    html = html.replace(/\n/g, "<br>");
    preview.innerHTML = html;
    preview.classList.remove("hidden");

    // Add provisional blue underlines after red known-word matches.
    try { addAchchaDiscoveryUnderlines(preview, searchable, matches, await loadAchchaDiscoveryData()); }
    catch(error) { console.warn("Sanskrit discovery list unavailable:",error); achchaDiscoveryState=[]; }
    // Wire option clicks
    preview.querySelectorAll(".achcha-opt").forEach(btn => {
      btn.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        const i = Number(btn.getAttribute("data-match"));
        const word = btn.getAttribute("data-word");
        if (!Number.isFinite(i) || !achchaMatchState[i]) return;
        achchaMatchState[i].selected = word;
        // Refresh active styles inside this popover
        const hit = btn.closest(".achcha-hit");
        if (hit) {
          hit.querySelectorAll(".achcha-opt").forEach(o => o.classList.toggle("achcha-opt-active", o.getAttribute("data-word") === word));
        }
        // Keep list radios in sync if present
        const radios = document.querySelectorAll('input[name="achcha-sel-' + i + '"]');
        radios.forEach(r => { r.checked = r.value === word; });
      });
    });
  }

  container.innerHTML = matches.map((m, i) => {
    const opts = m.candidates.map((c, j) => {
      const checked = j === 0 ? "checked" : "";
      const label = escapeHtmlAchcha(c.word);
      const note = c.note ? ' <span class="text-stone-400 text-xs">· ' + escapeHtmlAchcha(c.note.slice(0, 60)) + '</span>' : "";
      return '<label class="inline-flex items-center gap-1.5 mr-3 mb-1 cursor-pointer">'
        + '<input type="radio" name="achcha-sel-' + i + '" value="' + escapeHtmlAchcha(c.word) + '" ' + checked
        + ' onchange="achchaMatchState[' + i + '].selected=this.value;syncAchchaPreviewSelection(' + i + ', this.value)" class="accent-red-800">'
        + '<span class="kn text-sm font-medium text-stone-800">' + label + '</span>' + note + '</label>';
    }).join("");
    const keep = '<label class="inline-flex items-center gap-1.5 mr-3 mb-1 cursor-pointer">'
      + '<input type="radio" name="achcha-sel-' + i + '" value="' + escapeHtmlAchcha(m.source) + '"'
      + ' onchange="achchaMatchState[' + i + '].selected=this.value;syncAchchaPreviewSelection(' + i + ', this.value)" class="accent-stone-500">'
      + '<span class="kn text-sm text-stone-500">ಉಳಿಸು · keep “' + escapeHtmlAchcha(m.source) + '”</span></label>';
    return '<div class="rounded-lg border border-amber-100 bg-amber-50/50 px-3 py-2.5">'
      + '<div class="flex flex-wrap items-baseline gap-2 mb-1.5">'
      + '<span class="kn text-base font-semibold text-red-900">' + escapeHtmlAchcha(m.source) + '</span>'
      + (m.meaning ? '<span class="text-xs text-stone-500">(' + escapeHtmlAchcha(m.meaning) + ')</span>' : '')
      + '</div>'
      + '<div class="flex flex-wrap items-center">' + opts + keep + '</div>'
      + '</div>';
  }).join("");

  list.classList.remove("hidden");
  list.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function syncAchchaPreviewSelection(i, word) {
  const preview = document.getElementById("achcha-preview");
  if (!preview) return;
  const hit = preview.querySelector('.achcha-hit[data-match="' + i + '"]');
  if (!hit) return;
  hit.querySelectorAll(".achcha-opt").forEach(o => o.classList.toggle("achcha-opt-active", o.getAttribute("data-word") === word));
}
window.syncAchchaPreviewSelection = syncAchchaPreviewSelection;

function resetAchchaSelections() {
  achchaMatchState.forEach((m, i) => {
    m.selected = m.candidates[0] ? m.candidates[0].word : m.source;
    const radios = document.querySelectorAll('input[name="achcha-sel-' + i + '"]');
    radios.forEach((r, j) => { r.checked = j === 0; });
  });
  const out = document.getElementById("achcha-output");
  if (out) out.classList.add("hidden");
}

async function completeAchchaRewrite() {
  const input = document.getElementById("achcha-input");
  const original = (input && input.value || "").trim();
  if (!original || !achchaMatchState.length) {
    await findAchchaWords();
    if (!achchaMatchState.length) return;
  }

  const ordered = [...achchaMatchState].sort((a, b) => b.start - a.start);
  let result = original;
  const applied = [];
  ordered.forEach(m => {
    const chosen = m.selected || m.source;
    if (chosen !== m.source) {
      result = result.slice(0, m.start) + chosen + result.slice(m.end);
      applied.push({ original: m.source, replacement: chosen });
    }
  });
  applied.reverse();

  const output = document.getElementById("achcha-output");
  output.classList.remove("hidden");
  document.getElementById("achcha-original").textContent = original;
  document.getElementById("achcha-result").textContent = result;
  document.getElementById("achcha-version-label").textContent = applied.length
    ? ("ನಿಮ್ಮ ಆಯ್ಕೆ · " + applied.length + " ಪದ ಬದಲಾಯಿಸಲಾಗಿದೆ")
    : "ಯಾವುದೇ ಪದ ಬದಲಾಯಿಸಲಾಗಿಲ್ಲ";

  const notes = document.getElementById("achcha-notes");
  notes.replaceChildren();
  if (applied.length) {
    const title = document.createElement("p");
    title.className = "font-semibold text-stone-700 mb-1";
    title.textContent = "ಆಯ್ಕೆ ಮಾಡಿದ ಬದಲಾವಣೆಗಳು:";
    notes.append(title);
    applied.forEach(item => {
      const p = document.createElement("p");
      p.className = "kn mt-1 text-sm";
      p.textContent = item.original + " → " + item.replacement;
      notes.append(p);
    });
  }
  output.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

let achchaRewriteRun = 0;
let achchaRewriteController = null;

function clearAchchaInput() {
  achchaRewriteRun++;
  if (achchaRewriteController) achchaRewriteController.abort();
  achchaRewriteController = null;
  const input = document.getElementById("achcha-input");
  if (input) input.value = "";
  achchaMatchState = [];
  achchaDiscoveryState = [];
  ["achcha-word-list","achcha-output","achcha-preview-wrap","achcha-gap-panel"].forEach(id => {
    const element = document.getElementById(id);
    if (element) element.classList.add("hidden");
  });
  const preview = document.getElementById("achcha-preview");
  if (preview) preview.innerHTML = "";
  const matches = document.getElementById("achcha-matches");
  if (matches) matches.replaceChildren();
  const notes = document.getElementById("achcha-notes");
  if (notes) notes.replaceChildren();
  const status = document.getElementById("achcha-ai-status");
  if (status) status.textContent = "";
  const gapStatus=document.getElementById("achcha-gap-status"); if(gapStatus)gapStatus.textContent="";
  const gapResults=document.getElementById("achcha-gap-results"); if(gapResults)gapResults.replaceChildren();
  const findStatus = document.getElementById("achcha-find-status");
  if (findStatus) findStatus.textContent = "";
  const button = document.getElementById("achcha-ai-scan");
  if (button) { button.disabled = false; button.textContent = "AI ಮೂಲಕ ಅಚ್ಚ ಕನ್ನಡದಲ್ಲಿ ಮರುಬರೆಯಿರಿ"; }
  if (input) input.focus();
}

async function translateAchchaKannada() {
  const runId = ++achchaRewriteRun;
  const controller = new AbortController();
  achchaRewriteController = controller;
  const input = document.getElementById("achcha-input");
  const button = document.getElementById("achcha-ai-scan");
  const status = document.getElementById("achcha-ai-status");
  const original = (input && input.value || "").trim();
  if (!original) { input && input.focus(); return; }
  if (button) { button.disabled = true; button.textContent = "ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ…"; }
  if (status) status.textContent = "ಪಠ್ಯದ ಅರ್ಥ, ಪದಗಳ ಬಳಕೆ, ವ್ಯಾಕರಣ ಮತ್ತು ಸಹಜ ಕನ್ನಡ ರೂಪವನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ…";
  try {
    await window.KannadaLexiconStore.ready();
    // Send only lexicon entries relevant to this passage. Sending the entire
    // vocabulary made the model prompt unnecessarily large and could leave the
    // mobile UI appearing to wait indefinitely.
    const timeoutId = setTimeout(() => controller.abort(), 75000);
    let response;
    let payload;
    try {
      response = await fetch("https://kannadawords-ai.tulasianand6.workers.dev/api/rewrite", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify({ text: original, lexicon: buildAchchaLexicon(original) }),
        signal: controller.signal,
        cache: "no-store"
      });
      payload = await response.json();
    } finally {
      clearTimeout(timeoutId);
    }
    if (!response.ok) throw new Error(payload.error || "AI ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಳ್ಳಲಿಲ್ಲ.");
    showAchchaResult(payload, original);
    if (status) status.textContent = (payload.replacements || []).length || (payload.wordsNeedingReview || []).length || (payload.lexiconMatches || []).length
      ? "ಮರುಬರಹ ಸಿದ್ಧವಾಗಿದೆ. ಕೆಳಗಿನ ಪದಬದಲಾವಣೆ ಮತ್ತು ಮರುಪರಿಶೀಲನೆ ಸೂಚನೆಗಳನ್ನು ನೋಡಿ; ಪರಿಶೀಲಿಸದ ಪದಮೂಲ ಅಥವಾ ಪರ್ಯಾಯಗಳನ್ನು ದೃಢಪಟ್ಟ ಸಂಗತಿಯೆಂದು ಪರಿಗಣಿಸಬೇಡಿ."
      : "ಮರುಬರಹ ಸಿದ್ಧವಾಗಿದೆ; ಆದರೆ ಪದಬದಲಾವಣೆ ಅಥವಾ ಮರುಪರಿಶೀಲನೆಗೆ ಪದಗಳ ಪಟ್ಟಿ ಬಂದಿಲ್ಲ. ಇದನ್ನು ಪದಗಳ ಪರಿಶೀಲನೆ ಪೂರ್ಣವಾಗಿದೆ ಎಂದು ಪರಿಗಣಿಸಬೇಡಿ.";
  } catch (error) {
    if (runId !== achchaRewriteRun) return;
    if (status) status.textContent = error.name === "AbortError"
      ? "AI ಉತ್ತರಕ್ಕೆ ಹೆಚ್ಚು ಸಮಯ ಹಿಡಿಯುತ್ತಿದೆ. ಪಠ್ಯವನ್ನು ಚಿಕ್ಕದಾಗಿಸಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ."
      : (error.message || "AI ಸೇವೆಯನ್ನು ಸಂಪರ್ಕಿಸಲಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.");
  } finally {
    if (runId === achchaRewriteRun) {
      achchaRewriteController = null;
      if (button) { button.disabled = false; button.textContent = "AI ಮೂಲಕ ಅಚ್ಚ ಕನ್ನಡದಲ್ಲಿ ಮರುಬರೆಯಿರಿ"; }
    }
  }
}
window.clearAchchaInput = clearAchchaInput;
window.findAchchaWords = findAchchaWords;
window.resetAchchaSelections = resetAchchaSelections;
window.completeAchchaRewrite = completeAchchaRewrite;
window.translateAchchaKannada = translateAchchaKannada;
window.translateAchchaGapWords = translateAchchaGapWords;

function showTab(tab) {
 const tabs=["words","sentences","coinages","translate"];
 const panels=["words-panel","sentences-panel","coinages-panel","translate-panel"];
 tabs.forEach((name,index)=>{
  document.getElementById(panels[index]).classList.toggle("hidden",name!==tab);
  document.getElementById(name==="words"?"word-tab":name==="sentences"?"sentence-tab":name==="coinages"?"coinage-tab":"translate-tab").classList.toggle("main-choice-active",name===tab);
 });
}
const projectInfo = {
  enidu: {
    kicker: "Enidu · What is this?",
    title: "ಅಚ್ಚ ಕನ್ನಡದ ಕಡೆಗೆ — ಏನಿದು?",
    copy: "ಕನ್ನಡದಲ್ಲಿ ಬಳಕೆಯಲ್ಲಿರುವ ಸಂಸ್ಕೃತ ಮೂಲದ ಪದಗಳಿಗೆ ಅರ್ಥ ಮತ್ತು ಸಂದರ್ಭಕ್ಕೆ ತಕ್ಕ ಕನ್ನಡದ, ತಮಿಳಿನ, ತುಳುವಿನ ಹಾಗೂ ಹಳೆಗನ್ನಡದ ಸಮಾನಾರ್ಥಕ ಪದಗಳನ್ನು ಹುಡುಕಿ ಹೋಲಿಸುವ ಸಮುದಾಯದ ಪ್ರಯತ್ನ ಇದು. ಪದಗಳಿಗೆ ಮತ ನೀಡಿ; ವಾಕ್ಯಗಳಲ್ಲಿ ಅವು ಸಹಜವಾಗಿ ಹೊಂದುತ್ತವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ. ಪ್ರತಿಯೊಂದು ಪರ್ಯಾಯವೂ ಈಗಾಗಲೇ ಸಾಬೀತಾದದ್ದು ಎಂದರ್ಥವಲ್ಲ — ಮೂಲ, ಬಳಕೆ ಮತ್ತು ಸಂದರ್ಭವನ್ನು ಗಮನದಲ್ಲಿಟ್ಟುಕೊಂಡು ಚರ್ಚಿಸೋಣ."
  },
  yaake: {
    kicker: "Yaake · Why?",
    title: "ನಮ್ಮ ನುಡಿಯ ಆಯ್ಕೆ ನಮ್ಮ ಕೈಯಲ್ಲಿ",
    copy: "ಕನ್ನಡದ ಸ್ವಂತ ಪದಸಂಪತ್ತನ್ನು ಅರಿತುಕೊಳ್ಳಲು, ಬೇರೆ ದ್ರಾವಿಡ ಭಾಷೆಗಳಲ್ಲಿರುವ ಹೋಲಿಕೆಗಳನ್ನು ಗಮನಿಸಲು ಮತ್ತು ಸಂದರ್ಭಕ್ಕೆ ತಕ್ಕ ಸಹಜ ಪದಗಳನ್ನು ಬೆಳೆಸಲು ಈ ವೇದಿಕೆ. ಇದು ಸಂಸ್ಕೃತ ಪದಗಳನ್ನು ಬಲವಂತವಾಗಿ ತೆಗೆದುಹಾಕುವ ಅಭಿಯಾನವಲ್ಲ; ಪದಗಳ ಮೂಲವನ್ನು ಪ್ರಾಮಾಣಿಕವಾಗಿ ಗುರುತಿಸಿ, ಅರ್ಥಕ್ಕೆ ಸರಿಹೊಂದುವ ಕನ್ನಡದ ಆಯ್ಕೆಗಳನ್ನು ಮುಕ್ತವಾಗಿ ಪರಿಶೀಲಿಸುವ ಪ್ರಯತ್ನ.\n\nReplace the unnecessary tatsama layer where a clear, acceptable Dravidian alternative exists, and get those alternatives into actual use.\n\nStrengthening native word formation. Coining from Dravidian roots instead of importing Sanskrit compounds makes our vocabulary more transparent.\n\nSupport a Dravidian oriented standard. It gives writers, teachers, and media a larger native alternative lexicon."
  },
  mundenu: {
    kicker: "Mundenu · What next?",
    title: "ನಿಮ್ಮ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆಯಿಂದ ಮುಂದಿನ ಹೆಜ್ಜೆ",
    copy: "ಮೊದಲು ಪದಗಳ ಪಟ್ಟಿಯಲ್ಲಿ ನಿಮಗೆ ಸೂಕ್ತವೆನಿಸುವ ಪರ್ಯಾಯಕ್ಕೆ ಮತ ನೀಡಿ. ಹೊಸ ಕನ್ನಡ ಪದ ಗೊತ್ತಿದ್ದರೆ ಅದನ್ನು ಸೂಚಿಸಿ — ಪ್ರತಿ ಪದಕ್ಕೆ ಒಬ್ಬ ಬಳಕೆದಾರರಿಗೆ ಒಂದು ಸಲಹೆಯ ಅವಕಾಶವಿದೆ; ನಿರ್ವಾಹಕರ ಪರಿಶೀಲನೆಯ ನಂತರವೇ ಅದು ಸಾರ್ವಜನಿಕ ಮತಪಟ್ಟಿಗೆ ಸೇರುತ್ತದೆ. ನಂತರ ವಾಕ್ಯ ಪರಿಶೀಲನೆಗೆ ಹೋಗಿ, ಆ ಪದ ನಿಜವಾದ ಬಳಕೆಯಲ್ಲಿ ಸಹಜವಾಗಿದೆಯೇ ಎಂದು ಅಭಿಪ್ರಾಯ ಹಂಚಿಕೊಳ್ಳಿ.\n\nA word list on a website doesn’t change a language. Replacement succeeds only if speakers, writers, schools, and media use the alternatives naturally.\n\nIt requires community consent, not a mechanical substitution."
  }
};
function showInfo(key) {
  const panel = document.getElementById("project-info");
  if (!key) { panel.classList.add("hidden"); return; }
  const info = projectInfo[key];
  if (!info) return;
  document.getElementById("project-info-kicker").textContent = info.kicker;
  document.getElementById("project-info-title").textContent = info.title;
  document.getElementById("project-info-copy").textContent = info.copy;
  panel.classList.remove("hidden");
  panel.scrollIntoView({behavior:"smooth",block:"nearest"});
}
window.showInfo = showInfo;
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

let landingRows = null;
let masterRows = null;
let wordDatasetMode = "unified";
let unifiedRows = null;
const wordSearchInput = document.getElementById("word-search");
const datasetDescription = document.getElementById("word-dataset-description");
const canonicalDatasetButton = document.getElementById("canonical-dataset-button");
const landingDatasetButton = document.getElementById("landing-dataset-button");
const masterDatasetButton = document.getElementById("master-dataset-button");

function setWordDataset() {
  wordDatasetMode = "unified";
  currentWordPage = 0;
  filterAndRender();
}
window.setWordDataset = setWordDataset;

function populateCategoryOptions() {
  const selected = categorySelect.value || "all";
  const categories = [...new Set((unifiedRows || []).flatMap(entry => entry.categories || [entry.category || "Uncategorized"]))];
  categories.sort((a,b) => {
    if (a === "Public Signboards") return -1;
    if (b === "Public Signboards") return 1;
    return a.localeCompare(b);
  });
  categorySelect.replaceChildren();
  categorySelect.add(new Option("All categories","all"));
  categories.forEach(category => categorySelect.add(new Option(category,category)));
  categorySelect.value = categories.includes(selected) ? selected : "all";
}
async function loadUnifiedRows() {
  if (unifiedRows) return unifiedRows;
  await window.KannadaLexiconStore.ready();
  const [canonicalEntries, masterResponse, landingResponse, textbookResponse] = await Promise.all([
    window.KannadaLexiconStore.loadAllEntries(),
    fetch("./master-lexicon.json",{cache:"no-cache"}),
    fetch("./landing-words.json",{cache:"no-cache"}),
    fetch("./textbook-words.json",{cache:"no-cache"})
  ]);
  if (!masterResponse.ok) throw new Error("The master word list could not be loaded ("+masterResponse.status+").");
  if (!landingResponse.ok) throw new Error("The civic, media and education words could not be loaded ("+landingResponse.status+").");
  if (!textbookResponse.ok) throw new Error("The textbook vocabulary could not be loaded ("+textbookResponse.status+").");
  const masterData = await masterResponse.json();
  const landingData = await landingResponse.json();
  const textbookData = await textbookResponse.json();
  if (masterData.schemaVersion !== 1 || masterData.sourceFile !== "2087words.xlsx" ||
      !Array.isArray(masterData.entries) || masterData.entries.length !== masterData.entryCount ||
      masterData.entries.some(row => !row.id || !Array.isArray(row.fields) || row.fields.length !== 8)) {
    throw new Error("The master word list failed its integrity check.");
  }
  if (!Array.isArray(landingData) || landingData.length !== 173 ||
      landingData.some(row => !Array.isArray(row) || row.length !== 6)) {
    throw new Error("The civic, media and education list failed its integrity check.");
  }
  if (textbookData.schemaVersion !== 1 || textbookData.sourceFile !== "newwords.txt" ||
      !Array.isArray(textbookData.entries) || textbookData.entries.length !== textbookData.entryCount ||
      textbookData.entries.some(row => !row.id || !row.inputWord || !row.primary || !Number.isInteger(row.sourceLine))) {
    throw new Error("The Kannada textbook word list failed its integrity check.");
  }
  const masterEntries = masterData.entries.map(row => {
    const fields = row.fields;
    const alternatives = String(fields[2] || "").split(/\s*\/\s*/).filter(Boolean);
    const notes = [fields[7],fields[6] ? "Dravidian root: "+fields[6] : ""].filter(Boolean).join(" · ");
    return {
      id:"master-"+row.id, sanskrit:fields[1], meaning:fields[3], category:fields[4] || "Uncategorized",
      naturalness:fields[5], alternatives:alternatives.map((word,index) => ({
        id:"master-"+row.id+"-alt-"+(index+1),word,unreviewed:true,viability:"proposed",
        note:notes || "From the master spreadsheet; editorial review may refine this wording.",
        etymologyParts:[{form:word,etymology:"unknown"}]
      })),
      editorialNote:[fields[5] ? "Naturalness fit: "+fields[5] : "",notes].filter(Boolean).join(" · "),
      sourceLine:row.sourceLine
    };
  });
  const landingEntries = landingData.map(row => ({
    id:"additional-"+row[0], sanskrit:row[1], meaning:row[3], category:row[4] || "Uncategorized", naturalness:row[5],
    alternatives:String(row[2] || "").split(/\s*\/\s*/).filter(Boolean).map((word,index) => ({
      id:"additional-"+row[0]+"-"+(index+1),word,unreviewed:true,viability:"proposed",
      note:"Spreadsheet proposal; community and editorial review may refine this wording.",
      etymologyParts:[{form:word,etymology:"unknown"}]
    })),
    editorialNote:"Naturalness fit in the supplied spreadsheet: "+row[5]+"."
  }));
  const textbookEntries = textbookData.entries.map(row => ({
    id:row.id, sanskrit:row.inputWord, meaning:row.meaning || "Textbook vocabulary suggestion",
    category:"School Textbooks",
    alternatives:[...String(row.primary || "").split(/\s*\/\s*/).filter(Boolean),...(row.alternatives || [])]
      .filter((word,index,all) => word && all.indexOf(word) === index)
      .map((word,index) => ({id:row.id+"-alt-"+(index+1),word,unreviewed:true,viability:"proposed",
        note:"User-supplied textbook suggestion. Editorial review is pending; no etymological claim is made.",
        etymologyParts:[{form:word,etymology:"unknown"}]})),
    editorialNote:"Source: newwords.txt, row "+row.sourceNumber+" (line "+row.sourceLine+"). "+
      (row.sourceCategory ? "Domain: "+row.sourceCategory+". " : "")+"Unreviewed editorial suggestion.",
    sourceDataset:row.sourceDataset,sourceLine:row.sourceLine
  }));
  const all = [...canonicalEntries,...masterEntries,...landingEntries,...textbookEntries];
  const grouped = new Map();
  const normalizeDisplayKey = value => String(value ?? "").normalize("NFC").replace(/\s+/g," ").trim();
  for (const entry of all) {
    // Consolidate exact source-word + meaning matches for browsing only.
    // Different meanings stay separate; every original record remains untouched.
    const key = normalizeDisplayKey(entry.sanskrit) + "\u0000" + normalizeDisplayKey(entry.meaning);
    let group = grouped.get(key);
    if (!group) {
      group = { ...entry, categories: [], sourceRecordIds: [], alternatives: [], editorialNotes: [] };
      grouped.set(key, group);
    }
    group.sourceRecordIds.push(entry.id);
    group.noAlternative = Boolean(group.noAlternative || entry.noAlternative);
    group.scopeAudit = Boolean(group.scopeAudit || entry.scopeAudit);
    if (entry.rejectedAlternatives?.length) {
      group.rejectedAlternatives = [...(group.rejectedAlternatives || []), ...entry.rejectedAlternatives];
    }
    const category = entry.category || "Uncategorized";
    if (!group.categories.includes(category)) group.categories.push(category);
    if (entry.editorialNote && !group.editorialNotes.includes(entry.editorialNote)) group.editorialNotes.push(entry.editorialNote);
    for (const alternative of entry.alternatives || []) {
      const altKey = normalizeDisplayKey(alternative.word);
      if (!altKey) continue;
      const voteRef = { entryId: entry.id, altId: alternative.id };
      const existing = group.alternatives.find(item => normalizeDisplayKey(item.word) === altKey);
      if (existing) {
        if (!existing.voteRefs.some(ref => ref.entryId === voteRef.entryId && ref.altId === voteRef.altId)) existing.voteRefs.push(voteRef);
      } else {
        group.alternatives.push({ ...alternative, voteRefs: [voteRef] });
      }
    }
  }
  const allGrouped = [...grouped.values()];
  for (const entry of allGrouped) {
    entry.categories.sort((a,b) => (a === "Public Signboards" ? 0 : 1) - (b === "Public Signboards" ? 0 : 1) || a.localeCompare(b));
    entry.category = entry.categories[0] || "Uncategorized";
    entry.editorialNote = [
      ...entry.editorialNotes,
      entry.sourceRecordIds.length > 1 ? "Displayed as one card from " + entry.sourceRecordIds.length + " preserved source records." : ""
    ].filter(Boolean).join(" · ");
  }
  const categoryRank = entry => entry.categories.includes("Public Signboards") ? 0 : 1;
  allGrouped.sort((a,b) => categoryRank(a)-categoryRank(b) ||
    String(a.category || "Uncategorized").localeCompare(String(b.category || "Uncategorized")) ||
    String(a.sanskrit || "").localeCompare(String(b.sanskrit || "")) ||
    String(a.id).localeCompare(String(b.id)));
  unifiedRows = allGrouped;
  populateCategoryOptions();
  return unifiedRows;
}
function getFilteredUnifiedRows() {
  if (!unifiedRows) return [];
  const category = categorySelect.value || "all";
  const query = (wordSearchInput?.value || "").trim().toLocaleLowerCase();
  return unifiedRows.filter(entry =>
    (category === "all" || (entry.categories || [entry.category || "Uncategorized"]).includes(category)) &&
    (!query || [entry.sanskrit,entry.meaning,entry.category,entry.editorialNote,...(entry.alternatives || []).map(alt=>alt.word)]
      .some(value => String(value ?? "").toLocaleLowerCase().includes(query)))
  );
}

function getFilteredMasterRows() {
  if (!masterRows) return [];
  const category = categorySelect.value || "all";
  const query = (wordSearchInput?.value || "").trim().toLocaleLowerCase();
  return masterRows.filter(row =>
    (category === "all" || (row.fields[4] || "Uncategorized") === category) &&
    (!query || row.fields.some(value => String(value ?? "").toLocaleLowerCase().includes(query)))
  );
}
function getFilteredLandingRows() {
  if (!landingRows) return [];
  const domain = categorySelect.value || "all";
  const query = (wordSearchInput?.value || "").trim().toLocaleLowerCase();
  return landingRows.filter(row =>
    (domain === "all" || row[4] === domain) &&
    (!query || row.some(value => String(value).toLocaleLowerCase().includes(query)))
  );
}
async function filterAndRender() {
  const request = ++lexiconPageRequest;
  try {
    await loadUnifiedRows();
    if (!lexiconInitialized) {
      Object.assign(etymologyLabels,window.KannadaLexiconStore.getLabels());
      lexiconInitialized = true;
    }
    const filtered = getFilteredUnifiedRows();
    const start = currentWordPage * WORDS_PER_PAGE;
    const pageEntries = filtered.slice(start,start+WORDS_PER_PAGE);
    if (request !== lexiconPageRequest) return;
    votingEntries = pageEntries;
    render(pageEntries,filtered.length);
    stats.textContent = filtered.length+" entries in one unified word list" +
      (categorySelect.value === "all" ? "" : " · "+categorySelect.value);
  } catch (error) {
    if (request !== lexiconPageRequest) return;
    votingEntries = [];
    grid.innerHTML = '<div class="col-span-full rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"><strong>Vocabulary could not be loaded.</strong><p class="mt-1">'+escapeHtml(error.message || "Please check your connection.")+'</p><button type="button" class="mt-3 rounded-lg border border-red-300 bg-white px-3 py-2" onclick="filterAndRender()">Retry</button></div>';
    stats.textContent = "Vocabulary unavailable";
    updateWordPagination(0);
    console.error("KannadaWords unified lexicon load failed:",error);
  }
}

window.castVote=castVote; window.toggleImproveForm=toggleImproveForm; window.submitSuggestion=submitSuggestion; window.cancelImproveForm=cancelImproveForm;
categorySelect.addEventListener("change",() => { currentWordPage = 0; filterAndRender(); });
wordSearchInput?.addEventListener("input",() => { currentWordPage = 0; filterAndRender(); });
filterAndRender();
renderContextual();
loadRemoteVotes();
setInterval(() => { if (document.visibilityState === "visible") loadRemoteVotes(); }, 15000);
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") loadRemoteVotes(); });
window.addEventListener("focus", loadRemoteVotes);
loadApprovedSuggestions();

const adminPanel = document.getElementById("admin-panel");
let adminToken = sessionStorage.getItem("kannadaAdminToken") || "";
let titleTapCount = 0, titleTapTimer;
async function openAdminGate() {
  const pin = prompt("Administrator PIN");
  if (pin === null) return;
  try {
    const response = await fetch(MODERATION_API + "/api/admin/login", {
      method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({pin})
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Administrator verification failed.");
    adminToken = data.token;
    sessionStorage.setItem("kannadaAdminToken",adminToken);
    adminPanel.classList.remove("hidden");
    await loadPendingSuggestions();
    adminPanel.scrollIntoView({behavior:"smooth",block:"start"});
  } catch(error) { alert(error.message || "Administrator access failed."); }
}
async function adminRequest(path, options={}) {
  const response = await fetch(MODERATION_API + path,{...options,headers:{...(options.headers||{}),Authorization:"Bearer "+adminToken}});
  const data = await response.json();
  if (response.status === 401) {
    adminToken = ""; sessionStorage.removeItem("kannadaAdminToken");
    adminPanel.classList.add("hidden");
    throw new Error("Administrator session expired. Open Admin mode again.");
  }
  if (!response.ok) throw new Error(data.error || "Request failed.");
  return data;
}
async function loadPendingSuggestions() {
  const list=document.getElementById("admin-pending-list");
  list.innerHTML='<p class="text-sm text-stone-500">Loading pending suggestions…</p>';
  try {
    const data=await adminRequest("/api/admin/pending");
    if (!data.suggestions.length) { list.innerHTML='<p class="text-sm text-stone-500">No suggestions awaiting review.</p>'; return; }
    list.innerHTML=data.suggestions.map(item=>`<article class="rounded-lg border border-stone-200 bg-white p-3" data-id="${escapeHtml(item.id)}">
      <p class="text-xs text-stone-500 mb-1">Word card: <code>${escapeHtml(item.entryId)}</code></p>
      <input class="admin-edit-word kn w-full rounded-lg border border-stone-300 px-3 py-2 text-base" maxlength="80" value="${escapeHtml(item.word)}" aria-label="Edit suggested Kannada word">
      <div class="flex gap-2 mt-2">
        <button type="button" onclick="reviewCommunitySuggestion(this,'approve')" class="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm text-white">Approve</button>
        <button type="button" onclick="reviewCommunitySuggestion(this,'reject')" class="rounded-lg border border-red-300 px-3 py-1.5 text-sm text-red-700">Reject</button>
      </div></article>`).join("");
  } catch(error) { list.innerHTML='<p class="text-sm text-red-700">'+escapeHtml(error.message)+'</p>'; }
}
async function reviewCommunitySuggestion(button,action) {
  const card=button.closest("[data-id]"), word=card.querySelector(".admin-edit-word").value.trim();
  try {
    await adminRequest("/api/admin/review",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:card.dataset.id,action,word})});
    card.remove();
    if (!document.querySelector("#admin-pending-list [data-id]")) document.getElementById("admin-pending-list").innerHTML='<p class="text-sm text-stone-500">No suggestions awaiting review.</p>';
    if(action==="approve") await loadApprovedSuggestions();
  } catch(error) { alert(error.message); }
}
function closeAdminMode() {
  adminToken=""; sessionStorage.removeItem("kannadaAdminToken"); adminPanel.classList.add("hidden");
}
const brandTitle=document.querySelector("header h1");
if(brandTitle) brandTitle.addEventListener("click",()=>{
  titleTapCount++;
  clearTimeout(titleTapTimer);
  titleTapTimer=setTimeout(()=>{titleTapCount=0;},1800);
  if(titleTapCount>=7){titleTapCount=0;openAdminGate();}
});
window.reviewCommunitySuggestion=reviewCommunitySuggestion;
window.closeAdminMode=closeAdminMode;
window.loadPendingSuggestions=loadPendingSuggestions;



// ---------------- Coinage review workspace (simplified reviewer form) ----------------
function coinageScoreControls() {
  const host = document.getElementById("coin-score-inputs");
  const dimensions = coinageReviewData.scorecard.dimensions;
  host.innerHTML = dimensions.map(d => {
    const options = d.id === "short" ? [[0,"Not assessed · 0"],[5,"1–2 syllables · 5"],[4,"3 syllables · 4"],[3,"4 syllables · 3"],[2,"5 syllables · 2"],[1,"6+ syllables · 1"]] : [[0,"Not assessed · 0"],[5,"Strong · 5"],[3,"Partial · 3"],[1,"Weak · 1"]];
    return '<label class="text-xs text-stone-600">' + escapeHtml(d.label) + ' <select data-coin-score="' + d.id + '" class="block w-full mt-1 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm">' + options.map(([v,l]) => '<option value="' + v + '"' + (v===0?' selected':'') + '>' + l + '</option>').join("") + '</select><span class="block text-xs text-stone-400 mt-1">' + escapeHtml(d.rubric) + '</span></label>';
  }).join("");
}
function coinageEvaluation() {
  const scores = {};
  document.querySelectorAll("[data-coin-score]").forEach(el => scores[el.dataset.coinScore] = Number(el.value));
  const total = Object.values(scores).reduce((a,b)=>a+b,0), min = Math.min(...Object.values(scores));
  const collision = document.getElementById("coin-collision").value;
  const origin = document.getElementById("coin-origin").value;
  const evidence = document.getElementById("coin-hale-status").value;
  const meaningFit = document.getElementById("coin-meaning-fit").value;
  const autoChoice = document.getElementById("coin-autofail").value;
  const flagMap = {sanskrit:"Sanskrit morpheme",perso_arabic:"Perso-Arabic loan",english:"English loan",collision:"Homophone collision with common word",overlong:"Explanation longer than three words"};
  const flags = autoChoice === "none" ? [] : [flagMap[autoChoice]];
  if (origin === "sanskrit" && !flags.includes("Sanskrit morpheme")) flags.push("Sanskrit morpheme");
  if (origin === "loan" && !flags.length) flags.push("Unverified non-Dravidian loan element");
  if (meaningFit === "poor") flags.push("Meaning mismatch");
  let verdict = "CONDITIONAL";
  const unassessed = Object.values(scores).some(score => score === 0);
  if (flags.length || total < 11 && !unassessed || min === 1 || collision === "blocked" || meaningFit === "poor") verdict = "FAIL";
  else if (!unassessed && origin === "native" && evidence === "attested" && meaningFit === "exact" && total >= 15 && min >= 3 && collision === "clear") verdict = "PASS";
  const originLabel = {unknown:"unknown",native:"native",tadbhava:"tadbhava",sanskrit:"sanskrit",loan:"loan"}[origin];
  return {
    schema_version: coinageReviewData.schemaVersion, submitted_by:"community-review", submitted_date:new Date().toISOString(),
    sanskrit_source_word:document.getElementById("coin-source").value.trim(), english_gloss:document.getElementById("coin-gloss").value.trim(),
    proposed_coinage:document.getElementById("coin-candidate").value.trim(), literal_gloss:null, type:document.getElementById("coin-type").value,
    morphemes:[{form:"whole proposed word",origin:originLabel}], scores:{...scores,total,total_max:20}, collision_check:collision,
    attestation:{halegannada:evidence,citation:null,proto_dravidian_root:null,dedr:null,tamil_parallel:null,tulu_parallel:null},
    auto_fail:flags, meaning_fit:meaningFit, verdict,
    reviewer_notes:"PASS requires verified native origin, attestation, exact meaning fit, clear collision check and strong scores.",
    voting_status:"not-submitted"
  };
}
function evaluateCoinage() {
  const output=document.getElementById("coin-result");
  if (["coin-source","coin-gloss","coin-candidate"].some(id=>!document.getElementById(id).value.trim())) {
    output.className="text-sm font-semibold text-red-700"; output.textContent="Enter all three words before evaluating."; return null;
  }
  const candidate=document.getElementById("coin-candidate").value.trim();
  const letters=candidate.match(/\p{L}/gu)||[];
  const allKannada=letters.length>0 && letters.every(ch=>/[\u0C80-\u0CFF]/u.test(ch));
  if (!allKannada) {
    const out={verdict:"FAIL",scores:{total:0,total_max:20},auto_fail:["Candidate must be written entirely in Kannada script; Latin-script or non-Kannada text is rejected before scoring."]};
    const output=document.getElementById("coin-result");
    output.className="text-sm font-semibold text-red-700";
    output.textContent="FAIL · 0/20 · Candidate is not written in Kannada script.";
    window.lastCoinageEvaluation=out; return null;
  }
  const result=coinageEvaluation(), tone=result.verdict==="PASS"?"text-emerald-700":result.verdict==="CONDITIONAL"?"text-amber-700":"text-red-700";
  output.className="text-sm font-semibold "+tone;
  output.textContent=result.verdict+" · "+result.scores.total+"/20"+(result.auto_fail.length?" · "+result.auto_fail.join(", "):result.verdict==="CONDITIONAL"?" · Evidence or checks incomplete":"");
  window.lastCoinageEvaluation=result; return result;
}
function exportCoinageEvaluation() {
  const result=evaluateCoinage(); if(!result)return;
  const blob=new Blob([JSON.stringify(result,null,2)],{type:"application/json"}), url=URL.createObjectURL(blob), a=document.createElement("a");
  a.href=url; a.download=(result.proposed_coinage||"coinage-evaluation")+".json"; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
function resetCoinageForm() {
  ["coin-source","coin-gloss","coin-candidate"].forEach(id=>document.getElementById(id).value="");
  ["coin-type","coin-origin","coin-hale-status","coin-meaning-fit","coin-collision","coin-autofail"].forEach(id=>document.getElementById(id).selectedIndex=0);
  document.querySelectorAll("[data-coin-score]").forEach(el=>el.value="0");
  const out=document.getElementById("coin-result"); out.textContent=""; out.className="text-sm font-semibold"; window.lastCoinageEvaluation=null;
}
function renderCoinageRecords() {
  const host=document.getElementById("coinage-records");
  if (!host || typeof coinageReviewData === "undefined") return;
  const tier=document.getElementById("coin-tier-filter")?.value || "all";
  const records=coinageReviewData.tamilParallels.filter(r=>tier==="all"||r.tier===tier);
  host.innerHTML=records.map(r=>{
    const tierLabel=r.tier==="A"?"Structural parallel":r.tier==="B"?"Attested revival":"Honest gap";
    const badge=r.tier==="A"?"bg-emerald-100 text-emerald-800":r.tier==="B"?"bg-sky-100 text-sky-800":"bg-stone-200 text-stone-700";
    const candidate=r.candidate?'<p class="kn text-xl font-semibold text-stone-900 mt-1">'+escapeHtml(r.candidate)+'</p><p class="text-xs text-stone-500">'+escapeHtml(r.literal||"")+'</p>':'<p class="text-sm font-semibold text-stone-700 mt-2">No Kannada coinage proposed</p>';
    const morphemes=r.morphemes.length?'<p class="text-xs text-stone-500 mt-2">Morphemes: '+r.morphemes.map(m=>escapeHtml(m.form)+' ('+escapeHtml(m.origin)+')').join(' + ')+'</p>':'';
    return '<article class="rounded-xl border border-stone-200 bg-white p-4"><div class="flex flex-wrap items-center justify-between gap-2"><span class="text-xs rounded-full px-2 py-1 '+badge+'">Tier '+r.tier+' · '+tierLabel+'</span><span class="text-xs font-semibold text-stone-600">'+escapeHtml(r.verdict)+(r.score!==null?' · '+r.score+'/20':'')+'</span></div><p class="kn text-sm font-semibold text-red-800 mt-3">'+escapeHtml(r.source)+'</p><p class="text-xs text-stone-500">'+escapeHtml(r.gloss)+'</p>'+candidate+morphemes+'<p class="text-xs text-stone-600 mt-3">'+escapeHtml(r.note)+'</p></article>';
  }).join("");
  const doNot=document.getElementById("coinage-do-not-attempt");
  doNot.innerHTML=coinageReviewData.doNotAttempt.map(r=>'<div class="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-1 border-b border-stone-100 pb-2 last:border-0"><span class="kn font-semibold">'+escapeHtml(r.kannada)+'</span><span class="text-xs text-stone-500">'+escapeHtml(r.reason)+'</span></div>').join("");
}
function showTab(tab) {
  const words=tab==="words", sentences=tab==="sentences", coinages=tab==="coinages", translate=tab==="translate";
  document.getElementById("words-panel").classList.toggle("hidden",!words);
  document.getElementById("sentences-panel").classList.toggle("hidden",!sentences);
  document.getElementById("coinages-panel").classList.toggle("hidden",!coinages);
  document.getElementById("translate-panel").classList.toggle("hidden",!translate);
  document.getElementById("word-tab").classList.toggle("main-choice-active",words);
  document.getElementById("sentence-tab").classList.toggle("main-choice-active",sentences);
  document.getElementById("coinage-tab").classList.toggle("main-choice-active",coinages);
  document.getElementById("translate-tab").classList.toggle("main-choice-active",translate);
  if(coinages) renderCoinageRecords();
}
window.showTab=showTab;
window.evaluateCoinage=evaluateCoinage;
window.exportCoinageEvaluation=exportCoinageEvaluation;
window.resetCoinageForm=resetCoinageForm;
window.renderCoinageRecords=renderCoinageRecords;
coinageScoreControls();
renderCoinageRecords();
let achchaGapBaseText = "";
let achchaGapPrefix = "";
let achchaGapSuffix = "";
let achchaGapSelectionState = new Map();

function renderAchchaGapSelections() {
 const input=document.getElementById("achcha-input");
 if(!input || !achchaGapBaseText)return;
 const edits=[];
 for(const [source,choice] of achchaGapSelectionState.entries()){
  if(choice.replacement===source)continue;
  for(const occurrence of choice.occurrences){
   edits.push({start:occurrence.start,end:occurrence.end,replacement:choice.replacement});
  }
 }
 edits.sort((a,b)=>a.start-b.start);
 let cursor=0, output="";
 for(const edit of edits){
  if(edit.start<cursor)continue;
  output+=achchaGapBaseText.slice(cursor,edit.start)+edit.replacement;
  cursor=edit.end;
 }
 output+=achchaGapBaseText.slice(cursor);
 input.value=achchaGapPrefix+output+achchaGapSuffix;
}

function selectAchchaGapAlternative(source,replacement) {
 const choice=achchaGapSelectionState.get(source);
 if(!choice)return;
 choice.replacement=replacement;
 renderAchchaGapSelections();
}
window.selectAchchaGapAlternative=selectAchchaGapAlternative;

async function translateAchchaGapWords(){
 const checked=[...document.querySelectorAll("#achcha-gap-words input[data-gap-index]:checked")];
 const selected=checked.map(x=>achchaDiscoveryState[Number(x.dataset.gapIndex)]).filter(Boolean);
 const status=document.getElementById("achcha-gap-status"), results=document.getElementById("achcha-gap-results"), button=document.getElementById("achcha-gap-ai");
 if(!selected.length){if(status)status.textContent="ಮೊದಲು ನೀಲಿ ಗೆರೆ ಹಾಕಿರುವ ಪದಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ.";return;}
 const input=document.getElementById("achcha-input");
 const raw=input?.value||"";
 const trimmed=raw.trim();
 const leading=raw.length-raw.trimStart().length;
 achchaGapPrefix=raw.slice(0,leading);
 achchaGapSuffix=raw.slice(leading+trimmed.length);
 achchaGapBaseText=trimmed.normalize("NFC");
 achchaGapSelectionState=new Map();
 const groups=new Map();
 selected.forEach(item=>{
  if(!groups.has(item.source))groups.set(item.source,[]);
  groups.get(item.source).push({start:item.start,end:item.end});
 });
 groups.forEach((occurrences,source)=>achchaGapSelectionState.set(source,{occurrences,replacement:source}));
 button.disabled=true;
 results.classList.remove("hidden");
 results.replaceChildren();
 const heading=document.createElement("h3");
 heading.className="text-sm font-semibold text-stone-800 mb-2";
 heading.textContent="ಪದಗಳು ಮತ್ತು ಪರ್ಯಾಯಗಳು · Words & alternatives";
 results.append(heading);
 const add=(word,payload,error,index)=>{
  const card=document.createElement("section");
  card.className="rounded-lg border border-stone-200 bg-white px-3 py-3";
  const source=document.createElement("h4");
  source.className="kn text-base font-semibold text-stone-900 mb-2";
  source.textContent=word;
  card.append(source);
  if(error){
   const message=document.createElement("p");
   message.className="text-sm text-red-700";
   message.textContent=error;
   card.append(message);
  }else{
   const options=document.createElement("div");
   options.className="grid gap-2";
   const suggestions=Array.isArray(payload.suggestions)?payload.suggestions:[];
   const choices=[{replacement:word},...suggestions.filter(item=>item&&typeof item.replacement==="string"&&item.replacement.trim()).filter((item,i,all)=>all.findIndex(x=>x.replacement===item.replacement)===i)];
   choices.forEach((suggestion,choiceIndex)=>{
    const label=document.createElement("label");
    label.className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-amber-50 cursor-pointer";
    const radio=document.createElement("input");
    radio.type="radio";
    radio.name="achcha-gap-choice-"+index;
    radio.value=suggestion.replacement;
    radio.checked=choiceIndex===0;
    radio.className="accent-amber-700";
    radio.addEventListener("change",()=>selectAchchaGapAlternative(word,suggestion.replacement));
    const text=document.createElement("span");
    text.className="kn text-base text-stone-800";
    text.textContent=suggestion.replacement;
    label.append(radio,text);
    options.append(label);
   });
   card.append(options);
  }
  results.append(card);
 };
 let index=0;
 for(const [word] of groups){
  if(status)status.textContent=(index+1)+" / "+groups.size+" · "+word;
  try{
   const response=await fetch("https://kannadawords-ai.tulasianand6.workers.dev/api/rewrite",{method:"POST",headers:{"Content-Type":"text/plain;charset=UTF-8"},body:JSON.stringify({text:word,wordOnly:true}),cache:"no-store"});
   const payload=await response.json();
   if(!response.ok)throw new Error(payload.error||"AI ಪರಿಶೀಲನೆ ವಿಫಲವಾಗಿದೆ.");
   if(payload.word!==word||!Array.isArray(payload.suggestions))throw new Error("AI ಉತ್ತರವನ್ನು ಓದಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.");
   add(word,payload,null,index);
  }catch(error){
   add(word,null,error.message||"AI ಸೇವೆಯನ್ನು ಸಂಪರ್ಕಿಸಲಾಗಲಿಲ್ಲ.",index);
  }
  index++;
 }
 if(status)status.textContent=groups.size+" ಪದಗಳ ಪರ್ಯಾಯಗಳು ಸಿದ್ಧವಾಗಿವೆ.";
 button.disabled=false;
}


// Tab 4 inline editor: one editable surface, inline word popovers, one applied result.
(() => {
  const editor = document.getElementById("achcha-input");
  if (!editor) return;
  let sourceText = "";
  let rendering = false;

  const readPlain = node => {
    let out = "";
    const walk = current => {
      if (current.nodeType === Node.TEXT_NODE) { out += current.nodeValue; return; }
      if (current.nodeType !== Node.ELEMENT_NODE) return;
      if (current.classList?.contains("achcha-pop")) return;
      if (current.tagName === "BR") { out += "\n"; return; }
      const block = current !== editor && /^(DIV|P)$/.test(current.tagName);
      const before = out.length;
      for (const child of current.childNodes) walk(child);
      if (block && out.length > before && !out.endsWith("\n")) out += "\n";
    };
    for (const child of node.childNodes) walk(child);
    return out.replace(/\n+$/u, "");
  };
  const records = () => [...achchaMatchState.map((m,i)=>({...m,kind:"red",index:i})),
    ...achchaDiscoveryState.map((m,i)=>({...m,kind:"blue",index:i}))].sort((a,b)=>a.start-b.start);
  const optionsHtml = (item) => {
    const values = item.kind === "red"
      ? (item.candidates || []).map(c=>c.word).filter(Boolean)
      : (item.suggestions || []).map(s=>s.replacement).filter(Boolean);
    const unique = [...new Set(values)].filter(word=>word!==item.source);
    const keep = '<button type="button" class="achcha-opt achcha-opt-keep" data-kind="'+item.kind+'" data-index="'+item.index+'" data-word="'+escapeHtmlAchcha(item.source)+'">Keep original</button>';
    const choices = unique.map(word=>'<button type="button" class="achcha-opt kn" data-kind="'+item.kind+'" data-index="'+item.index+'" data-word="'+escapeHtmlAchcha(word)+'">'+escapeHtmlAchcha(word)+'</button>').join("");
    const empty = item.kind === "blue" && !unique.length
      ? '<span class="text-xs text-stone-500">No AI alternative returned for this word.</span>' : "";
    return '<span class="achcha-pop" contenteditable="false"><span class="achcha-pop-title">'+(item.kind==="red"?"Native words":"AI suggestions")+' for <strong class="kn">'+escapeHtmlAchcha(item.source)+'</strong></span><span class="achcha-pop-opts">'+keep+choices+'</span>'+empty+'</span>';
  };
  function renderEditor() {
    const text = sourceText;
    const all = records();
    let html = "", cursor = 0;
    all.forEach(item => {
      if (item.start < cursor || item.end > text.length) return;
      html += escapeHtmlAchcha(text.slice(cursor,item.start));
      const chosen = item.selected || item.source;
      const klass = item.kind==="red" ? "achcha-underline" : "achcha-discovery-underline";
      html += '<span class="achcha-hit" contenteditable="false" tabindex="0" data-kind="'+item.kind+'" data-index="'+item.index+'"><span class="'+klass+' kn">'+escapeHtmlAchcha(item.source)+'</span>'+optionsHtml(item)+'</span>';
      cursor = item.end;
    });
    html += escapeHtmlAchcha(text.slice(cursor));
    editor.innerHTML = html.replace(/\n/g,"<br>");
    editor.dataset.rendered = "true";
  }
  editor.addEventListener("input", () => {
    if (rendering) return;
    const text = readPlain(editor);
    rendering = true;
    editor.textContent = text;
    rendering = false;
    sourceText = text;
    achchaMatchState = [];
    achchaDiscoveryState = [];
    document.getElementById("achcha-output")?.classList.add("hidden");
  });
  editor.addEventListener("paste", event => {
    event.preventDefault();
    const text = event.clipboardData?.getData("text/plain") || "";
    document.execCommand("insertText",false,text);
  });
  editor.addEventListener("click", event => {
    const option = event.target.closest(".achcha-opt");
    if (!option) return;
    event.preventDefault();
    event.stopPropagation();
    const list = option.dataset.kind==="red" ? achchaMatchState : achchaDiscoveryState;
    const item = list[Number(option.dataset.index)];
    if (!item) return;
    item.selected = option.dataset.word || item.source;
    option.closest(".achcha-pop")?.querySelectorAll(".achcha-opt").forEach(button =>
      button.classList.toggle("achcha-opt-active",button.dataset.word===item.selected));
  });
  editor.addEventListener("keydown", event => {
    if (event.key==="Enter" && !event.shiftKey) {
      event.preventDefault();
      document.execCommand("insertText",false,"\n");
    }
  });

  window.findAchchaWords = async function() {
    const raw = readPlain(editor);
    const original = raw.normalize("NFC");
    if (!original.trim()) { editor.focus(); return; }
    try { await window.KannadaLexiconStore.ready(); }
    catch (error) { alert("Vocabulary could not load: "+(error.message||"Please retry.")); return; }
    sourceText = original;
    achchaMatchState = [];
    achchaDiscoveryState = [];
    const lexicon = buildAchchaLexicon(original);
    const forms = [];
    lexicon.forEach(entry=>(entry.sourceForms||[]).forEach(form=>{
      if(form && form.length>=2) forms.push({form:form.normalize("NFC"),entry});
    }));
    forms.sort((a,b)=>b.form.length-a.form.length);
    const occupied = new Array(original.length).fill(false);
    const isWord = ch => !!ch && /[\p{L}\p{M}\p{N}_]/u.test(ch);
    const folded = original.toLocaleLowerCase();
    for (const {form,entry} of forms) {
      let from=0, needle=form.toLocaleLowerCase();
      while(from<original.length) {
        const at=folded.indexOf(needle,from); if(at<0)break;
        const end=at+form.length;
        const boundary=(at===0||!isWord(original[at-1]))&&(end===original.length||!isWord(original[end]));
        let overlap=false; for(let n=at;n<end;n++) if(occupied[n]){overlap=true;break;}
        if(boundary&&!overlap) {
          for(let n=at;n<end;n++)occupied[n]=true;
          const candidates=(entry.candidates||[]).filter(c=>c.word);
          if(candidates.length) achchaMatchState.push({source:original.slice(at,end),meaning:entry.meaning||"",candidates,selected:original.slice(at,end),start:at,end});
        }
        from=at+1;
      }
    }
    achchaMatchState.sort((a,b)=>a.start-b.start);
    try {
      const entries=await loadAchchaDiscoveryData();
      const blueForms=[];
      entries.forEach(entry=>(entry.forms||[]).forEach(form=>{if(form)blueForms.push({form:form.normalize("NFC"),entry});}));
      blueForms.sort((a,b)=>b.form.length-a.form.length);
      for(const {form,entry} of blueForms) {
        let from=0,needle=form.toLocaleLowerCase();
        while(from<original.length) {
          const at=folded.indexOf(needle,from); if(at<0)break;
          const end=at+form.length;
          const boundary=(at===0||!isWord(original[at-1]))&&(end===original.length||!isWord(original[end]));
          let overlap=false; for(let n=at;n<end;n++)if(occupied[n]){overlap=true;break;}
          if(boundary&&!overlap) {
            for(let n=at;n<end;n++)occupied[n]=true;
            achchaDiscoveryState.push({source:original.slice(at,end),start:at,end,id:entry.id,selected:original.slice(at,end),suggestions:[]});
          }
          from=at+1;
        }
      }
    } catch(error) { console.warn("Sanskrit discovery list unavailable:",error); }
    achchaDiscoveryState.sort((a,b)=>a.start-b.start);
    renderEditor();
  };

  window.translateAchchaGapWords = async function() {
    if (!sourceText) await window.findAchchaWords();
    if (!achchaDiscoveryState.length) return;
    const button=document.getElementById("achcha-ai-scan");
    button.disabled=true;
    button.textContent="Searching…";
    try {
      const unique=[...new Set(achchaDiscoveryState.map(item=>item.source))];
      for (const word of unique) {
        try {
          const response=await fetch("https://kannadawords-ai.tulasianand6.workers.dev/api/rewrite",{
            method:"POST",headers:{"Content-Type":"text/plain;charset=UTF-8"},
            body:JSON.stringify({text:word,wordOnly:true}),cache:"no-store"
          });
          const payload=await response.json();
          if(!response.ok||payload.word!==word||!Array.isArray(payload.suggestions)) continue;
          const suggestions=payload.suggestions.filter(item=>item&&typeof item.replacement==="string"&&item.replacement.trim()&&item.replacement!==word);
          achchaDiscoveryState.filter(item=>item.source===word).forEach(item=>{item.suggestions=suggestions;});
        } catch(error) { console.warn("AI word lookup failed for",word,error); }
      }
      renderEditor();
    } finally {
      button.disabled=false;
      button.textContent="AI search";
    }
  };

  window.completeAchchaRewrite = function() {
    if (!sourceText) { window.findAchchaWords(); return; }
    const edits=[];
    achchaMatchState.concat(achchaDiscoveryState).forEach(item=>{
      const replacement=item.selected||item.source;
      if(replacement!==item.source) edits.push({start:item.start,end:item.end,replacement});
    });
    edits.sort((a,b)=>b.start-a.start);
    let result=sourceText;
    edits.forEach(edit=>{result=result.slice(0,edit.start)+edit.replacement+result.slice(edit.end);});
    const output=document.getElementById("achcha-output");
    const field=document.getElementById("achcha-result-text");
    field.value=result;
    output.classList.remove("hidden");
    output.scrollIntoView({behavior:"smooth",block:"nearest"});
  };

  window.clearAchchaInput = function() {
    sourceText="";
    achchaMatchState=[];
    achchaDiscoveryState=[];
    editor.textContent="";
    editor.dataset.rendered="";
    document.getElementById("achcha-output")?.classList.add("hidden");
    const field=document.getElementById("achcha-result-text");
    if(field)field.value="";
    editor.focus();
  };
})();
