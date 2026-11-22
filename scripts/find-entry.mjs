import path from "node:path";
import { ROOT, loadSource } from "./lexicon-lib.mjs";

const query = process.argv.slice(2).join(" ").trim().normalize("NFC");
if (!query) {
  console.error('Usage: npm run lexicon:find -- "Kannada form, source form or entry ID"');
  process.exit(2);
}
const needle = query.toLocaleLowerCase();
const { entries } = loadSource();
const matches = [];
for (const entry of entries) {
  const candidates = entry.candidates.filter(candidate =>
    [candidate.form,candidate.note,...candidate.comparativeEvidence.map(item=>item.form)]
      .some(value => String(value||"").normalize("NFC").toLocaleLowerCase().includes(needle))
  );
  const entryMatch = [entry.id,entry.sourceForm,entry.sourceMeaning,entry.category]
    .some(value => String(value||"").normalize("NFC").toLocaleLowerCase().includes(needle));
  if (entryMatch || candidates.length) {
    const part = path.relative(ROOT, path.join(ROOT,"lexicon-source/entries"));
    matches.push({entry,candidates,source:part+"/part-"+String(Math.floor(entries.indexOf(entry)/50)+1).padStart(3,"0")+".json"});
  }
}
if (!matches.length) {
  console.log("No matching lexicon records.");
  process.exit(0);
}
for (const match of matches) {
  const e=match.entry;
  console.log(`[${e.id}] ${e.sourceForm} — ${e.sourceMeaning} (${e.category})`);
  console.log("  Source shard: "+match.source);
  for (const candidate of (match.candidates.length?match.candidates:e.candidates)) {
    console.log("  • "+candidate.form+" ["+candidate.id+"] · "+candidate.reviewStatus);
  }
}
console.log(`\\n${matches.length} matching entries.`);
