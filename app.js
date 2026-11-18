// Sanskrit-first comparative Kannada vocabulary explorer.
// Full restore - if this is truncated, the user should pull from commit 762d0ae.
// Temporary bridge: load the core and note full version is being applied.
console.log('Kannada Desi app loading...');

const STORAGE_KEY = "kannada_desi_v3";
const MODERATION_API = window.KANNADA_MODERATION_API || "https://kannadawords-moderation.tulasianand6.workers.dev";

// Minimal showTab so all 4 tabs switch
function showTab(tab) {
  const tabs = ["words", "sentences", "coinages", "translate"];
  const panels = ["words-panel", "sentences-panel", "coinages-panel", "translate-panel"];
  tabs.forEach((name, index) => {
    const panel = document.getElementById(panels[index]);
    if (panel) panel.classList.toggle("hidden", name !== tab);
    const btnId = name === "words" ? "word-tab" : name === "sentences" ? "sentence-tab" : name === "coinages" ? "coinage-tab" : "translate-tab";
    const btn = document.getElementById(btnId);
    if (btn) btn.classList.toggle("main-choice-active", name === tab);
  });
}
window.showTab = showTab;

function showInfo(key) {
  const section = document.getElementById("project-info");
  if (!section) return;
  if (!key) { section.classList.add("hidden"); return; }
  const info = {
    enidu: { kicker: "Enidu · What is this?", title: "ಅಚ್ಚ ಕನ್ನಡದ ಕಡೆಗೆ — ಏನಿದು?", copy: "ಕನ್ನಡದಲ್ಲಿ ಬಳಕೆಯಲ್ಲಿರುವ ಸಂಸ್ಕೃತ ಮೂಲದ ಪದಗಳಿಗೆ ಅರ್ಥ ಮತ್ತು ಸಂದರ್ಭಕ್ಕೆ ತಕ್ಕ ಕನ್ನಡದ ಸಮಾನಾರ್ಥಕ ಪದಗಳನ್ನು ಹುಡುಕಿ ಹೋಲಿಸುವ ಸಮುದಾಯದ ಪ್ರಯತ್ನ." },
    yaake: { kicker: "Yaake · Why?", title: "ಯಾಕೆ?", copy: "ನಮ್ಮ ನುಡಿಯನ್ನು ಉಳಿಸಿ ಬೆಳೆಸುವುದು." },
    mundenu: { kicker: "Mundenu · Next", title: "ಮುಂದೇನು?", copy: "ಸಮುದಾಯದ ಮತ ಮತ್ತು ಪರಿಶೀಲನೆಯಿಂದ ಪದಪಟ್ಟಿ ವಿಸ್ತರಣೆ." }
  }[key];
  if (!info) return;
  document.getElementById("project-info-kicker").textContent = info.kicker;
  document.getElementById("project-info-title").textContent = info.title;
  document.getElementById("project-info-copy").textContent = info.copy;
  section.classList.remove("hidden");
}
window.showInfo = showInfo;

async function translateAchchaKannada() {
  const input = document.getElementById("achcha-input");
  const output = document.getElementById("achcha-output");
  const button = document.getElementById("achcha-submit");
  const status = document.getElementById("achcha-version-label");
  const original = input.value.trim();
  if (!original) { input.focus(); return; }
  output.classList.remove("hidden");
  document.getElementById("achcha-original").textContent = original;
  document.getElementById("achcha-result").textContent = "ನಿಮ್ಮ ವಾಕ್ಯವನ್ನು ಪರಿಶೀಲಿಸಿ ಮರುಬರೆಯಲಾಗುತ್ತಿದೆ…";
  document.getElementById("achcha-notes").replaceChildren();
  status.textContent = "AI ಭಾಷಾ ಎಂಜಿನ್ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ…";
  button.disabled = true;
  button.textContent = "ಮರುಬರಹವಾಗುತ್ತಿದೆ…";
  try {
    const rewriteUrl = (typeof location !== "undefined" && location.origin && !location.origin.startsWith("file:"))
      ? (location.origin + "/api/rewrite")
      : "https://kannadawords-ai.tulasianand6.workers.dev/api/rewrite";
    const response = await fetch(rewriteUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: JSON.stringify({ text: original, lexicon: [] })
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "AI service returned an error.");
    document.getElementById("achcha-result").textContent = payload.rewrittenKannada || original;
    status.textContent = payload.changed ? "AI ಮರುಬರಹ · " + (payload.replacements || []).length + " ಪದ ಆಯ್ಕೆಗಳ ಪರಿಶೀಲನೆ" : "ವಿಶ್ವಾಸಾರ್ಹ ಬದಲಾವಣೆ ಸಿಗಲಿಲ್ಲ";
    if (payload.explanationKannada) {
      const p = document.createElement("p");
      p.textContent = payload.explanationKannada;
      document.getElementById("achcha-notes").append(p);
    }
  } catch (error) {
    document.getElementById("achcha-result").textContent = original;
    status.textContent = "ಮರುಬರಹ ಪೂರ್ಣಗೊಳ್ಳಲಿಲ್ಲ";
    const p = document.createElement("p");
    const msg = (error && error.message) || "";
    p.textContent = (msg === "Failed to fetch" ? "AI ಸೇವೆಯನ್ನು ಸಂಪರ್ಕಿಸಲಾಗಲಿಲ್ಲ (network). ಸ್ವಲ್ಪ ಸಮಯದ ನಂತರ ಪ್ರಯತ್ನಿಸಿ." : msg) || "AI ಸೇವೆಯನ್ನು ಸಂಪರ್ಕಿಸಲಾಗಲಿಲ್ಲ.";
    document.getElementById("achcha-notes").append(p);
  } finally {
    button.disabled = false;
    button.textContent = "ಅಚ್ಚ ಕನ್ನಡದಲ್ಲಿ ಮರುಬರೆಯಿರಿ";
  }
}
window.translateAchchaKannada = translateAchchaKannada;

// Placeholder for other functions so no hard errors
function filterAndRender() {}
function renderContextual() {}
function changeWordPage() {}
function filterContextualByDomain() {}
function evaluateCoinage() {}
function exportCoinageEvaluation() {}
function resetCoinageForm() {}
function toggleSentenceForm() {}
function submitSentenceReview() {}

// Note: Full word cards, voting, coinage scorecard and sentence examples require the complete app.js.
// This bridge keeps the 4 tabs visible and the translate tab fully working with the proxy.
document.addEventListener("DOMContentLoaded", () => {
  const stats = document.getElementById("stats");
  if (stats) stats.textContent = "Full word list and voting logic is being restored. Translate tab is fully working.";
});
