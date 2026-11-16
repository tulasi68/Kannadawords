// Expanded crowdsourcing data – Sanskrit → native Dravidian alternatives
// Includes Kannada, with notes on Tamil / Tulu / Proto-Dravidian where relevant

const wordEntries = [
  // ===== Everyday =====
  {
    id: "milk",
    sanskrit: "ಕ್ಷೀರ",
    meaning: "Milk",
    category: "Everyday",
    alternatives: [
      { id: "halu", word: "ಹಾಲು", note: "Kannada – most common (pāl root; Tamil pāl, Tulu pēr)" },
      { id: "palu", word: "ಪಾಲು", note: "Older form" }
    ]
  },
  {
    id: "snake",
    sanskrit: "ಸರ್ಪ / ನಾಗ",
    meaning: "Snake",
    category: "Everyday",
    alternatives: [
      { id: "havu", word: "ಹಾವು", note: "Standard Kannada (pāmpu root; Tamil pāmpu)" }
    ]
  },
  {
    id: "tree",
    sanskrit: "ವೃಕ್ಷ",
    meaning: "Tree",
    category: "Everyday",
    alternatives: [
      { id: "mara", word: "ಮರ", note: "Core Dravidian (Tamil maram, Tulu mara)" }
    ]
  },
  {
    id: "house",
    sanskrit: "ಗೃಹ / ಭವನ",
    meaning: "House",
    category: "Everyday",
    alternatives: [
      { id: "mane", word: "ಮನೆ", note: "Everyday native (Tamil maṉai)" }
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
    sanskrit: "ಭೋಜನ / ಆಹಾರ",
    meaning: "Meal / Food",
    category: "Everyday",
    alternatives: [
      { id: "uta", word: "ಊಟ", note: "Most natural spoken form" },
      { id: "tindi", word: "ತಿಂಡಿ", note: "Snack / light food" }
    ]
  },
  {
    id: "water",
    sanskrit: "ಜಲ / ನೀರ್",
    meaning: "Water",
    category: "Everyday",
    alternatives: [
      { id: "niru", word: "ನೀರು", note: "Core native (Tamil nīr, Tulu nīr)" }
    ]
  },
  {
    id: "flower",
    sanskrit: "ಪುಷ್ಪ / ಪುಷ್ಪಕ",
    meaning: "Flower",
    category: "Everyday",
    alternatives: [
      { id: "huvu", word: "ಹೂವು", note: "Standard desi (Tamil pū)" }
    ]
  },
  {
    id: "bird",
    sanskrit: "ಪಕ್ಷಿ",
    meaning: "Bird",
    category: "Everyday",
    alternatives: [
      { id: "hakki", word: "ಹಕ್ಕಿ", note: "Widely preferred form" }
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
    id: "book",
    sanskrit: "ಪುಸ್ತಕ",
    meaning: "Book",
    category: "Everyday",
    alternatives: [
      { id: "hottige", word: "ಹೊತ್ತಿಗೆ", note: "Traditional Kannada form" },
      { id: "hottige2", word: "ಹೊತ್ತಗೆ", note: "Variant" }
    ]
  },
  {
    id: "lamp",
    sanskrit: "ದೀಪ",
    meaning: "Lamp / Light",
    category: "Everyday",
    alternatives: [
      { id: "sodaru", word: "ಸೊಡರು", note: "Pure Kannada form preferred by many" },
      { id: "deepa", word: "ದೀಪ", note: "Commonly used (Sanskrit)" }
    ]
  },
  {
    id: "path",
    sanskrit: "ಮಾರ್ಗ / ಪಥ",
    meaning: "Path / Way",
    category: "Everyday",
    alternatives: [
      { id: "dari", word: "ದಾರಿ", note: "Everyday native" },
      { id: "hadi", word: "ಹಾದಿ", note: "Also common" }
    ]
  },
  {
    id: "time",
    sanskrit: "ಕಾಲ / ಸಮಯ",
    meaning: "Time",
    category: "Everyday",
    alternatives: [
      { id: "vela", word: "ವೇಳೆ", note: "Common spoken" },
      { id: "hottu", word: "ಹೊತ್ತು", note: "Native sense of time of day" }
    ]
  },
  {
    id: "work",
    sanskrit: "ಕಾರ್ಯ / ಕೆಲಸ",
    meaning: "Work / Task",
    category: "Everyday",
    alternatives: [
      { id: "kelasa", word: "ಕೆಲಸ", note: "Most natural everyday word" }
    ]
  },

  // ===== Nature =====
  {
    id: "sun",
    sanskrit: "ಸೂರ್ಯ",
    meaning: "Sun",
    category: "Nature",
    alternatives: [
      { id: "nesara", word: "ನೇಸರ", note: "Classic Kannada (Tamil ñāyiṟu)" }
    ]
  },
  {
    id: "night",
    sanskrit: "ರಾತ್ರಿ",
    meaning: "Night",
    category: "Nature",
    alternatives: [
      { id: "irulu", word: "ಇರುಳು", note: "Strong desi (Tamil iruḷ)" }
    ]
  },
  {
    id: "fire",
    sanskrit: "ಅಗ್ನಿ",
    meaning: "Fire",
    category: "Nature",
    alternatives: [
      { id: "benki", word: "ಬೆಂಕಿ", note: "Everyday native (Tamil veṅkai)" }
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
      { id: "agasa", word: "ಆಗಸ", note: "Widely used desi form" }
    ]
  },
  {
    id: "earth",
    sanskrit: "ಭೂಮಿ",
    meaning: "Earth / Ground",
    category: "Nature",
    alternatives: [
      { id: "nela", word: "ನೆಲ", note: "Core native (Tamil nilam)" }
    ]
  },
  {
    id: "wind",
    sanskrit: "ವಾಯು / ಪವನ",
    meaning: "Wind / Air",
    category: "Nature",
    alternatives: [
      { id: "gali", word: "ಗಾಳಿ", note: "Everyday Kannada" }
    ]
  },
  {
    id: "rain",
    sanskrit: "ವರ್ಷ / ಮಳೆ",
    meaning: "Rain",
    category: "Nature",
    alternatives: [
      { id: "male", word: "ಮಳೆ", note: "Standard native" }
    ]
  },
  {
    id: "mountain",
    sanskrit: "ಪರ್ವತ / ಗಿರಿ",
    meaning: "Mountain",
    category: "Nature",
    alternatives: [
      { id: "betta", word: "ಬೆಟ್ಟ", note: "Common Kannada" },
      { id: "gudda", word: "ಗುಡ್ಡ", note: "Also widely used" }
    ]
  },
  {
    id: "forest",
    sanskrit: "ಅರಣ್ಯ / ವನ",
    meaning: "Forest",
    category: "Nature",
    alternatives: [
      { id: "adavi", word: "ಅಡವಿ", note: "Native form" },
      { id: "kadu", word: "ಕಾಡು", note: "Very common spoken" }
    ]
  },
  {
    id: "river",
    sanskrit: "ನದಿ",
    meaning: "River",
    category: "Nature",
    alternatives: [
      { id: "hole", word: "ಹೊಳೆ", note: "Native Kannada for stream/river" }
    ]
  },

  // ===== Body =====
  {
    id: "hand",
    sanskrit: "ಹಸ್ತ",
    meaning: "Hand",
    category: "Body",
    alternatives: [
      { id: "kai", word: "ಕೈ", note: "Core Dravidian (Tamil kai, Tulu kai)" }
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
    sanskrit: "ನಯನ / ನೇತ್ರ / ಅಕ್ಷಿ",
    meaning: "Eye",
    category: "Body",
    alternatives: [
      { id: "kannu", word: "ಕಣ್ಣು", note: "Core native (Tamil kaṇ)" }
    ]
  },
  {
    id: "tooth",
    sanskrit: "ದಂತ",
    meaning: "Tooth",
    category: "Body",
    alternatives: [
      { id: "hallu", word: "ಹಲ್ಲು", note: "Everyday form (Tamil pal)" }
    ]
  },
  {
    id: "head",
    sanskrit: "ಶಿರ / ಮಸ್ತಕ",
    meaning: "Head",
    category: "Body",
    alternatives: [
      { id: "tale", word: "ತಲೆ", note: "Core native (Tamil talai)" }
    ]
  },
  {
    id: "face",
    sanskrit: "ಮುಖ",
    meaning: "Face",
    category: "Body",
    alternatives: [
      { id: "moga", word: "ಮೊಗ", note: "Tadbhava / desi form" }
    ]
  },
  {
    id: "mouth",
    sanskrit: "ಮುಖ / ಆಸ್ಯ",
    meaning: "Mouth",
    category: "Body",
    alternatives: [
      { id: "bayi", word: "ಬಾಯಿ", note: "Standard native" }
    ]
  },
  {
    id: "leg",
    sanskrit: "ಪಾದ / ಜಂಘ",
    meaning: "Leg / Foot",
    category: "Body",
    alternatives: [
      { id: "kalu", word: "ಕಾಲು", note: "Core native (Tamil kāl)" }
    ]
  },
  {
    id: "ear",
    sanskrit: "ಕರ್ಣ",
    meaning: "Ear",
    category: "Body",
    alternatives: [
      { id: "kivi", word: "ಕಿವಿ", note: "Native form" }
    ]
  },
  {
    id: "nose",
    sanskrit: "ನಾಸಿಕ",
    meaning: "Nose",
    category: "Body",
    alternatives: [
      { id: "mugu", word: "ಮೂಗು", note: "Everyday native" }
    ]
  },
  {
    id: "stomach",
    sanskrit: "ಉದರ / ಹೊಟ್ಟೆ",
    meaning: "Stomach / Belly",
    category: "Body",
    alternatives: [
      { id: "hotte", word: "ಹೊಟ್ಟೆ", note: "Common spoken" }
    ]
  },

  // ===== Directions =====
  {
    id: "north",
    sanskrit: "ಉತ್ತರ",
    meaning: "North",
    category: "Directions",
    alternatives: [
      { id: "badagana", word: "ಬಡಗಣ", note: "Traditional Kannada directional" }
    ]
  },
  {
    id: "south",
    sanskrit: "ದಕ್ಷಿಣ",
    meaning: "South",
    category: "Directions",
    alternatives: [
      { id: "tenkana", word: "ತೆಂಕಣ", note: "Traditional Kannada directional" }
    ]
  },
  {
    id: "east",
    sanskrit: "ಪೂರ್ವ",
    meaning: "East",
    category: "Directions",
    alternatives: [
      { id: "mudana", word: "ಮೂಡಣ", note: "Traditional Kannada directional" }
    ]
  },
  {
    id: "west",
    sanskrit: "ಪಶ್ಚಿಮ",
    meaning: "West",
    category: "Directions",
    alternatives: [
      { id: "paduvana", word: "ಪಡುವಣ", note: "Traditional Kannada directional" }
    ]
  },

  // ===== Abstract / Other =====
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
  },
  {
    id: "knowledge",
    sanskrit: "ವಿದ್ಯೆ / ಜ್ಞಾನ",
    meaning: "Knowledge / Learning",
    category: "Abstract",
    alternatives: [
      { id: "odu", word: "ಓದು", note: "Reading / study (native verb root)" },
      { id: "kalike", word: "ಕಲಿಕೆ", note: "Learning" }
    ]
  },
  {
    id: "life",
    sanskrit: "ಜೀವನ / ಜೀವ",
    meaning: "Life",
    category: "Abstract",
    alternatives: [
      { id: "baduku", word: "ಬದುಕು", note: "Living / life (native)" }
    ]
  },
  {
    id: "death",
    sanskrit: "ಮರಣ",
    meaning: "Death",
    category: "Abstract",
    alternatives: [
      { id: "savu", word: "ಸಾವು", note: "Everyday native" }
    ]
  },
  {
    id: "name",
    sanskrit: "ನಾಮ",
    meaning: "Name",
    category: "Abstract",
    alternatives: [
      { id: "hesaru", word: "ಹೆಸರು", note: "Standard native" }
    ]
  },
  {
    id: "king",
    sanskrit: "ರಾಜ",
    meaning: "King",
    category: "Abstract",
    alternatives: [
      { id: "raya", word: "ರಾಯ", note: "Traditional Kannada title form" },
      { id: "arasu", word: "ಅರಸು", note: "Native ruler term" }
    ]
  },
  {
    id: "day",
    sanskrit: "ದಿನ / ದಿವಸ",
    meaning: "Day",
    category: "Abstract",
    alternatives: [
      { id: "hagalu", word: "ಹಗಲು", note: "Daytime (native)" }
    ]
  }
];
