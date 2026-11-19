# Legacy vocabulary migration plan

## Current live sources (preserve during migration)

The website currently assembles its voting and rewrite data from multiple JavaScript datasets, including:

- `data.js` — original base word cards.
- `etymology-entries.js` — contributor-supplied audited vocabulary and comparative notes.
- `contributor-equivalents.js` — a large proposal set; candidates are not automatically certified.
- `coinage-review.js` — review rubric and coinage evaluation data.
- `app.js` — runtime merge, deduplication, category handling and `buildAchchaLexicon()`.

There may be additional datasets (for example the origin audit data) loaded by the HTML page. The exact script order and all data declarations must be inventoried before migration.

## Non-negotiable compatibility rules

1. Keep every original record and its source provenance.
2. Reproduce the current merge order and conflict-resolution behaviour before changing it.
3. Do not use an ID match as the only proof that two headwords are identical.
4. Deduplicate by NFC-normalised source forms, but preserve aliases and alternate source spellings.
5. Do not merge alternatives from different meanings without a semantic review.
6. Keep proposals and provisional comparisons searchable for editors, but out of the production highlighter by default.
7. Source headwords, replacement candidates, inflections and comparative cognates are different entity types.
8. Preserve Tab 4's current paragraph rewrite request/response contract.

## Migration phases

### A. Inventory and baseline
- Enumerate every script included by `index.html`.
- Record raw record counts for each data source.
- Execute the current merge pipeline in a browser-compatible harness and export the merged records.
- Record unique canonical source headwords, source aliases, alternatives and no-alternative/scope-audit records separately.
- Capture a golden test corpus from current Tab 4 and mobile assistant behaviour.

### B. Lossless export
- Export the merged records into canonical JSONL.
- Attach provenance to every record (legacy file, original ID, original record ID).
- Preserve original raw records in a versioned migration archive.
- Mark uncertain records `legacy_unreviewed` and `provisional`; never infer verification from a contributor note.

### C. Reconciliation
- Compare each canonical entry to its legacy origin.
- Report duplicate IDs, duplicate source forms, ambiguous multi-source cards, missing alternatives and conflicting meanings.
- Resolve collisions explicitly; do not silently discard a record.
- Confirm that the count of unique canonical source headwords is stable and explain every difference.

### D. Generated index validation
- Build the compact lookup index and deterministic detail shards.
- Assert that only `recognitionStatus: verified` source forms enter the default lookup index.
- Assert that alternative words never become lookup keys unless independently represented as a verified source headword in their own right.
- Test Kannada NFC normalization, combining marks, punctuation and mixed-script boundaries.
- Verify shard references and checksums.

### E. Application cutover
- Add a small vocabulary loader used by the website and mobile assistant.
- Keep the old runtime merge available behind a temporary fallback.
- Run old and new lookup engines side by side in tests; compare matches and suggestions.
- Switch the production client only after parity and false-positive tests pass.
- Remove legacy runtime dependencies only in a later, separately reviewed change.

## Porting decision

No database port is required for the 5,000–10,000 word target. Git-backed JSONL is the editorial source of truth; generated static JSON is the read-optimized delivery format. This fits the existing static website and Cloudflare/CDN hosting, avoids a paid database dependency, supports offline/local matching after cache warm-up, and gives clear history and review through Git.

A database should be considered only if the project later needs concurrent web-based editing, contributor accounts, moderation queues, or live multi-user updates. Even then, the canonical export should remain versioned and reproducible.


## Implemented read-only audit tool

Run:

```sh
node scripts/audit-legacy-vocabulary.mjs
node scripts/audit-legacy-vocabulary.mjs --json
```

The audit replays the data scripts loaded by index.html in their current order, then evaluates the data/merge section of app.js in an isolated Node VM. It reports raw per-file record counts, merged voting-record count, unique NFC-normalised source forms, source forms with viable alternatives, no-alternative/scope-audit counts and alternative-candidate count. It does not modify source files or export a canonical store.

The GitHub Actions workflow runs this audit and validates/builds the canonical store on relevant pull requests. Its log is the reproducible baseline for the next migration step. A separate export adapter must still preserve each source record and its provenance before any canonical JSONL population or runtime cutover.
