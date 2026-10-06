import SkillArsenal from "@/components/SkillArsenal";
import AboutJourney from "@/components/AboutJourney";

export default function AboutPage() {
  return (
    <main>
      {/* Intro */}
      <section className="px-6 pb-24 pt-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
            About
          </p>

          <h1 className="max-w-5xl text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
            Building things,
            <br />
            learning as I go.
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/35">
                Rohit Singh
              </p>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-white/55">
                I&apos;m a computer science student focused on building
                full-stack applications and turning ideas into working
                products.
              </p>

              <p className="mt-6 text-base leading-8 text-white/40">
                I learn primarily by building. Each project has been a step
                toward understanding how modern applications work from the
                interface all the way to the backend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <SkillArsenal />

      {/* Journey */}
      <AboutJourney />

      {/* Education / current direction */}
      <section className="border-t border-[var(--border-soft)] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                Education
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                B.Tech in Computer Science &amp; Engineering
              </h2>

              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/30">
                Currently pursuing
              </p>

              <div className="mt-16 border-t border-[var(--border-soft)] pt-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Now
                </p>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/50">
                  Continuing to grow as a MERN full-stack developer while
                  strengthening problem solving, DSA, and the ability to build
                  better software from the ground up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}