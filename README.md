# ಕನ್ನಡ ದೇಸಿ · Kannada Desi Words

A community-driven Kannada vocabulary project exploring native Kannada alternatives, historical Halegannada forms and Dravidian linguistic connections.

## Current application

- Static HTML, CSS and JavaScript frontend hosted at Vercel.
- Cloudflare Worker API for shared community activity.
- Cloudflare D1 database for shared votes and suggestions.
- Existing 42 starter word pairs remain bundled in `data.js`; community data is fetched from the API.
- Search and category filters run in the browser.

## Shared community storage

The intended API endpoint is `https://kannadawords-api.tulasianand6.workers.dev`. The Worker has not yet been deployed because Cloudflare's D1 management API is returning 404 for the newly created database; shared community features will become active after the binding and migration are successfully applied.

- `GET /api/health` — service health check.
- `GET /api/community` — aggregated votes and visible suggestions.
- `POST /api/vote` — one vote per browser device ID, entry and alternative.
- `POST /api/suggestions` — add a shared community suggestion.

The browser stores a random device identifier in localStorage. This prevents accidental repeated votes from the same browser profile, but it is **not authentication** and can be reset or copied. Votes are community-wide; personal contribution history across devices requires a future sign-in feature.

## Cloudflare resources

- D1 database: `kannadawords-db` (created; API binding and migration pending)
- Worker: `kannadawords-api` (deployment pending)
- D1 binding in the Worker: `DB`
- Migration: `database/002_cloudflare_d1_community.sql`

## Deploy / operate

The Worker code is in `worker/index.js`. Its D1 schema is in `database/002_cloudflare_d1_community.sql`. The deployed Worker is bound to the dedicated D1 database above.

For local development, use Cloudflare's current Workers tooling and bind a local D1 database named `DB`. Apply the SQL migration before testing the Worker.

## Data and licensing

The original starter vocabulary remains in `data.js`. Halegannada lexical data is handled separately under the rights-aware staging policy documented in `docs/HALEGANNADA_DATASET_INTEGRATION.md`. Do not publish entries whose upstream rights and content review are incomplete.

## License

Application code is free to use and share. Retain the attribution for datasets under their respective licenses.
