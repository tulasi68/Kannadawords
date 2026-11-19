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
    id:candidate.id,form:candidate.word,candidateKind:"unclassified",reviewStatus:"needs_review",
    note:candidate.note||"",etymologyParts:candidate.etymologyParts||[],viability:candidate.viability||null,
    comparativeEvidence:[["ta",candidate.tamil],["tcy",candidate.tulu],["proto-dravidian",candidate.proto]]
      .filter(([,form])=>typeof form==="string"&&form.trim())
      .map(([language,form])=>({language,form,relationship:"unclassified",status:"not_assessed",sourceRefs:[]})),
    evidenceVariants:candidate.evidenceVariants||{},
    flags:{noAlternative:!!candidate.isNoAlternative,outsideTargetOrigin:!!candidate.isScopeAudit},
    provenance:{sourceDatasets:unique([candidate.sourceDataset,...(candidate.sources||[])]),sourceRefs:[]},
    editorial:{note:candidate.editorialNote||"",reviewedBy:null,reviewedAt:null},
    legacyFields:extras(candidate,candidateMapped)
  };
}
function migrateEntry(entry) {
  return {
    id:entry.id,sourceForm:entry.sanskrit||entry.sourceForm||"",sourceMeaning:entry.meaning||entry.sourceMeaning||"",
    category:entry.category||"Uncategorised",sourceEtymology:entry.sourceEtymology||null,
    candidates:(entry.alternatives||[]).map(migrateCandidate),
    historicalEvidence:{form:entry.halegannada||null,status:"not_assessed",sourceRefs:[],note:entry.halegannadaEvidence?.note||"",legacyEvidence:entry.halegannadaEvidence||null,legacyVariants:entry.halegannadaVariants||[]},
    scope:{noAlternative:!!entry.noAlternative,outsideTargetOrigin:!!entry.scopeAudit,note:entry.scopeNote||""},
    rejectedCandidates:entry.rejectedAlternatives||[],
    editorial:{reviewStatus:"needs_review",note:entry.editorialNote||"",reviewedBy:null,reviewedAt:null},
    provenance:{sourceDatasets:unique([entry.sourceDataset,...(entry.sources||[])]),sourceRefs:[]},
    legacyFields:extras(entry,entryMapped)
  };
}
const migrated = snapshot.entries.map(migrateEntry);
const importSnapshot = JSON.stringify({schemaVersion:2,entries:migrated});
const baselinePath = path.join(root,"migration/v2-import-snapshot.json");
const check = process.argv.includes("--check");
if (check) {
  if (!fs.existsSync(baselinePath) || fs.readFileSync(baselinePath,"utf8") !== importSnapshot) {
    console.error("Legacy v1 → canonical v2 migration baseline is missing or stale.");
    process.exit(1);
  }
  console.log(`Legacy migration check passed: ${migrated.length} entries, ${migrated.reduce((n,e)=>n+e.candidates.length,0)} candidates.`);
} else {
  fs.mkdirSync(path.dirname(baselinePath),{recursive:true});
  fs.writeFileSync(baselinePath,importSnapshot);
  for (let i=0;i<migrated.length;i+=50) {
    const part=String(Math.floor(i/50)+1).padStart(3,"0");
    const relative=`lexicon-source/entries/part-${part}.json`;
    const file=path.join(root,relative);
    fs.mkdirSync(path.dirname(file),{recursive:true});
    fs.writeFileSync(file,JSON.stringify({schemaVersion:2,entries:migrated.slice(i,i+50)},null,2));
  }
  console.log(`Legacy migration written: ${migrated.length} entries, ${migrated.reduce((n,e)=>n+e.candidates.length,0)} candidates.`);
}
