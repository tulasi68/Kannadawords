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
    const value=JSON.parse("{\"schemaVersion\":1,\"model\":\"reviewed-explicit-forms\",\"description\":\"Conservative root-family lookup. Only explicitly listed Kannada forms are matched; no blind suffix stripping or automatic etymology inference.\",\"families\":[{\"id\":\"varna\",\"root\":\"ವರ್ಣ\",\"rootMeaning\":\"ಬಣ್ಣ; ವರ್ಣಿಸುವುದು/ವಿವರಿಸುವುದು (ಸಂದರ್ಭಾನುಸಾರ ವಿಭಿನ್ನ ಅರ್ಥಗಳು)\",\"relationshipType\":\"compound-and-derivational-family\",\"reviewStatus\":\"needs_review\",\"forms\":[{\"word\":\"ವರ್ಣ\",\"meaning\":\"ಬಣ್ಣ\",\"alternatives\":[\"ಬಣ್ಣ\",\"ರಂಗು\"],\"note\":\"ನಾಮಪದ: colour; sentence context decides the best choice.\"},{\"word\":\"ವರ್ಣರಂಜಿತ\",\"meaning\":\"ಬಣ್ಣಗಳಿಂದ ತುಂಬಿದ; colourful\",\"alternatives\":[\"ಬಣ್ಣಬಣ್ಣದ\",\"ರಂಗುರಂಗಿನ\"],\"note\":\"ಬಣ್ಣದ ಅರ್ಥದ ಸಂಯುಕ್ತ ರೂಪ.\"},{\"word\":\"ವರ್ಣ ರಂಜಿತ\",\"meaning\":\"ಬಣ್ಣಗಳಿಂದ ತುಂಬಿದ; colourful\",\"alternatives\":[\"ಬಣ್ಣಬಣ್ಣದ\",\"ರಂಗುರಂಗಿನ\"],\"note\":\"ಬೇರ್ಪಡಿಸಿ ಬರೆದ ರೂಪ.\"},{\"word\":\"ವರ್ಣರಂಜಿತವಾಗಿ\",\"meaning\":\"ಬಣ್ಣಬಣ್ಣವಾಗಿ\",\"alternatives\":[\"ಬಣ್ಣಬಣ್ಣವಾಗಿ\",\"ರಂಗುರಂಗಿಯಾಗಿ\"],\"note\":\"ಕ್ರಿಯಾವಿಶೇಷಣ ರೂಪ.\"},{\"word\":\"ವರ್ಣಚಿತ್ರ\",\"meaning\":\"ಬಣ್ಣದ ಚಿತ್ರ\",\"alternatives\":[\"ಬಣ್ಣದ ಚಿತ್ರ\",\"ರಂಗಿನ ಚಿತ್ರ\"],\"note\":\"ಸಂಯುಕ್ತ ರೂಪ.\"},{\"word\":\"ವರ್ಣಿಸಿದ\",\"meaning\":\"ವಿವರಿಸಿದ; described\",\"alternatives\":[\"ವಿವರಿಸಿದ\",\"ಹೇಳಿದ\"],\"note\":\"ಇಲ್ಲಿ ವರ್ಣಿಸು ಎಂದರೆ ವಿವರಿಸು; ಬಣ್ಣ ಎಂಬ ಅರ್ಥವಲ್ಲ.\"},{\"word\":\"ವರ್ಣಿಸುವ\",\"meaning\":\"ವಿವರಿಸುವ; describing\",\"alternatives\":[\"ವಿವರಿಸುವ\",\"ಹೇಳುವ\"],\"note\":\"ಕ್ರಿಯಾರೂಪ; ಸಂದರ್ಭಕ್ಕೆ ತಕ್ಕಂತೆ ಆಯ್ಕೆಮಾಡಬೇಕು.\"},{\"word\":\"ವರ್ಣಿಸಲಾಗಿದೆ\",\"meaning\":\"ವಿವರಿಸಲಾಗಿದೆ; has been described\",\"alternatives\":[\"ವಿವರಿಸಲಾಗಿದೆ\",\"ಹೇಳಲಾಗಿದೆ\"],\"note\":\"ಕರ್ಮಣಿ ರೂಪ.\"}]},{\"id\":\"shaili\",\"root\":\"ಶೈಲಿ\",\"rootMeaning\":\"ಬಗೆ / ರೀತಿ / ನಡೆ\",\"relationshipType\":\"inflectional-family\",\"reviewStatus\":\"needs_review\",\"forms\":[{\"word\":\"ಶೈಲಿ\",\"meaning\":\"ಬಗೆ; ರೀತಿ; ನಡೆ\",\"alternatives\":[\"ಬಗೆ\",\"ರೀತಿ\",\"ನಡೆ\"],\"note\":\"ಅರ್ಥ ಮತ್ತು ಬಳಕೆಯ ಕ್ಷೇತ್ರವನ್ನು ಅವಲಂಬಿಸಿ ಆಯ್ಕೆಮಾಡಿ.\"},{\"word\":\"ಶೈಲಿಯ\",\"meaning\":\"ಬಗೆಯ; ರೀತಿಯ\",\"alternatives\":[\"ಬಗೆಯ\",\"ರೀತಿಯ\"],\"note\":\"ಸಂಬಂಧ ಸೂಚಿಸುವ ರೂಪ.\"},{\"word\":\"ಶೈಲಿಯಲ್ಲಿ\",\"meaning\":\"ಬಗೆಯಲ್ಲಿ; ರೀತಿಯಲ್ಲಿ\",\"alternatives\":[\"ಬಗೆಯಲ್ಲಿ\",\"ರೀತಿಯಲ್ಲಿ\"],\"note\":\"ಸ್ಥಳ/ವಿಧಾನ ಸೂಚಿಸುವ ರೂಪ.\"},{\"word\":\"ಶೈಲಿಯಿಂದ\",\"meaning\":\"ಬಗೆಯಿಂದ; ರೀತಿಯಿಂದ\",\"alternatives\":[\"ಬಗೆಯಿಂದ\",\"ರೀತಿಯಿಂದ\"],\"note\":\"ಕಾರಣ/ವಿಧಾನ ಸೂಚಿಸುವ ರೂಪ.\"},{\"word\":\"ಶೈಲಿಗಳು\",\"meaning\":\"ಬಗೆಗಳು; ರೀತಿಗಳು\",\"alternatives\":[\"ಬಗೆಗಳು\",\"ರೀತಿಗಳು\"],\"note\":\"ಬಹುವಚನ.\"},{\"word\":\"ಶೈಲಿಗಳನ್ನು\",\"meaning\":\"ಬಗೆಗಳನ್ನು; ರೀತಿಗಳನ್ನು\",\"alternatives\":[\"ಬಗೆಗಳನ್ನು\",\"ರೀತಿಗಳನ್ನು\"],\"note\":\"ಬಹುವಚನದ ಕರ್ಮರೂಪ.\"},{\"word\":\"ಶೈಲಿಯಲ್ಲಿನ\",\"meaning\":\"ಬಗೆಯಲ್ಲಿನ; ರೀತಿಯಲ್ಲಿನ\",\"alternatives\":[\"ಬಗೆಯಲ್ಲಿನ\",\"ರೀತಿಯಲ್ಲಿನ\"],\"note\":\"ಸಂಬಂಧಿತ ಸ್ಥಳಸೂಚಕ ರೂಪ.\"}]},{\"id\":\"atithi\",\"root\":\"ಅತಿಥಿ\",\"rootMeaning\":\"ಬಂದವರು / ನೆಂಟರು (ಸಂದರ್ಭಾನುಸಾರ)\",\"relationshipType\":\"inflectional-family\",\"reviewStatus\":\"needs_review\",\"forms\":[{\"word\":\"ಅತಿಥಿ\",\"meaning\":\"ಬಂದವರು; ನೆಂಟರು\",\"alternatives\":[\"ಬಂದವರು\",\"ನೆಂಟರು\"],\"note\":\"ಗೌರವ/ಏಕವಚನ-ಬಹುವಚನ ಬಳಕೆ ಸಂದರ್ಭಾನುಸಾರ ಬದಲಾಗುತ್ತದೆ.\"},{\"word\":\"ಅತಿಥಿಗಳು\",\"meaning\":\"ಬಂದವರು; ನೆಂಟರು\",\"alternatives\":[\"ಬಂದವರು\",\"ನೆಂಟರು\"],\"note\":\"ಬಹುವಚನ.\"},{\"word\":\"ಅತಿಥಿಯ\",\"meaning\":\"ಬಂದವರ; ನೆಂಟರ\",\"alternatives\":[\"ಬಂದವರ\",\"ನೆಂಟರ\"],\"note\":\"ಸಂಬಂಧ ಸೂಚಿಸುವ ರೂಪ.\"},{\"word\":\"ಅತಿಥಿಯನ್ನು\",\"meaning\":\"ಬಂದವರನ್ನು; ನೆಂಟರನ್ನು\",\"alternatives\":[\"ಬಂದವರನ್ನು\",\"ನೆಂಟರನ್ನು\"],\"note\":\"ಕರ್ಮರೂಪ; ಗೌರವಸೂಚಕ ಬಳಕೆ ಪರಿಶೀಲಿಸಿ.\"},{\"word\":\"ಅತಿಥಿಗಳಿಗೆ\",\"meaning\":\"ಬಂದವರಿಗೆ; ನೆಂಟರಿಗೆ\",\"alternatives\":[\"ಬಂದವರಿಗೆ\",\"ನೆಂಟರಿಗೆ\"],\"note\":\"ಸಂಪಾದಾನ/ಗುರಿ ಸೂಚಿಸುವ ರೂಪ.\"},{\"word\":\"ಅತಿಥಿಗಳ\",\"meaning\":\"ಬಂದವರ; ನೆಂಟರ\",\"alternatives\":[\"ಬಂದವರ\",\"ನೆಂಟರ\"],\"note\":\"ಬಹುವಚನ ಸಂಬಂಧರೂಪ.\"},{\"word\":\"ಅತಿಥಿಗಳಿಂದ\",\"meaning\":\"ಬಂದವರಿಂದ; ನೆಂಟರಿಂದ\",\"alternatives\":[\"ಬಂದವರಿಂದ\",\"ನೆಂಟರಿಂದ\"],\"note\":\"ಕರಣ/ಮೂಲ ಸೂಚಿಸುವ ರೂಪ.\"}]},{\"id\":\"ayojane\",\"root\":\"ಆಯೋಜನೆ\",\"rootMeaning\":\"ಏರ್ಪಾಡು; ಏರ್ಪಡಿಸುವಿಕೆ\",\"relationshipType\":\"derivational-and-inflectional-family\",\"reviewStatus\":\"needs_review\",\"forms\":[{\"word\":\"ಆಯೋಜನೆ\",\"meaning\":\"ಏರ್ಪಾಡು; ಏರ್ಪಡಿಸುವಿಕೆ\",\"alternatives\":[\"ಏರ್ಪಾಡು\",\"ಏರ್ಪಡಿಸುವಿಕೆ\"],\"note\":\"ನಾಮಪದ.\"},{\"word\":\"ಆಯೋಜನೆಯ\",\"meaning\":\"ಏರ್ಪಾಡಿನ\",\"alternatives\":[\"ಏರ್ಪಾಡಿನ\"],\"note\":\"ಸಂಬಂಧರೂಪ.\"},{\"word\":\"ಆಯೋಜನೆಯಲ್ಲಿ\",\"meaning\":\"ಏರ್ಪಾಡಿನಲ್ಲಿ\",\"alternatives\":[\"ಏರ್ಪಾಡಿನಲ್ಲಿ\"],\"note\":\"ಸ್ಥಳ/ಸಂದರ್ಭ ಸೂಚಿಸುವ ರೂಪ.\"},{\"word\":\"ಆಯೋಜನೆಗಳು\",\"meaning\":\"ಏರ್ಪಾಡುಗಳು\",\"alternatives\":[\"ಏರ್ಪಾಡುಗಳು\"],\"note\":\"ಬಹುವಚನ.\"},{\"word\":\"ಆಯೋಜಿಸಿದ\",\"meaning\":\"ಏರ್ಪಡಿಸಿದ\",\"alternatives\":[\"ಏರ್ಪಡಿಸಿದ\"],\"note\":\"ಭೂತಕಾಲದ ಕ್ರಿಯಾರೂಪ.\"},{\"word\":\"ಆಯೋಜಿಸಿದ್ದ\",\"meaning\":\"ಏರ್ಪಡಿಸಿದ್ದ\",\"alternatives\":[\"ಏರ್ಪಡಿಸಿದ್ದ\"],\"note\":\"ಪೂರ್ಣಗೊಂಡ/ಹಿಂದಿನ ಕ್ರಿಯಾರೂಪ.\"},{\"word\":\"ಆಯೋಜಿಸುವ\",\"meaning\":\"ಏರ್ಪಡಿಸುವ\",\"alternatives\":[\"ಏರ್ಪಡಿಸುವ\"],\"note\":\"ಭವಿಷ್ಯ/ಸಾಮಾನ್ಯ ಕ್ರಿಯಾರೂಪ.\"},{\"word\":\"ಆಯೋಜಿಸಿರುವ\",\"meaning\":\"ಏರ್ಪಡಿಸಿರುವ\",\"alternatives\":[\"ಏರ್ಪಡಿಸಿರುವ\"],\"note\":\"ಪೂರ್ಣತೆಯನ್ನು ಸೂಚಿಸುವ ಕ್ರಿಯಾರೂಪ.\"},{\"word\":\"ಆಯೋಜಿಸಲಾಗಿತ್ತು\",\"meaning\":\"ಏರ್ಪಡಿಸಲಾಗಿತ್ತು\",\"alternatives\":[\"ಏರ್ಪಡಿಸಲಾಗಿತ್ತು\"],\"note\":\"ಕರ್ಮಣಿ/ಹಿಂದಿನ ಸ್ಥಿತಿ.\"},{\"word\":\"ಆಯೋಜಿಸಲಾಗುತ್ತದೆ\",\"meaning\":\"ಏರ್ಪಡಿಸಲಾಗುತ್ತದೆ\",\"alternatives\":[\"ಏರ್ಪಡಿಸಲಾಗುತ್ತದೆ\"],\"note\":\"ಕರ್ಮಣಿ/ಸಾಮಾನ್ಯ ವರ್ತಮಾನ ಅಥವಾ ಭವಿಷ್ಯ.\"},{\"word\":\"ಆಯೋಜಕರು\",\"meaning\":\"ಏರ್ಪಡಿಸುವವರು\",\"alternatives\":[\"ಏರ್ಪಡಿಸುವವರು\"],\"note\":\"ವ್ಯಕ್ತಿಗಳನ್ನು ಸೂಚಿಸುವ ರೂಪ.\"}]}]}");
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
