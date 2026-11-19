import fs from "node:fs";
import path from "node:path";
import { loadSource } from "./lexicon-lib.mjs";
const raw=fs.readFileSync(path.join(process.cwd(),"contributor-equivalents.js"),"utf8"),start=raw.indexOf("const contributorWordEntries = ["),open=raw.indexOf("[",start),end=raw.lastIndexOf("];");
const source=JSON.parse(raw.slice(open,end+1).replace(/\.\.\.\s*\[/g,"[")).flat(Infinity);
const inventory=JSON.parse(fs.readFileSync("migration/contributor-source-inventory.json","utf8")),{entries}=loadSource();
const norm=v=>String(v||"").normalize("NFC").trim().replace(/\s+/g," "),split=v=>String(v||"").split(/\s*\/\s*/).map(norm).filter(Boolean);
const byForm=new Map();for(const e of entries)for(const form of [...new Set([...split(e.sourceForm),...(e.sourceAliases||[]).flatMap(split),...(Array.isArray(e.sourceEtymology)?e.sourceEtymology.flatMap(x=>split(x?.form)):split(e.sourceEtymology?.form))])]){if(!byForm.has(form))byForm.set(form,new Set());byForm.get(form).add(e.id);}
const rows=inventory.records||[],errors=[],byId=new Map(rows.map(x=>[x.sourceId,x]));
if(source.length!==500||inventory.sourceRecordCount!==500||rows.length!==500)errors.push("expected 500 source records");
if(new Set(source.map(x=>x.id)).size!==source.length||new Set(rows.map(x=>x.sourceId)).size!==rows.length)errors.push("source IDs must be unique");
for(const item of source){const row=byId.get(item.id);if(!row){errors.push("missing inventory row "+item.id);continue;}const targets=new Set();for(const form of split(item.sourceForm))for(const id of byForm.get(form)||[])targets.add(id);const actual=[...targets].sort(),recorded=[...(row.targetEntryIds||[])].sort();if(!actual.length)errors.push("unmapped source form "+item.id);if(JSON.stringify(actual)!==JSON.stringify(recorded))errors.push("mapping mismatch "+item.id);if(row.candidateCount!==(item.alternatives||[]).length)errors.push("candidate count mismatch "+item.id);if((row.sourceClassification||"")!==(item.sourceClassification||""))errors.push("source classification mismatch "+item.id);if(row.mappingStatus==="imported"&&!actual.includes(item.id))errors.push("imported entry missing "+item.id);}
if(errors.length){console.error(errors.join("\n"));process.exit(1);}console.log("Contributor coverage passed: 500/500 source records mapped; "+rows.filter(x=>x.mappingStatus==="imported").length+" imported as distinct entries.");
