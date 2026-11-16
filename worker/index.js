const corsHeaders = {
  "Access-Control-Allow-Origin": "https://kannadawords.vercel.app",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
  "Vary": "Origin"
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
  });
}

function validDeviceId(value) {
  return typeof value === "string" && /^[A-Za-z0-9_-]{16,80}$/.test(value);
}
function validSlug(value) {
  return typeof value === "string" && /^[A-Za-z0-9_-]{1,80}$/.test(value);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    if (origin && origin !== "https://kannadawords.vercel.app" &&
        !/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
      return json({ error: "Origin not allowed" }, 403);
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: {
        ...corsHeaders,
        "Access-Control-Allow-Origin": origin || corsHeaders["Access-Control-Allow-Origin"]
      }});
    }

    const url = new URL(request.url);
    if (url.pathname === "/api/health" && request.method === "GET") {
      return json({ ok: true, service: "kannadawords-api", database: "connected" });
    }

    if (url.pathname === "/api/community" && request.method === "GET") {
      const [voteRows, suggestionRows] = await Promise.all([
        env.DB.prepare(
          "SELECT entry_id, alternative_id, COUNT(*) AS vote_count FROM community_votes GROUP BY entry_id, alternative_id"
        ).all(),
        env.DB.prepare(
          "SELECT id, entry_id, word, created_at FROM community_suggestions WHERE status = 'visible' ORDER BY id DESC LIMIT 1000"
        ).all()
      ]);

      const votes = {};
      for (const row of voteRows.results || []) {
        votes[row.entry_id] ||= {};
        votes[row.entry_id][row.alternative_id] = Number(row.vote_count);
      }
      const suggestions = {};
      for (const row of suggestionRows.results || []) {
        suggestions[row.entry_id] ||= [];
        suggestions[row.entry_id].push({
          id: `community_${row.id}`,
          word: row.word,
          note: "Community suggestion",
          proto: null, tamil: null, tulu: null
        });
      }
      return json({ votes, suggestions });
    }

    if (url.pathname === "/api/vote" && request.method === "POST") {
      let body;
      try { body = await request.json(); } catch { return json({ error: "Invalid JSON" }, 400); }
      const { entryId, alternativeId, deviceId } = body || {};
      if (!validSlug(entryId) || !validSlug(alternativeId) || !validDeviceId(deviceId)) {
        return json({ error: "Invalid vote details" }, 400);
      }
      if (alternativeId.startsWith("community_")) {
        const suggestionId = Number(alternativeId.slice("community_".length));
        if (!Number.isSafeInteger(suggestionId) || suggestionId < 1) return json({ error: "Invalid alternative" }, 400);
        const exists = await env.DB.prepare(
          "SELECT id FROM community_suggestions WHERE id = ? AND entry_id = ? AND status = 'visible'"
        ).bind(suggestionId, entryId).first();
        if (!exists) return json({ error: "Suggestion not found" }, 404);
      }
      const result = await env.DB.prepare(
        "INSERT OR IGNORE INTO community_votes (entry_id, alternative_id, device_id) VALUES (?, ?, ?)"
      ).bind(entryId, alternativeId, deviceId).run();
      return json({ ok: true, recorded: Number(result.meta?.changes || 0) > 0 });
    }

    if (url.pathname === "/api/suggestions" && request.method === "POST") {
      let body;
      try { body = await request.json(); } catch { return json({ error: "Invalid JSON" }, 400); }
      const { entryId, word, deviceId } = body || {};
      if (!validSlug(entryId) || !validDeviceId(deviceId) ||
          typeof word !== "string" || !word.trim() || word.trim().length > 60) {
        return json({ error: "Enter a Kannada alternative of 1–60 characters" }, 400);
      }
      const cleanWord = word.trim().replace(/\s+/g, " ");
      const normalized = cleanWord.toLocaleLowerCase("kn");
      try {
        const result = await env.DB.prepare(
          "INSERT INTO community_suggestions (entry_id, word, normalized_word, device_id) VALUES (?, ?, ?, ?)"
        ).bind(entryId, cleanWord, normalized, deviceId).run();
        const id = Number(result.meta?.last_row_id);
        return json({ ok: true, suggestion: {
          id: `community_${id}`, word: cleanWord, note: "Community suggestion",
          proto: null, tamil: null, tulu: null
        }}, 201);
      } catch (error) {
        const existing = await env.DB.prepare(
          "SELECT id FROM community_suggestions WHERE entry_id = ? AND normalized_word = ?"
        ).bind(entryId, normalized).first();
        if (existing) return json({ error: "This alternative is already suggested for this entry." }, 409);
        return json({ error: "Could not save suggestion" }, 500);
      }
    }

    return json({ error: "Not found" }, 404);
  }
};
