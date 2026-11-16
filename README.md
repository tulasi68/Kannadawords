# ಕನ್ನಡ ದೇಸಿ · Kannada Desi Words

A simple, shareable web app that shows Sanskrit-origin words in Kannada alongside native Dravidian / desi alternatives.

## Features

- Clean card layout with Kannada script support
- Search by word or meaning
- Filter by category (Everyday, Nature, Body, Directions, Abstract)
- 32 high-quality starter pairs from open / common-knowledge sources
- Zero backend – pure static HTML + JS
- Ready to host on Vercel, Netlify, or GitHub Pages

## Sources

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
