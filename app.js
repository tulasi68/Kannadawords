// Restored minimal shell - full logic will be restored. Translate uses proxy.
const MODERATION_API = window.KANNADA_MODERATION_API || "https://kannadawords-moderation.tulasianand6.workers.dev";
async function translateAchchaKannada(){
 const input=document.getElementById("achcha-input");
 const output=document.getElementById("achcha-output");
 const button=document.getElementById("achcha-submit");
 const status=document.getElementById("achcha-version-label");
 const original=input.value.trim();
 if(!original){input.focus();return;}
 output.classList.remove("hidden");
 document.getElementById("achcha-original").textContent=original;
 document.getElementById("achcha-result").textContent="ನಿಮ್ಮ ವಾಕ್ಯವನ್ನು ಪರಿಶೀಲಿಸಿ ಮರುಬರೆಯಲಾಗುತ್ತಿದೆ…";
 document.getElementById("achcha-notes").replaceChildren();
 status.textContent="AI ಭಾಷಾ ಎಂಜಿನ್ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ…";
 button.disabled=true;button.textContent="ಮರುಬರಹವಾಗುತ್ತಿದೆ…";
 try{
  const rewriteUrl = (typeof location !== "undefined" && location.origin && !location.origin.startsWith("file:"))
    ? (location.origin + "/api/rewrite")
    : "https://kannadawords-ai.tulasianand6.workers.dev/api/rewrite";
  const response=await fetch(rewriteUrl,{
   method:"POST",headers:{"Content-Type":"text/plain;charset=UTF-8"},
   body:JSON.stringify({text:original,lexicon:[]})
  });
  const payload=await response.json();
  if(!response.ok)throw new Error(payload.error||"AI service returned an error.");
  document.getElementById("achcha-result").textContent=payload.rewrittenKannada||original;
  status.textContent=payload.changed?"AI ಮರುಬರಹ":"ವಿಶ್ವಾಸಾರ್ಹ ಬದಲಾವಣೆ ಸಿಗಲಿಲ್ಲ";
 }catch(error){
  document.getElementById("achcha-result").textContent=original;
  status.textContent="ಮರುಬರಹ ಪೂರ್ಣಗೊಳ್ಳಲಿಲ್ಲ";
  const p=document.createElement("p");
  const msg=(error&&error.message)||"";
  p.textContent=(msg==="Failed to fetch"?"AI ಸೇವೆಯನ್ನು ಸಂಪರ್ಕಿಸಲಾಗಲಿಲ್ಲ (network). ಸ್ವಲ್ಪ ಸಮಯದ ನಂತರ ಪ್ರಯತ್ನಿಸಿ.":msg)||"AI ಸೇವೆಯನ್ನು ಸಂಪರ್ಕಿಸಲಾಗಲಿಲ್ಲ.";
  document.getElementById("achcha-notes").append(p);
 }finally{
  button.disabled=false;button.textContent="ಅಚ್ಚ ಕನ್ನಡದಲ್ಲಿ ಮರುಬರೆಯಿರಿ";
 }
}
function clearAchchaKannada(){
 const input=document.getElementById("achcha-input");
 const output=document.getElementById("achcha-output");
 input.value="";
 output.classList.add("hidden");
 document.getElementById("achcha-version-label").textContent="";
 document.getElementById("achcha-original").textContent="";
 document.getElementById("achcha-result").textContent="";
 document.getElementById("achcha-notes").replaceChildren();
 input.focus();
}
window.clearAchchaKannada=clearAchchaKannada;
window.translateAchchaKannada=translateAchchaKannada;
function showTab(tab) {
 const tabs=["words","sentences","coinages","translate"];
 const panels=["words-panel","sentences-panel","coinages-panel","translate-panel"];
 tabs.forEach((name,index)=>{
  const el=document.getElementById(panels[index]); if(el) el.classList.toggle("hidden",name!==tab);
  const btn=document.getElementById(name==="words"?"word-tab":name==="sentences"?"sentence-tab":name==="coinages"?"coinage-tab":"translate-tab");
  if(btn) btn.classList.toggle("main-choice-active",name===tab);
 });
}
window.showTab=showTab;
function showInfo(){}
window.showInfo=showInfo;
console.log("Kannada Desi translate proxy active");
