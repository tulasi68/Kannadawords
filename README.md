# KannadaWords — ಕನ್ನಡ ದೇಸಿ

KannadaWords is a Kannada vocabulary and writing-support project. It helps writers recognise Sanskrit-derived vocabulary in Kannada and discover suitable native Kannada / Dravidian alternatives, with attention to meaning, context, historical evidence and editorial confidence.

The project has two connected experiences:

1. **KannadaWords vocabulary studio** — explore words, meanings, alternatives and comparative evidence.
2. **KannadaWords Writing Assistant** — a Grammarly-like browser writing assistant that identifies Sanskrit-derived words while a person writes Kannada, underlines them, and offers contextual native-Kannada replacements.

The Writing Assistant is an extension of KannadaWords, not a replacement for the existing website.

## Product vision: Grammarly for Kannada vocabulary

The central interaction is inline vocabulary assistance, not automatic paragraph rewriting.

A writer types normally in a supported web editor. KannadaWords identifies words in the text that are listed as Sanskrit-derived or otherwise marked for editorial review. It places a subtle underline beneath those words. When the writer points to or clicks an underlined word, a small suggestion panel appears with appropriate Kannada alternatives. The writer chooses whether to replace the word.

Example (illustrative):

- Written word: **ಸಮಸ್ಯೆ**
- Possible alternatives: **ತೊಡಕು**, **ಇಕ್ಕಟ್ಟು**
- The writer chooses the alternative that best preserves the intended meaning and tone.

The extension must never replace text automatically. A suggestion is only applied after the writer explicitly chooses it. The original sentence and surrounding text should remain unchanged.

### Intended user experience

1. **Write:** The user types Kannada normally in a supported editor.
2. **Identify:** KannadaWords recognises Sanskrit-derived words and relevant inflected forms.
3. **Underline:** Recognised words receive a subtle, non-disruptive underline, similar to a writing assistant's spelling or grammar marks.
4. **Inspect:** Hovering over or clicking an underline opens a suggestion popover anchored to that word.
5. **Choose:** The popover shows one or more alternatives, with short context notes or confidence labels where useful.
6. **Replace:** Clicking an alternative replaces only that word or inflected form, preserving the rest of the text.
7. **Dismiss:** The user can ignore or dismiss a suggestion without changing the text.

The interface should be keyboard-accessible as well as mouse-accessible. Hover must not be the only way to open suggestions; click and keyboard focus should also work.

### Word recognition and inflection

Matching only the exact dictionary headword is insufficient. The assistant should recognise common Kannada inflections, for example:

- ಸಮಸ್ಯೆ
- ಸಮಸ್ಯೆಯನ್ನು
- ಸಮಸ್ಯೆಗಳು
- ಸಮಸ್ಯೆಯಿಂದ
- ಸಮಸ್ಯೆಗಳಿಗೆ

A replacement must fit the grammatical role and inflection of the original word. The system should not blindly substitute a headword into a sentence. Where a safe inflected equivalent cannot be determined, it should show the base alternative with an uncertainty note or ask the context service for help.

Word boundaries, punctuation, Kannada combining marks, spacing and mixed Kannada/English text must be handled carefully. The assistant should avoid false matches inside unrelated words.

## Relationship with the existing KannadaWords website

The current vocabulary studio and its existing tabs remain in place.

- The existing **Tab 4 — “ಅಚ್ಚ ಕನ್ನಡದಲ್ಲಿ ಮರುಹೇಳಿ” / “Rewrite in Native Kannada”** remains the full-sentence and full-paragraph rewriting experience.
- The browser extension provides inline, word-level suggestions while the user writes in other web editors.
- Both experiences should ultimately use the same vocabulary data, matching rules, editorial status and AI service contract.
- The extension must not become a separate dictionary with a second, inconsistent copy of the word list.

Tab 4 and the extension serve complementary purposes: Tab 4 rewrites a passage; the extension helps the writer make individual vocabulary choices in place.

## Vocabulary, evidence and editorial standards

The vocabulary data is the foundation of the product. Preserve the existing data pipeline and its merged entries. Do not remove, replace, or silently reduce existing vocabulary records when developing the extension.

Where available, entries may include:

- Kannada source word and meaning
- Native Kannada alternatives
- Tamil and Tulu cognates
- Halegannada forms and historical evidence
- Proto-Dravidian reconstructions
- Source references, notes and editorial status
- Context, usage and grammatical information

These fields do not all have the same evidential status. The interface and engine must distinguish:

- **Attested / verified:** supported by reliable evidence and reviewed.
- **Provisional:** plausible, but further source verification is needed.
- **Contributor proposal:** submitted or suggested by a contributor and awaiting editorial review.
- **AI suggestion:** generated for a particular context and not independently verified.

A proposed alternative must not be described as an established historical form merely because it appears in the vocabulary data. A Proto-Dravidian reconstruction is not an attested Kannada word. Tamil or Tulu similarity alone does not prove a Kannada etymology.

When several alternatives are available, rank them for sentence meaning and natural usage, not simply by historical origin. Keep explanatory notes concise and do not overwhelm the writer.

## Technical direction

### Browser extension

The first target is **Chrome using Manifest V3**.

The extension should:

- Work on ordinary HTML text inputs, textareas and supported `contenteditable` editors.
- Detect relevant Kannada words as the user edits, without sending every keystroke to a server.
- Render underlines and suggestion popovers without corrupting the editor's document model, cursor, selection, undo history or formatting.
- Replace only the selected word when the user chooses an alternative.
- Support keyboard navigation, accessible labels and clear dismiss behaviour.
- Avoid running on browser-internal pages or sites where extensions are prohibited.
- Use editor-specific adapters for complex editors where ordinary DOM selection and replacement are not reliable.

Google Docs and other canvas/custom-editor experiences require dedicated compatibility work; support must not be claimed until tested. The extension does not automatically work inside native desktop applications or Android apps.

### Shared Kannada language engine

The long-term design is one shared engine used by both the website and extension:

- **Vocabulary data:** a versioned, read-only data source generated from the existing curated and merged KannadaWords records.
- **Matcher:** finds dictionary terms and inflected forms, respecting Kannada script boundaries.
- **Morphology:** analyses common suffixes and applies compatible inflections to alternatives.
- **Context ranking:** ranks alternatives according to meaning, usage, sentence context and editorial status.
- **Suggestion output:** returns the matched span, alternatives, confidence, evidence status and replacement text.

The engine should be testable independently of the website UI and extension UI. A vocabulary update should become available to both clients without requiring a new extension release for every word-list change.

### AI service

The existing Cloudflare Worker endpoint is:

`https://kannadawords-ai.tulasianand6.workers.dev/api/rewrite`

The existing Tab 4 experience builds a passage-specific lexicon from the live merged vocabulary before calling the Worker. Preserve its current request and response behaviour unless a tested migration is planned.

AI should be used selectively, for example when sentence context or inflection makes a local dictionary suggestion uncertain. It should not be called for every keystroke or every matched word. AI-generated suggestions must remain clearly distinguishable from reviewed dictionary alternatives.

Do not put provider secrets or model credentials in extension code. Keep inference and secrets on the server side.

### Privacy

- Analyse text locally wherever practical.
- Do not upload an entire document or page in the background.
- Send only the smallest necessary text span or sentence, and only after an explicit user action or a clearly explained opt-in contextual request.
- Never transmit text simply because the user is typing.
- Explain when text is sent to the Cloudflare AI service.
- Do not store users' writing unless a separate, explicit feature and consent are introduced.

## Current implementation status

The repository contains an early Chrome extension preview under `extension/`.

Preview 0.1 currently provides a floating **ಅಚ್ಚ ಕನ್ನಡದಲ್ಲಿ ಮರುಬರೆಯಿರಿ** action for selected Kannada text in supported fields. It sends the selected passage to the existing Cloudflare Worker and lets the user review, copy or explicitly replace the selection.

**This preview is not yet the intended Grammarly-like inline assistant.** It does not yet underline individual Sanskrit-derived words or show a word-level suggestion popover. It also currently sends an empty lexicon array, so it does not yet have the same reviewed vocabulary assistance as Tab 4.

The next implementation should focus on the inline word-level experience described above. Do not treat the preview's floating rewrite button as the final product design.

## Development roadmap

### Phase 1 — Product and data contract

- Document the inline suggestion interaction and supported editor behaviour.
- Inspect and preserve the existing vocabulary merge pipeline and current Tab 4 behaviour.
- Define a versioned vocabulary payload and a shared matching/suggestion contract.
- Define editorial status and evidence labels consistently.

### Phase 2 — Local word matching

- Build a browser-side matcher using the shared vocabulary.
- Recognise headwords and common inflected forms.
- Add Kannada word-boundary, punctuation and Unicode test cases.
- Produce underlines only for confident matches; avoid noisy or speculative highlighting.

### Phase 3 — Inline suggestions

- Show a suggestion popover on hover, click and keyboard focus.
- Display contextually ranked native Kannada alternatives.
- Show concise confidence or editorial notes where needed.
- Allow explicit single-word replacement, undo and dismissal.

### Phase 4 — Editor compatibility

- Test textareas, text inputs and common contenteditable editors.
- Add dedicated adapters for complex editors only after verifying their editing model.
- Test cursor position, selection, formatting, undo/redo and composition/IME input.

### Phase 5 — Context-aware assistance

- Use the Cloudflare Worker only when local matching is insufficient.
- Share the same language-engine contract with Tab 4.
- Compare results between Tab 4 and the extension using a Kannada regression corpus.

### Phase 6 — Release and expansion

- Package and publish the Chrome extension after compatibility and privacy testing.
- Consider Edge and Firefox after the Chrome experience is stable.
- Evaluate other writing environments separately; native apps and mobile keyboards require different integration approaches.

## Acceptance criteria for the intended assistant

A release should not be considered complete until:

1. A known Sanskrit-derived word is underlined in a supported editor without changing the user's text.
2. Hover, click and keyboard focus can open its suggestion panel.
3. The panel offers relevant Kannada alternatives from the KannadaWords vocabulary.
4. The user can choose an alternative and only the intended word is replaced.
5. Common inflected forms are recognised and replacements preserve grammatical fit.
6. Contributor proposals, provisional entries and AI suggestions are not presented as verified facts.
7. Typing alone does not transmit document text to the AI service.
8. Cursor, selection, formatting and undo behaviour remain usable after a replacement.
9. Existing Tab 4 rewriting and the vocabulary studio continue to work.
10. Regression tests cover false matches, mixed-script text, punctuation and Unicode edge cases.

## Repository layout

Relevant existing application files remain at the repository root. The extension preview is in:

```text
extension/
  manifest.json
  background.js
  content.js
  styles.css
  popup.html
  README.md
  TESTING.md
```

The Cloudflare Worker source and Wrangler configuration are in `worker/ai-rewrite.js` and `worker/ai-wrangler.toml`.

## Local development

Open `index.html` in a browser or serve the repository root with a local static server:

```bash
npx serve .
```

To load the extension preview in Chrome:

1. Clone this repository and check out the branch containing the extension.
2. Open `chrome://extensions`.
3. Enable **Developer mode**.
4. Select **Load unpacked**.
5. Choose the repository's `extension` directory.

See [extension/README.md](extension/README.md) and [extension/TESTING.md](extension/TESTING.md) for preview-specific instructions.

## Sources and attribution

The project may use open comparative resources and contributor-supplied references, including DravLex (CC BY 4.0) where applicable. Retain required attribution and record source details with the relevant data. Do not reproduce copyrighted dictionary or book content without permission.

## Licence

The application code is free to use and share. Data may have separate source and attribution conditions; check the relevant record and source licence before redistributing it.


## Canonical vocabulary data model (schema v1)

The vocabulary is growing toward 7,000+ entries. The current legacy source files remain editorial inputs. Their compatibility merge and display projection are defined in `lexicon-data.js`; the UI in `app.js` consumes only the resulting `votingEntries` collection. This makes the exact dataset presented to users inspectable in one place, even while the underlying source files are being migrated.

### Identity rules

- A lexical entry keeps its stable entry `id`; this is also the identity used by existing voting records.
- A candidate is identified by its NFC-normalized Kannada `word` plus optional `senseKey`. Identical spellings in genuinely different senses must use different `senseKey` values.
- Candidate IDs are preserved. When duplicate source records describe the same candidate, their comparative fields are merged rather than silently discarded.

### Evidence merge rules

- Missing Tamil, Tulu and Proto-Dravidian fields are filled from another record for the same candidate.
- Conflicting non-empty values are not silently overwritten: the first displayed value is retained and the alternatives are recorded in `evidenceVariants` for editorial resolution.
- Notes, etymology parts and source labels are combined without duplicating identical values.
- A merge must not upgrade confidence. Where source records disagree on viability, the more cautious status wins.
- Entry-level Halegannada forms are retained; conflicting forms are preserved in `halegannadaVariants`.
- Comparative equivalents belong to a candidate, not merely to the source headword. Evidence for one alternative must not be shown beside another.



### Canonical lexicon architecture (v2)

The canonical editable vocabulary lives in `lexicon-source/entries/*.json`. The browser never merges the legacy vocabulary files. A deterministic build produces the versioned runtime data under `lexicon-dist/`.

```text
lexicon-source/
  schema/lexicon.schema.json
  schema/references.schema.json
  config.json
  references.json
  entries/part-NNN.json       (50 records per source shard)
          |
          | validate + deterministic build
          v
lexicon-dist/
  manifest.json
  writing-index.json
  shards/NNNN.json            (50 records per runtime shard)
          |
          v
lexicon-display-adapter.js    (canonical record -> stable UI view model)
          |
          v
lexicon-store.js              (manifest, checksums, lazy page loading)
          |
          v
app.js                        (rendering, filtering, voting and interaction)
```

**Source of truth:** edit `lexicon-source/entries/*.json`, not `lexicon-dist/` and not the old `data.js`, `etymology-entries.js`, `contributor-equivalents.js`, research batches or retired `lexicon-data.js`. The generated files are committed so static hosting can serve them directly; CI checks that they match the source.

The store loads the manifest and compact writing-assistant index at startup, then fetches only the runtime shard(s) needed for the selected 20-word page. It caches fetched shards in memory, deduplicates concurrent requests, checks each shard checksum and build version, and fails visibly rather than displaying a partial page. Category names and counts come from the manifest, so the category filter cannot silently omit newly added categories.

### Editing and validation

Run these commands from the repository root:

```sh
npm run lexicon:validate       # IDs, references, review states and evidence rules
npm run lexicon:schema         # JSON Schema Draft 2020-12 validation
npm test                      # model, migration, adapter and lazy-store tests
npm run lexicon:build          # regenerate lexicon-dist/
npm run lexicon:check          # fail if generated output is stale
```

When adding or changing records:

1. Assign a permanent lowercase entry ID. Never recycle an ID after publication because votes and comments refer to it.
2. Use a `senseKey` when the same spelling has distinct meanings. Do not merge records or candidates solely because their visible forms match.
3. Give every candidate a stable ID within its entry. Preserve that ID when editing its spelling or evidence.
4. Add Tamil (`ta`), Tulu (`tcy`), Old Kannada (`okn`) or Proto-Dravidian evidence as separate records under `comparativeEvidence`.
5. Set the evidence relationship and status explicitly. Imported strings begin as `unclassified` / `not_assessed`; they are not automatically cognates or verified equivalents.
6. Add a source record to `lexicon-source/references.json` and cite its ID in `sourceRefs` before marking evidence verified. A verified candidate or entry without source references fails validation.
7. Run validation, tests and build; commit source and generated output together.

`provenance.sourceDatasets` records where a contribution came from; it is not a scholarly citation. `sourceRefs` points to the reusable reference registry. These concepts must never be conflated.

### Migration and historical material

`migration/legacy-v1-snapshot.json` preserves the former 450-entry display snapshot. `migration/v2-import-snapshot.json` records its deterministic v2 conversion. `scripts/migrate-legacy-v1.mjs` reproduces that initial import; this baseline is immutable and does not constrain future editorial changes to the canonical source.

Legacy source files remain in the repository for traceability but are not loaded by the website. The migration deliberately leaves imported candidates in `needs_review` and their comparative forms in `not_assessed`; it does not make linguistic corrections or certify contributor claims.

The initial migration contains 450 entries and 962 candidates. Runtime shards contain at most 50 entries each. This layout is designed to grow to 7,000–10,000 entries without loading the entire vocabulary into the page. The writing-assistant index is separate and intentionally compact; the full comparative record is loaded only when its vocabulary page is requested.

### Evidence fields (gradual migration)

New or migrated candidate records should use:

- `senseKey`: stable sense identifier where spelling alone is ambiguous.
- `etymologyParts`: analysis of the Kannada candidate.
- `tamil`, `tulu`, `proto`: comparative forms, with explicit source/citation and evidence status to be added during the next migration stage.
- `sources`: source dataset identifiers; contributor provenance is not independent verification.
- `evidenceVariants`: automatically populated when duplicate records disagree.

Legacy fields remain supported so the existing vocabulary, voting IDs and current pages continue to work during migration. Do not bulk-rewrite source files or regenerate IDs while adding vocabulary. New entries should use the canonical schema and be reviewed before being labelled verified.
