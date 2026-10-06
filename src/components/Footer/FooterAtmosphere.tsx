"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  phase: number;
  isStar: boolean;
  twinkleSpeed: number;
};

export default function FooterAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let time = 0;

    /*
     * ----------------------------------------
     * PARTICLES
     * ----------------------------------------
     */

    const particles: Particle[] = Array.from(
      { length: 420 },
      () => {
        const isStar = Math.random() < 0.07;

        return {
          x: Math.random(),
          y: Math.random(),

          // Independent slow movement
          vx: (Math.random() - 0.5) * 0.00008,
          vy: (Math.random() - 0.5) * 0.00006,

          size: isStar
            ? 1 + Math.random() * 1.4
            : 0.3 + Math.random() * 0.7,

          opacity: isStar
            ? 0.55 + Math.random() * 0.35
            : 0.06 + Math.random() * 0.22,

          phase: Math.random() * Math.PI * 2,

          isStar,

          twinkleSpeed:
            0.4 + Math.random() * 1.2,
        };
      }
    );

    /*
     * ----------------------------------------
     * RESIZE
     * ----------------------------------------
     */

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    /*
     * ----------------------------------------
     * DRAW
     * ----------------------------------------
     */

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      time += 0.003;

      /*
       * ======================================
       * CENTRAL NEBULA
       * ======================================
       */

      const glowX = width * 0.5;
      const glowY = height * 0.58;

      const nebula =
        ctx.createRadialGradient(
          glowX,
          glowY,
          0,

          glowX,
          glowY,
          width * 0.42
        );

      nebula.addColorStop(
        0,
        "rgba(155, 92, 255, 0.16)"
      );

      nebula.addColorStop(
        0.25,
        "rgba(155, 92, 255, 0.09)"
      );

      nebula.addColorStop(
        0.55,
        "rgba(155, 92, 255, 0.035)"
      );

      nebula.addColorStop(
        1,
        "rgba(155, 92, 255, 0)"
      );

      ctx.fillStyle = nebula;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      /*
       * ======================================
       * SECONDARY SOFT GLOW
       * ======================================
       */

      const secondaryGlow =
        ctx.createRadialGradient(
          width * 0.5,
          height * 0.58,
          0,

          width * 0.5,
          height * 0.58,
          width * 0.18
        );

      secondaryGlow.addColorStop(
        0,
        "rgba(185, 120, 255, 0.12)"
      );

      secondaryGlow.addColorStop(
        1,
        "rgba(155, 92, 255, 0)"
      );

      ctx.fillStyle = secondaryGlow;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      /*
       * ======================================
       * WAVES
       * ======================================
       */

      const waves = [
        {
          amplitude: 46,
          frequency: 2.6,
          speed: 0.38,
          phase: 0,
          opacity: 0.18,
        },

        {
          amplitude: 30,
          frequency: 3.3,
          speed: 0.26,
          phase: 1.7,
          opacity: 0.12,
        },

        {
          amplitude: 58,
          frequency: 2.1,
          speed: 0.18,
          phase: 3.1,
          opacity: 0.07,
        },

        {
          amplitude: 20,
          frequency: 4.4,
          speed: 0.48,
          phase: 4.4,
          opacity: 0.06,
        },
      ];

      waves.forEach((wave) => {
        ctx.beginPath();

        for (
          let x = 0;
          x <= width;
          x += 4
        ) {
          const normalizedX =
            x / width;

          /*
           * Main wave.
           */

          const primary =
            Math.sin(
              normalizedX *
                Math.PI *
                wave.frequency +
                time *
                  wave.speed +
                wave.phase
            );

          /*
           * Secondary movement makes
           * the line less mechanical.
           */

          const secondary =
            Math.sin(
              normalizedX *
                Math.PI *
                1.7 -
                time * 0.22
            ) * 8;

          const y =
            height * 0.60 +
            primary *
              wave.amplitude +
            secondary;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        /*
         * Make the center brighter
         * than the edges.
         */

        const gradient =
          ctx.createLinearGradient(
            0,
            0,
            width,
            0
          );

        gradient.addColorStop(
          0,
          `rgba(155, 92, 255, ${
            wave.opacity * 0.25
          })`
        );

        gradient.addColorStop(
          0.25,
          `rgba(155, 92, 255, ${
            wave.opacity * 0.55
          })`
        );

        gradient.addColorStop(
          0.5,
          `rgba(195, 135, 255, ${
            wave.opacity
          })`
        );

        gradient.addColorStop(
          0.75,
          `rgba(155, 92, 255, ${
            wave.opacity * 0.55
          })`
        );

        gradient.addColorStop(
          1,
          `rgba(155, 92, 255, ${
            wave.opacity * 0.25
          })`
        );

        ctx.strokeStyle = gradient;

        ctx.lineWidth =
          wave.opacity > 0.15
            ? 1.2
            : 0.8;

        ctx.stroke();
      });

      /*
       * ======================================
       * PARTICLES
       * ======================================
       */

      particles.forEach(
        (particle) => {
          /*
           * Independent movement.
           */

          particle.x +=
            particle.vx;

          particle.y +=
            particle.vy;

          /*
           * Gentle flow field.
           *
           * Particles are NOT attached
           * to the waves.
           */

          const flowAngle =
            Math.sin(
              particle.x *
                Math.PI *
                3 +
                time * 0.6 +
                particle.phase
            ) *
            0.8;

          particle.vx +=
            Math.cos(flowAngle) *
            0.000002;

          particle.vy +=
            Math.sin(flowAngle) *
            0.000002;

          /*
           * Prevent particles from
           * accelerating forever.
           */

          particle.vx *= 0.998;
          particle.vy *= 0.998;

          /*
           * Keep movement extremely subtle.
           */

          particle.vx = Math.max(
            -0.00015,
            Math.min(
              0.00015,
              particle.vx
            )
          );

          particle.vy = Math.max(
            -0.00012,
            Math.min(
              0.00012,
              particle.vy
            )
          );

          /*
           * Wrap around.
           */

          if (particle.x < 0)
            particle.x = 1;

          if (particle.x > 1)
            particle.x = 0;

          if (particle.y < 0)
            particle.y = 1;

          if (particle.y > 1)
            particle.y = 0;

          const x =
            particle.x * width;

          const y =
            particle.y * height;

          /*
           * Distance from the central
           * energy source.
           */

          const dx =
            particle.x - 0.5;

          const dy =
            particle.y - 0.58;

          const distance =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          const centerInfluence =
            Math.max(
              0,
              1 -
                distance / 0.7
            );

          /*
           * Slightly stronger particles
           * near the center.
           */

          let alpha =
            particle.opacity *
            (0.35 +
              centerInfluence *
                0.65);

          /*
           * Twinkle only for special stars.
           */

          if (particle.isStar) {
            const twinkle =
              0.7 +
              Math.sin(
                time *
                  particle.twinkleSpeed +
                  particle.phase
              ) *
                0.3;

            alpha *= twinkle;
          }

          /*
           * ==================================
           * STAR GLOW
           * ==================================
           */

          if (particle.isStar) {
            const radius =
              particle.size * 8;

            const starGlow =
              ctx.createRadialGradient(
                x,
                y,
                0,
                x,
                y,
                radius
              );

            starGlow.addColorStop(
              0,
              `rgba(
                205,
                160,
                255,
                ${alpha * 0.45}
              )`
            );

            starGlow.addColorStop(
              0.25,
              `rgba(
                180,
                120,
                255,
                ${alpha * 0.16}
              )`
            );

            starGlow.addColorStop(
              1,
              "rgba(155, 92, 255, 0)"
            );

            ctx.fillStyle =
              starGlow;

            ctx.beginPath();

            ctx.arc(
              x,
              y,
              radius,
              0,
              Math.PI * 2
            );

            ctx.fill();
          }

          /*
           * ==================================
           * PARTICLE CORE
           * ==================================
           */

          ctx.beginPath();

          ctx.arc(
            x,
            y,
            particle.size,
            0,
            Math.PI * 2
          );

          ctx.fillStyle = `rgba(
            205,
            165,
            255,
            ${alpha}
          )`;

          ctx.fill();

          /*
           * ==================================
           * STAR CROSS
           * ==================================
           */

          if (
            particle.isStar &&
            particle.size > 1.7
          ) {
            const sparkle =
              particle.size * 3.5;

            ctx.strokeStyle =
              `rgba(
                235,
                215,
                255,
                ${alpha * 0.65}
              )`;

            ctx.lineWidth = 0.5;

            ctx.beginPath();

            ctx.moveTo(
              x - sparkle,
              y
            );

            ctx.lineTo(
              x + sparkle,
              y
            );

            ctx.moveTo(
              x,
              y - sparkle
            );

            ctx.lineTo(
              x,
              y + sparkle
            );

            ctx.stroke();
          }
        }
      );

      animationFrame =
        requestAnimationFrame(draw);
    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    draw();

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}