import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PageShell } from "@/components/layout/page-shell"

export default function NotFound() {
  return (
    <PageShell className="flex min-h-[60vh] flex-col justify-center py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 max-w-[50ch] text-muted-foreground">
        That route is not part of this first Scanato landing.
      </p>
      <Button className="mt-8 w-fit" nativeButton={false} render={<Link href="/" />}>
        Back to home
      </Button>
    </PageShell>
  )
}
