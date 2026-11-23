#!/usr/bin/env python3
"""Build a lazy-loaded, sharded Alar reverse index from alar-english-index.json.

Run from the repository root:
  py alar/build_alar_shards.py alar/alar-english-index.json

Creates:
  alar/search-index/<prefix>.json   English token -> record IDs
  alar/search-records/<chunk>.json  compact records, 5,000 per file
  alar/search-metadata.json
"""
import sys, json, re, hashlib
from pathlib import Path
from collections import defaultdict
from datetime import datetime, timezone

STOP = {"a","an","the","of","or","and","being","be","is","are","to","for","in","on","by","as","that","which","with","from","into","this","it","its"}
TOKEN_RE = re.compile(r"[a-z0-9]+")
CHUNK_SIZE = 5000

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

    index = defaultdict(lambda: defaultdict(list))
    record_dir = Path("alar/search-records")
    index_dir = Path("alar/search-index")
    record_dir.mkdir(parents=True, exist_ok=True)
    index_dir.mkdir(parents=True, exist_ok=True)

    record_count = 0
    for start in range(0, len(rows), CHUNK_SIZE):
        chunk_no = start // CHUNK_SIZE
        compact = []
        for offset, row in enumerate(rows[start:start + CHUNK_SIZE]):
            rid = start + offset
            word = str(row.get("word", "")).strip()
            definition = str(row.get("definition", "")).strip()
            if not word or not definition:
                continue
            compact.append({
                "id": rid, "word": word, "definition": definition,
                "entryId": row.get("entryId", ""),
                "definitionId": row.get("definitionId", ""),
                "type": row.get("type", "")
            })
            tokens = set(TOKEN_RE.findall(definition.lower()))
            for token in tokens - STOP:
                index[token[:2]][token].append(rid)
            record_count += 1
        out = record_dir / f"{chunk_no:03d}.json"
        out.write_text(json.dumps(compact, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        print(f"Records: {out} ({len(compact):,})")

    for prefix, mapping in index.items():
        out = index_dir / f"{prefix}.json"
        out.write_text(json.dumps(dict(mapping), ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    meta = {
        "source_file": source.name,
        "source_sha256": hashlib.sha256(raw).hexdigest(),
        "generated_utc": datetime.now(timezone.utc).isoformat(),
        "source_records": len(rows),
        "indexed_records": record_count,
        "record_chunk_size": CHUNK_SIZE,
        "token_prefix_length": 2,
        "index_shards": len(index),
        "design": "lazy two-character English-token shards plus 5000-record chunks"
    }
    Path("alar/search-metadata.json").write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nDone: {record_count:,} records; {len(index)} English index shards.")
    print("Upload alar/search-index/, alar/search-records/, and alar/search-metadata.json.")
    print("Do not upload the original 32 MB JSON or the .gz file for browser search.")

if __name__ == "__main__":
    main()
