# Project Rules — Eon Legal Web

> **Enforced for all AI agents and human contributors.**
> Violations block commits. No exceptions.

---

## 1. Architecture & Organization (OoO Principles)

### 1.1 Layer Boundaries (Dependency Direction)

```
src/
  app/          → Next.js routing + Server Components only (no business logic)
  components/   → React UI components (Client or Server)
  lib/          → Pure functions, utilities, config, schemas (framework-agnostic)
  hooks/        → React hooks (Client only)
  types/        → Shared TypeScript types & interfaces
  styles/       → Global styles, design tokens, Tailwind plugins
```

**Rule:** Dependencies flow downward. `app/` may import from `components/`, `lib/`, `hooks/`, `types/`. `lib/` must **never** import from `app/`, `components/`, or `hooks/`. Circular imports are forbidden.

### 1.2 Single Responsibility

- One file = one exported component OR one exported utility function.
- Files > 150 lines require justification in a leading comment.
- Barrel files (`index.ts` re-exports) are **prohibited** — import from the concrete file path.

### 1.3 Explicit over Implicit

- No global type augmentations without team approval.
- No implicit `any`. No `// @ts-ignore` or `// @ts-nocheck`.
- No `eval()`, `new Function()`, or `innerHTML` assignments.
- All environment variables must be typed in `src/lib/env.ts` (via `zod` or `t3-env`).

---

## 2. Next.js 16 Rules

### 2.1 Server Components by Default

- Every component is a **Server Component** unless it needs:
  - Browser APIs (`window`, `document`, `localStorage`)
  - React hooks (`useState`, `useEffect`, `useContext`)
  - Event handlers (`onClick`, `onSubmit`)

- `'use client'` directive must include a comment explaining **why**:

  ```tsx
  "use client"; // Needs form state + browser validation API
  ```

### 2.2 Async Server Components

- Use async Server Components for data fetching. No `useEffect` + `fetch` patterns.
- Wrap slow fetches in `<Suspense>` with meaningful fallback UI.

### 2.3 Metadata API

- All pages must export `metadata` or `generateMetadata`.
- Dynamic metadata must use `React.cache()` for deduplication.
- `metadataBase` is required in root `layout.tsx`.
- Never set metadata in Client Components.

### 2.4 Routing & Navigation

- Use `<Link>` from `next/link` for internal navigation.
- Use `redirect()` (Server) or `useRouter()` (Client) — never mix.
- Route handlers (`route.ts`) must validate inputs and return typed responses.

### 2.5 Image & Font Optimization

- Always use `next/image` for images. No raw `<img>` tags.
- Always use `next/font` for web fonts. No `@import` or `<link>` font tags.

---

## 3. TypeScript Strictness

- `strict: true` is non-negotiable.
- Explicit return types on all exported functions and React components.
- Use `readonly` arrays and objects where mutation is not intended.
- Prefer `interface` for public APIs, `type` for unions / mapped types.
- No `as` assertions without a `// SAFETY:` comment.

---

## 4. Security (Zero-Tolerance)

### 4.1 Secrets & Environment

- **Never** hardcode API keys, tokens, or credentials.
- **Never** expose server-only secrets to the client. `NEXT_PUBLIC_*` is client-visible.
- Validate all env vars at build time using a schema (`zod` / `t3-env`).
- `.env*.local` files are gitignored and must stay gitignored.

### 4.2 Input Validation

- All user inputs (query params, form data, route params) must be validated with `zod` before use.
- Sanitize data rendered to HTML. Use React's built-in XSS protection — never use `dangerouslySetInnerHTML`.

### 4.3 Authentication & Authorization

- If Supabase Auth is used, enforce Row Level Security (RLS) on **all** tables.
- Never trust client-side auth state for security decisions.
- Server Actions must re-verify session/permissions.

### 4.4 Headers & CSP

- Configure `Content-Security-Policy` in `next.config.ts`.
- Use `strict-dynamic` for scripts. No `unsafe-inline` in production.

---

## 5. SEO / GEO Rules

- Every page must have unique, descriptive `<title>` and `meta description`.
- Use `robots.ts`, `sitemap.ts`, and canonical URLs.
- Structured data (JSON-LD) must match visible page content exactly.
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` — no div soup.
- `alt` text on all images. `aria-label` on icon-only buttons.

---

## 6. Styling & Design

- Tailwind CSS 4 only. No inline `style={{}}` except for dynamic values.
- No arbitrary Tailwind values (`w-[123px]`) without a design-token equivalent.
- Use CSS variables for theme values (colors, spacing, radii) defined in `globals.css`.
- Dark mode support is mandatory. Test both schemes.
- Respect `prefers-reduced-motion` for animations.

---

## 7. Performance

- Use `next/image` with proper `sizes` and `priority` for LCP images.
- Code-split heavy components with `dynamic()` from `next/dynamic`.
- Prefer Server Components to reduce client JS bundle.
- Run `npm run build` and review bundle analyzer output before major PRs.

---

## 8. Testing & Quality Gates

### 8.1 Pre-Commit Checks (must pass)

```bash
npx tsc --noEmit    # Zero type errors
npm run lint        # Zero lint errors
npm run build       # Zero build errors
```

### 8.2 Code Quality

- No `console.log` in production code. Use a typed logger (`winston` / `pino`) for server-side logging.
- TODO/FIXME comments must include an issue number or date: `// TODO(#42): ...`
- Dead code (unused imports, commented blocks) must be removed before commit.

---

## 9. Git & Commits

- **Branch naming:** `feat/description`, `fix/description`, `chore/description`, `refactor/description`
- **Commits:** Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `test:`, `security:`)
- **PRs:** Require type check + lint + build pass before merge.
- Force-push to `main` is prohibited. All changes via PR.

---

## 10. External References

- **Next.js 16 breaking changes** → see `AGENTS.md`
- **Skill-specific guidance** → see `.augment/skills/*/SKILL.md`
  - `next-best-practices` — file conventions, metadata, caching, streaming
  - `vercel-react-best-practices` — performance, rendering, bundle optimization
  - `vercel-composition-patterns` — component architecture, compound components
  - `web-design-guidelines` — accessibility, responsive design, motion
  - `supabase` — RLS, auth patterns, SSR cookie handling
  - `meta-tags-optimizer` — title/description formulas, CTR optimization
  - `schema-markup-generator` — JSON-LD templates, validation
  - `frontend-design` — avoid generic "AI slop" aesthetics
