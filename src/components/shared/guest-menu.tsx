"use client"

import { motion, useReducedMotion } from "motion/react"

export const guestDishes = [
  { name: "Calamari", price: 9, muted: false },
  { name: "House salad", price: 9.5, muted: false },
  { name: "Peanut noodles", price: 14, muted: true },
] as const

export function GuestMenu({
  onAdd,
}: {
  onAdd?: (dish: { name: string; price: number }) => void
}) {
  const reduce = useReducedMotion()

  return (
    <div className="w-[210px]">
      <div className="rounded-[1.8rem] bg-zinc-900 p-2.5 shadow-[0_22px_40px_-18px_oklch(0.18_0.03_70_/_0.55)]">
        <div className="overflow-hidden rounded-[1.3rem] bg-background">
          <div className="px-3 pt-3 pb-2">
            <p className="text-[10px] font-medium text-muted-foreground">
              Table 12 · Guest
            </p>
            <p className="mt-1 text-sm font-medium">Scanato menu</p>
          </div>
          <ul className="grid gap-1 px-3 pb-3">
            {guestDishes.map((dish, index) => (
              <motion.li
                key={dish.name}
                initial={reduce ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: reduce ? 0 : 0.2 + index * 0.1,
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <button
                  type="button"
                  disabled={dish.muted || !onAdd}
                  onClick={() => onAdd?.({ name: dish.name, price: dish.price })}
                  className="flex w-full cursor-pointer items-baseline justify-between gap-2 border-b border-dashed py-1.5 text-left last:border-0 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span
                    className={
                      dish.muted
                        ? "text-xs text-muted-foreground line-through"
                        : "text-xs"
                    }
                  >
                    {dish.name}
                  </span>
                  <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                    {dish.muted ? "86" : dish.price.toFixed(2)}
                  </span>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
