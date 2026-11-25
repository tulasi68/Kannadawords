# KannadaWords canonical lexicon data model

Schema version: **2**

This document describes the authoritative editorial source, the generated browser representation, and the guarantees required before vocabulary content is published.

## 1. Data ownership

| Layer | Location | Purpose | Editable by contributors? |
|---|---|---|---|
| Canonical editorial records | `lexicon-source/entries/*.json` | Authoritative vocabulary, evidence and review state | Yes |
| Schema and registries | `lexicon-source/schema/`, `config.json`, `references.json` | Structure, allowed values and bibliographic sources | Maintainers |
| Generated runtime | `lexicon-dist/` | Manifest, writing index and paged data shards | No; generated |
| Browser adapter | `lexicon-display-adapter.js` | Maps canonical records to the UI's stable view model | Maintainers |
| Browser data store | `lexicon-store.js` | Loads only the page shards required by the UI | Maintainers |
| UI | `app.js` | Rendering, voting, filters and interactions | Maintainers |

Legacy source files are retained for traceability. They are not loaded by the browser and are not authoritative.

## 2. Entry model

An entry identifies a source word in a particular sense and context.

| Field | Meaning |
|---|---|
| `id` | Permanent lowercase slug. Used by votes, comments and cross-references. Never recycle it. |
| `senseKey` | Optional stable key when the same spelling has more than one sense. |
| `sourceForm` | The source form being examined in Kannada usage. |
| `sourceMeaning` | English gloss or concise sense description. |
| `category` | Display and discovery category. |
| `sourceEtymology` | Existing source-word etymological analysis, retained as structured legacy-compatible data. |
| `candidates[]` | Proposed, attested or reviewed Kannada alternatives. |
| `historicalEvidence` | Separate Old Kannada form and its evidence state. |
| `scope` | Whether the record is an origin audit or an honest no-alternative entry. |
| `rejectedCandidates[]` | Preserved rejected or non-native proposals with their reasons. |
| `editorial` | Review state, note, reviewer and review time. |
| `provenance` | Dataset lineage and bibliographic source IDs. |
| `legacyFields` | Preserves fields not yet formally migrated into the model. |

An entry ID identifies the editorial record, not the spelling. Two homographs with different meanings may have separate IDs and sense keys. Do not merge records based only on matching text.

## 3. Candidate model

A candidate belongs to one entry and has its own stable ID. Candidate IDs are unique within their parent entry; the same generic ID may occur under different entries if the historical vote model scoped it that way.

| Field | Meaning |
|---|---|
| `id` | Stable candidate ID. Preserve it when correcting the form. |
| `form` | Kannada candidate form. |
| `senseKey` | Optional candidate sense identifier. |
| `candidateKind` | `unclassified`, `attested`, `native`, `semantic_equivalent`, `loan`, `coinage` or `reconstruction`. |
| `reviewStatus` | Editorial lifecycle: `needs_review`, `in_review`, `verified`, `contested`, `rejected` or `proposed`. |
| `note` | Candidate explanation and semantic caveats. |
| `etymologyParts[]` | Existing morpheme/origin analysis. |
| `viability` | Retained legacy display field; not a substitute for review status. |
| `comparativeEvidence[]` | Independent language evidence records. |
| `evidenceVariants` | Conflicting imported values retained for editorial resolution. |
| `provenance` | Dataset lineage and bibliography references. |
| `editorial` | Candidate-specific note, reviewer and review time. The status lives only in `reviewStatus`. |
| `flags` | No-alternative and out-of-scope markers. |
| `legacyFields` | Unmapped historical candidate fields. |

## 4. Comparative evidence

Comparative evidence is attached to the candidate it supports—not merely to the parent headword.

Each evidence record contains:

- `language`: `ta` (Tamil), `tcy` (Tulu), `okn` (Old Kannada), or `proto-dravidian`.
- `form`: original spelling/transliteration/reconstruction, preserved without editorial normalization.
- `relationship`: `cognate`, `semantic_equivalent`, `loan`, `reconstruction`, `attested_form`, `proposed_coinage`, or `unclassified`.
- `status`: `not_assessed`, `provisional`, `verified`, `contested`, or `rejected`.
- `sourceRefs[]`: IDs in `lexicon-source/references.json`.
- `note`: optional explanation of semantic fit, sound correspondence, chronology or uncertainty.

A semantic equivalent is not automatically a cognate. A Tamil or Tulu string is not automatically proof of a Proto-Dravidian reconstruction. A reconstructed form must be marked as reconstruction and supported by appropriate comparative sources. A contributor dataset name is provenance, not a citation.

**Validation rule:** evidence marked `verified` must contain at least one valid `sourceRefs` ID. A candidate or entry marked verified must also be traceable to registered references. This is a structural safeguard; human editorial review is still required to judge whether the source actually supports the claim.

Imported comparative strings have been migrated as `unclassified` / `not_assessed`. This preserves the content without upgrading its certainty.

## 5. Source registry

`lexicon-source/references.json` is the reusable bibliography. Each source has a stable ID, type and title, with optional author, year, publisher, URL, page/entry locator, access date and note.

Use a source ID in `sourceRefs`; do not paste an untraceable source title into a status field. Source records should be reusable across entries and candidates.

## 6. Identity, merging and history rules

1. Entry IDs are globally unique.
2. Candidate IDs are unique within their parent entry.
3. IDs are permanent once published; never regenerate them during a migration.
4. A matching form does not prove that two records share a sense.
5. Duplicate evidence is retained as separate evidence or as an explicit conflict. Never silently overwrite a conflicting value.
6. Candidate-specific evidence must not be copied to another candidate.
7. Voting and comment identifiers must remain stable.
8. Unknown legacy fields remain in `legacyFields` until explicitly migrated.
9. Data migration is not a linguistic review. Do not change meanings, spellings, etymologies or viability labels as a side effect of structural work.

## 7. Authoritative vocabulary CSV and generated runtime

`MergedMasterCopy_10000.csv` is the single authoritative source for the website vocabulary browser and Tab 4 contextual rewrite suggestions. Its 12-column header and JSON-array suggestion columns are validated at load/build time. The website reads this CSV directly; the browser extension build reads the same CSV and emits local vocabulary shards so conversion remains offline. The two consumers must not merge legacy datasets into the active vocabulary. Existing canonical shards, spreadsheets, `newwords.txt`, landing lists and root-family files are retained as historical/reference material until their remaining non-vocabulary dependencies are reviewed. They are not additional sources for the active master vocabulary.

The CSV's dataset-origin, resolution-status and all-sources columns remain preserved in the source file; they are not copied wholesale into runtime payloads. No etymology, review status or linguistic certainty is inferred during this structural migration.

## 8. Source shards and generated runtime

Canonical source files are split into ordered groups of at most 50 entries:

`lexicon-source/entries/part-001.json`, `part-002.json`, etc.

The build produces:

- `lexicon-dist/manifest.json`: entry order, category-to-ID lists, shard map, counts, build ID and per-shard checksum.
- `lexicon-dist/shards/*.json`: canonical records in small page-loadable chunks.
- `lexicon-dist/writing-index.json`: compact source-form-to-candidate index for the local writing assistant.

The browser loads the manifest and writing index first. It loads full comparative records only for the selected page. The store verifies build ID, record count, entry-to-shard placement and deterministic checksum before returning a page. Failed or incomplete loads produce an error with retry; the UI must not silently render a partial result.

The current shard size is 50. This is a tuning parameter, not part of record identity. At 7,000 entries the same model yields approximately 140 shards.

## 9. Build, validate and test

```sh
npm run lexicon:validate
npm run lexicon:schema
npm test
npm run lexicon:build
npm run lexicon:check
```

- `lexicon:validate` checks stable IDs, references, review states and evidence constraints.
- `lexicon:schema` validates source shards and the reference registry against JSON Schema Draft 2020-12.
- `test` checks model behavior, migration preservation, adapter parity, lazy paging and writing-index behavior.
- `lexicon:build` regenerates static runtime output.
- `lexicon:check` fails if generated output is missing, stale or contains unexpected files.

CI runs these checks on changes to source records, schemas, generated output, scripts, UI loader and tests. Source changes and generated output must be committed together.

## 10. Migration baseline

`migration/legacy-v1-snapshot.json` is the former user-visible 450-entry snapshot. `migration/v2-import-snapshot.json` is its deterministic canonical-v2 conversion. The adapter parity test verifies that user-visible words, meanings, categories, candidates, language forms, notes, flags and evidence variants survive the conversion.

These snapshots are migration evidence, not editable vocabulary sources. Future content corrections belong in `lexicon-source/entries/`; they do not rewrite the frozen migration baseline.
