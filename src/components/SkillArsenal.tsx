"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Django",
  "MongoDB",
  "SQLite",
  "Prisma",
  "Git",
  "GitHub",
  "Vite",
  "REST APIs",
];

export default function SkillArsenal() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /*
   * The lamp stays in one place.
   * Only its intensity changes as we scroll.
   */
  const lightOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55, 0.8, 1],
    [0.05, 0.15, 0.35, 0.55, 0.7]
  );

  const glowScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.75, 1, 1.15]
  );

  const lampOpacity = useTransform(
  scrollYProgress,
  [0, 0.25, 0.55, 0.8],
  [0.08, 0.25, 0.65, 1]
);

const beamOpacity = useTransform(
  scrollYProgress,
  [0, 0.25, 0.55, 0.8],
  [0.03, 0.12, 0.35, 0.65]
);

const glowOpacity = useTransform(
  scrollYProgress,
  [0, 0.25, 0.55, 0.8],
  [0.02, 0.08, 0.2, 0.4]
);

const beamScale = useTransform(
  scrollYProgress,
  [0, 0.8],
  [0.7, 1]
);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden  px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-24 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/35">
            Skills
          </p>

          <h2 className="mt-5 text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
            What I use to build.
          </h2>
        </div>

        {/* Skill field */}
        <div className="relative mx-auto min-h-[560px] max-w-5xl">

          {/* Lamp */}
            <motion.div
            style={{ opacity: lampOpacity }}
            className="pointer-events-none absolute left-1/2 top-[-20px] z-0 h-1 w-[55%] -translate-x-1/2 rounded-full bg-[#a970ff] shadow-[0_0_18px_#9b5cff,0_0_45px_rgba(155,92,255,0.8)]"
            />

            {/* Lamp beam */}
            <motion.div
            style={{
                opacity: beamOpacity,
                scaleY: beamScale,
            }}
            className="pointer-events-none absolute left-1/2 top-[-10px] z-0 h-[430px] w-[55%] -translate-x-1/2 origin-top bg-gradient-to-b from-[#9b5cff]/25 via-[#9b5cff]/10 to-transparent blur-[35px]"
            />

            {/* Atmospheric glow */}
            <motion.div
            style={{ opacity: glowOpacity }}
            className="pointer-events-none absolute left-1/2 top-[-80px] z-0 h-[500px] w-[80%] -translate-x-1/2 rounded-[50%] bg-[#7c3aed]/20 blur-[120px]"
            />




          {/* Skills */}
          <div className="relative flex flex-wrap items-center justify-center gap-x-5 gap-y-5 sm:gap-x-7 sm:gap-y-7 lg:gap-x-10 lg:gap-y-8">

            {skills.map((skill, index) => {
              /*
               * Skills start dim and gradually become brighter
               * as the section progresses.
               */
              const start =
                0.05 + (index / skills.length) * 0.55;

              const end = start + 0.25;

              const opacity = useTransform(
                scrollYProgress,
                [0, 0.25, 0.55, 0.8],
                [0.32, 0.4, 0.7, 1]
                );

              return (
                <motion.div
                  key={skill}
                  style={{ opacity }}
                  className="
                    group
                    relative
                    cursor-default
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.015]
                    px-5
                    py-3
                    text-sm
                    text-white/55
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#9b5cff]/70
                    hover:bg-[#9b5cff]/10
                    hover:text-white
                    hover:shadow-[0_0_35px_rgba(155,92,255,0.3)]
                    sm:px-6
                    sm:py-3.5
                    sm:text-base
                  "
                >
                  {skill}

                  {/* Individual hover glow */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      -z-10
                      rounded-full
                      bg-[#9b5cff]/25
                      opacity-0
                      blur-xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Tiny floating particles */}
          <span className="absolute left-[20%] top-[20%] h-1 w-1 rounded-full bg-[#9b5cff]/40" />

          <span className="absolute right-[22%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#9b5cff]/30" />

          <span className="absolute left-[28%] bottom-[22%] h-1 w-1 rounded-full bg-[#9b5cff]/40" />

          <span className="absolute right-[30%] bottom-[18%] h-1 w-1 rounded-full bg-[#9b5cff]/30" />
        </div>
      </div>
    </section>
  );
}