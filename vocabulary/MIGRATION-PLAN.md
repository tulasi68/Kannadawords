# Unified vocabulary build plan — Option B

## Decision

Keep the current vocabulary source collections in place. Do not export or migrate all entries into one canonical file. Build a deterministic adapter that reads the existing sources and emits one unified search/retrieval layer.

## Current sources to preserve

- `data.js`
- `etymology-entries.js`
- `contributor-equivalents.js`
- `coinage-review.js`
- `sentence-examples.js`
- `contextual-examples.js`
- `app.js` (merge and eligibility rules)

The precise load order in `index.html` and the runtime merge behaviour in `app.js` are part of the compatibility contract.

## Phases

### 1. Reproducible inventory — implemented as a read-only tool

Run:

```sh
node scripts/audit-legacy-vocabulary.mjs
node scripts/audit-legacy-vocabulary.mjs --json
```

The tool replays the data scripts in the current HTML load order and evaluates the data/merge section of `app.js` in an isolated Node VM. It reports raw collection counts and distinct merged source forms. It does not modify the legacy datasets.

The audit is a first inventory step, not yet a fully validated linguistic headword census. The exact count must be reconciled against the runtime `buildAchchaLexicon()` output and the meaning of a unique headword before publication.

### 2. Shared internal record contract

Use `schema.json` as the target shape for normalized build records. Keep legacy records in their current source files. Preserve source file, original ID, record IDs and review provenance in the normalized output.

### 3. Deterministic build adapter

Implement an adapter that:
- loads every current source in the exact live order;
- reuses the actual merge and eligibility logic, rather than maintaining a second hand-written approximation;
- emits normalized records and source fingerprints;
- rejects ID collisions and unresolved source-form collisions;
- keeps replacement words separate from source lookup keys;
- keeps proposals and unreviewed material out of automatic highlighting.

### 4. Compact search and retrieval

Generate a manifest, lookup index, compact search index and deterministic detail shards. Load the lookup index locally; retrieve details only when a user requests a suggestion or opens a word. Cache versioned outputs.

### 5. Parity and cutover

Compare generated output with the existing website's live merged vocabulary and assistant lookup behaviour. Add regression coverage for Unicode normalization, punctuation, inflections, false positives, and the `ಸಮಸ್ಯೆ` / `ಹೊಸ` case.

Do not change the website's runtime data path until parity tests pass. The existing Tab 4 and mobile assistant remain functional throughout this work.

## Storage and hosting

No database port is required for 5,000–10,000 curated entries. Git remains the source-control and review system; existing vocabulary files remain editorial sources; generated static JSON is the read-optimized delivery format. A database can be reconsidered if concurrent editing, accounts or moderation workflows become real requirements.

## Implemented audit tooling

The read-only audit script is `scripts/audit-legacy-vocabulary.mjs`. It is intentionally separate from the future builder: inventory must be measured before generating a new index. The architecture workflow currently runs this audit; it must not publish or substitute an empty generated dictionary.
