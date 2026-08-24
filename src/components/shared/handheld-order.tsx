"use client"

import { motion, useReducedMotion } from "motion/react"

export type TicketLine = {
  qty: number
  name: string
  price: number
}

const defaultLines: TicketLine[] = [
  { qty: 2, name: "Calamari", price: 9 },
  { qty: 1, name: "House salad", price: 9.5 },
  { qty: 1, name: "Iced tea", price: 4 },
]

export function HandheldOrder({
  lines = defaultLines,
  showCaption = true,
  onFire,
}: {
  lines?: TicketLine[]
  showCaption?: boolean
  onFire?: () => void
}) {
  const reduce = useReducedMotion()
  const due = lines.reduce((sum, line) => sum + line.qty * line.price, 0)

  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="rounded-[2rem] bg-zinc-900 p-2.5 shadow-[0_28px_48px_-22px_oklch(0.18_0.03_70_/_0.65)]">
        <div className="relative overflow-hidden rounded-[1.35rem] bg-background">
          <div className="flex items-center justify-between border-b px-4 py-2.5">
            <p className="text-xs font-medium text-muted-foreground">Table 12</p>
            <p className="font-mono text-[11px] tabular-nums text-muted-foreground">
              TKT-0841
            </p>
          </div>
          <div className="relative px-4 pt-3 pb-4">
            <p className="text-sm font-medium">Guest order</p>
            <p className="mt-1 text-xs text-muted-foreground">Sample ticket</p>
            <ul className="mt-3 grid min-h-[7.5rem] content-start gap-2">
              {lines.length === 0 ? (
                <li className="text-xs text-muted-foreground">
                  Tap a dish on the guest phone to add a line.
                </li>
              ) : (
                lines.map((line, index) => (
                  <motion.li
                    key={`${line.name}-${index}`}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-[2rem_1fr_auto] items-baseline gap-2 border-b border-dashed border-border/80 pb-2"
                  >
                    <span className="font-mono text-xs tabular-nums text-muted-foreground">
                      {line.qty}
                    </span>
                    <span className="text-sm">{line.name}</span>
                    <span className="font-mono text-sm tabular-nums">
                      {(line.qty * line.price).toFixed(2)}
                    </span>
                  </motion.li>
                ))
              )}
              <li className="grid grid-cols-[2rem_1fr_auto] items-baseline gap-2 text-muted-foreground">
                <span className="font-mono text-xs tabular-nums opacity-30">
                  0
                </span>
                <span className="text-sm opacity-40">Add item</span>
                <span className="font-mono text-sm tabular-nums opacity-30">
                  --.--
                </span>
              </li>
            </ul>
            <div className="mt-4 flex items-end justify-between">
              <span className="text-sm text-muted-foreground">Due</span>
              <span className="font-mono text-2xl tabular-nums tracking-tight">
                {due.toFixed(2)}
              </span>
            </div>
            {onFire ? (
              <button
                type="button"
                onClick={onFire}
                className="mt-3 h-8 w-full cursor-pointer rounded-full bg-primary text-xs font-medium text-primary-foreground transition-transform duration-200 hover:bg-primary/80 active:translate-y-px"
              >
                Fire to kitchen
              </button>
            ) : null}
            {!reduce && (
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary"
                initial={{ y: 0, opacity: 0.9 }}
                animate={{ y: 220, opacity: [0.9, 0.9, 0] }}
                transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </div>
        </div>
      </div>
      {showCaption ? (
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Handheld preview. Sample totals.
        </p>
      ) : null}
    </div>
  )
}
