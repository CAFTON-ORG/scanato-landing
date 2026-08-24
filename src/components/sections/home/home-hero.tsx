import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PageShell } from "@/components/layout/page-shell"
import { HeroStage } from "@/components/shared/hero-stage"
import { demoHref } from "@/lib/site"

export function HomeHero() {
  return (
    <section className="border-b py-8 lg:py-10">
      <PageShell className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
        <div>
          <h1 className="max-w-[12ch] text-4xl leading-[1.08] font-semibold tracking-tight md:text-5xl lg:text-[3.5rem]">
            Scan the table.{" "}
            <em className="font-semibold not-italic md:italic">Run the house.</em>
          </h1>
          <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-muted-foreground md:text-lg">
            Guests order from a QR. Tickets, tender, and stock share one sample
            ticket.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href={demoHref} />}
            >
              Book a demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/product" />}
            >
              See features
            </Button>
          </div>
        </div>
        <HeroStage />
      </PageShell>
    </section>
  )
}
