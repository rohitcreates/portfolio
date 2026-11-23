"use client";

import { useRef, useState } from "react";

const milestones = [
  {
    year: "2022",
    title: "A new chapter",
    description:
      "Started my B.Tech in Computer Science & Engineering. It opened the door to a much bigger world of ideas, systems, and things I wanted to understand.",
  },
  {
    year: "2024",
    title: "First web experience",
    description:
      "Completed a one-month web development internship at Thought Applied Creations and got an early taste of working on the web in a professional setting.",
  },
  {
    year: "2025",
    title: "A Python detour",
    description:
      "Completed a six-month unpaid internship at Rays IT & Design World, working with Python and building a Student Data Management System.",
  },
  {
    year: "2025–2026",
    title: "Learning by making",
    description:
      "Spent more time building with JavaScript and React, exploring APIs, and learning how a collection of small pieces becomes a useful interface.",
  },
  {
    year: "2026",
    title: "CineScope",
    description:
      "Made a movie discovery experience with React and the TMDB API, bringing together search, movie details, trailers, cast information, similar titles, and favourites.",
  },
  {
    year: "2026",
    title: "Vanta Studio",
    description:
      "Explored the many moving parts of an e-commerce application, including customer accounts, product discovery, cart and wishlist flows, and an admin interface.",
  },
  {
    year: "2026",
    title: "NovaFlow",
    description:
      "Took on a larger workspace and project management idea, bringing together workspaces, roles, projects, tasks, documentation, and collaboration features.",
  },
  {
    year: "NOW",
    title: "More to explore",
    description:
      "Still learning, experimenting, and making things. There are plenty of ideas left to chase and plenty of things I haven't figured out yet.",
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
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
            Along the way
          </p>
          <h2 className="mt-5 text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
            The longer version.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/40">
            A collection of experiences and projects that have taught me something along the way.
          </p>
        </div>

        <div
          className={[
            "relative overflow-hidden rounded-[28px] transition-all duration-500",
            isActive ? "shadow-[0_0_80px_rgba(124,58,237,0.08)]" : "",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/[0.08]" />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[28px]"
            style={{
              background: `conic-gradient(from 0deg, var(--accent) 0deg, var(--accent) ${progress * 360}deg, transparent ${progress * 360}deg, transparent 360deg)`,
              padding: "1px",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
              opacity: isActive ? 1 : 0.35,
              transition: "opacity 300ms ease",
            }}
          />

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            className="h-[620px] overflow-y-auto px-6 py-12 scrollbar-none sm:px-10 lg:px-20"
          >
            <div className="mx-auto max-w-4xl">
              <div className="relative">
                <div className="absolute bottom-8 left-[15px] top-8 w-px bg-white/[0.08]" />
                <div className="space-y-10">
                  {milestones.map((milestone) => (
                    <article
                      key={milestone.title}
                      className="relative grid grid-cols-[32px_1fr] gap-6"
                    >
                      <div className="relative flex justify-center">
                        <span className="relative z-10 mt-6 h-2.5 w-2.5 rounded-full border border-[var(--accent)] bg-[#09080d] shadow-[0_0_18px_var(--accent-glow)]" />
                      </div>
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