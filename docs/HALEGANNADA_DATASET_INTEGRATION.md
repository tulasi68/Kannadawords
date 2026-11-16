# Halegannada–Hosakannada dataset integration

## Scope

This repository is currently a static HTML/JavaScript application. It has no PostgreSQL connection, API, server runtime, or shared voting store. This change therefore establishes a **database-ready ingestion foundation only**; it does not pretend that the dataset is already visible in the live application.

The public Hugging Face release is marked CC BY 4.0. Its card describes ten configurations and 158,638 rows in total, but those configurations overlap. The lexical lookup configuration, `lexical_pairs_silver`, contains 25,088 rows (train 19,975; validation 2,542; test 2,571). The source material for those lexical rows is identified as the Kaggle Halegannada-to-Hosagannada dictionary, and the card explicitly says the cited upstream license is not visible and requires manual review.

## Integration policy

1. Import only `lexical_pairs_silver` for the vocabulary product. Do not import SFT, preference, evaluation, or CHOCR source-segment rows as dictionary entries.
2. Preserve the original CSV row in `source_payload`; do not discard fields that are not yet mapped.
3. Keep the dataset's release license separate from upstream rights status.
4. All imported rows begin as `pending_rights_review` and `unpublished`. The importer never auto-approves or publishes rows.
5. Do not treat the Hosakannada gloss as a modern synonym that can replace every contextual use of the Halegannada form. Display it as a source-backed gloss, with a visible “silver dataset / review pending” qualifier until reviewed.
6. Preserve dataset id, source ids, split, quality/label fields, source URL, rights evidence, and rights notes when present.
7. Do not ingest the Bharatavani or Archive.org materials in bulk unless their specific reuse rights are established.

## Data model

- `halegannada_import_rows`: immutable-ish staging record for each imported source row, including full raw payload, provenance, split, release license and upstream-rights fields.
- `halegannada_entries`: curated/public vocabulary record. A row must be explicitly approved by a reviewer and have `publication_status = 'published'` before an application query should show it.

The schema is in `database/001_halegannada.sql`.

## Ingestion

The script `scripts/import_halegannada.py` reads one CSV split from the Hugging Face repository and writes to the staging table. It supports explicit column mapping because the lexical CSV's exact header should be verified from the downloaded file rather than inferred from the dataset viewer's other configurations.

Example after downloading the **lexical_pairs_silver** train/validation/test CSV files:

```bash
pip install "psycopg[binary]>=3.1"
export DATABASE_URL='postgresql://...'
python scripts/import_halegannada.py data/lexical_pairs_silver_train.csv \
  --config lexical_pairs_silver --split train \
  --old-column old_word --modern-column modern_word --id-column id --dry-run
```

Replace the column names with the exact CSV headers. Remove `--dry-run` to insert into staging. Run separately for each split. Re-running a file is safe because the staging key is unique on dataset/config/split/row id.

The script intentionally defaults unknown upstream rights to `source_page_cited_license_not_visible_needs_manual_review` and never writes to the curated/public table.

## Before production display

- Inspect the exact CSV header and sample rows from all three splits.
- Check duplicate old forms and multiple senses; do not collapse them without sense-level evidence.
- Review the Kaggle source license and any applicable dataset/source terms.
- Have Kannada readers verify target gloss quality and distinguish historical, regional, literary and currently spoken forms.
- Decide whether the app will remain static or gain a backend. A static JSON export of approved rows is possible later, but it must be generated only from the curated table.
- Add UI search/filtering for “Halegannada” separately from the existing Sanskrit/common-form comparison cards.

## Attribution

Suggested in-app attribution:

> Halegannada–Hosakannada dataset by Kishan Panaganti and Badrinath Gopal. Dataset release layer licensed under CC BY 4.0. Underlying source rights may differ; see the source and rights notes for each entry.

Dataset: https://huggingface.co/datasets/kishanpb/halegannada-hosakannada

The dataset card's preferred attribution wording is: “Halegannada-Hosakannada, created, improved, and analyzed using Adaptive Data by Adaption.” Retain that wording in the About/Credits view alongside the authors and license.
