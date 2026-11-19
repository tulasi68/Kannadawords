(() => {
  "use strict";
  if (window.__kwInlineAssistantLoaded) return;
  window.__kwInlineAssistantLoaded = true;

  const vocabulary = window.KW_WORD_VOCABULARY;
  if (!vocabulary || !Array.isArray(vocabulary.entries)) return;
  const entries = vocabulary.entries.filter(item => item && item.source && Array.isArray(item.alternatives));
  const bySource = new Map(entries.map(item => [item.source.normalize("NFC"), item]));
  const KANNADA = /[\\u0C80-\\u0CFF]/u;
  const TOKEN = /[\\u0C80-\\u0CFF]+/gu;

  // Match only explicitly declared source forms. Never guess an arbitrary suffix.
  function matchSurface(raw) {
    const surface = raw.normalize("NFC");
    for (const [base, entry] of bySource) {
      const forms = Array.isArray(entry.sourceForms) ? entry.sourceForms : [""];
      for (const suffix of forms) {
        if (surface === base + suffix) return { entry, suffix, surface };
      }
    }
    return null;
  }

  const host = document.createElement("div");
  host.id = "kw-inline-host";
  host.innerHTML = `
    <section id="kw-inline-card" role="dialog" aria-label="ಪದದ ಪರ್ಯಾಯಗಳು" hidden>
      <div class="kw-inline-top"><strong id="kw-inline-word"></strong><button id="kw-inline-close" type="button" aria-label="ಮುಚ್ಚಿ">×</button></div>
      <p id="kw-inline-meaning"></p>
      <div id="kw-inline-options"></div>
      <small id="kw-inline-status"></small>
    </section>`;
  document.documentElement.appendChild(host);
  const card = host.querySelector("#kw-inline-card");
  const wordLabel = host.querySelector("#kw-inline-word");
  const meaning = host.querySelector("#kw-inline-meaning");
  const options = host.querySelector("#kw-inline-options");
  const status = host.querySelector("#kw-inline-status");
  let active = null;

  function locateToken(node, offset) {
    if (!node || node.nodeType !== Node.TEXT_NODE || !KANNADA.test(node.textContent || "")) return null;
    const re = /[\\u0C80-\\u0CFF]+/gu;
    let match;
    while ((match = re.exec(node.textContent))) {
      const end = match.index + match[0].length;
      if (offset < match.index || offset > end) continue;
      const found = matchSurface(match[0]);
      if (found) return { kind: "text", node, start: match.index, end, surface: found.surface, entry: found.entry, suffix: found.suffix };
    }
    return null;
  }

  function getCaretContext(event) {
    let range = null;
    if (event && typeof event.clientX === "number" && document.caretRangeFromPoint) {
      range = document.caretRangeFromPoint(event.clientX, event.clientY);
    }
    if (!range) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount) range = selection.getRangeAt(0);
    }
    if (range && range.startContainer.nodeType === Node.TEXT_NODE) {
      const found = locateToken(range.startContainer, range.startOffset);
      if (found) return found;
    }

    const el = document.activeElement;
    if (el && /^(TEXTAREA|INPUT)$/.test(el.tagName) && typeof el.selectionStart === "number") {
      const pos = el.selectionStart;
      const value = el.value;
      const start = value.slice(0, pos).search(/[\\u0C80-\\u0CFF]+$/u);
      const tail = value.slice(pos).match(/^[\\u0C80-\\u0CFF]+/u);
      if (start >= 0 && tail) {
        const found = matchSurface(value.slice(start, pos) + tail[0]);
        if (found) return { kind: "input", element: el, start, end: pos + tail[0].length, surface: found.surface, entry: found.entry, suffix: found.suffix };
      }
    }
    return null;
  }

  function placeCard(event) {
    const x = event && event.clientX ? event.clientX : Math.max(16, innerWidth - 330);
    const y = event && event.clientY ? event.clientY : 100;
    card.style.left = Math.min(Math.max(12, x), innerWidth - Math.min(320, innerWidth - 24)) + "px";
    card.style.top = Math.min(Math.max(12, y + 18), innerHeight - 220) + "px";
  }

  function close() { card.hidden = true; active = null; }
  host.querySelector("#kw-inline-close").addEventListener("click", close);

  function refreshHighlights() {
    if (!window.CSS || !CSS.highlights || typeof Highlight === "undefined" || !document.body) return;
    const ranges = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("#kw-inline-host,#kw-assistant-host,script,style,noscript,textarea,input,select,option,[aria-hidden='true']")) return NodeFilter.FILTER_REJECT;
        return KANNADA.test(node.nodeValue || "") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    let node;
    while ((node = walker.nextNode())) {
      TOKEN.lastIndex = 0;
      let match;
      while ((match = TOKEN.exec(node.nodeValue))) {
        if (!matchSurface(match[0])) continue;
        const range = document.createRange();
        range.setStart(node, match.index);
        range.setEnd(node, match.index + match[0].length);
        ranges.push(range);
      }
    }
    try { CSS.highlights.set("kw-native-word", new Highlight(...ranges)); } catch (_) {}
  }

  function show(found, event) {
    active = found;
    wordLabel.textContent = found.surface;
    meaning.textContent = found.entry.meaning || "";
    options.replaceChildren();
    for (const candidate of found.entry.alternatives) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "kw-inline-choice";
      const replacement = candidate.forms && candidate.forms[found.suffix];
      button.textContent = replacement || candidate.word;
      button.disabled = !replacement;
      button.title = candidate.note || "";
      button.addEventListener("click", () => replaceWord(candidate));
      options.appendChild(button);
      const note = document.createElement("span");
      note.className = "kw-inline-note";
      note.textContent = candidate.note || "";
      options.appendChild(note);
    }
    status.textContent = found.entry.sourceNote || "ಸಲಹೆ — ಬದಲಿಸುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿ.";
    placeCard(event);
    card.hidden = false;
  }

  function replaceWord(candidate) {
    if (!active) return;
    const replacement = candidate.forms && candidate.forms[active.suffix];
    if (!replacement) return;
    if (active.kind === "input") {
      const el = active.element;
      el.focus();
      el.setRangeText(replacement, active.start, active.end, "end");
      el.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertReplacementText", data: replacement }));
    } else if (active.kind === "text" && active.node.isConnected) {
      const range = document.createRange();
      range.setStart(active.node, active.start);
      range.setEnd(active.node, active.end);
      range.deleteContents();
      const inserted = document.createTextNode(replacement);
      range.insertNode(inserted);
      const selection = window.getSelection();
      selection.removeAllRanges();
      const caret = document.createRange();
      caret.setStartAfter(inserted);
      caret.collapse(true);
      selection.addRange(caret);
      active.node.parentElement?.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertReplacementText", data: replacement }));
    }
    close();
    refreshHighlights();
  }

  document.addEventListener("click", event => {
    if (host.contains(event.target)) return;
    const found = getCaretContext(event);
    if (found) show(found, event);
    else close();
  }, true);
  document.addEventListener("keyup", event => {
    if (event.key === "Escape") { close(); return; }
    const found = getCaretContext();
    if (found) show(found);
    else if (!host.contains(event.target)) close();
  }, true);
  document.addEventListener("input", () => {
    window.clearTimeout(window.__kwHighlightTimer);
    window.__kwHighlightTimer = window.setTimeout(refreshHighlights, 180);
  }, true);
  refreshHighlights();
  const observer = new MutationObserver(() => {
    window.clearTimeout(window.__kwMutationTimer);
    window.__kwMutationTimer = window.setTimeout(refreshHighlights, 350);
  });
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });
})();