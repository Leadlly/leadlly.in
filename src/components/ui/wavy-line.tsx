"use client";

import { useEffect } from "react";

import { animate, motion, useMotionValue, useTransform } from "motion/react";

function generateWavePath(
  width: number,
  amplitude: number,
  frequency: number,
  phase: number,
  yOffset: number,
): string {
  const steps = 120;
  const points: string[] = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = t * width;
    const normalizedX = t * Math.PI * 2 * frequency;
    const y = yOffset + Math.sin(normalizedX + phase) * amplitude;
    points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }

  return points.join(" ");
}

export default function WaveLines() {
  const phase1 = useMotionValue(0);
  const phase2 = useMotionValue(0);

  useEffect(() => {
    const ctrl1 = animate(phase1, Math.PI * 200, {
      duration: 1000,
      ease: "linear",
      repeat: Infinity,
    });

    const ctrl2 = animate(phase2, -Math.PI * 200, {
      duration: 1000,
      ease: "linear",
      repeat: Infinity,
    });

    return () => {
      ctrl1.stop();
      ctrl2.stop();
    };
  }, [phase1, phase2]);

  // Both waves share the same vertical center so they intersect
  const wave1Path = useTransform(phase1, (p) =>
    generateWavePath(1200, 55, 2, p, 150),
  );

  const wave2Path = useTransform(phase2, (p) =>
    generateWavePath(1200, 50, 3, p, 150),
  );

  return (
    <div className="w-full h-40 sm:h-52 md:h-64 lg:h-80 relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(168,85,247,0.2),transparent_70%)]" />

      <svg
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="w1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="20%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="80%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="w2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="20%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="80%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id="g1" x="-10%" y="-50%" width="120%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="g2" x="-10%" y="-50%" width="120%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Wave 1 — purple, freq 2 */}
        <motion.path
          d={wave1Path}
          fill="none"
          stroke="url(#w1)"
          strokeWidth="1"
          strokeLinecap="round"
          filter="url(#g1)"
        />

        {/* Wave 2 — cyan, freq 3 */}
        <motion.path
          d={wave2Path}
          fill="none"
          stroke="url(#w2)"
          strokeWidth="1"
          strokeLinecap="round"
          filter="url(#g2)"
        />
      </svg>
    </div>
  );
}
