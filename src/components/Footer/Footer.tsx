import FooterAtmosphere from "./FooterAtmosphere";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <FooterAtmosphere />

      <div className="relative z-10 mx-auto min-h-[620px] max-w-7xl px-6 py-28 md:px-10 lg:px-16">
        {/* Closing statement */}
        <div className="mb-24 max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
          Until next time
        </p>

        <h2 className="text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-6xl">
          Curious enough to explore.
          <br />
          Skilled enough to build.
        </h2>
        </div>

        {/* Footer columns */}
        <div className="grid gap-14 md:grid-cols-3">
          {/* Identity */}
          <div>
            <div className="mb-4 text-xl font-semibold tracking-tight">
              Rohit Singh<span className="text-[var(--accent)]">.</span>
            </div>

            <p className="max-w-xs text-sm leading-7 text-[var(--muted)]">
            Building software,
            <br />
            learning by building it.
          </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Navigate
            </p>

            <nav className="flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent-bright)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Connect
            </p>

            <div className="flex flex-col items-start gap-3">
              <a
                href="https://github.com/rohitcreates"
                className="text-sm text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent-bright)]"
              >
                GitHub ↗
              </a>

              <a
                href="mailto:rohitsingh93509@gmail.com"
                className="text-sm text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent-bright)]"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-4 border-t border-[var(--border-soft)] pt-6 text-xs text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Rohit Singh. All rights reserved.
          </p>

          <p>
            Designed & built with curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
}