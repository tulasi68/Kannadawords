#!/usr/bin/env python3
"""Build one flat, append-friendly workbook from all KannadaWords collections.

The workbook is an editorial consolidation/export. Canonical JSON and the
master writing corpus remain the website's validated runtime inputs.
"""
from __future__ import annotations
import csv, hashlib, json, re, unicodedata
from pathlib import Path
from openpyxl import Workbook, load_workbook
from openpyxl.styles import Font, PatternFill, Alignment
from openpyxl.worksheet.table import Table, TableStyleInfo
from openpyxl.utils import get_column_letter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "exports" / "kannadawords-master-lexicon.xlsx"
MASTER_JSON = ROOT / "master-lexicon.json"
ENTRY_DIR = ROOT / "lexicon-source" / "entries"
ADDITIONAL_CSV = ROOT / "exports" / "additional-173.csv"

HEADERS = [
    "Collection", "Record ID", "Record Type", "Source Word / Loanword",
    "Kannada Alternative(s)", "English Meaning", "Category / Domain",
    "Naturalness Fit", "Dravidian Root", "Usage & Etymology Notes",
    "Tamil Evidence", "Tulu Evidence", "Proto-Dravidian Evidence",
    "Old Kannada Form", "Review Status", "Editorial Notes",
    "Source / Provenance", "Original Source File", "Original Source Row",
    "Potential Duplicate IDs", "Raw Record JSON (Part 1)",
    "Raw Record JSON (Part 2)", "Raw Record JSON (Part 3)"
]
RAW_CHUNK = 30000

def compact(value):
    return json.dumps(value, ensure_ascii=False, separators=(",", ":"), sort_keys=True)

def clean(value):
    return "" if value is None else str(value).strip()

def norm(value):
    value = unicodedata.normalize("NFKC", clean(value)).casefold()
    return re.sub(r"[^\w]", "", value, flags=re.UNICODE)

def split_raw(value):
    return [value[i:i+RAW_CHUNK] for i in range(0, len(value), RAW_CHUNK)][:3]

def canonical_rows():
    rows = []
    files = sorted(ENTRY_DIR.glob("part-*.json"))
    for path in files:
        payload = json.loads(path.read_text(encoding="utf-8"))
        for index, entry in enumerate(payload.get("entries", []), start=1):
            candidates = entry.get("candidates") or []
            forms = [clean(c.get("form")) for c in candidates if clean(c.get("form"))]
            evidence = {"ta": [], "tcy": [], "proto-dravidian": []}
            for candidate in candidates:
                for item in candidate.get("comparativeEvidence") or []:
                    lang = item.get("language")
                    form = clean(item.get("form"))
                    if lang in evidence and form and form not in evidence[lang]:
                        evidence[lang].append(form)
            root_parts = []
            for candidate in candidates:
                for part in candidate.get("etymologyParts") or []:
                    form = clean(part.get("form"))
                    if form and form not in root_parts:
                        root_parts.append(form)
            refs = entry.get("provenance", {}).get("sourceRefs", [])
            datasets = entry.get("provenance", {}).get("sourceDatasets", [])
            status = entry.get("editorial", {}).get("reviewStatus", "")
            notes = entry.get("editorial", {}).get("note", "")
            old = entry.get("historicalEvidence") or {}
            raw = compact(entry)
            chunks = split_raw(raw)
            rows.append({
                "Collection": "Original 637 Comparative Lexicon",
                "Record ID": entry.get("id", ""),
                "Record Type": "Comparative entry",
                "Source Word / Loanword": entry.get("sourceForm", ""),
                "Kannada Alternative(s)": " / ".join(dict.fromkeys(forms)),
                "English Meaning": entry.get("sourceMeaning", ""),
                "Category / Domain": entry.get("category", ""),
                "Naturalness Fit": "",
                "Dravidian Root": " / ".join(root_parts),
                "Usage & Etymology Notes": compact(entry.get("sourceEtymology")) if entry.get("sourceEtymology") else "",
                "Tamil Evidence": " | ".join(evidence["ta"]),
                "Tulu Evidence": " | ".join(evidence["tcy"]),
                "Proto-Dravidian Evidence": " | ".join(evidence["proto-dravidian"]),
                "Old Kannada Form": old.get("form", ""),
                "Review Status": status,
                "Editorial Notes": notes,
                "Source / Provenance": "Datasets: " + ", ".join(datasets) + ("; References: " + ", ".join(refs) if refs else ""),
                "Original Source File": path.relative_to(ROOT).as_posix(),
                "Original Source Row": index,
                "_raw": chunks,
            })
    return rows

def additional_rows():
    rows = []
    with ADDITIONAL_CSV.open("r", encoding="utf-8-sig", newline="") as handle:
        for line_no, item in enumerate(csv.DictReader(handle), start=2):
            source = clean(item.get("Sanskrit / Bureaucratic Term"))
            raw = compact(item)
            rows.append({
                "Collection": "Additional 173 Civic / Media / Education",
                "Record ID": clean(item.get("ID")),
                "Record Type": "Additional entry",
                "Source Word / Loanword": source,
                "Kannada Alternative(s)": clean(item.get("Accha Kannada Replacement(s)")),
                "English Meaning": clean(item.get("English Meaning")),
                "Category / Domain": clean(item.get("Target Domain")),
                "Naturalness Fit": clean(item.get("Naturalness Fit")),
                "Dravidian Root": "",
                "Usage & Etymology Notes": "",
                "Tamil Evidence": "", "Tulu Evidence": "", "Proto-Dravidian Evidence": "",
                "Old Kannada Form": "", "Review Status": "needs_review",
                "Editorial Notes": "Imported from the preserved 173-entry collection; not independently verified by this export.",
                "Source / Provenance": "exports/additional-173.csv",
                "Original Source File": "exports/additional-173.csv",
                "Original Source Row": line_no,
                "_raw": split_raw(raw),
            })
    return rows

def master_rows():
    data = json.loads(MASTER_JSON.read_text(encoding="utf-8"))
    header = data["sourceHeader"]
    rows = []
    for item in data.get("entries", []):
        fields = item.get("fields", [])
        mapped = dict(zip(header, fields))
        raw = compact({"id": item.get("id"), "sourceLine": item.get("sourceLine"), "fields": fields})
        rows.append({
            "Collection": "2087words.xlsx Master Corpus",
            "Record ID": item.get("id", ""),
            "Record Type": "Master corpus entry",
            "Source Word / Loanword": mapped.get("Sanskrit / Loanword", ""),
            "Kannada Alternative(s)": mapped.get("Accha Kannada Alternative", ""),
            "English Meaning": mapped.get("English Meaning", ""),
            "Category / Domain": mapped.get("Category", ""),
            "Naturalness Fit": mapped.get("Naturalness Fit", ""),
            "Dravidian Root": mapped.get("Dravidian Root", ""),
            "Usage & Etymology Notes": mapped.get("Usage & Etymology Notes", ""),
            "Tamil Evidence": "", "Tulu Evidence": "", "Proto-Dravidian Evidence": "",
            "Old Kannada Form": "", "Review Status": "needs_review",
            "Editorial Notes": "Imported from the 2087words.xlsx master corpus; preserve source wording pending editorial review.",
            "Source / Provenance": "2087words.xlsx; source line " + str(item.get("sourceLine", "")),
            "Original Source File": "master-lexicon.json (generated from 2087words.xlsx)",
            "Original Source Row": item.get("sourceLine", ""),
            "_raw": split_raw(raw),
        })
    return rows

def preserve_intake():
    if not OUT.exists():
        return []
    try:
        old = load_workbook(OUT, read_only=True, data_only=True)
        if "All Words" not in old.sheetnames:
            return []
        ws = old["All Words"]
        header = [cell.value for cell in next(ws.iter_rows(min_row=1, max_row=1))]
        idx = {name: i for i, name in enumerate(header)}
        kept = []
        for values in ws.iter_rows(min_row=2, values_only=True):
            collection = clean(values[idx.get("Collection", 0)]) if values else ""
            if collection != "New Intake":
                continue
            row = {name: (values[i] if i < len(values) else "") for name, i in idx.items()}
            if any(clean(row.get(name)) for name in HEADERS[1:20]):
                kept.append({h: row.get(h, "") for h in HEADERS})
        old.close()
        return kept
    except Exception:
        # The first repository version contains a text placeholder, not an XLSX.
        return []

def main():
    rows = canonical_rows() + additional_rows() + master_rows()
    # Flag possible exact source-form overlaps; do not merge or discard any record.
    groups = {}
    for row in rows:
        key = norm(row.get("Source Word / Loanword"))
        if key:
            groups.setdefault(key, []).append(row["Record ID"])
    for row in rows:
        key = norm(row.get("Source Word / Loanword"))
        ids = groups.get(key, [])
        row["Potential Duplicate IDs"] = ", ".join(x for x in ids if x != row["Record ID"]) if len(ids) > 1 else ""
    intake = preserve_intake()

    wb = Workbook()
    ws = wb.active
    ws.title = "All Words"
    ws.append(HEADERS)
    for row in rows:
        raw = row.pop("_raw", [])
        values = [row.get(h, "") for h in HEADERS[:20]] + raw + [""] * (3 - len(raw))
        ws.append(values)
    for row in intake:
        ws.append([row.get(h, "") for h in HEADERS])

    # Add 100 empty, clearly labelled intake rows for future additions.
    for _ in range(100):
        ws.append(["New Intake"] + [""] * (len(HEADERS) - 1))

    ws.freeze_panes = "D2"
    ws.auto_filter.ref = f"A1:{get_column_letter(len(HEADERS))}{ws.max_row}"
    ws.row_dimensions[1].height = 34
    for cell in ws[1]:
        cell.font = Font(bold=True, color="FFFFFF")
        cell.fill = PatternFill("solid", fgColor="7F1D1D")
        cell.alignment = Alignment(wrap_text=True, vertical="center")
    widths = [34,18,22,30,42,26,26,16,24,42,30,30,30,24,18,48,42,42,16,34,45,45,45]
    for col, width in enumerate(widths, start=1):
        ws.column_dimensions[get_column_letter(col)].width = width
    for row in ws.iter_rows(min_row=2):
        for cell in row:
            cell.alignment = Alignment(vertical="top", wrap_text=True)
    for row_num in range(2, ws.max_row + 1):
        if ws.cell(row_num, 1).value == "New Intake":
            for cell in ws[row_num]:
                cell.fill = PatternFill("solid", fgColor="FFF7E6")
    if ws.max_row >= 2:
        tab = Table(displayName="KannadaWordsAllEntries", ref=f"A1:{get_column_letter(len(HEADERS))}{ws.max_row}")
        tab.tableStyleInfo = TableStyleInfo(name="TableStyleMedium2", showFirstColumn=False, showLastColumn=False, showRowStripes=True, showColumnStripes=False)
        ws.add_table(tab)
    ws.sheet_view.showGridLines = False
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    ws.page_setup.fitToWidth = 1
    ws.sheet_properties.outlinePr.summaryBelow = True
    OUT.parent.mkdir(parents=True, exist_ok=True)
    wb.save(OUT)
    print(f"Workbook created: {OUT.relative_to(ROOT)}")
    print(f"Rows: comparative={len([r for r in rows if r['Collection'].startswith('Original')])}, additional173={len([r for r in rows if r['Collection'].startswith('Additional')])}, master={len([r for r in rows if r['Collection'].startswith('2087')])}, preserved_intake={len(intake)}, total_data={len(rows)+len(intake)}")

if __name__ == "__main__":
    main()
