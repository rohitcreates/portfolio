import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-white/5">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />

          <span className="absolute left-5 top-5 text-xs tracking-[0.2em] text-white/40">
            {project.id}
          </span>

          <span className="absolute bottom-5 right-5 text-sm text-white/50 transition-transform group-hover:translate-x-1">
            View ↗
          </span>
        </div>
      </a>
 

      <div className="mt-6">
        <h3 className="text-2xl font-medium tracking-tight">
          {project.title}
        </h3>

        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/45">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.featuredTech.map((technology) => (
            <span
              key={technology}
              className="border border-white/10 px-3 py-1 text-xs text-white/45"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}