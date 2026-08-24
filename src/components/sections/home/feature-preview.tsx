import { PageShell } from "@/components/layout/page-shell"
import { FloorLive } from "@/components/shared/floor-live"
import { Reveal } from "@/components/shared/reveal"
import { sampleFeatures } from "@/lib/site"

const homeFeatures = sampleFeatures.slice(0, 3)

export function FeaturePreview() {
  return (
    <section className="border-t py-16 sm:py-20 lg:py-24">
      <PageShell>
        <Reveal>
          <h2 className="max-w-[18ch] text-3xl font-semibold tracking-tight md:text-4xl">
            Sample features already in the story.
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
            These are product samples for the landing, not live venue metrics.
            Each one starts from the scan at the table.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <FloorLive />
          </Reveal>
          <div className="divide-y lg:col-span-7">
            {homeFeatures.map((feature, index) => (
              <Reveal key={feature.id} delay={0.06 * index}>
                <article className="py-5 first:pt-0">
                  <h3 className="text-lg font-medium tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
                    {feature.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </PageShell>
    </section>
  )
}
