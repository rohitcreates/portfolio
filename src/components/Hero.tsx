import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-visual.png')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/35" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-[#08080a]/90 to-[#08080a]/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08080a] to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-28 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/45">
            A little corner of the internet by Rohit Singh
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Curious by nature.
            <br />
            Always making something
            <span className="text-[#9b5cff]">.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
            I enjoy exploring how things work, turning ideas into web projects,
            and getting lost in stories and imaginary worlds. This is where I
            keep a little of what I make and what I learn along the way.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="border border-[#9b5cff] bg-[#9b5cff] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#8646e8]"
            >
              Things I&apos;ve made ↗
            </Link>
            <Link
              href="/about"
              className="border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-[#9b5cff]"
            >
              A little about me ↗
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 px-6 py-3 text-sm font-medium text-white/75 transition hover:border-white/50 hover:text-white"
            >
              Get in touch ↗
            </Link>
          </div>
        </div>

        <div className="absolute bottom-24 right-10 hidden w-52 border-l border-white/20 pl-5 lg:block">
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/40">
            Lately
          </p>
          <ul className="space-y-2 text-sm text-white/65">
            <li>Making things for the web</li>
            <li>Learning by experimenting</li>
            <li>Writing stories and worlds</li>
          </ul>
        </div>
      </div>
    </section>
  );
}