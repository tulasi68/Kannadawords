// Crowdsourcing data model
// Each entry has one Sanskrit word and multiple possible native alternatives

const wordEntries = [
  {
    id: "milk",
    sanskrit: "ಕ್ಷೀರ",
    meaning: "Milk",
    category: "Everyday",
    alternatives: [
      { id: "halu", word: "ಹಾಲು", note: "Most common desi form" },
      { id: "palu", word: "ಪಾಲು", note: "Older / related form" }
    ]
  },
  {
    id: "snake",
    sanskrit: "ಸರ್ಪ",
    meaning: "Snake",
    category: "Everyday",
    alternatives: [
      { id: "havu", word: "ಹಾವು", note: "Standard native form" },
      { id: "pambu", word: "ಪಾಂಬು", note: "Cognate form" }
    ]
  },
  {
    id: "tree",
    sanskrit: "ವೃಕ್ಷ",
    meaning: "Tree",
    category: "Everyday",
    alternatives: [
      { id: "mara", word: "ಮರ", note: "Core Dravidian root" }
    ]
  },
  {
    id: "house",
    sanskrit: "ಗೃಹ",
    meaning: "House",
    category: "Everyday",
    alternatives: [
      { id: "mane", word: "ಮನೆ", note: "Everyday native" }
    ]
  },
  {
    id: "cloth",
    sanskrit: "ವಸ್ತ್ರ",
    meaning: "Cloth / Clothes",
    category: "Everyday",
    alternatives: [
      { id: "batte", word: "ಬಟ್ಟೆ", note: "Common spoken form" }
    ]
  },
  {
    id: "food",
    sanskrit: "ಭೋಜನ",
    meaning: "Meal / Food",
    category: "Everyday",
    alternatives: [
      { id: "uta", word: "ಊಟ", note: "Most natural spoken form" },
      { id: "kulu", word: "ಕೂಳು", note: "Older / regional form for cooked rice" }
    ]
  },
  {
    id: "water",
    sanskrit: "ಜಲ",
    meaning: "Water",
    category: "Everyday",
    alternatives: [
      { id: "niru", word: "ನೀರು", note: "Core native word" }
    ]
  },
  {
    id: "flower",
    sanskrit: "ಪುಷ್ಪ",
    meaning: "Flower",
    category: "Everyday",
    alternatives: [
      { id: "huvu", word: "ಹೂವು", note: "Standard desi" }
    ]
  },
  {
    id: "bird",
    sanskrit: "ಪಕ್ಷಿ",
    meaning: "Bird",
    category: "Everyday",
    alternatives: [
      { id: "hakki", word: "ಹಕ್ಕಿ", note: "Widely preferred tadbhava/native form" }
    ]
  },
  {
    id: "village",
    sanskrit: "ಗ್ರಾಮ",
    meaning: "Village",
    category: "Everyday",
    alternatives: [
      { id: "halli", word: "ಹಳ್ಳಿ", note: "Common native term" }
    ]
  },
  {
    id: "sun",
    sanskrit: "ಸೂರ್ಯ",
    meaning: "Sun",
    category: "Nature",
    alternatives: [
      { id: "nesara", word: "ನೇಸರ", note: "Classic Kannada form" }
    ]
  },
  {
    id: "night",
    sanskrit: "ರಾತ್ರಿ",
    meaning: "Night",
    category: "Nature",
    alternatives: [
      { id: "irulu", word: "ಇರುಳು", note: "Strong desi form" }
    ]
  },
  {
    id: "fire",
    sanskrit: "ಅಗ್ನಿ",
    meaning: "Fire",
    category: "Nature",
    alternatives: [
      { id: "benki", word: "ಬೆಂಕಿ", note: "Everyday native" }
    ]
  },
  {
    id: "shadow",
    sanskrit: "ಛಾಯೆ",
    meaning: "Shadow",
    category: "Nature",
    alternatives: [
      { id: "neralu", word: "ನೆರಳು", note: "Common desi" }
    ]
  },
  {
    id: "sky",
    sanskrit: "ಆಕಾಶ",
    meaning: "Sky",
    category: "Nature",
    alternatives: [
      { id: "agasa", word: "ಆಗಸ", note: "Widely used form" }
    ]
  },
  {
    id: "earth",
    sanskrit: "ಭೂಮಿ",
    meaning: "Earth / Ground",
    category: "Nature",
    alternatives: [
      { id: "nela", word: "ನೆಲ", note: "Core native" }
    ]
  },
  {
    id: "hand",
    sanskrit: "ಹಸ್ತ",
    meaning: "Hand",
    category: "Body",
    alternatives: [
      { id: "kai", word: "ಕೈ", note: "Core Dravidian" }
    ]
  },
  {
    id: "blood",
    sanskrit: "ರಕ್ತ",
    meaning: "Blood",
    category: "Body",
    alternatives: [
      { id: "nettaru", word: "ನೆತ್ತರು", note: "Native form" }
    ]
  },
  {
    id: "hair",
    sanskrit: "ಕೇಶ",
    meaning: "Hair",
    category: "Body",
    alternatives: [
      { id: "kudalu", word: "ಕೂದಲು", note: "Standard desi" }
    ]
  },
  {
    id: "eye",
    sanskrit: "ನಯನ / ನೇತ್ರ",
    meaning: "Eye",
    category: "Body",
    alternatives: [
      { id: "kannu", word: "ಕಣ್ಣು", note: "Core native" }
    ]
  },
  {
    id: "tooth",
    sanskrit: "ದಂತ",
    meaning: "Tooth",
    category: "Body",
    alternatives: [
      { id: "hallu", word: "ಹಲ್ಲು", note: "Everyday form" }
    ]
  },
  {
    id: "head",
    sanskrit: "ಶಿರ / ಮಸ್ತಕ",
    meaning: "Head",
    category: "Body",
    alternatives: [
      { id: "tale", word: "ತಲೆ", note: "Core native" }
    ]
  },
  {
    id: "north",
    sanskrit: "ಉತ್ತರ",
    meaning: "North",
    category: "Directions",
    alternatives: [
      { id: "badagana", word: "ಬಡಗಣ", note: "Traditional directional" }
    ]
  },
  {
    id: "south",
    sanskrit: "ದಕ್ಷಿಣ",
    meaning: "South",
    category: "Directions",
    alternatives: [
      { id: "tenkana", word: "ತೆಂಕಣ", note: "Traditional directional" }
    ]
  },
  {
    id: "east",
    sanskrit: "ಪೂರ್ವ",
    meaning: "East",
    category: "Directions",
    alternatives: [
      { id: "mudana", word: "ಮೂಡಣ", note: "Traditional directional" }
    ]
  },
  {
    id: "west",
    sanskrit: "ಪಶ್ಚಿಮ",
    meaning: "West",
    category: "Directions",
    alternatives: [
      { id: "paduvana", word: "ಪಡುವಣ", note: "Traditional directional" }
    ]
  },
  {
    id: "language",
    sanskrit: "ಭಾಷೆ",
    meaning: "Language / Speech",
    category: "Abstract",
    alternatives: [
      { id: "nudi", word: "ನುಡಿ", note: "Strong desi form" }
    ]
  },
  {
    id: "friend",
    sanskrit: "ಸ್ನೇಹ / ಸ್ನೇಹಿತ",
    meaning: "Friend",
    category: "Abstract",
    alternatives: [
      { id: "geleya", word: "ಗೆಳೆಯ", note: "Native form" }
    ]
  },
  {
    id: "sorrow",
    sanskrit: "ದುಃಖ",
    meaning: "Sorrow / Grief",
    category: "Abstract",
    alternatives: [
      { id: "alalu", word: "ಅಳಲು", note: "Desi form" },
      { id: "novu", word: "ನೋವು", note: "Also commonly used" }
    ]
  },
  {
    id: "question",
    sanskrit: "ಪ್ರಶ್ನೆ",
    meaning: "Question",
    category: "Abstract",
    alternatives: [
      { id: "kelve", word: "ಕೇಳ್ವೆ", note: "Native alternative" }
    ]
  },
  {
    id: "happiness",
    sanskrit: "ಸಂತೋಷ",
    meaning: "Happiness",
    category: "Abstract",
    alternatives: [
      { id: "santasa", word: "ಸಂತಸ", note: "Assimilated preferred form" }
    ]
  },
  {
    id: "sound",
    sanskrit: "ಧ್ವನಿ",
    meaning: "Sound / Noise",
    category: "Abstract",
    alternatives: [
      { id: "sappala", word: "ಸಪ್ಪಳ", note: "Everyday native" }
    ]
  }
];
