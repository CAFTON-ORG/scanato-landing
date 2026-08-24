import type { Metadata } from "next"

import { DemoCta } from "@/components/sections/home/demo-cta"
import { FeaturePreview } from "@/components/sections/home/feature-preview"
import { HomeHero } from "@/components/sections/home/home-hero"
import { HowItWorks } from "@/components/sections/home/how-it-works"
import { ProductModules } from "@/components/sections/home/product-modules"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Scan to order for restaurants and retail",
  description: site.description,
}

export default function LandingPage() {
  return (
    <>
      <HomeHero />
      <HowItWorks />
      <FeaturePreview />
      <ProductModules />
      <DemoCta />
    </>
  )
}
