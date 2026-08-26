# Workflow

## Scripts (package.json)

| Command | Does |
|---|---|
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint (flat config: `eslint-config-next` core-web-vitals + typescript) |
| `npm run format` | Prettier write on `**/*.{ts,tsx}` |
| `npm run typecheck` | `tsc --noEmit` |

No test script exists — there is no test framework configured in this repo.

## CI ([.github/workflows/ci.yml](../.github/workflows/ci.yml))

On PR opened/synchronize/reopened targeting `main`: `npm ci` → `npm run typecheck` → `npm run lint` → `npm run build`. Separately posts Discord notifications (via `DISCORD_WEBHOOK_URL` secret, skipped if unset) on PR opened, CI result, and PR merged. No deploy step is defined anywhere in CI.

## Conventions

- No semicolons, double quotes, 80-char print width, `es5` trailing commas — [.prettierrc](../.prettierrc), with `prettier-plugin-tailwindcss` sorting classNames.
- Path alias `@/*` → `src/*`.
- Components are named exports (`export function X()`), not default exports — except `page.tsx`/`layout.tsx` which Next.js requires as default exports.
- Repeated copy/lists live in `src/lib/*.ts` as typed `const ... as const` arrays, not inline in JSX.
- `components/ui/` is reserved for shadcn-generated primitives only; add new ones via `npx shadcn@latest add <name>`, don't hand-write into that folder.
- [AGENTS.md](../AGENTS.md) warns this Next.js version has breaking changes vs. typical training data — check `node_modules/next/dist/docs/` before assuming standard Next.js API behavior.

## Known non-blocking issue

`next-themes` renders an inline `<script>` for flash-of-theme prevention, which triggers a React 19 dev-console warning ("Encountered a script tag while rendering"). It's a known false positive (confirmed via upstream GitHub issues, see git history around 2026-08-26) — the warning is suppressed in [theme-provider.tsx](../src/components/theme-provider.tsx) via a dev-only `console.error` filter. No functional impact.
