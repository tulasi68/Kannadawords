// Editorial starter dataset for the Tamil-parallel coinage review.
// Tamil forms are structural parallels only; they are not Kannada borrow suggestions.
const coinageReviewData = {
  schemaVersion: "1.0",
  scorecard: {
    totalMax: 20,
    dimensions: [
      { id: "short", label: "Short", max: 5, rubric: "1–2 syllables = 5; 3 = 4; 4 = 3; 5 = 2; 6+ = 1" },
      { id: "sayable", label: "Sayable", max: 5, rubric: "Natural Kannada phonotactics = 5; slight strain = 3; difficult = 1" },
      { id: "transparent", label: "Self-explaining", max: 5, rubric: "Transparent morphemes = 5; partly clear = 3; opaque = 1" },
      { id: "slotted", label: "Slotted", max: 5, rubric: "Inflects and compounds naturally = 5; partly = 3; awkward = 1" }
    ],
    verdictRules: {
      pass: "Total ≥15, every dimension ≥3, collision clear, and no auto-fail.",
      conditional: "Total 11–14, or any dimension =2, or collision ambiguous.",
      fail: "Total <11, any dimension =1, collision blocked, or any auto-fail."
    },
    autoFail: ["Sanskrit morpheme", "Perso-Arabic loan", "English loan", "Homophone collision with a common word", "Explanation longer than three words"]
  },
  tamilParallels: [
    { id:"ta-01", source:"ಗ್ರಂಥಾಲಯ", gloss:"Library", candidate:"ಹೊತ್ತಗೆಮನೆ", literal:"book-house", tamil:"நூலகம்", tier:"A", score:18, verdict:"PASS", type:"compound", morphemes:[{form:"ಹೊತ್ತಗೆ",origin:"native"},{form:"ಮನೆ",origin:"native"}], note:"Structural parallel; built only from Kannada morphemes." },
    { id:"ta-02", source:"ಶಾಲೆ", gloss:"School", candidate:"ಕಲಿಮನೆ", literal:"learning-house", tamil:"பள்ளிக்கூடம்", tier:"A", score:19, verdict:"PASS", type:"compound", morphemes:[{form:"ಕಲಿ",origin:"native"},{form:"ಮನೆ",origin:"native"}], note:"Structural parallel; built only from Kannada morphemes." },
    { id:"ta-03", source:"ಆಸ್ಪತ್ರೆ", gloss:"Hospital", candidate:"ಮದ್ದುಮನೆ", literal:"medicine-house", tamil:"மருத்துவமனை", tier:"A", score:18, verdict:"PASS", type:"compound", morphemes:[{form:"ಮದ್ದು",origin:"native"},{form:"ಮನೆ",origin:"native"}], note:"Structural parallel; built only from Kannada morphemes." },
    { id:"ta-04", source:"ವಿಶ್ವವಿದ್ಯಾಲಯ", gloss:"University", candidate:"ಹಲಕಲೆಮನೆ", literal:"many-disciplines-house", tamil:"பல்கலைக்கழகம்", tier:"A", score:16, verdict:"PASS", type:"compound", morphemes:[{form:"ಹಲ",origin:"native"},{form:"ಕಲೆ",origin:"native"},{form:"ಮನೆ",origin:"native"}], note:"Provisional compound; review semantic precision and natural usage." },
    { id:"ta-05", source:"ಪ್ರಜಾಪ್ರಭುತ್ವ", gloss:"Democracy", candidate:"ನಾಡಾಳ್ವಿಕೆ", literal:"country-governance", tamil:"நாடாட்சி", tier:"A", score:16, verdict:"PASS", type:"compound", morphemes:[{form:"ನಾಡು",origin:"native"},{form:"ಆಳ್ವಿಕೆ",origin:"native"}], note:"Structural parallel; check distinction between country-rule and people-rule." },
    { id:"ta-06", source:"ಸ್ವಾತಂತ್ರ್ಯ", gloss:"Freedom", candidate:"ಬಿಡುಗಡೆ", literal:"release / setting free", tamil:"விடுதலை", tier:"B", score:18, verdict:"CONDITIONAL", type:"revival", morphemes:[{form:"ಬಿಡುಗಡೆ",origin:"native"}], note:"Existing native word; proposed extension to the broader abstract sense of freedom needs usage review." },
    { id:"ta-07", source:"ಸಮಾರಂಭ", gloss:"Ceremony", candidate:"ಸಡಗರ", literal:"festive occasion / bustle", tamil:"விழா", tier:"B", score:17, verdict:"PASS", type:"revival", morphemes:[{form:"ಸಡಗರ",origin:"native"}], note:"Existing word; check whether its celebratory register fits all ceremony contexts." },
    { id:"ta-08", source:"ಅಭಿನಂದನೆ", gloss:"Congratulation", candidate:"ಹಾರೈಕೆ", literal:"good wish", tamil:"வாழ்த்து", tier:"B", score:18, verdict:"PASS", type:"revival", morphemes:[{form:"ಹಾರೈಕೆ",origin:"native"}], note:"Existing native form; semantic fit depends on whether congratulations or wishes are intended." },
    { id:"ta-09", source:"ಆಶ್ಚರ್ಯ", gloss:"Surprise", candidate:"ಬೆರಗು", literal:"wonder / amazement", tamil:"வியப்பு", tier:"B", score:19, verdict:"PASS", type:"revival", morphemes:[{form:"ಬೆರಗು",origin:"native"}], note:"Existing native form." },
    { id:"ta-10", source:"ಸಂತೋಷ", gloss:"Happiness", candidate:"ನಲಿವು", literal:"joy / gladness", tamil:"மகிழ்ச்சி", tier:"B", score:18, verdict:"PASS", type:"revival", morphemes:[{form:"ನಲಿವು",origin:"native"}], note:"Existing native form." },
    { id:"ta-11", source:"ಜವಾಬ್ದಾರಿ", gloss:"Responsibility", candidate:"ಹೊಣೆ", literal:"responsibility / charge", tamil:"பொறுப்பு", tier:"B", score:19, verdict:"PASS", type:"revival", morphemes:[{form:"ಹೊಣೆ",origin:"native"}], note:"Also replaces a Perso-Arabic loan; keep origin classification distinct from Sanskrit replacements." },
    { id:"ta-12", source:"ಸ್ಪರ್ಧೆ", gloss:"Competition", candidate:"ಪೈಪೋಟಿ", literal:"rivalry / competition", tamil:"போட்டி", tier:"B", score:17, verdict:"PASS", type:"revival", morphemes:[{form:"ಪೈಪೋಟಿ",origin:"native"}], note:"Verify historical etymology and regional usage before final approval." },
    { id:"ta-13", source:"ಸ್ವಾಗತ", gloss:"Welcome", candidate:"ಬರಮಾಡಿಕೆ", literal:"act of welcoming", tamil:"வரவேற்பு", tier:"B", score:16, verdict:"PASS", type:"revival", morphemes:[{form:"ಬರಮಾಡಿಕೆ",origin:"native"}], note:"Check inflection, register and idiomatic use in real sentences." },
    { id:"ta-14", source:"ಪರೀಕ್ಷೆ", gloss:"Examination", candidate:null, literal:null, tamil:"தேர்வு", tier:"C", score:null, verdict:"GAP", type:"gap", morphemes:[], note:"Do not substitute ತೇರ್ಗಡೆ: it means passing / success, not the examination itself." },
    { id:"ta-15", source:"ಸುದ್ದಿ / ವಾರ್ತೆ", gloss:"News", candidate:null, literal:null, tamil:"செய்தி", tier:"C", score:null, verdict:"GAP", type:"gap", morphemes:[], note:"ಸುದ್ದಿ is treated here as a Sanskrit-derived form; no defensible native replacement supplied yet." },
    { id:"ta-16", source:"ಸಂಸ್ಕೃತಿ", gloss:"Culture", candidate:null, literal:null, tamil:"பண்பாடு", tier:"C", score:null, verdict:"GAP", type:"gap", morphemes:[], note:"Kannada lacks a demonstrated cognate of பண்பு; ನಡವಳಿಕೆ is narrower and not an equivalent." },
    { id:"ta-17", source:"ಪ್ರದೇಶ", gloss:"Region", candidate:null, literal:null, tamil:"பகுதி", tier:"C", score:null, verdict:"GAP", type:"gap", morphemes:[], note:"ಕಡೆ is directional and ನಾಡು means country; neither fills the intended middle sense." },
    { id:"ta-18", source:"ಭಾಷೆ", gloss:"Language", candidate:null, literal:null, tamil:"மொழி", tier:"C", score:null, verdict:"GAP", type:"gap", morphemes:[], note:"ನುಡಿ and மொழி are different roots. Do not present them as cognates." }
  ],
  doNotAttempt: [
    { tamil:"மொழி (moḻi)", kannada:"ನುಡಿ", reason:"Different roots; both are native. Not a cognate pair." },
    { tamil:"மலை (malai)", kannada:"ಬೆಟ್ಟ (beṭṭa)", reason:"Different roots; do not infer cognacy from matching meaning." },
    { tamil:"மரம் (maram)", kannada:"ಮರ (mara)", reason:"Cognates already present; no replacement or new coinage needed." },
    { tamil:"நெய் (ney)", kannada:"ತುಪ್ಪ (tuppa)", reason:"Different roots; same meaning does not establish cognacy." },
    { tamil:"காடு (kāṭu)", kannada:"ಕಾಡು (kāḍu)", reason:"Cognates already present; retain the existing Kannada word." },
    { tamil:"வயிறு (vayiṟu)", kannada:"ಹೊಟ್ಟೆ (hoṭṭe)", reason:"Different roots; do not label them cognates." }
  ]
};
