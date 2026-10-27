# Teachers-Pet.ai — AI-Assisted Teacher Communication

Teachers-Pet.ai is an education-focused application prototype exploring how AI-powered services can support teachers in preparing personalized updates and multilingual communication for students' families. This repository contains the **Next.js frontend** and its authentication integration; the Python translation service is maintained separately.

## Engineering Highlights

- **Database-backed authentication:** Integrates Google OAuth via Auth.js (NextAuth) with its PostgreSQL adapter and a configurable PostgreSQL connection pool.
- **Server-side session gating:** Uses `auth()` in an async Next.js App Router page to conditionally render the authenticated application interface.
- **Microservice integration prototype:** Implements client-side HTTP request logic for a JSON `POST` to a separate Python English-to-Spanish translation endpoint (`/translate-eng-to-span`).
- **Modern full-stack UI structure:** Uses Next.js App Router, React, TypeScript, server/client components, and reusable UI components.
- **Responsive landing page:** Uses Tailwind CSS for a responsive layout, mobile navigation, product positioning, and waitlist integration.
- **Asynchronous data infrastructure:** Configures a shared TanStack Query provider in the root layout to support client-side server-state management.

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | Next.js 15, React 18, TypeScript, Tailwind CSS |
| Authentication | Auth.js / NextAuth, Google OAuth |
| Database | PostgreSQL, `pg`, Auth.js PostgreSQL adapter |
| Client-side data | TanStack Query, Fetch API |
| Integration | Separate Python translation microservice |
| Tooling | npm, TypeScript, SonarQube project configuration |

## Architecture

```text
Browser
  |
  v
Next.js App Router (React + TypeScript)
  |-- Public landing page and translation route
  |-- Google sign-in via Auth.js
  |      `-- PostgreSQL adapter -> PostgreSQL
  |-- Server-side session checks
  `-- Translation request handler (prototype)
         `-- HTTP POST -> External Python translation service
```

## Features and Current Status

| Feature | Status |
| --- | --- |
| Responsive landing page and waitlist link | Implemented |
| Google OAuth and PostgreSQL adapter configuration | Implemented; requires environment configuration |
| Authenticated home-page rendering | Implemented |
| Python translation API request logic | Prototype; translation form currently commented out |
| Translated text displayed to the user | Not implemented in this repository |
| Audio playback | Placeholder element; no audio source configured |
| Personalized student reports and parent updates | Product vision, not implemented in this frontend |

**Scope note:** This is an engineering prototype, not a fully operational, production-ready AI reporting platform. The separate Python service and its AI capabilities are not included in this repository.

## Codebase Tour

- `auth.ts` — Google OAuth setup, PostgreSQL connection pool, Auth.js adapter.
- `app/page.tsx` — Server-side session check and authenticated home page.
- `app/login/page.tsx` — Google sign-in action.
- `app/landing/page.tsx` — Responsive landing page and waitlist link.
- `app/translate/page.tsx` — Translation prototype route.
- `components/translate.tsx` — Client-side fetch handler for the translation microservice.
- `components/QueryClientProvider.tsx` — Shared TanStack Query client.
- `components/SideBar.tsx` — Authenticated application's sidebar scaffold.

## Local Setup

**Prerequisites:** Node.js, npm, PostgreSQL, Google OAuth credentials, and (for translation integration testing) the separate Python service.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

`auth.ts` reads the following database environment variables:

```dotenv
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

Configure the standard Auth.js / Google environment settings as well, including `AUTH_SECRET`, `AUTH_GOOGLE_ID`, and `AUTH_GOOGLE_SECRET`. Do not commit secrets. The database port is currently hardcoded to `5433` in `auth.ts`.

**Development caveat:** The translation component uses `http://0.0.0.0:8000/translate-eng-to-span`, which is not an appropriate browser-facing production URL. Its form is currently commented out, and it does not render a translated response. The address and UI need to be updated before translation can be tested end-to-end.

## Engineering Focus

The project illustrates the integration points of an AI-assisted education product: web application architecture, OAuth identity, database-backed authentication, protected UI rendering, and service-to-service boundaries between a TypeScript frontend and a Python backend. It intentionally distinguishes verified source code from planned product capabilities.
