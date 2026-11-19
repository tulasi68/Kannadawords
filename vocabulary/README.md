# Unified vocabulary layer (Option B)

## Decision

The existing vocabulary datasets remain the authoritative editorial sources for now. We will not bulk-export or move all records into a new canonical file simply to make the architecture look tidy.

The website's existing data files and merge rules remain intact. A deterministic build adapter will read those sources in the same order as the live application, apply the same merge rules, and produce one unified, read-optimized vocabulary index.

## Source collections

Current collections include:

- `data.js` — original base word cards.
- `etymology-entries.js` — audited vocabulary and comparative notes.
- `contributor-equivalents.js` — contributor suggestions and candidate alternatives.
- `coinage-review.js` — coinage evaluation and review data.
- `sentence-examples.js` and `contextual-examples.js` — examples and contextual material.
- `app.js` — current merge, deduplication, eligibility and lexicon construction rules.

These collections are not interchangeable. Their provenance, confidence, meaning and review status must be preserved. The builder must reproduce the current merge order and rules rather than guessing from record IDs.

## Unified build output

The build adapter will generate disposable static assets:

- `manifest.json` — version, counts, source fingerprints and shard list.
- `lookup-index.json` — NFC-normalised verified source forms mapped to record IDs.
- `search-index.json` — compact searchable headwords, meanings and alternatives.
- `shards/*.json` — detailed merged records, split deterministically by stable ID hash.

The browser loads the compact lookup index first and fetches detailed records only when needed. Alternatives must never become lookup keys merely because they are replacements. A replacement can be a lookup key only if it independently exists as a reviewed source entry.

## Editing and extension

For now, contributors add or edit words in the appropriate existing source collection. Each source collection retains its own schema and provenance. The build adapter normalises them into a shared internal record shape.

New data formats should not be introduced casually. When a new source collection is needed, document its schema and add it explicitly to the adapter and validation suite.

Over time, an editor-facing contribution format may be introduced. It should feed the same adapter; it does not require rewriting or relocating historical data.

## Recognition and evidence

The unified internal record keeps these concepts separate:

- recognition eligibility: whether the source form may trigger a local suggestion;
- editorial confidence: reviewed, needs review, or legacy/unreviewed;
- alternative confidence: evidence for each proposed replacement;
- etymological evidence: citations and comparative claims.

Only entries approved by the current editorial policy enter the default automatic lookup index. Provisional proposals remain available for editorial search but cannot trigger highlighting.

## Performance and scale

10,000 headwords do not require a database. Keep curated source data in Git, build compact static JSON, serve through the existing static host/CDN, and cache versioned artifacts in the browser. Hash-based shards make detailed retrieval selective and deterministic.

A database is only justified if the project later needs concurrent web editing, accounts, moderation queues or live multi-user updates.

## Migration safety

No source files are deleted or rewritten as part of this architecture phase. The generated index is not a new editorial source of truth. The live website continues using its current runtime pipeline until the generated output is proven equivalent.

Before cutover, tests must compare:
1. merged records and source provenance;
2. unique NFC-normalised source headwords;
3. source forms eligible for highlighting;
4. alternatives, meanings and review statuses;
5. regression examples, including `ಸಮಸ್ಯೆ` being recognised and `ಹೊಸ` not being falsely highlighted.

The JSON Schema in this directory describes the future shared internal record shape, not a requirement to move every legacy record into one file.
