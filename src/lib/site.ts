export const demoHref = "/demo"

export const navItems = [
  { name: "Home", href: "/" },
  { name: "How it works", href: "/how-it-works" },
  { name: "Product", href: "/product" },
] as const

export const site = {
  name: "Scanato",
  tagline: "Scan to order, then run the floor.",
  description:
    "Scanato is scan-to-order software for restaurants and retail. Guests scan a code to order. Staff run POS and inventory from the same system.",
  url: "https://scanato.app",
}

export const sampleFeatures = [
  {
    id: "table-session",
    title: "Table-locked scan",
    body: "Each QR opens a live session for that table. The kitchen ticket already knows the seat.",
  },
  {
    id: "live-86",
    title: "Live 86 from stock",
    body: "When inventory hits zero, the dish drops off every open guest menu. No sold-out surprises.",
  },
  {
    id: "split-seat",
    title: "Pay by seat",
    body: "Guests settle their own items from the same table session. The till sees one check, split cleanly.",
  },
  {
    id: "route-fan",
    title: "One scan, three stations",
    body: "A single order fans to grill, bar, and expo with the same ticket id. No re-keying on the handheld.",
  },
  {
    id: "shared-ledger",
    title: "Order, tender, stock",
    body: "POS payment and inventory decrement share the guest ticket. Three ledgers, one scan.",
  },
  {
    id: "floor-live",
    title: "Floor that talks back",
    body: "Open scans, firing tickets, and paid tables show as cells on a live floor. Staff see the room, not a list.",
  },
  {
    id: "allergen-gate",
    title: "Allergen gate",
    body: "A guest flags an allergen on the phone. Unsafe dishes grey out before they tap add.",
  },
  {
    id: "geofence",
    title: "Store-bound ordering",
    body: "If the guest walks outside the venue zone, the menu locks. The ticket stays on the table until they are back inside.",
  },
] as const
