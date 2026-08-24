"use client"

import { useState } from "react"

const SIZE = 5
const CENTER = 2

type Zone = "table" | "store" | "outside"

function zoneFor(x: number, y: number): Zone {
  const dist = Math.max(Math.abs(x - CENTER), Math.abs(y - CENTER))
  if (dist === 0) {
    return "table"
  }
  if (dist === 1) {
    return "store"
  }
  return "outside"
}

function labelFor(x: number, y: number): string {
  const zone = zoneFor(x, y)
  if (x === CENTER && y === CENTER) {
    return "Table"
  }
  if (zone === "store") {
    return "Floor"
  }
  if (y === 0) {
    return "Street"
  }
  if (x === 0 || x === SIZE - 1) {
    return "Lot"
  }
  return "Block"
}

export function GeofenceBoard() {
  const [guest, setGuest] = useState({ x: 2, y: 1 })
  const zone = zoneFor(guest.x, guest.y)
  const inside = zone !== "outside"

  return (
    <div className="rounded-2xl border bg-background p-5 sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="text-xl font-medium tracking-tight">Store zone</h3>
          <p className="mt-1 max-w-[48ch] text-sm leading-relaxed text-muted-foreground">
            Sample fence only. Tap a cell to walk the guest. No map, no GPS.
          </p>
        </div>
        <p
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            inside
              ? "bg-primary text-primary-foreground"
              : "bg-destructive/15 text-destructive"
          }`}
        >
          {inside ? "Inside the venue" : "Outside the venue"}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-5 gap-1.5">
        {Array.from({ length: SIZE * SIZE }, (_, index) => {
          const x = index % SIZE
          const y = Math.floor(index / SIZE)
          const zone = zoneFor(x, y)
          const here = guest.x === x && guest.y === y

          return (
            <button
              key={`${x}-${y}`}
              type="button"
              onClick={() => setGuest({ x, y })}
              aria-pressed={here}
              aria-label={`Move guest to ${labelFor(x, y)}`}
              className={`flex aspect-square cursor-pointer flex-col items-center justify-center rounded-xl border text-center transition-transform duration-200 hover:brightness-95 active:translate-y-px ${
                zone === "table"
                  ? "bg-primary/80 text-primary-foreground"
                  : zone === "store"
                    ? "bg-secondary"
                    : "bg-muted/40 text-muted-foreground"
              } ${here ? "ring-2 ring-foreground" : ""}`}
            >
              <span className="text-[10px] leading-tight sm:text-xs">
                {here ? "Guest" : labelFor(x, y)}
              </span>
            </button>
          )
        })}
      </div>

      <div className="mt-6 rounded-2xl border p-4">
        {inside ? (
          <>
            <p className="text-sm font-medium">Order stays open</p>
            <p className="mt-1 max-w-[56ch] text-sm leading-relaxed text-muted-foreground">
              The guest is in the store zone. They can add items and fire the
              ticket to the kitchen.
            </p>
            <button
              type="button"
              className="mt-4 h-9 cursor-pointer rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:bg-primary/80 active:translate-y-px"
            >
              Send sample order
            </button>
          </>
        ) : (
          <>
            <p className="text-sm font-medium">Ordering paused</p>
            <p className="mt-1 max-w-[56ch] text-sm leading-relaxed text-muted-foreground">
              The guest left the store. The menu locks, the ticket stays on the
              table, and nothing reaches the kitchen until they walk back
              inside.
            </p>
            <button
              type="button"
              disabled
              className="mt-4 h-9 rounded-full bg-muted px-4 text-sm font-medium text-muted-foreground"
            >
              Order blocked outside
            </button>
          </>
        )}
      </div>
    </div>
  )
}
