# KannadaWords Writing Assistant (Chrome preview)

This is an additional interface for KannadaWords, not a replacement for the website or Tab 4 full-passage rewrite.

## Current preview behaviour

- Select Kannada text and use **ಅಚ್ಚ ಕನ್ನಡದಲ್ಲಿ ಮರುಬರೆಯಿರಿ** for the existing passage-level AI rewrite.
- In ordinary page text and many contenteditable editors, recognised vocabulary entries receive a wavy underline.
- Click a marked word to open a small suggestion panel. Choose an alternative to replace only that word.
- In text inputs and textareas, place the caret inside a supported word and use the suggestion panel; browser text controls cannot display an inline underline overlay.
- The extension does not rewrite while typing and never replaces text automatically.

## Important vocabulary limitation

The inline engine currently contains a **small, explicit preview seed**, not a generated copy of the complete KannadaWords vocabulary. Its initial entry is `ಸಮಸ್ಯೆ`, with `ತೊಡಕು` and `ಇಕ್ಕಟ್ಟು` from the contributor list. The source classification and both candidates are marked as pending review. They are shown as proposals, not verified etymology or authoritative Sanskrit classification.

The four preview forms currently supported are:

| Source form | Suggested form |
|---|---|
| ಸಮಸ್ಯೆಯನ್ನು | ತೊಡಕನ್ನು / ಇಕ್ಕಟ್ಟನ್ನು |
| ಸಮಸ್ಯೆಗಳು | ತೊಡಕುಗಳು / ಇಕ್ಕಟ್ಟುಗಳು |
| ಸಮಸ್ಯೆಯಿಂದ | ತೊಡಕಿನಿಂದ / ಇಕ್ಕಟ್ಟಿನಿಂದ |
| ಸಮಸ್ಯೆಗಳಿಗೆ | ತೊಡಕುಗಳಿಗೆ / ಇಕ್ಕಟ್ಟುಗಳಿಗೆ |

This is intentionally conservative: unsupported inflections are not guessed. The next integration step is a versioned vocabulary export generated from the same merged, editorially labelled records used by Tab 4. Do not expand the local seed by copying unreviewed contributor proposals as verified entries.

## Install locally in Chrome

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Choose **Load unpacked**.
4. Select the repository's `extension` directory.
5. Visit an ordinary web page or a supported web editor.

## Current support and limitations

- CSS text highlighting works in Chromium browsers that support the CSS Custom Highlight API.
- Textareas and text inputs can show suggestions at the caret, but cannot display the inline underline.
- Contenteditable editors are supported on a best-effort basis. Complex editors such as Google Docs may use canvas/custom editing surfaces and need dedicated adapters.
- It works in browser pages, not native desktop applications or Android apps.
- Browser-internal pages and extension stores do not permit content scripts.

## Privacy

The word-level lookup runs locally in the browser. It does not send typed words, selections, or documents to a server. The separate paragraph rewrite feature sends only the selected passage after the user clicks its rewrite button.

## Existing rewrite service

The paragraph-level preview continues to call:

`https://kannadawords-ai.tulasianand6.workers.dev/api/rewrite`

It still sends an empty lexicon array; parity with Tab 4's complete passage-specific lexicon is not implemented.
