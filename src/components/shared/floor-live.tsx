"use client"

import { useState } from "react"

type TableState = "paid" | "scan" | "firing" | "open"

const initialTables: { id: string; state: TableState }[] = [
  { id: "11", state: "paid" },
  { id: "12", state: "scan" },
  { id: "13", state: "firing" },
  { id: "14", state: "open" },
  { id: "21", state: "open" },
  { id: "22", state: "paid" },
]

const labels: Record<TableState, string> = {
  paid: "Paid",
  scan: "Scan open",
  firing: "Firing",
  open: "Empty",
}

const cycle: TableState[] = ["open", "scan", "firing", "paid"]

export function FloorLive() {
  const [tables, setTables] = useState(initialTables)

  function cycleTable(id: string) {
    setTables((current) =>
      current.map((table) => {
        if (table.id !== id) {
          return table
        }
        const next = cycle[(cycle.indexOf(table.state) + 1) % cycle.length]
        return { ...table, state: next }
      })
    )
  }

  return (
    <div className="rounded-2xl border bg-background p-5">
      <p className="text-sm font-medium">Live floor</p>
      <p className="mt-1 text-xs text-muted-foreground">
        Sample room. Tap a table to cycle its state.
      </p>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {tables.map((table) => (
          <button
            key={table.id}
            type="button"
            onClick={() => cycleTable(table.id)}
            className={`flex aspect-square cursor-pointer flex-col items-center justify-center rounded-xl border text-center transition-transform duration-200 hover:brightness-95 active:translate-y-px ${
              table.state === "scan"
                ? "border-primary bg-primary text-primary-foreground"
                : table.state === "firing"
                  ? "bg-secondary"
                  : "bg-muted/60"
            }`}
          >
            <span className="font-mono text-sm tabular-nums">{table.id}</span>
            <span className="mt-1 text-[10px]">{labels[table.state]}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
