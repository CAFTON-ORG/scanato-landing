import Link from "next/link"

import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  size?: number
}

export function Logo({ className, size = 28 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("text-foreground", className)}
    >
      <rect x="4" y="4" width="8" height="2.5" fill="currentColor" />
      <rect x="4" y="4" width="2.5" height="8" fill="currentColor" />
      <rect x="20" y="4" width="8" height="2.5" fill="currentColor" />
      <rect x="25.5" y="4" width="2.5" height="8" fill="currentColor" />
      <rect x="4" y="25.5" width="8" height="2.5" fill="currentColor" />
      <rect x="4" y="20" width="2.5" height="8" fill="currentColor" />
      <rect x="20" y="25.5" width="8" height="2.5" fill="currentColor" />
      <rect x="25.5" y="20" width="2.5" height="8" fill="currentColor" />
      <rect x="12" y="14.5" width="8" height="3" fill="currentColor" />
    </svg>
  )
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Logo />
      <span className="text-base font-semibold tracking-tight">Scanato</span>
    </Link>
  )
}
