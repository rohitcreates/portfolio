"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive interfaces and interactive experiences.",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend & data",
    description: "Developing application logic, APIs, authentication, and data flows.",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "Tools & workflow",
    description: "The tools I use to build, manage, and ship projects.",
    skills: ["Git", "GitHub"],
  },
];

export default function SkillArsenal() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.04, 0.18, 0.18, 0.04]
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-28 lg:px-10"
    >
      <motion.div
        aria-hidden="true"
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[70%] -translate-x-1/2 rounded-full bg-[#7c3aed]/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#a970ff]">
            Technical toolkit
          </p>
          <h2 className="mt-5 text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tools I work with.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45">
            Technologies I use across my projects, grouped by the work they help me do.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 sm:p-7"
            >
              <h3 className="text-lg font-medium text-white">{group.title}</h3>
              <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-white/40">
                {group.description}
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/[0.1] bg-white/[0.025] px-3 py-2 text-xs text-white/65 transition-colors hover:border-[#9b5cff]/50 hover:text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}