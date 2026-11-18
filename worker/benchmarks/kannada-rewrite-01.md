# Kannada rewrite benchmark 01

## Purpose

This is a repeatable editorial-quality check for the fourth tab, **ಅಚ್ಚ ಕನ್ನಡದಲ್ಲಿ ಮರುಹೇಳಿ**. It is not a gold translation and does not prescribe one exact rewrite. Evaluate whether the model preserves meaning while producing natural Kannada.

## Input passage

ಔತಣಕೂಟವನ್ನು ಆಯೋಜಿಸಲಾಗಿತ್ತು. ಆವೇಳೆ, ಪ್ರಧಾನಮಂತ್ರಿ ನರೇಂದ್ರ ಮೋದಿ ಸೇರಿದಂತೆ ಹಲವು ಜಾಗತಿಕ ನಾಯಕರು, ವಿಶೇಷವಾಗಿ ಅಲಂಕರಿಸಲ್ಪಟ್ಟ ತ್ರಿಚಕ್ರ ವಾಹನದಲ್ಲಿ ಸವಾರಿ ಮಾಡಿದ್ದರು. ಫಿಲಿಪೈನ್ಸ್’ನ ಸಾಂಪ್ರದಾಯಿಕ ಜೀಪ್ನಿ ಶೈಲಿನ ಕಲಾಕೃತಿಗಳನ್ನು ಒಳಗೊಂಡಿದ್ದ ವರ್ಣರಂಜಿತ ವಾಹನಗಳನ್ನು ಶೃಂಗಸಭೆಯ ಭಾಗವಾಗಿ ಅತಿಥೇಯ ರಾಷ್ಟ್ರ ಆಯೋಜನೆಯನ್ನು ಮಾಡಿತ್ತು. ಈ ವಿಶೇಷವಾಗಿ ಅಲಂಕರಿಸಿದ ಆಟೋ, ಪಾಕಿಸ್ತಾನ ನಿರ್ಮಿತ ಎನ್ನುವ ಸುಳ್ಳು ಸುದ್ದಿಯನ್ನು ಹರಿಯ ಬಿಡಲಾಗಿತ್ತು.

## Editorial acceptance checks

A satisfactory result should:

1. Preserve the event, the named people and countries, the jeepney reference, the vehicles, and the claim that a false story was circulated.
2. Correct the misspelling **ಅತಿಥೇಯ** to **ಆತಿಥೇಯ** where the intended meaning is “host”.
3. Correct **ಹರಿಯ ಬಿಡಲಾಗಿತ್ತು** to a natural expression such as **ಹರಡಲಾಗಿತ್ತು**.
4. Rewrite the awkward construction **ಆಯೋಜನೆಯನ್ನು ಮಾಡಿತ್ತು** as a natural Kannada verb phrase without changing who arranged the vehicles.
5. Correct **ಜೀಪ್ನಿ ಶೈಲಿನ** to a grammatically natural form such as **ಜೀಪ್ನಿ ಶೈಲಿಯ**.
6. Preserve the intended number and relationship of the vehicles and riders; do not invent extra details.
7. Avoid forced substitutions of established words such as **ಔತಣಕೂಟ**, **ಪ್ರಧಾನಮಂತ್ರಿ**, **ಶೃಂಗಸಭೆ**, **ಸಾಂಪ್ರದಾಯಿಕ**, or **ವರ್ಣರಂಜಿತ** unless a clearly better and contextually accurate alternative is justified.
8. Distinguish spelling/grammar edits from claims about Sanskrit or Dravidian etymology. Do not present uncertain word origins as verified.
9. Return the complete rewritten passage and concise Kannada explanations in the expected JSON shape.

## Review record

For each model/prompt revision, record:
- model identifier and date;
- completion time and whether the JSON was complete;
- fluency and grammatical naturalness;
- meaning preservation and factual fidelity;
- unnecessary replacements;
- unsupported etymological claims;
- reviewer decision and corrections.

A model is not accepted solely because it returns valid JSON or finishes quickly. Kannada editorial quality and meaning preservation are the deciding criteria.
