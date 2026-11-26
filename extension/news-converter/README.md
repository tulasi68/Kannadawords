# ಅಚ್ಚ ಕನ್ನಡ News Converter

A standalone Chrome Manifest V3 extension that converts a small, curated set of Sanskrit-heavy Kannada news terms and phrases into native Kannada alternatives.

This is separate from the existing **KannadaWords Writing Assistant** in `extension/`. The Writing Assistant rewrites text only after a user action; this News Converter performs local, automatic substitutions on ordinary web pages.

## Included vocabulary

- Multi-word phrases are matched before individual words.
- Root words are converted using the curated `ROOT_MAP`.
- A limited set of common Kannada suffixes is reattached to the replacement root.
- All conversion runs locally in the browser. No page text is sent to a server.

## Install in Chrome

1. Clone or download this repository.
2. Open `chrome://extensions`.
3. Enable **Developer mode**.
4. Select **Load unpacked**.
5. Choose this `extension/news-converter` folder.

## Important behaviour and limitations

- The extension converts matching text in normal web-page text nodes, including newly inserted news content.
- It skips scripts, styles, code/preformatted blocks, form controls and editable regions to avoid changing code or text a visitor is composing.
- Phrase matching is performed within each individual text node. A phrase split across separate HTML elements may not be recognised.
- The dictionary and suffix rules are deliberately small and explicit. They are not a complete Kannada morphological analyser.
- Some inflections may require linguistic review. The mapping should be expanded only with reviewed examples and regression tests.
- This extension changes displayed page text. Disable it from `chrome://extensions` to see the publisher's original wording.

## Files

- `manifest.json` — standalone extension manifest.
- `converter.js` — phrase dictionary, root dictionary and inflection rules.
- `content.js` — safe text-node traversal and dynamic-page observer.

## Next step

Grow the phrase and root dictionaries from reviewed KannadaWords vocabulary data, then add automated test cases for every root/suffix combination before broadening the rules.
