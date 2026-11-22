import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { parseTextbookWords, buildTextbookArtifacts } from "../scripts/import-textbook-words.mjs";
const source = fs.readFileSync(new URL("../newwords.txt", import.meta.url), "utf8");
test("imports all textbook rows across the three source table layouts", () => {
 const parsed=parseTextbookWords(source);
 assert.equal(parsed.entries.length,4559);assert.equal(parsed.review.length,0);
 assert.ok(parsed.entries.some(e=>e.meaning==="To start"));
 assert.ok(parsed.entries.some(e=>e.sourceFormat==="native-table"&&e.meaning==="Charming, pleasing"));
 assert.ok(parsed.entries.some(e=>e.sourceFormat==="master-table"&&e.sourceCategory==="Geography / Daily life"));
});
test("keeps repeated input words as distinct source records",()=>{
 const parsed=parseTextbookWords(source);
 const counts=new Map();
 for(const entry of parsed.entries) counts.set(entry.inputWord,(counts.get(entry.inputWord)||0)+1);
 assert.ok([...counts.values()].some(count=>count>1));
 assert.equal(new Set(parsed.entries.map(e=>e.id)).size,parsed.entries.length);
});
test("preserves source line, source number, and alternatives",()=>{
 const {entries}=parseTextbookWords("| # | Input Word | Primary Accha Kannada | Alternative Native Options | Nuance / Usage Note |\n|---|---|---|---|---|\n| 7 | ಪರೀಕ್ಷೆ | ಒರೆ | ಅಳೆ, ನೋಡಿ | ಪರೀಕ್ಷಿಸಿ ತಿಳಿಯಿರಿ |");
 const [e]=entries;
 assert.deepEqual(e.alternatives,["ಅಳೆ","ನೋಡಿ"]);assert.equal(e.sourceNumber,7);assert.equal(e.sourceLine,3);assert.equal(e.meaning,"ಪರೀಕ್ಷಿಸಿ ತಿಳಿಯಿರಿ");
});
test("a missing final note does not discard a valid row",()=>{
 const p=parseTextbookWords("| # | Input Word | Primary Accha Kannada | Alternative Native Options | Nuance / Usage Note |\n|---|---|---|---|---|\n| 8 | ಪದ | ಪದದ ಬಗೆ | ಪದದ ಆಯ್ಕೆ");
 assert.equal(p.entries.length,1);assert.equal(p.entries[0].meaning,"");assert.equal(p.review.length,0);
});
test("malformed numbered records are retained in the review audit",()=>{
 const p=parseTextbookWords("| # | Input Word | Primary Accha Kannada | Alternative Native Options | Nuance / Usage Note |\n|---|---|---|---|---|\n| 8 | ಪದ | | ಆಯ್ಕೆ | note |");
 assert.equal(p.entries.length,0);assert.equal(p.review.length,1);
});
test("generated artifacts label source proposals as unreviewed",()=>{
 const {data,audit}=buildTextbookArtifacts(source);
 assert.equal(data.sourceFile,"newwords.txt");assert.equal(data.entryCount,4559);assert.equal(audit.reviewCount,0);
 assert.match(data.sourceDescription,/not etymological verification/);
});
