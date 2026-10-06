import ProjectShowcase from "@/components/ProjectShowcase";

export default function ProjectsPage() {
  return (
    <main>
      <section className="px-6 pb-20 pt-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Page intro */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
              Projects
            </p>

            <h1 className="max-w-4xl text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
              Things I&apos;ve built.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">
              A collection of applications, experiments, and ideas built
              while learning to turn concepts into working software.
            </p>
          </div>
        </div>
      </section>

      <ProjectShowcase />
    </main>
  );
}