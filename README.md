# Teachers-Pet.ai

Your AI teaching assistant, unified. Style-matching writing generation, classroom translation (English → Spanish), and Google sign-in — one repo, one stack: **Vite + React + TypeScript** frontend and **FastAPI** backend.

## Repo layout

- `frontend/` Vite + React + TypeScript app
- `backend/` FastAPI API, sqlite3, local storage, parsers, providers
- `wiki/` project documentation for humans and coding agents
- `docs/plans/` design and implementation plans

## Features

- **Styles**: upload reference documents, create named styles, generate new text in a matching style, edit output, export PDF/DOCX.
- **Translate**: translate English text to Spanish for multilingual classrooms (`/translate`).
- **Auth**: sign in with Google; account page shows the signed-in user.
- **Landing**: product overview and contact (`/landing`).

## Backend setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

## Frontend setup

```bash
cd frontend
npm install
npm run dev
```

## Environment variables

Backend (`backend/.env`):
- `OLLAMA_API_KEY`, `OLLAMA_MODEL` (default `llama3.1`)
- `ANTHROPIC_API_KEY`, `ANTHROPIC_MODEL` (default `claude-3-5-sonnet-20241022`)
- `STORAGE_TYPE` (default `local`), `STORAGE_BASE_DIR` (default `./storage`)
- `DATABASE_URL` (default `sqlite:///./storage/gpt-writer.db`)
- `DEEPL_API_KEY` — DeepL key for the English → Spanish translation endpoint
- `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET` — Google OAuth credentials for sign-in
- `SESSION_SECRET` — session cookie signing secret
- `FRONTEND_ORIGIN` (default `http://localhost:5173`) — where the OAuth callback redirects

Frontend (`frontend/.env` optional):
- `VITE_API_URL` if you later wire the client to env-based URLs

## Tests

Backend:

```bash
cd backend
python run_test.py
```

Frontend:

```bash
cd frontend
npm test
```
