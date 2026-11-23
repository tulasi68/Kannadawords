# Alar English reverse-search index

The Alar YAML file is the source of truth. The JSON intermediate and token shards
are generated locally; do not commit the full YAML or intermediate JSON.

## Source

Download the UTF-8 YAML source from:

https://raw.githubusercontent.com/alar-dict/data/master/alar.yml

Save it as `alar/alar.yml`.

## Build

Install PyYAML once if needed:

```powershell
py -m pip install PyYAML
```

From the repository root, run:

```powershell
py alar\build_alar_english_index.py alar\alar.yml alar\alar-english-index.json
py alar\build_alar_shards.py alar\alar-english-index.json
```

The first script creates:
- `alar/alar-english-index.json`: intermediate records used by the shard builder.
- `alar/alar-english-index.metadata.json`: source checksum and conversion counts.

The converter and shard builder use the same English normalization as the browser: Unicode NFKD decomposition, removal of combining marks, ASCII tokenization, stop-word removal, and a minimum token length of three characters. This keeps indexed tokens aligned with what Tab 4 can query.

The second script creates:
- `alar/search-index/*.json`: lazy two-character English-token shards.
- `alar/search-metadata.json`: index statistics and source provenance.

## Record-preservation rules

A definition is retained when it has a non-empty headword and non-empty
definition text. This includes definitions that have no ASCII English letters;
those remain in the intermediate JSON but cannot produce English-token
postings.

Only exact duplicate complete source records are removed. The identity key is:

`word + entryId + definitionId + definition + type`

Consequently:
- The same English gloss under different Kannada headwords is retained.
- The same headword/definition ID with different part-of-speech labels is retained.
- A repeated occurrence with all five fields identical is removed.
- Definitions with no English tokens are counted and retained in the intermediate.

The metadata records the source YAML SHA-256, total source definitions, retained
record count, exact duplicates removed, records with and without English search
tokens, and definitions skipped because the headword is missing.

## Validation

The conversion summary and the generated `alar/search-metadata.json` should be
checked before committing regenerated shards. Do not compare the result to the
old 203,753-record intermediate count as a correctness target: its historical
conversion/deduplication rule has not been recovered.

The raw YAML and intermediate JSON are local build inputs. Commit the generated
search shards and `search-metadata.json` only after reviewing the new counts
and testing Tab 4 searches in the browser.
