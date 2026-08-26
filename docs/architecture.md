# Architecture

## What this is

A marketing landing site only. No backend, no database, no auth, no API routes. All content is static TypeScript data rendered server-side.

## Stack

- Next.js 16.2.6, App Router, React 19.2.4, TypeScript (strict)
- Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) + `tw-animate-css`
- shadcn/ui (`base-luma` style) on top of `@base-ui/react` primitives
- `motion` (Framer Motion successor) for animation
- `next-themes` for dark/light mode
- `lucide-react` for icons
- Geist Sans / Geist Mono via `next/font/google`

## Pattern

- `src/app/*/page.tsx` files are thin: each just composes a sequence of section components.
- `src/components/sections/{home,product,flow}/` — page-specific sections, one folder per surface.
- `src/components/shared/` — cross-page presentational/interactive pieces (the animated ticket, guest menu, floor map, geofence board, logo, theme toggle, scroll-reveal wrapper).
- `src/components/ui/` — shadcn-generated primitives only. Add more via `npx shadcn@latest add <name>`.
- `src/components/layout/` — Navbar, Footer, PageShell (the shared max-width content wrapper).
- `src/lib/*.ts` — content-as-data: typed `const` arrays/objects imported by components instead of inline JSX literals.

## Server vs client components

Server components by default. `"use client"` is used only where needed:

- `theme-provider.tsx` — wraps `next-themes`, adds a `d` keyboard hotkey to toggle theme
- `navbar.tsx` — mobile menu open/close state, active-route highlighting
- `mode-toggle.tsx` — reads/sets theme
- `demo-cta.tsx` — disabled form needs an `onSubmit` handler
- `reveal.tsx`, `hero-stage.tsx`, `handheld-order.tsx`, `guest-menu.tsx` — use `motion` for animation
- `floor-live.tsx`, `geofence-board.tsx` — local `useState` for their interactive demo boards

Everything else (pages, sections that don't animate/interact, `logo.tsx`) is a server component.

## Data flow

There is no runtime data flow to a server/API — it's all static:

1. Typed constants in `src/lib/site.ts` (`site`, `navItems`, `sampleFeatures`, `demoHref`) and `src/lib/flow.ts` (`flowSteps`) are imported directly into components.
2. Components render this data server-side (SSR/SSG, Next.js default).
3. Client-side state is UI-only: nav sheet open/close, theme selection (persisted by `next-themes` via its own storage), and the interactive demo boards (`FloorLive`, `GeofenceBoard`, `HeroStage`) which hold local, non-persisted state for animation/demo purposes.
4. The "Book a demo" CTA links to `/demo`, which renders `DemoCta` — a form that is intentionally disabled (see [content-status.md](content-status.md)). Nothing submits anywhere.

## Design tokens

Colors are OKLCH CSS variables in `src/app/globals.css`, toggled by a `.dark` class on `<html>` (forced on by default in `layout.tsx`, overridable via `next-themes`). Radii, sidebar/chart colors, and fonts are mapped through Tailwind v4's `@theme inline` block — there is no `tailwind.config.js`.
