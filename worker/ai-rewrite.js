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
    if (length > 24000) return reply({ error: "Request is too large." }, 413);

    let body;
    try { body = await request.json(); } catch { return reply({ error: "Please send valid JSON." }, 400); }
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

    const system = `You are an expert Kannada language editor specialising in native Dravidian-oriented Kannada (ಅಚ್ಚ ಕನ್ನಡ). Rewrite the user's Kannada text into natural, fluent Kannada while reducing unnecessary Sanskrit-derived vocabulary.

Rules:
1. Output must remain Kannada in Kannada script. Never translate into Tamil, Tulu, Telugu, Malayalam, or English.
2. Understand the complete sentence first. Preserve meaning, tone, tense, case, number, person, politeness, and idiomatic Kannada grammar. Rebuild suffixes and sentence structure where needed; never mechanically replace strings.
3. The supplied project lexicon is the primary authority. Prefer candidates marked verified_dravidian. Use tadbhava only if no suitable native alternative fits, and identify it. Use a coined form only if the supplied lexicon explicitly marks it coined_from_dravidian. Never invent an etymology.
4. Select alternatives by sentence meaning. Tamil/Tulu cognates are comparative evidence, not words to copy into Kannada.
5. Preserve proper names, numbers, quotations, technical terms, and words whose meaning would be damaged. Do not force a change without a sound alternative.
6. Make genuine native-word substitutions wherever appropriate. Do not merely repeat the input; but do not change words solely to make the output look different.
7. Return the requested JSON only. Explain important choices briefly in Kannada. List unsupported words for human review.
8. If no reliable change is possible, return the original and explain why honestly.

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
      return reply({
        rewrittenKannada,
        changed: rewrittenKannada !== text,
        explanationKannada: typeof result.explanationKannada === "string" ? result.explanationKannada : "",
        replacements: result.replacements.slice(0, 40),
        wordsNeedingReview: Array.isArray(result.wordsNeedingReview) ? result.wordsNeedingReview.slice(0, 40) : []
      });
    } catch (error) {
      return reply({ error: "Kannada rewrite could not be completed. Please try again. " + (error && error.message ? error.message.slice(0, 180) : "") }, 502);
    }
  }
};
