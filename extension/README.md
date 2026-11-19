# KannadaWords Writing Assistant (Chrome preview)

This is an additional interface for KannadaWords, not a replacement for the KannadaWords website or its Tab 4 full-passage rewrite experience.

## What this first version does

1. Select Kannada text in a normal web page, `textarea`, text input, or `contenteditable` editor.
2. Choose **ಅಚ್ಚ ಕನ್ನಡದಲ್ಲಿ ಮರುಬರೆಯಿರಿ**.
3. Review the returned Kannada rewrite.
4. Explicitly replace the selected text in supported editable fields, or copy the result.

The extension never rewrites while you type and never replaces text automatically. It sends only the selected text after the user clicks the rewrite control. The Cloudflare Worker currently enforces a 4,000-character limit and its own rate limit.

## Important vocabulary limitation in preview 0.1

The extension currently calls the same Cloudflare Worker used by Tab 4, but sends an empty `lexicon` array. Tab 4 builds a passage-specific lexicon from the live merged KannadaWords vocabulary before calling that Worker. Consequently, this first extension preview can produce a contextual AI rewrite, but it does **not yet have parity with Tab 4's reviewed vocabulary, comparative evidence, or editorial status labels**. The UI explicitly warns about this.

The next integration step is to expose a versioned, read-only vocabulary payload from the KannadaWords application and have both Tab 4 and the extension consume the same language-engine contract. Do not treat contributor proposals or AI-generated alternatives as verified etymology.

## Install locally in Chrome

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Choose **Load unpacked**.
4. Select this `extension` directory from a local clone of the repository.
5. Open a web editor, select Kannada text, and use the floating KannadaWords control.

## Current support and limitations

- Supports standard text inputs, textareas, and many `contenteditable` editors.
- Complex editors such as Google Docs may use custom editing surfaces and need a dedicated adapter; support is not guaranteed.
- It works in browser pages, not native desktop applications or Android apps.
- Browser-internal pages and extension stores do not permit content scripts.
- No document is uploaded automatically. Only the selected passage is sent after an explicit action.

## Service

The background service worker calls the existing endpoint:

`https://kannadawords-ai.tulasianand6.workers.dev/api/rewrite`

No model/provider secret is stored in the extension. The endpoint and model remain controlled by the existing KannadaWords Cloudflare Worker.
