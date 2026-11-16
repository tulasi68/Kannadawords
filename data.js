// Open / common-knowledge Sanskrit → native Dravidian / Kannada pairs
// Sources: everyday usage, public comparative lists, DravLex (CC BY 4.0), Wiktionary

const wordPairs = [
  // Everyday
  { id: 1, sanskrit: "ಕ್ಷೀರ", native: "ಹಾಲು", meaning: "Milk", category: "Everyday", note: "Classic desi form (pāl root)" },
  { id: 2, sanskrit: "ಸರ್ಪ", native: "ಹಾವು", meaning: "Snake", category: "Everyday", note: "pāmpu / hāvu" },
  { id: 3, sanskrit: "ವೃಕ್ಷ", native: "ಮರ", meaning: "Tree", category: "Everyday", note: "maram root" },
  { id: 4, sanskrit: "ಗೃಹ", native: "ಮನೆ", meaning: "House", category: "Everyday", note: "manai / mane" },
  { id: 5, sanskrit: "ವಸ್ತ್ರ", native: "ಬಟ್ಟೆ", meaning: "Cloth / Clothes", category: "Everyday", note: "Everyday speech" },
  { id: 6, sanskrit: "ಭೋಜನ", native: "ಊಟ", meaning: "Meal / Food", category: "Everyday", note: "Common spoken form" },
  { id: 7, sanskrit: "ಜಲ", native: "ನೀರು", meaning: "Water", category: "Everyday", note: "nīr root" },
  { id: 8, sanskrit: "ಪುಷ್ಪ", native: "ಹೂವು", meaning: "Flower", category: "Everyday", note: "pū / hūvu" },
  { id: 9, sanskrit: "ಪಕ್ಷಿ", native: "ಹಕ್ಕಿ", meaning: "Bird", category: "Everyday", note: "Assimilated tadbhava form widely preferred" },
  { id: 10, sanskrit: "ಗ್ರಾಮ", native: "ಹಳ್ಳಿ", meaning: "Village", category: "Everyday", note: "Common native term" },

  // Nature
  { id: 11, sanskrit: "ಸೂರ್ಯ", native: "ನೇಸರ", meaning: "Sun", category: "Nature", note: "Classic Kannada form (ñāyiṟu cognate)" },
  { id: 12, sanskrit: "ರಾತ್ರಿ", native: "ಇರುಳು", meaning: "Night", category: "Nature", note: "irul root – strong desi" },
  { id: 13, sanskrit: "ಅಗ್ನಿ", native: "ಬೆಂಕಿ", meaning: "Fire", category: "Nature", note: "veṅkai / beṅki" },
  { id: 14, sanskrit: "ಛಾಯೆ", native: "ನೆರಳು", meaning: "Shadow", category: "Nature", note: "Everyday native" },
  { id: 15, sanskrit: "ಆಕಾಶ", native: "ಆಗಸ", meaning: "Sky", category: "Nature", note: "Widely used desi form" },
  { id: 16, sanskrit: "ಭೂಮಿ", native: "ನೆಲ", meaning: "Earth / Ground", category: "Nature", note: "nel / nela" },

  // Body
  { id: 17, sanskrit: "ಹಸ್ತ", native: "ಕೈ", meaning: "Hand", category: "Body", note: "kai – core Dravidian" },
  { id: 18, sanskrit: "ರಕ್ತ", native: "ನೆತ್ತರು", meaning: "Blood", category: "Body", note: "nettar" },
  { id: 19, sanskrit: "ಕೇಶ", native: "ಕೂದಲು", meaning: "Hair", category: "Body", note: "kūtal / kūdalu" },
  { id: 20, sanskrit: "ನಯನ / ನೇತ್ರ", native: "ಕಣ್ಣು", meaning: "Eye", category: "Body", note: "kaṇ root" },
  { id: 21, sanskrit: "ದಂತ", native: "ಹಲ್ಲು", meaning: "Tooth", category: "Body", note: "pal / hallu" },
  { id: 22, sanskrit: "ಶಿರ / ಮಸ್ತಕ", native: "ತಲೆ", meaning: "Head", category: "Body", note: "talai / tale" },

  // Directions
  { id: 23, sanskrit: "ಉತ್ತರ", native: "ಬಡಗಣ", meaning: "North", category: "Directions", note: "Traditional Kannada directional" },
  { id: 24, sanskrit: "ದಕ್ಷಿಣ", native: "ತೆಂಕಣ", meaning: "South", category: "Directions", note: "Traditional Kannada directional" },
  { id: 25, sanskrit: "ಪೂರ್ವ", native: "ಮೂಡಣ", meaning: "East", category: "Directions", note: "Traditional Kannada directional" },
  { id: 26, sanskrit: "ಪಶ್ಚಿಮ", native: "ಪಡುವಣ", meaning: "West", category: "Directions", note: "Traditional Kannada directional" },

  // Abstract
  { id: 27, sanskrit: "ಭಾಷೆ", native: "ನುಡಿ", meaning: "Language / Speech", category: "Abstract", note: "nuḍi – strong desi (DEDR-attested publicly)" },
  { id: 28, sanskrit: "ಸ್ನೇಹ / ಸ್ನೇಹಿತ", native: "ಗೆಳೆಯ", meaning: "Friend", category: "Abstract", note: "keḷ / geḷeya" },
  { id: 29, sanskrit: "ದುಃಖ", native: "ಅಳಲು", meaning: "Sorrow / Grief", category: "Abstract", note: "aḻu root" },
  { id: 30, sanskrit: "ಪ್ರಶ್ನೆ", native: "ಕೇಳ್ವೆ", meaning: "Question", category: "Abstract", note: "kēḷ root" },
  { id: 31, sanskrit: "ಸಂತೋಷ", native: "ಸಂತಸ", meaning: "Happiness", category: "Abstract", note: "Assimilated form preferred by many" },
  { id: 32, sanskrit: "ಧ್ವನಿ", native: "ಸಪ್ಪಳ", meaning: "Sound / Noise", category: "Abstract", note: "Everyday native" }
];