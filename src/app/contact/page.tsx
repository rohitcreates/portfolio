const email = "rohitsingh93509@gmail.com";
const github = "https://github.com/rohitcreates";

export default function ContactPage() {
  return (
    <main>
      <section className="px-6 pb-20 pt-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
              Contact
            </p>

            <span className="text-xs uppercase tracking-[0.25em] text-white/20">
              2026
            </span>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.015]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-[0.07] blur-[140px]" />

            <div className="pointer-events-none absolute left-8 top-8 h-16 w-16 border-l border-t border-white/[0.08] sm:left-12 sm:top-12" />

            <div className="pointer-events-none absolute bottom-8 right-8 h-16 w-16 border-b border-r border-white/[0.08] sm:bottom-12 sm:right-12" />

            <div className="relative flex min-h-[600px] flex-col items-center justify-center px-6 py-24 text-center sm:px-12 lg:min-h-[680px]">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/25">
                Have something in mind?
              </p>

              <h1 className="mt-8 max-w-5xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-[7rem]">
                Let&apos;s build
                <br />
                <span className="text-white/25">something.</span>
              </h1>

              <a
                href={`mailto:${email}`}
                className="group mt-12 inline-flex items-center gap-5 border border-white/[0.12] px-7 py-4 text-sm text-white/70 transition-all duration-500 hover:border-[var(--accent)]/50 hover:bg-[var(--accent-soft)] hover:text-white"
              >
                <span>Start a conversation</span>

                <span className="text-lg text-[var(--accent-bright)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          <div className="mt-6 grid gap-px overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
            <a
              href={`mailto:${email}`}
              className="group bg-[#09080d] p-8 transition-colors duration-300 hover:bg-white/[0.025] sm:p-10"
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                  Email
                </p>

                <span className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent-bright)]">
                  ↗
                </span>
              </div>

              <p className="mt-8 break-all text-lg text-white/60 transition-colors duration-300 group-hover:text-white">
                {email}
              </p>
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#09080d] p-8 transition-colors duration-300 hover:bg-white/[0.025] sm:p-10"
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                  GitHub
                </p>

                <span className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent-bright)]">
                  ↗
                </span>
              </div>

              <p className="mt-8 text-lg text-white/60 transition-colors duration-300 group-hover:text-white">
                github.com/rohitcreates
              </p>
            </a>
          </div>

          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-[var(--border-soft)] pt-6 text-xs uppercase tracking-[0.25em] text-white/20 sm:flex-row">
            <span>Rohit Singh</span>
            <span>Thanks for stopping by.</span>
          </div>
        </div>
      </section>
    </main>
  );
}