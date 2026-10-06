import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#08080a]/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight"
        >
          RS<span className="text-[#9b5cff]">.</span>
        </Link>

        {/* Navigation */}
        <div className="ml-auto flex items-center gap-8">
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="rounded-full border border-white/15 px-5 py-2 text-sm transition-all hover:border-[#9b5cff]/60 hover:bg-[#9b5cff]/10"
          >
            Let&apos;s talk ↗
          </Link>
        </div>
      </nav>
    </header>
  );
}