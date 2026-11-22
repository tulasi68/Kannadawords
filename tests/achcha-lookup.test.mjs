import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { loadSource, buildArtifacts } from "../scripts/lexicon-lib.mjs";

const root=process.cwd();
const read=file=>fs.readFileSync(path.join(root,file),"utf8");
const readJson=file=>JSON.parse(read(file));

test("Tab 4 searches canonical, master and textbook collections including Latin aliases",async()=>{
 const loaded=loadSource();
 const artifacts=new Map(buildArtifacts(loaded).artifacts);
 const sandbox={
  window:{},
  document:{currentScript:{src:"https://example.test/kannadawords/lexicon-store.js"}},
  URL,
  console:{warn(){}},
  fetch:async input=>{
   const url=new URL(String(input));
   const relative=url.pathname.split("/kannadawords/")[1];
   if(relative.startsWith("lexicon-dist/")){
    const raw=artifacts.get(relative);
    if(raw===undefined)return{ok:false,status:404};
    return{ok:true,status:200,json:async()=>JSON.parse(raw),text:async()=>raw};
   }
   if(relative==="root-families.json"){
    const value=readJson("root-families.json");
    return{ok:true,status:200,json:async()=>value,text:async()=>JSON.stringify(value)};
   }
   if(relative==="master-lexicon.json"||relative==="textbook-words.json"){
    const value=readJson(relative);
    return{ok:true,status:200,json:async()=>value,text:async()=>JSON.stringify(value)};
   }
   return{ok:false,status:404};
  }
 };
 vm.runInNewContext(read("lexicon-display-adapter.js"),sandbox);
 vm.runInNewContext(read("lexicon-store.js"),sandbox);
 const store=sandbox.window.KannadaLexiconStore;
 await store.ready();
 const varna=store.searchAchchaLexicon("varna");
 assert.ok(varna.some(entry=>entry.candidates.some(candidate=>candidate.word==="ಬಣ್ಣ")));
 const jagathika=store.searchAchchaLexicon("jagathika");
 assert.ok(jagathika.some(entry=>entry.sourceForms.includes("Jagathika")));
 assert.ok(jagathika.some(entry=>entry.candidates.some(candidate=>candidate.word==="ಇಡೀ ಜಗತ್ತಿನ")));
 const kannada=store.searchAchchaLexicon("ಜಾಗತಿಕ");
 assert.ok(kannada.some(entry=>entry.candidates.some(candidate=>candidate.word==="ವಿಶ್ವದ")));
 assert.ok(kannada.every(entry=>entry.candidates.every(candidate=>candidate.origin==="uncertain")));
 for (const [source, expected] of [
  ["ಅತಿಥಿ","ನೆಂಟ"],
  ["ಅತಿಥಿಗಳು","ನೆಂಟರು"],
  ["ಆಯೋಜಿಸಿದ್ದ","ಏರ್ಪಡಿಸಿದ್ದ"],
  ["ವರ್ಣರಂಜಿತ","ಬಣ್ಣಬಣ್ಣದ"],
  ["ವರ್ಣ ರಂಜಿತ","ರಂಗುರಂಗಿನ"],
  ["ಶೈಲಿ","ರೀತಿ"],
  ["ಶೈಲಿಯ","ಬಗೆಯ"]
 ]) {
  const found=store.searchAchchaLexicon(source);
  assert.ok(found.some(entry=>entry.sourceForms.includes(source) && entry.candidates.some(candidate=>candidate.word===expected)),source+" should be found with "+expected);
 }
 for (const [source, expected, familyId] of [
  ["ವರ್ಣರಂಜಿತ","ಬಣ್ಣಬಣ್ಣದ","varna"],
  ["ವರ್ಣಿಸಿದ","ವಿವರಿಸಿದ","varna"],
  ["ವರ್ಣಿಸುವ","ಹೇಳುವ","varna"],
  ["ಶೈಲಿಯಲ್ಲಿ","ಬಗೆಯಲ್ಲಿ","shaili"],
  ["ಶೈಲಿಗಳನ್ನು","ರೀತಿಗಳನ್ನು","shaili"],
  ["ಅತಿಥಿಯನ್ನು","ಬಂದವರನ್ನು","atithi"],
  ["ಅತಿಥಿಗಳಿಗೆ","ಬಂದವರಿಗೆ","atithi"],
  ["ಆಯೋಜಿಸಿದ","ಏರ್ಪಡಿಸಿದ","ayojane"],
  ["ಆಯೋಜಿಸಲಾಗಿತ್ತು","ಏರ್ಪಡಿಸಲಾಗಿತ್ತು","ayojane"],
  ["ಆಯೋಜಕರು","ಏರ್ಪಡಿಸುವವರು","ayojane"]
 ]) {
  const found=store.searchAchchaLexicon(source);
  const match=found.find(entry=>entry.sourceForms.includes(source) && entry.candidates.some(candidate=>candidate.word===expected));
  assert.ok(match,source+" should resolve to "+expected);
  assert.ok(match.rootFamilyIds?.includes(familyId),source+" should retain its root-family metadata");
  assert.ok(match.candidates.find(candidate=>candidate.word===expected).reviewStatus==="needs_review",
    "root-family proposals must not be promoted to verified");
 }

});
