-- PostgreSQL foundation for Halegannada lexical data.
-- Imported source rows remain unpublished until a human rights/content review.

CREATE TABLE IF NOT EXISTS halegannada_import_rows (
  id BIGSERIAL PRIMARY KEY,
  dataset_name TEXT NOT NULL DEFAULT 'kishanpb/halegannada-hosakannada',
  dataset_config TEXT NOT NULL,
  dataset_split TEXT NOT NULL CHECK (dataset_split IN ('train', 'validation', 'test', 'unknown')),
  source_row_id TEXT NOT NULL,
  old_form TEXT NOT NULL,
  modern_gloss TEXT NOT NULL,
  source_ids TEXT,
  quality_tier TEXT,
  label_status TEXT,
  release_license TEXT NOT NULL DEFAULT 'CC BY 4.0',
  upstream_rights_status TEXT NOT NULL DEFAULT 'source_page_cited_license_not_visible_needs_manual_review',
  license_evidence_url TEXT,
  rights_review_notes TEXT,
  source_url TEXT,
  source_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  rights_review_status TEXT NOT NULL DEFAULT 'pending_rights_review'
    CHECK (rights_review_status IN ('pending_rights_review', 'approved', 'rejected')),
  content_review_status TEXT NOT NULL DEFAULT 'pending_content_review'
    CHECK (content_review_status IN ('pending_content_review', 'approved', 'rejected')),
  imported_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (dataset_name, dataset_config, dataset_split, source_row_id)
);

CREATE INDEX IF NOT EXISTS idx_halegannada_import_old_form
  ON halegannada_import_rows (old_form);
CREATE INDEX IF NOT EXISTS idx_halegannada_import_review
  ON halegannada_import_rows (rights_review_status, content_review_status);

CREATE TABLE IF NOT EXISTS halegannada_entries (
  id BIGSERIAL PRIMARY KEY,
  import_row_id BIGINT NOT NULL UNIQUE
    REFERENCES halegannada_import_rows(id) ON DELETE RESTRICT,
  old_form TEXT NOT NULL,
  modern_gloss TEXT NOT NULL,
  sense_note TEXT,
  editorial_note TEXT,
  reviewer TEXT,
  reviewed_at TIMESTAMPTZ,
  publication_status TEXT NOT NULL DEFAULT 'unpublished'
    CHECK (publication_status IN ('unpublished', 'published', 'withdrawn')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CHECK (
    publication_status <> 'published'
    OR (reviewer IS NOT NULL AND reviewed_at IS NOT NULL)
  )
);

CREATE INDEX IF NOT EXISTS idx_halegannada_entries_old_form
  ON halegannada_entries (old_form);
CREATE INDEX IF NOT EXISTS idx_halegannada_entries_public
  ON halegannada_entries (publication_status, old_form);

-- Safe application-facing view: only curated and published entries appear.
CREATE OR REPLACE VIEW published_halegannada_entries AS
SELECT
  e.id,
  e.old_form,
  e.modern_gloss,
  e.sense_note,
  e.editorial_note,
  i.dataset_name,
  i.dataset_config,
  i.dataset_split,
  i.source_row_id,
  i.source_ids,
  i.release_license,
  i.upstream_rights_status,
  i.license_evidence_url,
  i.rights_review_notes,
  i.source_url
FROM halegannada_entries e
JOIN halegannada_import_rows i ON i.id = e.import_row_id
WHERE e.publication_status = 'published'
  AND i.rights_review_status = 'approved'
  AND i.content_review_status = 'approved';
