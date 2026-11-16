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
  }
];
