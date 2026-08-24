import Image from "next/image"

import { PageShell } from "@/components/layout/page-shell"
import { Reveal } from "@/components/shared/reveal"

const modules = [
  {
    title: "Scan to order",
    body: "QR menus for tables and counters. Guests browse, send, and pay without waiting on a pad.",
  },
  {
    title: "POS",
    body: "The same ticket on a handheld or till. Take payment without re-keying the order.",
  },
  {
    title: "Inventory",
    body: "Stock moves when items sell. Counts stay tied to what left the kitchen or shelf.",
  },
  {
    title: "Ecommerce",
    body: "Take the same catalog online for pickup or delivery when you sell off the floor.",
  },
]

export function ProductModules() {
  return (
    <section className="border-t bg-muted/40 py-16 sm:py-20 lg:py-24">
      <PageShell>
        <Reveal>
          <h2 className="max-w-[18ch] text-3xl font-semibold tracking-tight md:text-4xl">
            One catalog for the floor, till, and stockroom.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-6">
          <Reveal className="relative min-h-[260px] overflow-hidden rounded-2xl bg-zinc-900 md:col-span-3 md:row-span-2 md:min-h-[420px]">
            <article className="relative h-full min-h-[260px]">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80"
                alt="Staff member taking a payment on a handheld card terminal at a counter."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </article>
          </Reveal>
          {modules.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.05 * (index + 1)}
              className="md:col-span-3"
            >
              <article className="flex h-full flex-col justify-between rounded-2xl border bg-background p-6">
                <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  )
}
