import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero visual */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-visual.png')" }}
      />

      {/* Overall darkness */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Left-side readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-[#08080a]/85 to-transparent" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08080a] to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-8 lg:px-10">
        <div className="max-w-2xl">

          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/45">
            Hey, I&apos;m
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Rohit Singh
            <span className="text-[#9b5cff]">.</span>
          </h1>

          <h2 className="mt-7 max-w-2xl text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            I build digital experiences with{" "}
            <span className="text-[#9b5cff]">code.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
            Frontend & Full Stack Developer building modern,
            useful web applications.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="border border-[#9b5cff] bg-[#9b5cff] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#8646e8]"
            >
              View my work ↗
            </Link>

            <Link
              href="/contact"
              className="border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-[#9b5cff]"
            >
              Let&apos;s talk ↗
            </Link>
          </div>
        </div>

        {/* Current focus */}
        <div className="absolute bottom-28 right-8 hidden w-40 border-l border-white/20 pl-5 lg:block">
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/40">
            Current focus
          </p>

          <div className="space-y-1 text-sm text-white/70">
            <p>Build</p>
            <p>Learn</p>
            <p>Create</p>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-white/35">
            One project at a time.
          </p>
        </div>
      </div>
    </section>
  );
}