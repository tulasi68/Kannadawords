const DEFAULT_DOMAINS = [
  "tv9kannada.com",
  "publictv.in",
  "prajavani.net",
  "vijaykarnataka.com",
  "kannadaprabha.com",
  "udayavani.com",
  "asianetnews.com",
  "oneindia.com",
  "news18.com",
  "zeenews.india.com"
];

const statusDiv = document.getElementById("status");
function showStatus(msg) {
  statusDiv.textContent = msg;
  setTimeout(() => (statusDiv.textContent = ""), 2500);
}

function reloadActiveTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs && tabs[0] && tabs[0].id) chrome.tabs.reload(tabs[0].id);
  });
}

// Tab switching
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// Load settings & initialize
chrome.storage.local.get(
  {
    isEnabled: true,
    showTooltips: true,
    whitelistOnly: false,
    allowedDomains: DEFAULT_DOMAINS,
    masterDictionary: {},
    customWords: {}
  },
  (data) => {
    document.getElementById("toggleActive").checked = data.isEnabled;
    document.getElementById("toggleHighlight").checked = data.showTooltips;
    document.getElementById("toggleWhitelist").checked = data.whitelistOnly;

    renderCustomWords(data.customWords);
    renderDomains(data.allowedDomains);
    updateCountBadge(data.masterDictionary, data.customWords);
  }
);

function updateCountBadge(masterDict, customWords) {
  const masterCount = masterDict ? Object.keys(masterDict).length : 0;
  const customCount = customWords ? Object.keys(customWords).length : 0;
  document.getElementById("dictCountBadge").textContent =
    `ಲೋಡ್ ಆದ ಪದಗಳು: ${masterCount + customCount} (Master: ${masterCount}, Custom: ${customCount})`;
}

// Toggles
document.getElementById("toggleActive").addEventListener("change", (e) => {
  chrome.storage.local.set({ isEnabled: e.target.checked }, reloadActiveTab);
});
document.getElementById("toggleHighlight").addEventListener("change", (e) => {
  chrome.storage.local.set({ showTooltips: e.target.checked }, reloadActiveTab);
});
document.getElementById("toggleWhitelist").addEventListener("change", (e) => {
  chrome.storage.local.set({ whitelistOnly: e.target.checked }, reloadActiveTab);
});

// Add single custom root word
document.getElementById("addWordBtn").addEventListener("click", () => {
  const skt = document.getElementById("sanskritInput").value.trim();
  const nat = document.getElementById("nativeInput").value.trim();
  const alts = document.getElementById("altInput").value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!skt || !nat) return;

  chrome.storage.local.get({ customWords: {}, masterDictionary: {} }, (data) => {
    const updated = {
      ...data.customWords,
      [skt]: { primary: nat, alts: alts, note: "Custom entry" }
    };
    chrome.storage.local.set({ customWords: updated }, () => {
      document.getElementById("sanskritInput").value = "";
      document.getElementById("nativeInput").value = "";
      document.getElementById("altInput").value = "";
      renderCustomWords(updated);
      updateCountBadge(data.masterDictionary, updated);
      showStatus("ಪದ ಉಳಿಸಲಾಗಿದೆ! (Saved)");
      reloadActiveTab();
    });
  });
});

function renderCustomWords(words) {
  const box = document.getElementById("customList");
  box.innerHTML = "";
  for (const [skt, val] of Object.entries(words)) {
    const primary = typeof val === "string" ? val : val.primary;
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `<span>${skt} → <b>${primary}</b></span><span class="del-btn" data-skt="${skt}">✕</span>`;
    box.appendChild(div);
  }
  box.querySelectorAll(".del-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const key = e.target.dataset.skt;
      chrome.storage.local.get({ customWords: {}, masterDictionary: {} }, (data) => {
        delete data.customWords[key];
        chrome.storage.local.set({ customWords: data.customWords }, () => {
          renderCustomWords(data.customWords);
          updateCountBadge(data.masterDictionary, data.customWords);
          reloadActiveTab();
        });
      });
    });
  });
}

// Live Morphology Tester inside popup
document.getElementById("runTestBtn").addEventListener("click", () => {
  const sampleText = document.getElementById("testInput").value.trim();
  if (!sampleText) return;

  chrome.storage.local.get({ masterDictionary: {}, customWords: {} }, (settings) => {
    fetch(chrome.runtime.getURL("accagannada_news_dictionary.json"))
      .then((r) => r.json())
      .then((builtIn) => {
        const testTrie = new AccagannadaTrie();
        testTrie.loadDictionary({
          ...(builtIn.phrases || {}),
          ...(builtIn.roots || {}),
          ...(settings.masterDictionary || {}),
          ...(settings.customWords || {})
        });
        const segs = testTrie.tokenizeAndConvert(sampleText);
        document.getElementById("testOutput").textContent = segs.map((s) => s.text).join("");
      });
  });
});

// 5-Column / CSV / TSV / JSON Bulk Parser
function parseVocabularyFile(rawText, fileName) {
  if (fileName.endsWith(".json")) {
    const parsed = JSON.parse(rawText);
    const normalized = {};
    for (const [k, v] of Object.entries(parsed)) {
      normalized[k.trim()] = typeof v === "string" ? { primary: v.trim(), alts: [], note: "" } : v;
    }
    return normalized;
  }

  const dictionary = {};
  const lines = rawText.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("|---") || trimmed.startsWith("| #")) continue;

    let cols = [];
    if (trimmed.startsWith("|")) {
      cols = trimmed.split("|").map((c) => c.trim()).filter(Boolean);
    } else if (trimmed.includes("\t")) {
      cols = trimmed.split("\t").map((c) => c.trim());
    } else {
      cols = trimmed.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)?.map((c) => c.replace(/^"|"$/g, "").trim()) || [];
    }

    const hasIndexCol = /^\d+$/.test(cols[0]);
    const inputWord = hasIndexCol ? cols[1] : cols[0];
    const primaryNative = hasIndexCol ? cols[2] : cols[1];
    const alternatives = (hasIndexCol ? cols[3] : cols[2]) || "";
    const note = (hasIndexCol ? cols[4] : cols[3]) || "";

    if (!inputWord || !primaryNative || inputWord === "Input Word") continue;

    dictionary[inputWord] = {
      primary: primaryNative,
      alts: alternatives.split(",").map((s) => s.trim()).filter(Boolean),
      note: note
    };
  }
  return dictionary;
}

document.getElementById("importBulkBtn").addEventListener("click", () => {
  const fileInput = document.getElementById("bulkFileInput");
  const file = fileInput.files[0];
  if (!file) {
    showStatus("ಮೊದಲು ಫೈಲ್ ಆಯ್ಕೆ ಮಾಡಿ (Select a file first)");
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsedDict = parseVocabularyFile(e.target.result, file.name.toLowerCase());
      const count = Object.keys(parsedDict).length;
      if (count === 0) {
        showStatus("ಯಾವುದೇ ಪದಗಳು ಸಿಗಲಿಲ್ಲ (No valid rows found)");
        return;
      }
      chrome.storage.local.get({ customWords: {} }, (data) => {
        chrome.storage.local.set({ masterDictionary: parsedDict }, () => {
          updateCountBadge(parsedDict, data.customWords);
          showStatus(`${count} ಪದಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಗಿದೆ!`);
          reloadActiveTab();
        });
      });
    } catch (err) {
      showStatus("ಫೈಲ್ ಓದುವಲ್ಲಿ ದೋಷ (Invalid file format)");
    }
  };
  reader.readAsText(file, "UTF-8");
});

document.getElementById("exportJsonBtn").addEventListener("click", () => {
  chrome.storage.local.get({ masterDictionary: {}, customWords: {} }, (data) => {
    const merged = { ...(data.masterDictionary || {}), ...(data.customWords || {}) };
    const blob = new Blob([JSON.stringify(merged, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "accagannada_12k_dictionary.json";
    a.click();
    URL.revokeObjectURL(url);
  });
});

document.getElementById("clearMasterBtn").addEventListener("click", () => {
  chrome.storage.local.get({ customWords: {} }, (data) => {
    chrome.storage.local.set({ masterDictionary: {} }, () => {
      updateCountBadge({}, data.customWords);
      showStatus("ಬಲ್ಕ್ ಪದಕೋಶ ತೆರವುಗೊಳಿಸಲಾಗಿದೆ (Cleared)");
      reloadActiveTab();
    });
  });
});

// Website Whitelist Management
function renderDomains(domains) {
  const box = document.getElementById("domainList");
  box.innerHTML = "";
  for (const d of domains) {
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = `<span>${d}</span><span class="del-btn" data-domain="${d}">✕</span>`;
    box.appendChild(div);
  }
  box.querySelectorAll(".del-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.target.dataset.domain;
      chrome.storage.local.get({ allowedDomains: DEFAULT_DOMAINS }, (data) => {
        const updated = data.allowedDomains.filter((item) => item !== target);
        chrome.storage.local.set({ allowedDomains: updated }, () => {
          renderDomains(updated);
          reloadActiveTab();
        });
      });
    });
  });
}

document.getElementById("addDomainBtn").addEventListener("click", () => {
  const raw = document.getElementById("domainInput").value.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  if (!raw) return;
  chrome.storage.local.get({ allowedDomains: DEFAULT_DOMAINS }, (data) => {
    const updated = Array.from(new Set([...data.allowedDomains, raw]));
    chrome.storage.local.set({ allowedDomains: updated }, () => {
      document.getElementById("domainInput").value = "";
      renderDomains(updated);
      showStatus("ತಾಣ ಸೇರಿಸಲಾಗಿದೆ!");
      reloadActiveTab();
    });
  });
});
