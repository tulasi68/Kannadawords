(() => {
  if (window.__acchaKannadaNewsConverterLoaded) return;
  window.__acchaKannadaNewsConverterLoaded = true;

  const KANNADA_RE = /[\u0C80-\u0CFF]/;
  const SKIP_SELECTOR = [
    "script", "style", "noscript", "textarea", "input", "select",
    "option", "code", "pre", "[contenteditable='true']",
    "[contenteditable='']", "[role='textbox']", "#accha-kannada-news-converter"
  ].join(",");

  function shouldSkipTextNode(node) {
    const parent = node.parentElement;
    return !parent || Boolean(parent.closest(SKIP_SELECTOR));
  }

  function walkAndConvert(rootNode) {
    if (!rootNode) return;

    if (rootNode.nodeType === Node.TEXT_NODE) {
      if (!shouldSkipTextNode(rootNode) && KANNADA_RE.test(rootNode.nodeValue)) {
        const converted = convertText(rootNode.nodeValue);
        if (converted !== rootNode.nodeValue) rootNode.nodeValue = converted;
      }
      return;
    }

    if (rootNode.nodeType !== Node.ELEMENT_NODE &&
        rootNode.nodeType !== Node.DOCUMENT_NODE &&
        rootNode.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;

    if (rootNode.nodeType === Node.ELEMENT_NODE && rootNode.matches(SKIP_SELECTOR)) return;

    const walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return shouldSkipTextNode(node) && node.parentElement?.closest(SKIP_SELECTOR)
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    });

    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) textNodes.push(node);

    for (const textNode of textNodes) {
      if (!shouldSkipTextNode(textNode) && KANNADA_RE.test(textNode.nodeValue)) {
        const converted = convertText(textNode.nodeValue);
        if (converted !== textNode.nodeValue) textNode.nodeValue = converted;
      }
    }
  }

  function start() {
    walkAndConvert(document.body);

    // Watch only newly inserted page content. Text-node edits made by the
    // converter do not create childList records, preventing observer loops.
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const addedNode of mutation.addedNodes) {
          if (addedNode.nodeType === Node.ELEMENT_NODE ||
              addedNode.nodeType === Node.TEXT_NODE) {
            walkAndConvert(addedNode);
          }
        }
      }
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.body) start();
  else document.addEventListener("DOMContentLoaded", start, { once: true });
})();
