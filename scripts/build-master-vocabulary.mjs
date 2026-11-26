import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildArtifacts, validateSource } from "./lexicon-lib.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = relative => JSON.parse(fs.readFileSync(path.join(root, relative), "utf8"));
const cleanLabel = value => {
  const candidate = String(value || "").trim();
  const p = candidate.match(/^(.+?)\s*\(([^()]*)\)\s*$/u);
  return p && /^[A-Za-z][A-Za-z .'-]*$/.test(p[2].trim()) ? p[1].trim() : candidate;
};
const expandForms = value => {
  const out = new Set();
  for (const part of String(value || "").split(/\s*\/\s*/u)) {
    const s = part.trim().normalize("NFC");
    if (!s) continue;
    const p = s.match(/^(.+?)\s*\(([^()]*)\)\s*$/u);
    if (p) { out.add(p[1].trim().normalize("NFC")); out.add(p[2].trim().normalize("NFC")); }
    else out.add(s);
  }
  return [...out];
};
const source = validateSource();
if (source.validation.errors.length) throw new Error(source.validation.errors.join("\n"));
const built = buildArtifacts({entries:source.entries,config:source.config,references:source.references});
const canonical = JSON.parse(built.artifacts.get("lexicon-dist/writing-index.json"));
const master = readJson("master-lexicon.json");
const landing = readJson("landing-words.json");
const roots = readJson("root-families.json");
const textbookPath = path.join(root,"textbook-words.json");
const textbookText = fs.existsSync(textbookPath) ? fs.readFileSync(textbookPath,"utf8").trim() : "";
const textbook = textbookText ? JSON.parse(textbookText) : {entries:[]};

const merged = new Map();
function add(word, meaning, alternatives) {
  const form = String(word || "").trim().normalize("NFC");
  if (!form) return;
  if (!merged.has(form)) merged.set(form,{word:form,meaning:String(meaning || "").trim(),alternatives:[]});
  const target = merged.get(form);
  if (!target.meaning && meaning) target.meaning = String(meaning).trim();
  for (const item of alternatives || []) {
    const candidate = cleanLabel(item);
    if (candidate && !target.alternatives.includes(candidate)) target.alternatives.push(candidate);
  }
}
for (const row of canonical.entries || []) {
  for (const form of row.sourceForms || []) add(form,row.meaning,(row.candidates || []).map(c=>c.word));
}
for (const row of master.entries || []) {
  const f = row.fields || [];
  if (f.length !== 8) continue;
  const forms = String(f[1] || "").split(/\s*\/\s*/u).flatMap(part => {
    const s = part.trim().normalize("NFC");
    if (!s) return [];
    const all = [s];
    const p = s.match(/^(.+?)\s*\(([^()]*)\)\s*$/u);
    if (p) all.push(p[1].trim().normalize("NFC"),p[2].trim().normalize("NFC"));
    return [...new Set(all)];
  });
  const raw = String(f[2] || "").trim();
  let alternatives = [];
  if (raw.startsWith('"[') && raw.endsWith(']"')) {
    try { alternatives = JSON.parse(raw.slice(1,-1).replace(/""/g,'"')); } catch {}
  } else if (raw.startsWith("[")) {
    try { alternatives = JSON.parse(raw); } catch {}
  }
  if (!Array.isArray(alternatives) || !alternatives.length) alternatives = raw.split(/\s*\/\s*/u);
  for (const form of forms) add(form,f[3],alternatives);
}
for (const row of textbook.entries || []) {
  const forms = Array.isArray(row.sourceForms) && row.sourceForms.length ? row.sourceForms : expandForms(row.inputWord);
  const alternatives = [...String(row.primary || "").split(/\s*\/\s*/u),...(Array.isArray(row.alternatives)?row.alternatives:[])];
  for (const form of forms) add(form,row.meaning,alternatives);
}
for (const row of landing) {
  if (!Array.isArray(row)) continue;
  for (const form of expandForms(row[1])) add(form,row[3],String(row[2] || "").split(/\s*\/\s*/u));
}
for (const family of roots.families || []) {
  for (const form of family.forms || []) add(form.word,form.meaning || family.rootMeaning,form.alternatives || []);
}
const supplements = [
  ["ಅತಿಥಿ","Guest",["ನೆಂಟ","ಬಂದವರು"]],
  ["ಅತಿಥಿಗಳು","Guests",["ನೆಂಟರು","ಬಂದವರು"]],
  ["ಅತಿಥಿಯನ್ನು","Guest (object form)",["ನೆಂಟರನ್ನು"]],
  ["ಅತಿಥಿಗಳಿಗೆ","To guests",["ನೆಂಟರಿಗೆ"]],
  ["ಆಯೋಜಿಸಿದ್ದ","Had organised / arranged",["ಏರ್ಪಡಿಸಿದ್ದ"]],
  ["ಆಯೋಜಿಸಿದ","Organised / arranged",["ಏರ್ಪಡಿಸಿದ"]],
  ["ಆಯೋಜಿಸಿರುವ","Having organised / arranged",["ಏರ್ಪಡಿಸಿರುವ"]],
  ["ವರ್ಣರಂಜಿತ","Colourful",["ಬಣ್ಣಬಣ್ಣದ","ರಂಗುರಂಗಿನ"]],
  ["ವರ್ಣ ರಂಜಿತ","Colourful",["ಬಣ್ಣಬಣ್ಣದ","ರಂಗುರಂಗಿನ"]],
  ["ಶೈಲಿ","Style",["ಬಗೆ","ರೀತಿ","ಮಾದರಿ"]],
  ["ಶೈಲಿಯ","Of the style",["ಬಗೆಯ","ರೀತಿಯ","ಮಾದರಿಯ"]]
];
for (const [word,meaning,alts] of supplements) add(word,meaning,alts);


function parseMergedCsvLine(line) {
  const fields = [];
  let field = "", quoted = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (quoted) {
      if (char === '"' && line[i + 1] === '"') { field += '"'; i++; }
      else if (char === '"') quoted = false;
      else field += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") { fields.push(field); field = ""; }
    else field += char;
  }
  if (quoted) throw new Error("Unclosed quote in MergedMasterCopy_10000.csv");
  fields.push(field);
  return fields;
}

function mergedCsvSuggestions(value) {
  const raw = String(value || "").trim();
  if (!raw) return [];
  let values;
  try {
    const parsed = JSON.parse(raw);
    values = Array.isArray(parsed) ? parsed.map(String) : [raw];
  } catch {
    values = [raw];
  }
  const suggestions = [];
  for (let value of values) {
    value = String(value || "").trim()
      .replace(/\\s*\\([^)]*[A-Za-z][^)]*\\)\\s*$/u, "")
      .trim();
    for (const part of value.split(/\\s*[\\/,;]\\s*/u)) {
      const candidate = part.replace(/^[\\s"'[\\]]+|[\\s"'\\]]+$/gu, "").trim().normalize("NFC");
      if (candidate && /[\\u0C80-\\u0CFF]/u.test(candidate) && !/[A-Za-z]/u.test(candidate)) suggestions.push(candidate);
    }
  }
  return [...new Set(suggestions)];
}

function addMergedMasterCsv() {
  const csvPath = path.join(root, "MergedMasterCopy_10000.csv");
  const lines = fs.readFileSync(csvPath, "utf8").replace(/^\\uFEFF/u, "").split(/\\r?\\n/u).filter(Boolean);
  if (!lines.length) throw new Error("MergedMasterCopy_10000.csv is empty");
  const header = parseMergedCsvLine(lines[0]);
  const columns = Object.fromEntries(header.map((name, index) => [name, index]));
  const required = ["Source Word / Loanword", "Primary Accha Kannada", "Alternative Native Options", "English Meaning"];
  for (const name of required) if (columns[name] === undefined) throw new Error("Missing master CSV column: " + name);
  for (let index = 1; index < lines.length; index++) {
    const row = parseMergedCsvLine(lines[index]);
    if (row.length !== header.length) throw new Error("Malformed master CSV row " + (index + 1));
    const source = String(row[columns["Source Word / Loanword"]] || "").trim();
    if (!source) continue;
    const alternatives = [...new Set([
      ...mergedCsvSuggestions(row[columns["Primary Accha Kannada"]]),
      ...mergedCsvSuggestions(row[columns["Alternative Native Options"]])
    ])];
    if (!alternatives.length) continue;
    const forms = expandForms(source).filter(form => /[\\u0C80-\\u0CFF]/u.test(form) && !/[A-Za-z]/u.test(form));
    for (const form of forms) add(form, row[columns["English Meaning"]], alternatives);
  }
}

addMergedMasterCsv();

const output = {schemaVersion:1,entryCount:merged.size,entries:[...merged.values()]};
const serialized = JSON.stringify(output,null,2)+"\n";
const forbidden = /"(?:source|sourceFile|sourceLine|sourceBlobSha|status|reviewStatus|editorial|provenance|sourceRefs|sourceDatasets|reviewedBy|reviewedAt)"\s*:/i;
if (forbidden.test(serialized)) throw new Error("Audit/provenance metadata unexpectedly appears in master vocabulary export.");
const target = path.join(root,"master-vocabulary.json");
if (process.argv.includes("--check")) {
  if (!fs.existsSync(target) || fs.readFileSync(target,"utf8") !== serialized) throw new Error("master-vocabulary.json is missing or stale; run npm run vocabulary:build.");
} else {
  fs.writeFileSync(target,serialized);
}
console.log(`Master vocabulary ${process.argv.includes("--check") ? "check" : "build"} passed: ${output.entryCount} words, ${output.entries.reduce((n,e)=>n+e.alternatives.length,0)} distinct alternatives.`);
