#!/usr/bin/env node
// Validate the curated, word-by-word etymology data before deployment.
const fs = require("node:fs");
const vm = require("node:vm");

const source = fs.readFileSync("etymology-entries.js", "utf8");
const context = {};
vm.runInNewContext(source + "\n;globalThis.__auditData = { auditedWordEntries, noAlternativeEntries, originAuditEntries };", context);
const data = context.__auditData;
const allowed = new Set(["dravidian", "sanskrit_tatsama", "sanskrit_tadbhava", "perso_arabic", "english", "coinage", "unknown"]);
const errors = [];
const checkParts = (parts, where, required = true) => {
  if (!Array.isArray(parts) || (required && parts.length === 0)) {
    errors.push(where + ": missing component-level etymology breakdown");
    return false;
  }
  let valid = true;
  for (const part of parts) {
    if (!part || typeof part.form !== "string" || !part.form.trim() || !allowed.has(part.etymology)) {
      errors.push(where + ": invalid component " + JSON.stringify(part));
      valid = false;
    }
  }
  return valid;
};
const isDravidianOnly = parts => parts.every(part =>
  part.etymology === "dravidian" ||
  (part.etymology === "coinage" && part.builtFromDravidian === true)
);

for (const entry of data.auditedWordEntries) {
  const label = "auditedWordEntries[" + entry.id + "]";
  const sources = Array.isArray(entry.sourceEtymology) ? entry.sourceEtymology : [entry.sourceEtymology];
  checkParts(sources, label + ".sourceEtymology");
  for (const alt of entry.alternatives || []) {
    const partsValid = checkParts(alt.etymologyParts, label + ".alternative[" + alt.word + "]");
    if (partsValid && alt.viability === "clean" && !isDravidianOnly(alt.etymologyParts)) {
      errors.push(label + ": clean alternative " + alt.word + " contains a non-Dravidian component");
    }
    if (partsValid && alt.viability === "coinage" && !isDravidianOnly(alt.etymologyParts)) {
      errors.push(label + ": coinage " + alt.word + " is not built entirely from Dravidian components");
    }
    if (!["clean", "coinage", "contested", "proposed"].includes(alt.viability)) {
      errors.push(label + ": unsupported viability for " + alt.word + ": " + alt.viability);
    }
  }
  for (const rejected of entry.rejectedAlternatives || []) {
    checkParts(rejected.etymologyParts || [{form:rejected.word, etymology:rejected.etymology}], label + ".rejected[" + rejected.word + "]");
  }
}
for (const entry of data.noAlternativeEntries) {
  const label = "noAlternativeEntries[" + entry.id + "]";
  checkParts(entry.etymologyParts || [{form:entry.sourceForm, etymology:entry.etymology}], label + ".source");
  for (const rejected of entry.rejected || []) {
    checkParts(rejected.etymologyParts || [{form:rejected.word, etymology:rejected.etymology}], label + ".rejected[" + rejected.word + "]");
  }
}
for (const entry of data.originAuditEntries) {
  const label = "originAuditEntries[" + entry.id + "]";
  checkParts(entry.etymologyParts || [{form:entry.sourceForm, etymology:entry.etymology}], label + ".source");
}

if (errors.length) {
  console.error("Etymology validation failed:");
  for (const error of errors) console.error(" - " + error);
  process.exit(1);
}
console.log("Etymology validation passed: " + data.auditedWordEntries.length + " audited entries, " +
  data.noAlternativeEntries.length + " no-alternative entries, " + data.originAuditEntries.length + " origin-audit entries.");
