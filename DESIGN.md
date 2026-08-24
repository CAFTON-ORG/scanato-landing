# Design

<!-- impeccable:design-schema 1 -->

## Surfaces

- `/` marketing landing (persuade).

## Palette

- Ground: cool paper zinc (`--background`).
- Accent: saffron (`--primary`) used as the demo band and primary buttons.
- Ink: near-black zinc (`--foreground`).
- Device chrome: `zinc-900` around the handheld preview.

## Type

- Geist Sans for UI and display.
- Geist Mono for ticket numbers and step indices.
- Display scale: `text-4xl` to `lg:text-6xl`, tracking tight.

## Components

- shadcn/ui (base-luma) with Base UI primitives.
- Buttons are pills (`rounded-4xl`). Cards and module tiles are `rounded-2xl`.
- Signature object: handheld order ticket with a scan beam and a ghost empty line.

## Motion

- One authored moment in the hero: scan line then ticket lines.
- Honors `prefers-reduced-motion`.
