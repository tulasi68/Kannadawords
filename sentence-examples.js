// Illustrative sentence pairs. These are composed examples, not quotations.
// Proto-Dravidian forms are reconstructed roots, not attested full sentences.
const sentenceExamples = {
  milk:{source:"बालकः क्षीरं पिबति. (Kannada usage: ಮಗು ಕ್ಷೀರ ಕುಡಿಯುತ್ತದೆ.)",kannada:"ಮಗು ಹಾಲು ಕುಡಿಯುತ್ತದೆ.",proto:"ಮಗು *pāl ಕುಡಿಯುತ್ತದೆ.",note:"The Proto-Dravidian root is shown inside a Kannada sentence frame."},
  house:{source:"ಇದು ಗೃಹ.",kannada:"ಇದು ಮನೆ.",proto:"ಇದು *manay.",note:"Illustrative substitution; the root is not a complete Proto-Dravidian sentence."},
  water:{source:"ನನಗೆ ಜಲ ಬೇಕು.",kannada:"ನನಗೆ ನೀರು ಬೇಕು.",proto:"ನನಗೆ *nīr ಬೇಕು."},
  tree:{source:"ಆ ವೃಕ್ಷ ದೊಡ್ಡದು.",kannada:"ಆ ಮರ ದೊಡ್ಡದು.",proto:"ಆ *maram ದೊಡ್ಡದು."},
  flower:{source:"ಅವಳು ಪುಷ್ಪ ತಂದಳು.",kannada:"ಅವಳು ಹೂವು ತಂದಳು.",proto:"ಅವಳು *pū ತಂದಳು."},
  bird:{source:"ಪಕ್ಷಿ ಮರದ ಮೇಲೆ ಕುಳಿತಿದೆ.",kannada:"ಹಕ್ಕಿ ಮರದ ಮೇಲೆ ಕುಳಿತಿದೆ.",proto:"*paṟava ಮರದ ಮೇಲೆ ಕುಳಿತಿದೆ."},
  food:{source:"ನಾನು ಭೋಜನ ಮಾಡಿದೆ.",kannada:"ನಾನು ಊಟ ಮಾಡಿದೆ.",proto:"ನಾನು *ūṭu ಮಾಡಿದೆ."},
  sun:{source:"ಸೂರ್ಯ ಉದಯಿಸಿದನು.",kannada:"ನೇಸರ ಮೂಡಿತು.",note:"Sentence is a natural Kannada rendering; the historical form is literary."},
  night:{source:"ರಾತ್ರಿಯಲ್ಲಿ ಪ್ರಯಾಣಿಸಬೇಡ.",kannada:"ಇರುಳಲ್ಲಿ ಪ್ರಯಾಣಿಸಬೇಡ.",proto:"*irulಲ್ಲಿ ಪ್ರಯಾಣಿಸಬೇಡ."},
  fire:{source:"ಅಗ್ನಿಯನ್ನು ಆರಿಸು.",kannada:"ಬೆಂಕಿಯನ್ನು ಆರಿಸು.",proto:"*veṅkay ಅನ್ನು ಆರಿಸು."},
  earth:{source:"ಭೂಮಿಯನ್ನು ಉಳಿಸೋಣ.",kannada:"ನೆಲವನ್ನು ಉಳಿಸೋಣ.",proto:"*nilam ಅನ್ನು ಉಳಿಸೋಣ."},
  rain:{source:"ವರ್ಷ ಬರುತ್ತಿದೆ.",kannada:"ಮಳೆ ಬರುತ್ತಿದೆ.",proto:"*maḻai ಬರುತ್ತಿದೆ."},
  hand:{source:"ನಿನ್ನ ಹಸ್ತ ತೋರಿಸು.",kannada:"ನಿನ್ನ ಕೈ ತೋರಿಸು.",proto:"ನಿನ್ನ *kay ತೋರಿಸು."},
  eye:{source:"ಅವನ ನಯನ ಸುಂದರವಾಗಿದೆ.",kannada:"ಅವನ ಕಣ್ಣು ಚೆನ್ನಾಗಿದೆ.",proto:"ಅವನ *kaṇ ಚೆನ್ನಾಗಿದೆ."},
  listen:{source:"ಅವನ ಮಾತನ್ನು ಶ್ರವಣಿಸು.",kannada:"ಅವನ ಮಾತನ್ನು ಕೇಳು.",proto:"ಅವನ ಮಾತನ್ನು *kēḷ.",hale:"ಅವನ ಮಾತನ್ನು ಆಲಿಸು.",note:"Halegannada form from the curated lexical list; sentence inflection is illustrative."},
  shop:{source:"ನಾನು ಆಪಣಕ್ಕೆ ಹೋದೆ.",kannada:"ನಾನು ಅಂಗಡಿಗೆ ಹೋದೆ.",hale:"ನಾನು ಆವಣಕ್ಕೆ ಹೋದೆ.",note:"Halegannada sentence frame is illustrative; verify inflection in a primary text."},
  cloud:{source:"ಮೇಘವು ಆಕಾಶದಲ್ಲಿ ತೇಲುತ್ತದೆ.",kannada:"ಮೋಡವು ಆಗಸದಲ್ಲಿ ತೇಲುತ್ತದೆ.",hale:"ಮುಗಿಲ್ ಆಗಸದಲ್ಲಿ ತೇಲುತ್ತದೆ.",note:"Illustrative sentence; not an attested quotation."},
  curtain:{source:"ಯವನಿಕೆಯನ್ನು ಸರಿಸು.",kannada:"ಪರದೆಯನ್ನು ಸರಿಸು.",hale:"ಜವನಿಕೆಯನ್ನು ಸರಿಸು.",note:"Historical lexical comparison; the word's etymology is not asserted to be Dravidian."},
  new:{source:"ಇದು ನವೀನ ಗೃಹ.",kannada:"ಇದು ಹೊಸ ಮನೆ.",proto:"ಇದು *putu ಮನೆ.",hale:"ಇದು ಪೊಸ ಮನೆ.",note:"Proto root is inserted into a Kannada frame; verify reconstruction and sound correspondence."},
  sugarcane:{source:"ರೈತನು ಇಕ್ಷುವನ್ನು ಬೆಳೆದನು.",kannada:"ರೈತನು ಕಬ್ಬನ್ನು ಬೆಳೆದನು.",hale:"ರೈತನು ಕರ್ಬನ್ನು ಬೆಳೆದನು.",note:"Halegannada form and inflection require primary-source verification."}
};
