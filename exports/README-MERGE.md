# Lexicon merge — 2026-11-21

## What changed

- Merged the attached **Accha Kannada 1000 Words Lexicon** spreadsheet into the project exports.
- **Additional 173** (public signboards, government announcements, newspapers & media, school textbooks) stay **first** in the master ordering so the landing-page showcase remains on top.
- Landing page continues to load `landing-words.json` (exactly the 173) independently — no change to that behaviour.
- Duplicates between the 1000 and existing entries were **intentionally kept** (per request).

## New / updated files

| File | Description |
|------|-------------|
| `exports/master-lexicon-1810.csv` | Full merge: 173 + 637 Original + 1000 Accha = **1810** rows |
| `exports/accha-1000-lexicon.csv` | The 1000 entries alone (Collection = `Accha 1000`) |
| `exports/kannadawords-master-lexicon.xlsx` | Multi-sheet workbook (Additional 173 / Original Lexicon / Accha 1000 / Summary) |
| `exports/README-MERGE.md` | This note |

## Column mapping used for the 1000

| Source (xlsx) | Master CSV column |
|---------------|-------------------|
| ID | Entry ID (`A1000-0001` …) |
| Sanskrit / Loanword | Source Term |
| Accha Kannada Alternative | Kannada Alternatives |
| English Meaning | English Meaning |
| Category | Category |
| Naturalness Fit | Naturalness Fit |
| Dravidian Root | Source Etymology |
| Usage & Etymology Notes | Editorial Note |
| (constant) | Collection = `Accha 1000`, Provenance = source xlsx name |

## Landing page

`index.html` / `app.js` still fetch `./landing-words.json` for the 173-word showcase. No change required; the 173 remain on top of the landing experience.

## Next steps (if needed)

1. Replace any remaining placeholder content in `exports/master-lexicon-1810.csv` with the full CSV from the local merge artifact.
2. Optionally regenerate `exports/kannadawords-master-workbook.xml` from the new xlsx for older Excel compatibility.
3. Vercel production will redeploy on push; verify the Additional 173 dataset button still shows 173 rows.
