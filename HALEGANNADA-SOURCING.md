# Halegannada evidence audit

Audit date: 16 November 2026  
Repository: `tulasi68/kannadawords`

## Editorial rule

A word must not be labelled verified merely because it appears in an OCR, scraped, crowd-sourced or secondary list. Record the exact spelling, historical sense, source title, author/editor, edition, page/entry or inscription identifier, and (where possible) a quotation. Check the original dictionary or text before upgrading a record to **verified**.

- **Verified** — checked against a traceable dictionary entry in a reliable edition or a primary historical text with a precise reference.
- **Provisional** — a traceable secondary transcription or claim exists, but the original edition/text has not been checked.
- **Unverified** — no adequate traceable evidence has been identified. Do not present the form as established Old Kannada.

## Audit of the six vocabulary-card forms

| Kannada form | Current gloss | Audit status | Evidence / next action |
|---|---|---|---|
| ಆಲಿಸು | Listen; heed | Provisional | Digitised *Pampana Nudigani* entry: ಗಮನವಿರಿಸಿ ಕೇಳು; cites *Pampabharata* 1.142. Verify against the printed dictionary and scholarly text. |
| ಆವಣ | Shop | Provisional | Digitised *Champu Nudigannadi* entry: ಆಪಣ / ಅಂಗಡಿ; cites *Harivamsha* 1.24. Verify against the printed dictionary and scholarly text. |
| ಮುಗಿಲ್ | Cloud | Provisional | Digitised *Pampana Nudigani* entry: ಮೋಡ, citing *Pampabharata* 7.23. *Champu Nudigannadi* also gives ಮೋಡ (ವಡ್ಡಾರಾಧನೆ, p.109, story 5) and ಆಕಾಶ (ಕಬ್ಬಿಗರ ಕಾವ್ಯ, 27v). Honalu also analyses ಬೆಳ್ + ಮುಗಿಲ್. Check the cited editions before upgrading. [Digitised dictionary source](https://github.com/omshivaprakash/Indic-dictionaries/tree/main/%5BKA%5D%20Pampana%20Nudigani) · [Honalu discussion](https://honalu.net/2013/05/29/ಶಬ್ದಮಣಿದರ್ಪಣದಲ್ಲಿ-ತಳಮಟ್ಟದ-ತಪ್ಪುಗಳು-3/) |
| ಜವನಿಕೆ | Curtain / screen | Provisional | Digitised *Pampana Nudigani* entry: ತೆರೆ; glossed [ಯವನಿಕಾ], citing *Adipurana* 9.20. Verify the spelling, sense and verse against the printed dictionary and scholarly text. [Digitised dictionary source](https://github.com/omshivaprakash/Indic-dictionaries/tree/main/%5BKA%5D%20Pampana%20Nudigani) |
| ಪೊಸ | New | Provisional | A grammatical discussion explicitly identifies ಪೊಸ as an Old Kannada adjectival base form; a literary transcription also contains it. Verify against a scholarly edition and record the exact work/verse. [Honalu discussion](https://honalu.net/2013/05/29/ಶಬ್ದಮಣಿದರ್ಪಣದಲ್ಲಿ-ತಳಮಟ್ಟದ-ತಪ್ಪುಗಳು-3/) · [Literary transcription](https://knningaiah.blogspot.com/2017/07/blog-post_16.html) |
| ಕರ್ವು (also reported ಕರ್ಬು) | Sugarcane | Provisional | Digitised *Pampana Nudigani* headword ಕರ್ವು, glossed ಕಬ್ಬು, cites *Pampabharata* 4.37v. Kannada Prabha independently reports ಕರ್ವು / ಕರ್ಬು. Use the dictionary headword spelling for now; verify against the original edition. [Digitised dictionary source](https://github.com/omshivaprakash/Indic-dictionaries/tree/main/%5BKA%5D%20Pampana%20Nudigani) · [Kannada Prabha article](https://www.kannadaprabha.in/amp/special-news/evidence-of-the-antiquity-of-kannada-language/articleshow-gs6ee3m) |

## Priority reference works and discovery collections

1. P. V. Narayana, *ಹಳಗನ್ನಡ ಪದಸಂಪದ* — a major Old Kannada lexical source; cite the printed/digitised entry and page, not only a scraped dataset.
2. P. V. Narayana, *ಪಂಪನ ನುಡಿಗಣಿ* — useful for words in Pampa's works; record the cited work and verse where available.
3. *ಚಂಪೂ ನುಡಿಗನ್ನಡಿ* — additional literary lexical cross-check.
4. *Epigraphia Carnatica* and the University of Mysore inscription collections — use exact volume, inscription number, place, date and page/line.
5. CIIL Bhasha Sanchika, Classical Kannada collection — discover original literary, manuscript and inscription material.
6. Akshara Bhandara, Mythic Society — compare inscription photographs with readings and metadata.
7. Kittel's Kannada-English Dictionary — useful for historical lexical cross-checking, but do not infer that every headword is specifically Old Kannada.

Digitised/OCR datasets, including the Halegannada–Hosagannada pair dataset and scraped dictionary data, are discovery aids only. Check licensing and verify each candidate against the underlying source before copying data into this application.

## Data policy

- Preserve uncertain forms as **provisional** or **unverified**, not as established fact.
- Do not invent page numbers, dates, quotations or etymologies.
- Distinguish an Old Kannada attestation from a word that merely survives in modern Kannada.
- A literary occurrence proves use in that text; it does not automatically prove the proposed gloss in every context.
- Upgrade to **verified** only after a human editor checks the cited source.

## Additional candidate-list audit

The separate `halegannadaEntries` array contains these further candidates. It currently has no individual page, entry, verse or inscription references for them. They therefore remain **unverified** and must not be described as sourced Old Kannada words:

| Candidate | Working gloss | Status |
|---|---|---|
| ಅಂಬುದರಥ | Indra | Unverified |
| ಅಂಬುಪಾಯಿ | One who drinks water | Unverified |
| ಅಂಬುರುಹ | Lotus | Unverified |
| ಅಂಬುವೀಡು | Range of an arrow | Unverified |
| ಆಲಿವೆಳಗ | Moon | Unverified |
| ಆಲೀಢ | Tasted / eaten | Unverified |
| ಆವಗಂ | Always; abundantly | Unverified |
| ಆವರಿಸು | Surround; pervade; enclose | Unverified |
| ಅಟ್ಟಟ್ಟಿ | Messenger / courier | Unverified |
| ಅಡಕಿಲ್ | Heap / pile | Unverified |
| ಅಕ್ಕಜ | Wonder / surprise | Unverified |
| ಅಗಡು | Mischief / valour | Unverified |
| ಹೊಂತ | Vow / pledge | Unverified |
| ಹೊಂದು | To die | Unverified |
| ಹೊಗರು | Radiance / splendour | Unverified |
| ಎರ್ದೆ | Husband; to captivate | Unverified — senses need separation |
| ಒಳಪೊಕ್ಕಳ್ | To enter | Unverified |

The candidate array's own comment has been corrected to make clear that it is not a verified wordlist. A candidate's presence in that array is not evidence of Old Kannada status.

## Important distinction

A word appearing in a historical or literary Kannada work is not automatically an **Old Kannada** attestation. The work's date, linguistic period, exact reading and contextual meaning must also be established. In particular, the Jaimini Bharata and Rajashankara Vilasa web transcriptions cited above are discovery leads only; their presence on a page titled as a Halegannada collection does not independently establish the period of the work or prove Old Kannada status.

## Second-pass findings (16 November 2026)

The evidence classification has been refined after checking additional sources:

- **ಮುಗಿಲ್** is now provisional rather than unverified. A Kannada grammatical article explicitly discusses ಬೆಳ್ + ಮುಗಿಲ್ as an Old Kannada phrase, and a separate literary transcription contains the form. This is meaningful historical-linguistic evidence, but the exact scholarly edition and dating still need to be checked.
- **ಪೊಸ** has stronger secondary support: the grammatical article explicitly identifies ಪೊಸ as an Old Kannada base adjective. A literary transcription also contains it. It remains provisional until an edition and verse reference are confirmed.
- **ಕರ್ಬು** remains provisional. Kannada Prabha's article by independent researcher Vijay Mahantesh Papanala lists ಕರ್ವು / ಕರ್ಬು for sugarcane, but gives no precise dictionary entry or inscription number in the article.
- **ಆಲಿಸು** has been downgraded to unverified. The earlier source was only a modern gloss equating ಕೇಳು and ಆಲಿಸು; it did not demonstrate an Old Kannada occurrence.

The official Bharatavani catalogue confirms that *ಹಳಗನ್ನಡ ಪದಸಂಪದ* (P. V. Narayana, 2007; Kannada Sahitya Parishattu as content partner), *ಪಂಪನ ನುಡಿಗಣಿ* (P. V. Narayana; Kamadhenu Pustaka Bhavana) and *ಚಂಪೂ ನುಡಿಗನ್ನಡಿ* (P. V. Narayana; Sapna Book House) are dictionary publications. The *ಹಳಗನ್ನಡ ಪದಸಂಪದ* PDF is listed as 138.95 MB and its reading page requires login. The other two catalogues list PDF editions. Catalogue metadata authenticates the bibliographic source, not any individual word claim.

- [Bharatavani — ಹಳಗನ್ನಡ ಪದಸಂಪದ](https://bharatavani.in/home/book?id=ಹಳಗನ್ನಡ%20ಪದಸಂಪದ)
- [Bharatavani — ಪಂಪನ ನುಡಿಗಣಿ](https://bharatavani.in/home/book?id=ಪಂಪನ%20ನುಡಿಗಣಿ)
- [Bharatavani — ಚಂಪೂ ನುಡಿಗನ್ನಡಿ](https://bharatavani.in/english/book?id=ಚಂಪೂ%20ನುಡಿಗನ್ನಡಿ)

The open Indic-dictionaries repository says its headwords were scraped from Bharatavani and flags alternative-form and OCR/corruption cleanup. Use it to locate candidate entries, not as the final authority. [Repository methodology and caveats](https://github.com/omshivaprakash/Indic-dictionaries).


## Third-pass dictionary-entry audit (16 November 2026)

A targeted search of the digitised CSV transcriptions in the public [Indic-dictionaries repository](https://github.com/omshivaprakash/Indic-dictionaries) located exact headword entries for five of the six vocabulary-card forms:

| Headword | Dictionary gloss | Cited occurrence in the transcription | Current app status |
|---|---|---|---|
| ಆಲಿಸು | ಗಮನವಿರಿಸಿ ಕೇಳು | *Pampabharata* 1.142 | Provisional |
| ಆವಣ | ಆಪಣ, ಅಂಗಡಿ | *Harivamsha* 1.24 | Provisional |
| ಜವನಿಕೆ | [ಯವನಿಕಾ] ತೆರೆ | *Adipurana* 9.20 | Provisional |
| ಮುಗಿಲ್ | ಮೋಡ; also ಆಕಾಶ in another entry | *Pampabharata* 7.23; *Vaddaradhane*, p.109, story 5; *Kabbigara Kava*, 27v | Provisional |
| ಕರ್ವು | ಕಬ್ಬು | *Pampabharata* 4.37v | Provisional |
| ಪೊಸ | New | No exact headword entry located in this targeted pass | Provisional; Honalu grammatical discussion remains the lead |

The sugarcane card now uses the exact dictionary headword **ಕರ್ವು**. The community-facing example inflection has been adjusted to match. The alternate spelling ಕರ್ಬು remains documented as a reported variant in the Kannada Prabha article.

### Important limitation

These CSVs are openly accessible transcriptions scraped from Bharatavani; the dataset maintainer explicitly warns about alternative-headword cleanup and OCR corruption. The CSV gives useful dictionary glosses and work/verse references, but it is not itself the printed source. No item above has been upgraded to **verified**. The next editorial step is to inspect the corresponding entries in P. V. Narayana's printed/digitised dictionary and then verify each cited passage in a reliable edition of the named work.

The relevant source files are indexed under:
- [Pampana Nudigani — digitised transcription](https://github.com/omshivaprakash/Indic-dictionaries/tree/main/%5BKA%5D%20Pampana%20Nudigani)
- [Champu Nudigannadi — digitised transcription](https://github.com/omshivaprakash/Indic-dictionaries/tree/main/%5BKA%5D%20Champu%20Nudigannadi)
- [Bharatavani catalogue — Halagannada Padasampada](https://bharatavani.in/home/book?id=ಹಳಗನ್ನಡ%20ಪದಸಂಪದ)

This pass found no direct dictionary headword for ಪೊಸ in the specific CSV sections searched. That absence is not proof that the word is absent from the full dictionary corpus.
