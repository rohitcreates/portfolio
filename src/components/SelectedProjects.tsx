import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function SelectedProjects() {
  return (
    <section className=" px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#9b5cff]">
              Selected Work
            </p>

            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              Things I&apos;ve built.
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden text-sm text-white/50 transition-colors hover:text-white sm:block"
          >
            View all projects ↗
          </Link>
        </div>

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-12 inline-block text-sm text-white/50 transition-colors hover:text-white sm:hidden"
        >
          View all projects ↗
        </Link>
      </div>
    </section>
  );
}