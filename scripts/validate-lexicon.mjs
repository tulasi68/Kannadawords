import { validateSource } from "./lexicon-lib.mjs";
const { validation } = validateSource();
if (validation.errors.length) {
  console.error(validation.errors.join("\\n"));
  process.exit(1);
}
console.log(`Lexicon valid: ${validation.entryCount} entries, ${validation.candidateCount} candidates.`);
