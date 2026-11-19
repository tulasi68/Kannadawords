# KannadaWords mobile assistant — Stage 1 test

This branch adds a mobile-friendly word suggestion panel to the existing Tab 4 editor. It is a website-first step toward the Android keyboard.

## Test on an Android phone

1. Open the KannadaWords website after this branch is deployed.
2. Open **ಅಚ್ಚ ಕನ್ನಡದಲ್ಲಿ ಮರುಹೇಳಿ**.
3. Tap the text area and type or paste: `ನಮ್ಮ ಸಮಸ್ಯೆ ಪರಿಹಾರಕ್ಕೆ ಹೊಸ ಕಾರ್ಯಕ್ರಮ ರೂಪಿಸಬೇಕು.`
4. Place the cursor inside or at the end of `ಸಮಸ್ಯೆ`.
5. If `ಸಮಸ್ಯೆ` is in the live merged vocabulary, a local suggestion panel should appear below the editor.
6. Tap a candidate to replace only `ಸಮಸ್ಯೆ`. The rest of the sentence should remain unchanged.
7. Type `ಹೊಸ` and confirm that it does not produce a suggestion unless it is independently present as a source word in the reviewed vocabulary.

## Scope and limitations

- Matching uses the existing `buildAchchaLexicon()` function and current merged vocabulary; it does not create a second word list.
- Matching is local in the browser. Typing does not call the Cloudflare AI Worker.
- This first website stage matches exact dictionary source forms only. It does not yet generate inflected alternatives, underline text inside a textarea, or provide sentence-context ranking.
- The existing Tab 4 word-list search and AI rewrite buttons remain unchanged.
- The next step is to extract a shared, versioned matcher with inflection support and use it in both the website and Android IME.
