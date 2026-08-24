"use client"

import { useState } from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "motion/react"

import { GuestMenu } from "@/components/shared/guest-menu"
import {
  HandheldOrder,
  type TicketLine,
} from "@/components/shared/handheld-order"
import { Logo } from "@/components/shared/logo"

const starter: TicketLine[] = [
  { qty: 1, name: "Calamari", price: 9 },
  { qty: 1, name: "Iced tea", price: 4 },
]

export function HeroStage() {
  const reduce = useReducedMotion()
  const [lines, setLines] = useState<TicketLine[]>(starter)
  const [fired, setFired] = useState(false)
  const glowX = useMotionValue(70)
  const glowY = useMotionValue(40)
  const glow = useMotionTemplate`radial-gradient(420px circle at ${glowX}% ${glowY}%, oklch(0.78 0.14 85 / 0.34), transparent 58%)`

  function addDish(dish: { name: string; price: number }) {
    setFired(false)
    setLines((current) => {
      const match = current.find((line) => line.name === dish.name)
      if (match) {
        return current.map((line) =>
          line.name === dish.name ? { ...line, qty: line.qty + 1 } : line
        )
      }
      return [...current, { qty: 1, name: dish.name, price: dish.price }]
    })
  }

  return (
    <div
      className="hero-stage relative isolate overflow-hidden rounded-2xl border"
      onPointerMove={(event) => {
        if (reduce) {
          return
        }
        const rect = event.currentTarget.getBoundingClientRect()
        glowX.set(((event.clientX - rect.left) / rect.width) * 100)
        glowY.set(((event.clientY - rect.top) / rect.height) * 100)
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: glow }}
      />

      <div className="relative z-10 flex flex-col gap-5 px-4 pt-5 pb-5 sm:px-6 sm:pt-6 sm:pb-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 rounded-2xl border bg-background/90 px-3 py-2 backdrop-blur-sm">
            <Logo size={18} />
            <div>
              <p className="text-[11px] font-medium">Table 12 tent</p>
              <p className="font-mono text-[10px] tabular-nums text-muted-foreground">
                SCN-12
              </p>
            </div>
          </div>
          <p className="max-w-[16ch] text-right text-[11px] text-muted-foreground">
            {fired ? "Ticket fired. Sample only." : "Tap a dish, then fire."}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-end sm:gap-0">
          <motion.div
            className="relative z-10 origin-bottom sm:-mr-8 sm:rotate-[-6deg]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <GuestMenu onAdd={addDish} />
          </motion.div>
          <motion.div
            className="relative z-20 origin-bottom sm:rotate-[5deg]"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <HandheldOrder
              lines={lines}
              showCaption={false}
              onFire={() => setFired(true)}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
