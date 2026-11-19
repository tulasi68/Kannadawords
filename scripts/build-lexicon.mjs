import fs from "node:fs";
import path from "node:path";
import { DIST_DIR, buildArtifacts, validateSource } from "./lexicon-lib.mjs";

const { entries, config, validation } = validateSource();
if (validation.errors.length) {
  console.error(validation.errors.join("\n"));
  process.exit(1);
}
const built = buildArtifacts({entries,config,references:validateSource().references});
const check = process.argv.includes("--check");
let stale = false;
for (const [relative, content] of built.artifacts) {
  const target = path.join(process.cwd(), relative);
  if (check) {
    if (!fs.existsSync(target) || fs.readFileSync(target,"utf8") !== content) {
      console.error(`Generated file is missing or stale: ${relative}`);
      stale = true;
    }
  } else {
    fs.mkdirSync(path.dirname(target),{recursive:true});
    fs.writeFileSync(target,content);
  }
}
if (check) {
  const expected = new Set([...built.artifacts.keys()]);
  const actual = [];
  const walk = dir => { if(!fs.existsSync(dir)) return; for(const item of fs.readdirSync(dir,{withFileTypes:true})){const full=path.join(dir,item.name);if(item.isDirectory())walk(full);else actual.push(path.relative(process.cwd(),full));}};
  walk(DIST_DIR);
  for(const file of actual) if(!expected.has(file)){console.error(`Unexpected generated file: ${file}`);stale=true;}
  if(stale) process.exit(1);
}
console.log(`Lexicon ${check?"check":"build"} passed: ${validation.entryCount} entries, ${validation.candidateCount} candidates, build ${built.buildId}`);
