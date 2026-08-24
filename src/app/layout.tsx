import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { geistMono, geistSans } from "@/lib/fonts"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Scan to order`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | Scan to order`,
    description: site.description,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("dark antialiased", geistSans.variable, geistMono.variable)}
    >
      <body className="font-sans">
        {/*
          THESIS: Handheld terminal as the first proof of scan-to-order; refuse the centered SaaS metric hero.
          OWN-WORLD: Cool paper zinc, saffron fields, pill buttons, 16px cards, Geist, mono for ticket numbers.
          STORY: Guests scan, tickets hit the device, operators explore sample features and book a demo.
          FIRST VIEWPORT: Split copy left, scan stage with guest phone and staff handheld, Book a demo in the first screen.
          FORM: Handheld terminal (seed 04a8c3c0, assigned 6). Raises: unfold, grid cells, ghost empty line, scan beam.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
