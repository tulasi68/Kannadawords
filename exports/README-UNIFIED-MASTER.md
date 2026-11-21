# Unified KannadaWords master workbook

The generated file `exports/kannadawords-master-lexicon.xlsx` consolidates the three maintained collections into **one worksheet named `All Words`**:

1. Original comparative lexicon (canonical entries in `lexicon-source/entries/*.json`).
2. Additional civic, media and education collection (`exports/additional-173.csv`).
3. Master writing corpus (`master-lexicon.json`, originally imported from `2087words.xlsx`).

The historical 450-entry migration snapshot is already represented in the canonical comparative lexicon and is not imported a second time. The older proposed 1,000-word workbook is not added because the 2,134-entry master corpus superseded it.

## Important data-integrity rules

- Every source record is retained as its own row. No automatic deduplication or merging occurs.
- Exact source-form overlaps are flagged in **Potential Duplicate IDs** for human review. Similar spelling does not prove identical meaning or sense.
- The common columns make the three collections filterable together. The original record is also preserved in the Raw Record JSON columns (split across cells where necessary).
- Dataset lineage and original source file/row are retained.
- The workbook has one worksheet, not one worksheet per collection.

## Adding words

Append new records in the pre-created rows marked **New Intake** on the same worksheet. Keep the Collection value as `New Intake` and fill the common columns. Add the government source name, URL or document reference in **Source / Provenance** and the relevant citation/context in **Editorial Notes**.

New Intake rows are carried forward when the workbook is regenerated. They are intake records, not yet published runtime vocabulary. They must be reviewed and promoted into the canonical schema before they appear in the website. This preserves stable entry IDs, candidate IDs, evidence references, review status and the current lazy-shard runtime architecture.

## Architecture and regeneration

The workbook is a consolidated editorial workspace/export. The website continues to load its validated runtime artifacts: `master-lexicon.json` for sentence-level lookup and `lexicon-dist/` for the comparative vocabulary UI. Do not edit generated runtime files by hand.

GitHub Actions rebuilds the workbook when any of its source collections change, and can also be run manually from the Actions tab. The script is `scripts/export-master-workbook.py`.
