# Manual smoke-test checklist

- [ ] Load the `extension` folder using Chrome's **Load unpacked**.
- [ ] Select a short Kannada sentence in a normal `textarea`; confirm the floating control appears.
- [ ] Request a rewrite; confirm a result appears without changing the original text.
- [ ] Choose **ನಕಲಿಸಿ**; paste elsewhere and verify the result.
- [ ] Request another rewrite and choose **ಆಯ್ದ ಪಠ್ಯವನ್ನು ಬದಲಿಸಿ**; confirm only the selected range changes.
- [ ] Repeat in a `contenteditable` editor.
- [ ] Select English-only text; confirm the rewrite control does not appear.
- [ ] Select more than 4,000 characters; confirm the control does not appear.
- [ ] Test a page where the Worker is unavailable; confirm an error is shown and the page remains usable.
- [ ] Verify that no request is made merely by typing or selecting text.
- [ ] Compare a paragraph with Tab 4 and note differences. Preview 0.1 is not yet lexicon-parity equivalent because the extension currently sends an empty lexicon.
