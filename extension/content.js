(() => {
  if (window.__kannadaWordsAssistantLoaded) return;
  window.__kannadaWordsAssistantLoaded = true;

  const MAX_TEXT_LENGTH = 4000;
  let savedSelection = null;
  let selectionTimer = null;

  const host = document.createElement("div");
  host.id = "kw-assistant-host";
  host.innerHTML = `
    <button id="kw-rewrite-trigger" type="button" aria-label="Rewrite selected text in native Kannada">ಅಚ್ಚ ಕನ್ನಡದಲ್ಲಿ ಮರುಬರೆಯಿರಿ</button>
    <section id="kw-result-panel" role="dialog" aria-label="KannadaWords rewrite" aria-live="polite" hidden>
      <header class="kw-header">
        <strong>KannadaWords · ಬರವಣಿಗೆ ನೆರವು</strong>
        <button id="kw-close" type="button" aria-label="Close">×</button>
      </header>
      <p id="kw-status">ಪಠ್ಯವನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ…</p>
      <div id="kw-result-content" hidden>
        <label for="kw-rewritten">ಮರುಬರೆದ ಪಠ್ಯ</label>
        <textarea id="kw-rewritten" rows="5" spellcheck="true"></textarea>
        <p id="kw-note">AI ಸೂಚನೆ. ಬದಲಿಸುವ ಮೊದಲು ಓದಿ ಪರಿಶೀಲಿಸಿ.</p>
        <div class="kw-actions">
          <button id="kw-replace" type="button">ಆಯ್ದ ಪಠ್ಯವನ್ನು ಬದಲಿಸಿ</button>
          <button id="kw-copy" type="button">ನಕಲಿಸಿ</button>
        </div>
      </div>
    </section>`;
  document.documentElement.appendChild(host);

  const trigger = host.querySelector("#kw-rewrite-trigger");
  const panel = host.querySelector("#kw-result-panel");
  const status = host.querySelector("#kw-status");
  const resultContent = host.querySelector("#kw-result-content");
  const rewritten = host.querySelector("#kw-rewritten");
  const replaceButton = host.querySelector("#kw-replace");

  function isEditable(element) {
    if (!element) return false;
    return element.isContentEditable ||
      element.matches?.("textarea, input:not([type]), input[type='text'], input[type='search']");
  }

  function currentSelection() {
    const active = document.activeElement;
    if (isEditable(active) && typeof active.selectionStart === "number" &&
        typeof active.selectionEnd === "number" && active.selectionEnd > active.selectionStart) {
      const start = active.selectionStart, end = active.selectionEnd;
      return { text: active.value.slice(start, end), kind: "input", element: active, start, end };
    }

    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.toString().trim()) return null;
    const anchor = selection.anchorNode?.parentElement;
    const focus = selection.focusNode?.parentElement;
    const editable = anchor?.closest?.("[contenteditable='true'],[contenteditable=''],[role='textbox']") ||
      focus?.closest?.("[contenteditable='true'],[contenteditable=''],[role='textbox']");
    if (editable) {
      return { text: selection.toString(), kind: "range", range: selection.getRangeAt(0).cloneRange(), editable };
    }
    return { text: selection.toString(), kind: "page" };
  }

  function hideTrigger() {
    trigger.hidden = true;
    savedSelection = null;
  }

  function refreshSelection() {
    const found = currentSelection();
    const text = found?.text?.trim() || "";
    if (!text || text.length > MAX_TEXT_LENGTH || !/[\u0C80-\u0CFF]/.test(text)) {
      hideTrigger();
      return;
    }
    savedSelection = found;
    trigger.hidden = false;
  }

  function showPanel(message) {
    panel.hidden = false;
    resultContent.hidden = true;
    status.hidden = false;
    status.textContent = message;
  }

  function closePanel() {
    panel.hidden = true;
    trigger.hidden = true;
  }

  trigger.addEventListener("mousedown", event => event.preventDefault());

  trigger.addEventListener("click", async () => {
    const selection = savedSelection || currentSelection();
    if (!selection?.text?.trim()) {
      showPanel("ಮೊದಲು ಕನ್ನಡ ಪಠ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ.");
      return;
    }
    const text = selection.text.trim();
    savedSelection = selection;
    trigger.hidden = true;
    showPanel("ಪಠ್ಯದ ಅರ್ಥ ಮತ್ತು ಸಹಜ ಕನ್ನಡ ರೂಪವನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ…");
    try {
      const response = await chrome.runtime.sendMessage({ type: "KANNADAWORDS_REWRITE", text });
      if (!response?.ok) throw new Error(response?.error || "ಮರುಬರಹ ಪೂರ್ಣಗೊಳ್ಳಲಿಲ್ಲ.");
      rewritten.value = response.result.rewrittenKannada;
      const replacements = response.result.replacements || [];
      const reviews = response.result.wordsNeedingReview || [];
      const notes = [];
      if (replacements.length) notes.push(replacements.length + " ಪದ ಆಯ್ಕೆ(ಗಳು)");
      if (reviews.length) notes.push(reviews.length + " ಮರುಪರಿಶೀಲನೆ ಸೂಚನೆ(ಗಳು)");
      host.querySelector("#kw-note").textContent =
        "AI ಸೂಚನೆ" + (notes.length ? " · " + notes.join(" · ") : "") +
        ". ಈ extension ವಿನಂತಿಯಲ್ಲಿ ಸಂಪೂರ್ಣ ಪರಿಶೀಲಿತ ಪದಪಟ್ಟಿಯನ್ನು ಇನ್ನೂ ಜೋಡಿಸಿಲ್ಲ; ಪದಮೂಲ ಅಥವಾ ಪರ್ಯಾಯಗಳನ್ನು ದೃಢಪಟ್ಟ ಸಂಗತಿಯೆಂದು ಪರಿಗಣಿಸಬೇಡಿ.";
      replaceButton.disabled = !["input", "range"].includes(selection.kind);
      replaceButton.textContent = selection.kind === "page" ? "ಈ ಆಯ್ಕೆಯನ್ನು ಇಲ್ಲಿ ಬದಲಿಸಲಾಗುವುದಿಲ್ಲ" : "ಆಯ್ದ ಪಠ್ಯವನ್ನು ಬದಲಿಸಿ";
      resultContent.hidden = false;
      status.hidden = true;
    } catch (error) {
      status.textContent = error.message || "ಮರುಬರಹ ಸೇವೆಯನ್ನು ಸಂಪರ್ಕಿಸಲಾಗಲಿಲ್ಲ.";
    }
  });

  replaceButton.addEventListener("click", () => {
    if (!savedSelection || replaceButton.disabled) return;
    const value = rewritten.value;
    if (savedSelection.kind === "input") {
      const el = savedSelection.element;
      el.focus();
      if (typeof el.setRangeText === "function") {
        el.setRangeText(value, savedSelection.start, savedSelection.end, "end");
      } else {
        el.value = el.value.slice(0, savedSelection.start) + value + el.value.slice(savedSelection.end);
      }
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
    } else if (savedSelection.kind === "range") {
      const range = savedSelection.range;
      if (!savedSelection.editable.isConnected) return;
      range.deleteContents();
      range.insertNode(document.createTextNode(value));
      const selection = window.getSelection();
      selection.removeAllRanges();
      const caret = document.createRange();
      caret.setStartAfter(range.endContainer);
      caret.collapse(true);
      selection.addRange(caret);
      savedSelection.editable.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertText", data: value }));
    }
    closePanel();
  });

  host.querySelector("#kw-copy").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(rewritten.value);
      status.hidden = false;
      status.textContent = "ನಕಲಿಸಲಾಗಿದೆ.";
    } catch (_) {
      rewritten.focus();
      rewritten.select();
      status.hidden = false;
      status.textContent = "ಪಠ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ. Copy ಬಳಸಿ ನಕಲಿಸಿ.";
    }
  });

  host.querySelector("#kw-close").addEventListener("click", closePanel);
  document.addEventListener("selectionchange", () => {
    clearTimeout(selectionTimer);
    selectionTimer = setTimeout(refreshSelection, 180);
  });
  document.addEventListener("mouseup", refreshSelection, true);
  document.addEventListener("keyup", refreshSelection, true);
  document.addEventListener("scroll", () => {
    if (!panel.hidden) return;
    refreshSelection();
  }, true);
})();