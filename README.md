# HandyConnect

HandyConnect — a web platform connecting homeowners with verified local service providers (plumbers, electricians, cleaners, painters, etc.) for booking home repair and maintenance services.

## Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
- **Backend:** Supabase (Postgres, Auth, Edge Functions)

## Core Features / Epics

- User authentication and profile management
- Service provider listing and search
- Booking and scheduling workflows
- Reviews and ratings
- User and provider notifications

## Project Structure

- `frontend/` — Next.js application (UI, routing, client/server integration)
- `supabase/` — Supabase local project config, database artifacts, and Edge Functions

This separation keeps frontend deployment (e.g., Vercel) independent from Supabase backend deployment.

## Local Development Setup

1. Install frontend dependencies:
   ```bash
   cd frontend
   npm ci
   ```
2. Create local frontend env file:
   ```bash
   cp .env.local.example .env.local
   ```
3. Start Supabase local stack (from repo root):
   ```bash
   npx supabase start
   ```
4. Serve Edge Functions locally (from repo root):
   ```bash
   npx supabase functions serve
   ```
5. Start Next.js dev server:
   ```bash
   cd frontend
   npm run dev
   ```

## Environment Variables

| Variable | Where used | Description |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Frontend | Supabase project URL used by client/server Supabase SDKs. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Frontend | Public anonymous API key for Supabase client access. |
| `SUPABASE_ACCESS_TOKEN` | GitHub Actions / Deploy | Personal access token used to deploy Edge Functions from CI. |
| `SUPABASE_PROJECT_REF` | GitHub Actions / Deploy | Supabase project reference used by deploy workflow target project. |
| `EDGE_FUNCTION_*` (example naming) | Supabase Edge Functions | Function-specific secrets (API keys/tokens) set via `supabase secrets set`, never committed. |

## CI/CD

- `ci.yml` runs on every push and pull request to `main` and performs:
  - frontend dependency install (`npm ci`)
  - lint (`npm run lint`)
  - build (`npm run build`)
- `deploy-functions.yml` deploys Supabase Edge Functions to Supabase on push to `main`.

## Contributing

- **Branch naming:** `feature/<short-description>`, `bugfix/<short-description>`, `chore/<short-description>`
- **Commit style:** Prefer Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, etc.)
- **Team workflow:** Scrum-based delivery with short-lived branches, PR reviews, and iterative sprint planning.

## License

License to be decided (placeholder).
