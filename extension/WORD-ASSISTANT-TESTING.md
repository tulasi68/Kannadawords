# Inline assistant smoke tests

Load the `extension` folder using Chrome's **Load unpacked**.

## Ordinary page text

1. Open a simple page containing: `ಇದು ಒಂದು ಸಮಸ್ಯೆಯನ್ನು ಪರಿಹರಿಸುವ ಪ್ರಯತ್ನ.`
2. Confirm `ಸಮಸ್ಯೆಯನ್ನು` receives a wavy underline.
3. Click the word and confirm the panel offers `ತೊಡಕನ್ನು` and `ಇಕ್ಕಟ್ಟನ್ನು`.
4. Choose one option. Confirm only the word changes and surrounding punctuation/spacing remains unchanged.

## Inflection checks

Test each form in page text and a textarea:

| Input | Expected suggestions |
|---|---|
| ಸಮಸ್ಯೆ | ತೊಡಕು, ಇಕ್ಕಟ್ಟು |
| ಸಮಸ್ಯೆಯನ್ನು | ತೊಡಕನ್ನು, ಇಕ್ಕಟ್ಟನ್ನು |
| ಸಮಸ್ಯೆಗಳು | ತೊಡಕುಗಳು, ಇಕ್ಕಟ್ಟುಗಳು |
| ಸಮಸ್ಯೆಯಿಂದ | ತೊಡಕಿನಿಂದ, ಇಕ್ಕಟ್ಟಿನಿಂದ |
| ಸಮಸ್ಯೆಗಳಿಗೆ | ತೊಡಕುಗಳಿಗೆ, ಇಕ್ಕಟ್ಟುಗಳಿಗೆ |

Unsupported forms should not be underlined or offered as a guessed replacement.

## Editor checks

- Try a plain `contenteditable` editor and a textarea.
- Confirm the word-level lookup works without sending text to a server.
- Confirm a chosen replacement fires an input event for frameworks listening to editor changes.
- Confirm no text changes until an alternative is clicked.
- Confirm the separate passage rewrite control still works as before.

## Known limits

- Textarea/input underline overlays are not available; suggestions are shown when the caret is inside a supported token.
- Complex editors (including Google Docs) need dedicated adapters and are not certified by this smoke test.
- The preview dictionary has one contributor proposal entry and must not be mistaken for the complete shared KannadaWords lexicon.
