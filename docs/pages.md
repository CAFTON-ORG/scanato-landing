# Pages / routes

All routes live under `src/app/`. Every page composes existing sections — none contain page-specific markup beyond the `<h1>`/hero copy already inside a section component.

| Route | File | Renders | Metadata title |
|---|---|---|---|
| `/` | [src/app/page.tsx](../src/app/page.tsx) | `HomeHero` → `HowItWorks` → `FeaturePreview` → `ProductModules` → `DemoCta` | "Scan to order for restaurants and retail" |
| `/product` | [src/app/product/page.tsx](../src/app/product/page.tsx) | `ProductHero` → `ProductFeatures` → `DemoCta` | "Product features" |
| `/how-it-works` | [src/app/how-it-works/page.tsx](../src/app/how-it-works/page.tsx) | `FlowHero` → `HowItWorks` → `FlowGeofence` → `DemoCta` | "How it works" |
| `/demo` | [src/app/demo/page.tsx](../src/app/demo/page.tsx) | `DemoCta` only | "Book a demo" |
| `*` (404) | [src/app/not-found.tsx](../src/app/not-found.tsx) | Static "Page not found" message + link home | (inherits root) |

Root layout ([src/app/layout.tsx](../src/app/layout.tsx)) wraps every route in `ThemeProvider`, `Navbar`, and `Footer`, and sets the default/OG metadata (`site.name`, `site.description` from `lib/site.ts`).

Note: `HowItWorks` (the 3-step section) is reused on both `/` and `/how-it-works` — it is not route-specific despite the name overlap with the `/how-it-works` page.
