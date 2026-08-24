import { PageShell } from "@/components/layout/page-shell"
import { GeofenceBoard } from "@/components/shared/geofence-board"
import { Reveal } from "@/components/shared/reveal"

export function FlowGeofence() {
  return (
    <section className="border-t py-16 sm:py-20 lg:py-24">
      <PageShell>
        <Reveal>
          <h2 className="max-w-[18ch] text-3xl font-semibold tracking-tight md:text-4xl">
            Orders stop at the door.
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
            If a guest walks out of the venue zone, Scanato pauses the menu.
            Come back inside and the table session opens again. This board is a
            sample, not a live location feed.
          </p>
        </Reveal>
        <div className="mt-10">
          <GeofenceBoard />
        </div>
      </PageShell>
    </section>
  )
}
