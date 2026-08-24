"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LogoMark } from "@/components/shared/logo"
import { ModeToggle } from "@/components/shared/mode-toggle"
import { demoHref, navItems } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 h-16 border-b bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-5 sm:px-6 lg:px-8">
        <LogoMark />
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const current = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "inline-flex h-10 items-center px-3 text-sm transition-colors",
                  current
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
        <div className="hidden items-center gap-1 md:flex">
          <ModeToggle />
          <Button nativeButton={false} render={<Link href={demoHref} />}>
            Book a demo
          </Button>
        </div>
        <div className="flex items-center gap-1 md:hidden">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-6" aria-label="Mobile">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm text-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  className="mt-4"
                  nativeButton={false}
                  render={
                    <Link href={demoHref} onClick={() => setOpen(false)} />
                  }
                >
                  Book a demo
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
