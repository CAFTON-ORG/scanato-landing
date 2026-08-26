# Content status

What's real, what's a placeholder, and what's turned off. Check this before assuming any copy or interaction reflects a live product.

## Demo requests: disabled by design

[demo-cta.tsx](../src/components/sections/home/demo-cta.tsx) renders a form with the heading **"Demo requests are closed"**. It is intentionally non-functional:

- `<fieldset disabled>` wraps all inputs, all inputs are also `readOnly`/`tabIndex={-1}`
- The submit button is `disabled` and reads "Requests closed"
- `onSubmit` calls `event.preventDefault()` — there is no backend, endpoint, or email service wired up
- This is the same component rendered standalone at `/demo` and appended to `/`, `/product`, `/how-it-works`

If asked to "make the demo form work," that requires deciding on a submission target (email service, CRM, API route) first — there is currently none.

## Sample / synthetic data (not live product data)

These are explicitly labeled or documented as sample content, not real metrics or a real backend:

- `sampleFeatures` (`src/lib/site.ts`) — 8 feature blurbs (table-session, live-86, split-seat, route-fan, shared-ledger, floor-live, allergen-gate, geofence). Used across home/product pages.
- `FloorLive` component — a fabricated table-state board (`paid/scan/firing/open`), local React state only, resets on reload.
- `GeofenceBoard` component — a fabricated 5x5 zone grid (`table/store/outside`), local React state only.
- `HeroStage` / `GuestMenu` / `HandheldOrder` — the animated hero demo (scan → ticket), synthetic dish/ticket data (`guestDishes`, default `TicketLine[]`), not connected to anything real.
- `ProductModules` hardcodes 4 module cards (Scan to order, POS, Inventory, Ecommerce) directly in the component — not sourced from `lib/`.

Per [PRODUCT.md](../PRODUCT.md): no real logo, photography, testimonials, customers, or benchmarks exist yet. Do not present any of the above as real usage data or social proof.

## Stock imagery

Two Unsplash photos are hotlinked (not stored in `public/`):

- `ProductModules` — `photo-1556742049-0cfed4f6a45d` (staff taking payment)
- `ProductFeatures` — `photo-1559339352-11d035aa65de` (dining table)

`next.config.ts` allowlists `images.unsplash.com` in `images.remotePatterns` for this reason. `public/` itself is otherwise empty (only `.gitkeep`) — no favicon variants, OG image, or logo files are checked in beyond `app/favicon.ico`.

## Undecided per PRODUCT.md

Explicitly marked undecided in the product brief: pricing, live product URL, real customers, real metrics, legal copy (privacy/terms), and which product modules ship first. Don't invent these if asked to "fill in" a section — flag back to the user instead.
