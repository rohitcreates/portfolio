"use client";

import { useRef, useState } from "react";

const milestones = [
  {
    year: "JUN 2025",
    title: "The Beginning",
    description:
      "Started learning web development with HTML and CSS, building the foundation for everything that followed.",
  },
  {
    year: "2025",
    title: "JavaScript",
    description:
      "Moved into JavaScript and began building interactive applications rather than only static pages.",
  },
  {
    year: "2025–2026",
    title: "Frontend",
    description:
      "Focused on frontend development and learned to turn ideas into complete, functional interfaces.",
  },
  {
    year: "2026",
    title: "CineScope",
    description:
      "Built CineScope, my first proper project, and put my frontend skills into practice.",
  },
  {
    year: "2026",
    title: "Internship",
    description:
      "Gained practical development experience through a one-month internship at Thought Applied Creations.",
  },
  {
    year: "2026",
    title: "Backend",
    description:
      "Expanded into backend development and built Vanta Studio while learning server-side development, databases, and application architecture.",
  },
  {
    year: "2026",
    title: "Full-stack",
    description:
      "Started bringing frontend and backend development together to build complete applications.",
  },
  {
    year: "AUG 2026",
    title: "NovaFlow",
    description:
      "Started building NovaFlow, a full-stack workspace and project management application.",
  },
  {
    year: "NOW",
    title: "Still Building",
    description:
      "Continuing to grow as a MERN full-stack developer while learning, experimenting, and building new things.",
  },
];

export default function AboutJourney() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function handleScroll() {
    const element = scrollRef.current;

    if (!element) return;

    const maxScroll = element.scrollHeight - element.clientHeight;

    setProgress(maxScroll > 0 ? element.scrollTop / maxScroll : 0);
  }

  return (
    <section className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
            Journey
          </p>

          <h2 className="mt-5 text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
            How I got here.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/40">
            From writing my first lines of HTML to building full-stack
            applications.
          </p>
        </div>

        {/* Scroll container */}
        <div
          className={[
            "relative overflow-hidden rounded-[28px] transition-all duration-500",
            isActive
              ? "shadow-[0_0_80px_rgba(124,58,237,0.08)]"
              : "",
          ].join(" ")}
        >
          {/* Base border */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/[0.08]" />

          {/* Progress border */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[28px]"
            style={{
              background: `conic-gradient(
                from 0deg,
                var(--accent) 0deg,
                var(--accent) ${progress * 360}deg,
                transparent ${progress * 360}deg,
                transparent 360deg
              )`,
              padding: "1px",
              mask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
              opacity: isActive ? 1 : 0.35,
              transition: "opacity 300ms ease",
            }}
          />

          {/* Scrollable area */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            className="h-[620px] overflow-y-auto px-6 py-12 scrollbar-none sm:px-10 lg:px-20"
          >
            <div className="mx-auto max-w-4xl">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute bottom-8 left-[15px] top-8 w-px bg-white/[0.08]" />

                <div className="space-y-10">
                  {milestones.map((milestone, index) => (
                    <article
                      key={`${milestone.year}-${milestone.title}`}
                      className="relative grid grid-cols-[32px_1fr] gap-6"
                    >
                      {/* Timeline node */}
                      <div className="relative flex justify-center">
                        <span className="relative z-10 mt-6 h-2.5 w-2.5 rounded-full border border-[var(--accent)] bg-[#09080d] shadow-[0_0_18px_var(--accent-glow)]" />
                      </div>

                      {/* Milestone */}
                      <div className="border-b border-white/[0.06] pb-10">
                        <p className="text-xs tracking-[0.3em] text-[var(--accent)]">
                          {milestone.year}
                        </p>

                        <h3 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                          {milestone.title}
                        </h3>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                          {milestone.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <p className="mt-10 text-center text-[10px] uppercase tracking-[0.35em] text-white/20">
                Scroll to explore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}