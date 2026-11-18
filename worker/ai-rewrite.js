const ALLOWED_ORIGIN = "https://tulasi68.github.io";
const MODEL = "@cf/meta/llama-3.3-70b-instruct-fp8-fast";
const MAX_TEXT = 4000;

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

function reply(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": ALLOWED_ORIGIN,
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "Content-Type",
      "vary": "Origin",
      "cache-control": "no-store"
    }
  });
}

function parseModelOutput(raw) {
  let value = raw && Object.prototype.hasOwnProperty.call(raw, "response") ? raw.response : raw;
  if (typeof value === "string") {
    const cleaned = value.trim().replace(/^\x60\x60\x60(?:json)?\s*/i, "").replace(/\s*\x60\x60\x60$/, "");
    value = JSON.parse(cleaned);
  }
  if (value && typeof value.response === "string") value = JSON.parse(value.response);
  return value;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const url = new URL(request.url);
    if (request.method === "GET" && url.pathname === "/health" && !origin) {
      return new Response(JSON.stringify({ok:true,service:"Kannada Desi AI rewrite"}), {headers:{"content-type":"application/json","cache-control":"no-store"}});
    }
    if (origin !== ALLOWED_ORIGIN) return new Response("Origin not allowed", { status: 403 });

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "access-control-allow-origin": ALLOWED_ORIGIN,
          "access-control-allow-methods": "POST, OPTIONS",
          "access-control-allow-headers": "Content-Type",
          "access-control-max-age": "86400",
          "vary": "Origin"
        }
      });
    }

    if (url.pathname === "/health" && request.method === "GET") return reply({ ok: true, service: "Kannada Desi AI rewrite" });
    if (url.pathname !== "/api/rewrite" || request.method !== "POST") return reply({ error: "Not found" }, 404);

    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    if (env.TRANSLATE_LIMITER) {
      const { success } = await env.TRANSLATE_LIMITER.limit({ key: ip });
      if (!success) return reply({ error: "Too many rewrites. Please wait one minute and try again." }, 429);
    }

    const length = Number(request.headers.get("content-length") || 0);
    if (length > 100000) return reply({ error: "Request is too large. Please shorten the text and try again." }, 413);

    // The website sends JSON as text/plain so the browser can make a CORS
    // simple request without an OPTIONS preflight. Parse and validate it here.
    let body;
    try { body = JSON.parse(await request.text()); } catch { return reply({ error: "Please send valid JSON." }, 400); }
    const text = typeof body.text === "string" ? body.text.trim() : "";
    if (!text || text.length > MAX_TEXT) return reply({ error: "Enter Kannada text of up to 4,000 characters." }, 400);
    if (!/[\u0C80-\u0CFF]/.test(text)) return reply({ error: "Please enter text containing Kannada script." }, 400);

    const lexicon = Array.isArray(body.lexicon) ? body.lexicon.slice(0, 120).map(entry => ({
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
    })).filter(entry => entry.sourceForms.length && entry.candidates.length) : [];

    const system = `You are an expert Kannada language editor. Rewrite Kannada text into fluent, natural, Dravidian-oriented Kannada (ಅಚ್ಚ ಕನ್ನಡ). Output remains Kannada script.

Actively identify Sanskrit-derived tatsama vocabulary and replace it wherever a natural Kannada alternative exists. Do not stop at exact matches in the supplied lexicon.

Priority:
1. Use the community lexicon first. These are the only candidates that may be labelled verified_dravidian.
2. For other words, you may use well-established everyday Kannada alternatives you know, but label them uncertain and list them for community review. Never claim their etymology is verified unless the target word appears in the supplied lexicon.
3. Use natural Kannada idiom and restructure the entire sentence. Do not mechanically substitute words or preserve an unnatural grammatical construction.

Examples of common alternatives (use only when context fits): ಸಂರಕ್ಷಣೆ → ಕಾಪಾಡು/ಉಳಿಸು; ಯೋಜನೆ → ಏರ್ಪಾಡು/ಹಮ್ಮಿಕೆ; ಸರ್ಕಾರ → ಆಳುವ ಮಂದಿ; ವಿಶೇಷ → ಹೊಸ ಬಗೆಯ; ಸಮಸ್ಯೆ → ತೊಂದರೆ; ಸಹಾಯ → ನೆರವು; ಮಾಹಿತಿ → ತಿಳಿವು; ಸಂಪರ್ಕ → ನಂಟು; ಸಂವಹನ → ಮಾತುಕತೆ; ಶಿಕ್ಷಣ → ಕಲಿಕೆ; ಅಭಿವೃದ್ಧಿ → ಬೆಳೆವಣಿಗೆ; ಅಭಿಪ್ರಾಯ → ಅನಿಸಿಕೆ; ಪ್ರಶ್ನೆ → ಕೇಳಿಕೆ; ಅಂತ್ಯ → ಕೊನೆ; ಅಗತ್ಯ → ಬೇಕಾದ; ಕಾರ್ಯ → ಕೆಲಸ; ನಿರ್ವಹಣೆ → ನಡೆಸುವಿಕೆ.

Grammar example: "ಈ ಪ್ರದೇಶದಲ್ಲಿ ವೃಕ್ಷಗಳ ಸಂರಕ್ಷಣೆಗೆ ಸರ್ಕಾರವು ವಿಶೇಷ ಯೋಜನೆಗಳನ್ನು ರೂಪಿಸಿದೆ" should become something idiomatic like "ಈ ಪ್ರದೇಶದ ಮರಗಳನ್ನು ಕಾಪಾಡಲು ಆಳುವ ಮಂದಿ ಹೊಸ ಬಗೆಯ ಏರ್ಪಾಡುಗಳನ್ನು ಮಾಡಿದ್ದಾರೆ". Prefer "ಆಳುವ ಮಂದಿ" over the abstract "ಆಳ್ವಿಕೆ" when the sentence refers to the people in government.

Rules:
- Preserve meaning, tense, person, number, politeness, tone and details.
- Keep proper names, numbers, quotations and technical terms.
- Tamil/Tulu cognates are comparative evidence only; never output Tamil/Tulu words.
- Avoid obscure coinages, forced changes and semantic drift.
- If no good native equivalent is known, leave that word and explain briefly.
- Output a genuinely rewritten sentence, not a near-copy when good alternatives exist.
- Return only the required JSON.

PROJECT LEXICON:
${JSON.stringify(lexicon)}`;

    try {
      const raw = await env.AI.run(MODEL, {
        messages: [
          { role: "system", content: system },
          { role: "user", content: "Rewrite this Kannada text now. Produce a genuinely native-word-oriented Kannada version, not a description of the task:\n\n" + text }
        ],
        response_format: responseSchema,
        temperature: 0.2,
        max_tokens: 1800
      });
      const result = parseModelOutput(raw);
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
      return reply({ error: "Kannada rewrite could not be completed. Please try again. " + (error && error.message ? error.message.slice(0, 180) : "") }, 502);
    }
  }
};
