# Component inventory

"Client" = has `"use client"`. Everything else is a server component.

## layout/

| Component | Client? | What it does |
|---|---|---|
| `Navbar` | Client | Sticky header. Desktop nav + "Book a demo" button; mobile `Sheet` menu with `useState` open/close; highlights the active route via `usePathname`. |
| `Footer` | Server | Logo, tagline, footer nav (same `navItems`), "Book a demo" button. |
| `PageShell` | Server | Shared `max-w-[1400px]` + horizontal padding wrapper used by every section. |

## sections/home/

| Component | Client? | What it does |
|---|---|---|
| `HomeHero` | Server | H1 + subcopy + two CTAs (demo, "See features") + `HeroStage` visual. |
| `HowItWorks` | Server | Renders `flowSteps` (from `lib/flow.ts`) as a 3-column numbered list. Reused on `/` and `/how-it-works`. |
| `FeaturePreview` | Server | First 3 items of `sampleFeatures` next to a `FloorLive` board. |
| `ProductModules` | Server | 4 hardcoded module cards (Scan to order, POS, Inventory, Ecommerce) + an Unsplash photo. |
| `DemoCta` | Client | **Intentionally disabled** demo-request form. See [content-status.md](content-status.md). |

## sections/product/

| Component | Client? | What it does |
|---|---|---|
| `ProductHero` | Server | H1 + subcopy + demo CTA button. |
| `ProductFeatures` | Server | First 4 `sampleFeatures` as cards + an Unsplash photo, remaining 4 in an `Accordion`, plus a `FloorLive` board. |

## sections/flow/

| Component | Client? | What it does |
|---|---|---|
| `FlowHero` | Server | H1 + subcopy + demo CTA button, for `/how-it-works`. |
| `FlowGeofence` | Server | Copy + `GeofenceBoard` visual. |

## shared/

| Component | Client? | What it does |
|---|---|---|
| `Logo` / `LogoMark` | Server | Inline SVG mark used in navbar/footer. |
| `ModeToggle` | Client | Sun/moon icon button, calls `next-themes`' `useTheme()`. |
| `Reveal` | Client | Scroll-in fade/slide wrapper using `motion`; respects `useReducedMotion`. Used to wrap most section headings/cards. |
| `HeroStage` | Client | The homepage hero visual: animates `GuestMenu` → `HandheldOrder` (scan beam → ticket lines), driven by `motion` values/templates. |
| `GuestMenu` | Client | Sample guest-facing phone menu (`guestDishes` list) with an `onAdd` callback, animated with `motion`. |
| `HandheldOrder` | Client | Sample staff-facing ticket display (`TicketLine[]`), animated line-by-line. |
| `FloorLive` | Client | Sample "live floor" grid of tables with state `paid/scan/firing/open`, local `useState`, no real data source. |
| `GeofenceBoard` | Client | Sample 5x5 grid visualizing `table/store/outside` zones for the geofence story, local `useState`, no real location data. |

## ui/ (shadcn primitives)

`accordion`, `badge`, `button`, `card`, `input`, `separator`, `sheet` — standard shadcn/ui components wrapping `@base-ui/react`, styled with `cva` variants. `button.tsx` notably supports a `render={<Link .../>}` + `nativeButton={false}` pattern to render an anchor styled as a button (Base UI's polymorphic render prop).

To add more: `npx shadcn@latest add <component>` (per [README.md](../README.md)).
