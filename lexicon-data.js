/* KannadaWords display dataset assembly (compatibility stage).
 * This is the single boundary between legacy editorial inputs and the UI.
 * The vocabulary UI must consume only votingEntries from this file.
 * Do not add a second merge or category transformation inside app.js.
 *
 * Next migration stage: replace these legacy-source adapters with canonical
 * versioned lexicon records. Until then, preserve the existing display logic
 * here so the rendered dataset has one inspectable definition.
 */
// Merge the audited set into existing cards (rather than duplicating them),
// then append new terms and the explicitly labelled no-alternative records.
// The 109 supplemental records were appended as a nested array inside originAuditEntries.
 // Flatten that nested array and merge those records into the same voting dataset as the original audited entries.
const existingOriginRecords = [
  ...(typeof auditedWordEntries === "undefined" ? [] : auditedWordEntries.map(item => ({...item, sourceDataset:"etymology-entries.js:audited"}))),
  ...(typeof originAuditEntries === "undefined" ? [] : originAuditEntries).flatMap(item => {
    if (Array.isArray(item)) return item.filter(record => record && record.id && record.sourceForm).map(record => ({...record, sourceDataset:"etymology-entries.js:origin-audit"}));
    return item && item.id && item.sourceForm && item.sourceMeaning && Array.isArray(item.alternatives)
      ? [{...item, sourceDataset:"etymology-entries.js:origin-audit"}] : [];
  })
];
const lexicalFormKey = value => String(value || "").normalize("NFC").replace(/\s+/g, "");
const lexicalFormParts = value => String(value || "")
  .split(/\s*(?:\/|,|;|\|| ಅಥವಾ )\s*/u)
  .map(lexicalFormKey).filter(Boolean);
const contributorEntriesForMerge = (typeof contributorWordEntries === "undefined" ? [] : contributorWordEntries).map(item => {
  const key = lexicalFormKey(item.sourceForm);
  const existingBase = wordEntries.find(entry => lexicalFormParts(entry.sanskrit).includes(key));
  const matchingAudits = existingOriginRecords.filter(entry =>
    lexicalFormParts(entry.sourceForm).includes(key) ||
    lexicalFormParts(entry.sourceEtymology && entry.sourceEtymology.form).includes(key)
  );
  const existingAudit = matchingAudits.find(entry => existingBase && entry.id === existingBase.id) ||
    (!existingBase ? matchingAudits[0] : null);
  const existing = existingAudit || existingBase;
  return {
    ...item,
    id: existing && existing.id ? existing.id : item.id,
    sourceForm: existingAudit && existingAudit.sourceForm ? existingAudit.sourceForm : item.sourceForm,
    sourceMeaning: existingAudit && existingAudit.sourceMeaning ? existingAudit.sourceMeaning :
      (existingBase && existingBase.meaning ? existingBase.meaning : item.sourceMeaning),
    sourceEtymology: existingAudit && existingAudit.sourceEtymology ? existingAudit.sourceEtymology :
      (existingBase && existingBase.sourceEtymology ? existingBase.sourceEtymology : item.sourceEtymology),
    contributorSupplied: true,
    sourceDataset: "contributor-equivalents.js"
  };
});
const allAuditedWordEntries = [
  ...existingOriginRecords,
  ...contributorEntriesForMerge
];
const auditedById = allAuditedWordEntries.reduce((map, item) => {
  map[item.id] = typeof lexiconMergeEntryRecords === "function"
    ? lexiconMergeEntryRecords(map[item.id], item)
    : (map[item.id] ? { ...map[item.id], ...item,
        alternatives: [...(map[item.id].alternatives || []), ...(item.alternatives || [])]
          .filter((alt, index, all) => all.findIndex(candidate => candidate.word === alt.word) === index)
      } : item);
  // Preserve the original source-etymology precedence for contributor overlays.
  if (item.contributorSupplied && map[item.id]) {
    map[item.id].sourceEtymology = map[item.id].sourceEtymology || item.sourceEtymology;
  }
  return map;
}, {});

// Keep the category taxonomy aligned with the subject of each audited word.
// These IDs are from etymology-entries.js; matching original records retain
// their established data.js category unless an explicit mapping is listed.
const auditedCategoryById = {
  house:"Everyday", village:"Society", city:"Society", nation:"Society",
  government:"Civic", board:"Civic", law:"Civic", justice:"Civic", judgment:"Civic",
  director:"People", assistant:"People", process:"Civic", democracy:"Civic",
  election:"Civic", question:"Abstract", answer:"Abstract", north:"Directions",
  south:"Directions", east:"Directions", west:"Directions", citizen:"Society",
  public:"Society", responsibility:"Society", medicine:"Body", disease:"Body",
  treatment:"Body", family:"People", welfare:"Society", women:"People",
  accommodation:"Everyday", food:"Everyday", snack:"Everyday", student:"Education",
  school:"Education", library:"Education", university:"Education", language:"Abstract",
  grammar:"Education", culture:"Society", literature:"Education", music:"Society",
  water:"Nature", electricity:"Technology", station:"Technology", forest:"Nature",
  environment:"Nature", soil:"Nature", river:"Nature", sea:"Nature", mountain:"Nature",
  bridge:"Technology", publicity:"Society", speech:"Abstract", officer:"People",
  chief:"People", division:"Civic", constitution:"Civic", office:"Civic",
  punishment:"Civic", commission:"Civic", nutrition:"Body", department:"Civic",
  minister:"People", health:"Body", news:"Society", disability:"People",
  doctor:"People", freedom:"Society", interview:"Society", fruit:"Everyday", moon:"Nature", body:"Body", joy:"Abstract", sorrow:"Abstract", love:"Abstract", fear:"Abstract", desire:"Abstract", dream:"Abstract", woman:"People", man:"People", boy:"People", girl:"People", army:"Society", war:"Society", peace:"Society", authority:"Civic", education:"Education", mathematics:"Education", science:"Education", word:"Abstract", sound:"Abstract", problem:"Abstract", help:"Abstract", progress:"Society", development:"Society", system:"Civic", connection:"Abstract", newspaper:"Society"
};
const supplementalCategoryById = {"supp-nose":"Body","supp-tongue":"Body","supp-finger":"Body","supp-nail-finger":"Body","supp-hair":"Body","supp-head":"Body","supp-face":"Body","supp-heart":"Body","supp-stomach":"Body","supp-blood":"Body","supp-bone":"Body","supp-breath":"Body","supp-body":"Body","supp-disease":"Body","supp-star":"Nature","supp-cloud":"Nature","supp-river":"Nature","supp-forest":"Nature","supp-leaf":"Nature","supp-fruit":"Nature","supp-seed":"Nature","supp-root":"Nature","supp-grass":"Nature","supp-rock-boulder":"Nature","supp-stone":"Nature","supp-silver":"Nature","supp-poison":"Nature","supp-light-brightness":"Nature","supp-darkness":"Nature","supp-cold":"Nature","supp-smoke":"Nature","supp-flame":"Nature","supp-sand":"Nature","supp-direction":"Nature","supp-man-male":"People","supp-boy-child":"People","supp-old-person":"People","supp-friend":"People","supp-enemy":"People","supp-people":"People","supp-subject-citizen":"People","supp-infant":"People","supp-wife":"People","supp-husband":"People","supp-brother":"People","supp-relative":"People","supp-teacher":"People","supp-city":"Society","supp-door":"Society","supp-bed":"Society","supp-ornament":"Society","supp-sandal-footwear":"Society","supp-marriage":"Society","supp-property":"Society","supp-debt":"Society","supp-price":"Society","supp-pot":"Society","supp-wealth-money":"Society","supp-dam-bund":"Society","supp-honey":"Everyday","supp-ghee":"Everyday","supp-salt":"Everyday","supp-cooked-rice":"Everyday","supp-meal":"Everyday","supp-lake-tank":"Everyday","supp-hunger":"Everyday","supp-time":"Everyday","supp-day":"Everyday","supp-daytime":"Everyday","supp-month":"Everyday","supp-evening-dusk":"Everyday","supp-morning":"Everyday","supp-noon":"Everyday","supp-beginning":"Everyday","supp-end":"Everyday","supp-half":"Everyday","supp-knowledge":"Abstract","supp-memory":"Abstract","supp-sight-view":"Abstract","supp-desire":"Abstract","supp-love":"Abstract","supp-fear":"Abstract","supp-sorrow":"Abstract","supp-comfort-ease":"Abstract","supp-strength":"Abstract","supp-intellect":"Abstract","supp-mind":"Abstract","supp-life-breath-self":"Abstract","supp-anger":"Abstract","supp-joy":"Abstract","supp-work":"Abstract","supp-question":"Abstract","supp-help":"Abstract","supp-beginning-act":"Abstract","supp-journey":"Abstract","supp-number":"Abstract","supp-birth":"Abstract","supp-death":"Abstract","supp-learning":"Education","supp-book":"Education","supp-letter-script":"Education","supp-word":"Education","supp-sound-noise":"Education","supp-medicine":"Education","supp-doctor":"Education","supp-war":"Education","supp-load-weight":"Education","supp-service":"Education","supp-story":"Education","nose":"Body","head":"Body","hair":"Body","blood":"Body","friend":"People","cloud":"Nature"};
const categoryForAudited = item => auditedCategoryById[item.id] || supplementalCategoryById[item.id] || item.category || "Abstract";
const votingEntries = wordEntries.map(entry => {
  const audit = auditedById[entry.id];
  return audit ? {
    ...entry,
    sanskrit: audit.sourceForm,
    meaning: audit.sourceMeaning || entry.meaning,
    category: categoryForAudited(audit) || entry.category,
    sourceEtymology: audit.sourceEtymology,
    alternatives: (typeof lexiconMergeCandidateRecords === "function"
      ? lexiconMergeCandidateRecords([
          ...(entry.alternatives || []).map(candidate => ({...candidate, sourceDataset:"data.js"})),
          ...(audit.alternatives || []).map(candidate => ({...candidate, sourceDataset:audit.sourceDataset || "etymology-entries.js"}))
        ])
      : [...(entry.alternatives || []), ...(audit.alternatives || [])]
          .filter((alt, index, all) => all.findIndex(candidate => candidate.word === alt.word) === index))
      .map(alt => {
        // Candidate-level merge fills missing comparative fields without losing votes/IDs.
        const base = (entry.alternatives || []).find(candidate =>
          candidate.word === alt.word || candidate.id === alt.id
        ) || {};
        return {
          ...base, ...alt,
          id: base.id || alt.id,
          tamil: alt.tamil || base.tamil || null,
          tulu: alt.tulu || base.tulu || null,
          proto: alt.proto || base.proto || null
        };
      }),
    halegannada: audit.halegannada || entry.halegannada,
    halegannadaEvidence: audit.halegannadaEvidence || entry.halegannadaEvidence,
    rejectedAlternatives: audit.rejectedAlternatives || [],
    editorialNote: audit.editorialNote || ""
  } : entry;
}).concat(Object.values(auditedById)
  // auditedById is already the merged, one-record-per-stable-ID view.
  // Appending the raw source rows here duplicated entries whenever multiple
  // contributor/research rows resolved to the same existing ID.
  .filter(item => !wordEntries.some(entry => entry.id === item.id))
  .map(item => ({...item, sanskrit:item.sourceForm, meaning:item.sourceMeaning, category:categoryForAudited(item), rejectedAlternatives:item.rejectedAlternatives || []})))
  .concat((typeof noAlternativeEntries === "undefined" ? [] : noAlternativeEntries).map(item => ({
    id:"no-alt-" + item.id,
    sanskrit:item.sourceForm,
    meaning:item.meaning,
    category:"No viable native alternative",
    sourceEtymology:item.etymologyParts || [{form:item.sourceForm,etymology:item.etymology}],
    rejectedAlternatives:item.rejected || [],
    editorialNote:item.note,
    noAlternative:true,
    alternatives:[{id:"no-alternative",word:"No viable native alternative",note:"Community position — vote to agree or propose a candidate",isNoAlternative:true,viability:"no_alternative",etymologyParts:[]}]
  })))
  .concat((typeof originAuditEntries === "undefined" ? [] : originAuditEntries).filter(item => !Array.isArray(item) && item && item.id && item.sourceForm && !(item.sourceMeaning && Array.isArray(item.alternatives))).map(item => ({
    id:"scope-" + item.id,
    sanskrit:item.sourceForm,
    meaning:item.meaning,
    category:"Origin audit",
    sourceEtymology:item.etymologyParts || [{form:item.sourceForm,etymology:item.etymology}],
    editorialNote:(item.note || "") + (item.proposedClassification ? " Proposed classification: " + item.proposedClassification + " (unverified)." : ""),
    scopeAudit:true,
    alternatives:[{id:"scope-audit",word:"Outside Sanskrit-origin scope",note:"This item should not be counted as a Sanskrit-derived target until its origin is confirmed.",isScopeAudit:true,viability:"scope_audit",etymologyParts:[]}]
  })));
