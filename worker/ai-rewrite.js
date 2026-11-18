const MODEL = "@cf/google/gemma-4-26b-a4b-it";
const FALLBACK_MODEL = "@cf/meta/llama-3.3-70b-instruct-fp8-fast";
const MAX_TEXT = 4000;
const MODEL_TIMEOUT_MS = 25000;

const responseSchema = {
  type: "json_schema",
  json_schema: {
    type: "object",
    properties: {
      rewrittenKannada: { type: "string" },
      changed: { type: "boolean" },
      explanationKannada: { type: "string" },
      replacements: {
        type: "array",
        items: {
          type: "object",
          properties: {
            original: { type: "string" },
            replacement: { type: "string" },
            basis: { type: "string", enum: ["verified_dravidian", "tadbhava", "coined_from_dravidian", "uncertain"] },
            reasonKannada: { type: "string" }
          },
          required: ["original", "replacement", "basis", "reasonKannada"]
        }
      },
      wordsNeedingReview: { type: "array", items: { type: "string" } }
    },
    required: ["rewrittenKannada", "changed", "explanationKannada", "replacements", "wordsNeedingReview"]
  }
};

function matchesWholeForm(text, form) {
  const normalizedForm = String(form || "").normalize("NFC");
  if (!normalizedForm) return false;
  const isWordChar = (char) => !!char && /[\p{L}\p{M}\p{N}_]/u.test(char);
  let index = text.indexOf(normalizedForm);
  while (index !== -1) {
    const before = index > 0 ? text[index - 1] : "";
    const after = text[index + normalizedForm.length] || "";
    if (!isWordChar(before) && !isWordChar(after)) return true;
    index = text.indexOf(normalizedForm, index + 1);
  }
  return false;
}

function withTimeout(promise, timeoutMs) {
  let timer;
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error("AI model response timed out")), timeoutMs);
    })
  ]).finally(() => clearTimeout(timer));
}

function reply(data, status = 200, origin = "") {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "Content-Type",
      "vary": "Origin",
      "cache-control": "no-store"
    }
  });
}

function escapeInvalidJsonEscapes(source) {
  let output = "";
  let inString = false;
  for (let i = 0; i < source.length; i++) {
    const ch = source[i];
    if (!inString) {
      output += ch;
      if (ch === '"') inString = true;
      continue;
    }
    if (ch === '"') {
      output += ch;
      let slashes = 0;
      for (let j = i - 1; j >= 0 && source[j] === "\\"; j--) slashes++;
      if (slashes % 2 === 0) inString = false;
      continue;
    }
    if (ch === "\\") {
      const next = source[i + 1] || "";
      if ('"\\/bfnrt'.includes(next)) {
        output += ch + next;
        i++;
        continue;
      }
      if (next === "u" && /^[0-9a-fA-F]{4}$/.test(source.slice(i + 2, i + 6))) {
        output += source.slice(i, i + 6);
        i += 5;
        continue;
      }
      output += "\\\\";
      continue;
    }
    output += ch;
  }
  return output;
}

function parseModelOutput(raw) {
  let value = raw && Object.prototype.hasOwnProperty.call(raw, "response") ? raw.response : raw;
  if (typeof value === "string") {
    const cleaned = value.trim().replace(/^\x60\x60\x60(?:json)?\s*/i, "").replace(/\s*\x60\x60\x60$/, "");
    try {
      value = JSON.parse(cleaned);
    } catch (firstError) {
      value = JSON.parse(escapeInvalidJsonEscapes(cleaned));
    }
  }
  if (value && typeof value.response === "string") {
    try { value = JSON.parse(value.response); }
    catch { value = JSON.parse(escapeInvalidJsonEscapes(value.response)); }
  }
  return value;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const url = new URL(request.url);
    if (request.method === "GET" && url.pathname === "/health" && !origin) {
      return new Response(JSON.stringify({ok:true,service:"Kannada Desi AI rewrite"}), {headers:{"content-type":"application/json","cache-control":"no-store"}});
    }
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "POST, OPTIONS",
          "access-control-allow-headers": "Content-Type",
          "access-control-max-age": "86400",
          "vary": "Origin"
        }
      });
    }

    if (url.pathname === "/health" && request.method === "GET") return reply({ ok: true, service: "Kannada Desi AI rewrite" }, 200, origin);
    if (url.pathname !== "/api/rewrite" || request.method !== "POST") return reply({ error: "Not found" }, 404, origin);

    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    if (env.TRANSLATE_LIMITER) {
      const { success } = await env.TRANSLATE_LIMITER.limit({ key: ip });
      if (!success) return reply({ error: "Too many rewrites. Please wait one minute and try again." }, 429, origin);
    }

    const length = Number(request.headers.get("content-length") || 0);
    if (length > 100000) return reply({ error: "Request is too large. Please shorten the text and try again." }, 413, origin);

    let body;
    try { body = JSON.parse(await request.text()); } catch { return reply({ error: "Please send valid JSON." }, 400, origin); }
    const text = typeof body.text === "string" ? body.text.trim() : "";
    if (!text || text.length > MAX_TEXT) return reply({ error: "Enter Kannada text of up to 4,000 characters." }, 400, origin);
    if (!/[\u0C80-\u0CFF]/.test(text)) return reply({ error: "Please enter text containing Kannada script." }, 400, origin);

    const normalizedText = text.normalize("NFC");
    const lexicon = Array.isArray(body.lexicon) ? body.lexicon.slice(0, 400).map(entry => ({
      sourceForms: Array.isArray(entry.sourceForms) ? entry.sourceForms.slice(0, 5).filter(x => typeof x === "string").map(x => x.slice(0, 80)) : [],
      meaning: typeof entry.meaning === "string" ? entry.meaning.slice(0, 120) : "",
      candidates: Array.isArray(entry.candidates) ? entry.candidates.slice(0, 5).map(candidate => ({
        word: typeof candidate.word === "string" ? candidate.word.slice(0, 80) : "",
        origin: typeof candidate.origin === "string" ? candidate.origin : "uncertain",
        note: typeof candidate.note === "string" ? candidate.note.slice(0, 180) : "",
        proto: typeof candidate.proto === "string" ? candidate.proto.slice(0, 80) : "",
        tamil: typeof candidate.tamil === "string" ? candidate.tamil.slice(0, 80) : "",
        tulu: typeof candidate.tulu === "string" ? candidate.tulu.slice(0, 80) : ""
      })).filter(candidate => candidate.word) : []
    })).filter(entry => entry.sourceForms.length && entry.candidates.length &&
      entry.sourceForms.some(form => matchesWholeForm(normalizedText, form)))
      .sort((a, b) => Math.max(...b.sourceForms.map(x => x.length)) - Math.max(...a.sourceForms.map(x => x.length)))
      .slice(0, 40) : [];

    const system = `ನೀವು ಕನ್ನಡದ ಹಿರಿಯ ಭಾಷಾ ಸಂಪಾದಕರು. ನಿಮ್ಮ ಕೆಲಸ ಕೇವಲ ಪದಗಳನ್ನು ಬದಲಿಸುವುದಲ್ಲ; ಪಠ್ಯದ ಸಂಪೂರ್ಣ ಅರ್ಥವನ್ನು ಗ್ರಹಿಸಿ, ಅರ್ಥ ಮತ್ತು ಧ್ವನಿಯನ್ನು ಉಳಿಸಿಕೊಂಡು ಸಹಜ, ಸರಾಗ ಕನ್ನಡದಲ್ಲಿ ಮರುಬರೆಯುವುದು.

ಸಂಪಾದನೆಯ ಕ್ರಮ:
1. ಮೊದಲು ಪ್ರತಿ ವಾಕ್ಯದ ಅರ್ಥ, ಕರ್ತೃ-ಕರ್ಮ, ಕಾಲ, ವಾಕ್ಯಗಳ ನಡುವಿನ ಸಂಬಂಧ ಮತ್ತು ಲೇಖಕನ ಉದ್ದೇಶವನ್ನು ಗ್ರಹಿಸಿ.
2. ತಪ್ಪು ಪದರೂಪ, ವಿಭಕ್ತಿ, ವ್ಯಾಕರಣ, ಪದಕ್ರಮ, ಪುನರುಕ್ತಿ ಮತ್ತು ಅನಗತ್ಯವಾಗಿ ಉದ್ದವಾದ ರಚನೆಗಳನ್ನು ಸರಿಪಡಿಸಿ.
3. ಸಂಸ್ಕೃತ ಮೂಲದ ಪದವೆಂದು ಭಾಷಾಶಾಸ್ತ್ರೀಯವಾಗಿ ಸಮರ್ಥಿಸಬಹುದಾದ ಪದವನ್ನಷ್ಟೇ ಗುರುತಿಸಿ. ಪದವು ಸಂಸ್ಕೃತದಂತೆ ಕಾಣುತ್ತದೆ ಎಂಬ ಕಾರಣಕ್ಕೆ ಮಾತ್ರ ಅದರ ಮೂಲವನ್ನು ನಿರ್ಧರಿಸಬೇಡಿ.
4. ಅರ್ಥಕ್ಕೆ ಸರಿಹೊಂದುವ, ಇಂದಿನ ಕನ್ನಡದಲ್ಲಿ ಸಹಜವಾಗಿ ಬಳಕೆಯಾಗುವ ದ್ರಾವಿಡ/ಕನ್ನಡ ಪರ್ಯಾಯವಿದ್ದರೆ ಮಾತ್ರ ಬದಲಿಸಿ. ಪರ್ಯಾಯವು ಅಸಹಜ, ಅಸ್ಪಷ್ಟ ಅಥವಾ ಅರ್ಥದಲ್ಲಿ ಬೇರೆ ಆಗಿದ್ದರೆ ಮೂಲ ಪದವನ್ನೇ ಉಳಿಸಿ.
5. ಪೂರ್ಣ ವಾಕ್ಯವನ್ನು ಸಹಜವಾಗಿ ಮರುರಚಿಸಿ. ಪದಕ್ಕೆ ಪದ ಬದಲಾವಣೆ ಮಾಡಬೇಡಿ; ಆದರೆ ಮೂಲದಲ್ಲಿ ಇಲ್ಲದ ಸಂಗತಿಯನ್ನು ಸೇರಿಸಬೇಡಿ.

ಪದಪಟ್ಟಿಯ ಬಳಕೆ:
- ಕೆಳಗಿನ PROJECT LEXICON ಸಮುದಾಯದ ಪದಪಟ್ಟಿ. ಅದನ್ನು ಸುಳಿವಾಗಿ ಬಳಸಿ; ಅಲ್ಲಿ ಪರ್ಯಾಯವಿದೆ ಎಂದ ಮಾತ್ರಕ್ಕೆ ಅದನ್ನು ಕಡ್ಡಾಯವಾಗಿ ಬಳಸಬೇಡಿ.
- ಸಂದರ್ಭ, ಅರ್ಥ, ವ್ಯಾಕರಣ ಮತ್ತು ಸಹಜ ಬಳಕೆಗೆ ಸರಿಹೊಂದಿದಾಗ ಮಾತ್ರ ಪದಪಟ್ಟಿಯ ಪರ್ಯಾಯವನ್ನು ಬಳಸಿ.
- ಪದಪಟ್ಟಿಯಲ್ಲಿರುವ ಅಭ್ಯರ್ಥಿಯನ್ನೇ ಬಳಸಿದರೆ ಮಾತ್ರ basis ಅನ್ನು verified_dravidian ಎಂದು ಗುರುತಿಸಬಹುದು; ಆ ಅಭ್ಯರ್ಥಿಯ origin ಕೂಡ verified_dravidian ಆಗಿರಬೇಕು.
- ತದ್ಭವ ಎಂಬುದು ಖಚಿತವಾದಾಗ ಮಾತ್ರ tadbhava ಬಳಸಿ. ಹೊಸದಾಗಿ ರೂಪಿಸಿದ ದ್ರಾವಿಡ ಪದಕ್ಕೆ coined_from_dravidian ಬಳಸಿ; ಅದನ್ನೂ ಸಮುದಾಯದ ಪರಿಶೀಲನೆಗೆ ಒಳಪಟ್ಟದ್ದೆಂದು ತಿಳಿಸಿ.
- ಪದದ ಮೂಲ ಅಥವಾ ಪರ್ಯಾಯದ ನೈಜತೆ ಖಚಿತವಿಲ್ಲದಿದ್ದರೆ uncertain ಎಂದು ಗುರುತಿಸಿ, wordsNeedingReview ಗೆ ಸೇರಿಸಿ. ಊಹೆಯನ್ನು ದೃಢಪಟ್ಟ ಸಂಗತಿಯಂತೆ ಹೇಳಬೇಡಿ.
- ತಮಿಳು/ತುಳು ರೂಪಗಳು ಹೋಲಿಕೆಯ ಸಾಕ್ಷ್ಯ ಮಾತ್ರ; ಅವನ್ನು ಕನ್ನಡದ ಉತ್ತರವಾಗಿ ಬಳಸಬೇಡಿ.

ಅರ್ಥ ಮತ್ತು ಶೈಲಿಯ ನಿಯಮಗಳು:
- ವ್ಯಕ್ತಿನಾಮ, ಸ್ಥಳನಾಮ, ದೇಶದ ಹೆಸರು, ಹುದ್ದೆ, ವಾಹನ/ಸಂಸ್ಥೆಯ ಹೆಸರು, ಸಂಖ್ಯೆಗಳು, ಉಲ್ಲೇಖಗಳು ಮತ್ತು ಸುದ್ದಿಯ ವಿವರಗಳನ್ನು ಹಾಗೆಯೇ ಉಳಿಸಿ.
- ಮೂಲ ಪಠ್ಯದಲ್ಲಿರುವ ಏಕವಚನ/ಬಹುವಚನ, ಕಾಲ, ಗೌರವಸೂಚಕ ಧಾಟಿ ಮತ್ತು ಖಚಿತತೆ/ಅನಿಶ್ಚಿತತೆಯನ್ನು ಬದಲಿಸಬೇಡಿ.
- ಮೂಲದಲ್ಲಿರುವ ತಪ್ಪು ಲಿಪಿ ಅಥವಾ ತಪ್ಪು ಪದರೂಪವನ್ನು ಸರಿಪಡಿಸಬಹುದು; ಅದನ್ನು ಪದಮೂಲದ ಬದಲಾವಣೆ ಎಂದು ತೋರಿಸಬೇಡಿ.
- ಔತಣಕೂಟ, ಪ್ರಧಾನಮಂತ್ರಿ, ಶೃಂಗಸಭೆ ಮುಂತಾದ ಈಗಾಗಲೇ ಸಹಜವಾಗಿ ಬಳಕೆಯಲ್ಲಿರುವ ಪದಗಳನ್ನು ಕೇವಲ ಸಂಸ್ಕೃತ ಮೂಲದ್ದೆಂದು ಬದಲಿಸಬೇಡಿ.
- ಪರ್ಯಾಯವಿಲ್ಲದ ಪದವನ್ನು ಉಳಿಸಿ; ಅದರ ಬಗ್ಗೆ ಚಿಕ್ಕ ವಿವರಣೆ ಬೇಕಾದರೆ ನೀಡಿ.
- ವಿವರಣೆ ಮತ್ತು ಪ್ರತಿಯೊಂದು ಕಾರಣವನ್ನೂ ಕನ್ನಡದಲ್ಲೇ, ಚಿಕ್ಕದಾಗಿ ಬರೆಯಿರಿ.
- ಸಂಪೂರ್ಣ ಮರುಬರಹವನ್ನು ಮಾತ್ರ rewrittenKannada ಯಲ್ಲಿ ನೀಡಿ. ವಿಶ್ಲೇಷಣೆ, ಕರಡುಗಳು ಅಥವಾ Markdown ಅನ್ನು JSON ಹೊರಗೆ ಬರೆಯಬೇಡಿ.
- ಬದಲಾವಣೆ ಅಗತ್ಯವಿಲ್ಲದಿದ್ದರೆ ಮೂಲ ಪಠ್ಯವನ್ನು ಉಳಿಸಿ; ಕೃತಕವಾಗಿ ಹೆಚ್ಚು ಬದಲಾವಣೆಗಳನ್ನು ಸೃಷ್ಟಿಸಬೇಡಿ.

ಪ್ರತಿಕ್ರಿಯೆಯ JSON ನಲ್ಲಿ ಈ schema ಯ ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ತುಂಬಿ. replacements ನಲ್ಲಿ ಮೂಲ ಪಠ್ಯದಲ್ಲಿರುವ ನಿಖರ ಪದ/ಪದಗುಚ್ಛವನ್ನು original ಆಗಿ ನೀಡಿ. ಪದಮೂಲದ ಬದಲಾವಣೆ ಮತ್ತು ಕೇವಲ ವ್ಯಾಕರಣ/ಲಿಪಿ ತಿದ್ದುಪಡಿಯ ನಡುವಿನ ವ್ಯತ್ಯಾಸವನ್ನು reasonKannada ಯಲ್ಲಿ ಸ್ಪಷ್ಟಪಡಿಸಿ.

PROJECT LEXICON:
${JSON.stringify(lexicon)}`;

    try {
      const userInstruction = "Rewrite this Kannada text now. Produce a genuinely native-word-oriented Kannada version, not a description of the task:\n\n" + text;
      const runModel = (model, retry = false) => {
        const options = {
          messages: [
            { role: "system", content: system + (retry ? "\\n\\nಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ: schema ಪ್ರಕಾರದ ಒಂದು ಸಂಪೂರ್ಣ JSON ವಸ್ತುವನ್ನು ಮಾತ್ರ ನೀಡಿ. JSON ಹೊರಗೆ ವಿವರಣೆ ಅಥವಾ Markdown ಬೇಡ. ಕನ್ನಡ ಅಕ್ಷರಗಳನ್ನು ನೇರವಾಗಿ ಬಳಸಿ." : "") },
            { role: "user", content: userInstruction }
          ],
          response_format: responseSchema,
          temperature: retry ? 0 : 0.15,
          max_tokens: retry ? 900 : 1100
        };
        // Gemma 4's default thinking output consumed the response budget in testing.
        // Disable it so the model returns the actual Kannada rewrite promptly.
        if (model === MODEL) options.chat_template_kwargs = { enable_thinking: false };
        return env.AI.run(model, options);
      };
      const startedAt = Date.now();
      console.log("Kannada rewrite started", { textLength: text.length, lexiconEntries: lexicon.length });
      let raw;
      let result;
      try {
        raw = await withTimeout(runModel(MODEL, false), MODEL_TIMEOUT_MS);
      } catch (primaryError) {
        console.warn("Primary Kannada model unavailable; using fast fallback", {
          message: primaryError && primaryError.message ? primaryError.message : "unknown"
        });
        raw = await withTimeout(runModel(FALLBACK_MODEL, false), MODEL_TIMEOUT_MS);
      }
      try {
        result = parseModelOutput(raw);
      } catch (parseError) {
        raw = await withTimeout(runModel(FALLBACK_MODEL, true), MODEL_TIMEOUT_MS);
        result = parseModelOutput(raw);
      }
      console.log("Kannada rewrite model completed", { durationMs: Date.now() - startedAt, model: raw && raw.model ? raw.model : "Workers AI" });
      if (!result || typeof result.rewrittenKannada !== "string" || !Array.isArray(result.replacements)) {
        throw new Error("The language model returned an incomplete response.");
      }
      const rewrittenKannada = result.rewrittenKannada.trim();
      if (!rewrittenKannada || rewrittenKannada.length > 8000) throw new Error("The rewritten text was empty or too long.");
      const approvedWords = new Set(lexicon.flatMap(entry => entry.candidates
        .filter(candidate => candidate.origin === "verified_dravidian")
        .map(candidate => candidate.word)));
      const wordsNeedingReview = Array.isArray(result.wordsNeedingReview) ? result.wordsNeedingReview.slice(0, 40) : [];
      const replacements = result.replacements.slice(0, 40).map(item => {
        const replacement = typeof item.replacement === "string" ? item.replacement.trim() : "";
        if (replacement && !approvedWords.has(replacement)) {
          const reviewLabel = (item.original || "") + " → " + replacement;
          if (!wordsNeedingReview.includes(reviewLabel)) wordsNeedingReview.push(reviewLabel);
          return {
            ...item,
            basis: "uncertain",
            reasonKannada: (item.reasonKannada || "") + " ಈ ಪರ್ಯಾಯವು ಈಗಿನ ಪರಿಶೀಲಿತ ಪದಪಟ್ಟಿಯಲ್ಲಿಲ್ಲ; ಸಮುದಾಯದ ಪರಿಶೀಲನೆ ಅಗತ್ಯ."
          };
        }
        return item;
      });
      return reply({
        rewrittenKannada,
        changed: rewrittenKannada !== text,
        explanationKannada: typeof result.explanationKannada === "string" ? result.explanationKannada : "",
        replacements,
        wordsNeedingReview
      });
    } catch (error) {
      return reply({ error: "Kannada rewrite could not be completed. Please try again. " + (error && error.message ? error.message.slice(0, 180) : "") }, 502, origin);
    }
  }
};
