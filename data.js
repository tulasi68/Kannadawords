// Expanded data with Proto-Dravidian roots + Tamil + Tulu cognates
// Helps users invent better native alternatives

const wordEntries = [
  // ===== Everyday =====
  {
    id: "milk",
    sanskrit: "ಕ್ಷೀರ",
    meaning: "Milk",
    category: "Everyday",
    alternatives: [
      { 
        id: "halu", 
        word: "ಹಾಲು", 
        note: "Most common Kannada form",
        proto: "*pāl",
        tamil: "பால் (pāl)",
        tulu: "ಪೇರ್ (pēr) / ಪಾಲ್"
      }
    ]
  },
  {
    id: "snake",
    sanskrit: "ಸರ್ಪ / ನಾಗ",
    meaning: "Snake",
    category: "Everyday",
    alternatives: [
      { 
        id: "havu", 
        word: "ಹಾವು", 
        note: "Standard Kannada",
        proto: "*pāmpu",
        tamil: "பாம்பு (pāmpu)",
        tulu: "ಪಾಮು / ಹಾವು"
      }
    ]
  },
  {
    id: "tree",
    sanskrit: "ವೃಕ್ಷ",
    meaning: "Tree",
    category: "Everyday",
    alternatives: [
      { 
        id: "mara", 
        word: "ಮರ", 
        note: "Core Dravidian",
        proto: "*maram",
        tamil: "மரம் (maram)",
        tulu: "ಮರ (mara)"
      }
    ]
  },
  {
    id: "house",
    sanskrit: "ಗೃಹ / ಭವನ",
    meaning: "House",
    category: "Everyday",
    alternatives: [
      { 
        id: "mane", 
        word: "ಮನೆ", 
        note: "Everyday native",
        proto: "*manay",
        tamil: "மனை (maṉai)",
        tulu: "ಇಲ್ಲ್ / ಮನೆ"
      }
    ]
  },
  {
    id: "water",
    sanskrit: "ಜಲ",
    meaning: "Water",
    category: "Everyday",
    alternatives: [
      { 
        id: "niru", 
        word: "ನೀರು", 
        note: "Core native",
        proto: "*nīr",
        tamil: "நீர் (nīr)",
        tulu: "ನೀರ್ (nīr)"
      }
    ]
  },
  {
    id: "flower",
    sanskrit: "ಪುಷ್ಪ",
    meaning: "Flower",
    category: "Everyday",
    alternatives: [
      { 
        id: "huvu", 
        word: "ಹೂವು", 
        note: "Standard desi",
        proto: "*pū",
        tamil: "பூ (pū)",
        tulu: "ಪೂ / ಹೂವು"
      }
    ]
  },
  {
    id: "bird",
    sanskrit: "ಪಕ್ಷಿ",
    meaning: "Bird",
    category: "Everyday",
    alternatives: [
      { 
        id: "hakki", 
        word: "ಹಕ್ಕಿ", 
        note: "Widely preferred",
        proto: "*paṟava",
        tamil: "பறவை (paṟavai)",
        tulu: "ಪಕ್ಕಿ / ಹಕ್ಕಿ"
      }
    ]
  },
  {
    id: "cloth",
    sanskrit: "ವಸ್ತ್ರ",
    meaning: "Cloth / Clothes",
    category: "Everyday",
    alternatives: [
      { 
        id: "batte", 
        word: "ಬಟ್ಟೆ", 
        note: "Common spoken",
        proto: "*vaṭṭi",
        tamil: "ஆடை / துணி",
        tulu: "ಬಟ್ಟೆ"
      }
    ]
  },
  {
    id: "food",
    sanskrit: "ಭೋಜನ / ಆಹಾರ",
    meaning: "Meal / Food",
    category: "Everyday",
    alternatives: [
      { 
        id: "uta", 
        word: "ಊಟ", 
        note: "Most natural spoken form",
        proto: "*ūṭu",
        tamil: "உணவு / சோறு",
        tulu: "ಊಟ"
      }
    ]
  },
  {
    id: "village",
    sanskrit: "ಗ್ರಾಮ",
    meaning: "Village",
    category: "Everyday",
    alternatives: [
      { 
        id: "halli", 
        word: "ಹಳ್ಳಿ", 
        note: "Common native",
        proto: "*paḷḷi / *ūr",
        tamil: "ஊர் (ūr)",
        tulu: "ಊರು / ಹಳ್ಳಿ"
      }
    ]
  },
  {
    id: "lamp",
    sanskrit: "ದೀಪ",
    meaning: "Lamp / Light",
    category: "Everyday",
    alternatives: [
      { 
        id: "sodaru", 
        word: "ಸೊಡರು", 
        note: "Pure Kannada form",
        proto: "*cuṭar",
        tamil: "சுடர் (cuṭar)",
        tulu: "ಸೊಡರು"
      }
    ]
  },
  {
    id: "path",
    sanskrit: "ಮಾರ್ಗ / ಪಥ",
    meaning: "Path / Way",
    category: "Everyday",
    alternatives: [
      { 
        id: "dari", 
        word: "ದಾರಿ", 
        note: "Everyday native",
        proto: "*vaḻi",
        tamil: "வழி (vaḻi)",
        tulu: "ದಾರಿ"
      }
    ]
  },

  // ===== Nature =====
  {
    id: "sun",
    sanskrit: "ಸೂರ್ಯ",
    meaning: "Sun",
    category: "Nature",
    alternatives: [
      { 
        id: "nesara", 
        word: "ನೇಸರ", 
        note: "Classic Kannada",
        proto: "*ñāyiṟu",
        tamil: "ஞாயிறு (ñāyiṟu)",
        tulu: "ನೇಸರ"
      }
    ]
  },
  {
    id: "night",
    sanskrit: "ರಾತ್ರಿ",
    meaning: "Night",
    category: "Nature",
    alternatives: [
      { 
        id: "irulu", 
        word: "ಇರುಳು", 
        note: "Strong desi",
        proto: "*irul",
        tamil: "இருள் (iruḷ)",
        tulu: "ಇರುಳು"
      }
    ]
  },
  {
    id: "fire",
    sanskrit: "ಅಗ್ನಿ",
    meaning: "Fire",
    category: "Nature",
    alternatives: [
      { 
        id: "benki", 
        word: "ಬೆಂಕಿ", 
        note: "Everyday native",
        proto: "*veṅkay",
        tamil: "நெருப்பு",
        tulu: "ಬೆಂಕಿ"
      }
    ]
  },
  {
    id: "sky",
    sanskrit: "ಆಕಾಶ",
    meaning: "Sky",
    category: "Nature",
    alternatives: [
      { 
        id: "agasa", 
        word: "ಆಗಸ", 
        note: "Widely used desi",
        proto: null,
        tamil: "வானம் (vāṉam)",
        tulu: "ಆಗಸ"
      }
    ]
  },
  {
    id: "earth",
    sanskrit: "ಭೂಮಿ",
    meaning: "Earth / Ground",
    category: "Nature",
    alternatives: [
      { 
        id: "nela", 
        word: "ನೆಲ", 
        note: "Core native",
        proto: "*nilam",
        tamil: "நிலம் (nilam)",
        tulu: "ನೆಲ"
      }
    ]
  },
  {
    id: "wind",
    sanskrit: "ವಾಯು",
    meaning: "Wind / Air",
    category: "Nature",
    alternatives: [
      { 
        id: "gali", 
        word: "ಗಾಳಿ", 
        note: "Everyday Kannada",
        proto: "*kāṟṟu",
        tamil: "காற்று (kāṟṟu)",
        tulu: "ಗಾಳಿ"
      }
    ]
  },
  {
    id: "rain",
    sanskrit: "ವರ್ಷ",
    meaning: "Rain",
    category: "Nature",
    alternatives: [
      { 
        id: "male", 
        word: "ಮಳೆ", 
        note: "Standard native",
        proto: "*maḻai",
        tamil: "மழை (maḻai)",
        tulu: "ಮಳೆ"
      }
    ]
  },
  {
    id: "mountain",
    sanskrit: "ಪರ್ವತ / ಗಿರಿ",
    meaning: "Mountain",
    category: "Nature",
    alternatives: [
      { 
        id: "betta", 
        word: "ಬೆಟ್ಟ", 
        note: "Common Kannada",
        proto: "*veṭṭam",
        tamil: "மலை (malai)",
        tulu: "ಬೆಟ್ಟ"
      }
    ]
  },
  {
    id: "forest",
    sanskrit: "ಅರಣ್ಯ / ವನ",
    meaning: "Forest",
    category: "Nature",
    alternatives: [
      { 
        id: "kadu", 
        word: "ಕಾಡು", 
        note: "Very common spoken",
        proto: "*kāṭu",
        tamil: "காடு (kāṭu)",
        tulu: "ಕಾಡು"
      }
    ]
  },

  // ===== Body =====
  {
    id: "hand",
    sanskrit: "ಹಸ್ತ",
    meaning: "Hand",
    category: "Body",
    alternatives: [
      { 
        id: "kai", 
        word: "ಕೈ", 
        note: "Core Dravidian",
        proto: "*kay",
        tamil: "கை (kai)",
        tulu: "ಕೈ (kai)"
      }
    ]
  },
  {
    id: "eye",
    sanskrit: "ನಯನ / ನೇತ್ರ / ಅಕ್ಷಿ",
    meaning: "Eye",
    category: "Body",
    alternatives: [
      { 
        id: "kannu", 
        word: "ಕಣ್ಣು", 
        note: "Core native",
        proto: "*kaṇ",
        tamil: "கண் (kaṇ)",
        tulu: "ಕಣ್ / ಕಣ್ಣು"
      }
    ]
  },
  {
    id: "head",
    sanskrit: "ಶಿರ / ಮಸ್ತಕ",
    meaning: "Head",
    category: "Body",
    alternatives: [
      { 
        id: "tale", 
        word: "ತಲೆ", 
        note: "Core native",
        proto: "*talay",
        tamil: "தலை (talai)",
        tulu: "ತರೆ / ತಲೆ"
      }
    ]
  },
  {
    id: "tooth",
    sanskrit: "ದಂತ",
    meaning: "Tooth",
    category: "Body",
    alternatives: [
      { 
        id: "hallu", 
        word: "ಹಲ್ಲು", 
        note: "Everyday form",
        proto: "*pal",
        tamil: "பல் (pal)",
        tulu: "ಪಲ್ಲ್ / ಹಲ್ಲು"
      }
    ]
  },
  {
    id: "leg",
    sanskrit: "ಪಾದ",
    meaning: "Leg / Foot",
    category: "Body",
    alternatives: [
      { 
        id: "kalu", 
        word: "ಕಾಲು", 
        note: "Core native",
        proto: "*kāl",
        tamil: "கால் (kāl)",
        tulu: "ಕಾರ್ / ಕಾಲು"
      }
    ]
  },
  {
    id: "ear",
    sanskrit: "ಕರ್ಣ",
    meaning: "Ear",
    category: "Body",
    alternatives: [
      { 
        id: "kivi", 
        word: "ಕಿವಿ", 
        note: "Native form",
        proto: "*kevi",
        tamil: "காது (kātu)",
        tulu: "ಕೆಮಿ / ಕಿವಿ"
      }
    ]
  },
  {
    id: "nose",
    sanskrit: "ನಾಸಿಕ",
    meaning: "Nose",
    category: "Body",
    alternatives: [
      { 
        id: "mugu", 
        word: "ಮೂಗು", 
        note: "Everyday native",
        proto: "*mūkku",
        tamil: "மூக்கு (mūkku)",
        tulu: "ಮೂಗು"
      }
    ]
  },
  {
    id: "mouth",
    sanskrit: "ಮುಖ / ಆಸ್ಯ",
    meaning: "Mouth",
    category: "Body",
    alternatives: [
      { 
        id: "bayi", 
        word: "ಬಾಯಿ", 
        note: "Standard native",
        proto: "*vāy",
        tamil: "வாய் (vāy)",
        tulu: "ಬಾಯಿ"
      }
    ]
  },
  {
    id: "blood",
    sanskrit: "ರಕ್ತ",
    meaning: "Blood",
    category: "Body",
    alternatives: [
      { 
        id: "nettaru", 
        word: "ನೆತ್ತರು", 
        note: "Native form",
        proto: "*nettar",
        tamil: "இரத்தம்",
        tulu: "ನೆತ್ತೆರ್"
      }
    ]
  },
  {
    id: "hair",
    sanskrit: "ಕೇಶ",
    meaning: "Hair",
    category: "Body",
    alternatives: [
      { 
        id: "kudalu", 
        word: "ಕೂದಲು", 
        note: "Standard desi",
        proto: "*kūtal",
        tamil: "கூந்தல்",
        tulu: "ಕೂದಲು"
      }
    ]
  },

  // ===== Directions =====
  {
    id: "north",
    sanskrit: "ಉತ್ತರ",
    meaning: "North",
    category: "Directions",
    alternatives: [
      { 
        id: "badagana", 
        word: "ಬಡಗಣ", 
        note: "Traditional directional",
        proto: "*vaṭakk-",
        tamil: "வடக்கு (vaṭakku)",
        tulu: "ಬಡಕಾಯಿ"
      }
    ]
  },
  {
    id: "south",
    sanskrit: "ದಕ್ಷಿಣ",
    meaning: "South",
    category: "Directions",
    alternatives: [
      { 
        id: "tenkana", 
        word: "ತೆಂಕಣ", 
        note: "Traditional directional",
        proto: "*teṉk-",
        tamil: "தெற்கு (teṟku)",
        tulu: "ತೆಂಕಾಯಿ"
      }
    ]
  },
  {
    id: "east",
    sanskrit: "ಪೂರ್ವ",
    meaning: "East",
    category: "Directions",
    alternatives: [
      { 
        id: "mudana", 
        word: "ಮೂಡಣ", 
        note: "Traditional directional",
        proto: "*mūṭal",
        tamil: "கிழக்கு (kiḻakku)",
        tulu: "ಮೂಡಾಯಿ"
      }
    ]
  },
  {
    id: "west",
    sanskrit: "ಪಶ್ಚಿಮ",
    meaning: "West",
    category: "Directions",
    alternatives: [
      { 
        id: "paduvana", 
        word: "ಪಡುವಣ", 
        note: "Traditional directional",
        proto: "*paṭu",
        tamil: "மேற்கு (mēṟku)",
        tulu: "ಪಡ್ಡಾಯಿ"
      }
    ]
  },

  // ===== Abstract =====
  {
    id: "language",
    sanskrit: "ಭಾಷೆ",
    meaning: "Language / Speech",
    category: "Abstract",
    alternatives: [
      { 
        id: "nudi", 
        word: "ನುಡಿ", 
        note: "Strong desi form",
        proto: "*nuṭi / *moḻi",
        tamil: "மொழி (moḻi)",
        tulu: "ನುಡಿ"
      }
    ]
  },
  {
    id: "friend",
    sanskrit: "ಸ್ನೇಹಿತ",
    meaning: "Friend",
    category: "Abstract",
    alternatives: [
      { 
        id: "geleya", 
        word: "ಗೆಳೆಯ", 
        note: "Native form",
        proto: "*keḷi",
        tamil: "நண்பன்",
        tulu: "ಗೆಳೆಯೆ"
      }
    ]
  },
  {
    id: "name",
    sanskrit: "ನಾಮ",
    meaning: "Name",
    category: "Abstract",
    alternatives: [
      { 
        id: "hesaru", 
        word: "ಹೆಸರು", 
        note: "Standard native",
        proto: "*peyar",
        tamil: "பெயர் (peyar)",
        tulu: "ಪುದರ್ / ಹೆಸರು"
      }
    ]
  },
  {
    id: "life",
    sanskrit: "ಜೀವನ",
    meaning: "Life",
    category: "Abstract",
    alternatives: [
      { 
        id: "baduku", 
        word: "ಬದುಕು", 
        note: "Living / life (native)",
        proto: "*vāḻ",
        tamil: "வாழ்க்கை (vāḻkkai)",
        tulu: "ಬದ್ಕ್"
      }
    ]
  },
  {
    id: "death",
    sanskrit: "ಮರಣ",
    meaning: "Death",
    category: "Abstract",
    alternatives: [
      { 
        id: "savu", 
        word: "ಸಾವು", 
        note: "Everyday native",
        proto: "*cāvu",
        tamil: "சாவு (cāvu)",
        tulu: "ಸಾವು"
      }
    ]
  },
  {
    id: "king",
    sanskrit: "ರಾಜ",
    meaning: "King",
    category: "Abstract",
    alternatives: [
      { 
        id: "arasu", 
        word: "ಅರಸು", 
        note: "Native ruler term",
        proto: "*aracu",
        tamil: "அரசு / அரசன்",
        tulu: "ಅರಸು"
      }
    ]
  },
  {
    id: "knowledge",
    sanskrit: "ವಿದ್ಯೆ / ಜ್ಞಾನ",
    meaning: "Knowledge / Learning",
    category: "Abstract",
    alternatives: [
      { 
        id: "kalike", 
        word: "ಕಲಿಕೆ", 
        note: "Learning",
        proto: "*kal",
        tamil: "கல்வி (kalvi)",
        tulu: "ಕಲ್ಪು"
      }
    ]
  },
  // Sanskrit-first entries that connect to words in the curated Halegannada source list.
  {
    id:"listen", sanskrit:"ಶ್ರವಣ / ಶ್ರವಣಿಸು", meaning:"Listening; to listen", category:"Abstract", halegannada:"ಆಲಿಸು", halegannadaEvidence:{status:"provisional",sourceTitle:"P. V. Narayana, Champu Nudigannadi — digitised dictionary transcription",sourceUrl:"https://github.com/omshivaprakash/Indic-dictionaries/blob/main/%5BKA%5D%20Champu%20Nudigannadi/Raw%20Scraped%20Data/%E0%B2%86_champunudi.csv",evidenceType:"Scraped dictionary entry with literary citation",note:"The digitised entry glosses ಆಲಿಸು as ಗಮನವಿರಿಸಿ ಕೇಳು and cites ಪಂಪಭಾ 1.142 (ಧನುರ್ಲತಾಗುಣನಿನಾದಮಂ ಆಲಿಸಿ ಕೇಳಲುಳ). Confirm the reading and gloss against the printed dictionary and scholarly edition before marking verified."},
    alternatives:[{id:"kelu",word:"ಕೇಳು",note:"Native Kannada",proto:"*kēḷ",tamil:"கேள் (kēḷ)",tulu:null}]
  },
  {
    id:"shop", sanskrit:"ಆಪಣ", meaning:"Shop / marketplace", category:"Everyday", halegannada:"ಆವಣ", halegannadaEvidence:{status:"provisional",sourceTitle:"P. V. Narayana, Champu Nudigannadi — digitised dictionary transcription",sourceUrl:"https://github.com/omshivaprakash/Indic-dictionaries/blob/main/%5BKA%5D%20Champu%20Nudigannadi/Raw%20Scraped%20Data/%E0%B2%86_champunudi.csv",evidenceType:"Scraped dictionary entry with literary citation",note:"The digitised entry glosses ಆವಣ as ಆಪಣ / ಅಂಗಡಿ and cites ಹರಿವಂಶ 1.24 (ಆವರದ ಎಡೆಯ ಆವಣಂಗಳೊಳ್ ಒಳವೆಂದುಂ). Confirm the original text reading and contextual sense before marking verified."},
    alternatives:[{id:"angadi",word:"ಅಂಗಡಿ",note:"Common Kannada",proto:null,tamil:"கடை (kaṭai)",tulu:null}]
  },
  {
    id:"cloud", sanskrit:"ಮೇಘ", meaning:"Cloud", category:"Nature", halegannada:"ಮುಗಿಲ್", halegannadaEvidence:{status:"provisional",sourceTitle:"P. V. Narayana, Pampana Nudigani and Champu Nudigannadi — digitised dictionary transcriptions; corroborating Honalu discussion",sourceUrl:"https://github.com/omshivaprakash/Indic-dictionaries/blob/main/%5BKA%5D%20Pampana%20Nudigani/Raw%20Scraped%20Data/%E0%B2%AE_pampanudi.csv",evidenceType:"Scraped dictionary entries with literary citations; secondary grammatical discussion",note:"The digitised Pampana entry glosses ಮುಗಿಲ್ as ಮೋಡ and cites ಪಂಪಭಾ 7.23. The Champu entry gives ಮೋಡ (ವಡ್ಡಾರಾ, p.109, story 5) and ಆಕಾಶ (ಕಬ್ಬಿಗಕಾ 27v). Honalu also analyses ಬೆಳ್ + ಮುಗಿಲ್ as an Old Kannada phrase. Verify the cited editions and readings before marking verified."},
    alternatives:[{id:"moda",word:"ಮೋಡ",note:"Common Kannada",proto:null,tamil:"மேகம் (mēkam)",tulu:null}]
  },
  {
    id:"curtain", sanskrit:"ಯವನಿಕಾ", meaning:"Curtain / screen", category:"Everyday", halegannada:"ಜವನಿಕೆ", halegannadaEvidence:{status:"provisional",sourceTitle:"P. V. Narayana, Pampana Nudigani — digitised dictionary transcription",sourceUrl:"https://github.com/omshivaprakash/Indic-dictionaries/blob/main/%5BKA%5D%20Pampana%20Nudigani/Raw%20Scraped%20Data/%E0%B2%9C_pampanudi.csv",evidenceType:"Scraped dictionary entry with literary citation",note:"The digitised entry glosses ಜವನಿಕೆ as ತೆರೆ and gives the derivational gloss [ಯವನಿಕಾ]; it cites ಆದಿಪು 9.20 (ನಿಲ್ತು ಜವನಿಕೆಯ ಮಱೆಯೊಳ್ ...). Confirm the spelling, sense and verse against the printed dictionary and scholarly edition before marking verified."},
    alternatives:[{id:"parade",word:"ಪರದೆ",note:"Common Kannada",proto:null,tamil:"திரை (tirai)",tulu:null}]
  },
  {
    id:"new", sanskrit:"ನವ / ನವೀನ", meaning:"New", category:"Abstract", halegannada:"ಪೊಸ", halegannadaEvidence:{status:"provisional",sourceTitle:"Old Kannada grammatical discussion — Honalu; P. V. Narayana, ಪದಚರಿತೆ",sourceUrl:"https://honalu.net/2013/05/29/%E0%B2%B6%E0%B2%AC%E0%B3%8D%E0%B2%A6%E0%B2%AE%E0%B2%A3%E0%B2%BF%E0%B2%A6%E0%B2%B0%E2%80%8D%E0%B3%8D%E0%B2%AA%E0%B2%A3%E0%B2%A6%E0%B2%B2%E0%B3%8D%E0%B2%B2%E0%B2%BF-%E0%B2%A4%E0%B2%B3%E0%B2%AE-3/",evidenceType:"Secondary grammatical discussion and literary evidence",note:"The article explicitly identifies ಪೊಸ as an Old Kannada adjectival base form. A literary transcription also contains ಪೊಸ. Verify against a scholarly edition and record the exact work/verse before marking verified."},
    alternatives:[{id:"hosa",word:"ಹೊಸ",note:"Native Kannada",proto:"*putu",tamil:"புது (putu)",tulu:null}]
  },
  {
    id:"sugarcane", sanskrit:"ಇಕ್ಷು", meaning:"Sugarcane", category:"Nature", halegannada:"ಕರ್ವು", halegannadaEvidence:{status:"provisional",sourceTitle:"P. V. Narayana, Pampana Nudigani — digitised dictionary transcription; Kannada Prabha corroboration",sourceUrl:"https://github.com/omshivaprakash/Indic-dictionaries/blob/main/%5BKA%5D%20Pampana%20Nudigani/Raw%20Scraped%20Data/%E0%B2%95_pampanudi.csv",evidenceType:"Scraped dictionary entry with literary citation; secondary linguistic commentary",note:"The digitised entry exact headword is ಕರ್ವು, glossed ಕಬ್ಬು, with a citation to ಪಂಪಭಾ 4.37v. Kannada Prabha also mentions ಕರ್ವು / ಕರ್ಬು. Prefer the dictionary headword ಕರ್ವು in this card; confirm the original edition and verse before marking verified."},
    alternatives:[{id:"kabbu",word:"ಕಬ್ಬು",note:"Common Kannada",proto:null,tamil:"கரும்பு (karumpu)",tulu:null}]
  },
]; 

// Candidate starter list only — not a verified Halegannada wordlist.
// Individual entries lack traceable page/entry citations and must not be treated as established Old Kannada
// until checked against the underlying dictionary or a dated primary text.
const halegannadaEntries = [
  { id:"ambudaratha", word:"ಅಂಬುದರಥ", meaning:"Indra", note:"Literary / historical form" },
  { id:"ambupayi", word:"ಅಂಬುಪಾಯಿ", meaning:"One who drinks water", note:"Compound form; literal gloss" },
  { id:"amburuha", word:"ಅಂಬುರುಹ", meaning:"Lotus", note:"Literary / historical form" },
  { id:"ambuveedu", word:"ಅಂಬುವೀಡು", meaning:"Range of an arrow", note:"Historical sense; verify context" },
  { id:"alivelaga", word:"ಆಲಿವೆಳಗ", meaning:"Moon", note:"Literary / historical form" },
  {
    id:"aalisu", word:"ಆಲಿಸು", meaning:"Listen attentively; heed; expect",
    modernKannada:"ಕೇಳು", sentence:{
      source:"ಅವನ ಮಾತನ್ನು ಶ್ರವಣಿಸು.",
      kannada:"ಅವನ ಮಾತನ್ನು ಕೇಳು.",
      proto:"ಅವನ ಮಾತನ್ನು *kēḷ.",
      hale:"ಅವನ ಮಾತನ್ನು ಆಲಿಸು.",
      sanskritLabel:"ಶ್ರವಣಿಸು",
      protoRoot:"*kēḷ — reconstructed Proto-Dravidian root; verify the exact reconstruction and semantic range.",
      note:"The Proto-Dravidian line inserts a reconstructed root into a Kannada sentence frame; it is not claimed to be an attested Proto-Dravidian sentence."
    }
  },
  { id:"alIdha", word:"ಆಲೀಢ", meaning:"Tasted / eaten", note:"Historical participial form; exact usage depends on context" },
  { id:"avagam", word:"ಆವಗಂ", meaning:"Always; abundantly", note:"Historical adverbial form" },
  {
    id:"avana", word:"ಆವಣ", meaning:"Shop",
    modernKannada:"ಅಂಗಡಿ",
    sentence:{
      source:"ನಾನು ಆಪಣಕ್ಕೆ ಹೋದೆ.",
      kannada:"ನಾನು ಅಂಗಡಿಗೆ ಹೋದೆ.",
      hale:"ನಾನು ಆವಣಕ್ಕೆ ಹೋದೆ.",
      sanskritLabel:"ಆಪಣ",
      note:"Illustrative sentence; confirm the historical form's case usage in a primary text."
    }
  },
  { id:"avarisu", word:"ಆವರಿಸು", meaning:"Surround; pervade; enclose", note:"Historical verb; also has continuing Kannada usage" },
  { id:"attatti", word:"ಅಟ್ಟಟ್ಟಿ", meaning:"Messenger / courier", note:"Historical occupational / role term" },
  { id:"adakil", word:"ಅಡಕಿಲ್", meaning:"Heap / pile", note:"Historical noun; verify spelling variants" },
  { id:"akkaja", word:"ಅಕ್ಕಜ", meaning:"Wonder / surprise", note:"Historical / literary form" },
  { id:"agadu", word:"ಅಗಡು", meaning:"Mischief / valour", note:"Multiple senses; context is important" },
  { id:"honta", word:"ಹೊಂತ", meaning:"Vow / pledge", note:"Historical form" },
  { id:"hondu", word:"ಹೊಂದು", meaning:"To die", note:"Source spelling and sense require specialist verification" },
  { id:"hogaru", word:"ಹೊಗರು", meaning:"Radiance / splendour", note:"Historical / literary form" },
  {
    id:"mugil", word:"ಮುಗಿಲ್", meaning:"Cloud",
    modernKannada:"ಮೋಡ",
    sentence:{
      source:"ಮೇಘವು ಆಕಾಶದಲ್ಲಿ ತೇಲುತ್ತದೆ.",
      kannada:"ಮೋಡವು ಆಗಸದಲ್ಲಿ ತೇಲುತ್ತದೆ.",
      hale:"ಮುಗಿಲ್ ಆಗಸದಲ್ಲಿ ತೇಲುತ್ತದೆ.",
      sanskritLabel:"ಮೇಘ",
      note:"Sentence is illustrative; check agreement and attested Halegannada usage before treating it as a quotation."
    }
  },
  {
    id:"javanike", word:"ಜವನಿಕೆ", meaning:"Curtain / screen",
    modernKannada:"ಪರದೆ",
    sentence:{
      source:"ಯವನಿಕೆಯನ್ನು ಸರಿಸು.",
      kannada:"ಪರದೆಯನ್ನು ಸರಿಸು.",
      hale:"ಜವನಿಕೆಯನ್ನು ಸರಿಸು.",
      sanskritLabel:"ಯವನಿಕಾ",
      note:"This is a historical lexical comparison, not a claim that the word has a Dravidian origin."
    }
  },
  { id:"erde", word:"ಎರ್ದೆ", meaning:"Husband; to captivate", note:"Two senses reported; separate by context during scholarly review" },
  {
    id:"posa", word:"ಪೊಸ", meaning:"New",
    modernKannada:"ಹೊಸ",
    sentence:{
      source:"ಇದು ನವೀನ ಗೃಹ.",
      kannada:"ಇದು ಹೊಸ ಮನೆ.",
      proto:"ಇದು *putu ಮನೆ.",
      hale:"ಇದು ಪೊಸ ಮನೆ.",
      sanskritLabel:"ನವ",
      protoRoot:"*putu — reconstructed Proto-Dravidian ‘new’ root; reconstruction and sound correspondence should be checked against a specialist etymological source.",
      note:"The Proto-Dravidian line inserts a reconstructed root into a Kannada sentence frame; it is illustrative, not an attested Proto-Dravidian sentence."
    }
  },
  {
    id:"karbu", word:"ಕರ್ವು", meaning:"Sugarcane",
    modernKannada:"ಕಬ್ಬು",
    sentence:{
      source:"ರೈತನು ಇಕ್ಷುವನ್ನು ಬೆಳೆದನು.",
      kannada:"ರೈತನು ಕಬ್ಬನ್ನು ಬೆಳೆದನು.",
      hale:"ರೈತನು ಕರ್ವನ್ನು ಬೆಳೆದನು.",
      sanskritLabel:"ಇಕ್ಷು",
      note:"Sentence is illustrative; the Halegannada form and inflection need verification in a primary text."
    }
  },
  { id:"olapokkal", word:"ಒಳಪೊಕ್ಕಳ್", meaning:"To enter", note:"Historical verbal form; verify inflection and dialect / period" }
];
