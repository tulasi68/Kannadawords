#!/usr/bin/env python3
"""Convert the Alar YAML source into a deduplicated English-search JSON array.

Run from the repository root:
  py alar/build_alar_english_index.py alar/alar.yml alar/alar-english-index.json

All non-empty definitions with a Kannada headword are retained, including
definitions without searchable ASCII English tokens. Those records remain in
the intermediate JSON but do not produce English-token postings.

Duplicate search records are collapsed using headword, definition ID,
definition text, and part of speech. When matching records have different
source entry IDs, the first encountered entry ID is retained as representative
provenance. This avoids duplicate candidate rows and redundant search postings.
"""
import hashlib
import json
import re
import sys
import unicodedata
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

ASCII_LETTER_RE = re.compile(r"[A-Za-z]")
ENGLISH_TOKEN_RE = re.compile(r"[a-z0-9]+")
COMBINING_MARKS_RE = re.compile(r"[\u0300-\u036f]")
STOP = {"a", "an", "the", "of", "or", "and", "being", "be", "is", "are",
        "to", "for", "in", "on", "by", "as", "that", "which", "with",
        "from", "into", "this", "it", "its"}


def scalar_key(value):
    """Return a stable, hashable representation for a source ID."""
    if value is None:
        return ""
    if isinstance(value, (str, int, float, bool)):
        return str(value)
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":"))


def source_record(head, entry_id, definition_id, definition, kind):
    return {
        "word": head,
        "definition": definition,
        "entryId": "" if entry_id is None else entry_id,
        "definitionId": "" if definition_id is None else definition_id,
        "type": kind,
    }


def searchable_tokens(definition):
    """Mirror the browser's NFKD/diacritic normalization and query rules."""
    normalized = unicodedata.normalize("NFKD", definition.lower())
    normalized = COMBINING_MARKS_RE.sub("", normalized)
    return {
        token for token in ENGLISH_TOKEN_RE.findall(normalized)
        if len(token) >= 3 and token not in STOP
    }


def main():
    if len(sys.argv) != 3:
        raise SystemExit(
            "Usage: py alar/build_alar_english_index.py "
            "alar/alar.yml alar/alar-english-index.json"
        )

    yaml_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2])
    if not yaml_path.is_file():
        raise SystemExit(f"Alar YAML source not found: {yaml_path}")

    try:
        import yaml
    except ImportError as exc:
        raise SystemExit(
            "PyYAML is required. Install it with: py -m pip install PyYAML"
        ) from exc

    raw = yaml_path.read_bytes()
    try:
        entries = yaml.safe_load(raw.decode("utf-8-sig"))
    except Exception as exc:
        raise SystemExit(f"Could not parse UTF-8 Alar YAML: {exc}") from exc

    if not isinstance(entries, list):
        raise SystemExit("Expected the Alar YAML top level to be a list.")

    output_path.parent.mkdir(parents=True, exist_ok=True)
    sidecar_path = output_path.with_suffix(".metadata.json")

    seen = set()
    counts = Counter()
    unique_count = 0
    ascii_count = 0
    searchable_count = 0
    missing_head_definitions = 0
    empty_definitions = 0
    malformed_definitions = 0

    # Stream the JSON array so converted record objects need not all remain in RAM.
    with output_path.open("w", encoding="utf-8", newline="\n") as out:
        out.write("[\n")
        first = True

        for item in entries:
            if not isinstance(item, dict):
                counts["malformed_entries"] += 1
                continue

            head = str(item.get("head") or "").strip()
            entry_id = item.get("id", "")
            definitions = item.get("defs") or []
            if not isinstance(definitions, list):
                counts["malformed_definition_lists"] += 1
                continue

            for definition_row in definitions:
                counts["source_definitions"] += 1
                if not isinstance(definition_row, dict):
                    malformed_definitions += 1
                    continue

                definition = str(definition_row.get("entry") or "").strip()
                if not definition:
                    empty_definitions += 1
                    continue
                if not head:
                    missing_head_definitions += 1
                    continue

                kind = str(definition_row.get("type") or "").strip()
                definition_id = definition_row.get("id", "")

                # Collapse identical search records even when Alar assigns
                # them different source entry IDs. Keep the first entry ID as
                # representative provenance to avoid duplicate search results.
                identity = (
                    head,
                    scalar_key(definition_id),
                    definition,
                    kind,
                )
                if identity in seen:
                    counts["duplicate_search_records_collapsed"] += 1
                    continue
                seen.add(identity)

                record = source_record(
                    head, entry_id, definition_id, definition, kind
                )
                if not first:
                    out.write(",\n")
                json.dump(record, out, ensure_ascii=False, separators=(",", ":"))
                first = False
                unique_count += 1

                if ASCII_LETTER_RE.search(definition):
                    ascii_count += 1
                if searchable_tokens(definition):
                    searchable_count += 1

        out.write("\n]\n")

    metadata = {
        "source_file": yaml_path.name,
        "source_yaml_sha256": hashlib.sha256(raw).hexdigest(),
        "generated_utc": datetime.now(timezone.utc).isoformat(),
        "top_level_entries": len(entries),
        "source_definitions": counts["source_definitions"],
        "unique_search_records": unique_count,
        "duplicate_search_records_collapsed": counts["duplicate_search_records_collapsed"],
        "records_with_ascii_letters": ascii_count,
        "records_with_searchable_english_tokens": searchable_count,
        "records_without_searchable_english_tokens": unique_count - searchable_count,
        "definitions_skipped_missing_head": missing_head_definitions,
        "empty_definitions_skipped": empty_definitions,
        "malformed_definitions_skipped": malformed_definitions,
        "malformed_entries_skipped": counts["malformed_entries"],
        "malformed_definition_lists_skipped": counts["malformed_definition_lists"],
        "deduplication_key": [
            "word", "definitionId", "definition", "type"
        ],
        "entry_id_policy": (
            "When records match on the deduplication key, retain the first "
            "source entryId as representative provenance."
        ),
        "intermediate_file": output_path.name,
        "note": (
            "All non-empty definitions with a headword are retained, including "
            "definitions without searchable English tokens. Only exact duplicate "
            "complete source records are removed."
        ),
    }
    sidecar_path.write_text(
        json.dumps(metadata, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    print(f"Top-level YAML entries: {len(entries):,}")
    print(f"Source definitions: {counts['source_definitions']:,}")
    print(f"Unique search records written: {unique_count:,}")
    print(
        "Duplicate search records collapsed: "
        f"{counts['duplicate_search_records_collapsed']:,}"
    )
    print(f"Records with ASCII English letters: {ascii_count:,}")
    print(f"Records with searchable English tokens: {searchable_count:,}")
    print(
        "Records retained but not searchable by English tokens: "
        f"{unique_count - searchable_count:,}"
    )
    print(f"Skipped (missing headword): {missing_head_definitions:,}")
    print(f"Intermediate JSON: {output_path}")
    print(f"Source manifest: {sidecar_path}")


if __name__ == "__main__":
    main()
