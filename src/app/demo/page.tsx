import type { Metadata } from "next"

import { DemoCta } from "@/components/sections/home/demo-cta"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Book a demo",
  description: `Demo requests for Scanato. ${site.description}`,
}

export default function DemoPage() {
  return <DemoCta />
}
