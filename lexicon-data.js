/* KannadaWords canonical runtime lexicon.
 * This file is the single source of vocabulary content displayed by the UI.
 * Edit records here; do not edit legacy source files expecting runtime changes.
 * Legacy source files are retained for migration/history and are not loaded by the app.
 * schemaVersion 1; one entry per stable ID. Linguistic corrections are a separate review task.
 */
const KANNADA_LEXICON = {
  "schemaVersion": 1,
  "entries": [
    {
      "id": "milk",
      "sanskrit": "ಕ್ಷೀರ",
      "meaning": "Milk",
      "category": "Everyday",
      "alternatives": [
        {
          "id": "halu",
          "word": "ಹಾಲು",
          "note": "Most common Kannada form Contributor-supplied candidate; semantic fit and word origin pending editorial review. Comparative evidence: Proto-Dravidian *pāl ‘milk’; Tamil பால் (pāl); Kannada hālu is the regular Kannada reflex; Tulu pērī is recorded in the comparative source, with the vowel/consonant developments specifically noted as irregular in Tulu (DEDR 4096). A scholarly comparison also records Kannada hālu, Tamil pāl and Telugu pālu under DEDR 4096. Sources: DEDR 4096; The Dravidian Languages, §4.4.1; Francis Whyte Ellis and the Beginning of Comparative Dravidian Linguistics.",
          "proto": "*pāl",
          "tamil": "பால் (pāl)",
          "tulu": "ಪೇರ್ (pēr) / ಪಾಲ್",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಹಾಲು",
              "etymology": "unknown"
            },
            {
              "form": "ಹಾಲು",
              "etymology": "dravidian"
            }
          ],
          "evidenceVariants": {
            "tulu": [
              "ಪೇರ್ (pēr) / ಪಾಲ್",
              "pērī (irregular Tulu reflex; DEDR 4096)"
            ],
            "proto": [
              "*pāl",
              "*pāl (DEDR 4096)"
            ]
          },
          "editorialNote": ""
        }
      ],
      "sourceEtymology": {
        "form": "ಕ್ಷೀರ",
        "etymology": "sanskrit_tatsama"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology. Strong comparative set. Do not normalize Tulu pērī to pāl or conceal the irregular sound development; no Halegannada form is asserted here."
    },
    {
      "id": "snake",
      "sanskrit": "ಸರ್ಪ / ನಾಗ",
      "meaning": "Snake",
      "category": "Everyday",
      "alternatives": [
        {
          "id": "havu",
          "word": "ಹಾವು",
          "note": "Standard Kannada",
          "proto": "*pāmpu",
          "tamil": "பாம்பு (pāmpu)",
          "tulu": "ಪಾಮು / ಹಾವು"
        }
      ]
    },
    {
      "id": "tree",
      "sanskrit": "ವೃಕ್ಷ",
      "meaning": "Tree",
      "category": "Nature",
      "alternatives": [
        {
          "id": "mara",
          "word": "ಮರ",
          "note": "DEDR 4711 records Proto-Dravidian *mar-am / *mar-an ‘tree’, with Tamil maram, Kannada mara and Tulu mara. DEDR 4711 records Proto-Dravidian *mar-am / *mar-an ‘tree’, with Tamil maram, Kannada mara and Tulu mara. These are direct cognates.",
          "proto": "*mar-am / *mar-an (tree; DEDR 4711)",
          "tamil": "மரம் (maram; tree, wood, timber; DEDR 4711)",
          "tulu": "mara (tree; DEDR 4711)",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಮರ",
              "etymology": "dravidian"
            }
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-025-2",
          "word": "ಗಿಡ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗಿಡ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ವೃಕ್ಷ",
        "etymology": "unknown"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "house",
      "sanskrit": "ಭವನ",
      "meaning": "House",
      "category": "Everyday",
      "alternatives": [
        {
          "id": "mane",
          "word": "ಮನೆ",
          "note": "Everyday native Comparative evidence: Proto-Dravidian *man-ay ‘house’; Tamil maṉai (மனை) ‘house, dwelling’; Kannada mane ‘habitation, abode, house’; Kodava mane; Malayalam mana; Tulu manetana ‘household / household life’ are recorded under DEDR 4776. Tulu illu ‘house/home’ is a separate Dravidian house-word (DEDR 494), not the Tulu cognate of *man-ay. The exact modern Tulu lexical equivalence and the historical Old Kannada spelling still need primary dictionary/corpus confirmation. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": "*manay",
          "tamil": "மனை (maṉai)",
          "tulu": "ಇಲ್ಲ್ / ಮನೆ",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "etymology-entries.js:audited",
            "contributor-equivalents.js"
          ],
          "etymologyParts": [
            {
              "form": "ಮನೆ",
              "etymology": "dravidian"
            },
            {
              "form": "ಮನೆ",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "evidenceVariants": {
            "tamil": [
              "மனை (maṉai)",
              "மனை (maṉai; house, dwelling; DEDR 4776)"
            ],
            "tulu": [
              "ಇಲ್ಲ್ / ಮನೆ",
              "manetana (household, household life; DEDR 4776); illu (house/home; separate root, DEDR 494)"
            ],
            "proto": [
              "*manay",
              "*man-ay (house; DEDR 4776)"
            ]
          },
          "editorialNote": ""
        },
        {
          "id": "contrib-293-2",
          "word": "ಕಟ್ಟಡ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಟ್ಟಡ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        },
        {
          "id": "contrib-293-3",
          "word": "ಅರಮನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅರಮನೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ಭವನ",
        "etymology": "unknown"
      },
      "halegannada": "ಮನೆ",
      "halegannadaEvidence": {
        "status": "not_yet_verified",
        "note": "The modern Kannada form is well established, but a primary Old Kannada inscription or dated literary citation has not yet been attached. Do not display this as a verified Halegannada attestation."
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied audit; not independently certified. DEDR 4776; contributor-supplied Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "water",
      "sanskrit": "ಜಲ",
      "meaning": "Water",
      "category": "Nature",
      "alternatives": [
        {
          "id": "niru",
          "word": "ನೀರು",
          "note": "Core native Dravidian",
          "proto": "*nīr",
          "tamil": "நீர் (nīr)",
          "tulu": "ನೀರ್ (nīr)",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "data.js",
            "etymology-entries.js:audited"
          ],
          "etymologyParts": [
            {
              "form": "ನೀರು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean",
          "editorialNote": ""
        }
      ],
      "sourceEtymology": {
        "form": "ಜಲ",
        "etymology": "sanskrit_tatsama"
      },
      "halegannada": "ನೀರ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Expected historical form; primary Old Kannada citation is still needed."
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian"
    },
    {
      "id": "flower",
      "sanskrit": "ಪುಷ್ಪ",
      "meaning": "Flower",
      "category": "Nature",
      "alternatives": [
        {
          "id": "huvu",
          "word": "ಹೂವು",
          "note": "Standard desi DEDR 4348 gives the Dravidian flower set: Proto-Dravidian *puy/*pūi (< *puH); Tamil pū; Kannada pū/pūvu; Tulu pū. ಹೂವು is the Kannada form in this native cognate family.",
          "proto": "*pū",
          "tamil": "பூ (pū)",
          "tulu": "ಪೂ / ಹೂವು",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಹೂವು",
              "etymology": "dravidian"
            }
          ],
          "evidenceVariants": {
            "tamil": [
              "பூ (pū)",
              "பூ (pū; flower, blossom; DEDR 4348)"
            ],
            "tulu": [
              "ಪೂ / ಹೂವು",
              "pū (flower; DEDR 4348)"
            ],
            "proto": [
              "*pū",
              "*puy / *pūi (< *puH; flower, blossom; DEDR 4348)"
            ]
          },
          "editorialNote": ""
        },
        {
          "id": "contrib-026-2",
          "word": "ಅಲರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಲರು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        },
        {
          "id": "contrib-026-3",
          "word": "ಮಲರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಲರು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ಪುಷ್ಪ",
        "etymology": "unknown"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "bird",
      "sanskrit": "ಪಕ್ಷಿ",
      "meaning": "Bird",
      "category": "Nature",
      "alternatives": [
        {
          "id": "hakki",
          "word": "ಹಕ್ಕಿ",
          "note": "Widely preferred Historical Kannada ಪಕ್ಕಿ (pakki) is traced to Prakrit pakkhi, from Sanskrit pakṣī; ಹಕ್ಕಿ is therefore not a secure native Dravidian alternative. Keep it as a familiar Kannada word, but do not classify it as a Dravidian cognate.",
          "proto": "*paṟava",
          "tamil": "பறவை (paṟavai)",
          "tulu": "ಪಕ್ಕಿ / ಹಕ್ಕಿ",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಹಕ್ಕಿ",
              "etymology": "tadbhava"
            }
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-029-2",
          "word": "ಪಕ್ಕಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪಕ್ಕಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ಪಕ್ಷಿ",
        "etymology": "unknown"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "cloth",
      "sanskrit": "ವಸ್ತ್ರ",
      "meaning": "Cloth / Clothes",
      "category": "Everyday",
      "alternatives": [
        {
          "id": "batte",
          "word": "ಬಟ್ಟೆ",
          "note": "Common spoken Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": "*vaṭṭi",
          "tamil": "ஆடை / துணி",
          "tulu": "ಬಟ್ಟೆ",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಟ್ಟೆ",
              "etymology": "unknown"
            }
          ],
          "editorialNote": ""
        },
        {
          "id": "udupu",
          "word": "ಉಡುಪು",
          "note": "Native Kannada; clothing or attire, often a good contextual alternative to ವಸ್ತ್ರ",
          "proto": null,
          "tamil": "உடை (uṭai)",
          "tulu": null,
          "sourceDataset": "data.js",
          "sources": [
            "data.js"
          ]
        },
        {
          "id": "contrib-093-2",
          "word": "ಉಡುಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಉಡುಗೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        },
        {
          "id": "contrib-093-3",
          "word": "ಸೀರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸೀರೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ವಸ್ತ್ರ",
        "etymology": "unknown"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "food",
      "sanskrit": "ಭೋಜನ",
      "meaning": "Meal / Food",
      "category": "Everyday",
      "alternatives": [
        {
          "id": "uta",
          "word": "ಊಟ",
          "note": "Most natural spoken form Meal sense Contributor-supplied candidate; semantic fit and word origin pending editorial review. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": "*ūṭu",
          "tamil": "உணவு / சோறு",
          "tulu": "ಊಟ",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "etymology-entries.js:audited",
            "contributor-equivalents.js"
          ],
          "etymologyParts": [
            {
              "form": "ಊಟ",
              "etymology": "dravidian"
            },
            {
              "form": "ಊಟ",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "editorialNote": ""
        },
        {
          "id": "tindi",
          "word": "ತಿಂಡಿ",
          "note": "DEDR 3263: Kannada tiṇḍi, Tamil tiṇṭi and Tulu tīnů/tīni belong to the Dravidian eat/food word-family; the listed Proto-Dravidian form is the verbal root. DEDR 3263 records Proto-Dravidian *tiHn- ‘to eat’; Tamil tiṇṭi ‘eatables’, Kannada tiṇḍi ‘food’ and Tulu tīnů/tīni ‘food, meal’. The cognate family is clear, though the nominal meanings are not identical in every language.",
          "proto": "*tiHn- (to eat; DEDR 3263)",
          "tamil": "திண்டி (tiṇṭi; eatables)",
          "tulu": "tīnů / tīni (food, meal; DEDR 3263)",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ತಿಂಡಿ",
              "etymology": "dravidian"
            }
          ],
          "evidenceVariants": {
            "tamil": [
              "திண்டி (tiṇṭi; eatables)",
              "திண்டி (tiṇṭi; eatables; DEDR 3263)"
            ]
          },
          "editorialNote": ""
        },
        {
          "id": "contrib-091-1",
          "word": "ಕೂಳು",
          "note": "DEDR 1911 identifies Kannada kūḻ (ಕೂಳು) ‘boiled rice, food’ as part of Proto-Dravidian *kūḻ ‘porridge’. Tamil kūḻ means thick gruel/porridge; Tulu kūru/kūlu/kūḷu means boiled rice. This is a genuine cognate set, but the meanings range from porridge to boiled rice and food; it should not be treated as an exact synonym for every use of ‘food’.",
          "proto": "*kūḻ (porridge; DEDR 1911)",
          "tamil": "கூழ் (kūḻ; thick gruel, porridge)",
          "tulu": "kūru / kūlu / kūḷu (boiled rice)",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಕೂಳು",
              "etymology": "dravidian"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-135-3",
          "word": "ತಿನಿಸು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿನಿಸು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ಭೋಜನ",
        "etymology": "unknown"
      },
      "halegannada": "ಊಟ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Meal sense; not a universal equivalent for every sense of ಆಹಾರ. Primary Old Kannada citation is still needed."
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied audit; not independently certified. Meal sense Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "village",
      "sanskrit": "ಗ್ರಾಮ",
      "meaning": "Village",
      "category": "Society",
      "alternatives": [
        {
          "id": "halli",
          "word": "ಹಳ್ಳಿ",
          "note": "Common native Dravidian",
          "proto": "*paḷḷi / *ūr",
          "tamil": "ஊர் (ūr)",
          "tulu": "ಊರು / ಹಳ್ಳಿ",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "data.js",
            "etymology-entries.js:audited"
          ],
          "etymologyParts": [
            {
              "form": "ಹಳ್ಳಿ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean",
          "editorialNote": ""
        }
      ],
      "sourceEtymology": {
        "form": "ಗ್ರಾಮ",
        "etymology": "sanskrit_tatsama"
      },
      "halegannada": "ಊರು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Expected historical cognate; primary Old Kannada citation is still needed."
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian"
    },
    {
      "id": "lamp",
      "sanskrit": "ದೀಪ",
      "meaning": "Lamp / Light",
      "category": "Everyday",
      "alternatives": [
        {
          "id": "sodaru",
          "word": "ಸೊಡರು",
          "note": "Pure Kannada form",
          "proto": "*cuṭar",
          "tamil": "சுடர் (cuṭar)",
          "tulu": "ಸೊಡರು",
          "sourceDataset": "data.js",
          "sources": [
            "data.js"
          ]
        },
        {
          "id": "contrib-100-1",
          "word": "ಹಣತೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಣತೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        },
        {
          "id": "contrib-100-2",
          "word": "ದೀವಟಿಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದೀವಟಿಗೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        },
        {
          "id": "contrib-100-3",
          "word": "ಬೆಳಕು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೆಳಕು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ದೀಪ",
        "etymology": "unknown"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "path",
      "sanskrit": "ಮಾರ್ಗ",
      "meaning": "Path / Way",
      "category": "Everyday",
      "alternatives": [
        {
          "id": "dari",
          "word": "ದಾರಿ",
          "note": "Everyday native Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": "*vaḻi",
          "tamil": "வழி (vaḻi)",
          "tulu": "ದಾರಿ",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದಾರಿ",
              "etymology": "unknown"
            }
          ],
          "editorialNote": ""
        },
        {
          "id": "haadi",
          "word": "ಹಾದಿ",
          "note": "Native Kannada synonym for path or way Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": null,
          "tamil": null,
          "tulu": null,
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಾದಿ",
              "etymology": "unknown"
            }
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-096-3",
          "word": "ಬೀದಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೀದಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        },
        {
          "id": "contrib-096-4",
          "word": "ಓಣಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಓಣಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ಮಾರ್ಗ",
        "etymology": "unknown"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "sun",
      "sanskrit": "ಸೂರ್ಯ",
      "meaning": "Sun",
      "category": "Nature",
      "alternatives": [
        {
          "id": "nesara",
          "word": "ನೇಸರ",
          "note": "Classic Kannada",
          "proto": "*ñāyiṟu",
          "tamil": "ஞாயிறு (ñāyiṟu)",
          "tulu": "ನೇಸರ"
        }
      ]
    },
    {
      "id": "night",
      "sanskrit": "ರಾತ್ರಿ",
      "meaning": "Night",
      "category": "Nature",
      "alternatives": [
        {
          "id": "irulu",
          "word": "ಇರುಳು",
          "note": "Strong desi Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": "*irul",
          "tamil": "இருள் (iruḷ)",
          "tulu": "ಇರುಳು",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಇರುಳು",
              "etymology": "unknown"
            }
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-033-2",
          "word": "ಕತ್ತಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕತ್ತಲು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ರಾತ್ರಿ",
        "etymology": "unknown"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "fire",
      "sanskrit": "ಅಗ್ನಿ",
      "meaning": "Fire",
      "category": "Nature",
      "alternatives": [
        {
          "id": "benki",
          "word": "ಬೆಂಕಿ",
          "note": "Everyday native",
          "proto": "*veṅkay",
          "tamil": "நெருப்பு",
          "tulu": "ಬೆಂಕಿ"
        },
        {
          "id": "kichchu",
          "word": "ಕಿಚ್ಚು",
          "note": "Native Kannada word for fire or flame; expressive / literary in some contexts",
          "proto": null,
          "tamil": "தீ (tī)",
          "tulu": null
        }
      ]
    },
    {
      "id": "sky",
      "sanskrit": "ಆಕಾಶ",
      "meaning": "Sky",
      "category": "Nature",
      "alternatives": [
        {
          "id": "agasa",
          "word": "ಆಗಸ",
          "note": "Widely used desi",
          "proto": null,
          "tamil": "வானம் (vāṉam)",
          "tulu": "ಆಗಸ"
        },
        {
          "id": "baanu",
          "word": "ಬಾನು",
          "note": "Poetic / literary Kannada word for sky",
          "proto": null,
          "tamil": null,
          "tulu": null
        }
      ]
    },
    {
      "id": "earth",
      "sanskrit": "ಭೂಮಿ",
      "meaning": "Earth / Ground",
      "category": "Nature",
      "alternatives": [
        {
          "id": "nela",
          "word": "ನೆಲ",
          "note": "Core native Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": "*nilam",
          "tamil": "நிலம் (nilam)",
          "tulu": "ನೆಲ",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೆಲ",
              "etymology": "unknown"
            }
          ],
          "editorialNote": ""
        },
        {
          "id": "mannu",
          "word": "ಮಣ್ಣು",
          "note": "DEDR 4666 records Kannada maṇ/maṇṇu, Tamil maṇ and Tulu maṇṇů for earth, soil or clay; use for ground/soil rather than the planet as a whole. DEDR 4666 records Tamil maṇ, Kannada maṇ/maṇṇu and Tulu maṇṇů for earth, soil and ground. The entry supplies no Proto-Dravidian reconstruction, so none is asserted here.",
          "proto": null,
          "tamil": "மண் (maṇ; soil, earth; DEDR 4666)",
          "tulu": "maṇṇů (soil, earth, clay; DEDR 4666)",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಮಣ್ಣು",
              "etymology": "dravidian"
            }
          ],
          "evidenceVariants": {
            "tamil": [
              "மண் (maṇ; soil, earth; DEDR 4666)",
              "மண் (maṇ; earth, soil, land; DEDR 4666)"
            ],
            "tulu": [
              "maṇṇů (soil, earth, clay; DEDR 4666)",
              "maṇṇů (earth, clay, soil; DEDR 4666)"
            ]
          },
          "editorialNote": ""
        },
        {
          "id": "contrib-021-3",
          "word": "ಇಳೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಇಳೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ಭೂಮಿ",
        "etymology": "unknown"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "wind",
      "sanskrit": "ವಾಯು",
      "meaning": "Wind / Air",
      "category": "Nature",
      "alternatives": [
        {
          "id": "gali",
          "word": "ಗಾಳಿ",
          "note": "Everyday Kannada",
          "proto": "*kāṟṟu",
          "tamil": "காற்று (kāṟṟu)",
          "tulu": "ಗಾಳಿ"
        }
      ]
    },
    {
      "id": "rain",
      "sanskrit": "ವರ್ಷ",
      "meaning": "Rain",
      "category": "Nature",
      "alternatives": [
        {
          "id": "male",
          "word": "ಮಳೆ",
          "note": "Standard native Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": "*maḻai",
          "tamil": "மழை (maḻai)",
          "tulu": "ಮಳೆ",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಳೆ",
              "etymology": "unknown"
            }
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-024-2",
          "word": "ಸೋನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸೋನೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ವರ್ಷ",
        "etymology": "unknown"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "mountain",
      "sanskrit": "ಪರ್ವತ",
      "meaning": "Mountain",
      "category": "Nature",
      "alternatives": [
        {
          "id": "betta",
          "word": "ಬೆಟ್ಟ",
          "note": "Common Kannada Dravidian",
          "proto": "*veṭṭam",
          "tamil": "மலை (malai)",
          "tulu": "ಬೆಟ್ಟ",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "data.js",
            "etymology-entries.js:audited"
          ],
          "etymologyParts": [
            {
              "form": "ಬೆಟ್ಟ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean",
          "editorialNote": ""
        },
        {
          "id": "male",
          "word": "ಮಲೆ",
          "note": "Native / literary word for mountain or hill; usage varies by region and context",
          "proto": null,
          "tamil": "மலை (malai)",
          "tulu": null,
          "sourceDataset": "data.js",
          "sources": [
            "data.js"
          ]
        }
      ],
      "sourceEtymology": {
        "form": "ಪರ್ವತ",
        "etymology": "sanskrit_tatsama"
      },
      "halegannada": "ಬೆಟ್ಟ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Historical comparison form; primary Old Kannada citation is still needed."
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian"
    },
    {
      "id": "forest",
      "sanskrit": "ಅರಣ್ಯ / ವನ",
      "meaning": "Forest",
      "category": "Nature",
      "alternatives": [
        {
          "id": "kadu",
          "word": "ಕಾಡು",
          "note": "Very common spoken Dravidian Contributor-supplied comparison; confidence: high.",
          "proto": "*kāṭu",
          "tamil": "காடு (kāṭu)",
          "tulu": "ಕಾಡು",
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "data.js",
            "etymology-entries.js:audited",
            "etymology-entries.js:origin-audit"
          ],
          "etymologyParts": [
            {
              "form": "ಕಾಡು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean",
          "evidenceVariants": {
            "tulu": [
              "ಕಾಡು",
              "ಕಾಡ್"
            ]
          },
          "editorialNote": ""
        }
      ],
      "sourceEtymology": {
        "form": "ಅರಣ್ಯ / ವನ",
        "etymology": "sanskrit_tatsama"
      },
      "halegannada": "ಕಾಡು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian Contributor-supplied comparison; confidence: high."
    },
    {
      "id": "hand",
      "sanskrit": "ಹಸ್ತ",
      "meaning": "Hand",
      "category": "Body",
      "alternatives": [
        {
          "id": "kai",
          "word": "ಕೈ",
          "note": "Core Dravidian",
          "proto": "*kay",
          "tamil": "கை (kai)",
          "tulu": "ಕೈ (kai)"
        }
      ]
    },
    {
      "id": "eye",
      "sanskrit": "ನಯನ / ನೇತ್ರ / ಅಕ್ಷಿ",
      "meaning": "Eye",
      "category": "Body",
      "alternatives": [
        {
          "id": "kannu",
          "word": "ಕಣ್ಣು",
          "note": "Core native",
          "proto": "*kaṇ",
          "tamil": "கண் (kaṇ)",
          "tulu": "ಕಣ್ / ಕಣ್ಣು"
        }
      ]
    },
    {
      "id": "head",
      "sanskrit": "ಶಿರ",
      "meaning": "Head",
      "category": "Body",
      "alternatives": [
        {
          "id": "tale",
          "word": "ತಲೆ",
          "note": "Core native Contributor-supplied comparison; confidence: high. DEDR 3103 records Proto-Dravidian *tal-ay ‘head, hair, top’: Tamil talai, Kannada tale and Tulu tarè. The proposed Kannada word ತಲೆ is directly supported by this cognate set.",
          "proto": "*talay",
          "tamil": "தலை (talai)",
          "tulu": "ತರೆ / ತಲೆ",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ತಲೆ",
              "etymology": "dravidian"
            }
          ],
          "evidenceVariants": {
            "tamil": [
              "தலை (talai)",
              "தலை (talai; head, top; DEDR 3103)"
            ],
            "tulu": [
              "ತರೆ",
              "tarè (head, top, hair of head; DEDR 3103)",
              "ತರೆ / ತಲೆ"
            ],
            "proto": [
              "*talai",
              "*tal-ay (head, hair, top; DEDR 3103)",
              "*talay"
            ]
          },
          "editorialNote": ""
        },
        {
          "id": "contrib-042-2",
          "word": "ನೆತ್ತಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೆತ್ತಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ಶಿರ",
        "etymology": "unknown"
      },
      "halegannada": "ತಲೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied comparison; confidence: high. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "tooth",
      "sanskrit": "ದಂತ",
      "meaning": "Tooth",
      "category": "Body",
      "alternatives": [
        {
          "id": "hallu",
          "word": "ಹಲ್ಲು",
          "note": "Everyday form DEDR 3986 reconstructs Proto-Dravidian *pal ‘tooth’ and records Tamil pal and Tulu paru ‘animal’s tooth’. Kannada’s modern hallu continues Old Kannada pal, with the regular historical change of word-initial p to h in Kannada; this is a genuine cognate, not a resemblance based only on meaning.",
          "proto": "*pal",
          "tamil": "பல் (pal)",
          "tulu": "ಪಲ್ಲ್ / ಹಲ್ಲು",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಹಲ್ಲು",
              "etymology": "dravidian"
            }
          ],
          "evidenceVariants": {
            "tamil": [
              "பல் (pal)",
              "பல் (pal; tooth)"
            ],
            "tulu": [
              "ಪಲ್ಲ್ / ಹಲ್ಲು",
              "paru (animal's tooth)"
            ],
            "proto": [
              "*pal",
              "*pal (tooth; DEDR 3986)"
            ]
          },
          "editorialNote": ""
        }
      ],
      "sourceEtymology": {
        "form": "ದಂತ",
        "etymology": "unknown"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "leg",
      "sanskrit": "ಪಾದ",
      "meaning": "Leg / Foot",
      "category": "Body",
      "alternatives": [
        {
          "id": "kalu",
          "word": "ಕಾಲು",
          "note": "Core native",
          "proto": "*kāl",
          "tamil": "கால் (kāl)",
          "tulu": "ಕಾರ್ / ಕಾಲು"
        }
      ]
    },
    {
      "id": "ear",
      "sanskrit": "ಕರ್ಣ",
      "meaning": "Ear",
      "category": "Body",
      "alternatives": [
        {
          "id": "kivi",
          "word": "ಕಿವಿ",
          "note": "DEDR 1977 lists Proto-Dravidian *kew-i ‘ear’, Tamil cevi, Kannada kivi and Tulu kebi. Tamil kātu is a semantic equivalent but not the cognate form. DEDR 1977 records Proto-Dravidian *kew-i ‘ear’, with Tamil cevi, Kannada kivi and Tulu kebi. These are direct cognates.",
          "proto": "*kew-i (ear; DEDR 1977)",
          "tamil": "செவி (cevi; ear; DEDR 1977)",
          "tulu": "kebi (ear; DEDR 1977)",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಕಿವಿ",
              "etymology": "dravidian"
            }
          ],
          "editorialNote": ""
        }
      ],
      "sourceEtymology": {
        "form": "ಕರ್ಣ",
        "etymology": "unknown"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "nose",
      "sanskrit": "ನಾಸಿಕ",
      "meaning": "Nose",
      "category": "Body",
      "alternatives": [
        {
          "id": "mugu",
          "word": "ಮೂಗು",
          "note": "Everyday native Contributor-supplied comparison; confidence: high. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": "*mūkku",
          "tamil": "மூக்கு (mūkku)",
          "tulu": "ಮೂಗು",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೂಗು",
              "etymology": "dravidian"
            },
            {
              "form": "ಮೂಗು",
              "etymology": "unknown"
            }
          ],
          "evidenceVariants": {
            "tulu": [
              "ಮೂಗು",
              "ಮೂಂಕು"
            ]
          },
          "editorialNote": ""
        }
      ],
      "sourceEtymology": {
        "form": "ನಾಸಿಕ",
        "etymology": "sanskrit_tatsama"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied comparison; confidence: high. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "mouth",
      "sanskrit": "ಮುಖ / ಆಸ್ಯ",
      "meaning": "Mouth",
      "category": "Body",
      "alternatives": [
        {
          "id": "bayi",
          "word": "ಬಾಯಿ",
          "note": "Standard native",
          "proto": "*vāy",
          "tamil": "வாய் (vāy)",
          "tulu": "ಬಾಯಿ"
        }
      ]
    },
    {
      "id": "blood",
      "sanskrit": "ರಕ್ತ",
      "meaning": "Blood",
      "category": "Body",
      "alternatives": [
        {
          "id": "nettaru",
          "word": "ನೆತ್ತರು",
          "note": "Native form Tamil literary குருதி is Sanskrit-derived; spoken cognate is marginal. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": "*nettar",
          "tamil": "இரத்தம்",
          "tulu": "ನೆತ್ತೆರ್",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೆತ್ತರು",
              "etymology": "unknown"
            }
          ],
          "evidenceVariants": {
            "tamil": [
              "இரத்தம்",
              "குருதி (Skt.) / நெட்டை"
            ],
            "tulu": [
              "ನೆತ್ತೆರ್",
              "ನೆತ್ತರು"
            ],
            "proto": [
              "*nettar",
              "*nettVr"
            ]
          },
          "editorialNote": ""
        }
      ],
      "sourceEtymology": {
        "form": "ರಕ್ತ",
        "etymology": "sanskrit_tatsama"
      },
      "halegannada": "ನೆತ್ತರ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Tamil literary குருதி is Sanskrit-derived; spoken cognate is marginal. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "hair",
      "sanskrit": "ಕೇಶ",
      "meaning": "Hair",
      "category": "Body",
      "alternatives": [
        {
          "id": "kudalu",
          "word": "ಕೂದಲು",
          "note": "Standard desi Contributor-supplied comparison; confidence: medium. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": "*kūtal",
          "tamil": "கூந்தல்",
          "tulu": "ಕೂದಲು",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೂದಲು",
              "etymology": "unknown"
            }
          ],
          "evidenceVariants": {
            "tamil": [
              "கூந்தல்",
              "கூந்தல் (kūntal)"
            ],
            "tulu": [
              "ಕೂದಲು",
              "ಕೂದಲ್"
            ],
            "proto": [
              "*kūtal",
              "*kūntal"
            ]
          },
          "editorialNote": ""
        },
        {
          "id": "contrib-043-2",
          "word": "ಮುಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮುಡಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ಕೇಶ",
        "etymology": "sanskrit_tatsama"
      },
      "halegannada": "ಕೂದಲ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "north",
      "sanskrit": "ಉತ್ತರ",
      "meaning": "North",
      "category": "Directions",
      "alternatives": [
        {
          "id": "badagana",
          "word": "ಬಡಗಣ",
          "note": "Traditional directional",
          "proto": "*vaṭakk-",
          "tamil": "வடக்கு (vaṭakku)",
          "tulu": "ಬಡಕಾಯಿ"
        }
      ]
    },
    {
      "id": "south",
      "sanskrit": "ದಕ್ಷಿಣ",
      "meaning": "South",
      "category": "Directions",
      "alternatives": [
        {
          "id": "tenkana",
          "word": "ತೆಂಕಣ",
          "note": "Traditional directional Dravidian",
          "proto": "*teṉk-",
          "tamil": "தெற்கு (teṟku)",
          "tulu": "ತೆಂಕಾಯಿ",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "data.js",
            "etymology-entries.js:audited"
          ],
          "etymologyParts": [
            {
              "form": "ತೆಂಕಣ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean",
          "editorialNote": ""
        }
      ],
      "sourceEtymology": {
        "form": "ದಕ್ಷಿಣ",
        "etymology": "sanskrit_tatsama"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian"
    },
    {
      "id": "east",
      "sanskrit": "ಪೂರ್ವ",
      "meaning": "East",
      "category": "Directions",
      "alternatives": [
        {
          "id": "mudana",
          "word": "ಮೂಡಣ",
          "note": "Traditional directional Dravidian",
          "proto": "*mūṭal",
          "tamil": "கிழக்கு (kiḻakku)",
          "tulu": "ಮೂಡಾಯಿ",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "data.js",
            "etymology-entries.js:audited"
          ],
          "etymologyParts": [
            {
              "form": "ಮೂಡಣ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean",
          "editorialNote": ""
        }
      ],
      "sourceEtymology": {
        "form": "ಪೂರ್ವ",
        "etymology": "sanskrit_tatsama"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian"
    },
    {
      "id": "west",
      "sanskrit": "ಪಶ್ಚಿಮ",
      "meaning": "West",
      "category": "Directions",
      "alternatives": [
        {
          "id": "paduvana",
          "word": "ಪಡುವಣ",
          "note": "Traditional directional Dravidian",
          "proto": "*paṭu",
          "tamil": "மேற்கு (mēṟku)",
          "tulu": "ಪಡ್ಡಾಯಿ",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "data.js",
            "etymology-entries.js:audited"
          ],
          "etymologyParts": [
            {
              "form": "ಪಡುವಣ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean",
          "editorialNote": ""
        }
      ],
      "sourceEtymology": {
        "form": "ಪಶ್ಚಿಮ",
        "etymology": "sanskrit_tatsama"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian"
    },
    {
      "id": "language",
      "sanskrit": "ಭಾಷೆ",
      "meaning": "Language",
      "category": "Abstract",
      "alternatives": [
        {
          "id": "nudi",
          "word": "ನುಡಿ",
          "note": "Kannada nuḍi and Tulu nuḍi are listed under DEDR 3784, with Proto-Dravidian *noṭ-V- ‘to say’. Tamil moḻi is a semantic equivalent, not the same cognate form. Dravidian",
          "proto": "*noṭ-V- (to say; DEDR 3784)",
          "tamil": "மொழி (moḻi; semantic equivalent, not the same cognate)",
          "tulu": "nuḍi (word, speech, saying; DEDR 3784)",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "data.js",
            "etymology-entries.js:audited"
          ],
          "etymologyParts": [
            {
              "form": "ನುಡಿ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean",
          "editorialNote": ""
        }
      ],
      "sourceEtymology": {
        "form": "ಭಾಷೆ",
        "etymology": "sanskrit_tatsama"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian"
    },
    {
      "id": "friend",
      "sanskrit": "ಮಿತ್ರ",
      "meaning": "Friend",
      "category": "People",
      "alternatives": [
        {
          "id": "geleya",
          "word": "ಗೆಳೆಯ",
          "note": "Native form Contributor-supplied comparison; confidence: low.",
          "proto": "*keḷi",
          "tamil": "நண்பன்",
          "tulu": "ಗೆಳೆಯೆ",
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "data.js",
            "etymology-entries.js:origin-audit"
          ],
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಗೆಳೆಯ",
              "etymology": "unknown"
            }
          ],
          "evidenceVariants": {
            "tamil": [
              "நண்பன்",
              "நண்பன் (different)"
            ],
            "tulu": [
              "ಗೆಳೆಯೆ",
              "ಗೆಳೆಯ"
            ]
          },
          "editorialNote": ""
        }
      ],
      "sourceEtymology": {
        "form": "ಮಿತ್ರ",
        "etymology": "sanskrit_tatsama"
      },
      "halegannada": "ಗೆಳೆಯ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied comparison; confidence: low."
    },
    {
      "id": "name",
      "sanskrit": "ನಾಮ",
      "meaning": "Name",
      "category": "Abstract",
      "alternatives": [
        {
          "id": "hesaru",
          "word": "ಹೆಸರು",
          "note": "Standard native",
          "proto": "*peyar",
          "tamil": "பெயர் (peyar)",
          "tulu": "ಪುದರ್ / ಹೆಸರು"
        }
      ]
    },
    {
      "id": "life",
      "sanskrit": "ಜೀವನ",
      "meaning": "Life",
      "category": "Other",
      "alternatives": [
        {
          "id": "baduku",
          "word": "ಬದುಕು",
          "note": "Living / life (native) Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": "*vāḻ",
          "tamil": "வாழ்க்கை (vāḻkkai)",
          "tulu": "ಬದ್ಕ್",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬದುಕು",
              "etymology": "unknown"
            }
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-300-2",
          "word": "ಬಾಳು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಾಳು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        },
        {
          "id": "contrib-300-3",
          "word": "ಉಸಿರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಉಸಿರು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ಜೀವನ",
        "etymology": "unknown"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "death",
      "sanskrit": "ಮರಣ",
      "meaning": "Death",
      "category": "Society",
      "alternatives": [
        {
          "id": "savu",
          "word": "ಸಾವು",
          "note": "Everyday native Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": "*cāvu",
          "tamil": "சாவு (cāvu)",
          "tulu": "ಸಾವು",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಾವು",
              "etymology": "unknown"
            }
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-224-2",
          "word": "ಅಳಿವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಳಿವು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        },
        {
          "id": "contrib-224-3",
          "word": "ತೀರಿಕೊಳ್ಳುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೀರಿಕೊಳ್ಳುವಿಕೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ಮರಣ",
        "etymology": "unknown"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "king",
      "sanskrit": "ರಾಜ",
      "meaning": "King",
      "category": "Abstract",
      "alternatives": [
        {
          "id": "arasu",
          "word": "ಅರಸು",
          "note": "Native ruler term",
          "proto": "*aracu",
          "tamil": "அரசு / அரசன்",
          "tulu": "ಅರಸು"
        }
      ]
    },
    {
      "id": "knowledge",
      "sanskrit": "ಜ್ಞಾನ",
      "meaning": "Knowledge",
      "category": "Mind",
      "alternatives": [
        {
          "id": "kalike",
          "word": "ಕಲಿಕೆ",
          "note": "Learning Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": "*kal",
          "tamil": "கல்வி (kalvi)",
          "tulu": "ಕಲ್ಪು",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "contributor-equivalents.js"
          ],
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಲಿಕೆ",
              "etymology": "unknown"
            }
          ],
          "editorialNote": ""
        },
        {
          "id": "alt-supp-knowledge",
          "word": "ಅರಿವು / ಅರಿಮೆ",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "அறிவு (aṟivu)",
          "tulu": "ತೆರಿಪು",
          "proto": "*aṟi",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಅರಿವು / ಅರಿಮೆ",
              "etymology": "dravidian"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-071-2",
          "word": "ಅರಿವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅರಿವು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "editorialNote": "",
          "tamil": null,
          "tulu": null,
          "proto": null
        },
        {
          "id": "contrib-071-3",
          "word": "ಓದು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಓದು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        },
        {
          "id": "contrib-102-2",
          "word": "ತಿಳಿವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿಳಿವು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        },
        {
          "id": "contrib-102-3",
          "word": "ಎಚ್ಚರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಚ್ಚರ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ಜ್ಞಾನ",
        "etymology": "sanskrit_tatsama"
      },
      "halegannada": "ಅರಿವು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied comparison; confidence: high. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "listen",
      "sanskrit": "ಶ್ರವಣ",
      "meaning": "Listening; to listen",
      "category": "Action",
      "halegannada": "ಆಲಿಸು",
      "halegannadaEvidence": {
        "status": "provisional",
        "sourceTitle": "P. V. Narayana, Champu Nudigannadi — digitised dictionary transcription",
        "sourceUrl": "https://github.com/omshivaprakash/Indic-dictionaries/blob/main/%5BKA%5D%20Champu%20Nudigannadi/Raw%20Scraped%20Data/%E0%B2%86_champunudi.csv",
        "evidenceType": "Scraped dictionary entry with literary citation",
        "note": "The digitised entry glosses ಆಲಿಸು as ಗಮನವಿರಿಸಿ ಕೇಳು and cites ಪಂಪಭಾ 1.142 (ಧನುರ್ಲತಾಗುಣನಿನಾದಮಂ ಆಲಿಸಿ ಕೇಳಲುಳ). Confirm the reading and gloss against the printed dictionary and scholarly edition before marking verified."
      },
      "alternatives": [
        {
          "id": "kelu",
          "word": "ಕೇಳು",
          "note": "Native Kannada",
          "proto": "*kēḷ",
          "tamil": "கேள் (kēḷ)",
          "tulu": "ಕೇಳ್ (kēḷ)",
          "sourceDataset": "data.js",
          "sources": [
            "data.js"
          ]
        },
        {
          "id": "contrib-134-1",
          "word": "ಕೇಳುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೇಳುವಿಕೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        },
        {
          "id": "contrib-134-2",
          "word": "ಆಲಿಸುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಆಲಿಸುವಿಕೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ಶ್ರವಣ",
        "etymology": "unknown"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "shop",
      "sanskrit": "ಆಪಣ",
      "meaning": "Shop / marketplace",
      "category": "Everyday",
      "halegannada": "ಆವಣ",
      "halegannadaEvidence": {
        "status": "provisional",
        "sourceTitle": "P. V. Narayana, Champu Nudigannadi — digitised dictionary transcription",
        "sourceUrl": "https://github.com/omshivaprakash/Indic-dictionaries/blob/main/%5BKA%5D%20Champu%20Nudigannadi/Raw%20Scraped%20Data/%E0%B2%86_champunudi.csv",
        "evidenceType": "Scraped dictionary entry with literary citation",
        "note": "The digitised entry glosses ಆವಣ as ಆಪಣ / ಅಂಗಡಿ and cites ಹರಿವಂಶ 1.24 (ಆವರದ ಎಡೆಯ ಆವಣಂಗಳೊಳ್ ಒಳವೆಂದುಂ). Confirm the original text reading and contextual sense before marking verified."
      },
      "alternatives": [
        {
          "id": "angadi",
          "word": "ಅಂಗಡಿ",
          "note": "Common Kannada",
          "proto": null,
          "tamil": "கடை (kaṭai)",
          "tulu": "ಅಂಗಡಿ (aṅgaḍi)"
        }
      ]
    },
    {
      "id": "cloud",
      "sanskrit": "ಮೇಘ",
      "meaning": "Cloud",
      "category": "Nature",
      "halegannada": "ಮೋಡ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "alternatives": [
        {
          "id": "moda",
          "word": "ಮೋಡ",
          "note": "Common Kannada Tamil மேகம் is the Sanskrit loan; native Tamil is முகில். Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "proto": null,
          "tamil": "மேகம் (mēkam)",
          "tulu": "ಮೋಡ (mōḍa)",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "data.js",
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೋಡ",
              "etymology": "unknown"
            }
          ],
          "evidenceVariants": {
            "tamil": [
              "மேகம் (mēkam)",
              "முகில் (mukil)"
            ],
            "tulu": [
              "ಮೋಡ (mōḍa)",
              "ಮೊಡ"
            ]
          },
          "editorialNote": ""
        },
        {
          "id": "contrib-023-2",
          "word": "ಮುಗಿಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮುಗಿಲು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": null,
          "tulu": null,
          "proto": null
        }
      ],
      "sourceEtymology": {
        "form": "ಮೇಘ",
        "etymology": "sanskrit_tatsama"
      },
      "rejectedAlternatives": [],
      "editorialNote": "Contributor-supplied comparison; confidence: low. Tamil மேகம் is the Sanskrit loan; native Tamil is முகில். Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology."
    },
    {
      "id": "curtain",
      "sanskrit": "ಯವನಿಕಾ",
      "meaning": "Curtain / screen",
      "category": "Everyday",
      "halegannada": "ಜವನಿಕೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "sourceTitle": "P. V. Narayana, Pampana Nudigani — digitised dictionary transcription",
        "sourceUrl": "https://github.com/omshivaprakash/Indic-dictionaries/blob/main/%5BKA%5D%20Pampana%20Nudigani/Raw%20Scraped%20Data/%E0%B2%9C_pampanudi.csv",
        "evidenceType": "Scraped dictionary entry with literary citation",
        "note": "The digitised entry glosses ಜವನಿಕೆ as ತೆರೆ and gives the derivational gloss [ಯವನಿಕಾ]; it cites ಆದಿಪು 9.20 (ನಿಲ್ತು ಜವನಿಕೆಯ ಮಱೆಯೊಳ್ ...). Confirm the spelling, sense and verse against the printed dictionary and scholarly edition before marking verified."
      },
      "alternatives": [
        {
          "id": "parade",
          "word": "ಪರದೆ",
          "note": "Common Kannada",
          "proto": null,
          "tamil": "திரை (tirai)",
          "tulu": "ಪರದೆ (parade)"
        }
      ]
    },
    {
      "id": "new",
      "sanskrit": "ನವ / ನವೀನ",
      "meaning": "New",
      "category": "Abstract",
      "halegannada": "ಪೊಸ",
      "halegannadaEvidence": {
        "status": "provisional",
        "sourceTitle": "Old Kannada grammatical discussion — Honalu; P. V. Narayana, ಪದಚರಿತೆ",
        "sourceUrl": "https://honalu.net/2013/05/29/%E0%B2%B6%E0%B2%AC%E0%B3%8D%E0%B2%A6%E0%B2%AE%E0%B2%A3%E0%B2%BF%E0%B2%A6%E0%B2%B0%E2%80%8D%E0%B3%8D%E0%B2%AA%E0%B2%A3%E0%B2%A6%E0%B2%B2%E0%B3%8D%E0%B2%B2%E0%B2%BF-%E0%B2%A4%E0%B2%B3%E0%B2%AE-3/",
        "evidenceType": "Secondary grammatical discussion and literary evidence",
        "note": "The article explicitly identifies ಪೊಸ as an Old Kannada adjectival base form. A literary transcription also contains ಪೊಸ. Verify against a scholarly edition and record the exact work/verse before marking verified."
      },
      "alternatives": [
        {
          "id": "hosa",
          "word": "ಹೊಸ",
          "note": "Native Kannada",
          "proto": "*putu",
          "tamil": "புது (putu)",
          "tulu": "ಪೊಸ (posa)"
        }
      ]
    },
    {
      "id": "sugarcane",
      "sanskrit": "ಇಕ್ಷು",
      "meaning": "Sugarcane",
      "category": "Nature",
      "halegannada": "ಕರ್ವು",
      "halegannadaEvidence": {
        "status": "provisional",
        "sourceTitle": "P. V. Narayana, Pampana Nudigani — digitised dictionary transcription; Kannada Prabha corroboration",
        "sourceUrl": "https://github.com/omshivaprakash/Indic-dictionaries/blob/main/%5BKA%5D%20Pampana%20Nudigani/Raw%20Scraped%20Data/%E0%B2%95_pampanudi.csv",
        "evidenceType": "Scraped dictionary entry with literary citation; secondary linguistic commentary",
        "note": "The digitised entry exact headword is ಕರ್ವು, glossed ಕಬ್ಬು, with a citation to ಪಂಪಭಾ 4.37v. Kannada Prabha also mentions ಕರ್ವು / ಕರ್ಬು. Prefer the dictionary headword ಕರ್ವು in this card; confirm the original edition and verse before marking verified."
      },
      "alternatives": [
        {
          "id": "kabbu",
          "word": "ಕಬ್ಬು",
          "note": "Common Kannada",
          "proto": null,
          "tamil": "கரும்பு (karumpu)",
          "tulu": null
        }
      ]
    },
    {
      "id": "city",
      "sourceForm": "ನಗರ",
      "sourceMeaning": "City",
      "category": "Society",
      "sourceEtymology": {
        "form": "ನಗರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-city",
          "word": "ಹೊಳಲು",
          "note": "Claimed DEDR 4555 (polal); spelling and sense require verification",
          "etymologyParts": [
            {
              "form": "ಹೊಳಲು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "etymology-entries.js:audited"
          ]
        },
        {
          "id": "alt-supp-city",
          "word": "ಊರು",
          "note": "ಪೇಟೆ is a Marathi loan; do not label it native. DEDR 752 records Proto-Dravidian *ūr ‘habitation, village, town’, with Tamil ūr, Kannada ūr and Tulu ūru. A direct cognate set for the settlement sense.",
          "tamil": "நகரம் (Skt.) / ஊர்",
          "tulu": "ಊರು",
          "proto": "*ūr",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಊರು / ಪೇಟೆ",
              "etymology": "unknown"
            },
            {
              "form": "ಊರು",
              "etymology": "dravidian"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "evidenceVariants": {
            "tamil": [
              "நகரம் (Skt.) / ஊர்",
              "ஊர் (ūr; village, town; DEDR 752)"
            ],
            "tulu": [
              "ಊರು",
              "ūru (village, town; DEDR 752)"
            ],
            "proto": [
              "*ūr",
              "*ūr (habitation, village, town; DEDR 752)"
            ]
          },
          "editorialNote": ""
        },
        {
          "id": "contrib-234-1",
          "word": "ಪಟ್ಟಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪಟ್ಟಣ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-234-3",
          "word": "ಬೀಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೀಡು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Claimed DEDR 4555 (polal); spelling and sense require verification Contributor-supplied comparison; confidence: medium. ಪೇಟೆ is a Marathi loan; do not label it native. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "halegannada": "ಊರ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "sources": [
        "etymology-entries.js:origin-audit",
        "contributor-equivalents.js"
      ],
      "contributorSupplied": true,
      "sanskrit": "ನಗರ",
      "meaning": "City",
      "rejectedAlternatives": []
    },
    {
      "id": "nation",
      "sourceForm": "ರಾಷ್ಟ್ರ",
      "sourceMeaning": "Nation",
      "category": "Society",
      "sourceEtymology": {
        "form": "ರಾಷ್ಟ್ರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-nation",
          "word": "ನಾಡು",
          "note": "Dravidian Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "etymologyParts": [
            {
              "form": "ನಾಡು",
              "etymology": "dravidian"
            },
            {
              "form": "ನಾಡು",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:audited",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-236-2",
          "word": "ದೇಶ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದೇಶ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-236-3",
          "word": "ಸೀಮೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸೀಮೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ರಾಷ್ಟ್ರ",
      "meaning": "Nation",
      "rejectedAlternatives": []
    },
    {
      "id": "government",
      "sourceForm": "ಸರ್ಕಾರ",
      "sourceMeaning": "Government",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಸರ್ಕಾರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-government",
          "word": "ಆಳ್ವಿಕೆ",
          "note": "Dravidian āḷ 'rule'; source is a loan, not Sanskrit",
          "etymologyParts": [
            {
              "form": "ಆಳ್ವಿಕೆ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian āḷ 'rule'; source is a loan, not Sanskrit",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಸರ್ಕಾರ",
      "meaning": "Government",
      "rejectedAlternatives": []
    },
    {
      "id": "board",
      "sourceForm": "ಮಂಡಳಿ",
      "sourceMeaning": "Board",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಮಂಡಳಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-board",
          "word": "ಕೂಟ",
          "note": "Proposed equivalent; coinage/semantic fit for review",
          "etymologyParts": [
            {
              "form": "ಕೂಟ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Proposed equivalent; coinage/semantic fit for review",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಮಂಡಳಿ",
      "meaning": "Board",
      "rejectedAlternatives": []
    },
    {
      "id": "law",
      "sourceForm": "ಕಾನೂನು",
      "sourceMeaning": "Law",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಕಾನೂನು",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-law",
          "word": "ಕಟ್ಟಳೆ",
          "note": "Dravidian; source is a loan, not Sanskrit",
          "etymologyParts": [
            {
              "form": "ಕಟ್ಟಳೆ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian; source is a loan, not Sanskrit",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಕಾನೂನು",
      "meaning": "Law",
      "rejectedAlternatives": []
    },
    {
      "id": "justice",
      "sourceForm": "ನ್ಯಾಯ",
      "sourceMeaning": "Justice",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ನ್ಯಾಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-justice",
          "word": "ನೆರವಿ",
          "note": "Proposed from nerav 'help/support'; semantic extension needs review",
          "etymologyParts": [
            {
              "form": "ನೆರವಿ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "etymology-entries.js:audited"
          ]
        },
        {
          "id": "contrib-064-1",
          "word": "ಸರಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸರಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-064-2",
          "word": "ತೀರ್ಪು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೀರ್ಪು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-064-3",
          "word": "ನೀತಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೀತಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Proposed from nerav 'help/support'; semantic extension needs review Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ನ್ಯಾಯ",
      "meaning": "Justice",
      "rejectedAlternatives": []
    },
    {
      "id": "judgment",
      "sourceForm": "ತೀರ್ಪು",
      "sourceMeaning": "Judgment",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ತೀರ್ಪು",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-judgment",
          "word": "ತೀರ್ಪು",
          "note": "Already native per supplied audit",
          "etymologyParts": [
            {
              "form": "ತೀರ್ಪು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Already native per supplied audit",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ತೀರ್ಪು",
      "meaning": "Judgment",
      "rejectedAlternatives": []
    },
    {
      "id": "director",
      "sourceForm": "ನಿರ್ದೇಶಕ",
      "sourceMeaning": "Director",
      "category": "People",
      "sourceEtymology": {
        "form": "ನಿರ್ದೇಶಕ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-director",
          "word": "ಮುಂದಾಳು",
          "note": "ಮುಂದೆ + ಆಳು; proposed compound",
          "etymologyParts": [
            {
              "form": "ಮುಂದಾಳು",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. ಮುಂದೆ + ಆಳು; proposed compound",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ನಿರ್ದೇಶಕ",
      "meaning": "Director",
      "rejectedAlternatives": []
    },
    {
      "id": "assistant",
      "sourceForm": "ಸಹಾಯಕ",
      "sourceMeaning": "Assistant",
      "category": "People",
      "sourceEtymology": {
        "form": "ಸಹಾಯಕ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-assistant",
          "word": "ನೆರವಿಗ",
          "note": "Proposed from nerav 'help'; morphology needs review",
          "etymologyParts": [
            {
              "form": "ನೆರವಿಗ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Proposed from nerav 'help'; morphology needs review",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಸಹಾಯಕ",
      "meaning": "Assistant",
      "rejectedAlternatives": []
    },
    {
      "id": "process",
      "sourceForm": "ಪ್ರಕ್ರಿಯೆ",
      "sourceMeaning": "Process",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಪ್ರಕ್ರಿಯೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-process",
          "word": "ನಡೆ",
          "note": "Contextual, not necessarily technical equivalent",
          "etymologyParts": [
            {
              "form": "ನಡೆ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Contextual, not necessarily technical equivalent",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಪ್ರಕ್ರಿಯೆ",
      "meaning": "Process",
      "rejectedAlternatives": []
    },
    {
      "id": "democracy",
      "sourceForm": "ಪ್ರಜಾಪ್ರಭುತ್ವ",
      "sourceMeaning": "Democracy",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಪ್ರಜಾಪ್ರಭುತ್ವ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-democracy",
          "word": "ಮಂದಿಯಾಳ್ವಿಕೆ",
          "note": "ಮಂದಿ + ಆಳ್ವಿಕೆ; proposed Dravidian-only compound",
          "etymologyParts": [
            {
              "form": "ಮಂದಿಯಾಳ್ವಿಕೆ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. ಮಂದಿ + ಆಳ್ವಿಕೆ; proposed Dravidian-only compound",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಪ್ರಜಾಪ್ರಭುತ್ವ",
      "meaning": "Democracy",
      "rejectedAlternatives": []
    },
    {
      "id": "election",
      "sourceForm": "ಚುನಾವಣೆ",
      "sourceMeaning": "Election",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಚುನಾವಣೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-election",
          "word": "ಆಯ್ಕುಳಿ",
          "note": "Proposed formation; āy + kuḷi needs review",
          "etymologyParts": [
            {
              "form": "ಆಯ್ಕುಳಿ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Proposed formation; āy + kuḷi needs review",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಚುನಾವಣೆ",
      "meaning": "Election",
      "rejectedAlternatives": []
    },
    {
      "id": "question",
      "sourceForm": "ಪ್ರಶ್ನೆ",
      "sourceMeaning": "Question",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಪ್ರಶ್ನೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-question",
          "word": "ಕೇಳ್ವೆ",
          "note": "From Dravidian kēḷ 'ask'",
          "etymologyParts": [
            {
              "form": "ಕೇಳ್ವೆ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "etymology-entries.js:audited"
          ]
        },
        {
          "id": "alt-supp-question",
          "word": "ಕೇಳ್ವಿ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "வினா (viṉā)",
          "tulu": "ಕೇನು",
          "proto": "*kēḷ",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಕೇಳ್ವಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. From Dravidian kēḷ 'ask' Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "halegannada": "ಕೇಳ್ವಿ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "sources": [
        "etymology-entries.js:origin-audit"
      ],
      "sanskrit": "ಪ್ರಶ್ನೆ",
      "meaning": "Question",
      "rejectedAlternatives": []
    },
    {
      "id": "answer",
      "sourceForm": "ಉತ್ತರ",
      "sourceMeaning": "Answer",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಉತ್ತರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-answer",
          "word": "ಬಡಗಣ",
          "note": "Only north/direction sense; not answer",
          "etymologyParts": [
            {
              "form": "ಬಡಗಣ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Only north/direction sense; not answer",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಉತ್ತರ",
      "meaning": "Answer",
      "rejectedAlternatives": []
    },
    {
      "id": "citizen",
      "sourceForm": "ನಾಗರಿಕ",
      "sourceMeaning": "Citizen",
      "category": "Society",
      "sourceEtymology": {
        "form": "ನಾಗರಿಕ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-citizen",
          "word": "ಊರಿಗ",
          "note": "From ūr 'town'; proposed demonym",
          "etymologyParts": [
            {
              "form": "ಊರಿಗ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. From ūr 'town'; proposed demonym",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ನಾಗರಿಕ",
      "meaning": "Citizen",
      "rejectedAlternatives": []
    },
    {
      "id": "public",
      "sourceForm": "ಸಾರ್ವಜನಿಕ",
      "sourceMeaning": "Public",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಸಾರ್ವಜನಿಕ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-public",
          "word": "ಎಲ್ಲರ",
          "note": "Dravidian; context/inflection dependent",
          "etymologyParts": [
            {
              "form": "ಎಲ್ಲರ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian; context/inflection dependent",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಸಾರ್ವಜನಿಕ",
      "meaning": "Public",
      "rejectedAlternatives": []
    },
    {
      "id": "responsibility",
      "sourceForm": "ಜವಾಬ್ದಾರಿ",
      "sourceMeaning": "Responsibility",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಜವಾಬ್ದಾರಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-responsibility",
          "word": "ಹೊಣೆ",
          "note": "Source is a loan, not Sanskrit",
          "etymologyParts": [
            {
              "form": "ಹೊಣೆ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Source is a loan, not Sanskrit",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಜವಾಬ್ದಾರಿ",
      "meaning": "Responsibility",
      "rejectedAlternatives": []
    },
    {
      "id": "medicine",
      "sourceForm": "ಔಷಧ",
      "sourceMeaning": "Medicine",
      "category": "Body",
      "sourceEtymology": {
        "form": "ಔಷಧ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-medicine",
          "word": "ಮದ್ದು",
          "note": "Dravidian Contributor-supplied comparison; confidence: high. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "etymologyParts": [
            {
              "form": "ಮದ್ದು",
              "etymology": "dravidian"
            },
            {
              "form": "ಮದ್ದು",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:audited",
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "tamil": "மருந்து (maruntu)",
          "tulu": "ಮರ್ದ್",
          "proto": "*maruntu",
          "editorialNote": ""
        },
        {
          "id": "contrib-261-2",
          "word": "ಗಿಡಮೂಲಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗಿಡಮೂಲಿಕೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian Contributor-supplied comparison; confidence: high. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "halegannada": "ಮರ್ದ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "sources": [
        "etymology-entries.js:origin-audit",
        "contributor-equivalents.js"
      ],
      "contributorSupplied": true,
      "sanskrit": "ಔಷಧ",
      "meaning": "Medicine",
      "rejectedAlternatives": []
    },
    {
      "id": "disease",
      "sourceForm": "ರೋಗ",
      "sourceMeaning": "Disease",
      "category": "Body",
      "sourceEtymology": {
        "form": "ರೋಗ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-disease",
          "word": "ಬೇನೆ",
          "note": "Dravidian Kannada/Tulu ಬೇನೆ and Tamil நோய் are not cognate. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "etymologyParts": [
            {
              "form": "ಬೇನೆ",
              "etymology": "dravidian"
            },
            {
              "form": "ಬೇನೆ",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:audited",
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "tamil": "நோய் (nōy)",
          "tulu": "ಬೇನೆ",
          "proto": null,
          "editorialNote": ""
        },
        {
          "id": "contrib-050-2",
          "word": "ಕಾಯಿಲೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಾಯಿಲೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-050-3",
          "word": "ನಂಜು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಂಜು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian Contributor-supplied comparison; confidence: low. Kannada/Tulu ಬೇನೆ and Tamil நோய் are not cognate. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "halegannada": "ಬೇನೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "sources": [
        "etymology-entries.js:origin-audit",
        "contributor-equivalents.js"
      ],
      "contributorSupplied": true,
      "sanskrit": "ರೋಗ",
      "meaning": "Disease",
      "rejectedAlternatives": []
    },
    {
      "id": "treatment",
      "sourceForm": "ಚಿಕಿತ್ಸೆ",
      "sourceMeaning": "Treatment",
      "category": "Body",
      "sourceEtymology": {
        "form": "ಚಿಕಿತ್ಸೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-treatment",
          "word": "ಮದ್ದು",
          "note": "Contextual extension; not exact in every use",
          "etymologyParts": [
            {
              "form": "ಮದ್ದು",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Contextual extension; not exact in every use",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಚಿಕಿತ್ಸೆ",
      "meaning": "Treatment",
      "rejectedAlternatives": []
    },
    {
      "id": "family",
      "sourceForm": "ಕುಟುಂಬ",
      "sourceMeaning": "Family",
      "category": "People",
      "sourceEtymology": {
        "form": "ಕುಟುಂಬ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-family",
          "word": "ಮನೆತನ",
          "note": "ಮನೆ + ತನ",
          "etymologyParts": [
            {
              "form": "ಮನೆತನ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. ಮನೆ + ತನ",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಕುಟುಂಬ",
      "meaning": "Family",
      "rejectedAlternatives": []
    },
    {
      "id": "welfare",
      "sourceForm": "ಕಲ್ಯಾಣ",
      "sourceMeaning": "Welfare",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಕಲ್ಯಾಣ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-welfare",
          "word": "ಒಳಿತು",
          "note": "Dravidian",
          "etymologyParts": [
            {
              "form": "ಒಳಿತು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಕಲ್ಯಾಣ",
      "meaning": "Welfare",
      "rejectedAlternatives": []
    },
    {
      "id": "women",
      "sourceForm": "ಮಹಿಳಾ",
      "sourceMeaning": "Women",
      "category": "People",
      "sourceEtymology": {
        "form": "ಮಹಿಳಾ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-women",
          "word": "ಹೆಂಗಸರು",
          "note": "Dravidian",
          "etymologyParts": [
            {
              "form": "ಹೆಂಗಸರು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಮಹಿಳಾ",
      "meaning": "Women",
      "rejectedAlternatives": []
    },
    {
      "id": "accommodation",
      "sourceForm": "ವಸತಿ",
      "sourceMeaning": "Accommodation",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ವಸತಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-accommodation",
          "word": "ತಂಗುದಾಣ",
          "note": "ತಂಗು + ದಾಣ; morphology needs review",
          "etymologyParts": [
            {
              "form": "ತಂಗುದಾಣ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. ತಂಗು + ದಾಣ; morphology needs review",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ವಸತಿ",
      "meaning": "Accommodation",
      "rejectedAlternatives": []
    },
    {
      "id": "snack",
      "sourceForm": "ಆಹಾರ",
      "sourceMeaning": "Food / snack",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಆಹಾರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-snack",
          "word": "ತಿಂಡಿ",
          "note": "Snack/light-food sense",
          "etymologyParts": [
            {
              "form": "ತಿಂಡಿ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Snack/light-food sense",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಆಹಾರ",
      "meaning": "Food / snack",
      "rejectedAlternatives": []
    },
    {
      "id": "student",
      "sourceForm": "ವಿದ್ಯಾರ್ಥಿ",
      "sourceMeaning": "Student",
      "category": "Education",
      "sourceEtymology": {
        "form": "ವಿದ್ಯಾರ್ಥಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-student",
          "word": "ಓದುಗ",
          "note": "ಓದು + -ಗ",
          "etymologyParts": [
            {
              "form": "ಓದುಗ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "etymology-entries.js:audited"
          ]
        },
        {
          "id": "contrib-073-1",
          "word": "ಕಲಿಯುವವ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಲಿಯುವವ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-073-2",
          "word": "ಕಲಿಗ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಲಿಗ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. ಓದು + -ಗ Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ವಿದ್ಯಾರ್ಥಿ",
      "meaning": "Student",
      "rejectedAlternatives": []
    },
    {
      "id": "school",
      "sourceForm": "ಶಾಲೆ",
      "sourceMeaning": "School",
      "category": "Education",
      "sourceEtymology": {
        "form": "ಶಾಲೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-school",
          "word": "ಓದುಮನೆ",
          "note": "ಓದು + ಮನೆ",
          "etymologyParts": [
            {
              "form": "ಓದುಮನೆ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. ಓದು + ಮನೆ",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಶಾಲೆ",
      "meaning": "School",
      "rejectedAlternatives": []
    },
    {
      "id": "library",
      "sourceForm": "ಗ್ರಂಥಾಲಯ",
      "sourceMeaning": "Library",
      "category": "Education",
      "sourceEtymology": {
        "form": "ಗ್ರಂಥಾಲಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-library",
          "word": "ಹೊತ್ತಗೆಮನೆ",
          "note": "ಹೊತ್ತಗೆ + ಮನೆ; lexical status needs independent check",
          "etymologyParts": [
            {
              "form": "ಹೊತ್ತಗೆಮನೆ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. ಹೊತ್ತಗೆ + ಮನೆ; lexical status needs independent check",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಗ್ರಂಥಾಲಯ",
      "meaning": "Library",
      "rejectedAlternatives": []
    },
    {
      "id": "university",
      "sourceForm": "ವಿಶ್ವವಿದ್ಯಾಲಯ",
      "sourceMeaning": "University",
      "category": "Education",
      "sourceEtymology": {
        "form": "ವಿಶ್ವವಿದ್ಯಾಲಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-university",
          "word": "ಹಿರಿಕಲಿಮನೆ",
          "note": "Proposed coinage; semantic/morphological review",
          "etymologyParts": [
            {
              "form": "ಹಿರಿಕಲಿಮನೆ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Proposed coinage; semantic/morphological review",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ವಿಶ್ವವಿದ್ಯಾಲಯ",
      "meaning": "University",
      "rejectedAlternatives": []
    },
    {
      "id": "grammar",
      "sourceForm": "ವ್ಯಾಕರಣ",
      "sourceMeaning": "Grammar",
      "category": "Education",
      "sourceEtymology": {
        "form": "ವ್ಯಾಕರಣ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-grammar",
          "word": "ಸೊಲ್ಲರಿಮೆ",
          "note": "ಸೊಲ್ಲು + ಅರಿಮೆ",
          "etymologyParts": [
            {
              "form": "ಸೊಲ್ಲರಿಮೆ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. ಸೊಲ್ಲು + ಅರಿಮೆ",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ವ್ಯಾಕರಣ",
      "meaning": "Grammar",
      "rejectedAlternatives": []
    },
    {
      "id": "culture",
      "sourceForm": "ಸಂಸ್ಕೃತಿ",
      "sourceMeaning": "Culture",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಸಂಸ್ಕೃತಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-culture",
          "word": "ನಡವಳಿಕೆ",
          "note": "May mean conduct/behaviour, not all senses of culture",
          "etymologyParts": [
            {
              "form": "ನಡವಳಿಕೆ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "etymology-entries.js:audited"
          ]
        },
        {
          "id": "contrib-226-1",
          "word": "ನಾಗರಿಕತೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಾಗರಿಕತೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-226-2",
          "word": "ನಡೆನುಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಡೆನುಡಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-226-3",
          "word": "ಬದುಕು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬದುಕು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. May mean conduct/behaviour, not all senses of culture Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಸಂಸ್ಕೃತಿ",
      "meaning": "Culture",
      "rejectedAlternatives": []
    },
    {
      "id": "literature",
      "sourceForm": "ಸಾಹಿತ್ಯ",
      "sourceMeaning": "Literature",
      "category": "Education",
      "sourceEtymology": {
        "form": "ಸಾಹಿತ್ಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-literature",
          "word": "ಬರಹ",
          "note": "Writing; broader literature sense is context-dependent",
          "etymologyParts": [
            {
              "form": "ಬರಹ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Writing; broader literature sense is context-dependent",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಸಾಹಿತ್ಯ",
      "meaning": "Literature",
      "rejectedAlternatives": []
    },
    {
      "id": "music",
      "sourceForm": "ಸಂಗೀತ",
      "sourceMeaning": "Music",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಸಂಗೀತ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-music",
          "word": "ಹಾಡು",
          "note": "Song; narrower than music",
          "etymologyParts": [
            {
              "form": "ಹಾಡು",
              "etymology": "coinage"
            }
          ],
          "viability": "coined",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "etymology-entries.js:audited"
          ]
        },
        {
          "id": "contrib-296-1",
          "word": "ಹಾಡುಗಾರಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಾಡುಗಾರಿಕೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-296-2",
          "word": "ಇಂಚರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಇಂಚರ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-296-3",
          "word": "ನಾದ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಾದ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Song; narrower than music Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಸಂಗೀತ",
      "meaning": "Music",
      "rejectedAlternatives": []
    },
    {
      "id": "electricity",
      "sourceForm": "ವಿದ್ಯುತ್",
      "sourceMeaning": "Electricity",
      "category": "Technology",
      "sourceEtymology": {
        "form": "ವಿದ್ಯುತ್",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-electricity",
          "word": "ಮಿಂಚು",
          "note": "Means lightning; not equivalent to electricity in all contexts Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "etymologyParts": [
            {
              "form": "ಮಿಂಚು",
              "etymology": "dravidian"
            },
            {
              "form": "ಮಿಂಚು",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:audited",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-192-2",
          "word": "ಸಿಡಿಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಿಡಿಲು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-192-3",
          "word": "ಕಿಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಿಡಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Means lightning; not equivalent to electricity in all contexts Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ವಿದ್ಯುತ್",
      "meaning": "Electricity",
      "rejectedAlternatives": []
    },
    {
      "id": "station",
      "sourceForm": "ಸ್ಥಾವರ",
      "sourceMeaning": "Station / facility",
      "category": "Technology",
      "sourceEtymology": {
        "form": "ಸ್ಥಾವರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-station",
          "word": "ನಿಲ್ದಾಣ",
          "note": "Exact sense and morphology need review",
          "etymologyParts": [
            {
              "form": "ನಿಲ್ದಾಣ",
              "etymology": "dravidian"
            }
          ],
          "viability": "contested"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Exact sense and morphology need review",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಸ್ಥಾವರ",
      "meaning": "Station / facility",
      "rejectedAlternatives": []
    },
    {
      "id": "environment",
      "sourceForm": "ಪರಿಸರ",
      "sourceMeaning": "Environment",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಪರಿಸರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-environment",
          "word": "ಸುತ್ತುಮುತ್ತಲ",
          "note": "Proposed expression; grammar/context needs review",
          "etymologyParts": [
            {
              "form": "ಸುತ್ತುಮುತ್ತಲ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Proposed expression; grammar/context needs review",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಪರಿಸರ",
      "meaning": "Environment",
      "rejectedAlternatives": []
    },
    {
      "id": "soil",
      "sourceForm": "ಮಣ್ಣು",
      "sourceMeaning": "Soil",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಮಣ್ಣು",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-soil",
          "word": "ಮಣ್ಣು",
          "note": "Already native; source term itself is native",
          "etymologyParts": [
            {
              "form": "ಮಣ್ಣು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Already native; source term itself is native",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಮಣ್ಣು",
      "meaning": "Soil",
      "rejectedAlternatives": []
    },
    {
      "id": "river",
      "sourceForm": "ನದಿ",
      "sourceMeaning": "River",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ನದಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-river",
          "word": "ಹೊಳೆ",
          "note": "Stream/smaller river sense may differ Contributor-supplied comparison; confidence: low.",
          "etymologyParts": [
            {
              "form": "ಹೊಳೆ",
              "etymology": "dravidian"
            },
            {
              "form": "ಹೊಳೆ",
              "etymology": "unknown"
            }
          ],
          "viability": "contested",
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:audited",
            "etymology-entries.js:origin-audit"
          ],
          "tamil": "ஆறு (āṟu)",
          "tulu": "ಸುದೆ",
          "proto": null,
          "editorialNote": ""
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Stream/smaller river sense may differ Contributor-supplied comparison; confidence: low.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "halegannada": "ಹೊಳೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "sources": [
        "etymology-entries.js:origin-audit"
      ],
      "sanskrit": "ನದಿ",
      "meaning": "River",
      "rejectedAlternatives": []
    },
    {
      "id": "sea",
      "sourceForm": "ಸಮುದ್ರ",
      "sourceMeaning": "Sea",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಸಮುದ್ರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-sea",
          "word": "ಕಡಲು",
          "note": "Dravidian Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "etymologyParts": [
            {
              "form": "ಕಡಲು",
              "etymology": "dravidian"
            },
            {
              "form": "ಕಡಲು",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:audited",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-022-2",
          "word": "ಆಳ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಆಳ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Dravidian Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಸಮುದ್ರ",
      "meaning": "Sea",
      "rejectedAlternatives": []
    },
    {
      "id": "bridge",
      "sourceForm": "ಸೇತುವೆ",
      "sourceMeaning": "Bridge",
      "category": "Technology",
      "sourceEtymology": {
        "form": "ಸೇತುವೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-bridge",
          "word": "ಸಂಕ",
          "note": "Native proposal in supplied audit; attestations/sense need review",
          "etymologyParts": [
            {
              "form": "ಸಂಕ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "etymology-entries.js:audited"
          ]
        },
        {
          "id": "contrib-253-1",
          "word": "ಕಟ್ಟೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಟ್ಟೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-253-2",
          "word": "ಹೊಳೆದಾಟುವ ದಾರಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೊಳೆದಾಟುವ ದಾರಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Native proposal in supplied audit; attestations/sense need review Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಸೇತುವೆ",
      "meaning": "Bridge",
      "rejectedAlternatives": []
    },
    {
      "id": "publicity",
      "sourceForm": "ಪ್ರಚಾರ",
      "sourceMeaning": "Publicity / propaganda",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಪ್ರಚಾರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-publicity",
          "word": "ತಿಳಿವಳಿಕೆ",
          "note": "Awareness/understanding; not direct equivalent in all senses",
          "etymologyParts": [
            {
              "form": "ತಿಳಿವಳಿಕೆ",
              "etymology": "coinage"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Awareness/understanding; not direct equivalent in all senses",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಪ್ರಚಾರ",
      "meaning": "Publicity / propaganda",
      "rejectedAlternatives": []
    },
    {
      "id": "speech",
      "sourceForm": "ಭಾಷಣ",
      "sourceMeaning": "Speech",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಭಾಷಣ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-speech",
          "word": "ಮಾತು",
          "note": "Everyday speech; not necessarily formal address",
          "etymologyParts": [
            {
              "form": "ಮಾತು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied audit; not independently certified. Everyday speech; not necessarily formal address",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಭಾಷಣ",
      "meaning": "Speech",
      "rejectedAlternatives": []
    },
    {
      "id": "officer",
      "sourceForm": "ಅಧಿಕಾರಿ",
      "sourceMeaning": "Officer",
      "category": "People",
      "sourceEtymology": {
        "form": "ಅಧಿಕಾರಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "audited-officer-mixed",
          "word": "ಮೇಲ್ವಿಚಾರಕ",
          "note": "Mixed formation: ಮೇಲ್ is Dravidian but ವಿಚಾರ is Sanskrit-derived; rejected as a Dravidian-only alternative.",
          "etymologyParts": [
            {
              "form": "ಮೇಲ್",
              "etymology": "dravidian"
            },
            {
              "form": "ವಿಚಾರ",
              "etymology": "sanskrit_tatsama"
            }
          ],
          "viability": "no_alternative"
        }
      ],
      "editorialNote": "Mixed proposal; not a clean Dravidian replacement.",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಅಧಿಕಾರಿ",
      "meaning": "Officer",
      "rejectedAlternatives": []
    },
    {
      "id": "chief",
      "sourceForm": "ಪ್ರಧಾನ",
      "sourceMeaning": "Chief / principal",
      "category": "People",
      "sourceEtymology": {
        "form": "ಪ್ರಧಾನ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "no-chief",
          "word": "No viable native alternative",
          "note": "ಮುಖ್ಯ is also Sanskrit-derived.",
          "etymologyParts": [],
          "viability": "no_alternative"
        }
      ],
      "noAlternative": true,
      "editorialNote": "ಮುಖ್ಯ is Sanskrit-derived and is not accepted as a native alternative.",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಪ್ರಧಾನ",
      "meaning": "Chief / principal",
      "rejectedAlternatives": []
    },
    {
      "id": "division",
      "sourceForm": "ವಿಭಾಗ",
      "sourceMeaning": "Division",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ವಿಭಾಗ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "no-division",
          "word": "No viable native alternative",
          "note": "ಭಾಗ is also Sanskrit-derived.",
          "etymologyParts": [],
          "viability": "no_alternative"
        }
      ],
      "noAlternative": true,
      "editorialNote": "ಭಾಗ is Sanskrit-derived and is not accepted as a native alternative.",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ವಿಭಾಗ",
      "meaning": "Division",
      "rejectedAlternatives": []
    },
    {
      "id": "constitution",
      "sourceForm": "ಸಂವಿಧಾನ",
      "sourceMeaning": "Constitution",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಸಂವಿಧಾನ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "mixed-constitution",
          "word": "ಕಟ್ಟಳೆಗ್ರಂಥ",
          "note": "Mixed: ಕಟ್ಟಳೆ is Dravidian; ಗ್ರಂಥ is Sanskrit-derived. Not accepted as wholly Dravidian.",
          "etymologyParts": [
            {
              "form": "ಕಟ್ಟಳೆ",
              "etymology": "dravidian"
            },
            {
              "form": "ಗ್ರಂಥ",
              "etymology": "sanskrit_tatsama"
            }
          ],
          "viability": "no_alternative"
        }
      ],
      "noAlternative": true,
      "editorialNote": "The supplied compound is mixed and therefore does not qualify as a Dravidian-only alternative.",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಸಂವಿಧಾನ",
      "meaning": "Constitution",
      "rejectedAlternatives": []
    },
    {
      "id": "office",
      "sourceForm": "ಕಚೇರಿ",
      "sourceMeaning": "Office",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಕಚೇರಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "no-office",
          "word": "Outside Dravidian-origin target list",
          "note": "Perso-Arabic/Marathi loan per contributor; precise route unverified.",
          "etymologyParts": [],
          "viability": "no_alternative"
        }
      ],
      "noAlternative": true,
      "scopeAudit": true,
      "editorialNote": "Not a Sanskrit-origin target according to the supplied audit; exact loan route needs verification.",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಕಚೇರಿ",
      "meaning": "Office",
      "rejectedAlternatives": []
    },
    {
      "id": "punishment",
      "sourceForm": "ಶಿಕ್ಷೆ",
      "sourceMeaning": "Punishment",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಶಿಕ್ಷೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "no-punishment",
          "word": "No viable native alternative",
          "note": "ದಂಡ is also Sanskrit-derived.",
          "etymologyParts": [],
          "viability": "no_alternative",
          "sourceDataset": "etymology-entries.js:audited",
          "sources": [
            "etymology-entries.js:audited"
          ]
        },
        {
          "id": "contrib-066-1",
          "word": "ದಂಡನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದಂಡನೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-066-2",
          "word": "ಬರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬರೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-066-3",
          "word": "ತಕ್ಕಪಾಠ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಕ್ಕಪಾಠ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "noAlternative": true,
      "editorialNote": "ದಂಡ is Sanskrit-derived and is not accepted as a native alternative. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಶಿಕ್ಷೆ",
      "meaning": "Punishment",
      "rejectedAlternatives": []
    },
    {
      "id": "commission",
      "sourceForm": "ಆಯೋಗ",
      "sourceMeaning": "Commission",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಆಯೋಗ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "no-commission",
          "word": "No viable native alternative",
          "note": "ಸಮಿತಿ is also Sanskrit-derived.",
          "etymologyParts": [],
          "viability": "no_alternative"
        }
      ],
      "noAlternative": true,
      "editorialNote": "ಸಮಿತಿ is Sanskrit-derived and is not accepted as a native alternative.",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಆಯೋಗ",
      "meaning": "Commission",
      "rejectedAlternatives": []
    },
    {
      "id": "nutrition",
      "sourceForm": "ಪೋಷಣೆ",
      "sourceMeaning": "Nutrition",
      "category": "Body",
      "sourceEtymology": {
        "form": "ಪೋಷಣೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "no-nutrition",
          "word": "No viable native alternative",
          "note": "No native equivalent proposed.",
          "etymologyParts": [],
          "viability": "no_alternative"
        }
      ],
      "noAlternative": true,
      "editorialNote": "No native equivalent proposed in the supplied audit.",
      "sourceDataset": "etymology-entries.js:audited",
      "sanskrit": "ಪೋಷಣೆ",
      "meaning": "Nutrition",
      "rejectedAlternatives": []
    },
    {
      "id": "fruit",
      "sourceForm": "ಫಲ",
      "sourceMeaning": "Fruit",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಫಲ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-fruit",
          "word": "ಹಣ್ಣು",
          "note": "A common native word for fruit. Contributor-supplied comparison; confidence: high. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "etymologyParts": [
            {
              "form": "ಹಣ್ಣು",
              "etymology": "dravidian"
            },
            {
              "form": "ಹಣ್ಣು",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "tamil": "பழம் (paḻam)",
          "tulu": "ಪರ್ಂದ್",
          "proto": "*paḻam",
          "editorialNote": ""
        },
        {
          "id": "contrib-027-2",
          "word": "ಕಾಯಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಾಯಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising. Contributor-supplied comparison; confidence: high. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "halegannada": "ಪಣ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "sources": [
        "etymology-entries.js:origin-audit",
        "contributor-equivalents.js"
      ],
      "contributorSupplied": true,
      "sanskrit": "ಫಲ",
      "meaning": "Fruit",
      "rejectedAlternatives": []
    },
    {
      "id": "moon",
      "sourceForm": "ಚಂದ್ರ",
      "sourceMeaning": "Moon",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಚಂದ್ರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-moon",
          "word": "ತಿಂಗಳು",
          "note": "ತಿಂಗಳು can mean both moon and month; this is a contextual/literary alternative, not a universal replacement.",
          "etymologyParts": [
            {
              "form": "ತಿಂಗಳು",
              "etymology": "dravidian"
            }
          ],
          "viability": "contested"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಚಂದ್ರ",
      "meaning": "Moon",
      "rejectedAlternatives": []
    },
    {
      "id": "body",
      "sourceForm": "ಶರೀರ",
      "sourceMeaning": "Body",
      "category": "Body",
      "sourceEtymology": {
        "form": "ಶರೀರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-body",
          "word": "ಮೈ",
          "note": "Everyday native word for the body. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "etymologyParts": [
            {
              "form": "ಮೈ",
              "etymology": "dravidian"
            },
            {
              "form": "ಮೈ",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "alt-supp-body",
          "word": "ಒಡಲು / ಮೈ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "உடல் (uṭal)",
          "tulu": "ಒಡಲ್",
          "proto": "*uṭal",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಒಡಲು / ಮೈ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-041-1",
          "word": "ಒಡಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಡಲು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-041-3",
          "word": "ತನು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತನು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising. Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "halegannada": "ಒಡಲ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "sources": [
        "etymology-entries.js:origin-audit",
        "contributor-equivalents.js"
      ],
      "contributorSupplied": true,
      "sanskrit": "ಶರೀರ",
      "meaning": "Body",
      "rejectedAlternatives": []
    },
    {
      "id": "joy",
      "sourceForm": "ಹರ್ಷ",
      "sourceMeaning": "Joy",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಹರ್ಷ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-joy",
          "word": "ನಲಿವು",
          "note": "Natural native word for joy or gladness.",
          "etymologyParts": [
            {
              "form": "ನಲಿವು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean",
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "alt-supp-joy",
          "word": "ನಲಿವು / ಸಂತಸ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "மகிழ்ச்சி (Skt.)",
          "tulu": "ನಲಿವು",
          "proto": "*nal-",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ನಲಿವು / ಸಂತಸ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising. Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "halegannada": "ನಲಿವು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "sources": [
        "etymology-entries.js:origin-audit"
      ],
      "sanskrit": "ಹರ್ಷ",
      "meaning": "Joy",
      "rejectedAlternatives": []
    },
    {
      "id": "sorrow",
      "sourceForm": "ದುಃಖ",
      "sourceMeaning": "Sorrow",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ದುಃಖ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-sorrow",
          "word": "ಬೇಗುದಿ",
          "note": "Literary/emotive term; verify register and exact sense before standardising.",
          "etymologyParts": [
            {
              "form": "ಬೇಗುದಿ",
              "etymology": "dravidian"
            }
          ],
          "viability": "contested",
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "alt-supp-sorrow",
          "word": "ಬೇಗುದಿ / ನೋವು",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "துன்பம் (tuṉpam)",
          "tulu": "ಬೇಗುದಿ",
          "proto": null,
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಬೇಗುದಿ / ನೋವು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising. Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "halegannada": "ಬೇಗುದಿ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "sources": [
        "etymology-entries.js:origin-audit"
      ],
      "sanskrit": "ದುಃಖ",
      "meaning": "Sorrow",
      "rejectedAlternatives": []
    },
    {
      "id": "love",
      "sourceForm": "ಪ್ರೀತಿ",
      "sourceMeaning": "Love / affection",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಪ್ರೀತಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-love",
          "word": "ಒಲವು",
          "note": "Native word for affection, inclination or fondness; context matters. DEDR 1006 records Kannada olavu/olume and Tulu olame/olume for pleasure, affection, love and kindness. Tamil direct equivalent and Proto-Dravidian reconstruction are not established by this entry.",
          "etymologyParts": [
            {
              "form": "ಒಲವು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "tulu": "olame / olume (affection, love, kindness; DEDR 1006)",
          "editorialNote": ""
        },
        {
          "id": "alt-supp-love",
          "word": "ಒಲವು / ನಲ್ಮೆ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "அன்பு (aṉpu)",
          "tulu": "ಒಲವು",
          "proto": "*anpu",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಒಲವು / ನಲ್ಮೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-013-2",
          "word": "ನಲ್ಮೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಲ್ಮೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-013-3",
          "word": "ಅಕ್ಕರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಕ್ಕರೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising. Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "halegannada": "ಒಲವು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "sources": [
        "etymology-entries.js:origin-audit",
        "contributor-equivalents.js"
      ],
      "contributorSupplied": true,
      "sanskrit": "ಪ್ರೀತಿ",
      "meaning": "Love / affection",
      "rejectedAlternatives": []
    },
    {
      "id": "fear",
      "sourceForm": "ಭಯ",
      "sourceMeaning": "Fear",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಭಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-fear",
          "word": "ಅಂಜಿಕೆ",
          "note": "Common native word for fear or apprehension. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "etymologyParts": [
            {
              "form": "ಅಂಜಿಕೆ",
              "etymology": "dravidian"
            },
            {
              "form": "ಅಂಜಿಕೆ",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "alt-supp-fear",
          "word": "ಅಂಜಿಕೆ / ಹೆದರು",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "பயம் (payam)",
          "tulu": "ಪನ್ಪು",
          "proto": "*payam",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಅಂಜಿಕೆ / ಹೆದರು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-012-2",
          "word": "ಹೆದರಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೆದರಿಕೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-012-3",
          "word": "ಬೆದರಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೆದರಿಕೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising. Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "halegannada": "ಅಂಜಿಕೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "sources": [
        "etymology-entries.js:origin-audit",
        "contributor-equivalents.js"
      ],
      "contributorSupplied": true,
      "sanskrit": "ಭಯ",
      "meaning": "Fear",
      "rejectedAlternatives": []
    },
    {
      "id": "desire",
      "sourceForm": "ಆಸೆ",
      "sourceMeaning": "Desire / wish",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಆಸೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-desire",
          "word": "ಬಯಕೆ",
          "note": "Native word for desire or wish. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "etymologyParts": [
            {
              "form": "ಬಯಕೆ",
              "etymology": "dravidian"
            },
            {
              "form": "ಬಯಕೆ",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-016-2",
          "word": "ಹಂಬಲ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಂಬಲ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-016-3",
          "word": "ಕನಸು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕನಸು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಆಸೆ",
      "meaning": "Desire / wish",
      "rejectedAlternatives": []
    },
    {
      "id": "dream",
      "sourceForm": "ಸ್ವಪ್ನ",
      "sourceMeaning": "Dream",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಸ್ವಪ್ನ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-dream",
          "word": "ಕನಸು",
          "note": "Common native word for dream.",
          "etymologyParts": [
            {
              "form": "ಕನಸು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಸ್ವಪ್ನ",
      "meaning": "Dream",
      "rejectedAlternatives": []
    },
    {
      "id": "woman",
      "sourceForm": "ಸ್ತ್ರೀ",
      "sourceMeaning": "Woman",
      "category": "People",
      "sourceEtymology": {
        "form": "ಸ್ತ್ರೀ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-woman",
          "word": "ಹೆಣ್ಣು",
          "note": "Native word for female/woman; context and register matter.",
          "etymologyParts": [
            {
              "form": "ಹೆಣ್ಣು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಸ್ತ್ರೀ",
      "meaning": "Woman",
      "rejectedAlternatives": []
    },
    {
      "id": "man",
      "sourceForm": "ಪುರುಷ",
      "sourceMeaning": "Man",
      "category": "People",
      "sourceEtymology": {
        "form": "ಪುರುಷ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-man",
          "word": "ಗಂಡು",
          "note": "Native word for male/man; context and register matter.",
          "etymologyParts": [
            {
              "form": "ಗಂಡು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಪುರುಷ",
      "meaning": "Man",
      "rejectedAlternatives": []
    },
    {
      "id": "boy",
      "sourceForm": "ಬಾಲಕ",
      "sourceMeaning": "Boy",
      "category": "People",
      "sourceEtymology": {
        "form": "ಬಾಲಕ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-boy",
          "word": "ಹುಡುಗ",
          "note": "Common native word for boy.",
          "etymologyParts": [
            {
              "form": "ಹುಡುಗ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಬಾಲಕ",
      "meaning": "Boy",
      "rejectedAlternatives": []
    },
    {
      "id": "girl",
      "sourceForm": "ಬಾಲಕಿ",
      "sourceMeaning": "Girl",
      "category": "People",
      "sourceEtymology": {
        "form": "ಬಾಲಕಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-girl",
          "word": "ಹುಡುಗಿ",
          "note": "Common native word for girl.",
          "etymologyParts": [
            {
              "form": "ಹುಡುಗಿ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಬಾಲಕಿ",
      "meaning": "Girl",
      "rejectedAlternatives": []
    },
    {
      "id": "army",
      "sourceForm": "ಸೈನ್ಯ",
      "sourceMeaning": "Army",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಸೈನ್ಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-army",
          "word": "ದಂಡು",
          "note": "Native word for a troop or force; suitable in many army contexts.",
          "etymologyParts": [
            {
              "form": "ದಂಡು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಸೈನ್ಯ",
      "meaning": "Army",
      "rejectedAlternatives": []
    },
    {
      "id": "war",
      "sourceForm": "ಯುದ್ಧ",
      "sourceMeaning": "War / battle",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಯುದ್ಧ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-war",
          "word": "ಕಾಳಗ",
          "note": "Native word for battle or armed conflict. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "etymologyParts": [
            {
              "form": "ಕಾಳಗ",
              "etymology": "dravidian"
            },
            {
              "form": "ಕಾಳಗ",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "alt-supp-war",
          "word": "ಪೋರ್ / ಕಾಳಗ",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "போர் (pōr)",
          "tulu": "ಪೋರ್",
          "proto": "*pōr",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಪೋರ್ / ಕಾಳಗ",
              "etymology": "dravidian"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-238-2",
          "word": "ಕದನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕದನ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-238-3",
          "word": "ಹೋರಾಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೋರಾಟ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising. Contributor-supplied comparison; confidence: high. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "halegannada": "ಪೋರ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "sources": [
        "etymology-entries.js:origin-audit",
        "contributor-equivalents.js"
      ],
      "contributorSupplied": true,
      "sanskrit": "ಯುದ್ಧ",
      "meaning": "War / battle",
      "rejectedAlternatives": []
    },
    {
      "id": "peace",
      "sourceForm": "ಶಾಂತಿ",
      "sourceMeaning": "Peace",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಶಾಂತಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-peace",
          "word": "ನೆಮ್ಮದಿ",
          "note": "Means calm, ease or tranquillity; may not cover political or treaty peace. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "etymologyParts": [
            {
              "form": "ನೆಮ್ಮದಿ",
              "etymology": "dravidian"
            },
            {
              "form": "ನೆಮ್ಮದಿ",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-020-2",
          "word": "ತಂಪು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಂಪು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-020-3",
          "word": "ತಣಿವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಣಿವು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಶಾಂತಿ",
      "meaning": "Peace",
      "rejectedAlternatives": []
    },
    {
      "id": "authority",
      "sourceForm": "ಅಧಿಕಾರ",
      "sourceMeaning": "Authority / power / right",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಅಧಿಕಾರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-authority",
          "word": "ಆಳ್ವಿಕೆ",
          "note": "Fits governing authority or rule; ಹಕ್ಕು is better for a legal right. Sense-dependent. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "etymologyParts": [
            {
              "form": "ಆಳ್ವಿಕೆ",
              "etymology": "dravidian"
            },
            {
              "form": "ಆಳ್ವಿಕೆ",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-061-1",
          "word": "ಒಡೆತನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಡೆತನ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-061-2",
          "word": "ಹಿಡಿತ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಿಡಿತ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಅಧಿಕಾರ",
      "meaning": "Authority / power / right",
      "rejectedAlternatives": []
    },
    {
      "id": "education",
      "sourceForm": "ಶಿಕ್ಷಣ",
      "sourceMeaning": "Education",
      "category": "Education",
      "sourceEtymology": {
        "form": "ಶಿಕ್ಷಣ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-education",
          "word": "ಕಲಿಕೆ",
          "note": "Native word for learning; may not cover every institutional sense of education.",
          "etymologyParts": [
            {
              "form": "ಕಲಿಕೆ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಶಿಕ್ಷಣ",
      "meaning": "Education",
      "rejectedAlternatives": []
    },
    {
      "id": "mathematics",
      "sourceForm": "ಗಣಿತ",
      "sourceMeaning": "Mathematics",
      "category": "Education",
      "sourceEtymology": {
        "form": "ಗಣಿತ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-mathematics",
          "word": "ಎಣಿಕೆ",
          "note": "Counting is narrower than mathematics; use only where the context is basic calculation.",
          "etymologyParts": [
            {
              "form": "ಎಣಿಕೆ",
              "etymology": "dravidian"
            }
          ],
          "viability": "contested"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಗಣಿತ",
      "meaning": "Mathematics",
      "rejectedAlternatives": []
    },
    {
      "id": "science",
      "sourceForm": "ವಿಜ್ಞಾನ",
      "sourceMeaning": "Science",
      "category": "Education",
      "sourceEtymology": {
        "form": "ವಿಜ್ಞಾನ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-science",
          "word": "ಅರಿಮೆ",
          "note": "Proposed native-root coinage; adoption and semantic precision need review.",
          "etymologyParts": [
            {
              "form": "ಅರಿಮೆ",
              "etymology": "coined"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ವಿಜ್ಞಾನ",
      "meaning": "Science",
      "rejectedAlternatives": []
    },
    {
      "id": "word",
      "sourceForm": "ಭಾಷೆ / ಪದ",
      "sourceMeaning": "Word",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಭಾಷೆ / ಪದ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-word",
          "word": "ನುಡಿ",
          "note": "ನುಡಿ can mean word or utterance, but is not an exact replacement in every grammatical context.",
          "etymologyParts": [
            {
              "form": "ನುಡಿ",
              "etymology": "dravidian"
            }
          ],
          "viability": "contested",
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "alt-supp-word",
          "word": "ಸೊಲ್ಲು / ನುಡಿ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "சொல் (col)",
          "tulu": "ಪಾತೆರ್",
          "proto": "*col",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಸೊಲ್ಲು / ನುಡಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising. Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "halegannada": "ಸೊಲ್ಲು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "sources": [
        "etymology-entries.js:origin-audit"
      ],
      "sanskrit": "ಭಾಷೆ / ಪದ",
      "meaning": "Word",
      "rejectedAlternatives": []
    },
    {
      "id": "sound",
      "sourceForm": "ಧ್ವನಿ / ಶಬ್ದ",
      "sourceMeaning": "Sound / noise",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಧ್ವನಿ / ಶಬ್ದ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-sound",
          "word": "ಉಲಿ",
          "note": "ಉಲಿ is a native sound/voice term; ಸದ್ದು may fit noise or sound in everyday contexts.",
          "etymologyParts": [
            {
              "form": "ಉಲಿ",
              "etymology": "dravidian"
            }
          ],
          "viability": "contested",
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "alt-supp-sound-noise",
          "word": "ಸೊಲ್ಲು",
          "note": "ಸದ್ದು is itself a tadbhava of ಶಬ್ದ; do not present it as native.",
          "tamil": "ஓசை (ōcai)",
          "tulu": "ಸದ್ದ್",
          "proto": null,
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಸದ್ದು / ಸೊಲ್ಲು",
              "etymology": "tadbhava"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-076-1",
          "word": "ಸದ್ದು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸದ್ದು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-076-2",
          "word": "ದನಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದನಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-076-3",
          "word": "ಪದ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪದ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising. Contributor-supplied comparison; confidence: low. ಸದ್ದು is itself a tadbhava of ಶಬ್ದ; do not present it as native. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "halegannada": "ಸದ್ದು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "sources": [
        "etymology-entries.js:origin-audit",
        "contributor-equivalents.js"
      ],
      "contributorSupplied": true,
      "sanskrit": "ಧ್ವನಿ / ಶಬ್ದ",
      "meaning": "Sound / noise",
      "rejectedAlternatives": []
    },
    {
      "id": "problem",
      "sourceForm": "ಸಮಸ್ಯೆ",
      "sourceMeaning": "Problem / difficulty",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಸಮಸ್ಯೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-problem",
          "word": "ತೊಂದರೆ",
          "note": "Common native word for difficulty or trouble.",
          "etymologyParts": [
            {
              "form": "ತೊಂದರೆ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean",
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-002-1",
          "word": "ತೊಡಕು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೊಡಕು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-002-2",
          "word": "ಇಕ್ಕಟ್ಟು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಇಕ್ಕಟ್ಟು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಸಮಸ್ಯೆ",
      "meaning": "Problem / difficulty",
      "rejectedAlternatives": []
    },
    {
      "id": "help",
      "sourceForm": "ಸಹಾಯ",
      "sourceMeaning": "Help / assistance",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಸಹಾಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-help",
          "word": "ನೆರವು",
          "note": "Common native word for help or support. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "etymologyParts": [
            {
              "form": "ನೆರವು",
              "etymology": "dravidian"
            },
            {
              "form": "ನೆರವು",
              "etymology": "unknown"
            }
          ],
          "viability": "proposed",
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-006-2",
          "word": "ಒತ್ತಾಸೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒತ್ತಾಸೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಸಹಾಯ",
      "meaning": "Help / assistance",
      "rejectedAlternatives": []
    },
    {
      "id": "progress",
      "sourceForm": "ಪ್ರಗತಿ",
      "sourceMeaning": "Progress",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಪ್ರಗತಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-progress",
          "word": "ಮುನ್ನಡೆ",
          "note": "Native word for advancement or moving forward.",
          "etymologyParts": [
            {
              "form": "ಮುನ್ನಡೆ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಪ್ರಗತಿ",
      "meaning": "Progress",
      "rejectedAlternatives": []
    },
    {
      "id": "development",
      "sourceForm": "ಅಭಿವೃದ್ಧಿ",
      "sourceMeaning": "Development / growth",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಅಭಿವೃದ್ಧಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-development",
          "word": "ಬೆಳವಣಿಗೆ",
          "note": "Native word for growth or development.",
          "etymologyParts": [
            {
              "form": "ಬೆಳವಣಿಗೆ",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಅಭಿವೃದ್ಧಿ",
      "meaning": "Development / growth",
      "rejectedAlternatives": []
    },
    {
      "id": "system",
      "sourceForm": "ವ್ಯವಸ್ಥೆ",
      "sourceMeaning": "System / arrangement",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ವ್ಯವಸ್ಥೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-system",
          "word": "ಏರ್ಪಾಡು",
          "note": "Native word for arrangement or organisation; technical senses may need a specialised term.",
          "etymologyParts": [
            {
              "form": "ಏರ್ಪಾಡು",
              "etymology": "dravidian"
            }
          ],
          "viability": "clean"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ವ್ಯವಸ್ಥೆ",
      "meaning": "System / arrangement",
      "rejectedAlternatives": []
    },
    {
      "id": "connection",
      "sourceForm": "ಸಂಪರ್ಕ",
      "sourceMeaning": "Connection / contact",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಸಂಪರ್ಕ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-connection",
          "word": "ಸೇರಿಕೆ",
          "note": "Can mean joining or association; not a universal equivalent for communication/contact.",
          "etymologyParts": [
            {
              "form": "ಸೇರಿಕೆ",
              "etymology": "dravidian"
            }
          ],
          "viability": "contested"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಸಂಪರ್ಕ",
      "meaning": "Connection / contact",
      "rejectedAlternatives": []
    },
    {
      "id": "newspaper",
      "sourceForm": "ಪತ್ರಿಕೆ",
      "sourceMeaning": "Newspaper / periodical",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಪತ್ರಿಕೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "native-newspaper",
          "word": "ಸುದ್ದಿಹಾಳೆ",
          "note": "Transparent proposed compound; established usage should be checked before standardising.",
          "etymologyParts": [
            {
              "form": "ಸುದ್ದಿಹಾಳೆ",
              "etymology": "coined"
            }
          ],
          "viability": "coined"
        }
      ],
      "editorialNote": "Contributor-supplied high-impact proposal; not independently certified. Confirm etymology, usage frequency and semantic fit before standardising.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಪತ್ರಿಕೆ",
      "meaning": "Newspaper / periodical",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-tongue",
      "sourceForm": "ಜಿಹ್ವೆ",
      "sourceMeaning": "Tongue",
      "category": "Body",
      "sourceEtymology": {
        "form": "ಜಿಹ್ವೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-tongue",
          "word": "ನಾಲಿಗೆ",
          "note": "-l- ~ -k- correspondence needs DEDR check.",
          "tamil": "நாக்கு (nākku)",
          "tulu": "ನಾಲಿಗೆ",
          "proto": "*nāl- ",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ನಾಲಿಗೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-047-1",
          "word": "ನಾಲಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಾಲಗೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ನಾಲಿಗೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. -l- ~ -k- correspondence needs DEDR check. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಜಿಹ್ವೆ",
      "meaning": "Tongue",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-finger",
      "sourceForm": "ಅಂಗುಲಿ",
      "sourceMeaning": "Finger",
      "category": "Body",
      "sourceEtymology": {
        "form": "ಅಂಗುಲಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-finger",
          "word": "ಬೆರಳು",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "விரல் (viral)",
          "tulu": "ಬೆರಳ್",
          "proto": "*wer-al",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಬೆರಳು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಬೆರಲ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಅಂಗುಲಿ",
      "meaning": "Finger",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-nail-finger",
      "sourceForm": "ನಖ",
      "sourceMeaning": "Nail (finger)",
      "category": "Body",
      "sourceEtymology": {
        "form": "ನಖ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-nail-finger",
          "word": "ಉಗುರು",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "உகிர் (ukir)",
          "tulu": "ಉಗುರು",
          "proto": "*ukir",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಉಗುರು",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಉಗುರ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ನಖ",
      "meaning": "Nail (finger)",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-face",
      "sourceForm": "ಮುಖ",
      "sourceMeaning": "Face",
      "category": "Body",
      "sourceEtymology": {
        "form": "ಮುಖ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-face",
          "word": "ಮೊಗ",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "முகம் (mukam)",
          "tulu": "ಮೊಕ",
          "proto": "*mukam",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಮೊಗ",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಮೊಗ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಮುಖ",
      "meaning": "Face",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-heart",
      "sourceForm": "ಹೃದಯ",
      "sourceMeaning": "Heart",
      "category": "Body",
      "sourceEtymology": {
        "form": "ಹೃದಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-heart",
          "word": "ಎದೆ / ನೆಂಜು",
          "note": "ಎದೆ and ನೆಂಜು are different native roots; ನೆಂಜು is cognate with Tamil.",
          "tamil": "நெஞ்சு (neñcu)",
          "tulu": "ಎದೆ",
          "proto": "*neñcu",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಎದೆ / ನೆಂಜು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-048-1",
          "word": "ಎದೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎದೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-048-2",
          "word": "ಗುಂಡಿಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗುಂಡಿಗೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-048-3",
          "word": "ಮನಸ್ಸು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮನಸ್ಸು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ನೆಂಜು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. ಎದೆ and ನೆಂಜು are different native roots; ನೆಂಜು is cognate with Tamil. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಹೃದಯ",
      "meaning": "Heart",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-stomach",
      "sourceForm": "ಉದರ",
      "sourceMeaning": "Stomach",
      "category": "Body",
      "sourceEtymology": {
        "form": "ಉದರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-stomach",
          "word": "ಹೊಟ್ಟೆ",
          "note": "Kannada ಹೊಟ್ಟೆ, Tamil வயிறு and Tulu ಬಂಜಿ are different roots; do not force a Proto-Dravidian form.",
          "tamil": "வயிறு (vayiṟu)",
          "tulu": "ಬಂಜಿ",
          "proto": null,
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಹೊಟ್ಟೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಪೊಟ್ಟೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: low. Kannada ಹೊಟ್ಟೆ, Tamil வயிறு and Tulu ಬಂಜಿ are different roots; do not force a Proto-Dravidian form.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಉದರ",
      "meaning": "Stomach",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-bone",
      "sourceForm": "ಅಸ್ಥಿ",
      "sourceMeaning": "Bone",
      "category": "Body",
      "sourceEtymology": {
        "form": "ಅಸ್ಥಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-bone",
          "word": "ಮೂಳೆ",
          "note": "Contributor-supplied comparison; confidence: low.",
          "tamil": "எலும்பு (elumpu)",
          "tulu": "ಮೂಳೆ",
          "proto": null,
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಮೂಳೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಮೂಳೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: low.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಅಸ್ಥಿ",
      "meaning": "Bone",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-breath",
      "sourceForm": "ಶ್ವಾಸ",
      "sourceMeaning": "Breath",
      "category": "Body",
      "sourceEtymology": {
        "form": "ಶ್ವಾಸ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-breath",
          "word": "ಉಸಿರು",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "மூச்சு (mūccu)",
          "tulu": "ಉಸಿರ್",
          "proto": "*ūcir (uncertain)",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಉಸಿರು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಉಸಿರ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಶ್ವಾಸ",
      "meaning": "Breath",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-star",
      "sourceForm": "ನಕ್ಷತ್ರ",
      "sourceMeaning": "Star",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ನಕ್ಷತ್ರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-star",
          "word": "ಚುಕ್ಕೆ",
          "note": "Contributor-supplied comparison; confidence: low.",
          "tamil": "விண்மீன் (different)",
          "tulu": "ಚುಕ್ಕೆ",
          "proto": null,
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಚುಕ್ಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಚುಕ್ಕೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: low.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ನಕ್ಷತ್ರ",
      "meaning": "Star",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-leaf",
      "sourceForm": "ಪರ್ಣ",
      "sourceMeaning": "Leaf",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಪರ್ಣ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-leaf",
          "word": "ಎಲೆ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "இலை (ilai)",
          "tulu": "ಎಲೆ",
          "proto": "*ilai",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಎಲೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಎಲೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಪರ್ಣ",
      "meaning": "Leaf",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-seed",
      "sourceForm": "ಬೀಜ",
      "sourceMeaning": "Seed",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಬೀಜ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-seed",
          "word": "ಬಿತ್ತು",
          "note": "Contributor-supplied comparison; confidence: medium. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "வித்து (vittu)",
          "tulu": "ಬಿತ್ತ್",
          "proto": "*wittu",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಿತ್ತು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-280-2",
          "word": "ಕಾಳು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಾಳು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಬಿತ್ತ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಬೀಜ",
      "meaning": "Seed",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-root",
      "sourceForm": "ಮೂಲ",
      "sourceMeaning": "Root",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಮೂಲ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-root",
          "word": "ಬೇರು",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "வேர் (vēr)",
          "tulu": "ಬೇರ್",
          "proto": "*wēr",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಬೇರು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಬೇರ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಮೂಲ",
      "meaning": "Root",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-grass",
      "sourceForm": "ತೃಣ",
      "sourceMeaning": "Grass",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ತೃಣ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-grass",
          "word": "ಹುಲ್ಲು",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "புல் (pul)",
          "tulu": "ಪುಲ್ಲು",
          "proto": "*pul",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಹುಲ್ಲು",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಪುಲ್ಲು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ತೃಣ",
      "meaning": "Grass",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-rock-boulder",
      "sourceForm": "ಶಿಲೆ",
      "sourceMeaning": "Rock / boulder",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಶಿಲೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-rock-boulder",
          "word": "ಬಂಡೆ",
          "note": "Contributor-supplied comparison; confidence: low. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "பாறை (pāṟai)",
          "tulu": "ಬಂಡೆ",
          "proto": null,
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಂಡೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-197-1",
          "word": "ಕಲ್ಲು",
          "note": "DEDR 1298 lists Proto-Dravidian *kal ‘stone’, Tamil kal, Kannada kal/kallu and Tulu kallů. This is a well-supported cognate set.",
          "viability": "clean",
          "proto": "*kal (stone; DEDR 1298)",
          "tamil": "கல் (kal; stone; DEDR 1298)",
          "tulu": "kallů (stone; DEDR 1298)",
          "etymologyParts": [
            {
              "form": "ಕಲ್ಲು",
              "etymology": "dravidian"
            }
          ],
          "linguisticEvidence": {
            "protoDravidian": {
              "status": "attested",
              "form": "*kal",
              "meaning": "stone",
              "reference": "DEDR 1298"
            },
            "tamil": {
              "status": "attested",
              "form": "kal",
              "meaning": "stone, pebble, boulder",
              "reference": "DEDR 1298"
            },
            "kannada": {
              "status": "attested",
              "form": "kallu",
              "meaning": "stone",
              "reference": "DEDR 1298"
            },
            "tulu": {
              "status": "attested",
              "form": "kallů",
              "meaning": "stone",
              "reference": "DEDR 1298"
            }
          },
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಬಂಡೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: low. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಶಿಲೆ",
      "meaning": "Rock / boulder",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-stone",
      "sourceForm": "ಪಾಷಾಣ / ಕಲ್ಲು",
      "sourceMeaning": "Stone",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಪಾಷಾಣ / ಕಲ್ಲು",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-stone",
          "word": "ಕಲ್ಲು",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "கல் (kal)",
          "tulu": "ಕಲ್ಲ್",
          "proto": "*kal",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಕಲ್ಲು",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಕಲ್ಲ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಪಾಷಾಣ / ಕಲ್ಲು",
      "meaning": "Stone",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-silver",
      "sourceForm": "ರಜತ",
      "sourceMeaning": "Silver",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ರಜತ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-silver",
          "word": "ಬೆಳ್ಳಿ",
          "note": "Contributor-supplied comparison; confidence: medium. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "வெள்ளி (veḷḷi)",
          "tulu": "ಬೊಳ್ಳಿ",
          "proto": "*weḷḷi",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೆಳ್ಳಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        }
      ],
      "halegannada": "ಪೊಳ್ಳಿ / ಬೆಳ್ಳಿ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ರಜತ",
      "meaning": "Silver",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-poison",
      "sourceForm": "ವಿಷ",
      "sourceMeaning": "Poison",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ವಿಷ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-poison",
          "word": "ನಂಜು",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "நஞ்சு (nañcu)",
          "tulu": "ನಂಜಿ",
          "proto": "*nañcu",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ನಂಜು",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ನಂಜು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ವಿಷ",
      "meaning": "Poison",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-light-brightness",
      "sourceForm": "ಪ್ರಕಾಶ",
      "sourceMeaning": "Light / brightness",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಪ್ರಕಾಶ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-light-brightness",
          "word": "ಬೆಳಕು",
          "note": "Contributor-supplied comparison; confidence: medium. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "வெளிச்சம் (veḷiccam)",
          "tulu": "ಬೆಲ್ಕ್",
          "proto": "*weḷ-",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೆಳಕು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-087-2",
          "word": "ಹೊಳಪು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೊಳಪು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-087-3",
          "word": "ಕಾಂತಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಾಂತಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಬೆಳಕು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಪ್ರಕಾಶ",
      "meaning": "Light / brightness",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-darkness",
      "sourceForm": "ಅಂಧಕಾರ",
      "sourceMeaning": "Darkness",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಅಂಧಕಾರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-darkness",
          "word": "ಕತ್ತಲೆ / ಇರುಳು",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "இருள் (iruḷ)",
          "tulu": "ಇರುಳು",
          "proto": "*irul",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಕತ್ತಲೆ / ಇರುಳು",
              "etymology": "dravidian"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-088-1",
          "word": "ಕತ್ತಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕತ್ತಲು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-088-2",
          "word": "ಇರುಳು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಇರುಳು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಇರುಳ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಅಂಧಕಾರ",
      "meaning": "Darkness",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-cold",
      "sourceForm": "ಶೈತ್ಯ",
      "sourceMeaning": "Cold",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಶೈತ್ಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-cold",
          "word": "ಚಳಿ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "குளிர் (kuḷir)",
          "tulu": "ಚಳಿ",
          "proto": "*kuḷir",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಚಳಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಚಳಿ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಶೈತ್ಯ",
      "meaning": "Cold",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-smoke",
      "sourceForm": "ಧೂಮ",
      "sourceMeaning": "Smoke",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಧೂಮ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-smoke",
          "word": "ಹೊಗೆ",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "புகை (pukai)",
          "tulu": "ಪೊಗೆ",
          "proto": "*pukai",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಹೊಗೆ",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಪೊಗೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಧೂಮ",
      "meaning": "Smoke",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-flame",
      "sourceForm": "ಜ್ವಾಲೆ",
      "sourceMeaning": "Flame",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಜ್ವಾಲೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-flame",
          "word": "ಉರಿ / ಕಿಚ್ಚು",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "தீ (tī)",
          "tulu": "ಕಿಚ್ಚಿ",
          "proto": "*kiccu",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಉರಿ / ಕಿಚ್ಚು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಕಿಚ್ಚು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಜ್ವಾಲೆ",
      "meaning": "Flame",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-sand",
      "sourceForm": "ಮರಳು",
      "sourceMeaning": "Sand",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಮರಳು",
        "etymology": "dravidian"
      },
      "alternatives": [
        {
          "id": "alt-supp-sand",
          "word": "ಮರಳು",
          "note": "Not a Sanskrit word; included as a native-only anchor.",
          "tamil": "மணல் (maṇal)",
          "tulu": "ಮರಳ್",
          "proto": "*maṇal",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಮರಳು",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಮರಳ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Not a Sanskrit word; included as a native-only anchor.",
      "scopeNote": "Native-only anchor, not a Sanskrit-derived target.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಮರಳು",
      "meaning": "Sand",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-direction",
      "sourceForm": "ದಿಗ್ವಲಯ / ದಿಕ್ಕು",
      "sourceMeaning": "Direction",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ದಿಗ್ವಲಯ / ದಿಕ್ಕು",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-direction",
          "word": "ದೆಸೆ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "திசை (Skt.)",
          "tulu": "ದಿಕ್ಕ್",
          "proto": "*tecai",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ದೆಸೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ದೆಸೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ದಿಗ್ವಲಯ / ದಿಕ್ಕು",
      "meaning": "Direction",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-man-male",
      "sourceForm": "ಪುರುಷ",
      "sourceMeaning": "Man (male)",
      "category": "People",
      "sourceEtymology": {
        "form": "ಪುರುಷ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-man-male",
          "word": "ಗಂಡು / ಗಂಡಸು",
          "note": "Contributor-supplied comparison; confidence: low.",
          "tamil": "ஆண் (āṇ)",
          "tulu": "ಗಂಡು",
          "proto": null,
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಗಂಡು / ಗಂಡಸು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಗಂಡ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: low.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಪುರುಷ",
      "meaning": "Man (male)",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-boy-child",
      "sourceForm": "ಬಾಲಕ",
      "sourceMeaning": "Boy / child",
      "category": "People",
      "sourceEtymology": {
        "form": "ಬಾಲಕ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-boy-child",
          "word": "ಹುಡುಗ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "பையன் (paiyaṉ)",
          "tulu": "ಹುಡುಗ",
          "proto": "*puṭu- (uncertain)",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಹುಡುಗ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಪುಡುಗ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಬಾಲಕ",
      "meaning": "Boy / child",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-old-person",
      "sourceForm": "ವೃದ್ಧ",
      "sourceMeaning": "Old person",
      "category": "People",
      "sourceEtymology": {
        "form": "ವೃದ್ಧ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-old-person",
          "word": "ಮುದುಕ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "முதியவர் (mutiyavar)",
          "tulu": "ಮುದುಕ",
          "proto": "*mut-",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಮುದುಕ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಮುದುಕ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ವೃದ್ಧ",
      "meaning": "Old person",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-enemy",
      "sourceForm": "ಶತ್ರು",
      "sourceMeaning": "Enemy",
      "category": "People",
      "sourceEtymology": {
        "form": "ಶತ್ರು",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-enemy",
          "word": "ಹಗೆ",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "பகை (pakai)",
          "tulu": "ಹಗೆ",
          "proto": "*pakai",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಹಗೆ",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಹಗೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಶತ್ರು",
      "meaning": "Enemy",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-people",
      "sourceForm": "ಜನ",
      "sourceMeaning": "People",
      "category": "People",
      "sourceEtymology": {
        "form": "ಜನ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-people",
          "word": "ಮಂದಿ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "மக்கள் (makkaḷ)",
          "tulu": "ಮಂದಿ",
          "proto": "*makkaḷ",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಮಂದಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಮಂದಿ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಜನ",
      "meaning": "People",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-subject-citizen",
      "sourceForm": "ಪ್ರಜೆ",
      "sourceMeaning": "Subject / citizen",
      "category": "People",
      "sourceEtymology": {
        "form": "ಪ್ರಜೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-subject-citizen",
          "word": "ಒಕ್ಕಲು",
          "note": "Contributor-supplied comparison; confidence: medium. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "குடி (kuṭi)",
          "tulu": "ಒಕ್ಕಲ್",
          "proto": "*okkal",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಕ್ಕಲು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-069-2",
          "word": "ಮಂದಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಂದಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-069-3",
          "word": "ನಾಡವರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಾಡವರು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಒಕ್ಕಲ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಪ್ರಜೆ",
      "meaning": "Subject / citizen",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-infant",
      "sourceForm": "ಶಿಶು",
      "sourceMeaning": "Infant",
      "category": "People",
      "sourceEtymology": {
        "form": "ಶಿಶು",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-infant",
          "word": "ಕೂಸು / ಮಗು",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "குழந்தை (kuḻantai)",
          "tulu": "ಕೂಸು",
          "proto": "*kuḻantai",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಕೂಸು / ಮಗು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಕೂಸು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಶಿಶು",
      "meaning": "Infant",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-wife",
      "sourceForm": "ಭಾರ್ಯೆ",
      "sourceMeaning": "Wife",
      "category": "People",
      "sourceEtymology": {
        "form": "ಭಾರ್ಯೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-wife",
          "word": "ಹೆಂಡತಿ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "மனைவி (Skt.) / பெண்டாட்டி",
          "tulu": "ಪೊಂಜಲ್",
          "proto": "*peṇ-",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಹೆಂಡತಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಪೆಂಡತಿ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಭಾರ್ಯೆ",
      "meaning": "Wife",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-husband",
      "sourceForm": "ಪತಿ",
      "sourceMeaning": "Husband",
      "category": "People",
      "sourceEtymology": {
        "form": "ಪತಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-husband",
          "word": "ಗಂಡ",
          "note": "Contributor-supplied comparison; confidence: medium. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "கணவன் (Skt.)",
          "tulu": "ಗಂಡ",
          "proto": "*gaṇḍ- (uncertain)",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗಂಡ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-057-2",
          "word": "ಒಡೆಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಡೆಯ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಗಂಡ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಪತಿ",
      "meaning": "Husband",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-brother",
      "sourceForm": "ಸಹೋದರ",
      "sourceMeaning": "Brother",
      "category": "People",
      "sourceEtymology": {
        "form": "ಸಹೋದರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-brother",
          "word": "ಸೋದರ / ಅಣ್ಣ-ತಮ್ಮ",
          "note": "ಸೋದರ is the native Kannada form; Sanskritic ಸಹೋದರ is the formal register.",
          "tamil": "சகோதரன் (Skt.)",
          "tulu": "ಸೋದರೆ",
          "proto": null,
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಸೋದರ / ಅಣ್ಣ-ತಮ್ಮ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಸೋದರ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. ಸೋದರ is the native Kannada form; Sanskritic ಸಹೋದರ is the formal register.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಸಹೋದರ",
      "meaning": "Brother",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-relative",
      "sourceForm": "ಬಂಧು",
      "sourceMeaning": "Relative",
      "category": "People",
      "sourceEtymology": {
        "form": "ಬಂಧು",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-relative",
          "word": "ನಂಟ / ಬಳಗ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "உறவினர் (uṟaviṉar)",
          "tulu": "ಬಳಗ",
          "proto": "*naṭpu (uncertain)",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ನಂಟ / ಬಳಗ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ನಂಟ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಬಂಧು",
      "meaning": "Relative",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-teacher",
      "sourceForm": "ಗುರು",
      "sourceMeaning": "Teacher",
      "category": "People",
      "sourceEtymology": {
        "form": "ಗುರು",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-teacher",
          "word": "No settled native equivalent",
          "note": "No settled native single-word equivalent; flag as a gap rather than coin.",
          "tamil": "ஆசிரியர் (Skt.)",
          "tulu": "ಗುರು",
          "proto": null,
          "viability": "no_alternative",
          "etymologyParts": []
        }
      ],
      "halegannada": null,
      "halegannadaEvidence": null,
      "editorialNote": "Contributor-supplied comparison; confidence: low. No settled native single-word equivalent; flag as a gap rather than coin.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಗುರು",
      "meaning": "Teacher",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-door",
      "sourceForm": "ದ್ವಾರ",
      "sourceMeaning": "Door",
      "category": "Society",
      "sourceEtymology": {
        "form": "ದ್ವಾರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-door",
          "word": "ಬಾಗಿಲು",
          "note": "Contributor-supplied comparison; confidence: medium. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "கதவு (kathavu)",
          "tulu": "ಬಾಕಿಲ್",
          "proto": "*wāyil",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಾಗಿಲು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-097-2",
          "word": "ಹೆಬ್ಬಾಗಿಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೆಬ್ಬಾಗಿಲು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಬಾಗಿಲ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ದ್ವಾರ",
      "meaning": "Door",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-bed",
      "sourceForm": "ಶಯನ",
      "sourceMeaning": "Bed",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಶಯನ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-bed",
          "word": "ಹಾಸಿಗೆ / ಮಂಚ",
          "note": "Contributor-supplied comparison; confidence: low.",
          "tamil": "படுக்கை (paṭukkai)",
          "tulu": "ಹಾಸಿಗೆ",
          "proto": "*pāṭ- (uncertain)",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಹಾಸಿಗೆ / ಮಂಚ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಹಾಸಿಗೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: low.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಶಯನ",
      "meaning": "Bed",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-ornament",
      "sourceForm": "ಆಭರಣ",
      "sourceMeaning": "Ornament",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಆಭರಣ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-ornament",
          "word": "ಒಡವೆ",
          "note": "Contributor-supplied comparison; confidence: low. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "அணிகலன் (aṇikalaṉ)",
          "tulu": "ಒಡವೆ",
          "proto": null,
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಡವೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-094-2",
          "word": "ತೊಡಿಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೊಡಿಗೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-094-3",
          "word": "ಸಿಂಗಾರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಿಂಗಾರ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಒಡವೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: low. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಆಭರಣ",
      "meaning": "Ornament",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-sandal-footwear",
      "sourceForm": "ಪಾದುಕೆ",
      "sourceMeaning": "Sandal / footwear",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಪಾದುಕೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-sandal-footwear",
          "word": "ಮೆಟ್ಟು / ಚಪ್ಪಲಿ",
          "note": "Contributor-supplied comparison; confidence: low.",
          "tamil": "செருப்பு (ceruppu)",
          "tulu": "ಮೆಟ್ಟ್",
          "proto": "*ceṟuppu",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಮೆಟ್ಟು / ಚಪ್ಪಲಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಮೆಟ್ಟು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: low.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಪಾದುಕೆ",
      "meaning": "Sandal / footwear",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-marriage",
      "sourceForm": "ವಿವಾಹ",
      "sourceMeaning": "Marriage",
      "category": "Society",
      "sourceEtymology": {
        "form": "ವಿವಾಹ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-marriage",
          "word": "ಮದುವೆ",
          "note": "Contributor-supplied comparison; confidence: medium. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "திருமணம் (Skt.)",
          "tulu": "ಮದಿಮೆ",
          "proto": "*matu- (uncertain)",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮದುವೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-222-2",
          "word": "ಕಲ್ಯಾಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಲ್ಯಾಣ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-222-3",
          "word": "ನಂಟು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಂಟು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಮದುವೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ವಿವಾಹ",
      "meaning": "Marriage",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-property",
      "sourceForm": "ಆಸ್ತಿ",
      "sourceMeaning": "Property",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಆಸ್ತಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-property",
          "word": "ಸೊತ್ತು",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "சொத்து (cottu)",
          "tulu": "ಸೊತ್ತು",
          "proto": "*cotta",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಸೊತ್ತು",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಸೊತ್ತು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಆಸ್ತಿ",
      "meaning": "Property",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-debt",
      "sourceForm": "ಋಣ",
      "sourceMeaning": "Debt",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಋಣ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-debt",
          "word": "ಸಾಲ",
          "note": "Contributor-supplied comparison; confidence: low. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "கடன் (kaṭaṉ)",
          "tulu": "ಸಾಲ",
          "proto": null,
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಾಲ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-207-2",
          "word": "ಹೊಣೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೊಣೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-207-3",
          "word": "ಬಾಕಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಾಕಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಸಾಲ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: low. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಋಣ",
      "meaning": "Debt",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-price",
      "sourceForm": "ಕ್ರಯ",
      "sourceMeaning": "Price",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಕ್ರಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-price",
          "word": "ಬೆಲೆ",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "விலை (vilai)",
          "tulu": "ಬೆಲೆ",
          "proto": "*wilai",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಬೆಲೆ",
              "etymology": "dravidian"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-202-1",
          "word": "ಕೊಳ್ಳುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೊಳ್ಳುವಿಕೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-202-2",
          "word": "ಖರೀದಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಖರೀದಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಬೆಲೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಕ್ರಯ",
      "meaning": "Price",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-pot",
      "sourceForm": "ಕುಂಭ",
      "sourceMeaning": "Pot",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಕುಂಭ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-pot",
          "word": "ಮಡಕೆ / ಕೊಡ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "குடம் (kuṭam)",
          "tulu": "ಮಡಕೆ",
          "proto": "*kuṭam",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಮಡಕೆ / ಕೊಡ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಮಡಕೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಕುಂಭ",
      "meaning": "Pot",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-wealth-money",
      "sourceForm": "ಧನ",
      "sourceMeaning": "Wealth / money",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಧನ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-wealth-money",
          "word": "ಹಣ / ಸೊಮ್ಮು",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "பொன் / பணம் (loan)",
          "tulu": "ಹಣ",
          "proto": "*paṇ-",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಹಣ / ಸೊಮ್ಮು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-095-1",
          "word": "ಹಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಣ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-095-2",
          "word": "ದುಡ್ಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದುಡ್ಡು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-095-3",
          "word": "ಸಂಪತ್ತು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಂಪತ್ತು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-095-4",
          "word": "ಒಡವೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಡವೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಪಣ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಧನ",
      "meaning": "Wealth / money",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-dam-bund",
      "sourceForm": "ಸೇತು",
      "sourceMeaning": "Dam / bund",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಸೇತು",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-dam-bund",
          "word": "ಅಣೆ / ಕಟ್ಟೆ",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "அணை (aṇai)",
          "tulu": "ಅಣೆ",
          "proto": "*aṇai",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಅಣೆ / ಕಟ್ಟೆ",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಅಣೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಸೇತು",
      "meaning": "Dam / bund",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-honey",
      "sourceForm": "ಮಧು",
      "sourceMeaning": "Honey",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಮಧು",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-honey",
          "word": "ಜೇನು",
          "note": "Contributor-supplied comparison; confidence: high. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "தேன் (tēn)",
          "tulu": "ಜೇನ್",
          "proto": "*tēn",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಜೇನು",
              "etymology": "dravidian"
            },
            {
              "form": "ಜೇನು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-276-2",
          "word": "ಸಿಹಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಿಹಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಜೇನ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಮಧು",
      "meaning": "Honey",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-ghee",
      "sourceForm": "ಘೃತ",
      "sourceMeaning": "Ghee",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಘೃತ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-ghee",
          "word": "ತುಪ್ಪ",
          "note": "Contributor-supplied comparison; confidence: high. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "நெய் (ney)",
          "tulu": "ತುಪ್ಪ",
          "proto": "*ney",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತುಪ್ಪ",
              "etymology": "dravidian"
            },
            {
              "form": "ತುಪ್ಪ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        }
      ],
      "halegannada": "ತುಪ್ಪ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಘೃತ",
      "meaning": "Ghee",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-salt",
      "sourceForm": "ಲವಣ",
      "sourceMeaning": "Salt",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಲವಣ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-salt",
          "word": "ಉಪ್ಪು",
          "note": "Contributor-supplied comparison; confidence: high. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "உப்பு (uppu)",
          "tulu": "ಉಪ್ಪು",
          "proto": "*uppu",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಉಪ್ಪು",
              "etymology": "dravidian"
            },
            {
              "form": "ಉಪ್ಪು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        }
      ],
      "halegannada": "ಉಪ್ಪು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಲವಣ",
      "meaning": "Salt",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-cooked-rice",
      "sourceForm": "ಅನ್ನ",
      "sourceMeaning": "Cooked rice",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಅನ್ನ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-cooked-rice",
          "word": "ಕೂಳು / ಅನ್ನ",
          "note": "ಕೂಳು is native but lower-register in modern usage; flag this honestly.",
          "tamil": "சோறு (cōṟu)",
          "tulu": "ಕೂಳು",
          "proto": "*cōṟu",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಕೂಳು / ಅನ್ನ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-278-1",
          "word": "ಕೂಳು",
          "note": "DEDR 1911 identifies Kannada kūḻ (ಕೂಳು) ‘boiled rice, food’ as part of Proto-Dravidian *kūḻ ‘porridge’. Tamil kūḻ means thick gruel/porridge; Tulu kūru/kūlu/kūḷu means boiled rice. This is a genuine cognate set, but the meanings range from porridge to boiled rice and food; it should not be treated as an exact synonym for every use of ‘food’.",
          "proto": "*kūḻ (porridge; DEDR 1911)",
          "tamil": "கூழ் (kūḻ; thick gruel, porridge)",
          "tulu": "kūru / kūlu / kūḷu (boiled rice)",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಕೂಳು",
              "etymology": "dravidian"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-278-2",
          "word": "ಬೋನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೋನ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಕೂಳ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. ಕೂಳು is native but lower-register in modern usage; flag this honestly. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಅನ್ನ",
      "meaning": "Cooked rice",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-meal",
      "sourceForm": "ಭೋಜನ",
      "sourceMeaning": "Meal",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಭೋಜನ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-meal",
          "word": "ಊಟ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "உணவு (uṇavu)",
          "tulu": "ಊಟ",
          "proto": "*ūṭu",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಊಟ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಊಟ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಭೋಜನ",
      "meaning": "Meal",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-lake-tank",
      "sourceForm": "ಜಲಾಶಯ",
      "sourceMeaning": "Lake / tank",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಜಲಾಶಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-lake-tank",
          "word": "ಕೆರೆ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "ஏரி (ēri)",
          "tulu": "ಕೆರೆ",
          "proto": "*kerey",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಕೆರೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಕೆರೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಜಲಾಶಯ",
      "meaning": "Lake / tank",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-hunger",
      "sourceForm": "ಕ್ಷುಧೆ",
      "sourceMeaning": "Hunger",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಕ್ಷುಧೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-hunger",
          "word": "ಹಸಿವು",
          "note": "Contributor-supplied comparison; confidence: medium. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "பசி (paci)",
          "tulu": "ಪಸಿ",
          "proto": "*pacai",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಸಿವು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        }
      ],
      "halegannada": "ಪಸಿ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಕ್ಷುಧೆ",
      "meaning": "Hunger",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-memory",
      "sourceForm": "ಸ್ಮರಣೆ",
      "sourceMeaning": "Memory",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಸ್ಮರಣೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-memory",
          "word": "ನೆನಪು",
          "note": "Contributor-supplied comparison; confidence: medium. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "நினைவு (niṉaivu)",
          "tulu": "ನೆನೆಪು",
          "proto": "*niney",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೆನಪು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-104-2",
          "word": "ಎಚ್ಚರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಚ್ಚರ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ನೆನೆಪು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಸ್ಮರಣೆ",
      "meaning": "Memory",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-sight-view",
      "sourceForm": "ದರ್ಶನ",
      "sourceMeaning": "Sight / view",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ದರ್ಶನ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-sight-view",
          "word": "ನೋಟ / ಕಾಣ್ಕೆ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "காட்சி (kāṭci)",
          "tulu": "ನೋಟ",
          "proto": "*kāṇ",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ನೋಟ / ಕಾಣ್ಕೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-133-1",
          "word": "ನೋಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೋಟ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-133-2",
          "word": "ಕಾಣ್ಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಾಣ್ಕೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-133-3",
          "word": "ಕಣ್ಣಾರೆ ಕಾಣುವುದು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಣ್ಣಾರೆ ಕಾಣುವುದು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ನೋಟ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ದರ್ಶನ",
      "meaning": "Sight / view",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-desire",
      "sourceForm": "ಇಚ್ಛೆ",
      "sourceMeaning": "Desire",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಇಚ್ಛೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-desire",
          "word": "ಬಯಕೆ",
          "note": "ಆಸೆ is itself a Prakrit/Sanskrit loan; prefer ಬಯಕೆ.",
          "tamil": "விருப்பம் (viruppam)",
          "tulu": "ಬಯಕೆ",
          "proto": "*bayakku",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಬಯಕೆ / ಆಸೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಬಯಕೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. ಆಸೆ is itself a Prakrit/Sanskrit loan; prefer ಬಯಕೆ.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಇಚ್ಛೆ",
      "meaning": "Desire",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-comfort-ease",
      "sourceForm": "ಸುಖ",
      "sourceMeaning": "Comfort / ease",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಸುಖ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-comfort-ease",
          "word": "ನೆಮ್ಮದಿ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "இன்பம் (iṉpam)",
          "tulu": "ನೆಮ್ಮದಿ",
          "proto": null,
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ನೆಮ್ಮದಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ನೆಮ್ಮದಿ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಸುಖ",
      "meaning": "Comfort / ease",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-strength",
      "sourceForm": "ಶಕ್ತಿ",
      "sourceMeaning": "Strength",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಶಕ್ತಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-strength",
          "word": "ಹುರುಪು",
          "note": "ಬಲ is Sanskrit bala; prefer ಹುರುಪು or ಆಳ್.",
          "tamil": "வலி (vali)",
          "tulu": "ಹುರುಪು",
          "proto": "*val",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಹುರುಪು / ಬಲ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-085-1",
          "word": "ಕಸುವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಸುವು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-085-2",
          "word": "ಬಲ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಲ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-085-3",
          "word": "ತಾಕತ್ತು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಾಕತ್ತು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಪೊರುಪು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. ಬಲ is Sanskrit bala; prefer ಹುರುಪು or ಆಳ್. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಶಕ್ತಿ",
      "meaning": "Strength",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-intellect",
      "sourceForm": "ಬುದ್ಧಿ",
      "sourceMeaning": "Intellect",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಬುದ್ಧಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-intellect",
          "word": "ತಿಳಿವು",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "அறிவு (aṟிவு)",
          "tulu": "ತೆರಿವು",
          "proto": "*tel-",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ತಿಳಿವು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-106-1",
          "word": "ಜಾಣ್ಮೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಜಾಣ್ಮೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-106-2",
          "word": "ಮತಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮತಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-106-3",
          "word": "ತಿಳಿವಳಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿಳಿವಳಿಕೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ತಿಳಿವು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಬುದ್ಧಿ",
      "meaning": "Intellect",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-mind",
      "sourceForm": "ಮನಸ್ಸು",
      "sourceMeaning": "Mind",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಮನಸ್ಸು",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-mind",
          "word": "ನೆಂಜು / ಒಳಗು",
          "note": "ಮನ is Sanskrit manas; do not offer it as native.",
          "tamil": "மனம் (Skt.) / நெஞ்சு",
          "tulu": "ನೆಂಜ್",
          "proto": "*neñcu",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ನೆಂಜು / ಒಳಗು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ನೆಂಜು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. ಮನ is Sanskrit manas; do not offer it as native.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಮನಸ್ಸು",
      "meaning": "Mind",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-life-breath-self",
      "sourceForm": "ಪ್ರಾಣ / ಆತ್ಮ",
      "sourceMeaning": "Life-breath / self",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಪ್ರಾಣ / ಆತ್ಮ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-life-breath-self",
          "word": "ಉಸಿರು / ಉಯಿರ್",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "உயிர் (uyir)",
          "tulu": "ಉಸಿರ್",
          "proto": "*uyir",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಉಸಿರು / ಉಯಿರ್",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಉಯಿರ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಪ್ರಾಣ / ಆತ್ಮ",
      "meaning": "Life-breath / self",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-anger",
      "sourceForm": "ಕ್ರೋಧ",
      "sourceMeaning": "Anger",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಕ್ರೋಧ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-anger",
          "word": "ಸಿಟ್ಟು / ಮುನಿಸು",
          "note": "Contributor-supplied comparison; confidence: low.",
          "tamil": "கோபம் (Skt.) / சினம்",
          "tulu": "ಸಿಟ್ಟ್",
          "proto": null,
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಸಿಟ್ಟು / ಮುನಿಸು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಸಿಟ್ಟು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: low.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಕ್ರೋಧ",
      "meaning": "Anger",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-time",
      "sourceForm": "ಕಾಲ",
      "sourceMeaning": "Time",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಕಾಲ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-time",
          "word": "ಹೊತ್ತು",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "பொழுது (poḻutu)",
          "tulu": "ಪೊರ್ತು",
          "proto": "*poḻutu",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಹೊತ್ತು",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಪೊರ್ತು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಕಾಲ",
      "meaning": "Time",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-day",
      "sourceForm": "ದಿನ",
      "sourceMeaning": "Day",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ದಿನ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-day",
          "word": "ನಾಳ್ / ಹಗಲು",
          "note": "ನಾಳ್ survives in ನಾಳೆ and compounds; archaic as a free word.",
          "tamil": "நாள் (nāḷ)",
          "tulu": "ನಾಳ್",
          "proto": "*nāḷ",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ನಾಳ್ / ಹಗಲು",
              "etymology": "dravidian"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-032-1",
          "word": "ಹಗಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review. Comparative evidence: Proto-Dravidian *pakal ‘daylight’; Tamil பகல் (pakal); Telugu పగలు (pagalu); Malayalam പകൽ (pakal); Kannada ಹಗಲು (hagalu), from Old Kannada ಪಗಲ್ (pagal). Tulu shows the p-initial form pagal/pagalu; historical comparative discussion explicitly treats Kannada hagalu as a Kannada h- form and Tulu pagal as the native p- counterpart, rather than treating Tulu hagalu as an inherited cognate. Sources: DEDR 3151; Tamil Lexicon (University of Madras, 1924–1936); historical discussion in Indian Antiquary, vol. 62; comparative Dravidian references.",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಹಗಲು",
              "etymology": "unknown"
            },
            {
              "form": "ಹಗಲು",
              "etymology": "dravidian"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ],
          "tamil": "பகல் (pakal; DEDR 3151)",
          "tulu": "pagal / pagalu (p-initial Tulu form; DEDR 3151)",
          "proto": "*pakal (daylight; DEDR 3151)",
          "editorialNote": ""
        },
        {
          "id": "contrib-032-2",
          "word": "ನಾಳ್",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಾಳ್",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ನಾಳ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Old Kannada form reported in historical comparative discussion; primary inscription or dated text citation is still pending."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high. ನಾಳ್ survives in ನಾಳೆ and compounds; archaic as a free word. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology. Comparative set includes a valuable historical sound correspondence: Old Kannada ಪಗಲ್ > modern Kannada ಹಗಲು, while Tulu retains p-initial pagal. Halegannada form is reported as ಪಗಲ್; a primary corpus citation should be added before marking it fully verified.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "halegannadaVariants": [
        "ನಾಳ್",
        "ಪಗಲ್"
      ],
      "sanskrit": "ದಿನ",
      "meaning": "Day",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-daytime",
      "sourceForm": "ದಿವಸ",
      "sourceMeaning": "Daytime",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ದಿವಸ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-daytime",
          "word": "ಹಗಲು",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "பகல் (pakal)",
          "tulu": "ಪಗಲ್",
          "proto": "*pakal",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಹಗಲು",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಪಗಲ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ದಿವಸ",
      "meaning": "Daytime",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-month",
      "sourceForm": "ಮಾಸ",
      "sourceMeaning": "Month",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಮಾಸ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-month",
          "word": "ತಿಂಗಳು",
          "note": "Contributor-supplied comparison; confidence: high. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "மாதம் (Skt.) / திங்கள்",
          "tulu": "ತಿಂಗೊಲು",
          "proto": "*tiṅkaḷ",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿಂಗಳು",
              "etymology": "dravidian"
            },
            {
              "form": "ತಿಂಗಳು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        }
      ],
      "halegannada": "ತಿಂಗಳ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high. DEDR 3213 supplied; not independently verified. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಮಾಸ",
      "meaning": "Month",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-evening-dusk",
      "sourceForm": "ಸಂಧ್ಯಾ",
      "sourceMeaning": "Evening / dusk",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಸಂಧ್ಯಾ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-evening-dusk",
          "word": "ಸಂಜೆ",
          "note": "Contributor-supplied comparison; confidence: low.",
          "tamil": "மாலை (mālai)",
          "tulu": "ಸಂಜೆ",
          "proto": null,
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಸಂಜೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಸಂಜೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: low.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಸಂಧ್ಯಾ",
      "meaning": "Evening / dusk",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-morning",
      "sourceForm": "ಪ್ರಾತಃ",
      "sourceMeaning": "Morning",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಪ್ರಾತಃ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-morning",
          "word": "ಬೆಳಗು",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "காலை (kālai)",
          "tulu": "ಬೆಲ್ಗ್",
          "proto": "*weḷ-",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಬೆಳಗು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಬೆಳಗು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಪ್ರಾತಃ",
      "meaning": "Morning",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-noon",
      "sourceForm": "ಮಧ್ಯಾಹ್ನ",
      "sourceMeaning": "Noon",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಮಧ್ಯಾಹ್ನ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-noon",
          "word": "ನಡುಹಗಲು",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "நண்பகல் (naṇpakal)",
          "tulu": "ನಡುಪಗಲ್",
          "proto": "*pakal",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ನಡುಹಗಲು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ನಡುಪಗಲ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಮಧ್ಯಾಹ್ನ",
      "meaning": "Noon",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-beginning",
      "sourceForm": "ಆದಿ",
      "sourceMeaning": "Beginning",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಆದಿ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-beginning",
          "word": "ಮೊದಲ್",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "முதல் (mutal)",
          "tulu": "ಮೊದಲ್",
          "proto": "*mutal",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಮೊದಲ್",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಮೊದಲ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಆದಿ",
      "meaning": "Beginning",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-end",
      "sourceForm": "ಅಂತ್ಯ",
      "sourceMeaning": "End",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಅಂತ್ಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-end",
          "word": "ಕಡೆ / ಮುಗಿವು",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "கடை (kaṭai)",
          "tulu": "ಕಡೆ",
          "proto": "*kaṭai",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಕಡೆ / ಮುಗಿವು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-005-1",
          "word": "ಕೊನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೊನೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-005-2",
          "word": "ಮುಕ್ತಾಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮುಕ್ತಾಯ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-005-3",
          "word": "ತುದಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತುದಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಕಡೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಅಂತ್ಯ",
      "meaning": "End",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-half",
      "sourceForm": "ಅರ್ಧ",
      "sourceMeaning": "Half",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಅರ್ಧ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-half",
          "word": "ಅರೆ",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "அரை (arai)",
          "tulu": "ಅರೆ",
          "proto": "*arai",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಅರೆ",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಅರೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಅರ್ಧ",
      "meaning": "Half",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-work",
      "sourceForm": "ಕಾರ್ಯ",
      "sourceMeaning": "Work",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಕಾರ್ಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-work",
          "word": "ಕೆಲಸ / ಬೇಲೆ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "வேலை (vēlai)",
          "tulu": "ಬೇಲೆ",
          "proto": "*wēlai",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಕೆಲಸ / ಬೇಲೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-001-1",
          "word": "ಕೆಲಸ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೆಲಸ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-001-2",
          "word": "ಗೆಯ್ಮೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗೆಯ್ಮೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಬೇಲೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಕಾರ್ಯ",
      "meaning": "Work",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-help",
      "sourceForm": "ಸಹಾಯ",
      "sourceMeaning": "Help",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಸಹಾಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-help",
          "word": "ನೆರವು",
          "note": "Kannada ನೆರವು is not cognate with Tamil உதவி; genuine split.",
          "tamil": "உதவி (utavi)",
          "tulu": "ಸಕಾಯ (loan)",
          "proto": "*utawi",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ನೆರವು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ನೆರವು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: low. Kannada ನೆರವು is not cognate with Tamil உதவி; genuine split.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಸಹಾಯ",
      "meaning": "Help",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-beginning-act",
      "sourceForm": "ಆರಂಭ",
      "sourceMeaning": "Beginning (act)",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಆರಂಭ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-beginning-act",
          "word": "ತೊಡಗಿಕೆ / ಮೊದಲ್",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "தொடக்கம் (toṭakkam)",
          "tulu": "ಸುರು",
          "proto": "*toṭaṅku",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ತೊಡಗಿಕೆ / ಮೊದಲ್",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-004-1",
          "word": "ಮೊದಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೊದಲು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-004-2",
          "word": "ತೊಡಗು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೊಡಗು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ತೊಡಗು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಆರಂಭ",
      "meaning": "Beginning (act)",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-journey",
      "sourceForm": "ಪ್ರಯಾಣ",
      "sourceMeaning": "Journey",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಪ್ರಯಾಣ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-journey",
          "word": "ನಡೆ",
          "note": "ಪಯಣ is a tadbhava of the same Sanskrit word, not a native replacement.",
          "tamil": "பயணம் (loan)",
          "tulu": "ಪಯಣ",
          "proto": null,
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಪಯಣ / ನಡೆ",
              "etymology": "tadbhava"
            }
          ]
        }
      ],
      "halegannada": "ಪಯಣ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: low. ಪಯಣ is a tadbhava of the same Sanskrit word, not a native replacement.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಪ್ರಯಾಣ",
      "meaning": "Journey",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-number",
      "sourceForm": "ಸಂಖ್ಯೆ",
      "sourceMeaning": "Number",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಸಂಖ್ಯೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-number",
          "word": "ಎಣಿಕೆ",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "எண் (eṇ)",
          "tulu": "ಎಣ್ಣೆ (count)",
          "proto": "*eṇ",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಎಣಿಕೆ",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಎಣ್",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಸಂಖ್ಯೆ",
      "meaning": "Number",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-birth",
      "sourceForm": "ಜನನ",
      "sourceMeaning": "Birth",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಜನನ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-birth",
          "word": "ಹುಟ್ಟು",
          "note": "Contributor-supplied comparison; confidence: high. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "பிறப்பு (piṟappu)",
          "tulu": "ಪುಟ್ಟು",
          "proto": "*piṟa",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹುಟ್ಟು",
              "etymology": "dravidian"
            },
            {
              "form": "ಹುಟ್ಟು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-223-2",
          "word": "ಪುಟ್ಟು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪುಟ್ಟು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಪುಟ್ಟು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಜನನ",
      "meaning": "Birth",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-death",
      "sourceForm": "ಮರಣ",
      "sourceMeaning": "Death",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಮರಣ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-death",
          "word": "ಸಾವು",
          "note": "Contributor-supplied comparison; confidence: high.",
          "tamil": "சாவு (cāvu)",
          "tulu": "ಸೈವು",
          "proto": "*cā",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಸಾವು",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "halegannada": "ಸಾವು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: high.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಮರಣ",
      "meaning": "Death",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-learning",
      "sourceForm": "ವಿದ್ಯಾ",
      "sourceMeaning": "Learning",
      "category": "Education",
      "sourceEtymology": {
        "form": "ವಿದ್ಯಾ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-learning",
          "word": "ಓದು / ಕಲಿಮೆ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "கல்வி (kalvi)",
          "tulu": "ಕಲ್ಪು",
          "proto": "*kal",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಓದು / ಕಲಿಮೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಕಲ್ಪು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ವಿದ್ಯಾ",
      "meaning": "Learning",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-book",
      "sourceForm": "ಪುಸ್ತಕ",
      "sourceMeaning": "Book",
      "category": "Education",
      "sourceEtymology": {
        "form": "ಪುಸ್ತಕ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-book",
          "word": "ಹೊತ್ತಗೆ",
          "note": "ಹೊತ್ತಗೆ is the genuine native word; use it instead of ಪುಸ್ತಕ in site examples.",
          "tamil": "புத்தகம் (loan)",
          "tulu": "ಪುಸ್ತಕ",
          "proto": null,
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಹೊತ್ತಗೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "halegannada": "ಪೊತ್ತಗೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. ಹೊತ್ತಗೆ is the genuine native word; use it instead of ಪುಸ್ತಕ in site examples.",
      "sourceDataset": "etymology-entries.js:origin-audit",
      "sanskrit": "ಪುಸ್ತಕ",
      "meaning": "Book",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-letter-script",
      "sourceForm": "ಅಕ್ಷರ",
      "sourceMeaning": "Letter / script",
      "category": "Education",
      "sourceEtymology": {
        "form": "ಅಕ್ಷರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-letter-script",
          "word": "ಬರಹ / ಅಕ್ಕರ",
          "note": "Contributor-supplied comparison; confidence: medium.",
          "tamil": "எழுத்து (eḻuttu)",
          "tulu": "ಬರವು",
          "proto": "*eḻutu",
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಬರಹ / ಅಕ್ಕರ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-075-1",
          "word": "ಬರಹ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬರಹ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-075-2",
          "word": "ಅಕ್ಕರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಕ್ಕರ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಬರಹ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಅಕ್ಷರ",
      "meaning": "Letter / script",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-doctor",
      "sourceForm": "ವೈದ್ಯ",
      "sourceMeaning": "Doctor",
      "category": "Education",
      "sourceEtymology": {
        "form": "ವೈದ್ಯ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-doctor",
          "word": "No settled native equivalent",
          "note": "No settled native term; flag as a vocabulary gap, do not coin.",
          "tamil": "மருத்துவர்",
          "tulu": "ಮರ್ದಿನವ",
          "proto": null,
          "viability": "no_alternative",
          "etymologyParts": [],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-262-1",
          "word": "ಮದ್ದುಗಾರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮದ್ದುಗಾರ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-262-2",
          "word": "ನಾಟಿ ವೈದ್ಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಾಟಿ ವೈದ್ಯ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": null,
      "halegannadaEvidence": null,
      "editorialNote": "Contributor-supplied comparison; confidence: low. No settled native term; flag as a vocabulary gap, do not coin. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ವೈದ್ಯ",
      "meaning": "Doctor",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-load-weight",
      "sourceForm": "ಭಾರ",
      "sourceMeaning": "Load / weight",
      "category": "Education",
      "sourceEtymology": {
        "form": "ಭಾರ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-load-weight",
          "word": "ಹೊರೆ",
          "note": "Contributor-supplied comparison; confidence: medium. Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "tamil": "பாரம் (loan) / சுமை",
          "tulu": "ಹೊರೆ",
          "proto": "*poṟai",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೊರೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "etymology-entries.js:origin-audit",
            "contributor-equivalents.js"
          ],
          "editorialNote": ""
        },
        {
          "id": "contrib-214-1",
          "word": "ತೂಕ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೂಕ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-214-3",
          "word": "ಬರುವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬರುವು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಪೊರೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: medium. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಭಾರ",
      "meaning": "Load / weight",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-service",
      "sourceForm": "ಸೇವೆ",
      "sourceMeaning": "Service",
      "category": "Education",
      "sourceEtymology": {
        "form": "ಸೇವೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-service",
          "word": "No settled native equivalent",
          "note": "Tamil தொண்டு has no clean Kannada cognate in this sense; honest gap.",
          "tamil": "தொண்டு (toṇṭu)",
          "tulu": "ಸೇವೆ",
          "proto": null,
          "viability": "no_alternative",
          "etymologyParts": [],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-227-1",
          "word": "ದುಡಿಮೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದುಡಿಮೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-227-2",
          "word": "ನೆರವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೆರವು",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-227-3",
          "word": "ಊಳಿಗ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಊಳಿಗ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": null,
      "halegannadaEvidence": null,
      "editorialNote": "Contributor-supplied comparison; confidence: low. Tamil தொண்டு has no clean Kannada cognate in this sense; honest gap. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಸೇವೆ",
      "meaning": "Service",
      "rejectedAlternatives": []
    },
    {
      "id": "supp-story",
      "sourceForm": "ಕಥೆ",
      "sourceMeaning": "Story",
      "category": "Education",
      "sourceEtymology": {
        "form": "ಕಥೆ",
        "etymology": "sanskrit_tatsama"
      },
      "alternatives": [
        {
          "id": "alt-supp-story",
          "word": "ಸೊಲ್ಲು",
          "note": "ಕತೆ is tadbhava of Sanskrit kathā; not native.",
          "tamil": "கதை (loan)",
          "tulu": "ಕತೆ",
          "proto": null,
          "viability": "contested",
          "etymologyParts": [
            {
              "form": "ಕತೆ / ಸೊಲ್ಲು",
              "etymology": "tadbhava"
            }
          ],
          "sourceDataset": "etymology-entries.js:origin-audit",
          "sources": [
            "etymology-entries.js:origin-audit"
          ]
        },
        {
          "id": "contrib-079-1",
          "word": "ಕತೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕತೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-079-2",
          "word": "ಹೇಳಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೇಳಿಕೆ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        },
        {
          "id": "contrib-079-3",
          "word": "ನಡೆನುಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಡೆನುಡಿ",
              "etymology": "unknown"
            }
          ],
          "sourceDataset": "contributor-equivalents.js",
          "sources": [
            "contributor-equivalents.js"
          ]
        }
      ],
      "halegannada": "ಕತೆ",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Contributor-supplied form; historical attestation not independently checked."
      },
      "editorialNote": "Contributor-supplied comparison; confidence: low. ಕತೆ is tadbhava of Sanskrit kathā; not native. Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "sourceDataset": "contributor-equivalents.js",
      "contributorSupplied": true,
      "sources": [
        "contributor-equivalents.js"
      ],
      "sanskrit": "ಕಥೆ",
      "meaning": "Story",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-003",
      "sourceForm": "ಪರಿಹಾರ",
      "sourceMeaning": "Solution",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಪರಿಹಾರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-003-1",
          "word": "ಬಿಡಿಸುಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಿಡಿಸುಗೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-003-2",
          "word": "ತೀರುವಳಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೀರುವಳಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪರಿಹಾರ",
      "meaning": "Solution",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-007",
      "sourceForm": "ಅವಕಾಶ",
      "sourceMeaning": "Opportunity / space",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಅವಕಾಶ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-007-1",
          "word": "ಎಡೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಡೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-007-2",
          "word": "ಬಿಡುವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಿಡುವು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-007-3",
          "word": "ಸಂದಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಂದಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಅವಕಾಶ",
      "meaning": "Opportunity / space",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-008",
      "sourceForm": "ಪದ್ಧತಿ",
      "sourceMeaning": "Method / custom",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಪದ್ಧತಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-008-1",
          "word": "ಬಗೆ",
          "note": "DEDR 5202 records Kannada bage ‘kind, portion, section, sort’, Tamil vakai ‘kind, manner, method’ and Tulu bagè ‘kind, manner, way’. No Proto-Dravidian reconstruction is supplied in this entry.",
          "tamil": "வகை (vakai; kind, manner, method; DEDR 5202)",
          "tulu": "bagè (kind, manner, way; DEDR 5202)",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಬಗೆ",
              "etymology": "dravidian"
            }
          ]
        },
        {
          "id": "contrib-008-2",
          "word": "ರೀತಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ರೀತಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-008-3",
          "word": "ನಡೆವಳಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಡೆವಳಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪದ್ಧತಿ",
      "meaning": "Method / custom",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-009",
      "sourceForm": "ವ್ಯತ್ಯಾಸ",
      "sourceMeaning": "Difference",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ವ್ಯತ್ಯಾಸ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-009-1",
          "word": "ಬೇರ್ಮೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೇರ್ಮೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-009-2",
          "word": "ತಾರತಮ್ಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಾರತಮ್ಯ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-009-3",
          "word": "ಎಡೆಯಂತರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಡೆಯಂತರ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವ್ಯತ್ಯಾಸ",
      "meaning": "Difference",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-010",
      "sourceForm": "ಅನುಭವ",
      "sourceMeaning": "Experience",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಅನುಭವ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-010-1",
          "word": "ಅರಿವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅರಿವು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-010-2",
          "word": "ಪಳಗು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪಳಗು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-010-3",
          "word": "ಕಂಡುಂಡದ್ದು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಂಡುಂಡದ್ದು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಅನುಭವ",
      "meaning": "Experience",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-011",
      "sourceForm": "ಕೋಪ",
      "sourceMeaning": "Anger",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಕೋಪ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-011-1",
          "word": "ಸಿಟ್ಟು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಿಟ್ಟು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-011-2",
          "word": "ಮುನಿಸು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮುನಿಸು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-011-3",
          "word": "ಕಿಚ್ಚು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಿಚ್ಚು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕೋಪ",
      "meaning": "Anger",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-014",
      "sourceForm": "ದ್ವೇಷ",
      "sourceMeaning": "Hatred",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ದ್ವೇಷ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-014-1",
          "word": "ಹಗೆತನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಗೆತನ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-014-2",
          "word": "ಕಿಚ್ಚು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಿಚ್ಚು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-014-3",
          "word": "ಮುನಿಸು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮುನಿಸು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ದ್ವೇಷ",
      "meaning": "Hatred",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-015",
      "sourceForm": "ಧೈರ್ಯ",
      "sourceMeaning": "Courage",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಧೈರ್ಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-015-1",
          "word": "ಎದೆಗಾರಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎದೆಗಾರಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-015-2",
          "word": "ಕೆಚ್ಚು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೆಚ್ಚು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-015-3",
          "word": "ದಿಟ್ಟತನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದಿಟ್ಟತನ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಧೈರ್ಯ",
      "meaning": "Courage",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-017",
      "sourceForm": "ನಂಬಿಕೆ",
      "sourceMeaning": "Trust / belief",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ನಂಬಿಕೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-017-1",
          "word": "ನೆಚ್ಚುಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೆಚ್ಚುಗೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-017-2",
          "word": "ಭರವಸೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಭರವಸೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ನಂಬಿಕೆ",
      "meaning": "Trust / belief",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-018",
      "sourceForm": "ಅಹಂಕಾರ",
      "sourceMeaning": "Arrogance",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಅಹಂಕಾರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-018-1",
          "word": "ಸೊಕ್ಕು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸೊಕ್ಕು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-018-2",
          "word": "ಕೊಬ್ಬು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೊಬ್ಬು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-018-3",
          "word": "ಬಿಗುಮಾನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಿಗುಮಾನ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಅಹಂಕಾರ",
      "meaning": "Arrogance",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-019",
      "sourceForm": "ಕರುಣೆ",
      "sourceMeaning": "Compassion",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಕರುಣೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-019-1",
          "word": "ಕನಿಕರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕನಿಕರ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-019-2",
          "word": "ಮರುಕ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮರುಕ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-019-3",
          "word": "ದಯೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದಯೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕರುಣೆ",
      "meaning": "Compassion",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-028",
      "sourceForm": "ಪತ್ರ",
      "sourceMeaning": "Leaf",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಪತ್ರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-028-1",
          "word": "ಎಲೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಲೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-028-2",
          "word": "ತಳಿರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಳಿರು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪತ್ರ",
      "meaning": "Leaf",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-030",
      "sourceForm": "ಮೃಗ",
      "sourceMeaning": "Animal / beast",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಮೃಗ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-030-1",
          "word": "ಕಾಡುಪ್ರಾಣಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಾಡುಪ್ರಾಣಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-030-2",
          "word": "ಮಿಗ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಿಗ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಮೃಗ",
      "meaning": "Animal / beast",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-031",
      "sourceForm": "ಸಮಯ",
      "sourceMeaning": "Time",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಸಮಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-031-1",
          "word": "ಹೊತ್ತು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೊತ್ತು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-031-2",
          "word": "ವೇಳೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ವೇಳೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-031-3",
          "word": "ಪೊತ್ತು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪೊತ್ತು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಮಯ",
      "meaning": "Time",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-034",
      "sourceForm": "ಪ್ರಾತಃಕಾಲ",
      "sourceMeaning": "Morning",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಪ್ರಾತಃಕಾಲ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-034-1",
          "word": "ಮುಂಜಾನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮುಂಜಾನೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-034-2",
          "word": "ಬೆಳಗು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೆಳಗು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-034-3",
          "word": "ನಸುಕು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಸುಕು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪ್ರಾತಃಕಾಲ",
      "meaning": "Morning",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-035",
      "sourceForm": "ಸಾಯಂಕಾಲ",
      "sourceMeaning": "Evening",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಸಾಯಂಕಾಲ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-035-1",
          "word": "ಸಂಜೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಂಜೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-035-2",
          "word": "ಬೈಗು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೈಗು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-035-3",
          "word": "ಇಳಿಹೊತ್ತು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಇಳಿಹೊತ್ತು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಾಯಂಕಾಲ",
      "meaning": "Evening",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-037",
      "sourceForm": "ಸಂವತ್ಸರ",
      "sourceMeaning": "Year",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಸಂವತ್ಸರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-037-1",
          "word": "ಏಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಏಡು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-037-2",
          "word": "ವರುಷ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ವರುಷ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಂವತ್ಸರ",
      "meaning": "Year",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-038",
      "sourceForm": "ಭವಿಷ್ಯ",
      "sourceMeaning": "Future",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಭವಿಷ್ಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-038-1",
          "word": "ಮುಂದೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮುಂದೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-038-2",
          "word": "ಬರಲಿರುವ ಕಾಲ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬರಲಿರುವ ಕಾಲ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಭವಿಷ್ಯ",
      "meaning": "Future",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-039",
      "sourceForm": "ಭೂತಕಾಲ",
      "sourceMeaning": "Past",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಭೂತಕಾಲ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-039-1",
          "word": "ಹಿಂದೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಿಂದೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-039-2",
          "word": "ಕಳೆದ ಕಾಲ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಳೆದ ಕಾಲ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಭೂತಕಾಲ",
      "meaning": "Past",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-040",
      "sourceForm": "ಮಧ್ಯ",
      "sourceMeaning": "Middle / centre",
      "category": "Abstract",
      "sourceEtymology": {
        "form": "ಮಧ್ಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-040-1",
          "word": "ನಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಡು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-040-2",
          "word": "ನಡುವೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಡುವೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಮಧ್ಯ",
      "meaning": "Middle / centre",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-051",
      "sourceForm": "ಮಾತಾ",
      "sourceMeaning": "Mother",
      "category": "People",
      "sourceEtymology": {
        "form": "ಮಾತಾ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-051-1",
          "word": "ತಾಯಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಾಯಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-051-2",
          "word": "ಅವ್ವ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅವ್ವ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-051-3",
          "word": "ಅಮ್ಮ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಮ್ಮ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಮಾತಾ",
      "meaning": "Mother",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-052",
      "sourceForm": "ಪಿತಾ",
      "sourceMeaning": "Father",
      "category": "People",
      "sourceEtymology": {
        "form": "ಪಿತಾ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-052-1",
          "word": "ತಂದೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಂದೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-052-2",
          "word": "ಅಪ್ಪ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಪ್ಪ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-052-3",
          "word": "ಅಯ್ಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಯ್ಯ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪಿತಾ",
      "meaning": "Father",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-053",
      "sourceForm": "ಪುತ್ರ",
      "sourceMeaning": "Son",
      "category": "People",
      "sourceEtymology": {
        "form": "ಪುತ್ರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-053-1",
          "word": "ಮಗ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಗ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-053-2",
          "word": "ಕುವರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕುವರ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪುತ್ರ",
      "meaning": "Son",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-054",
      "sourceForm": "ಪುತ್ರಿ",
      "sourceMeaning": "Daughter",
      "category": "People",
      "sourceEtymology": {
        "form": "ಪುತ್ರಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-054-1",
          "word": "ಮಗಳು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಗಳು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-054-2",
          "word": "ಕುವರಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕುವರಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪುತ್ರಿ",
      "meaning": "Daughter",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-055",
      "sourceForm": "ಭ್ರಾತೃ",
      "sourceMeaning": "Brother",
      "category": "People",
      "sourceEtymology": {
        "form": "ಭ್ರಾತೃ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-055-1",
          "word": "ಅಣ್ಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಣ್ಣ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-055-2",
          "word": "ತಮ್ಮ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಮ್ಮ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-055-3",
          "word": "ಒಡಹುಟ್ಟಿದವ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಡಹುಟ್ಟಿದವ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಭ್ರಾತೃ",
      "meaning": "Brother",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-056",
      "sourceForm": "ಭಗಿನಿ",
      "sourceMeaning": "Sister",
      "category": "People",
      "sourceEtymology": {
        "form": "ಭಗಿನಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-056-1",
          "word": "ಅಕ್ಕ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಕ್ಕ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-056-2",
          "word": "ತಂಗಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಂಗಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-056-3",
          "word": "ಒಡಹುಟ್ಟಿದವಳು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಡಹುಟ್ಟಿದವಳು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಭಗಿನಿ",
      "meaning": "Sister",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-058",
      "sourceForm": "ಪತ್ನಿ",
      "sourceMeaning": "Wife",
      "category": "People",
      "sourceEtymology": {
        "form": "ಪತ್ನಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-058-1",
          "word": "ಹೆಂಡತಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೆಂಡತಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-058-2",
          "word": "ಮಡದಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಡದಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪತ್ನಿ",
      "meaning": "Wife",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-059",
      "sourceForm": "ಅತಿಥಿ",
      "sourceMeaning": "Guest",
      "category": "People",
      "sourceEtymology": {
        "form": "ಅತಿಥಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-059-1",
          "word": "ನೆಂಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೆಂಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-059-2",
          "word": "ಬೀಗ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೀಗ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-059-3",
          "word": "ಬಂದವರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಂದವರು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಅತಿಥಿ",
      "meaning": "Guest",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-060",
      "sourceForm": "ಸಮಾಜ",
      "sourceMeaning": "Society",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಸಮಾಜ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-060-1",
          "word": "ಕೂಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೂಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-060-2",
          "word": "ಮಂದಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಂದಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-060-3",
          "word": "ಜನತೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಜನತೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಮಾಜ",
      "meaning": "Society",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-062",
      "sourceForm": "ಆಜ್ಞೆ",
      "sourceMeaning": "Order / command",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಆಜ್ಞೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-062-1",
          "word": "ಅಪ್ಪಣೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಪ್ಪಣೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-062-2",
          "word": "ಕಟ್ಟಳೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಟ್ಟಳೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-062-3",
          "word": "ಬೆಸಸು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೆಸಸು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಆಜ್ಞೆ",
      "meaning": "Order / command",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-063",
      "sourceForm": "ನಿಯಮ",
      "sourceMeaning": "Rule",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ನಿಯಮ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-063-1",
          "word": "ಕಟ್ಟಳೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಟ್ಟಳೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-063-2",
          "word": "ಕಟ್ಟುಪಾಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಟ್ಟುಪಾಡು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-063-3",
          "word": "ನಡೆವಳಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಡೆವಳಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ನಿಯಮ",
      "meaning": "Rule",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-065",
      "sourceForm": "ಅನ್ಯಾಯ",
      "sourceMeaning": "Injustice",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಅನ್ಯಾಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-065-1",
          "word": "ತಪ್ಪು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಪ್ಪು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-065-2",
          "word": "ಕೇಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೇಡು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-065-3",
          "word": "ಅಳತೆಮೀರಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಳತೆಮೀರಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಅನ್ಯಾಯ",
      "meaning": "Injustice",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-067",
      "sourceForm": "ಅಪರಾಧ",
      "sourceMeaning": "Crime / offence",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಅಪರಾಧ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-067-1",
          "word": "ತಪ್ಪು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಪ್ಪು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-067-2",
          "word": "ಕೇಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೇಡು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-067-3",
          "word": "ತಪ್ಪಿತ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಪ್ಪಿತ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಅಪರಾಧ",
      "meaning": "Crime / offence",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-068",
      "sourceForm": "ಸಭೆ",
      "sourceMeaning": "Meeting / assembly",
      "category": "Civic",
      "sourceEtymology": {
        "form": "ಸಭೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-068-1",
          "word": "ಕೂಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೂಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-068-2",
          "word": "ನೆರವಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೆರವಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-068-3",
          "word": "ಒಕ್ಕೂಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಕ್ಕೂಟ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಭೆ",
      "meaning": "Meeting / assembly",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-070",
      "sourceForm": "ಸ್ವಾತಂತ್ರ್ಯ",
      "sourceMeaning": "Freedom",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಸ್ವಾತಂತ್ರ್ಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-070-1",
          "word": "ಬಿಡುಗಡೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಿಡುಗಡೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-070-2",
          "word": "ತಂತಾನೆ ಇರುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಂತಾನೆ ಇರುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸ್ವಾತಂತ್ರ್ಯ",
      "meaning": "Freedom",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-072",
      "sourceForm": "ಶಿಕ್ಷಕ",
      "sourceMeaning": "Teacher",
      "category": "Education",
      "sourceEtymology": {
        "form": "ಶಿಕ್ಷಕ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-072-1",
          "word": "ಕಲಿಸುವವ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಲಿಸುವವ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-072-2",
          "word": "ಅರಿವುಗಾರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅರಿವುಗಾರ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-072-3",
          "word": "ಮೇಷ್ಟ್ರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೇಷ್ಟ್ರು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಶಿಕ್ಷಕ",
      "meaning": "Teacher",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-074",
      "sourceForm": "ಪರೀಕ್ಷೆ",
      "sourceMeaning": "Exam / test",
      "category": "Education",
      "sourceEtymology": {
        "form": "ಪರೀಕ್ಷೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-074-1",
          "word": "ಒರೆಹಚ್ಚುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒರೆಹಚ್ಚುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-074-2",
          "word": "ಅಳತೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಳತೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-074-3",
          "word": "ನೋಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೋಟ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪರೀಕ್ಷೆ",
      "meaning": "Exam / test",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-077",
      "sourceForm": "ವಾಕ್ಯ",
      "sourceMeaning": "Sentence",
      "category": "Education",
      "sourceEtymology": {
        "form": "ವಾಕ್ಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-077-1",
          "word": "ಸೊಲ್ಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸೊಲ್ಲು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-077-2",
          "word": "ಮಾತು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಾತು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-077-3",
          "word": "ನುಡಿಗಟ್ಟು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನುಡಿಗಟ್ಟು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವಾಕ್ಯ",
      "meaning": "Sentence",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-078",
      "sourceForm": "ಅರ್ಥ",
      "sourceMeaning": "Meaning",
      "category": "Education",
      "sourceEtymology": {
        "form": "ಅರ್ಥ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-078-1",
          "word": "ತಿರುಳು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿರುಳು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-078-2",
          "word": "ಹುರುಳು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹುರುಳು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-078-3",
          "word": "ಒಳಗುಟ್ಟು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಳಗುಟ್ಟು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಅರ್ಥ",
      "meaning": "Meaning",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-080",
      "sourceForm": "ಕವಿತೆ",
      "sourceMeaning": "Poem",
      "category": "Education",
      "sourceEtymology": {
        "form": "ಕವಿತೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-080-1",
          "word": "ಹಾಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಾಡು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-080-2",
          "word": "ಪದ್ಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪದ್ಯ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-080-3",
          "word": "ನುಡಿಮಾಲೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನುಡಿಮಾಲೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕವಿತೆ",
      "meaning": "Poem",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-081",
      "sourceForm": "ಯಂತ್ರ",
      "sourceMeaning": "Machine",
      "category": "Technology",
      "sourceEtymology": {
        "form": "ಯಂತ್ರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-081-1",
          "word": "ಸಲಕರಣೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಲಕರಣೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-081-2",
          "word": "ಕೀಲುಗೊಂಬೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೀಲುಗೊಂಬೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-081-3",
          "word": "ಗಾಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗಾಣ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಯಂತ್ರ",
      "meaning": "Machine",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-082",
      "sourceForm": "ತಂತ್ರಜ್ಞಾನ",
      "sourceMeaning": "Technology",
      "category": "Technology",
      "sourceEtymology": {
        "form": "ತಂತ್ರಜ್ಞಾನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-082-1",
          "word": "ಕೈಚಳಕದರಿಮೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೈಚಳಕದರಿಮೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-082-2",
          "word": "ತಂತ್ರದರಿಮೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಂತ್ರದರಿಮೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ತಂತ್ರಜ್ಞಾನ",
      "meaning": "Technology",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-083",
      "sourceForm": "ಪ್ರಯೋಗ",
      "sourceMeaning": "Experiment",
      "category": "Technology",
      "sourceEtymology": {
        "form": "ಪ್ರಯೋಗ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-083-1",
          "word": "ಮಾಡಿ ನೋಡುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಾಡಿ ನೋಡುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-083-2",
          "word": "ಬಳಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಳಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪ್ರಯೋಗ",
      "meaning": "Experiment",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-084",
      "sourceForm": "ಸಂಶೋಧನೆ",
      "sourceMeaning": "Research",
      "category": "Technology",
      "sourceEtymology": {
        "form": "ಸಂಶೋಧನೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-084-1",
          "word": "ಹುಡುಕಾಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹುಡುಕಾಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-084-2",
          "word": "ಅರಸುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅರಸುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಂಶೋಧನೆ",
      "meaning": "Research",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-086",
      "sourceForm": "ವೇಗ",
      "sourceMeaning": "Speed",
      "category": "Technology",
      "sourceEtymology": {
        "form": "ವೇಗ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-086-1",
          "word": "ಬಿರುಸು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಿರುಸು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-086-2",
          "word": "ಓಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಓಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-086-3",
          "word": "ಚುರುಕು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಚುರುಕು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವೇಗ",
      "meaning": "Speed",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-089",
      "sourceForm": "ಉಷ್ಣ",
      "sourceMeaning": "Heat",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಉಷ್ಣ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-089-1",
          "word": "ಬಿಸಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಿಸಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-089-2",
          "word": "ಕಾವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಾವು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-089-3",
          "word": "ಸೆಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸೆಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಉಷ್ಣ",
      "meaning": "Heat",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-090",
      "sourceForm": "ಶೀತ",
      "sourceMeaning": "Cold",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಶೀತ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-090-1",
          "word": "ಚಳಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಚಳಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-090-2",
          "word": "ತಂಪು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಂಪು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಶೀತ",
      "meaning": "Cold",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-092",
      "sourceForm": "ಪಾನೀಯ",
      "sourceMeaning": "Beverage",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಪಾನೀಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-092-1",
          "word": "ಕುಡಿಯುವ ನೀರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕುಡಿಯುವ ನೀರು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-092-2",
          "word": "ಕಷಾಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಷಾಯ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪಾನೀಯ",
      "meaning": "Beverage",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-098",
      "sourceForm": "ಕವಾಟ",
      "sourceMeaning": "Window / shutter",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಕವಾಟ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-098-1",
          "word": "ಕಿಟಕಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಿಟಕಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-098-2",
          "word": "ತಲుపು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಲుపು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕವಾಟ",
      "meaning": "Window / shutter",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-099",
      "sourceForm": "ಶಯ್ಯೆ",
      "sourceMeaning": "Bed",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ಶಯ್ಯೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-099-1",
          "word": "ಹಾಸಿಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಾಸಿಗೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-099-2",
          "word": "ಮಂಚ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಂಚ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಶಯ್ಯೆ",
      "meaning": "Bed",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-101",
      "sourceForm": "ಚಿಂತನೆ",
      "sourceMeaning": "Thought / thinking",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ಚಿಂತನೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-101-1",
          "word": "ಆಲೋಚನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಆಲೋಚನೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-101-2",
          "word": "ಎಣಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಣಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-101-3",
          "word": "ಯೋಚನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಯೋಚನೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಚಿಂತನೆ",
      "meaning": "Thought / thinking",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-103",
      "sourceForm": "ಅಜ್ಞಾನ",
      "sourceMeaning": "Ignorance",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ಅಜ್ಞಾನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-103-1",
          "word": "ಅರಿಯಮೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅರಿಯಮೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-103-2",
          "word": "ತಿಳಿಗೇಡಿತನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿಳಿಗೇಡಿತನ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-103-3",
          "word": "ಮಬ್ಬು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಬ್ಬು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಅಜ್ಞಾನ",
      "meaning": "Ignorance",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-105",
      "sourceForm": "ವಿಸ್ಮರಣೆ",
      "sourceMeaning": "Forgetfulness",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ವಿಸ್ಮರಣೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-105-1",
          "word": "ಮರೆವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮರೆವು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-105-2",
          "word": "ಮರೆಗುಳಿತನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮರೆಗುಳಿತನ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವಿಸ್ಮರಣೆ",
      "meaning": "Forgetfulness",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-107",
      "sourceForm": "ಮೂರ್ಖ",
      "sourceMeaning": "Fool",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ಮೂರ್ಖ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-107-1",
          "word": "ದಡ್ಡ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದಡ್ಡ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-107-2",
          "word": "ಹೆಡ್ಡ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೆಡ್ಡ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-107-3",
          "word": "ತಿಳಿಗೇಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿಳಿಗೇಡಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಮೂರ್ಖ",
      "meaning": "Fool",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-108",
      "sourceForm": "ನಿರ್ಧಾರ",
      "sourceMeaning": "Decision",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ನಿರ್ಧಾರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-108-1",
          "word": "ತೀರ್ಮಾನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೀರ್ಮಾನ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-108-2",
          "word": "ಗೊತ್ತುಪಡಿಸುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗೊತ್ತುಪಡಿಸುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-108-3",
          "word": "ನಿಶ್ಚಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಿಶ್ಚಯ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ನಿರ್ಧಾರ",
      "meaning": "Decision",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-109",
      "sourceForm": "ಸಂದೇಹ",
      "sourceMeaning": "Doubt / suspicion",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ಸಂದೇಹ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-109-1",
          "word": "ಅಳಕು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಳಕು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-109-2",
          "word": "ಅನುಮಾನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅನುಮಾನ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-109-3",
          "word": "ಕಸಿವಿಸಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಸಿವಿಸಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಂದೇಹ",
      "meaning": "Doubt / suspicion",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-110",
      "sourceForm": "ಕಲ್ಪನೆ",
      "sourceMeaning": "Imagination",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ಕಲ್ಪನೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-110-1",
          "word": "ಊಹೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಊಹೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-110-2",
          "word": "ಕಟ್ಟಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಟ್ಟಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-110-3",
          "word": "ಕನಸುಗಾರಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕನಸುಗಾರಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕಲ್ಪನೆ",
      "meaning": "Imagination",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-111",
      "sourceForm": "ತರ್ಕ",
      "sourceMeaning": "Logic / argument",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ತರ್ಕ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-111-1",
          "word": "ವಾದ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ವಾದ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-111-2",
          "word": "ಎಣಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಣಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-111-3",
          "word": "ಒರೆಹಚ್ಚುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒರೆಹಚ್ಚುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ತರ್ಕ",
      "meaning": "Logic / argument",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-112",
      "sourceForm": "ಸತ್ಯ",
      "sourceMeaning": "Truth",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ಸತ್ಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-112-1",
          "word": "ನಿಜ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಿಜ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-112-2",
          "word": "ದಿಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದಿಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-112-3",
          "word": "ಒಪ್ಪ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಪ್ಪ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸತ್ಯ",
      "meaning": "Truth",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-113",
      "sourceForm": "ಅಸತ್ಯ",
      "sourceMeaning": "Lie / falsehood",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ಅಸತ್ಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-113-1",
          "word": "ಸುಳ್ಳು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸುಳ್ಳು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-113-2",
          "word": "ಹುಸಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹುಸಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-113-3",
          "word": "ಬೊಗಳೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೊಗಳೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಅಸತ್ಯ",
      "meaning": "Lie / falsehood",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-114",
      "sourceForm": "ರಹಸ್ಯ",
      "sourceMeaning": "Secret",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ರಹಸ್ಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-114-1",
          "word": "ಗುಟ್ಟು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗುಟ್ಟು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-114-2",
          "word": "ಮರ್ಮ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮರ್ಮ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-114-3",
          "word": "ಒಳಗುಟ್ಟು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಳಗುಟ್ಟು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ರಹಸ್ಯ",
      "meaning": "Secret",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-115",
      "sourceForm": "ಪ್ರಜ್ಞೆ",
      "sourceMeaning": "Consciousness / awareness",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ಪ್ರಜ್ಞೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-115-1",
          "word": "ಎಚ್ಚರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಚ್ಚರ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-115-2",
          "word": "ಅರಿವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅರಿವು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-115-3",
          "word": "ತಿಳಿವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿಳಿವು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪ್ರಜ್ಞೆ",
      "meaning": "Consciousness / awareness",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-116",
      "sourceForm": "ಧ್ಯಾನ",
      "sourceMeaning": "Meditation / focus",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ಧ್ಯಾನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-116-1",
          "word": "ಏಕಾಗ್ರತೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಏಕಾಗ್ರತೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-116-2",
          "word": "ಮನಸ್ಸು ನೆಡುವುದು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮನಸ್ಸು ನೆಡುವುದು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಧ್ಯಾನ",
      "meaning": "Meditation / focus",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-117",
      "sourceForm": "ಆಶಯ",
      "sourceMeaning": "Intention / aim",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ಆಶಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-117-1",
          "word": "ಇಂಗಿತ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಇಂಗಿತ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-117-2",
          "word": "ಬಯಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಯಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-117-3",
          "word": "ಒಳನೋಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಳನೋಟ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಆಶಯ",
      "meaning": "Intention / aim",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-118",
      "sourceForm": "ಉದ್ದೇಶ",
      "sourceMeaning": "Purpose / objective",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ಉದ್ದೇಶ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-118-1",
          "word": "ಗುರಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗುರಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-118-2",
          "word": "ಕಾರಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಾರಣ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-118-3",
          "word": "ಎಣಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಣಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಉದ್ದೇಶ",
      "meaning": "Purpose / objective",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-119",
      "sourceForm": "ಸಮ್ಮತಿ",
      "sourceMeaning": "Consent / agreement",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ಸಮ್ಮತಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-119-1",
          "word": "ಒಪ್ಪಿಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಪ್ಪಿಗೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-119-2",
          "word": "ಹೌದೆನ್ನುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೌದೆನ್ನುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಮ್ಮತಿ",
      "meaning": "Consent / agreement",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-120",
      "sourceForm": "ವಿರೋಧ",
      "sourceMeaning": "Opposition",
      "category": "Mind",
      "sourceEtymology": {
        "form": "ವಿರೋಧ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-120-1",
          "word": "ಎದುರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎದುರು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-120-2",
          "word": "ಅಡ್ಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಡ್ಡಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-120-3",
          "word": "ತಡೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಡೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವಿರೋಧ",
      "meaning": "Opposition",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-121",
      "sourceForm": "ಗಮನ",
      "sourceMeaning": "Movement / attention",
      "category": "Action",
      "sourceEtymology": {
        "form": "ಗಮನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-121-1",
          "word": "ನಡಿಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಡಿಗೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-121-2",
          "word": "ಹೋಗುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೋಗುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-121-3",
          "word": "ಗಮನಿಸುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗಮನಿಸುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಗಮನ",
      "meaning": "Movement / attention",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-122",
      "sourceForm": "ಆಗಮನ",
      "sourceMeaning": "Arrival",
      "category": "Action",
      "sourceEtymology": {
        "form": "ಆಗಮನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-122-1",
          "word": "ಬರುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬರುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-122-2",
          "word": "ಬರೋಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬರೋಣ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಆಗಮನ",
      "meaning": "Arrival",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-123",
      "sourceForm": "ನಿರ್ಗಮನ",
      "sourceMeaning": "Departure",
      "category": "Action",
      "sourceEtymology": {
        "form": "ನಿರ್ಗಮನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-123-1",
          "word": "ಹೊರಡುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೊರಡುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-123-2",
          "word": "ಹೋಗುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೋಗುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ನಿರ್ಗಮನ",
      "meaning": "Departure",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-124",
      "sourceForm": "ಪ್ರವೇಶ",
      "sourceMeaning": "Entry",
      "category": "Action",
      "sourceEtymology": {
        "form": "ಪ್ರವೇಶ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-124-1",
          "word": "ಒಳಬರುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಳಬರುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-124-2",
          "word": "ಹೊಗುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೊಗುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪ್ರವೇಶ",
      "meaning": "Entry",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-125",
      "sourceForm": "ಪತನ",
      "sourceMeaning": "Fall",
      "category": "Action",
      "sourceEtymology": {
        "form": "ಪತನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-125-1",
          "word": "ಬೀಳುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೀಳುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-125-2",
          "word": "ಕುಸಿತ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕುಸಿತ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪತನ",
      "meaning": "Fall",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-126",
      "sourceForm": "ಉತ್ಥಾನ",
      "sourceMeaning": "Rise / upliftment",
      "category": "Action",
      "sourceEtymology": {
        "form": "ಉತ್ಥಾನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-126-1",
          "word": "ಏಳಿಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಏಳಿಗೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-126-2",
          "word": "ಮೇಲೇಳುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೇಲೇಳುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಉತ್ಥಾನ",
      "meaning": "Rise / upliftment",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-127",
      "sourceForm": "ಭ್ರಮಣೆ",
      "sourceMeaning": "Rotation / wandering",
      "category": "Action",
      "sourceEtymology": {
        "form": "ಭ್ರಮಣೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-127-1",
          "word": "ತಿರುಗುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿರುಗುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-127-2",
          "word": "ಸುತ್ತುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸುತ್ತುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಭ್ರಮಣೆ",
      "meaning": "Rotation / wandering",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-128",
      "sourceForm": "ಧಾವನ",
      "sourceMeaning": "Running",
      "category": "Action",
      "sourceEtymology": {
        "form": "ಧಾವನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-128-1",
          "word": "ಓಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಓಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-128-2",
          "word": "ನಾಗಾಲೋಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಾಗಾಲೋಟ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಧಾವನ",
      "meaning": "Running",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-129",
      "sourceForm": "ವಿಶ್ರಾಂತಿ",
      "sourceMeaning": "Rest",
      "category": "Action",
      "sourceEtymology": {
        "form": "ವಿಶ್ರಾಂತಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-129-1",
          "word": "ದಣಿವಾರಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದಣಿವಾರಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-129-2",
          "word": "ತಂಗುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಂಗುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-129-3",
          "word": "ಬಿಡುವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಿಡುವು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವಿಶ್ರಾಂತಿ",
      "meaning": "Rest",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-130",
      "sourceForm": "ನಿದ್ರೆ",
      "sourceMeaning": "Sleep",
      "category": "Action",
      "sourceEtymology": {
        "form": "ನಿದ್ರೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-130-1",
          "word": "ನಿದ್ದೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಿದ್ದೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-130-2",
          "word": "ತೂಕಡಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೂಕಡಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-130-3",
          "word": "ಒರಗು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒರಗು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ನಿದ್ರೆ",
      "meaning": "Sleep",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-131",
      "sourceForm": "ಜಾಗರಣೆ",
      "sourceMeaning": "Wakefulness",
      "category": "Action",
      "sourceEtymology": {
        "form": "ಜಾಗರಣೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-131-1",
          "word": "ಎಚ್ಚರವಿರುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಚ್ಚರವಿರುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-131-2",
          "word": "ನಿದ್ದೆಗೆಡುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಿದ್ದೆಗೆಡುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಜಾಗರಣೆ",
      "meaning": "Wakefulness",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-132",
      "sourceForm": "ಸ್ಪರ್ಶ",
      "sourceMeaning": "Touch",
      "category": "Action",
      "sourceEtymology": {
        "form": "ಸ್ಪರ್ಶ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-132-1",
          "word": "ಮುಟ್ಟುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮುಟ್ಟುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-132-2",
          "word": "ಸೋಂಕು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸೋಂಕು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-132-3",
          "word": "ತಾಕುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಾಕುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸ್ಪರ್ಶ",
      "meaning": "Touch",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-136",
      "sourceForm": "ಪಾನ",
      "sourceMeaning": "Drinking",
      "category": "Action",
      "sourceEtymology": {
        "form": "ಪಾನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-136-1",
          "word": "ಕುಡಿಯುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕುಡಿಯುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-136-2",
          "word": "ಹೀರುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೀರುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪಾನ",
      "meaning": "Drinking",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-137",
      "sourceForm": "ಸ್ನಾನ",
      "sourceMeaning": "Bath",
      "category": "Action",
      "sourceEtymology": {
        "form": "ಸ್ನಾನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-137-1",
          "word": "ಮೀಯುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೀಯುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-137-2",
          "word": "ಜಳಕ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಜಳಕ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸ್ನಾನ",
      "meaning": "Bath",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-138",
      "sourceForm": "ವರ್ತನ",
      "sourceMeaning": "Behavior",
      "category": "Action",
      "sourceEtymology": {
        "form": "ವರ್ತನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-138-1",
          "word": "ನಡೆವಳಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಡೆವಳಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-138-2",
          "word": "ನಡತೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಡತೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವರ್ತನ",
      "meaning": "Behavior",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-139",
      "sourceForm": "ಪರಿಶ್ರಮ",
      "sourceMeaning": "Hard work",
      "category": "Action",
      "sourceEtymology": {
        "form": "ಪರಿಶ್ರಮ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-139-1",
          "word": "ದುಡಿಮೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದುಡಿಮೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-139-2",
          "word": "ಬೆವರು ಸುರಿಸುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೆವರು ಸುರಿಸುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-139-3",
          "word": "ಶ್ರಮ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಶ್ರಮ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪರಿಶ್ರಮ",
      "meaning": "Hard work",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-140",
      "sourceForm": "ಸಂಗ್ರಹ",
      "sourceMeaning": "Collection",
      "category": "Action",
      "sourceEtymology": {
        "form": "ಸಂಗ್ರಹ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-140-1",
          "word": "ಕೂಡಿಡುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೂಡಿಡುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-140-2",
          "word": "ಒಟ್ಟುಗೂಡಿಸುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಟ್ಟುಗೂಡಿಸುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಂಗ್ರಹ",
      "meaning": "Collection",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-141",
      "sourceForm": "ಸಂಭಾಷಣೆ",
      "sourceMeaning": "Conversation",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ಸಂಭಾಷಣೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-141-1",
          "word": "ಮಾತುಕತೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಾತುಕತೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-141-2",
          "word": "ನುಡಿಗಟ್ಟು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನುಡಿಗಟ್ಟು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-141-3",
          "word": "ಹರಟೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹರಟೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಂಭಾಷಣೆ",
      "meaning": "Conversation",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-142",
      "sourceForm": "ವಿವರಣೆ",
      "sourceMeaning": "Explanation",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ವಿವರಣೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-142-1",
          "word": "ಬಿಡಿಸಿ ಹೇಳುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಿಡಿಸಿ ಹೇಳುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-142-2",
          "word": "ತಿಳಿಸುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿಳಿಸುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವಿವರಣೆ",
      "meaning": "Explanation",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-143",
      "sourceForm": "ಸಂದೇಶ",
      "sourceMeaning": "Message",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ಸಂದೇಶ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-143-1",
          "word": "ಸುದ್ದಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸುದ್ದಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-143-2",
          "word": "ಹೇಳಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೇಳಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-143-3",
          "word": "ವರ್ತಮಾನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ವರ್ತಮಾನ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಂದೇಶ",
      "meaning": "Message",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-144",
      "sourceForm": "ಘೋಷಣೆ",
      "sourceMeaning": "Announcement / slogan",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ಘೋಷಣೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-144-1",
          "word": "ಕೂಗು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೂಗು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-144-2",
          "word": "ಸಾರುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಾರುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-144-3",
          "word": "ಡಂಗುರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಡಂಗುರ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಘೋಷಣೆ",
      "meaning": "Announcement / slogan",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-145",
      "sourceForm": "ಪ್ರಶಂಸೆ",
      "sourceMeaning": "Praise",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ಪ್ರಶಂಸೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-145-1",
          "word": "ಹೊಗಳಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೊಗಳಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-145-2",
          "word": "ಮೆಚ್ಚುಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೆಚ್ಚುಗೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪ್ರಶಂಸೆ",
      "meaning": "Praise",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-146",
      "sourceForm": "ನಿಂದೆ",
      "sourceMeaning": "Blame / criticism",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ನಿಂದೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-146-1",
          "word": "ತೆಗಳಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೆಗಳಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-146-2",
          "word": "ಹೀಯಾಳಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೀಯಾಳಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-146-3",
          "word": "ದೂರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದೂರು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ನಿಂದೆ",
      "meaning": "Blame / criticism",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-147",
      "sourceForm": "ಕ್ಷಮೆ",
      "sourceMeaning": "Forgiveness",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ಕ್ಷಮೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-147-1",
          "word": "ಮನ್ನಣೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮನ್ನಣೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-147-2",
          "word": "ತಾಳ್ಮೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಾಳ್ಮೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-147-3",
          "word": "ಬಿಟ್ಟುಬಿಡುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಿಟ್ಟುಬಿಡುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕ್ಷಮೆ",
      "meaning": "Forgiveness",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-148",
      "sourceForm": "ಪ್ರಾರ್ಥನೆ",
      "sourceMeaning": "Prayer / request",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ಪ್ರಾರ್ಥನೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-148-1",
          "word": "ಬೇಡಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೇಡಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-148-2",
          "word": "ಮೊರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೊರೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-148-3",
          "word": "ಅರಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅರಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪ್ರಾರ್ಥನೆ",
      "meaning": "Prayer / request",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-149",
      "sourceForm": "ಆಮಂತ್ರಣ",
      "sourceMeaning": "Invitation",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ಆಮಂತ್ರಣ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-149-1",
          "word": "ಕರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕರೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-149-2",
          "word": "ಕರೆಯೋಲೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕರೆಯೋಲೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-149-3",
          "word": "ಆಹ್ವಾನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಆಹ್ವಾನ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಆಮಂತ್ರಣ",
      "meaning": "Invitation",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-150",
      "sourceForm": "ಸ್ವಾಗತ",
      "sourceMeaning": "Welcome",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ಸ್ವಾಗತ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-150-1",
          "word": "ಬರಮಾಡಿಕೊಳ್ಳುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬರಮಾಡಿಕೊಳ್ಳುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-150-2",
          "word": "ಎದುರುಗೊಳ್ಳುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎದುರುಗೊಳ್ಳುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸ್ವಾಗತ",
      "meaning": "Welcome",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-151",
      "sourceForm": "ವಿದಾಯ",
      "sourceMeaning": "Farewell",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ವಿದಾಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-151-1",
          "word": "ಬೀಳ್ಕೊಡುಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೀಳ್ಕೊಡುಗೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-151-2",
          "word": "ಕಳಿಸಿಕೊಡುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಳಿಸಿಕೊಡುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವಿದಾಯ",
      "meaning": "Farewell",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-152",
      "sourceForm": "ಚರ್ಚೆ",
      "sourceMeaning": "Discussion",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ಚರ್ಚೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-152-1",
          "word": "ಮಾತುಕತೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಾತುಕತೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-152-2",
          "word": "ವಿಚಾರ ವಿನಿಮಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ವಿಚಾರ ವಿನಿಮಯ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಚರ್ಚೆ",
      "meaning": "Discussion",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-153",
      "sourceForm": "ವಾದ",
      "sourceMeaning": "Argument",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ವಾದ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-153-1",
          "word": "ಜಗಳ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಜಗಳ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-153-2",
          "word": "ಮಾತು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಾತು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-153-3",
          "word": "ವಾದಿಸುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ವಾದಿಸುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವಾದ",
      "meaning": "Argument",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-154",
      "sourceForm": "ಮೌನ",
      "sourceMeaning": "Silence",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ಮೌನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-154-1",
          "word": "ಸುಮ್ಮನಿರುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸುಮ್ಮನಿರುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-154-2",
          "word": "ಮಾತಿಲ್ಲದಿರುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಾತಿಲ್ಲದಿರುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಮೌನ",
      "meaning": "Silence",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-155",
      "sourceForm": "ಶಪಥ",
      "sourceMeaning": "Oath / vow",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ಶಪಥ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-155-1",
          "word": "ಆಣೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಆಣೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-155-2",
          "word": "ಪ್ರಮಾಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪ್ರಮಾಣ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-155-3",
          "word": "ಪಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪಣ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಶಪಥ",
      "meaning": "Oath / vow",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-156",
      "sourceForm": "ವಚನ",
      "sourceMeaning": "Promise / word",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ವಚನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-156-1",
          "word": "ಮಾತು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಾತು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-156-2",
          "word": "ನುಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನುಡಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-156-3",
          "word": "ಭಾಷೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಭಾಷೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವಚನ",
      "meaning": "Promise / word",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-157",
      "sourceForm": "ಸೂಚನೆ",
      "sourceMeaning": "Instruction / hint",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ಸೂಚನೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-157-1",
          "word": "ತಿಳಿವಳಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿಳಿವಳಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-157-2",
          "word": "ಎಚ್ಚರಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಚ್ಚರಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-157-3",
          "word": "ಸುಳಿವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸುಳಿವು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸೂಚನೆ",
      "meaning": "Instruction / hint",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-158",
      "sourceForm": "ಅನುಮತಿ",
      "sourceMeaning": "Permission",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ಅನುಮತಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-158-1",
          "word": "ಒಪ್ಪಿಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಪ್ಪಿಗೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-158-2",
          "word": "ಅಪ್ಪಣೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಪ್ಪಣೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಅನುಮತಿ",
      "meaning": "Permission",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-159",
      "sourceForm": "ನಿರಾಕರಣೆ",
      "sourceMeaning": "Rejection",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ನಿರಾಕರಣೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-159-1",
          "word": "ತಿರಸ್ಕಾರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿರಸ್ಕಾರ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-159-2",
          "word": "ಬೇಡವೆನ್ನುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೇಡವೆನ್ನುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ನಿರಾಕರಣೆ",
      "meaning": "Rejection",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-160",
      "sourceForm": "ಪ್ರಕಟಣೆ",
      "sourceMeaning": "Publication / notice",
      "category": "Communication",
      "sourceEtymology": {
        "form": "ಪ್ರಕಟಣೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-160-1",
          "word": "ಹೊರಡಿಸುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೊರಡಿಸುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-160-2",
          "word": "ಸಾರುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಾರುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪ್ರಕಟಣೆ",
      "meaning": "Publication / notice",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-161",
      "sourceForm": "ಸುಂದರ",
      "sourceMeaning": "Beautiful",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಸುಂದರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-161-1",
          "word": "ಚೆಲುವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಚೆಲುವು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-161-2",
          "word": "ಅಂದ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಂದ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-161-3",
          "word": "ಸೊಗಸು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸೊಗಸು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸುಂದರ",
      "meaning": "Beautiful",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-162",
      "sourceForm": "ಕುರೂಪ",
      "sourceMeaning": "Ugly",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಕುರೂಪ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-162-1",
          "word": "ವಿಕಾರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ವಿಕಾರ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-162-2",
          "word": "ಅಂದಗೆಟ್ಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಂದಗೆಟ್ಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-162-3",
          "word": "ಕುಂದು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕುಂದು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕುರೂಪ",
      "meaning": "Ugly",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-163",
      "sourceForm": "ನೂತನ",
      "sourceMeaning": "New",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ನೂತನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-163-1",
          "word": "ಹೊಸ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೊಸ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-163-2",
          "word": "ತಾಜಾ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಾಜಾ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ನೂತನ",
      "meaning": "New",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-164",
      "sourceForm": "ಪುರಾತನ",
      "sourceMeaning": "Old / ancient",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಪುರಾತನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-164-1",
          "word": "ಹಳೆಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಳೆಯ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-164-2",
          "word": "ಹಳತು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಳತು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪುರಾತನ",
      "meaning": "Old / ancient",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-165",
      "sourceForm": "ಬೃಹತ್",
      "sourceMeaning": "Huge / large",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಬೃಹತ್",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-165-1",
          "word": "ದೊಡ್ಡ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದೊಡ್ಡ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-165-2",
          "word": "ಹಿರಿದಾದ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಿರಿದಾದ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-165-3",
          "word": "ಹೆಬ್ಬ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೆಬ್ಬ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಬೃಹತ್",
      "meaning": "Huge / large",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-166",
      "sourceForm": "ಸೂಕ್ಷ್ಮ",
      "sourceMeaning": "Small / subtle",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಸೂಕ್ಷ್ಮ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-166-1",
          "word": "ಸಣ್ಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಣ್ಣ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-166-2",
          "word": "ನುಣ್ಣನೆಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನುಣ್ಣನೆಯ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-166-3",
          "word": "ಕಿರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಿರು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸೂಕ್ಷ್ಮ",
      "meaning": "Small / subtle",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-167",
      "sourceForm": "ಕಠಿಣ",
      "sourceMeaning": "Hard / difficult",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಕಠಿಣ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-167-1",
          "word": "ಗಟ್ಟಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗಟ್ಟಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-167-2",
          "word": "ಕಷ್ಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಷ್ಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-167-3",
          "word": "ಬಿಗಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಿಗಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕಠಿಣ",
      "meaning": "Hard / difficult",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-168",
      "sourceForm": "ಮೃದು",
      "sourceMeaning": "Soft",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಮೃದು",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-168-1",
          "word": "ಮೆದು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೆದು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-168-2",
          "word": "ನಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಯ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-168-3",
          "word": "ನುಣುಪು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನುಣುಪು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಮೃದು",
      "meaning": "Soft",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-169",
      "sourceForm": "ತೀಕ್ಷ್ಣ",
      "sourceMeaning": "Sharp / intense",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ತೀಕ್ಷ್ಣ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-169-1",
          "word": "ಹರಿತ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹರಿತ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-169-2",
          "word": "ಚೂಪು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಚೂಪು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-169-3",
          "word": "ಖಾರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಖಾರ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ತೀಕ್ಷ್ಣ",
      "meaning": "Sharp / intense",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-170",
      "sourceForm": "ಮಂದ",
      "sourceMeaning": "Slow / dull",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಮಂದ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-170-1",
          "word": "ನಿಧಾನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಿಧಾನ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-170-2",
          "word": "ಮಬ್ಬು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಬ್ಬು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-170-3",
          "word": "ಮೆಲ್ಲಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೆಲ್ಲಗೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಮಂದ",
      "meaning": "Slow / dull",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-171",
      "sourceForm": "ಪವಿತ್ರ",
      "sourceMeaning": "Sacred / pure",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಪವಿತ್ರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-171-1",
          "word": "ಮಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಡಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-171-2",
          "word": "ಶುಚಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಶುಚಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-171-3",
          "word": "ತಿಳಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿಳಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪವಿತ್ರ",
      "meaning": "Sacred / pure",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-172",
      "sourceForm": "ಮಲಿನ",
      "sourceMeaning": "Dirty / impure",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಮಲಿನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-172-1",
          "word": "ಕೊಳೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೊಳೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-172-2",
          "word": "ಕಸ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಸ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-172-3",
          "word": "ಮೈಲಿಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೈಲಿಗೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಮಲಿನ",
      "meaning": "Dirty / impure",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-173",
      "sourceForm": "ಪೂರ್ಣ",
      "sourceMeaning": "Full / complete",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಪೂರ್ಣ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-173-1",
          "word": "ತುಂಬಿದ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತುಂಬಿದ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-173-2",
          "word": "ಇಡೀ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಇಡೀ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-173-3",
          "word": "ಮುಗಿದ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮುಗಿದ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪೂರ್ಣ",
      "meaning": "Full / complete",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-174",
      "sourceForm": "ರಿಕ್ತ",
      "sourceMeaning": "Empty",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ರಿಕ್ತ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-174-1",
          "word": "ಬರಿದು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬರಿದು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-174-2",
          "word": "ಖಾಲಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಖಾಲಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-174-3",
          "word": "ಬರಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬರಡು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ರಿಕ್ತ",
      "meaning": "Empty",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-175",
      "sourceForm": "ಸಮಾನ",
      "sourceMeaning": "Equal / same",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಸಮಾನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-175-1",
          "word": "ಒಂದೇ ತರಹ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಂದೇ ತರಹ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-175-2",
          "word": "ಸರಿಸಮ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸರಿಸಮ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-175-3",
          "word": "ಹೋಲಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೋಲಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಮಾನ",
      "meaning": "Equal / same",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-176",
      "sourceForm": "ಭಿನ್ನ",
      "sourceMeaning": "Different",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಭಿನ್ನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-176-1",
          "word": "ಬೇರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೇರೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-176-2",
          "word": "ವಿಭಿನ್ನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ವಿಭಿನ್ನ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-176-3",
          "word": "ಒಡೆದ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಡೆದ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಭಿನ್ನ",
      "meaning": "Different",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-177",
      "sourceForm": "ಪ್ರಮುಖ",
      "sourceMeaning": "Important / main",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಪ್ರಮುಖ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-177-1",
          "word": "ಮುಖ್ಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮುಖ್ಯ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-177-2",
          "word": "ಮೊದಲ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೊದಲ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-177-3",
          "word": "ಹಿರಿಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಿರಿಯ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪ್ರಮುಖ",
      "meaning": "Important / main",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-178",
      "sourceForm": "ಸಾಮಾನ್ಯ",
      "sourceMeaning": "Common / ordinary",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಸಾಮಾನ್ಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-178-1",
          "word": "ಸಾಧಾರಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಾಧಾರಣ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-178-2",
          "word": "ಮಾಮೂಲಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಾಮೂಲಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-178-3",
          "word": "ಎಲ್ಲರಂಥ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಲ್ಲರಂಥ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಾಮಾನ್ಯ",
      "meaning": "Common / ordinary",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-179",
      "sourceForm": "ವಿಶೇಷ",
      "sourceMeaning": "Special",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ವಿಶೇಷ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-179-1",
          "word": "ಬೇರೆಯದೇ ಆದ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೇರೆಯದೇ ಆದ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-179-2",
          "word": "ಹಿರಿದಾದ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಿರಿದಾದ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-179-3",
          "word": "ಅಪರೂಪದ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಪರೂಪದ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವಿಶೇಷ",
      "meaning": "Special",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-180",
      "sourceForm": "ಶ್ರೇಷ್ಠ",
      "sourceMeaning": "Best / superior",
      "category": "Attributes",
      "sourceEtymology": {
        "form": "ಶ್ರೇಷ್ಠ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-180-1",
          "word": "ಉತ್ತಮ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಉತ್ತಮ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-180-2",
          "word": "ಮೇಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೇಲು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-180-3",
          "word": "ಹಿರಿದು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಿರಿದು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಶ್ರೇಷ್ಠ",
      "meaning": "Best / superior",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-181",
      "sourceForm": "ಶಿಖರ",
      "sourceMeaning": "Peak / summit",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ಶಿಖರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-181-1",
          "word": "ತುದಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತುದಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-181-2",
          "word": "ನೆತ್ತಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೆತ್ತಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-181-3",
          "word": "ಕೋಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೋಡು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಶಿಖರ",
      "meaning": "Peak / summit",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-182",
      "sourceForm": "ಕಣಿವೆ",
      "sourceMeaning": "Valley",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ಕಣಿವೆ",
        "etymology": "dravidian",
        "tamil": "கணவாய் (kaṇavāy; mountain pass, ravine; DEDR 1163)",
        "tulu": "kaṇime (defile or pass; DEDR 1163)",
        "note": "DEDR 1163 lists Kannada kaṇame/kaṇave/kaṇime/kaṇive for a narrow pass or gap between mountains, Tamil kaṇavāy for a mountain pass or ravine, and Tulu kaṇime for a defile or pass. No Proto-Dravidian reconstruction is supplied in this entry. The modern Kannada gloss ‘valley’ is broader; use the pass/ravine sense where precision matters."
      },
      "alternatives": [
        {
          "id": "contrib-182-1",
          "word": "ಕಂದಕ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಂದಕ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-182-2",
          "word": "ಇಳಿಜಾರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಇಳಿಜಾರು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-182-3",
          "word": "ತಗ್ಗು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಗ್ಗು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "The Kannada form ಕಣಿವೆ is historically attested in the Dravidian comparative record (DEDR 1163). Its older attested sense is a narrow mountain pass/gap or ravine; the broader modern ‘valley’ gloss should not be treated as identical in every context. Tamil and Tulu comparanda are recorded; no Proto-Dravidian reconstruction is supplied by this entry. Contributor-supplied alternatives remain subject to separate semantic review.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕಣಿವೆ",
      "meaning": "Valley",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-183",
      "sourceForm": "ಪ್ರಪಾತ",
      "sourceMeaning": "Abyss / cliff",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ಪ್ರಪಾತ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-183-1",
          "word": "ಕಂದಕ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಂದಕ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-183-2",
          "word": "ಪ್ರಪಾತ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪ್ರಪಾತ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-183-3",
          "word": "ಆಳವಾದ ಗುಂಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಆಳವಾದ ಗುಂಡಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪ್ರಪಾತ",
      "meaning": "Abyss / cliff",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-184",
      "sourceForm": "ದ್ವೀಪ",
      "sourceMeaning": "Island",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ದ್ವೀಪ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-184-1",
          "word": "ನಡುಗಡ್ಡೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಡುಗಡ್ಡೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-184-2",
          "word": "ಕುದುರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕುದುರು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ದ್ವೀಪ",
      "meaning": "Island",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-185",
      "sourceForm": "ತೀರ",
      "sourceMeaning": "Shore / bank",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ತೀರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-185-1",
          "word": "ದಡ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದಡ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-185-2",
          "word": "ಕಿನಾರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಿನಾರೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-185-3",
          "word": "ಅಂಚು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಂಚು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ತೀರ",
      "meaning": "Shore / bank",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-186",
      "sourceForm": "ಮರುಭೂಮಿ",
      "sourceMeaning": "Desert",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ಮರುಭೂಮಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-186-1",
          "word": "ಬರಡು ನೆಲ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬರಡು ನೆಲ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-186-2",
          "word": "ಮರಳುಗಾಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮರಳುಗಾಡು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಮರುಭೂಮಿ",
      "meaning": "Desert",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-187",
      "sourceForm": "ಸರೋವರ",
      "sourceMeaning": "Lake / pond",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ಸರೋವರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-187-1",
          "word": "ಕೆರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೆರೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-187-2",
          "word": "ಕೊಳ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೊಳ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-187-3",
          "word": "ಮಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಡು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸರೋವರ",
      "meaning": "Lake / pond",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-188",
      "sourceForm": "ನಿರ್ಝರ",
      "sourceMeaning": "Stream / spring",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ನಿರ್ಝರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-188-1",
          "word": "ಝರಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಝರಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-188-2",
          "word": "ತೊರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೊರೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-188-3",
          "word": "ಚಿಲುಮೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಚಿಲುಮೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ನಿರ್ಝರ",
      "meaning": "Stream / spring",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-189",
      "sourceForm": "ಜಲಪಾತ",
      "sourceMeaning": "Waterfall",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ಜಲಪಾತ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-189-1",
          "word": "ಅಬ್ಬಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಬ್ಬಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-189-2",
          "word": "ದುಮುಕು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದುಮುಕು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-189-3",
          "word": "ಹೊಳೆಬೀಳು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೊಳೆಬೀಳು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಜಲಪಾತ",
      "meaning": "Waterfall",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-190",
      "sourceForm": "ಭೂಕಂಪ",
      "sourceMeaning": "Earthquake",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ಭೂಕಂಪ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-190-1",
          "word": "ನೆಲನಡುಕ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೆಲನಡುಕ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-190-2",
          "word": "ನೆಲಕಂಪನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೆಲಕಂಪನ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಭೂಕಂಪ",
      "meaning": "Earthquake",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-191",
      "sourceForm": "ಚಂಡಮಾರುತ",
      "sourceMeaning": "Cyclone / storm",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ಚಂಡಮಾರುತ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-191-1",
          "word": "ಬಿರುಗಾಳಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಿರುಗಾಳಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-191-2",
          "word": "ಸುಳಿಗಾಳಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸುಳಿಗಾಳಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಚಂಡಮಾರುತ",
      "meaning": "Cyclone / storm",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-193",
      "sourceForm": "ಗರ್ಜನೆ",
      "sourceMeaning": "Thunder / roar",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ಗರ್ಜನೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-193-1",
          "word": "ಗುಡುಗು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗುಡುಗು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-193-2",
          "word": "ಆರ್ಭಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಆರ್ಭಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-193-3",
          "word": "ಕೂಗು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೂಗು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಗರ್ಜನೆ",
      "meaning": "Thunder / roar",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-194",
      "sourceForm": "ಹಿಮ",
      "sourceMeaning": "Snow / frost",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ಹಿಮ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-194-1",
          "word": "ಮಂಜು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಂಜು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-194-2",
          "word": "ಇಬ್ಬನಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಇಬ್ಬನಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-194-3",
          "word": "ತಂಪು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಂಪು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಹಿಮ",
      "meaning": "Snow / frost",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-195",
      "sourceForm": "ಮರೀಚಿಕೆ",
      "sourceMeaning": "Mirage",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ಮರೀಚಿಕೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-195-1",
          "word": "ಬಿಸಿಲ್ಗುದುರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಿಸಿಲ್ಗುದುರೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-195-2",
          "word": "ಮೋಸದ ನೋಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೋಸದ ನೋಟ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಮರೀಚಿಕೆ",
      "meaning": "Mirage",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-196",
      "sourceForm": "ಧೂಳಿ",
      "sourceMeaning": "Dust",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ಧೂಳಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-196-1",
          "word": "ದೂಳು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದೂಳು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-196-2",
          "word": "ಮಣ್ಣು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಣ್ಣು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-196-3",
          "word": "ಬೂದಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೂದಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಧೂಳಿ",
      "meaning": "Dust",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-198",
      "sourceForm": "ಲೋಹ",
      "sourceMeaning": "Metal",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ಲೋಹ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-198-1",
          "word": "ಕಬ್ಬಿಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಬ್ಬಿಣ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-198-2",
          "word": "ತಗಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಗಡು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-198-3",
          "word": "ಅದಿರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅದಿರು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಲೋಹ",
      "meaning": "Metal",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-199",
      "sourceForm": "ಸುವರ್ಣ",
      "sourceMeaning": "Gold",
      "category": "Geography",
      "sourceEtymology": {
        "form": "ಸುವರ್ಣ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-199-1",
          "word": "ಚಿನ್ನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಚಿನ್ನ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-199-2",
          "word": "ಬಂಗಾರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಂಗಾರ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-199-3",
          "word": "ಹೊನ್ನು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೊನ್ನು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸುವರ್ಣ",
      "meaning": "Gold",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-201",
      "sourceForm": "ವ್ಯಾಪಾರ",
      "sourceMeaning": "Business / trade",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ವ್ಯಾಪಾರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-201-1",
          "word": "ಮಾರಾಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಾರಾಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-201-2",
          "word": "ವಹಿವಾಟು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ವಹಿವಾಟು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-201-3",
          "word": "ಕೊಳ್ಳು-ಕೊಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೊಳ್ಳು-ಕೊಡು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವ್ಯಾಪಾರ",
      "meaning": "Business / trade",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-203",
      "sourceForm": "ವಿಕ್ರಯ",
      "sourceMeaning": "Sale / selling",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ವಿಕ್ರಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-203-1",
          "word": "ಮಾರಾಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಾರಾಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-203-2",
          "word": "ಮಾರುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಾರುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವಿಕ್ರಯ",
      "meaning": "Sale / selling",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-204",
      "sourceForm": "ಮೌಲ್ಯ",
      "sourceMeaning": "Value / price",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ಮೌಲ್ಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-204-1",
          "word": "ಬೆಲೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೆಲೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-204-2",
          "word": "ಕಿಮ್ಮತ್ತು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಿಮ್ಮತ್ತು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-204-3",
          "word": "ಯೋಗ್ಯತೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಯೋಗ್ಯತೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಮೌಲ್ಯ",
      "meaning": "Value / price",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-205",
      "sourceForm": "ಲಾಭ",
      "sourceMeaning": "Profit",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ಲಾಭ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-205-1",
          "word": "ಹುಟ್ಟುವಳಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹುಟ್ಟುವಳಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-205-2",
          "word": "ಉಳಿತಾಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಉಳಿತಾಯ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-205-3",
          "word": "ಏಳಿಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಏಳಿಗೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಲಾಭ",
      "meaning": "Profit",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-206",
      "sourceForm": "ನಷ್ಟ",
      "sourceMeaning": "Loss",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ನಷ್ಟ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-206-1",
          "word": "ಕೇಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೇಡು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-206-2",
          "word": "ಹಾನಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಾನಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-206-3",
          "word": "ಕಳೆದುಕೊಳ್ಳುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಳೆದುಕೊಳ್ಳುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ನಷ್ಟ",
      "meaning": "Loss",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-208",
      "sourceForm": "ವೇತನ",
      "sourceMeaning": "Salary / wage",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ವೇತನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-208-1",
          "word": "ಸಂಬಳ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಂಬಳ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-208-2",
          "word": "ಕೂಲಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೂಲಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-208-3",
          "word": "ಪಗಾರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪಗಾರ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವೇತನ",
      "meaning": "Salary / wage",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-209",
      "sourceForm": "ಕರ",
      "sourceMeaning": "Tax",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ಕರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-209-1",
          "word": "ಸುಂಕ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸುಂಕ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-209-2",
          "word": "ಕಂದಾಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಂದಾಯ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-209-3",
          "word": "ತೆರಿಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೆರಿಗೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕರ",
      "meaning": "Tax",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-210",
      "sourceForm": "ಸಂಪತ್ತು",
      "sourceMeaning": "Wealth / property",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ಸಂಪತ್ತು",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-210-1",
          "word": "ಸಿರಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಿರಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-210-2",
          "word": "ಒಡವೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಡವೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-210-3",
          "word": "ಆಸ್ತಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಆಸ್ತಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಂಪತ್ತು",
      "meaning": "Wealth / property",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-211",
      "sourceForm": "ದಾರಿದ್ರ್ಯ",
      "sourceMeaning": "Poverty",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ದಾರಿದ್ರ್ಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-211-1",
          "word": "ಬಡತನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಡತನ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-211-2",
          "word": "ಕೊರತೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೊರತೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-211-3",
          "word": "ಇಲ್ಲದಿರುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಇಲ್ಲದಿರುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ದಾರಿದ್ರ್ಯ",
      "meaning": "Poverty",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-212",
      "sourceForm": "ಭಂಡಾರ",
      "sourceMeaning": "Treasury / granary",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ಭಂಡಾರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-212-1",
          "word": "ಕಣಜ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಣಜ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-212-2",
          "word": "ಬೊಕ್ಕಸ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೊಕ್ಕಸ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-212-3",
          "word": "ಉಗ್ರಾಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಉಗ್ರಾಣ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಭಂಡಾರ",
      "meaning": "Treasury / granary",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-213",
      "sourceForm": "ಪರಿಮಾಣ",
      "sourceMeaning": "Quantity / measurement",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ಪರಿಮಾಣ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-213-1",
          "word": "ಅಳತೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಳತೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-213-2",
          "word": "ತೂಕ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೂಕ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-213-3",
          "word": "ಗಾತ್ರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗಾತ್ರ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪರಿಮಾಣ",
      "meaning": "Quantity / measurement",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-215",
      "sourceForm": "ದೂರ",
      "sourceMeaning": "Distance",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ದೂರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-215-1",
          "word": "ಅಂತರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಂತರ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-215-2",
          "word": "ಎಡೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಡೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-215-3",
          "word": "ದೂರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದೂರ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ದೂರ",
      "meaning": "Distance",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-216",
      "sourceForm": "ಸಮೀಪ",
      "sourceMeaning": "Near / close",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ಸಮೀಪ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-216-1",
          "word": "ಹತ್ತಿರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹತ್ತಿರ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-216-2",
          "word": "ಪಕ್ಕ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪಕ್ಕ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-216-3",
          "word": "ಸನಿಹ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸನಿಹ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಮೀಪ",
      "meaning": "Near / close",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-217",
      "sourceForm": "ವಿಸ್ತಾರ",
      "sourceMeaning": "Area / expanse",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ವಿಸ್ತಾರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-217-1",
          "word": "ಅಗಲ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಗಲ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-217-2",
          "word": "ಹರವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹರವು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-217-3",
          "word": "ಹಬ್ಬುವಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಬ್ಬುವಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವಿಸ್ತಾರ",
      "meaning": "Area / expanse",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-218",
      "sourceForm": "ಗಾಢ",
      "sourceMeaning": "Deep / dense",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ಗಾಢ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-218-1",
          "word": "ಆಳ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಆಳ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-218-2",
          "word": "ದಟ್ಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದಟ್ಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-218-3",
          "word": "ಗಟ್ಟಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗಟ್ಟಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಗಾಢ",
      "meaning": "Deep / dense",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-219",
      "sourceForm": "ಉನ್ನತ",
      "sourceMeaning": "High / tall",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ಉನ್ನತ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-219-1",
          "word": "ಎತ್ತರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎತ್ತರ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-219-2",
          "word": "ಮೇಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೇಲು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-219-3",
          "word": "ನಿಡಿದು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಿಡಿದು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಉನ್ನತ",
      "meaning": "High / tall",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-220",
      "sourceForm": "ಕನಿಷ್ಠ",
      "sourceMeaning": "Minimum / least",
      "category": "Finance",
      "sourceEtymology": {
        "form": "ಕನಿಷ್ಠ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-220-1",
          "word": "ಕಡಿಮೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಡಿಮೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-220-2",
          "word": "ಕಿರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಿರು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-220-3",
          "word": "ಕೊನೆಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೊನೆಯ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕನಿಷ್ಠ",
      "meaning": "Minimum / least",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-221",
      "sourceForm": "ಉತ್ಸವ",
      "sourceMeaning": "Festival / celebration",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಉತ್ಸವ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-221-1",
          "word": "ಹಬ್ಬ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಬ್ಬ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-221-2",
          "word": "ಜಾತ್ರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಜಾತ್ರೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-221-3",
          "word": "ಸಂಭ್ರಮ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಂಭ್ರಮ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಉತ್ಸವ",
      "meaning": "Festival / celebration",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-225",
      "sourceForm": "ಪರಂಪರೆ",
      "sourceMeaning": "Tradition",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಪರಂಪರೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-225-1",
          "word": "ನಡೆವಳಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಡೆವಳಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-225-2",
          "word": "ಬಳುವಳಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಳುವಳಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-225-3",
          "word": "ಹಿಂದಿನಿಂದ ಬಂದದ್ದು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಿಂದಿನಿಂದ ಬಂದದ್ದು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪರಂಪರೆ",
      "meaning": "Tradition",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-228",
      "sourceForm": "ದಾನ",
      "sourceMeaning": "Donation / charity",
      "category": "Society",
      "sourceEtymology": {
        "form": "ದಾನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-228-1",
          "word": "ಕೊಡುಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೊಡುಗೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-228-2",
          "word": "ನೀಡಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೀಡಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-228-3",
          "word": "ಧರ್ಮ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಧರ್ಮ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ದಾನ",
      "meaning": "Donation / charity",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-229",
      "sourceForm": "ಪೂಜೆ",
      "sourceMeaning": "Worship",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಪೂಜೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-229-1",
          "word": "ಆರಾಧನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಆರಾಧನೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-229-2",
          "word": "ನಮನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಮನ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-229-3",
          "word": "ಸೇವೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸೇವೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪೂಜೆ",
      "meaning": "Worship",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-230",
      "sourceForm": "ಮಂದಿರ",
      "sourceMeaning": "Temple / house",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಮಂದಿರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-230-1",
          "word": "ಗುಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗುಡಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-230-2",
          "word": "ದೇಗುಲ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದೇಗುಲ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-230-3",
          "word": "ಮನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮನೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಮಂದಿರ",
      "meaning": "Temple / house",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-231",
      "sourceForm": "ಮೂರ್ತಿ",
      "sourceMeaning": "Idol / statue",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಮೂರ್ತಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-231-1",
          "word": "ಗೊಂಬೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗೊಂಬೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-231-2",
          "word": "ಕಲ್ಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಲ್ಲು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-231-3",
          "word": "ರೂಪ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ರೂಪ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಮೂರ್ತಿ",
      "meaning": "Idol / statue",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-232",
      "sourceForm": "ಯಾತ್ರೆ",
      "sourceMeaning": "Journey / pilgrimage",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಯಾತ್ರೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-232-1",
          "word": "ಪಯಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪಯಣ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-232-2",
          "word": "ತಿರುಗಾಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿರುಗಾಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-232-3",
          "word": "ಜಾತ್ರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಜಾತ್ರೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಯಾತ್ರೆ",
      "meaning": "Journey / pilgrimage",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-233",
      "sourceForm": "ನಿವಾಸ",
      "sourceMeaning": "Residence",
      "category": "Society",
      "sourceEtymology": {
        "form": "ನಿವಾಸ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-233-1",
          "word": "ಮನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮನೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-233-2",
          "word": "ಬೀಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೀಡು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-233-3",
          "word": "ತಾಣ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಾಣ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-233-4",
          "word": "ನೆಲೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೆಲೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ನಿವಾಸ",
      "meaning": "Residence",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-235",
      "sourceForm": "ರಾಜಧಾನಿ",
      "sourceMeaning": "Capital city",
      "category": "Society",
      "sourceEtymology": {
        "form": "ರಾಜಧಾನಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-235-1",
          "word": "ರಾಜಬೀಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ರಾಜಬೀಡು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-235-2",
          "word": "ನಾಡಿನ ನಡುಮನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಾಡಿನ ನಡುಮನೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ರಾಜಧಾನಿ",
      "meaning": "Capital city",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-237",
      "sourceForm": "ಸೀಮೆ",
      "sourceMeaning": "Border / boundary",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಸೀಮೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-237-1",
          "word": "ಗಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗಡಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-237-2",
          "word": "ಅಂಚು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಂಚು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-237-3",
          "word": "ಎಲ್ಲೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಲ್ಲೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸೀಮೆ",
      "meaning": "Border / boundary",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-239",
      "sourceForm": "ವಿಜಯ",
      "sourceMeaning": "Victory",
      "category": "Society",
      "sourceEtymology": {
        "form": "ವಿಜಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-239-1",
          "word": "ಗೆಲುವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗೆಲುವು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-239-2",
          "word": "ಜಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಜಯ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವಿಜಯ",
      "meaning": "Victory",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-240",
      "sourceForm": "ಪರಾಜಯ",
      "sourceMeaning": "Defeat",
      "category": "Society",
      "sourceEtymology": {
        "form": "ಪರಾಜಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-240-1",
          "word": "ಸೋಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸೋಲು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-240-2",
          "word": "ಹಿನ್ನಡೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಿನ್ನಡೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪರಾಜಯ",
      "meaning": "Defeat",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-241",
      "sourceForm": "ಆಯುಧ",
      "sourceMeaning": "Weapon / tool",
      "category": "Household",
      "sourceEtymology": {
        "form": "ಆಯುಧ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-241-1",
          "word": "ಹತ್ಯಾರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹತ್ಯಾರು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-241-2",
          "word": "ಸಲಕರಣೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಲಕರಣೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-241-3",
          "word": "ಕತ್ತಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕತ್ತಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಆಯುಧ",
      "meaning": "Weapon / tool",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-242",
      "sourceForm": "ಪಾತ್ರೆ",
      "sourceMeaning": "Vessel / utensil",
      "category": "Household",
      "sourceEtymology": {
        "form": "ಪಾತ್ರೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-242-1",
          "word": "ಬಟ್ಟಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಟ್ಟಲು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-242-2",
          "word": "ಮಡಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಡಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-242-3",
          "word": "ಕುಡಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕುಡಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪಾತ್ರೆ",
      "meaning": "Vessel / utensil",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-243",
      "sourceForm": "ದರ್ಪಣ",
      "sourceMeaning": "Mirror",
      "category": "Household",
      "sourceEtymology": {
        "form": "ದರ್ಪಣ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-243-1",
          "word": "ಕನ್ನಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕನ್ನಡಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ದರ್ಪಣ",
      "meaning": "Mirror",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-244",
      "sourceForm": "ಛತ್ರಿ",
      "sourceMeaning": "Umbrella",
      "category": "Household",
      "sourceEtymology": {
        "form": "ಛತ್ರಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-244-1",
          "word": "ಕೊಡೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೊಡೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಛತ್ರಿ",
      "meaning": "Umbrella",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-245",
      "sourceForm": "ಪಾದರಕ್ಷೆ",
      "sourceMeaning": "Footwear",
      "category": "Household",
      "sourceEtymology": {
        "form": "ಪಾದರಕ್ಷೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-245-1",
          "word": "ಚಪ್ಪಲಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಚಪ್ಪಲಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-245-2",
          "word": "ಮೆಟ್ಟು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೆಟ್ಟು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪಾದರಕ್ಷೆ",
      "meaning": "Footwear",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-246",
      "sourceForm": "ಆಸನ",
      "sourceMeaning": "Seat",
      "category": "Household",
      "sourceEtymology": {
        "form": "ಆಸನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-246-1",
          "word": "ಪೀಠ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪೀಠ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-246-2",
          "word": "ಮಣೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಣೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-246-3",
          "word": "ಕೂರುವ ಜಾಗ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೂರುವ ಜಾಗ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಆಸನ",
      "meaning": "Seat",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-247",
      "sourceForm": "ಸ್ತಂಭ",
      "sourceMeaning": "Pillar",
      "category": "Household",
      "sourceEtymology": {
        "form": "ಸ್ತಂಭ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-247-1",
          "word": "ಕಂಬ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಂಬ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-247-2",
          "word": "ಆಧಾರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಆಧಾರ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸ್ತಂಭ",
      "meaning": "Pillar",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-248",
      "sourceForm": "ಭಿತ್ತಿ",
      "sourceMeaning": "Wall",
      "category": "Household",
      "sourceEtymology": {
        "form": "ಭಿತ್ತಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-248-1",
          "word": "ಗೋಡೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗೋಡೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಭಿತ್ತಿ",
      "meaning": "Wall",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-249",
      "sourceForm": "ಛಾವಣಿ",
      "sourceMeaning": "Roof",
      "category": "Household",
      "sourceEtymology": {
        "form": "ಛಾವಣಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-249-1",
          "word": "ಮಾಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಾಡು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-249-2",
          "word": "ಸೂರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸೂರು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-249-3",
          "word": "ಮೇಲ್ಛಾವಣಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೇಲ್ಛಾವಣಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಛಾವಣಿ",
      "meaning": "Roof",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-250",
      "sourceForm": "ಅಂಗಣ",
      "sourceMeaning": "Courtyard",
      "category": "Household",
      "sourceEtymology": {
        "form": "ಅಂಗಣ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-250-1",
          "word": "ಅಂಗಳ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಂಗಳ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-250-2",
          "word": "ಬಯಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಯಲು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-250-3",
          "word": "ಹಿತ್ತಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಿತ್ತಲು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಅಂಗಣ",
      "meaning": "Courtyard",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-251",
      "sourceForm": "ಕೂಪ",
      "sourceMeaning": "Well",
      "category": "Household",
      "sourceEtymology": {
        "form": "ಕೂಪ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-251-1",
          "word": "ಬಾವಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಾವಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-251-2",
          "word": "ಗುಂಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗುಂಡಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕೂಪ",
      "meaning": "Well",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-252",
      "sourceForm": "ತಟಾಕ",
      "sourceMeaning": "Tank / pond",
      "category": "Household",
      "sourceEtymology": {
        "form": "ತಟಾಕ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-252-1",
          "word": "ಕೆರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೆರೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-252-2",
          "word": "ಕಟ್ಟೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಟ್ಟೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ತಟಾಕ",
      "meaning": "Tank / pond",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-254",
      "sourceForm": "ನೌಕೆ",
      "sourceMeaning": "Boat / ship",
      "category": "Household",
      "sourceEtymology": {
        "form": "ನೌಕೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-254-1",
          "word": "ದೋಣಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದೋಣಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-254-2",
          "word": "ಹಡಗು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಡಗು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-254-3",
          "word": "ತೆಪ್ಪ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೆಪ್ಪ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ನೌಕೆ",
      "meaning": "Boat / ship",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-255",
      "sourceForm": "ರಥ",
      "sourceMeaning": "Chariot / cart",
      "category": "Household",
      "sourceEtymology": {
        "form": "ರಥ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-255-1",
          "word": "ತೇರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೇರು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-255-2",
          "word": "ಬಂಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಂಡಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ರಥ",
      "meaning": "Chariot / cart",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-256",
      "sourceForm": "ಚಕ್ರ",
      "sourceMeaning": "Wheel",
      "category": "Household",
      "sourceEtymology": {
        "form": "ಚಕ್ರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-256-1",
          "word": "ಗಾಲಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗಾಲಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-256-2",
          "word": "ಬಂಡಿಗಾಲಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಂಡಿಗಾಲಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-256-3",
          "word": "ಸುತ್ತು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸುತ್ತು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಚಕ್ರ",
      "meaning": "Wheel",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-257",
      "sourceForm": "ರಜ್ಜು",
      "sourceMeaning": "Rope",
      "category": "Household",
      "sourceEtymology": {
        "form": "ರಜ್ಜು",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-257-1",
          "word": "ಹಗ್ಗ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಗ್ಗ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-257-2",
          "word": "ನಾರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಾರು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-257-3",
          "word": "ದಾರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ದಾರ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ರಜ್ಜು",
      "meaning": "Rope",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-258",
      "sourceForm": "ಸೂಚಿ",
      "sourceMeaning": "Needle",
      "category": "Household",
      "sourceEtymology": {
        "form": "ಸೂಚಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-258-1",
          "word": "ಸೂಜಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸೂಜಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-258-2",
          "word": "ಮುಳ್ಳು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮುಳ್ಳು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸೂಚಿ",
      "meaning": "Needle",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-259",
      "sourceForm": "ಕೀಲಕ",
      "sourceMeaning": "Lock / key / peg",
      "category": "Household",
      "sourceEtymology": {
        "form": "ಕೀಲಕ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-259-1",
          "word": "ಬೀಗ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೀಗ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-259-2",
          "word": "ಚಿಲಕ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಚಿಲಕ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-259-3",
          "word": "ಗೂಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗೂಟ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕೀಲಕ",
      "meaning": "Lock / key / peg",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-260",
      "sourceForm": "ಶೃಂಖಲೆ",
      "sourceMeaning": "Chain",
      "category": "Household",
      "sourceEtymology": {
        "form": "ಶೃಂಖಲೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-260-1",
          "word": "ಸರಪಳಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸರಪಳಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-260-2",
          "word": "ಕೊಂಡಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೊಂಡಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಶೃಂಖಲೆ",
      "meaning": "Chain",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-263",
      "sourceForm": "ಆರೋಗ್ಯ",
      "sourceMeaning": "Health",
      "category": "Health",
      "sourceEtymology": {
        "form": "ಆರೋಗ್ಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-263-1",
          "word": "ನಲವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಲವು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-263-2",
          "word": "ಮೈಕಟ್ಟು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೈಕಟ್ಟು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-263-3",
          "word": "ಒಳ್ಳೆಯ ಸ್ಥಿತಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಒಳ್ಳೆಯ ಸ್ಥಿತಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಆರೋಗ್ಯ",
      "meaning": "Health",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-264",
      "sourceForm": "ವ್ರಣ",
      "sourceMeaning": "Wound / sore",
      "category": "Health",
      "sourceEtymology": {
        "form": "ವ್ರಣ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-264-1",
          "word": "ಗಾಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗಾಯ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-264-2",
          "word": "ಹುಣ್ಣು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹುಣ್ಣು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-264-3",
          "word": "ಪೆಟ್ಟು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪೆಟ್ಟು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವ್ರಣ",
      "meaning": "Wound / sore",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-265",
      "sourceForm": "ವೇದನೆ",
      "sourceMeaning": "Pain",
      "category": "Health",
      "sourceEtymology": {
        "form": "ವೇದನೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-265-1",
          "word": "ನೋವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೋವು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-265-2",
          "word": "ಸಂಕಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಂಕಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-265-3",
          "word": "ಬೇನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೇನೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವೇದನೆ",
      "meaning": "Pain",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-267",
      "sourceForm": "ತೃಷೆ",
      "sourceMeaning": "Thirst",
      "category": "Health",
      "sourceEtymology": {
        "form": "ತೃಷೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-267-1",
          "word": "ಬಾಯಾರಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಾಯಾರಿಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-267-2",
          "word": "ನೀರಡಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೀರಡಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ತೃಷೆ",
      "meaning": "Thirst",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-268",
      "sourceForm": "ಸ್ವಾದ",
      "sourceMeaning": "Taste",
      "category": "Health",
      "sourceEtymology": {
        "form": "ಸ್ವಾದ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-268-1",
          "word": "ರುಚಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ರುಚಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-268-2",
          "word": "ಸವಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸವಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸ್ವಾದ",
      "meaning": "Taste",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-269",
      "sourceForm": "ಗಂಧ",
      "sourceMeaning": "Smell / fragrance",
      "category": "Health",
      "sourceEtymology": {
        "form": "ಗಂಧ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-269-1",
          "word": "ವಾಸನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ವಾಸನೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-269-2",
          "word": "ಕಂಪು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಂಪು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-269-3",
          "word": "ಸುವಾಸನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸುವಾಸನೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಗಂಧ",
      "meaning": "Smell / fragrance",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-270",
      "sourceForm": "ದುರ್ಗಂಧ",
      "sourceMeaning": "Bad smell",
      "category": "Health",
      "sourceEtymology": {
        "form": "ದುರ್ಗಂಧ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-270-1",
          "word": "ನಾತ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನಾತ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-270-2",
          "word": "ಕೊಳೆವಾಸನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೊಳೆವಾಸನೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ದುರ್ಗಂಧ",
      "meaning": "Bad smell",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-272",
      "sourceForm": "ದಧಿ",
      "sourceMeaning": "Curd",
      "category": "Health",
      "sourceEtymology": {
        "form": "ದಧಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-272-1",
          "word": "ಮೊಸರು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೊಸರು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ದಧಿ",
      "meaning": "Curd",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-274",
      "sourceForm": "ತೈಲ",
      "sourceMeaning": "Oil",
      "category": "Health",
      "sourceEtymology": {
        "form": "ತೈಲ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-274-1",
          "word": "ಎಣ್ಣೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಎಣ್ಣೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ತೈಲ",
      "meaning": "Oil",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-277",
      "sourceForm": "ತಂಡುಲ",
      "sourceMeaning": "Rice",
      "category": "Health",
      "sourceEtymology": {
        "form": "ತಂಡುಲ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-277-1",
          "word": "ಅಕ್ಕಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಕ್ಕಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ತಂಡುಲ",
      "meaning": "Rice",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-279",
      "sourceForm": "ಶಾಕ",
      "sourceMeaning": "Vegetable",
      "category": "Health",
      "sourceEtymology": {
        "form": "ಶಾಕ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-279-1",
          "word": "ತರಕಾರಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತರಕಾರಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-279-2",
          "word": "ಸೊಪ್ಪು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸೊಪ್ಪು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಶಾಕ",
      "meaning": "Vegetable",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-281",
      "sourceForm": "ಅವಧಿ",
      "sourceMeaning": "Duration / deadline",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಅವಧಿ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-281-1",
          "word": "ಗಡುವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗಡುವು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-281-2",
          "word": "ಕಾಲಮಿತಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಾಲಮಿತಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-281-3",
          "word": "ಹೊತ್ತು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೊತ್ತು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಅವಧಿ",
      "meaning": "Duration / deadline",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-282",
      "sourceForm": "ಕ್ರಮ",
      "sourceMeaning": "Order / sequence",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಕ್ರಮ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-282-1",
          "word": "ಸಾಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸಾಲು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-282-2",
          "word": "ಏರ್ಪಾಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಏರ್ಪಾಡು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-282-3",
          "word": "ರೀತಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ರೀತಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕ್ರಮ",
      "meaning": "Order / sequence",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-283",
      "sourceForm": "ವಿಧಾನ",
      "sourceMeaning": "Procedure / method",
      "category": "Other",
      "sourceEtymology": {
        "form": "ವಿಧಾನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-283-1",
          "word": "ಬಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಗೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-283-2",
          "word": "ರೀತಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ರೀತಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-283-3",
          "word": "ಮಾಡುವ ಬಗೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮಾಡುವ ಬಗೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ವಿಧಾನ",
      "meaning": "Procedure / method",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-284",
      "sourceForm": "ಆಧಾರ",
      "sourceMeaning": "Support / base",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಆಧಾರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-284-1",
          "word": "ಆಸರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಆಸರೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-284-2",
          "word": "ಊರುಗೋಲು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಊರುಗೋಲು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-284-3",
          "word": "ಬುನಾದಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬುನಾದಿ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಆಧಾರ",
      "meaning": "Support / base",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-285",
      "sourceForm": "ಪರಿಣಾಮ",
      "sourceMeaning": "Result / effect",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಪರಿಣಾಮ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-285-1",
          "word": "ಫಲಿತಾಂಶ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಫಲಿತಾಂಶ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-285-2",
          "word": "ಬದಲಾವಣೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬದಲಾವಣೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪರಿಣಾಮ",
      "meaning": "Result / effect",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-286",
      "sourceForm": "ಪ್ರಭಾವ",
      "sourceMeaning": "Influence / impact",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಪ್ರಭಾವ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-286-1",
          "word": "ಹಿಡಿತ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹಿಡಿತ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-286-2",
          "word": "ಸೆಳೆತ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸೆಳೆತ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪ್ರಭಾವ",
      "meaning": "Influence / impact",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-287",
      "sourceForm": "ಸಾಮರ್ಥ್ಯ",
      "sourceMeaning": "Capability / strength",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಸಾಮರ್ಥ್ಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-287-1",
          "word": "ಅಳವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಅಳವು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-287-2",
          "word": "ಕಸುವು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಸುವು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-287-3",
          "word": "ತಾಕತ್ತು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಾಕತ್ತು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸಾಮರ್ಥ್ಯ",
      "meaning": "Capability / strength",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-288",
      "sourceForm": "ಪ್ರಯೋಜನ",
      "sourceMeaning": "Benefit / usefulness",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಪ್ರಯೋಜನ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-288-1",
          "word": "ಲಾಭ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಲಾಭ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-288-2",
          "word": "ಬಳಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಳಕೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-288-3",
          "word": "ಹುರುಳು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹುರುಳು",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪ್ರಯೋಜನ",
      "meaning": "Benefit / usefulness",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-289",
      "sourceForm": "ಅನಾವಶ್ಯಕ",
      "sourceMeaning": "Unnecessary",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಅನಾವಶ್ಯಕ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-289-1",
          "word": "ಬೇಡದ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬೇಡದ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-289-2",
          "word": "ಸುಮ್ಮನೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಸುಮ್ಮನೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-289-3",
          "word": "ವ್ಯರ್ಥ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ವ್ಯರ್ಥ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಅನಾವಶ್ಯಕ",
      "meaning": "Unnecessary",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-290",
      "sourceForm": "ಅಪಾಯ",
      "sourceMeaning": "Danger",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಅಪಾಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-290-1",
          "word": "ಕೇಡು",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕೇಡು",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-290-2",
          "word": "ಗಂಡಾಂತರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗಂಡಾಂತರ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-290-3",
          "word": "ತೊಂದರೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತೊಂದರೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಅಪಾಯ",
      "meaning": "Danger",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-291",
      "sourceForm": "ಸುರಕ್ಷಿತ",
      "sourceMeaning": "Safe / secure",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಸುರಕ್ಷಿತ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-291-1",
          "word": "ಭದ್ರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಭದ್ರ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-291-2",
          "word": "ನೆಮ್ಮದಿಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೆಮ್ಮದಿಯ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-291-3",
          "word": "ಕಾವಲಿನ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಾವಲಿನ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸುರಕ್ಷಿತ",
      "meaning": "Safe / secure",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-292",
      "sourceForm": "ಸ್ವಚ್ಛ",
      "sourceMeaning": "Clean / clear",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಸ್ವಚ್ಛ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-292-1",
          "word": "ತಿಳಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ತಿಳಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-292-2",
          "word": "ಶುಚಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಶುಚಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-292-3",
          "word": "ಚೊಕ್ಕಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಚೊಕ್ಕಟ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸ್ವಚ್ಛ",
      "meaning": "Clean / clear",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-294",
      "sourceForm": "ಪ್ರತಿಮೆ",
      "sourceMeaning": "Statue / image",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಪ್ರತಿಮೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-294-1",
          "word": "ಗೊಂಬೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗೊಂಬೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-294-2",
          "word": "ಕಲ್ಲುಗೊಂಬೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕಲ್ಲುಗೊಂಬೆ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-294-3",
          "word": "ರೂಪ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ರೂಪ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಪ್ರತಿಮೆ",
      "meaning": "Statue / image",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-295",
      "sourceForm": "ಚಿತ್ರ",
      "sourceMeaning": "Picture / drawing",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಚಿತ್ರ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-295-1",
          "word": "ಬಣ್ಣದ ಬರಹ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಬಣ್ಣದ ಬರಹ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-295-2",
          "word": "ಗೆರೆಚಿತ್ರ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಗೆರೆಚಿತ್ರ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-295-3",
          "word": "ನೋಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ನೋಟ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಚಿತ್ರ",
      "meaning": "Picture / drawing",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-297",
      "sourceForm": "ನೃತ್ಯ",
      "sourceMeaning": "Dance",
      "category": "Other",
      "sourceEtymology": {
        "form": "ನೃತ್ಯ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-297-1",
          "word": "ಕುಣಿತ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಕುಣಿತ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-297-2",
          "word": "ಆಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಆಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-297-3",
          "word": "ಹೆಜ್ಜೆಗಾರಿಕೆ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಹೆಜ್ಜೆಗಾರಿಕೆ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ನೃತ್ಯ",
      "meaning": "Dance",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-298",
      "sourceForm": "ಕ್ರೀಡೆ",
      "sourceMeaning": "Sport / game",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಕ್ರೀಡೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-298-1",
          "word": "ಆಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಆಟ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-298-2",
          "word": "ಪಂದ್ಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪಂದ್ಯ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕ್ರೀಡೆ",
      "meaning": "Sport / game",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-299",
      "sourceForm": "ಸ್ಪರ್ಧೆ",
      "sourceMeaning": "Competition",
      "category": "Other",
      "sourceEtymology": {
        "form": "ಸ್ಪರ್ಧೆ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-299-1",
          "word": "ಪೈಪೋಟಿ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪೈಪೋಟಿ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-299-2",
          "word": "ಪಂದ್ಯ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಪಂದ್ಯ",
              "etymology": "unknown"
            }
          ]
        },
        {
          "id": "contrib-299-3",
          "word": "ಮೇಲಾಟ",
          "note": "Contributor-supplied candidate; semantic fit and word origin pending editorial review.",
          "viability": "proposed",
          "etymologyParts": [
            {
              "form": "ಮೇಲಾಟ",
              "etymology": "unknown"
            }
          ]
        }
      ],
      "editorialNote": "Contributor-supplied list. Source classification and each alternative require editorial review; do not treat as verified etymology.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಸ್ಪರ್ಧೆ",
      "meaning": "Competition",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-501",
      "sourceForm": "ಕಂದಕ",
      "sourceMeaning": "Ditch / pit / hollow",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಕಂದಕ",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-501-1",
          "word": "ಕುಳಿ",
          "tamil": "kuḻi (குழி; DEDR 1818)",
          "tulu": "guri / guḷi (DEDR 1818)",
          "proto": "*kuḻ-V (DEDR 1818)",
          "note": "Comparative evidence: DEDR 1818 lists Tamil kuḻi ‘pit, hole, hollow, cavity, depression, excavation’; Kannada kuḻi ‘hollow, hole, pit, grave’; Tulu guri / guḷi ‘hole, pit’. The dictionary reconstructs Proto-Dravidian *kuḻ-V ‘pit, hollow’. This supports the Dravidian comparison; exact fit for every sense of ಕಂದಕ should still be judged in context.",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಕುಳಿ",
              "etymology": "dravidian"
            }
          ],
          "linguisticEvidence": {
            "tamil": {
              "status": "attested",
              "form": "kuḻi (குழி)",
              "meaning": "pit, hole, hollow, cavity, depression, excavation",
              "reference": "DEDR 1818"
            },
            "tulu": {
              "status": "attested",
              "form": "guri / guḷi",
              "meaning": "hole, pit",
              "reference": "DEDR 1818"
            },
            "protoDravidian": {
              "status": "attested",
              "form": "*kuḻ-V",
              "meaning": "pit, hollow",
              "reference": "DEDR 1818"
            },
            "kannada": {
              "status": "attested",
              "form": "kuḻi (ಕುಳಿ)",
              "meaning": "hollow, hole, pit, grave",
              "reference": "DEDR 1818"
            },
            "halegannada": {
              "status": "not_yet_verified"
            }
          }
        }
      ],
      "editorialNote": "Research addition. DEDR 1818 supports the cross-language root comparison. No Halegannada citation has been verified; no historical form is claimed.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಕಂದಕ",
      "meaning": "Ditch / pit / hollow",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-502",
      "sourceForm": "ಇಳಿಜಾರು",
      "sourceMeaning": "Slope / descent",
      "category": "Nature",
      "sourceEtymology": {
        "form": "ಇಳಿಜಾರು",
        "etymology": "unknown"
      },
      "alternatives": [
        {
          "id": "contrib-502-1",
          "word": "ಇಳಿಜಾರು",
          "tulu": "iḷijārů (a slope, slipperiness; DEDR 503, 2482)",
          "note": "Tulu iḷijārů is recorded with the meanings ‘a slope, slipperiness’; it is analysed in the DEDR entry with iḷi- ‘slip out or down, slide’ (DEDR 503) and jār- ‘slip, slide down’ (DEDR 2482). This is a direct Tulu lexical comparison, not evidence for a Proto-Dravidian compound or a verified Tamil cognate.",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಇಳಿಜಾರು",
              "etymology": "dravidian"
            }
          ],
          "linguisticEvidence": {
            "tulu": {
              "status": "attested",
              "form": "iḷijārů",
              "meaning": "a slope, slipperiness",
              "reference": "DEDR 503; DEDR 2482"
            },
            "tamil": {
              "status": "not_yet_verified"
            },
            "protoDravidian": {
              "status": "not_yet_verified"
            },
            "halegannada": {
              "status": "not_yet_verified"
            }
          }
        }
      ],
      "editorialNote": "Research addition. The Tulu form is directly attested in DEDR; no Tamil, Proto-Dravidian compound, or Halegannada equivalent is asserted.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ಇಳಿಜಾರು",
      "meaning": "Slope / descent",
      "rejectedAlternatives": []
    },
    {
      "id": "contrib-503",
      "sourceForm": "ತ್ರಿ",
      "sourceMeaning": "Three",
      "category": "Everyday",
      "sourceEtymology": {
        "form": "ತ್ರಿ",
        "etymology": "sanskrit_tatsama"
      },
      "halegannada": "ಮೂಱು",
      "halegannadaEvidence": {
        "status": "provisional",
        "note": "Old Kannada form reported in comparative references; primary inscription or dated text citation is still pending."
      },
      "alternatives": [
        {
          "id": "contrib-503-1",
          "word": "ಮೂರು",
          "tamil": "மூன்று (mūṉṟu)",
          "tulu": "ಮೂಜಿ (mūji)",
          "proto": "*mūnṯu / *muHnṯu (reconstruction notation varies; DEDR 5052)",
          "note": "Comparative evidence: Tamil மூன்று (mūṉṟu), Kannada ಮೂರು (mūru), Tulu ಮೂಜಿ (mūji); Proto-Dravidian numeral reconstructed as *mūnṯu / *muHnṯu (DEDR 5052 is also cited for *muv / *mū). Old Kannada ಮೂಱು (mūṟu) is listed as a historical form, but a primary inscription/text citation remains to be added. Sources: DEDR 5052; Dravidian Numerals (2009); The Dravidian Languages, §4.4.1; comparative numeral references.",
          "viability": "clean",
          "etymologyParts": [
            {
              "form": "ಮೂರು",
              "etymology": "dravidian"
            }
          ]
        }
      ],
      "editorialNote": "Verified comparative cognate set for the numeral. Reconstructions vary in notation across scholarship; retain both forms with source attribution. Halegannada form is reported but awaits primary-source citation.",
      "contributorSupplied": true,
      "sourceDataset": "contributor-equivalents.js",
      "sanskrit": "ತ್ರಿ",
      "meaning": "Three",
      "rejectedAlternatives": []
    },
    {
      "id": "no-alt-department",
      "sanskrit": "ಇಲಾಖೆ",
      "meaning": "Department",
      "category": "No viable native alternative",
      "sourceEtymology": [
        {
          "form": "ಇಲಾಖೆ",
          "etymology": "sanskrit_tatsama"
        }
      ],
      "rejectedAlternatives": [],
      "editorialNote": "No Dravidian equivalent proposed at this administrative register.",
      "noAlternative": true,
      "alternatives": [
        {
          "id": "no-alternative",
          "word": "No viable native alternative",
          "note": "Community position — vote to agree or propose a candidate",
          "isNoAlternative": true,
          "viability": "no_alternative",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "no-alt-minister",
      "sanskrit": "ಸಚಿವ",
      "meaning": "Minister",
      "category": "No viable native alternative",
      "sourceEtymology": [
        {
          "form": "ಸಚಿವ",
          "etymology": "sanskrit_tatsama"
        }
      ],
      "rejectedAlternatives": [],
      "editorialNote": "No viable native equivalent established. ಸೇವಕ is Sanskrit-derived and rejected.",
      "noAlternative": true,
      "alternatives": [
        {
          "id": "no-alternative",
          "word": "No viable native alternative",
          "note": "Community position — vote to agree or propose a candidate",
          "isNoAlternative": true,
          "viability": "no_alternative",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "no-alt-health",
      "sanskrit": "ಆರೋಗ್ಯ",
      "meaning": "Health",
      "category": "No viable native alternative",
      "sourceEtymology": [
        {
          "form": "ಆರೋಗ್ಯ",
          "etymology": "sanskrit_tadbhava"
        }
      ],
      "rejectedAlternatives": [],
      "editorialNote": "Audit reports no native equivalent; classification needs specialist verification.",
      "noAlternative": true,
      "alternatives": [
        {
          "id": "no-alternative",
          "word": "No viable native alternative",
          "note": "Community position — vote to agree or propose a candidate",
          "isNoAlternative": true,
          "viability": "no_alternative",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "no-alt-news",
      "sanskrit": "ಸುದ್ದಿ",
      "meaning": "News",
      "category": "No viable native alternative",
      "sourceEtymology": [
        {
          "form": "ಸುದ್ದಿ",
          "etymology": "sanskrit_tadbhava"
        }
      ],
      "rejectedAlternatives": [],
      "editorialNote": "Audit reports no native equivalent; derivation needs specialist verification.",
      "noAlternative": true,
      "alternatives": [
        {
          "id": "no-alternative",
          "word": "No viable native alternative",
          "note": "Community position — vote to agree or propose a candidate",
          "isNoAlternative": true,
          "viability": "no_alternative",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "no-alt-society",
      "sanskrit": "ಸಮಾಜ",
      "meaning": "Society",
      "category": "No viable native alternative",
      "sourceEtymology": [
        {
          "form": "ಸಮಾಜ",
          "etymology": "sanskrit_tatsama"
        }
      ],
      "rejectedAlternatives": [],
      "editorialNote": "No native equivalent proposed at this abstraction level.",
      "noAlternative": true,
      "alternatives": [
        {
          "id": "no-alternative",
          "word": "No viable native alternative",
          "note": "Community position — vote to agree or propose a candidate",
          "isNoAlternative": true,
          "viability": "no_alternative",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "no-alt-disability",
      "sanskrit": "ಅಂಗವಿಕಲ",
      "meaning": "Person with a disability",
      "category": "No viable native alternative",
      "sourceEtymology": [
        {
          "form": "ಅಂಗವಿಕಲ",
          "etymology": "sanskrit_tatsama"
        }
      ],
      "rejectedAlternatives": [],
      "editorialNote": "No generic native term proposed; ಕುರುಡ/ಕಿವುಡ are specific terms, not generic substitutes.",
      "noAlternative": true,
      "alternatives": [
        {
          "id": "no-alternative",
          "word": "No viable native alternative",
          "note": "Community position — vote to agree or propose a candidate",
          "isNoAlternative": true,
          "viability": "no_alternative",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "no-alt-doctor",
      "sanskrit": "ವೈದ್ಯ",
      "meaning": "Doctor",
      "category": "No viable native alternative",
      "sourceEtymology": [
        {
          "form": "ವೈದ್ಯ",
          "etymology": "sanskrit_tatsama"
        }
      ],
      "rejectedAlternatives": [],
      "editorialNote": "No native professional term proposed.",
      "noAlternative": true,
      "alternatives": [
        {
          "id": "no-alternative",
          "word": "No viable native alternative",
          "note": "Community position — vote to agree or propose a candidate",
          "isNoAlternative": true,
          "viability": "no_alternative",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "no-alt-freedom",
      "sanskrit": "ಸ್ವಾತಂತ್ರ್ಯ",
      "meaning": "Freedom",
      "category": "No viable native alternative",
      "sourceEtymology": [
        {
          "form": "ಸ್ವಾತಂತ್ರ್ಯ",
          "etymology": "sanskrit_tatsama"
        }
      ],
      "rejectedAlternatives": [],
      "editorialNote": "No native abstract noun proposed.",
      "noAlternative": true,
      "alternatives": [
        {
          "id": "no-alternative",
          "word": "No viable native alternative",
          "note": "Community position — vote to agree or propose a candidate",
          "isNoAlternative": true,
          "viability": "no_alternative",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "no-alt-punishment",
      "sanskrit": "ಶಿಕ್ಷೆ",
      "meaning": "Punishment",
      "category": "No viable native alternative",
      "sourceEtymology": [
        {
          "form": "ಶಿಕ್ಷೆ",
          "etymology": "sanskrit_tatsama"
        }
      ],
      "rejectedAlternatives": [],
      "editorialNote": "ದಂಡ is also Sanskrit-derived and is not accepted as native.",
      "noAlternative": true,
      "alternatives": [
        {
          "id": "no-alternative",
          "word": "No viable native alternative",
          "note": "Community position — vote to agree or propose a candidate",
          "isNoAlternative": true,
          "viability": "no_alternative",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "no-alt-commission",
      "sanskrit": "ಆಯೋಗ",
      "meaning": "Commission",
      "category": "No viable native alternative",
      "sourceEtymology": [
        {
          "form": "ಆಯೋಗ",
          "etymology": "sanskrit_tatsama"
        }
      ],
      "rejectedAlternatives": [],
      "editorialNote": "ಸಮಿತಿ is also Sanskrit-derived and is not accepted as native.",
      "noAlternative": true,
      "alternatives": [
        {
          "id": "no-alternative",
          "word": "No viable native alternative",
          "note": "Community position — vote to agree or propose a candidate",
          "isNoAlternative": true,
          "viability": "no_alternative",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "no-alt-nutrition",
      "sanskrit": "ಪೋಷಣೆ",
      "meaning": "Nutrition",
      "category": "No viable native alternative",
      "sourceEtymology": [
        {
          "form": "ಪೋಷಣೆ",
          "etymology": "sanskrit_tatsama"
        }
      ],
      "rejectedAlternatives": [],
      "editorialNote": "No native equivalent proposed.",
      "noAlternative": true,
      "alternatives": [
        {
          "id": "no-alternative",
          "word": "No viable native alternative",
          "note": "Community position — vote to agree or propose a candidate",
          "isNoAlternative": true,
          "viability": "no_alternative",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "no-alt-interview",
      "sanskrit": "ಸಂದರ್ಶನ",
      "meaning": "Interview",
      "category": "No viable native alternative",
      "sourceEtymology": [
        {
          "form": "ಸಂದರ್ಶನ",
          "etymology": "sanskrit_tatsama"
        }
      ],
      "rejectedAlternatives": [],
      "editorialNote": "ಮುಖಾಮುಖಿ contains Sanskrit mukha; not accepted as wholly Dravidian.",
      "noAlternative": true,
      "alternatives": [
        {
          "id": "no-alternative",
          "word": "No viable native alternative",
          "note": "Community position — vote to agree or propose a candidate",
          "isNoAlternative": true,
          "viability": "no_alternative",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "scope-kaceri-origin",
      "sanskrit": "ಕಚೇರಿ",
      "meaning": "Office",
      "category": "Origin audit",
      "sourceEtymology": [
        {
          "form": "ಕಚೇರಿ",
          "etymology": "unknown"
        }
      ],
      "editorialNote": "Outside Dravidian replacement set; precise route not independently verified. Proposed classification: Perso-Arabic/Marathi loan (unverified).",
      "scopeAudit": true,
      "alternatives": [
        {
          "id": "scope-audit",
          "word": "Outside Sanskrit-origin scope",
          "note": "This item should not be counted as a Sanskrit-derived target until its origin is confirmed.",
          "isScopeAudit": true,
          "viability": "scope_audit",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "scope-varadi-origin",
      "sanskrit": "ವರದಿ",
      "meaning": "Report",
      "category": "Origin audit",
      "sourceEtymology": [
        {
          "form": "ವರದಿ",
          "etymology": "unknown"
        }
      ],
      "editorialNote": "Contributor classification; exact etymology needs independent verification. Proposed classification: Perso-Arabic loan (unverified).",
      "scopeAudit": true,
      "alternatives": [
        {
          "id": "scope-audit",
          "word": "Outside Sanskrit-origin scope",
          "note": "This item should not be counted as a Sanskrit-derived target until its origin is confirmed.",
          "isScopeAudit": true,
          "viability": "scope_audit",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "scope-sarkara-origin",
      "sanskrit": "ಸರ್ಕಾರ",
      "meaning": "Government",
      "category": "Origin audit",
      "sourceEtymology": [
        {
          "form": "ಸರ್ಕಾರ",
          "etymology": "unknown"
        }
      ],
      "editorialNote": "Supplied audit treats this as a loan, not Sanskrit. Proposed classification: Loanword; precise source needs verification (unverified).",
      "scopeAudit": true,
      "alternatives": [
        {
          "id": "scope-audit",
          "word": "Outside Sanskrit-origin scope",
          "note": "This item should not be counted as a Sanskrit-derived target until its origin is confirmed.",
          "isScopeAudit": true,
          "viability": "scope_audit",
          "etymologyParts": []
        }
      ]
    },
    {
      "id": "scope-javabdari-origin",
      "sanskrit": "ಜವಾಬ್ದಾರಿ",
      "meaning": "Responsibility",
      "category": "Origin audit",
      "sourceEtymology": [
        {
          "form": "ಜವಾಬ್ದಾರಿ",
          "etymology": "unknown"
        }
      ],
      "editorialNote": "Supplied audit treats this as a loan, not Sanskrit. Proposed classification: Perso-Arabic loan (unverified).",
      "scopeAudit": true,
      "alternatives": [
        {
          "id": "scope-audit",
          "word": "Outside Sanskrit-origin scope",
          "note": "This item should not be counted as a Sanskrit-derived target until its origin is confirmed.",
          "isScopeAudit": true,
          "viability": "scope_audit",
          "etymologyParts": []
        }
      ]
    }
  ],
  "etymologyLabels": {
    "dravidian": "Dravidian",
    "sanskrit_tatsama": "Sanskrit tatsama",
    "sanskrit_tadbhava": "Sanskrit tadbhava",
    "perso_arabic": "Perso-Arabic",
    "english": "English",
    "coinage": "Coinage",
    "unknown": "Unknown"
  }
};

const votingEntries = KANNADA_LEXICON.entries;
const etymologyLabels = KANNADA_LEXICON.etymologyLabels;
