/* KannadaWords mobile-first inline assistant for the existing Tab 4 editor.
   Local-only matching: no text is sent to a server while typing. */
(() => {
  "use strict";
  const input = document.getElementById("achcha-input");
  if (!input || typeof window.buildAchchaLexicon !== "function") return;

  const panel = document.createElement("section");
  panel.id = "kw-mobile-suggestions";
  panel.className = "mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3";
  panel.hidden = true;
  panel.setAttribute("aria-live", "polite");
  panel.innerHTML = '<div class="flex items-center justify-between gap-2"><strong class="text-sm text-stone-800">ಪದ ಸೂಚನೆಗಳು · Word suggestions</strong><span class="text-xs text-stone-500" id="kw-mobile-count"></span></div><div id="kw-mobile-content" class="mt-2 space-y-2"></div><p class="mt-2 text-xs text-stone-500">ಸೂಚನೆಗಳು ನಿಮ್ಮ ಸಾಧನದಲ್ಲೇ ಹೊಂದಿಸಲಾಗುತ್ತವೆ. ಆಯ್ಕೆ ಮಾಡಿದಾಗ ಮಾತ್ರ ಪದ ಬದಲಾಗುತ್ತದೆ.</p>';
  input.insertAdjacentElement("afterend", panel);

  const count = panel.querySelector("#kw-mobile-count");
  const content = panel.querySelector("#kw-mobile-content");
  const KANNADA_WORD = /^[\u0C80-\u0CFF]+$/u;

  function currentWord() {
    const text = input.value;
    const caret = input.selectionStart ?? text.length;
    let pivot = caret;
    // When the caret follows a space or punctuation, inspect the preceding word.
    if (pivot > 0 && !/[\u0C80-\u0CFF]/u.test(text[pivot - 1])) {
      let previous = pivot - 1;
      while (previous >= 0 && /[\s.,!?;:()[\]{}"']/u.test(text[previous])) previous--;
      if (previous >= 0 && /[\u0C80-\u0CFF]/u.test(text[previous])) pivot = previous + 1;
    }
    let start = pivot, end = pivot;
    while (start > 0 && /[\u0C80-\u0CFF]/u.test(text[start - 1])) start--;
    while (end < text.length && /[\u0C80-\u0CFF]/u.test(text[end])) end++;
    const word = text.slice(start, end).normalize("NFC");
    return word && KANNADA_WORD.test(word) ? { word, start, end } : null;
  }

  function hide() {
    panel.hidden = true;
    content.replaceChildren();
  }

  function showMatches() {
    const current = currentWord();
    if (!current || current.word.length < 2) return hide();

    let matches = [];
    try {
      const lexicon = window.buildAchchaLexicon(current.word);
      matches = lexicon.filter(entry =>
        (entry.sourceForms || []).some(form => String(form).normalize("NFC") === current.word)
      );
    } catch (error) {
      console.warn("KannadaWords local matcher:", error);
      return hide();
    }
    const entry = matches[0];
    const candidates = (entry?.candidates || []).filter(candidate => candidate.word && candidate.word !== current.word);
    if (!candidates.length) return hide();

    count.textContent = "1 ಪದ ಕಂಡುಬಂದಿದೆ";
    content.replaceChildren();
    const source = document.createElement("div");
    source.className = "kn text-base font-semibold text-red-900";
    source.textContent = current.word;
    content.append(source);

    candidates.slice(0, 6).forEach(candidate => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "w-full rounded-lg border border-amber-300 bg-white px-3 py-2 text-left active:bg-amber-100";
      const word = document.createElement("span");
      word.className = "kn block text-base font-semibold text-stone-900";
      word.textContent = candidate.word;
      button.append(word);
      if (candidate.note) {
        const note = document.createElement("span");
        note.className = "block text-xs text-stone-500 mt-1";
        note.textContent = candidate.note;
        button.append(note);
      }
      button.addEventListener("mousedown", event => event.preventDefault());
      button.addEventListener("click", () => {
        input.focus();
        if (typeof input.setRangeText === "function") {
          input.setRangeText(candidate.word, current.start, current.end, "end");
        } else {
          input.value = input.value.slice(0, current.start) + candidate.word + input.value.slice(current.end);
          input.setSelectionRange(current.start + candidate.word.length, current.start + candidate.word.length);
        }
        input.dispatchEvent(new Event("input", { bubbles: true }));
      });
      content.append(button);
    });
    panel.hidden = false;
  }

  input.addEventListener("input", showMatches);
  input.addEventListener("click", showMatches);
  input.addEventListener("keyup", showMatches);
  input.addEventListener("select", showMatches);
  input.addEventListener("compositionend", showMatches);
  input.addEventListener("blur", () => {
    // Delay dismissal so a suggestion tap can be processed on touch devices.
    window.setTimeout(() => {
      if (!panel.contains(document.activeElement)) hide();
    }, 180);
  });
  panel.addEventListener("mousedown", event => event.preventDefault());
  panel.addEventListener("touchstart", () => {}, { passive: true });
})();
