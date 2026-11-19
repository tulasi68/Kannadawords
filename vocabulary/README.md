# Canonical vocabulary store (v1)

## Purpose

This directory defines the future single source of truth for KannadaWords vocabulary. The current website still uses the legacy files and merge pipeline. **Do not remove or bypass those files until the migration has been reconciled and regression-tested.**

## Canonical format

- `entries.jsonl`: one UTF-8 JSON object per unique source headword.
- `schema.json`: record contract.
- Stable `id` values; never reuse an ID.
- `source` is the canonical Sanskrit-derived Kannada headword.
- `sourceForms` contains genuine spelling/orthographic variants of that source word only.
- Replacement words live only under `alternatives`; they are never lookup keys.
- Inflections belong under `morphology`, not as duplicate headwords.
- Evidence and editorial confidence are separate from whether an entry is allowed in automatic highlighting.

## Editorial and recognition states

`recognitionStatus`:
- `verified`: source-word classification is reviewed and safe for local recognition.
- `provisional`: needs linguistic/editorial review; excluded from default highlighting.
- `proposal`: contributor proposal; excluded from default highlighting.
- `rejected`: retained for audit, excluded from all production indexes.

`editorialStatus`:
- `reviewed`, `needs_review`, or `legacy_unreviewed`.

Alternative-level `status` values:
- `verified`, `provisional`, `proposal`.

A verified source does not automatically make every replacement historically attested. Keep alternative evidence attached to the alternative itself.

## Build and validation

Run from repository root:

```sh
node scripts/vocabulary-store.mjs validate
node scripts/vocabulary-store.mjs count
node scripts/vocabulary-store.mjs build
```

The build creates disposable artifacts under `generated/vocabulary/`:
- `manifest.json`: version, counts and shard list.
- `lookup-index.json`: NFC-normalised source forms to entry IDs, for local matching.
- `search-index.json`: compact searchable source, meaning and alternative text.
- `shards/*.json`: detailed records split by stable hash of ID.

Only entries with `recognitionStatus: "verified"` enter the default lookup index. Provisional/proposal records remain searchable in the editorial search index but cannot trigger automatic highlights. No replacement word is ever inserted into the source lookup index.

The build is deterministic: the same canonical input produces the same logical output. Generated artifacts must never be edited by hand.

## Scaling strategy

10,000 records do not require a database or a paid service. Keep the canonical JSONL in Git for review, history and easy bulk editing. Generate compact static JSON indexes at build time and serve them through the existing static host/CDN. The assistant loads the small lookup index first and fetches a detail shard only when a user opens a word. Cache immutable, versioned artifacts in the browser. If future community editing needs concurrent writes, moderation workflows or accounts, introduce a database then; do not add one merely to store 10,000 curated records.

## Safe migration from legacy files

The existing `data.js`, `etymology-entries.js`, `contributor-equivalents.js`, `coinage-review.js` and `app.js` merge logic remain authoritative for the live site until migration is complete.

Migration must:
1. Snapshot and count each legacy source independently.
2. Reproduce the existing merge rules in a migration adapter; do not infer a merge from IDs alone.
3. Preserve every original record and its provenance in a migration archive.
4. Deduplicate source headwords using NFC-normalised Kannada strings, while retaining aliases and provenance.
5. Keep contributor alternatives and historical claims provisional unless independently reviewed.
6. Compare old and new outputs, including alternatives, statuses and the live assistant's lookup set.
7. Switch the website to generated indexes only after all parity tests pass.

Do not claim a unique-headword total until the migration adapter has counted the merged, normalised source headwords. Alternative words, inflections, coinages and evidence records are not additional source headwords.
