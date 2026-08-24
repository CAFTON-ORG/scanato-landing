import Image from "next/image"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PageShell } from "@/components/layout/page-shell"
import { FloorLive } from "@/components/shared/floor-live"
import { Reveal } from "@/components/shared/reveal"
import { sampleFeatures } from "@/lib/site"

const featured = sampleFeatures.slice(0, 4)
const rest = sampleFeatures.slice(4)

export function ProductFeatures() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <PageShell>
        <Reveal>
          <h2 className="max-w-[18ch] text-3xl font-semibold tracking-tight md:text-4xl">
            Eight sample moves on one ticket.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <article className="relative min-h-[280px] overflow-hidden rounded-2xl bg-zinc-900 md:row-span-2">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80"
              alt="Dining table set for service in a restaurant."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </article>
          {featured.map((feature, index) => (
            <article
              key={feature.id}
              className={`rounded-2xl border bg-background p-6 ${
                index === 0 ? "md:min-h-[200px]" : ""
              }`}
            >
              <h3 className="text-xl font-medium tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <FloorLive />
          <div>
            <h3 className="text-2xl font-medium tracking-tight">
              More sample features
            </h3>
            <Accordion className="mt-6" defaultValue={["shared-ledger"]}>
              {rest.map((feature) => (
                <AccordionItem key={feature.id} value={feature.id}>
                  <AccordionTrigger>{feature.title}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{feature.body}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </PageShell>
    </section>
  )
}
