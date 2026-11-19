#!/usr/bin/env node
/**
 * Read-only inventory of the live legacy vocabulary pipeline.
 * Replays the data scripts in index.html order, then evaluates the data/merge
 * portion of app.js in a VM with a minimal DOM stub. It writes no legacy files.
 *
 * Usage: node scripts/audit-legacy-vocabulary.mjs [--json]
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = name => fs.readFileSync(path.join(ROOT, name), "utf8");
const dataFiles = [
  "data.js", "sentence-examples.js", "contextual-examples.js",
  "etymology-entries.js", "contributor-equivalents.js", "coinage-review.js"
];

const sandbox = {
  console,
  window: { KANNADA_MODERATION_API: "" },
  document: { getElementById: () => null },
  localStorage: { getItem: () => null, setItem: () => {} },
  setTimeout,
  clearTimeout
};
vm.createContext(sandbox, { name: "kannadawords-legacy-audit" });

for (const file of dataFiles) {
  if (!fs.existsSync(path.join(ROOT, file))) {
    throw new Error("Expected data file is missing: " + file);
  }
  vm.runInContext(read(file), sandbox, { filename: file, timeout: 5000 });
}

const app = read("app.js");
const mergeEnd = app.indexOf("\nfunction loadState()");
if (mergeEnd < 0) {
  throw new Error("Could not find app.js merge boundary; stopped without guessing.");
}
vm.runInContext(app.slice(0, mergeEnd), sandbox, {
  filename: "app.js (data and merge section)",
  timeout: 10000
});

const snapshot = vm.runInContext("(() => {" +
  "const split = value => String(value || '').normalize('NFC')" +
    ".split(/[,;|]/u).flatMap(v => v.split(String.fromCharCode(47))).flatMap(v => v.split(' ಅಥವಾ ')).map(v => v.trim()).filter(Boolean);" +
  "const unique = values => [...new Set(values)];" +
  "const sourceForms = entry => unique([" +
    "...split(entry.sanskrit || entry.sourceForm)," +
    "...split(entry.sourceEtymology && entry.sourceEtymology.form)]);" +
  "const all = votingEntries || [];" +
  "const eligible = all.filter(e => !e.noAlternative && !e.scopeAudit &&" +
    " Array.isArray(e.alternatives) && e.alternatives.some(a => a.word && !a.isNoAlternative && !a.isScopeAudit));" +
  "const allForms = unique(all.flatMap(sourceForms));" +
  "const eligibleForms = unique(eligible.flatMap(sourceForms));" +
  "return {" +
    "raw: {" +
      "wordEntries: wordEntries.length," +
      "halegannadaEntries: halegannadaEntries.length," +
      "auditedWordEntries: auditedWordEntries.length," +
      "originAuditTopLevelRecords: originAuditEntries.length," +
      "noAlternativeEntries: noAlternativeEntries.length," +
      "contributorWordEntries: contributorWordEntries.length" +
    "}," +
    "merged: {" +
      "votingRecords: all.length," +
      "uniqueSourceFormsIncludingAuditOnly: allForms.length," +
      "uniqueSourceFormsWithAlternatives: eligibleForms.length," +
      "recordsWithNoAlternative: all.filter(e => e.noAlternative).length," +
      "scopeAuditRecords: all.filter(e => e.scopeAudit).length," +
      "alternativeCandidateRecords: all.reduce((n,e) => n + (e.alternatives || []).filter(a => a.word && !a.isNoAlternative && !a.isScopeAudit).length, 0)" +
    "}," +
    "sourceForms: allForms.sort((a,b) => a.localeCompare(b, 'kn'))," +
    "scopeAuditForms: unique(all.filter(e => e.scopeAudit).flatMap(sourceForms)).sort((a,b) => a.localeCompare(b, 'kn'))" +
  "};" +
"})()", sandbox);

const report = {
  generatedAt: new Date().toISOString(),
  method: "Replay index.html data script order and app.js merge section in an isolated Node VM",
  dataFiles,
  ...snapshot
};

if (process.argv.includes("--json")) {
  process.stdout.write(JSON.stringify(report, null, 2) + "\n");
} else {
  console.log("KannadaWords legacy vocabulary audit (read-only)");
  console.log("Data files: " + dataFiles.join(", "));
  console.log("\nRaw source records:");
  for (const [name, count] of Object.entries(report.raw)) console.log("  " + name + ": " + count);
  console.log("\nMerged inventory:");
  for (const [name, count] of Object.entries(report.merged)) console.log("  " + name + ": " + count);
  console.log("\nNo files were modified. Use --json for the complete normalised source-form inventory.");
}
