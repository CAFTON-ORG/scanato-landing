import Link from "next/link"

import { Button } from "@/components/ui/button"
import { LogoMark } from "@/components/shared/logo"
import { demoHref, navItems } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <LogoMark />
          <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
            Scan-to-order for restaurants and retail, with POS and inventory in
            the same system.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Footer">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Button nativeButton={false} render={<Link href={demoHref} />}>
            Book a demo
          </Button>
        </div>
      </div>
    </footer>
  )
}
