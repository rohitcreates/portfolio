import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectShowcase() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section className="px-6 pb-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Featured project */}
        <article className="group">
          <div className="mb-6 flex items-center justify-between border-t border-[var(--border-soft)] pt-5">
            <span className="text-xs tracking-[0.25em] text-white/35">
              {featuredProject.id}
            </span>

            <span className="text-xs uppercase tracking-[0.25em] text-white/35">
              Featured
            </span>
          </div>

          {/* Project image -> Live project */}
          <a
            href={featuredProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${featuredProject.title} live project`}
          >
            <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-white/5">
              <Image
                src={featuredProject.image}
                alt={`${featuredProject.title} project preview`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />

              <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/5" />

              <span className="absolute bottom-6 right-6 text-sm text-white/60 transition-transform duration-300 group-hover:translate-x-1">
                View project ↗
              </span>
            </div>
          </a>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
                Full Stack
              </p>

              <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
                {featuredProject.title}
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-base leading-8 text-white/50">
                {featuredProject.shortDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tech.map((technology) => (
                  <span
                    key={technology}
                    className="border border-white/10 px-3 py-1.5 text-xs text-white/45"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white transition-colors hover:text-[var(--accent-bright)]"
                >
                  Explore project ↗
                </a>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Remaining projects */}
        <div className="mt-32 grid gap-16 border-t border-[var(--border-soft)] pt-16 md:grid-cols-2">
          {otherProjects.map((project) => (
            <article key={project.id} className="group">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs tracking-[0.25em] text-white/35">
                  {project.id}
                </span>

                <span className="text-xs uppercase tracking-[0.25em] text-white/30">
                  Project
                </span>
              </div>

              {/* Project image -> Live project */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live project`}
              >
                <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-white/5">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/5" />

                  <span className="absolute bottom-5 right-5 text-sm text-white/60 transition-transform duration-300 group-hover:translate-x-1">
                    View ↗
                  </span>
                </div>
              </a>

              <div className="mt-6">
                <h3 className="text-3xl font-medium tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-white/45">
                  {project.shortDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.featuredTech.map((technology) => (
                    <span
                      key={technology}
                      className="border border-white/10 px-3 py-1 text-xs text-white/40"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white transition-colors hover:text-[var(--accent-bright)]"
                  >
                    Explore project ↗
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}