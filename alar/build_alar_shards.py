#!/usr/bin/env python3
"""Build compact, lazy Alar reverse-search shards.

Run from the repository root:
  py alar/build_alar_shards.py alar/alar-english-index.json

Each two-letter shard contains exact token postings. For tokens with at most
RARE_TOKEN_LIMIT matches, it also embeds those matching records. The browser
can then retrieve a small, relevant candidate set without downloading broad
record chunks containing thousands of unrelated entries.
"""
import sys
import json
import re
import hashlib
from pathlib import Path
from collections import defaultdict
from datetime import datetime, timezone

STOP = {"a", "an", "the", "of", "or", "and", "being", "be", "is", "are",
        "to", "for", "in", "on", "by", "as", "that", "which", "with",
        "from", "into", "this", "it", "its"}
TOKEN_RE = re.compile(r"[a-z0-9]+")
RARE_TOKEN_LIMIT = 500


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
    rows = json.loads(raw.decode("utf-8-sig"))
    if not isinstance(rows, list):
        raise SystemExit("Expected a JSON array.")
    required = {"word", "definition"}
    if rows and not required.issubset(rows[0]):
        raise SystemExit("JSON records must contain word and definition.")

    # First pass: exact token postings and their frequencies.
    postings = defaultdict(lambda: defaultdict(list))
    valid_count = 0
    for rid, row in enumerate(rows):
        record = compact_record(rid, row)
        if not record["word"] or not record["definition"]:
            continue
        valid_count += 1
        tokens = set(TOKEN_RE.findall(record["definition"].lower())) - STOP
        for token in tokens:
            postings[token[:2]][token].append(rid)

    # Second pass: embed records only for rare tokens. These are the useful
    # candidate pools for precise searches and avoid loading unrelated chunks.
    rare_records = defaultdict(dict)
    rare_tokens = {
        token for shard in postings.values()
        for token, ids in shard.items()
        if len(ids) <= RARE_TOKEN_LIMIT
    }
    if rare_tokens:
        for rid, row in enumerate(rows):
            record = compact_record(rid, row)
            if not record["word"] or not record["definition"]:
                continue
            tokens = set(TOKEN_RE.findall(record["definition"].lower())) & rare_tokens
            for token in tokens:
                rare_records[token[:2]].setdefault(token, []).append(record)

    index_dir = Path("alar/search-index")
    record_dir = Path("alar/search-records")
    index_dir.mkdir(parents=True, exist_ok=True)
    # Remove stale generated shards, including the previous large record chunks.
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
        out.write_text(json.dumps(shard, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        print(f"Index: {out} ({len(shard):,} tokens)")

    meta = {
        "source_file": source.name,
        "source_sha256": hashlib.sha256(raw).hexdigest(),
        "generated_utc": datetime.now(timezone.utc).isoformat(),
        "source_records": len(rows),
        "indexed_records": valid_count,
        "rare_token_limit": RARE_TOKEN_LIMIT,
        "index_shards": len(postings),
        "design": "lazy two-character shards with embedded records for rare exact tokens"
    }
    Path("alar/search-metadata.json").write_text(
        json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"\nDone: {valid_count:,} records; {len(postings)} index shards.")
    print(f"Rare tokens with embedded records: {len(rare_tokens):,}.")
    print("The browser no longer needs alar/search-records/*.json.")


if __name__ == "__main__":
    main()
