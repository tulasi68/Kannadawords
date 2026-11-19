
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

// Merge the audited set into existing cards (rather than duplicating them),
// then append new terms and the explicitly labelled no-alternative records.
// The 109 supplemental records were appended as a nested array inside originAuditEntries.
 // Flatten that nested array and merge those records into the same voting dataset as the original audited entries.
const existingOriginRecords = [
  ...(typeof auditedWordEntries === "undefined" ? [] : auditedWordEntries.map(item => ({...item, sourceDataset:"etymology-entries.js:audited"}))),
  ...(typeof originAuditEntries === "undefined" ? [] : originAuditEntries).flatMap(item => {
    if (Array.isArray(item)) return item.map(record => ({...record, sourceDataset:"etymology-entries.js:origin-audit"}));
    return item && item.sourceMeaning && Array.isArray(item.alternatives)
      ? [{...item, sourceDataset:"etymology-entries.js:origin-audit"}] : [];
  })
];
const lexicalFormKey = value => String(value || "").normalize("NFC").replace(/\s+/g, "");
const lexicalFormParts = value => String(value || "")
  .split(/\s*(?:\/|,|;|\|| ಅಥವಾ )\s*/u)
  .map(lexicalFormKey).filter(Boolean);
const contributorEntriesForMerge = (typeof contributorWordEntries === "undefined" ? [] : contributorWordEntries).map(item => {
  const key = lexicalFormKey(item.sourceForm);
  const existingBase = wordEntries.find(entry => lexicalFormParts(entry.sanskrit).includes(key));
  const matchingAudits = existingOriginRecords.filter(entry =>
    lexicalFormParts(entry.sourceForm).includes(key) ||
    lexicalFormParts(entry.sourceEtymology && entry.sourceEtymology.form).includes(key)
  );
  const existingAudit = matchingAudits.find(entry => existingBase && entry.id === existingBase.id) ||
    (!existingBase ? matchingAudits[0] : null);
  const existing = existingAudit || existingBase;
  return {
    ...item,
    id: existing && existing.id ? existing.id : item.id,
    sourceForm: existingAudit && existingAudit.sourceForm ? existingAudit.sourceForm : item.sourceForm,
    sourceMeaning: existingAudit && existingAudit.sourceMeaning ? existingAudit.sourceMeaning :
      (existingBase && existingBase.meaning ? existingBase.meaning : item.sourceMeaning),
    sourceEtymology: existingAudit && existingAudit.sourceEtymology ? existingAudit.sourceEtymology :
      (existingBase && existingBase.sourceEtymology ? existingBase.sourceEtymology : item.sourceEtymology),
    contributorSupplied: true,
    sourceDataset: "contributor-equivalents.js"
  };
});
const allAuditedWordEntries = [
  ...existingOriginRecords,
  ...contributorEntriesForMerge
];
const auditedById = allAuditedWordEntries.reduce((map, item) => {
  map[item.id] = typeof lexiconMergeEntryRecords === "function"
    ? lexiconMergeEntryRecords(map[item.id], item)
    : (map[item.id] ? { ...map[item.id], ...item,
        alternatives: [...(map[item.id].alternatives || []), ...(item.alternatives || [])]
          .filter((alt, index, all) => all.findIndex(candidate => candidate.word === alt.word) === index)
      } : item);
  // Preserve the original source-etymology precedence for contributor overlays.
  if (item.contributorSupplied && map[item.id]) {
    map[item.id].sourceEtymology = map[item.id].sourceEtymology || item.sourceEtymology;
  }
  return map;
}, {});

// Keep the category taxonomy aligned with the subject of each audited word.
// These IDs are from etymology-entries.js; matching original records retain
// their established data.js category unless an explicit mapping is listed.
const auditedCategoryById = {
  house:"Everyday", village:"Society", city:"Society", nation:"Society",
  government:"Civic", board:"Civic", law:"Civic", justice:"Civic", judgment:"Civic",
  director:"People", assistant:"People", process:"Civic", democracy:"Civic",
  election:"Civic", question:"Abstract", answer:"Abstract", north:"Directions",
  south:"Directions", east:"Directions", west:"Directions", citizen:"Society",
  public:"Society", responsibility:"Society", medicine:"Body", disease:"Body",
  treatment:"Body", family:"People", welfare:"Society", women:"People",
  accommodation:"Everyday", food:"Everyday", snack:"Everyday", student:"Education",
  school:"Education", library:"Education", university:"Education", language:"Abstract",
  grammar:"Education", culture:"Society", literature:"Education", music:"Society",
  water:"Nature", electricity:"Technology", station:"Technology", forest:"Nature",
  environment:"Nature", soil:"Nature", river:"Nature", sea:"Nature", mountain:"Nature",
  bridge:"Technology", publicity:"Society", speech:"Abstract", officer:"People",
  chief:"People", division:"Civic", constitution:"Civic", office:"Civic",
  punishment:"Civic", commission:"Civic", nutrition:"Body", department:"Civic",
  minister:"People", health:"Body", news:"Society", disability:"People",
  doctor:"People", freedom:"Society", interview:"Society", fruit:"Everyday", moon:"Nature", body:"Body", joy:"Abstract", sorrow:"Abstract", love:"Abstract", fear:"Abstract", desire:"Abstract", dream:"Abstract", woman:"People", man:"People", boy:"People", girl:"People", army:"Society", war:"Society", peace:"Society", authority:"Civic", education:"Education", mathematics:"Education", science:"Education", word:"Abstract", sound:"Abstract", problem:"Abstract", help:"Abstract", progress:"Society", development:"Society", system:"Civic", connection:"Abstract", newspaper:"Society"
};
const supplementalCategoryById = {"supp-nose":"Body","supp-tongue":"Body","supp-finger":"Body","supp-nail-finger":"Body","supp-hair":"Body","supp-head":"Body","supp-face":"Body","supp-heart":"Body","supp-stomach":"Body","supp-blood":"Body","supp-bone":"Body","supp-breath":"Body","supp-body":"Body","supp-disease":"Body","supp-star":"Nature","supp-cloud":"Nature","supp-river":"Nature","supp-forest":"Nature","supp-leaf":"Nature","supp-fruit":"Nature","supp-seed":"Nature","supp-root":"Nature","supp-grass":"Nature","supp-rock-boulder":"Nature","supp-stone":"Nature","supp-silver":"Nature","supp-poison":"Nature","supp-light-brightness":"Nature","supp-darkness":"Nature","supp-cold":"Nature","supp-smoke":"Nature","supp-flame":"Nature","supp-sand":"Nature","supp-direction":"Nature","supp-man-male":"People","supp-boy-child":"People","supp-old-person":"People","supp-friend":"People","supp-enemy":"People","supp-people":"People","supp-subject-citizen":"People","supp-infant":"People","supp-wife":"People","supp-husband":"People","supp-brother":"People","supp-relative":"People","supp-teacher":"People","supp-city":"Society","supp-door":"Society","supp-bed":"Society","supp-ornament":"Society","supp-sandal-footwear":"Society","supp-marriage":"Society","supp-property":"Society","supp-debt":"Society","supp-price":"Society","supp-pot":"Society","supp-wealth-money":"Society","supp-dam-bund":"Society","supp-honey":"Everyday","supp-ghee":"Everyday","supp-salt":"Everyday","supp-cooked-rice":"Everyday","supp-meal":"Everyday","supp-lake-tank":"Everyday","supp-hunger":"Everyday","supp-time":"Everyday","supp-day":"Everyday","supp-daytime":"Everyday","supp-month":"Everyday","supp-evening-dusk":"Everyday","supp-morning":"Everyday","supp-noon":"Everyday","supp-beginning":"Everyday","supp-end":"Everyday","supp-half":"Everyday","supp-knowledge":"Abstract","supp-memory":"Abstract","supp-sight-view":"Abstract","supp-desire":"Abstract","supp-love":"Abstract","supp-fear":"Abstract","supp-sorrow":"Abstract","supp-comfort-ease":"Abstract","supp-strength":"Abstract","supp-intellect":"Abstract","supp-mind":"Abstract","supp-life-breath-self":"Abstract","supp-anger":"Abstract","supp-joy":"Abstract","supp-work":"Abstract","supp-question":"Abstract","supp-help":"Abstract","supp-beginning-act":"Abstract","supp-journey":"Abstract","supp-number":"Abstract","supp-birth":"Abstract","supp-death":"Abstract","supp-learning":"Education","supp-book":"Education","supp-letter-script":"Education","supp-word":"Education","supp-sound-noise":"Education","supp-medicine":"Education","supp-doctor":"Education","supp-war":"Education","supp-load-weight":"Education","supp-service":"Education","supp-story":"Education","nose":"Body","head":"Body","hair":"Body","blood":"Body","friend":"People","cloud":"Nature"};
const categoryForAudited = item => auditedCategoryById[item.id] || supplementalCategoryById[item.id] || item.category || "Abstract";
const votingEntries = wordEntries.map(entry => {
  const audit = auditedById[entry.id];
  return audit ? {
    ...entry,
    sanskrit: audit.sourceForm,
    meaning: audit.sourceMeaning || entry.meaning,
    category: categoryForAudited(audit) || entry.category,
    sourceEtymology: audit.sourceEtymology,
    alternatives: (typeof lexiconMergeCandidateRecords === "function"
      ? lexiconMergeCandidateRecords([
          ...(entry.alternatives || []).map(candidate => ({...candidate, sourceDataset:"data.js"})),
          ...(audit.alternatives || []).map(candidate => ({...candidate, sourceDataset:audit.sourceDataset || "etymology-entries.js"}))
        ])
      : [...(entry.alternatives || []), ...(audit.alternatives || [])]
          .filter((alt, index, all) => all.findIndex(candidate => candidate.word === alt.word) === index))
      .map(alt => {
        // Candidate-level merge fills missing comparative fields without losing votes/IDs.
        const base = (entry.alternatives || []).find(candidate =>
          candidate.word === alt.word || candidate.id === alt.id
        ) || {};
        return {
          ...base, ...alt,
          id: base.id || alt.id,
          tamil: alt.tamil || base.tamil || null,
          tulu: alt.tulu || base.tulu || null,
          proto: alt.proto || base.proto || null
        };
      }),
    halegannada: audit.halegannada || entry.halegannada,
    halegannadaEvidence: audit.halegannadaEvidence || entry.halegannadaEvidence,
    rejectedAlternatives: audit.rejectedAlternatives || [],
    editorialNote: audit.editorialNote || ""
  } : entry;
}).concat(allAuditedWordEntries
  .filter(item => !wordEntries.some(entry => entry.id === item.id))
  .map(item => ({...item, sanskrit:item.sourceForm, meaning:item.sourceMeaning, category:categoryForAudited(item), rejectedAlternatives:item.rejectedAlternatives || []})))
  .concat((typeof noAlternativeEntries === "undefined" ? [] : noAlternativeEntries).map(item => ({
    id:"no-alt-" + item.id,
    sanskrit:item.sourceForm,
    meaning:item.meaning,
    category:"No viable native alternative",
    sourceEtymology:item.etymologyParts || [{form:item.sourceForm,etymology:item.etymology}],
    rejectedAlternatives:item.rejected || [],
    editorialNote:item.note,
    noAlternative:true,
    alternatives:[{id:"no-alternative",word:"No viable native alternative",note:"Community position — vote to agree or propose a candidate",isNoAlternative:true,viability:"no_alternative",etymologyParts:[]}]
  })))
  .concat((typeof originAuditEntries === "undefined" ? [] : originAuditEntries).filter(item => !Array.isArray(item) && !(item && item.sourceMeaning && Array.isArray(item.alternatives))).map(item => ({
    id:"scope-" + item.id,
    sanskrit:item.sourceForm,
    meaning:item.meaning,
    category:"Origin audit",
    sourceEtymology:item.etymologyParts || [{form:item.sourceForm,etymology:item.etymology}],
    editorialNote:(item.note || "") + (item.proposedClassification ? " Proposed classification: " + item.proposedClassification + " (unverified)." : ""),
    scopeAudit:true,
    alternatives:[{id:"scope-audit",word:"Outside Sanskrit-origin scope",note:"This item should not be counted as a Sanskrit-derived target until its origin is confirmed.",isScopeAudit:true,viability:"scope_audit",etymologyParts:[]}]
  })));

const etymologyName = code => (typeof etymologyLabels !== "undefined" && etymologyLabels[code]) || code || "Unknown";

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
    viability:"proposed", unreviewed:true
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
  const first = alts[0] || {};
  const rows = [
    ["Native Kannada", first.word || "—"],
    ["Tamil", first.tamil || "—"],
    ["Tulu", first.tulu || "—"],
    ["Halegannada", entry.halegannada || "Not yet sourced"],
    ["Proto-Dravidian root", first.proto || "Not reconstructed / not yet sourced"]
  ];
  return rows.map(([label,value]) => {
    const evidence = label === "Halegannada" ? entry.halegannadaEvidence : null;
    const status = evidence?.status || (label === "Halegannada" && entry.halegannada ? "unverified" : null);
    const statusLabel = status === "provisional" ? "Secondary evidence — primary check needed" : status === "verified" ? "Verified source" : status === "unverified" ? "Unverified — source needed" : "";
    const statusClass = status === "verified" ? "text-emerald-700" : status === "provisional" ? "text-amber-700" : "text-stone-500";
    const source = evidence?.sourceUrl && evidence?.sourceTitle
      ? `<a class="block text-xs underline text-stone-600 mt-1" href="${escapeHtml(evidence.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(evidence.sourceTitle)}</a>`
      : "";
    const note = evidence?.note ? `<span class="block text-xs text-stone-500 mt-1">${escapeHtml(evidence.note)}</span>` : "";
    const meta = status ? `<span class="block text-xs ${statusClass} mt-1">${statusLabel}</span>${source}${note}` : "";
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
function changeWordPage(direction) {
  const cat = categorySelect.value;
  const total = votingEntries.filter(e => cat === "all" || e.category === cat).length;
  const pageCount = Math.max(1, Math.ceil(total / WORDS_PER_PAGE));
  currentWordPage = Math.max(0, Math.min(pageCount - 1, currentWordPage + direction));
  filterAndRender();
  document.getElementById("words-panel").scrollIntoView({behavior:"smooth",block:"start"});
}
window.changeWordPage = changeWordPage;

function render(entries) {
  const totalEntries = entries.length;
  entries = entries.slice(currentWordPage * WORDS_PER_PAGE, (currentWordPage + 1) * WORDS_PER_PAGE);
  updateWordPagination(totalEntries);
  grid.innerHTML = "";
  if (!entries.length) {
    grid.innerHTML = '<p class="col-span-full text-center text-stone-500 py-12">No matching words found.</p>';
    stats.textContent = "0 entries shown"; return;
  }
  entries.forEach(entry => {
    const card = document.createElement("article");
    card.className = "bg-white border border-amber-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow";
    const nativeAlts = [...entry.alternatives, ...getSuggestions(entry.id)];
    const originalOption = !entry.scopeAudit ? [{
      id: "original-" + entry.id,
      word: entry.sanskrit,
      isOriginal: true
    }] : [];
    const alts = [...nativeAlts, ...originalOption];
    const totalVotes = alts.reduce((sum, alt) => sum + getVoteCount(entry.id,alt.id),0);
    const first = alts[0] || {};
    const rows = languageRows(entry, alts);
    const voteHtml = alts.map(alt => {
      const count = getVoteCount(entry.id,alt.id);
      const selected = getSelectedVote(entry.id) === alt.id;
      const viabilityLabel = ({clean:"Clean Dravidian",coined:"Proposed coinage",contested:"Contested",no_alternative:"No viable native alternative"})[alt.viability] || "";
      const label = alt.isOriginal ? "Keep original: " + alt.word : alt.isNoAlternative || alt.viability==="no_alternative" ? "No viable native alternative" : alt.isScopeAudit ? "Outside Sanskrit-origin scope" : alt.unreviewed ? alt.word + " · etymology unknown" : alt.word + (viabilityLabel ? " · " + viabilityLabel : "");
      return `<button onclick="castVote('${entry.id}','${alt.id}')" aria-pressed="${selected}" class="block w-full text-left text-sm border ${selected ? "border-emerald-600 bg-emerald-100 font-semibold" : "border-emerald-200 bg-white"} text-emerald-800 rounded-lg px-3 py-2 hover:bg-emerald-50">${selected ? "✓ " : ""}${escapeHtml(label)} · ${count} vote${count===1?"":"s"}</button>`;
    }).join(" ");
    card.innerHTML = `
      <div class="flex items-start justify-between gap-2 mb-3">
        <span class="text-xs font-bold uppercase tracking-wide text-red-800 bg-yellow-100 px-2 py-1 rounded-full">${escapeHtml(entry.category)}</span>
        ${totalVotes ? `<span class="text-xs text-stone-400">${totalVotes} votes</span>` : ""}
      </div>
      ${entry.noAlternative ? '<div class="mb-3 rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-sm text-orange-900"><strong>No viable native alternative</strong><p class="text-xs mt-1">This is an honest open category, not a failed card. Community proposals can still be added for review.</p></div>' : entry.scopeAudit ? '<div class="mb-3 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-sm text-sky-900"><strong>Origin audit — outside the Sanskrit-derived replacement set</strong><p class="text-xs mt-1">The proposed loanword origin needs independent verification.</p></div>' : ''}
      <div class="mb-3">
        <p class="text-xs font-semibold text-red-700 mb-0.5">Word used in Kannada</p>
        <p class="kn text-2xl font-semibold text-red-900">${escapeHtml(entry.sanskrit)}</p>
        <p class="text-sm text-stone-600 mt-1">${escapeHtml(entry.meaning)}</p>
      </div>
      <section class="rounded-xl bg-yellow-50/70 border border-yellow-200 px-3 py-3">
        <h3 class="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-1">Language equivalents</h3>
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
 const origins=(alt.etymologyParts||[]).map(p=>p.etymology);
 if(alt.viability==="coined"||origins.includes("coinage"))return "coined_from_dravidian";
 if(origins.includes("tadbhava"))return "tadbhava";
 if(origins.includes("dravidian")||origins.includes("native")||alt.viability==="clean")return "verified_dravidian";
 if(alt.proto||/native|dravidian|desi|core/i.test(alt.note||""))return "verified_dravidian";
 return "uncertain";
}
function buildAchchaLexicon(text = ""){
 // Include the complete reviewed vocabulary. The former .slice(0,120) silently
 // discarded later entries, so many Sanskrit-derived words could never match.
 const bySourceForm = new Map();
 const entries = typeof votingEntries === "undefined" ? [] : votingEntries;
 const splitSourceForms = value => String(value || "")
  .split(/\s*(?:\/|,|;|\|| ಅಥವಾ )\s*/u)
  .map(form => form.trim())
  .filter(form => form.length >= 2);

 entries.filter(entry => !entry.noAlternative && !entry.scopeAudit && Array.isArray(entry.alternatives))
  .forEach(entry => {
   const sourceForms = [
    ...splitSourceForms(entry.sanskrit || entry.sourceForm),
    ...splitSourceForms(entry.sourceEtymology && entry.sourceEtymology.form)
   ];
   const candidates = entry.alternatives.filter(alt => alt.word && !alt.isNoAlternative && !alt.isScopeAudit)
    .map(alt => ({
     word:alt.word,origin:achchaAlternativeKind(alt),note:alt.note||"",
     proto:alt.proto||"",tamil:alt.tamil||"",tulu:alt.tulu||""
    }));
   sourceForms.forEach(form => {
    const key = form.normalize("NFC");
    const existing = bySourceForm.get(key) || {sourceForms:[form],meaning:entry.meaning||"",candidates:[]};
    candidates.forEach(candidate => {
     if (!existing.candidates.some(item => item.word === candidate.word)) existing.candidates.push(candidate);
    });
    if (!existing.meaning && entry.meaning) existing.meaning = entry.meaning;
    bySourceForm.set(key, existing);
   });
  });
 const relevantText = String(text || "").normalize("NFC");
 return [...bySourceForm.values()].filter(entry =>
  entry.candidates.length && (!relevantText || entry.sourceForms.some(form => relevantText.includes(form.normalize("NFC"))))
 ).slice(0, 100);
}
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

function escapeHtmlAchcha(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}

function findAchchaWords() {
  const input = document.getElementById("achcha-input");
  const original = (input && input.value || "").trim();
  if (!original) { input && input.focus(); return; }

  const lexicon = buildAchchaLexicon();
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
    let from = 0;
    while (from < original.length) {
      const idx = original.indexOf(form, from);
      if (idx < 0) break;
      const end = idx + form.length;
      const leftBoundary = idx === 0 || !isWordCharacter(original[idx - 1]);
      const rightBoundary = end === original.length || !isWordCharacter(original[end]);
      let overlap = false;
      for (let i = idx; i < end; i++) if (occupied[i]) { overlap = true; break; }
      if (leftBoundary && rightBoundary && !overlap) {
        for (let i = idx; i < end; i++) occupied[i] = true;
        const candidates = (entry.candidates || []).filter(c => c.word);
        if (candidates.length) {
          matches.push({
            source: form,
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
  const status = document.getElementById("achcha-find-status");
  const output = document.getElementById("achcha-output");
  if (output) output.classList.add("hidden");

  if (!matches.length) {
    list.classList.remove("hidden");
    container.innerHTML = '<p class="text-sm text-stone-600">ಈ ಪಠ್ಯದಲ್ಲಿ ಪರಿಶೀಲಿತ ಪದಪಟ್ಟಿಯಲ್ಲಿರುವ ಸಂಸ್ಕೃತ ಮೂಲದ ಪದಗಳು ಸಿಗಲಿಲ್ಲ.</p>';
    status.textContent = "0 words found";
    return;
  }

  status.textContent = matches.length + " word" + (matches.length === 1 ? "" : "s") + " found";
  container.innerHTML = matches.map((m, i) => {
    const opts = m.candidates.map((c, j) => {
      const checked = j === 0 ? "checked" : "";
      const label = escapeHtmlAchcha(c.word);
      const note = c.note ? ' <span class="text-stone-400 text-xs">· ' + escapeHtmlAchcha(c.note.slice(0, 60)) + '</span>' : "";
      return '<label class="inline-flex items-center gap-1.5 mr-3 mb-1 cursor-pointer">'
        + '<input type="radio" name="achcha-sel-' + i + '" value="' + escapeHtmlAchcha(c.word) + '" ' + checked
        + ' onchange="achchaMatchState[' + i + '].selected=this.value" class="accent-red-800">'
        + '<span class="kn text-sm font-medium text-stone-800">' + label + '</span>' + note + '</label>';
    }).join("");
    const keep = '<label class="inline-flex items-center gap-1.5 mr-3 mb-1 cursor-pointer">'
      + '<input type="radio" name="achcha-sel-' + i + '" value="' + escapeHtmlAchcha(m.source) + '"'
      + ' onchange="achchaMatchState[' + i + '].selected=this.value" class="accent-stone-500">'
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

function resetAchchaSelections() {
  achchaMatchState.forEach((m, i) => {
    m.selected = m.candidates[0] ? m.candidates[0].word : m.source;
    const radios = document.querySelectorAll('input[name="achcha-sel-' + i + '"]');
    radios.forEach((r, j) => { r.checked = j === 0; });
  });
  const out = document.getElementById("achcha-output");
  if (out) out.classList.add("hidden");
}

function completeAchchaRewrite() {
  const input = document.getElementById("achcha-input");
  const original = (input && input.value || "").trim();
  if (!original || !achchaMatchState.length) {
    findAchchaWords();
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
  ["achcha-word-list","achcha-output"].forEach(id => {
    const element = document.getElementById(id);
    if (element) element.classList.add("hidden");
  });
  const matches = document.getElementById("achcha-matches");
  if (matches) matches.replaceChildren();
  const notes = document.getElementById("achcha-notes");
  if (notes) notes.replaceChildren();
  const status = document.getElementById("achcha-ai-status");
  if (status) status.textContent = "";
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

function filterAndRender() {
  const cat=categorySelect.value;
  const filtered=votingEntries.filter(e => cat==="all" || e.category===cat);
  render(filtered);
}
window.castVote=castVote; window.toggleImproveForm=toggleImproveForm; window.submitSuggestion=submitSuggestion; window.cancelImproveForm=cancelImproveForm;
categorySelect.addEventListener("change",() => { currentWordPage = 0; filterAndRender(); });
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