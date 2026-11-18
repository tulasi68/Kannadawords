// Vercel serverless proxy for the Cloudflare Workers AI rewrite endpoint.
// Browser calls same-origin /api/rewrite so CORS / CF edge blocks no longer
// surface as opaque "Failed to fetch" errors in the browser.

const WORKER_URL = "https://kannadawords-ai.tulasianand6.workers.dev/api/rewrite";

export default async function handler(req, res) {
  // Always allow the site origin (same-origin in production).
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let body = req.body;
    // Vercel may already parse JSON; ensure we forward a string.
    if (typeof body === "object" && body !== null) {
      body = JSON.stringify(body);
    } else if (typeof body !== "string") {
      // Read raw body if needed
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      body = Buffer.concat(chunks).toString("utf8");
    }

    if (!body || body.length > 120000) {
      return res.status(413).json({ error: "Request is too large. Please shorten the text." });
    }

    const upstream = await fetch(WORKER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        // Pass through a stable origin so the Worker can log if needed
        Origin: "https://kannadawords.vercel.app"
      },
      body
    });

    const text = await upstream.text();
    let payload;
    try {
      payload = JSON.parse(text);
    } catch {
      // Cloudflare sometimes returns plain "error code: 1010" without CORS.
      // Surface a clear message instead of letting the browser fail opaquely.
      return res.status(upstream.status || 502).json({
        error: "AI rewrite service is temporarily unavailable (upstream " + (upstream.status || "error") + "). Please try again in a minute."
      });
    }

    return res.status(upstream.status).json(payload);
  } catch (err) {
    console.error("rewrite proxy error", err);
    return res.status(502).json({
      error: "Could not reach the Kannada rewrite service. Please try again shortly."
    });
  }
}
