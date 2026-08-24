"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageShell } from "@/components/layout/page-shell"

export function DemoCta() {
  return (
    <section id="demo" className="scroll-mt-20 border-t bg-primary py-16 sm:py-20">
      <PageShell className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:items-end">
        <div>
          <h2 className="max-w-[16ch] text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl">
            Demo requests are closed.
          </h2>
          <p className="mt-4 max-w-[50ch] text-base leading-relaxed text-primary-foreground/80">
            This site has no backend yet, so the form cannot accept names,
            emails, or submissions. The controls below stay off until an inbox
            is wired.
          </p>
        </div>
        <form
          action="#"
          method="post"
          autoComplete="off"
          noValidate
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
            disabled
          />
          <fieldset disabled className="grid gap-4 opacity-70">
            <legend className="sr-only">Demo request form is disabled</legend>
            <div className="grid gap-2">
              <label
                htmlFor="venue"
                className="text-sm font-medium text-primary-foreground"
              >
                Venue name
              </label>
              <Input
                id="venue"
                readOnly
                tabIndex={-1}
                placeholder="Unavailable"
                className="rounded-2xl border-primary-foreground/20 bg-background text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-primary-foreground"
              >
                Work email
              </label>
              <Input
                id="email"
                type="email"
                readOnly
                tabIndex={-1}
                placeholder="Unavailable"
                className="rounded-2xl border-primary-foreground/20 bg-background text-foreground"
              />
            </div>
            <Button
              type="button"
              size="lg"
              disabled
              className="w-fit bg-zinc-950 text-zinc-50"
            >
              Requests closed
            </Button>
          </fieldset>
        </form>
      </PageShell>
    </section>
  )
}
