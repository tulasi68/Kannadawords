const REWRITE_ENDPOINT = "https://kannadawords-ai.tulasianand6.workers.dev/api/rewrite";
const MAX_TEXT_LENGTH = 4000;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message || message.type !== "KANNADAWORDS_REWRITE") return false;

  const text = typeof message.text === "string" ? message.text.trim() : "";
  if (!text || text.length > MAX_TEXT_LENGTH) {
    sendResponse({ ok: false, error: "Select Kannada text of up to 4,000 characters." });
    return false;
  }
  if (!/[\u0C80-\u0CFF]/.test(text)) {
    sendResponse({ ok: false, error: "The selected text must contain Kannada script." });
    return false;
  }

  fetch(REWRITE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    body: JSON.stringify({ text, lexicon: [] }),
    cache: "no-store"
  })
    .then(async response => {
      let payload = {};
      try { payload = await response.json(); } catch (_) {}
      if (!response.ok) throw new Error(payload.error || "The KannadaWords rewrite service could not complete the request.");
      if (!payload || typeof payload.rewrittenKannada !== "string" || !payload.rewrittenKannada.trim()) {
        throw new Error("The rewrite service returned an incomplete result.");
      }
      sendResponse({ ok: true, result: payload });
    })
    .catch(error => sendResponse({ ok: false, error: error.message || "Could not contact the KannadaWords service." }));

  return true;
});