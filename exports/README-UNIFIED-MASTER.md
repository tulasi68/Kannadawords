# Unified KannadaWords master workbook

The generated file `exports/kannadawords-master-lexicon.xlsx` consolidates the three maintained collections into **one worksheet named `All Words`**:

1. Original comparative lexicon (canonical entries in `lexicon-source/entries/*.json`).
2. Additional civic, media and education collection (`exports/additional-173.csv`).
3. Master writing corpus (`master-lexicon.json`, originally imported from `2087words.xlsx`).
4. The 779-entry Accha Kannada dump (`779Entries.txt`), retained as individually traceable records within the same master corpus.

The historical 450-entry migration snapshot is already represented in the canonical comparative lexicon and is not imported a second time. The older proposed 1,000-word workbook is not added because the 2,134-entry master corpus superseded it.

## Important data-integrity rules

- Every source record is retained as its own row. No automatic deduplication or merging occurs.
- Exact source-form overlaps are flagged in **Potential Duplicate IDs** for human review. Similar spelling does not prove identical meaning or sense.
- The common columns make the three collections filterable together. The original record is also preserved in the Raw Record JSON columns (split across cells where necessary).
- Dataset lineage and original source file/row are retained, including the 779-entry text dump.
- Records tagged `Public Signboards` are sorted first in the same worksheet; all remaining records follow below them.
- The 779-entry dump contributes 779 source records. Slash-separated Kannada alternatives are retained as separate alternatives for the site's independent voting choices. Empty meaning/category fields are left blank rather than guessed.
- The workbook has one worksheet, not one worksheet per collection.

## Adding words

New source batches should be committed as UTF-8 text or structured source files and explicitly imported into `master-lexicon.json` with stable record IDs and per-record source lineage. Do not use a separate published collection or append blank placeholder rows. The generated workbook remains one worksheet named `All Words`.

## Architecture and regeneration

The workbook is a consolidated editorial workspace/export. The website continues to load its validated runtime artifacts: `master-lexicon.json` for sentence-level lookup and `lexicon-dist/` for the comparative vocabulary UI. Do not edit generated runtime files by hand.

GitHub Actions rebuilds the workbook when any of its source collections change, and can also be run manually from the Actions tab. The script is `scripts/export-master-workbook.py`.

 
## Compact master vocabulary JSON

The generated root-level file `master-vocabulary.json` is the compact consumption export for the browser extension and other clients. It consolidates the canonical comparative lexicon, the master writing corpus (including the retained 779-entry dump), the civic/media/education list, the explicit root-family forms, and any populated textbook vocabulary export.

Each record contains only:
- `word`: the Kannada/source form to recognise.
- `meaning`: an English gloss when available.
- `alternatives`: distinct Kannada alternatives.

It deliberately contains no per-record source lineage, provenance, review status, reviewer, or audit fields. The original source collections remain unchanged and continue to hold that information.

Regenerate and verify it with:

```sh
npm run vocabulary:build
npm run vocabulary:check
```

The build is deterministic. Exact source-form matches are consolidated and duplicate alternatives are removed; different spellings are not merged by fuzzy matching.
