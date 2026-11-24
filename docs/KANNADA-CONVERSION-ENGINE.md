# Shared Kannada contextual conversion engine

## Purpose

Build one reusable language-processing layer for KannadaWords. It must use the existing vocabulary as its source of preferred words and expressions; it must not replace the vocabulary, create a second dictionary, or require a one-to-one record for every inflected form.

The engine's job is to make a vocabulary alternative fit naturally into its sentence. It must distinguish:

1. lexical selection — which existing alternative preserves the intended sense;
2. morphological analysis — what grammatical form the source word has;
3. morphological generation — how the selected alternative should appear in that grammatical role;
4. contextual rewriting — whether a phrase or sentence needs restructuring rather than a word substitution.

## Repository findings (25 November 2026)

- Canonical vocabulary is maintained in `lexicon-source/entries/*.json` and built into `lexicon-dist/`. Preserve this pipeline and its record identities.
- `lexicon-dist/writing-index.json` is the runtime index for the canonical vocabulary.
- `lexicon-store.js` also loads master, textbook, landing and root-family collections for Tab 4. These sources do not all have the same editorial status.
- `root-families.json` is already loaded by the store. It contains editorially maintained explicit word forms and alternatives; the store comments explicitly say unknown forms are not guessed by suffix stripping.
- `worker/ai-rewrite.js` performs contextual AI rewriting and single-word suggestions. Its prompts request grammatical preservation, but it does not currently expose a separately tested morphological analyser/generator.
- `api/rewrite.js` is a proxy, not a language engine.
- Existing tests cover lexicon integrity, Tab 4 lookup, and AI response contracts. A dedicated morphology/conversion regression corpus is still needed.

## Design principles

### 1. Keep vocabulary data authoritative

Do not delete, rewrite, reclassify or silently promote existing vocabulary records as part of engine development. Keep editorial status and evidence provenance attached to every candidate. In particular, imported or contributor-proposed alternatives must not become verified merely because the engine can use them as suggestions.

The engine consumes a read-only vocabulary interface. It does not own or duplicate the vocabulary.

### 2. Prefer linguistic analysis over suffix copying

A Kannada word may contain a lexical stem, derivational material, number, case marking, clitics and sandhi/phonological alternations. A suffix-looking substring is not sufficient proof of a morpheme boundary.

The analyser should return ranked hypotheses with offsets, not pretend every surface form has one certain segmentation. It should prefer:
- an exact, editorially supplied surface form;
- a known root-family form;
- a morphology analysis whose stem is independently found in the vocabulary;
- otherwise, an unresolved result.

Never strip an arbitrary suffix and substitute the remainder.

### 3. Generate by grammatical class, not by word-pair list

The generator should use validated inflection paradigms/classes (for example, noun-stem behaviour and case/number features), not a separate source-word → replacement-word mapping for every surface form.

Some alternatives will have irregular or lexicalised forms. Those require candidate-level exceptions or explicit paradigm metadata; exceptions must not become the default architecture.

Do not transfer an ending blindly. If the source and replacement belong to different inflection classes, the generator must select the replacement's own form.

### 4. Context decides whether a replacement is suitable

The same source spelling can have different senses and syntactic roles. Candidate ranking must consider:
- the entry's sense and meaning;
- sentence role and local collocations;
- candidate usage notes and naturalness;
- editorial/review status and evidence;
- whether the proposed generated form is licensed by a known paradigm.

Historical origin alone is not enough to rank a candidate as the best replacement.

### 5. Conservative fallback

If sense, segmentation or generated form is uncertain, leave the source unchanged or return alternatives for human review. Do not output an awkward form merely to maximise replacement coverage.

## Target processing pipeline

```text
Input text
  -> Kannada-aware tokenisation and span preservation
  -> exact surface-form / root-family lookup
  -> morphological analysis (ranked stem + feature hypotheses)
  -> contextual sense and candidate ranking
  -> candidate-specific morphological generation
  -> sentence-level fluency / meaning check when needed
  -> output + traceable explanation + confidence
```

The output contract should retain:
- original text and exact source span;
- vocabulary entry/candidate IDs and source collection;
- analysis: lemma/stem, suffix sequence, grammatical features and confidence;
- selected candidate and generated form;
- generation rule/paradigm ID;
- evidence/review status;
- reason for leaving a word unchanged when applicable.

## Shared API boundary

The first runtime API should be pure and independent of browser UI:

- `tokenizeKannada(text)` — return stable UTF-16 spans and NFC-normalised token values without changing the source string.
- `lookupSurface(token, vocabulary)` — exact forms first, then explicitly registered root-family forms.
- `analyzeInflection(token, knownStems)` — return ranked analyses; no unverified stem is accepted merely because a suffix was removed.
- `rankCandidates(analysis, context, candidates)` — exclude candidates that cannot express the required sense or grammatical features.
- `generateForm(candidate, features, paradigmRegistry)` — return a form only when a validated paradigm or candidate exception supports it.
- `convertText(text, vocabulary, options)` — produce proposed edits with offsets; never mutate input text.

The website, Tab 4 and browser extensions should call this shared contract. They must not maintain separate conversion dictionaries or morphology rules.

## Integration sequence

### Phase A — Language data and test corpus
- Preserve all existing vocabulary records.
- Audit the shape and status of root-family data and the multiple Tab 4 lookup collections.
- Build a reviewed corpus of real Kannada sentences covering noun cases, plurals, possessives, verbs, compounds, clitics, punctuation and mixed Kannada/English text.
- Have each expected analysis and generated form reviewed by a Kannada linguist/editor.

### Phase B — Local morphology core
- Implement Unicode-safe tokenisation and span tracking.
- Add exact-form and known-root analysis.
- Add ranked suffix hypotheses with ambiguity reporting.
- Add paradigm-driven generation only for reviewed classes.
- Add property and regression tests; unknown or ambiguous forms must remain unchanged.

### Phase C — Context and ranking
- Reuse existing vocabulary candidates and their editorial metadata.
- Add context-aware sense ranking.
- Use the existing Cloudflare Worker selectively for sentence-level disambiguation and rewriting, not on every keystroke.
- Validate model suggestions against the vocabulary and morphology contract before presenting them.

### Phase D — Shared integration
- Integrate Tab 4 first and compare against its existing behaviour.
- Then expose the same versioned engine/data contract to the browser extension.
- Add the future inline assistant only after editor-span and undo behaviour is tested.
- Do not send text to AI while the user types. Any contextual server request must be explicit and privacy-transparent.

## Acceptance criteria

1. No canonical vocabulary record is removed or silently changed.
2. Inflected forms can be analysed without adding every surface form as a vocabulary row.
3. Generated alternatives use the replacement's own validated inflection class.
4. Ambiguous morphology is represented as ambiguity, not hidden by a guess.
5. Unknown forms remain unchanged.
6. Candidate ranking considers sense, usage and editorial status.
7. AI output cannot claim verified etymology or bypass candidate status.
8. Every proposed replacement can be traced to its source entry/candidate and generation rule.
9. Tab 4, the news converter and inline assistant share one engine contract.
10. Existing lexicon build, schema and tests continue to pass.

## Explicit non-goals for the first release

- Do not train a new language model.
- Do not claim full Kannada dependency parsing or complete morphology coverage.
- Do not use raw suffix replacement as a substitute for morphology.
- Do not make automatic edits in the browser.
- Do not change the existing vocabulary's editorial classifications.
