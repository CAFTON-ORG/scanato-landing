import type { Metadata } from "next"

import { DemoCta } from "@/components/sections/home/demo-cta"
import { ProductFeatures } from "@/components/sections/product/product-features"
import { ProductHero } from "@/components/sections/product/product-hero"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Product features",
  description: `Sample Scanato features for scan-to-order, POS, inventory, and ecommerce. ${site.description}`,
}

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <ProductFeatures />
      <DemoCta />
    </>
  )
}
