import type { Metadata } from "next"

import { DemoCta } from "@/components/sections/home/demo-cta"
import { HowItWorks } from "@/components/sections/home/how-it-works"
import { FlowGeofence } from "@/components/sections/flow/flow-geofence"
import { FlowHero } from "@/components/sections/flow/flow-hero"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "How it works",
  description: `How Scanato turns a table scan into a kitchen ticket, and pauses orders outside the store. ${site.description}`,
}

export default function HowItWorksPage() {
  return (
    <>
      <FlowHero />
      <HowItWorks />
      <FlowGeofence />
      <DemoCta />
    </>
  )
}
