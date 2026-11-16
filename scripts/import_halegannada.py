#!/usr/bin/env python3
"""Import one Hugging Face lexical_pairs_silver CSV split into PostgreSQL staging.

This script does not publish entries. Every imported row remains pending human
rights and content review. Column names are explicit CLI arguments so the
script cannot silently guess the dataset's actual CSV schema.
"""
from __future__ import annotations

import argparse
import csv
import json
import os
import sys
from pathlib import Path

DEFAULT_DATASET = "kishanpb/halegannada-hosakannada"
DEFAULT_UPSTREAM_STATUS = (
    "source_page_cited_license_not_visible_needs_manual_review"
)

INSERT_SQL = """
INSERT INTO halegannada_import_rows (
  dataset_name, dataset_config, dataset_split, source_row_id,
  old_form, modern_gloss, source_ids, quality_tier, label_status,
  release_license, upstream_rights_status, license_evidence_url,
  rights_review_notes, source_url, source_payload
) VALUES (
  %(dataset_name)s, %(dataset_config)s, %(dataset_split)s, %(source_row_id)s,
  %(old_form)s, %(modern_gloss)s, %(source_ids)s, %(quality_tier)s,
  %(label_status)s, %(release_license)s, %(upstream_rights_status)s,
  %(license_evidence_url)s, %(rights_review_notes)s, %(source_url)s,
  %(source_payload)s::jsonb
)
ON CONFLICT (dataset_name, dataset_config, dataset_split, source_row_id)
DO NOTHING
"""


def get_value(row: dict[str, str], column: str | None) -> str | None:
    if not column:
        return None
    value = row.get(column)
    return value.strip() if value is not None and value.strip() else None


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("csv_file", type=Path)
    parser.add_argument("--config", default="lexical_pairs_silver")
    parser.add_argument("--split", choices=["train", "validation", "test"], required=True)
    parser.add_argument("--dataset", default=DEFAULT_DATASET)
    parser.add_argument("--old-column", required=True, help="CSV column containing Halegannada form")
    parser.add_argument("--modern-column", required=True, help="CSV column containing Hosakannada gloss")
    parser.add_argument("--id-column", required=True, help="Stable row id column")
    parser.add_argument("--source-ids-column", default="source_ids")
    parser.add_argument("--quality-column", default="quality_tier")
    parser.add_argument("--label-column", default="label_status")
    parser.add_argument("--license-column", default="release_license")
    parser.add_argument("--rights-status-column", default="upstream_rights_status")
    parser.add_argument("--license-url-column", default="license_evidence_url")
    parser.add_argument("--rights-notes-column", default="rights_review_notes")
    parser.add_argument("--source-url-column", default="source_url")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    if not args.csv_file.is_file():
        parser.error(f"CSV file does not exist: {args.csv_file}")

    with args.csv_file.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        headers = reader.fieldnames or []
        required = [args.old_column, args.modern_column, args.id_column]
        missing = [name for name in required if name not in headers]
        if missing:
            parser.error(
                f"Missing required CSV columns: {missing}. Actual headers: {headers}"
            )

        records = []
        skipped = 0
        for line_no, row in enumerate(reader, start=2):
            old_form = get_value(row, args.old_column)
            modern_gloss = get_value(row, args.modern_column)
            source_row_id = get_value(row, args.id_column)
            if not old_form or not modern_gloss or not source_row_id:
                skipped += 1
                continue

            records.append({
                "dataset_name": args.dataset,
                "dataset_config": args.config,
                "dataset_split": args.split,
                "source_row_id": source_row_id,
                "old_form": old_form,
                "modern_gloss": modern_gloss,
                "source_ids": get_value(row, args.source_ids_column),
                "quality_tier": get_value(row, args.quality_column),
                "label_status": get_value(row, args.label_column),
                "release_license": get_value(row, args.license_column) or "CC BY 4.0",
                "upstream_rights_status": (
                    get_value(row, args.rights_status_column) or DEFAULT_UPSTREAM_STATUS
                ),
                "license_evidence_url": get_value(row, args.license_url_column),
                "rights_review_notes": get_value(row, args.rights_notes_column),
                "source_url": get_value(row, args.source_url_column),
                "source_payload": json.dumps(row, ensure_ascii=False),
            })

    print(f"CSV rows accepted: {len(records)}; skipped incomplete rows: {skipped}")
    if args.dry_run:
        print("Dry run only; no database writes performed.")
        if records:
            print("First mapped row:")
            print(json.dumps(records[0], ensure_ascii=False, indent=2))
        return 0

    database_url = os.environ.get("DATABASE_URL")
    if not database_url:
        print("DATABASE_URL is required unless --dry-run is used.", file=sys.stderr)
        return 2

    try:
        import psycopg
        with psycopg.connect(database_url) as conn:
            with conn.cursor() as cur:
                for record in records:
                    cur.execute(INSERT_SQL, record)
        print("Import complete. Rows were staged only; none were published.")
        return 0
    except ImportError:
        print('Install dependency: pip install "psycopg[binary]>=3.1"', file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
