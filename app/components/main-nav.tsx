import Link from "next/link"

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          AI Chat App
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/chat"
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          Chat
        </Link>
      </nav>
    </div>
  )
}
