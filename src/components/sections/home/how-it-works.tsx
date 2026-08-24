import { PageShell } from "@/components/layout/page-shell"
import { Reveal } from "@/components/shared/reveal"

const steps = [
  {
    n: "1",
    title: "Guest scans",
    body: "A table tent or counter code opens the menu on their phone.",
  },
  {
    n: "2",
    title: "The order lands",
    body: "The ticket reaches the floor device, kitchen, and till together.",
  },
  {
    n: "3",
    title: "You run the house",
    body: "Take payment, adjust stock, and keep the next order moving.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <PageShell>
        <Reveal>
          <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight md:text-4xl">
            From scan to ticket in one pass.
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
            The guest starts the order. Scanato carries it through POS and
            inventory so the floor is not copying tickets by hand.
          </p>
        </Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {steps.map((step, index) => (
            <li key={step.n}>
              <Reveal delay={index * 0.08}>
                <div className="border-t pt-6">
                  <p className="font-mono text-sm tabular-nums text-muted-foreground">
                    {step.n}
                  </p>
                  <h3 className="mt-3 text-xl font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </PageShell>
    </section>
  )
}
