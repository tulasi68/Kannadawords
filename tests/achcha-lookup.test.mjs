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
});
