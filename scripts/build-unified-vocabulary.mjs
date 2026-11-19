#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "generated", "vocabulary");
const dataFiles = ["data.js","sentence-examples.js","contextual-examples.js","etymology-entries.js","contributor-equivalents.js","coinage-review.js"];
const read = name => fs.readFileSync(path.join(ROOT,name),"utf8");
const sandbox = { console, window:{KANNADA_MODERATION_API:""}, document:{getElementById:()=>null}, localStorage:{getItem:()=>null,setItem:()=>{}}, setTimeout, clearTimeout };
vm.createContext(sandbox,{name:"kannadawords-unified-build"});
for (const file of dataFiles) {
  if (!fs.existsSync(path.join(ROOT,file))) throw new Error("Missing source collection: "+file);
  vm.runInContext(read(file),sandbox,{filename:file,timeout:5000});
}
const app=read("app.js");
const mergeEnd=app.indexOf("\nfunction loadState()");
if(mergeEnd<0) throw new Error("Could not identify app.js merge boundary; refusing to guess.");
vm.runInContext(app.slice(0,mergeEnd),sandbox,{filename:"app.js merge section",timeout:10000});

const raw=vm.runInContext(`(() => {
 const split=value=>String(value||"").normalize("NFC").split(/\\s*(?:\\/|,|;|\\|| ಅಥವಾ )\\s*/u).map(v=>v.trim()).filter(v=>v.length>=2);
 const byForm=new Map(); const entries=votingEntries||[];
 for(const entry of entries){
  if(entry.noAlternative||entry.scopeAudit||!Array.isArray(entry.alternatives)) continue;
  const candidates=entry.alternatives.filter(a=>a.word&&!a.isNoAlternative&&!a.isScopeAudit);
  if(!candidates.length) continue;
  const forms=[...new Set([...split(entry.sanskrit||entry.sourceForm),...split(entry.sourceEtymology&&entry.sourceEtymology.form)])];
  for(const form of forms){
   const key=form.normalize("NFC"); let record=byForm.get(key);
   if(!record){record={source:form,sourceForms:[form],meaning:entry.meaning||"",candidates:[],legacyRecordIds:[]};byForm.set(key,record);}
   if(entry.id&&!record.legacyRecordIds.includes(String(entry.id)))record.legacyRecordIds.push(String(entry.id));
   if(!record.meaning&&entry.meaning)record.meaning=entry.meaning;
   for(const alt of candidates)if(!record.candidates.some(c=>c.word===alt.word))record.candidates.push({word:alt.word,note:alt.note||"",viability:alt.viability||"",origin:achchaAlternativeKind(alt),proto:alt.proto||"",tamil:alt.tamil||"",tulu:alt.tulu||"",etymologyParts:alt.etymologyParts||[]});
  }
 }
 return {votingRecords:entries.length,eligibleRecords:entries.filter(e=>!e.noAlternative&&!e.scopeAudit&&Array.isArray(e.alternatives)&&e.alternatives.some(a=>a.word&&!a.isNoAlternative&&!a.isScopeAudit)).length,noAlternativeRecords:entries.filter(e=>e.noAlternative).length,scopeAuditRecords:entries.filter(e=>e.scopeAudit).length,records:[...byForm.values()].sort((a,b)=>a.source.localeCompare(b.source,"kn"))};
})()`,sandbox);

const sha=value=>crypto.createHash("sha256").update(value).digest("hex");
const shardCount=32, shards=Array.from({length:shardCount},()=>[]), lookup={}, search=[];
for(const record of raw.records){
 record.id="legacy-"+sha(record.source.normalize("NFC")).slice(0,20);
 record.editorialStatus="legacy_unreviewed";
 record.recognitionBasis="existing_live_assistant_eligibility";
 record.legacyRecordIds.sort();
 const shard=parseInt(sha(record.id).slice(0,8),16)%shardCount;
 shards[shard].push(record); lookup[record.source.normalize("NFC")]={id:record.id,shard};
 search.push({id:record.id,source:record.source,meaning:record.meaning,alternatives:record.candidates.map(c=>c.word),editorialStatus:record.editorialStatus});
}
fs.rmSync(OUT,{recursive:true,force:true});
const shardManifest=[];
for(let i=0;i<shards.length;i++){
 if(!shards[i].length)continue;
 const file="shards/"+String(i).padStart(2,"0")+".json",body=JSON.stringify(shards[i])+"\n";
 fs.mkdirSync(path.dirname(path.join(OUT,file)),{recursive:true});
 fs.writeFileSync(path.join(OUT,file),body,"utf8");
 shardManifest.push({file,records:shards[i].length,sha256:sha(body)});
}
fs.mkdirSync(OUT,{recursive:true});
const write=(name,value)=>fs.writeFileSync(path.join(OUT,name),JSON.stringify(value)+"\n","utf8");
write("lookup-index.json",lookup);write("search-index.json",search);
write("manifest.json",{
 schemaVersion:"1.0.0",generatedAt:null,sourceOfTruth:"existing legacy collections merged by app.js",sourceFiles:dataFiles,
 counts:{votingRecords:raw.votingRecords,eligibleLegacyRecords:raw.eligibleRecords,uniqueSourceHeadwords:raw.records.length,noAlternativeRecords:raw.noAlternativeRecords,scopeAuditRecords:raw.scopeAuditRecords,verifiedHeadwords:0,legacyUnreviewedHeadwords:raw.records.length,lookupForms:Object.keys(lookup).length,alternativeCandidates:raw.records.reduce((n,r)=>n+r.candidates.length,0)},
 editorialWarning:"Legacy eligibility is preserved for compatibility; records are not thereby certified as linguistically verified.",
 shardCount,shards:shardManifest,lookupIndex:"lookup-index.json",searchIndex:"search-index.json"
});
console.log("Unified vocabulary index built from live merge:");
console.log("  Voting records: "+raw.votingRecords);
console.log("  Eligible legacy records: "+raw.eligibleRecords);
console.log("  Unique source headwords: "+raw.records.length);
console.log("  Candidate alternatives: "+raw.records.reduce((n,r)=>n+r.candidates.length,0));
const problem = raw.records.find(r => r.source.normalize("NFC") === "ಸಮಸ್ಯೆ");
if (!problem || !problem.candidates.length) throw new Error("Regression failed: ಸಮಸ್ಯೆ must have at least one replacement candidate.");
if (raw.records.some(r => r.source.normalize("NFC") === "ಹೊಸ")) throw new Error("Regression failed: ordinary Kannada word ಹೊಸ must not enter the source lookup index.");
console.log("  Regression: ಸಮಸ್ಯೆ has alternatives; ಹೊಸ is not indexed."); 
console.log("  Output: "+path.relative(ROOT,OUT));
