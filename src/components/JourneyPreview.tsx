"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const milestones = [
  {
    year: "2022",
    title: "A new chapter",
    description:
      "Started my B.Tech in Computer Science & Engineering and began exploring the many corners of computing.",
    icon: "⌘",
  },
  {
    year: "2024",
    title: "First web experience",
    description:
      "Spent a month at Thought Applied Creations as a web development intern and got an early look at working on the web beyond tutorials.",
    icon: "</>",
  },
  {
    year: "2025",
    title: "Exploring Python",
    description:
      "During a six-month unpaid internship at Rays IT & Design World, worked with Python and built a Student Data Management System.",
    icon: "⌬",
  },
  {
    year: "2025–2026",
    title: "Finding my way with React",
    description:
      "Started making more of my own things, learning JavaScript, React, APIs, and how to turn an idea into an interface people can use.",
    icon: "✦",
  },
  {
    year: "2026",
    title: "Bigger ideas, bigger builds",
    description:
      "NovaFlow and Vanta Studio became opportunities to explore the moving parts behind larger applications. CineScope kept the curiosity going on the frontend.",
    icon: "↗",
  },
];

export default function JourneyPreview() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const scrollTimeline = (direction: "left" | "right") => {
    timelineRef.current?.scrollBy({
      left: direction === "left" ? -500 : 500,
      behavior: "smooth",
    });
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.currentTarget.scrollLeft += event.deltaY;
    }
  };

  return (
    <section className="relative overflow-hidden px-6 py-36 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-20 flex items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#9b5cff]">
              Along the way
            </p>
            <h2 className="mt-5 text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
              A few chapters.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/35">
              Some experiences, experiments, and projects that have shaped what I make today.
            </p>
          </div>

          <Link
            href="/about"
            className="hidden text-sm text-white/40 transition-colors hover:text-white sm:block"
          >
            More about me ↗
          </Link>
        </div>

        <div className="relative rounded-[30px] border border-[#9b5cff]/20 bg-[#09080d]/70 py-14 shadow-[0_0_100px_rgba(124,58,237,0.05)]">
          <button
            type="button"
            onClick={() => scrollTimeline("left")}
            aria-label="Scroll journey left"
            className="absolute left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#09080d]/90 text-white/50 backdrop-blur transition hover:border-[#9b5cff]/50 hover:text-white lg:flex"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollTimeline("right")}
            aria-label="Scroll journey right"
            className="absolute right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#09080d]/90 text-white/50 backdrop-blur transition hover:border-[#9b5cff]/50 hover:text-white lg:flex"
          >
            →
          </button>

          <div
            ref={timelineRef}
            onWheel={handleWheel}
            className="overflow-x-auto overscroll-x-contain scrollbar-none"
          >
            <div className="min-w-[2100px] px-16">
              <div className="relative">
                <div className="absolute left-[190px] right-[190px] top-[30px] h-px bg-white/[0.08]" />
                <div className="absolute left-[190px] right-[190px] top-[30px] h-px bg-gradient-to-r from-[#9b5cff]/10 via-[#9b5cff]/40 to-[#9b5cff]/10 shadow-[0_0_15px_rgba(155,92,255,0.3)]" />

                <div className="relative flex justify-between px-[120px]">
                  {milestones.map((milestone, index) => {
                    const active = activeIndex === index;

                    return (
                      <div
                        key={milestone.title}
                        className="flex w-[380px] shrink-0 flex-col items-center"
                      >
                        <p
                          className={[
                            "mb-5 text-xs tracking-[0.3em] transition-colors duration-300",
                            active ? "text-[#b58cff]" : "text-white/35",
                          ].join(" ")}
                        >
                          {milestone.year}
                        </p>

                        <div className="relative z-10">
                          <span
                            className={[
                              "block h-4 w-4 rounded-full border-2 bg-[#09080d] transition-all duration-500",
                              active
                                ? "border-[#b58cff] bg-[#b58cff] shadow-[0_0_25px_rgba(181,140,255,0.9)]"
                                : "border-white/30",
                            ].join(" ")}
                          />
                          {active && (
                            <span className="absolute inset-[-10px] rounded-full bg-[#9b5cff]/15 blur-md" />
                          )}
                        </div>

                        <article
                          onMouseEnter={() => setActiveIndex(index)}
                          onMouseLeave={() => setActiveIndex(null)}
                          className={[
                            "mt-10 min-h-[280px] w-[380px] rounded-2xl border p-8 transition-all duration-500",
                            active
                              ? "-translate-y-2 border-[#9b5cff]/45 bg-[#9b5cff]/[0.07] shadow-[0_20px_70px_rgba(124,58,237,0.14)]"
                              : "border-white/[0.08] bg-white/[0.015]",
                          ].join(" ")}
                        >
                          <div
                            className={[
                              "flex h-12 w-12 items-center justify-center rounded-xl border text-sm transition-all duration-500",
                              active
                                ? "border-[#9b5cff]/40 bg-[#9b5cff]/10 text-[#b58cff]"
                                : "border-white/[0.08] bg-white/[0.02] text-white/30",
                            ].join(" ")}
                          >
                            {milestone.icon}
                          </div>

                          <h3
                            className={[
                              "mt-8 text-2xl font-medium transition-colors",
                              active ? "text-white" : "text-white/80",
                            ].join(" ")}
                          >
                            {milestone.title}
                          </h3>

                          <div
                            className={[
                              "mt-5 h-px transition-all duration-500",
                              active ? "w-12 bg-[#a970ff]" : "w-6 bg-white/15",
                            ].join(" ")}
                          />

                          <p
                            className={[
                              "mt-6 max-w-[300px] text-base leading-7 transition-colors",
                              active ? "text-white/55" : "text-white/30",
                            ].join(" ")}
                          >
                            {milestone.description}
                          </p>
                        </article>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-14 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.35em] text-white/20">
                <span className="text-sm">↔</span>
                Scroll to explore
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/about"
            className="text-xs uppercase tracking-[0.3em] text-white/30 transition-colors hover:text-[#a970ff]"
          >
            Get to know me ↗
          </Link>
        </div>
      </div>
    </section>
  );
}