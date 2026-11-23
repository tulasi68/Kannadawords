#!/usr/bin/env python3
"""Build compact, lazy Alar reverse-search shards.

Run from the repository root:
  py alar/build_alar_shards.py alar/alar-english-index.json

Each two-character shard contains exact English-token postings. For tokens
with at most RARE_TOKEN_LIMIT matches, it also embeds matching records so the
browser does not need to download unrelated record chunks.
"""
import sys
import json
import re
import hashlib
import unicodedata
from pathlib import Path
from collections import defaultdict
from datetime import datetime, timezone

STOP = {"a", "an", "the", "of", "or", "and", "being", "be", "is", "are",
        "to", "for", "in", "on", "by", "as", "that", "which", "with",
        "from", "into", "this", "it", "its"}
TOKEN_RE = re.compile(r"[a-z0-9]+")
COMBINING_MARKS_RE = re.compile(r"[\\u0300-\\u036f]")
RARE_TOKEN_LIMIT = 500


def searchable_tokens(definition):
    """Mirror the browser's NFKD/diacritic normalization and query rules."""
    normalized = unicodedata.normalize("NFKD", definition.lower())
    normalized = COMBINING_MARKS_RE.sub("", normalized)
    return {
        token for token in TOKEN_RE.findall(normalized)
        if len(token) >= 3 and token not in STOP
    }


def compact_record(rid, row):
    return {
        "id": rid,
        "word": str(row.get("word", "")).strip(),
        "definition": str(row.get("definition", "")).strip(),
        "entryId": row.get("entryId", ""),
        "definitionId": row.get("definitionId", ""),
        "type": row.get("type", "")
    }


def main():
    if len(sys.argv) != 2:
        raise SystemExit("Usage: py alar/build_alar_shards.py alar/alar-english-index.json")
    source = Path(sys.argv[1])
    if not source.is_file():
        raise SystemExit(f"File not found: {source}")

    raw = source.read_bytes()
    try:
        rows = json.loads(raw.decode("utf-8-sig"))
    except Exception as exc:
        raise SystemExit(f"Could not parse intermediate JSON: {exc}") from exc
    if not isinstance(rows, list):
        raise SystemExit("Expected a JSON array.")
    required = {"word", "definition"}
    if rows and not required.issubset(rows[0]):
        raise SystemExit("JSON records must contain word and definition.")

    # The converter writes a sidecar manifest with the original YAML checksum
    # and transparent source/deduplication counts.
    sidecar = source.with_suffix(".metadata.json")
    source_manifest = {}
    if sidecar.is_file():
        try:
            source_manifest = json.loads(sidecar.read_text(encoding="utf-8"))
        except Exception as exc:
            raise SystemExit(f"Could not parse source manifest {sidecar}: {exc}") from exc

    # First pass: exact token postings and their frequencies.
    postings = defaultdict(lambda: defaultdict(list))
    valid_count = 0
    searchable_count = 0
    for rid, row in enumerate(rows):
        if not isinstance(row, dict):
            continue
        record = compact_record(rid, row)
        if not record["word"] or not record["definition"]:
            continue
        valid_count += 1
        tokens = searchable_tokens(record["definition"])
        if tokens:
            searchable_count += 1
        for token in tokens:
            postings[token[:2]][token].append(rid)

    # Second pass: embed records only for rare tokens. This bounds browser
    # downloads to relevant candidates instead of broad 5,000-record chunks.
    rare_records = defaultdict(dict)
    rare_tokens = {
        token for shard in postings.values()
        for token, ids in shard.items()
        if len(ids) <= RARE_TOKEN_LIMIT
    }
    if rare_tokens:
        for rid, row in enumerate(rows):
            if not isinstance(row, dict):
                continue
            record = compact_record(rid, row)
            if not record["word"] or not record["definition"]:
                continue
            tokens = searchable_tokens(record["definition"]) & rare_tokens
            for token in tokens:
                rare_records[token[:2]].setdefault(token, []).append(record)

    index_dir = Path("alar/search-index")
    record_dir = Path("alar/search-records")
    index_dir.mkdir(parents=True, exist_ok=True)
    # Remove stale generated shards, including previous record chunks.
    for folder in (index_dir, record_dir):
        if folder.exists():
            for old in folder.glob("*.json"):
                old.unlink()

    for prefix, token_map in postings.items():
        shard = {}
        for token, ids in token_map.items():
            item = {"ids": ids}
            if len(ids) <= RARE_TOKEN_LIMIT:
                item["records"] = rare_records[prefix].get(token, [])
            shard[token] = item
        out = index_dir / f"{prefix}.json"
        out.write_text(
            json.dumps(shard, ensure_ascii=False, separators=(",", ":")),
            encoding="utf-8",
        )
        print(f"Index: {out} ({len(shard):,} tokens)")

    meta = {
        "source_file": source.name,
        "source_sha256": hashlib.sha256(raw).hexdigest(),
        "source_yaml_sha256": source_manifest.get("source_yaml_sha256", ""),
        "source_yaml_file": source_manifest.get("source_file", ""),
        "generated_utc": datetime.now(timezone.utc).isoformat(),
        "source_records": len(rows),
        "indexed_records": valid_count,
        "searchable_records": searchable_count,
        "records_without_searchable_english_tokens": valid_count - searchable_count,
        "source_conversion": {
            key: source_manifest.get(key)
            for key in (
                "top_level_entries",
                "source_definitions",
                "unique_complete_records",
                "exact_duplicate_occurrences_removed",
                "records_with_ascii_letters",
                "records_with_searchable_english_tokens",
                "records_without_searchable_english_tokens",
                "definitions_skipped_missing_head",
                "deduplication_key",
            )
            if key in source_manifest
        },
        "rare_token_limit": RARE_TOKEN_LIMIT,
        "index_shards": len(postings),
        "design": "lazy two-character English-token shards with embedded records for rare exact tokens"
    }
    Path("alar/search-metadata.json").write_text(
        json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(
        f"\nDone: {valid_count:,} retained records; "
        f"{searchable_count:,} have searchable English tokens."
    )
    print(f"Rare tokens with embedded records: {len(rare_tokens):,}.")
    print(
        "Records without searchable English tokens remain in the intermediate "
        "JSON but do not create token postings."
    )
    print("The browser no longer needs alar/search-records/*.json.")


if __name__ == "__main__":
    main()
