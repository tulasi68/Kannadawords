// Same-origin Vercel proxy for Alar's Kannada → English dictionary lookup.
// The upstream Alar page is server-rendered; this endpoint extracts plain-text
// definitions so the browser does not depend on cross-origin HTML access.

function decodeHtml(value) {
  return String(value || "")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function plainText(value) {
  return decodeHtml(String(value || "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function extractEntries(html) {
  const starts = [...html.matchAll(/<li\b(?=[^>]*\bclass=["'][^"']*\bentry\b)[^>]*>/gi)];
  const entries = [];
  starts.forEach((match, index) => {
    const end = index + 1 < starts.length ? starts[index + 1].index : html.length;
    const block = html.slice(match.index, end);
    const titleMatch = block.match(/<h3\b[^>]*class=["'][^"']*\btitle\b[^"']*["'][^>]*>([\s\S]*?)<\/h3>/i);
    if (!titleMatch) return;
    const word = plainText(titleMatch[1]);
    if (!word) return;
    const pronunciationMatch = block.match(/<span\b[^>]*class=["'][^"']*\bpronun\b[^"']*["'][^>]*>([\s\S]*?)<\/span>/i);
    const definitions = [];
    let currentType = "";
    const itemPattern = /<div\b(?=[^>]*\bclass=["'][^"']*\btypes\b)[^>]*>\s*<span[^>]*>([\s\S]*?)<\/span>\s*<\/div>|<div\b(?=[^>]*\bclass=["'][^"']*\bd\b)[^>]*>([\s\S]*?)<\/div>/gi;
    for (const item of block.matchAll(itemPattern)) {
      if (item[1] !== undefined) {
        currentType = plainText(item[1]);
      } else {
        const text = plainText(item[2]);
        if (text) definitions.push({ type: currentType, text });
      }
    }
    if (definitions.length) {
      entries.push({
        word,
        pronunciation: pronunciationMatch ? plainText(pronunciationMatch[1]).replace(/^♪\s*/, "") : "",
        definitions
      });
    }
  });
  return entries;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const word = String(req.query?.word || "").normalize("NFC").trim();
  if (!word || word.length > 80 || !/^[\u0C80-\u0CFF]+$/u.test(word)) {
    return res.status(400).json({ error: "Enter one Kannada word for dictionary lookup." });
  }

  try {
    const upstreamUrl = "https://alar.ink/dictionary/kannada/english/" + encodeURIComponent(word);
    const upstream = await fetch(upstreamUrl, {
      headers: { "Accept": "text/html", "User-Agent": "KannadaWords dictionary lookup" },
      signal: AbortSignal.timeout(10000)
    });
    if (!upstream.ok) {
      return res.status(upstream.status === 404 ? 200 : 502).json({
        entries: [],
        error: upstream.status === 404 ? undefined : "Alar dictionary is temporarily unavailable."
      });
    }
    const html = await upstream.text();
    if (!html || html.length > 3000000) {
      return res.status(502).json({ error: "Alar returned an unexpected dictionary response." });
    }
    return res.status(200).json({
      word,
      source: upstreamUrl,
      entries: extractEntries(html)
    });
  } catch (error) {
    console.error("Alar lookup proxy error", error);
    return res.status(502).json({ error: "Could not reach Alar. Please try again shortly." });
  }
}
