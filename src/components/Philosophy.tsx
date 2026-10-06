"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const firstLine =
  "The fastest way to understand something is to build with it.";

const secondLine =
  "Every project is another attempt to turn curiosity into something that actually works.";

function ScrollWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = Math.min(start + 0.18, 1);

  const opacity = useTransform(
    progress,
    [start, end],
    [0.22, 1]
  );

  const color = useTransform(
    progress,
    [start, end],
    ["rgba(255,255,255,0.22)", "rgba(255,255,255,1)"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block cursor-default transition-colors duration-200 hover:!text-[#a970ff] hover:[text-shadow:0_0_25px_rgba(155,92,255,0.65)]"
    >
      {word}
    </motion.span>
  );
}

function AnimatedText({
  text,
  progress,
  offset = 0,
}: {
  text: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  offset?: number;
}) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline">
          <ScrollWord
            word={word}
            index={index + offset}
            total={words.length + offset}
            progress={progress}
          />
          {index < words.length - 1 && " "}
        </span>
      ))}
    </>
  );
}

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[180vh] "
    >
      {/* Ambient purple glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-72 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-72 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[120px]" />

      {/* Sticky viewport */}
      <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
            <p>
              <AnimatedText
                text={firstLine}
                progress={scrollYProgress}
              />
            </p>

            <p className="mt-8">
              <AnimatedText
                text={secondLine}
                progress={scrollYProgress}
                offset={firstLine.split(" ").length}
              />
            </p>
          </div>

          {/* Decorative side lines */}
          <div className="pointer-events-none absolute left-[-20vw] top-1/2 hidden w-[18vw] lg:block">
            <div className="h-px bg-gradient-to-r from-transparent to-[#9b5cff]" />
          </div>

          <div className="pointer-events-none absolute right-[-20vw] top-1/2 hidden w-[18vw] lg:block">
            <div className="h-px bg-gradient-to-l from-transparent to-[#9b5cff]" />
          </div>
        </div>
      </div>
    </section>
  );
}