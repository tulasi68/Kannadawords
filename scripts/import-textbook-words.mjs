import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
export function parseTextbookWords(markdown) {
  const entries = [], review = [];
  let mode = "nuance";
  const lines = String(markdown || "").split(/\r?\n/);
  for (let index = 0; index < lines.length; index++) {
    const raw = lines[index].trim();
    if (!raw.startsWith("|")) continue;
    let cells = raw.split("|");
    if (cells[0].trim() === "") cells.shift();
    if (cells.at(-1).trim() === "") cells.pop();
    cells = cells.map(cell => cell.trim());
    const header = cells.join(" | ").toLocaleLowerCase();
    if (header.includes("input word") && header.includes("primary accha kannada")) { mode = "nuance"; continue; }
    if (header.includes("ಮೂಲ ಪದ") && header.includes("ಇತರ ಪರ್ಯಾಯಗಳು") && header.includes("english meaning")) { mode = "native-table"; continue; }
    if ((header.includes("sanskrit / loan word") || header.includes("sanskrit / loanword")) && header.includes("area / domain")) { mode = "master-table"; continue; }
    if (!/^\d+$/.test(cells[0] || "")) continue;
    const sourceNumber = Number(cells[0]), inputWord = cells[1], primary = cells[2];
    if (!inputWord || !primary || cells.length < 4 || cells.length > 5) {
      review.push({ sourceLine:index + 1, raw, reason:!inputWord ? "missing input word" : !primary ? "missing primary alternative" : "unexpected column count", mode });
      continue;
    }
    let alternativeText = "", meaning = "", sourceCategory = "";
    if (mode === "nuance" || mode === "native-table") { alternativeText = cells[3] || ""; meaning = cells[4] || ""; }
    else { meaning = cells[3] || ""; sourceCategory = cells[4] || ""; }
    const alternatives = String(alternativeText).split(/\s*[,/]\s*/u).map(value => value.trim()).filter(value => value && value !== "—" && value !== "-");
    entries.push({
      id:"textbook-line-" + (index + 1), sourceLine:index + 1, sourceNumber,
      inputWord, primary, alternativeText, alternatives, meaning,
      usageNote:mode === "nuance" ? meaning : "", sourceCategory, sourceFormat:mode, sourceDataset:"kannada-textbooks"
    });
  }
  return { entries, review };
}
export function buildTextbookArtifacts(markdown) {
  const parsed = parseTextbookWords(markdown);
  return {
    data:{schemaVersion:1,sourceFile:"newwords.txt",sourceDescription:"User-supplied Kannada textbook vocabulary suggestions. Editorial alternatives are unreviewed and are not etymological verification.",entryCount:parsed.entries.length,reviewCount:parsed.review.length,entries:parsed.entries},
    audit:{schemaVersion:1,sourceFile:"newwords.txt",reviewCount:parsed.review.length,records:parsed.review}
  };
}
const scriptPath = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === scriptPath) {
  const root = path.resolve(path.dirname(scriptPath), "..");
  const source = fs.readFileSync(path.join(root, "newwords.txt"), "utf8");
  const { data, audit } = buildTextbookArtifacts(source);
  fs.writeFileSync(path.join(root, "textbook-words.json"), JSON.stringify(data, null, 2) + "\n");
  fs.writeFileSync(path.join(root, "textbook-words-review.json"), JSON.stringify(audit, null, 2) + "\n");
  console.log("Imported " + data.entryCount + " textbook rows; " + data.reviewCount + " need review.");
}
