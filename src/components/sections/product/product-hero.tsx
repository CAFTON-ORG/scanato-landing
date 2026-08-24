import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PageShell } from "@/components/layout/page-shell"
import { demoHref } from "@/lib/site"

export function ProductHero() {
  return (
    <section className="border-b py-12 sm:py-14 lg:py-16">
      <PageShell>
        <h1 className="max-w-[16ch] text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
          Features that start at the scan.
        </h1>
        <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:text-lg">
          Sample Scanato capabilities for ordering, POS, inventory, and
          ecommerce. Built as product stories you can try on this site, not as
          live stats.
        </p>
        <Button
          className="mt-8"
          size="lg"
          nativeButton={false}
          render={<Link href={demoHref} />}
        >
          Book a demo
        </Button>
      </PageShell>
    </section>
  )
}
