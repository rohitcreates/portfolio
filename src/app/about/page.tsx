import SkillArsenal from "@/components/SkillArsenal";
import AboutJourney from "@/components/AboutJourney";

export default function AboutPage() {
  return (
    <main>
      <section className="px-6 pb-24 pt-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
            A little about me
          </p>
          <h1 className="max-w-5xl text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
            Many interests.
            <br />
            One curious mind.
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/35">
                Rohit Singh
              </p>
            </div>
            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-white/55">
                I&apos;m a computer science student who enjoys making things,
                understanding how they work, and following an idea far enough
                to see what it can become.
              </p>
              <p className="mt-6 text-base leading-8 text-white/40">
                A lot of that curiosity finds its way into web projects. It
                also finds its way into writing: I enjoy creating stories and
                imaginary worlds just as much as I enjoy figuring out how to
                bring an application to life.
              </p>
              <p className="mt-6 text-base leading-8 text-white/40">
                This site is a home for some of those experiments, projects,
                and chapters. It&apos;s a work in progress, much like the person
                behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SkillArsenal />
      <AboutJourney />

      <section className="border-t border-[var(--border-soft)] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                Currently
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Still learning. Still making.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/50">
                I&apos;m studying Computer Science &amp; Engineering at SSIPMT
                Raipur, with an expected graduation year of 2027. Lately,
                I&apos;ve been spending time with TypeScript, backend development,
                databases, and the details that make applications work well.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}