# DFARS/CMMC Compliance Platform – Post-MVP Foundation

This is the **production-ready foundation** for a DFARS 252.204-7012 / NIST 800-171 / CMMC platform.
It supersedes the MVP repo (kept for reference).

## Stack
- Web: React (Vite + TS)
- API: FastAPI + SQLModel (Pydantic v1) + Alembic
- DB: PostgreSQL
- Storage: MinIO (S3-compatible dev) → S3 in prod
- AV: ClamAV
- Orchestration: Docker Compose

## Roadmap (Phase 1)
1) Scaffold web + api apps (Hello World) under `apps/`
2) Docker Compose up cleanly
3) Pin Pydantic v1 + SQLModel 0.0.21 + FastAPI 0.95.2
4) Minimal tests pass (BE/FE)
