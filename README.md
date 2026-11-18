# ಕನ್ನಡ ದೇಸಿ · Kannada Desi Words

A simple, shareable web app that shows Sanskrit-origin words in Kannada alongside native Dravidian / desi alternatives.

## Features

- Clean card layout with Kannada script support
- Search by word or meaning
- Filter by category (Everyday, Nature, Body, Directions, Abstract)
- 32 high-quality starter pairs from open / common-knowledge sources
- Static GitHub Pages frontend with a separate Cloudflare Workers AI rewrite API
- Ready to host on Vercel, Netlify, or GitHub Pages

## AI-powered native Kannada rewrite\n\nThe rewrite tab calls the deployed Cloudflare Worker at `https://kannadawords-ai.tulasianand6.workers.dev/api/rewrite` using the Workers AI Llama 3.3 70B instruct model. The browser sends the submitted Kannada text and the current reviewed word lexicon; the Worker returns a context-aware Kannada rewrite and an explanation of proposed word choices. The AI binding is server-side, so no provider key is exposed in the browser. The Worker restricts browser origins to the GitHub Pages site, limits input to 4,000 characters, and applies an approximate limit of 6 requests per minute per IP.\n\nThe Worker source and Wrangler configuration are in `worker/ai-rewrite.js` and `worker/ai-wrangler.toml`. Workers AI inference is usage-billed by Cloudflare. The existing moderation Worker remains separate and unchanged. AI-generated alternatives outside the reviewed lexicon are labelled for community review rather than presented as verified etymologies.\n\nAI suggestions are editorial aids, not authoritative etymological rulings; community review remains necessary.\n\n## Sources

Only open and common-knowledge material was used:

- Everyday spoken Kannada forms
- Public comparative wordlists
- DravLex (CC BY 4.0) for root verification where applicable
- No copyrighted books (DEDR full text, commercial publications, etc.)

## How to run locally

Just open `index.html` in a browser, or:

```bash
npx serve .
```

## How to deploy (free)

### Vercel (recommended)
1. Push this folder to a GitHub repo
2. Import the repo at https://vercel.com
3. Deploy – done

### Netlify / GitHub Pages
Same – just point to the folder containing `index.html`.

## Next steps you can add

- Simple voting buttons (localStorage or Supabase)
- Community submission form
- More pairs from DravLex CLDF data
- Tamil / Tulu cognate columns

## License

The application code is free to use and share.  
Please keep attribution for any data drawn from DravLex (CC BY 4.0).
