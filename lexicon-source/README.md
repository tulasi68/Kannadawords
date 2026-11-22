# Canonical lexicon source

This folder contains the editable source of the KannadaWords vocabulary.

- `entries/part-NNN.json`: ordered groups of 50 canonical entries.
- `schema/lexicon.schema.json`: JSON Schema Draft 2020-12 for entry records.
- `schema/references.schema.json`: schema for the bibliography.
- `references.json`: reusable source registry.
- `config.json`: labels and controlled vocabulary metadata.
- `templates/`: starting shapes for new entries and references.

Do not edit files under `lexicon-dist/` by hand. They are generated.

## Find a record

```sh
npm run lexicon:find -- "ಮದ್ದು"
npm run lexicon:find -- medicine
```

The command reports the entry ID and the source shard to edit.

## Edit and publish

1. Keep existing entry and candidate IDs stable.
2. Use a separate entry/sense when a spelling has a different meaning.
3. Add source records to `references.json`; use their IDs in `sourceRefs`.
4. Never mark evidence verified without a registered source.
5. Keep contributor lineage in `provenance.sourceDatasets`; it is not a citation.
6. Run `npm run lexicon:validate`, `npm run lexicon:schema`, `npm test`, then `npm run lexicon:build`.
7. Commit the source change and generated `lexicon-dist/` output together.

Imported v1 records are intentionally `needs_review`. Their Tamil/Tulu/Proto values are retained as `not_assessed` evidence until editorial review. This is a data-model migration, not a content certification.
