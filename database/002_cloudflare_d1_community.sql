-- Kannada Desi shared community data (Cloudflare D1 / SQLite)
-- Votes are one-per-device per alternative. Suggestions are shared publicly.
-- Browser device IDs are pseudonymous, not verified user identities.

CREATE TABLE IF NOT EXISTS community_votes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  entry_id TEXT NOT NULL,
  alternative_id TEXT NOT NULL,
  device_id TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (entry_id, alternative_id, device_id)
);

CREATE INDEX IF NOT EXISTS idx_community_votes_entry
  ON community_votes(entry_id, alternative_id);

CREATE TABLE IF NOT EXISTS community_suggestions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  entry_id TEXT NOT NULL,
  word TEXT NOT NULL CHECK (length(word) BETWEEN 1 AND 60),
  normalized_word TEXT NOT NULL,
  device_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'visible' CHECK (status IN ('visible', 'hidden')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (entry_id, normalized_word)
);

CREATE INDEX IF NOT EXISTS idx_community_suggestions_entry
  ON community_suggestions(entry_id, status, id);
