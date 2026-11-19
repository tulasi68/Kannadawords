import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const snapshot = JSON.parse(fs.readFileSync(path.join(root,"migration/legacy-v1-snapshot.json"),"utf8"));
const entryMapped = new Set(["id","sanskrit","meaning","category","alternatives","sourceEtymology","halegannada","halegannadaEvidence","halegannadaVariants","noAlternative","scopeAudit","scopeNote","rejectedAlternatives","editorialNote"]);
const candidateMapped = new Set(["id","word","note","etymologyParts","viability","tamil","tulu","proto","evidenceVariants","isNoAlternative","isScopeAudit"]);
const extras = (value, mapped) => Object.fromEntries(Object.entries(value).filter(([key])=>!mapped.has(key)));
const unique = values => [...new Set(values.filter(value=>typeof value==="string"&&value.trim()))];

function migrateCandidate(candidate) {
  return {
    id:candidate.id,
    form:candidate.word,
    candidateKind:"unclassified",
    reviewStatus:"needs_review",
    note:candidate.note||"",
    etymologyParts:candidate.etymologyParts||[],
    viability:candidate.viability||null,
    comparativeEvidence:[["ta",candidate.tamil],["tcy",candidate.tulu],["proto-dravidian",candidate.proto]]
      .filter(([,form])=>typeof form==="string"&&form.trim())
      .map(([language,form])=>({language,form,relationship:"unclassified",status:"not_assessed",sourceRefs:[]})),
    evidenceVariants:candidate.evidenceVariants||{},
    flags:{noAlternative:!!candidate.isNoAlternative,outsideTargetOrigin:!!candidate.isScopeAudit},
    provenance:{sourceDatasets:unique([candidate.sourceDataset,...(candidate.sources||[])]),sourceRefs:[]},
    editorial:{reviewStatus:"needs_review",note:candidate.editorialNote||""},
    legacyFields:extras(candidate,candidateMapped)
  };
}
function migrateEntry(entry) {
  return {
    id:entry.id,
    sourceForm:entry.sanskrit||entry.sourceForm||"",
    sourceMeaning:entry.meaning||entry.sourceMeaning||"",
    category:entry.category||"Uncategorised",
    sourceEtymology:entry.sourceEtymology||null,
    candidates:(entry.alternatives||[]).map(migrateCandidate),
    historicalEvidence:{
      form:entry.halegannada||null,status:"not_assessed",sourceRefs:[],
      note:entry.halegannadaEvidence?.note||"",
      legacyEvidence:entry.halegannadaEvidence||null,
      legacyVariants:entry.halegannadaVariants||[]
    },
    scope:{noAlternative:!!entry.noAlternative,outsideTargetOrigin:!!entry.scopeAudit,note:entry.scopeNote||""},
    rejectedCandidates:entry.rejectedAlternatives||[],
    editorial:{reviewStatus:"needs_review",note:entry.editorialNote||"",reviewedBy:null,reviewedAt:null},
    provenance:{sourceDatasets:unique([entry.sourceDataset,...(entry.sources||[])]),sourceRefs:[]},
    legacyFields:extras(entry,entryMapped)
  };
}
const migrated = snapshot.entries.map(migrateEntry);
const shardSize = 50;
const expected = new Map();
for (let i=0;i<migrated.length;i+=shardSize) {
  const part=String(Math.floor(i/shardSize)+1).padStart(3,"0");
  expected.set(`lexicon-source/entries/part-${part}.json`,JSON.stringify({schemaVersion:2,entries:migrated.slice(i,i+shardSize)},null,2));
}
const check = process.argv.includes("--check");
let failed = false;
for (const [relative,content] of expected) {
  const file=path.join(root,relative);
  if (check) {
    if (!fs.existsSync(file)||fs.readFileSync(file,"utf8")!==content) {
      console.error(`Migrated source is missing or stale: ${relative}`);
      failed=true;
    }
  } else {
    fs.mkdirSync(path.dirname(file),{recursive:true});
    fs.writeFileSync(file,content);
  }
}
if (failed) process.exit(1);
console.log(`Legacy migration ${check?"check":"write"} passed: ${migrated.length} entries, ${migrated.reduce((n,e)=>n+e.candidates.length,0)} candidates.`);
