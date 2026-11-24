// ಅಚ್ಚ ಕನ್ನಡ News Converter
// Phrase replacements run before individual-word conversion.

const PHRASE_MAP = {
  "ಸಂಚಾರ ದಟ್ಟಣೆ": "ಓಡಾಟದ ನೂಕುನುಗ್ಗಲು",
  "ವಿರೋಧ ಪಕ್ಷ": "ಎದುರು ಗುಂಪು",
  "ನೇರ ಪ್ರಸಾರ": "ನೇರ ಬಿತ್ತರ",
  "ವಿಶೇಷ ವರದಿ": "ನೆಟ್ಟರಿಕೆ",
  "ನ್ಯಾಯಾಂಗ ಬಂಧನ": "ಕಟ್ಟಳೆ ಸೆರೆ",
  "ಕ್ಷಣಕ್ಷಣದ ಮಾಹಿತಿ": "ಹೊತ್ತೊತ್ತಿನ ತಿಳಿವು"
};

const ROOT_MAP = {
  "ಸರ್ಕಾರ": "ಆಳ್ವಿಕೆ",
  "ಪ್ರಕರಣ": "ಸಂಗತಿ",
  "ವರದಿ": "ಅರಿಕೆ",
  "ಸುದ್ದಿ": "ಹೊಸತು",
  "ಆರೋಪ": "ಹೊರಿಸುವಿಕೆ",
  "ತಿರುಗೇಟು": "ಮರುಹೊಡೆತ",
  "ತನಿಖೆ": "ಹುಡುಕಾಟ",
  "ಬಂಧನ": "ಸೆರೆಹಿಡಿತ",
  "ಅನುಮತಿ": "ಒಪ್ಪಿಗೆ",
  "ಪ್ರತಿಭಟನೆ": "ಎದುರಾಟ",
  "ಸಭೆ": "ಕೂಟ",
  "ಮಾಹಿತಿ": "ತಿಳಿವು",
  "ಪರಿಹಾರ": "ನೆರವು",
  "ವಿವಾದ": "ತಿಕ್ಕಾಟ",
  "ಆತಂಕ": "ದಿಗಿಲು"
};

function inflectNativeWord(nativeRoot, suffixType) {
  const endsWithIorE = nativeRoot.endsWith("ಿ") || nativeRoot.endsWith("ೆ");
  const endsWithU = nativeRoot.endsWith("ು");

  switch (suffixType) {
    case "DATIVE":
      return nativeRoot + (endsWithIorE ? "ಗೆ" : "ಕ್ಕೆ");
    case "GENITIVE":
      if (endsWithIorE) return nativeRoot + "ಯ";
      if (endsWithU) return nativeRoot.slice(0, -1) + "ಿನ";
      return nativeRoot + "ದ";
    case "ACCUSATIVE":
      if (endsWithIorE) return nativeRoot + "ಯನ್ನು";
      if (endsWithU) return nativeRoot.slice(0, -1) + "ನ್ನು";
      return nativeRoot + "ವನ್ನು";
    case "LOCATIVE":
      if (endsWithIorE) return nativeRoot + "ಯಲ್ಲಿ";
      if (endsWithU) return nativeRoot.slice(0, -1) + "ಿನಲ್ಲಿ";
      return nativeRoot + "ದಲ್ಲಿ";
    case "PLURAL":
      return nativeRoot + "ಗಳು";
    default:
      return nativeRoot;
  }
}

const SUFFIX_RULES = [
  { endings: ["ವನ್ನು", "ಯನ್ನು", "ನ್ನು"], type: "ACCUSATIVE" },
  { endings: ["ಯಲ್ಲಿ", "ದಲ್ಲಿ", "ಿನಲ್ಲಿ"], type: "LOCATIVE" },
  { endings: ["ಕ್ಕೆ", "ಗೆ"], type: "DATIVE" },
  { endings: ["ಗಳು"], type: "PLURAL" },
  { endings: ["ದ", "ಯ", "ಿನ"], type: "GENITIVE" }
];

function convertWord(token) {
  if (Object.prototype.hasOwnProperty.call(ROOT_MAP, token)) {
    return ROOT_MAP[token];
  }

  for (const rule of SUFFIX_RULES) {
    for (const ending of rule.endings) {
      if (!token.endsWith(ending) || token.length <= ending.length + 1) continue;

      const stem = token.slice(0, -ending.length);
      const root = ROOT_MAP[stem] ? stem : (ROOT_MAP[stem + "ು"] ? stem + "ು" : null);
      if (root) return inflectNativeWord(ROOT_MAP[root], rule.type);
    }
  }

  return token;
}

function convertText(input) {
  let result = String(input ?? "");

  // Longest phrases first, so a phrase is not partially transformed.
  const phrases = Object.entries(PHRASE_MAP).sort((a, b) => b[0].length - a[0].length);
  for (const [phrase, replacement] of phrases) {
    result = result.split(phrase).join(replacement);
  }

  return result.replace(/[\u0C80-\u0CFF]+/g, convertWord);
}
