"use client";

import { useRef, useState } from "react";
import type { Stop } from "@/data/roadmap";
import type { StampHue } from "@/data/projects";

const DOT: Record<StampHue, { bg: string; text: string }> = {
  dust: { bg: "bg-dust", text: "text-dust-ink" },
  ochre: { bg: "bg-ochre", text: "text-ochre-ink" },
  clay: { bg: "bg-clay", text: "text-clay-ink" },
  terracotta: { bg: "bg-terracotta", text: "text-terracotta-ink" },
  moss: { bg: "bg-moss-deep", text: "text-moss-deep" },
};

const VBW = 1000;
const VBH = 320;
const MARGIN_X = 90;
const Y_HIGH = VBH * 0.4;
const Y_LOW = VBH * 0.6;

export default function RoadmapRoute({ stops }: { stops: Stop[] }) {
  const n = stops.length;
  const pathRef = useRef<SVGPathElement>(null);
  const [traveler, setTraveler] = useState<{ x: number; y: number } | null>(
    null,
  );

  const points = stops.map((_, i) => {
    const t = n === 1 ? 0.5 : i / (n - 1);
    const x = MARGIN_X + t * (VBW - 2 * MARGIN_X);
    const y = i % 2 === 0 ? Y_HIGH : Y_LOW;
    return { x, y };
  });

  const d = points
    .map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      const prev = points[i - 1];
      const cx = (prev.x + p.x) / 2;
      return `C ${cx} ${prev.y}, ${cx} ${p.y}, ${p.x} ${p.y}`;
    })
    .join(" ");

  // Slide a glowing "traveler" to the point on the route nearest the cursor.
  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const path = pathRef.current;
    if (!path) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const targetX = ((e.clientX - rect.left) / rect.width) * VBW;
    const total = path.getTotalLength();
    let best: { x: number; y: number } | null = null;
    let bestDist = Infinity;
    const steps = 140;
    for (let i = 0; i <= steps; i++) {
      const pt = path.getPointAtLength((total * i) / steps);
      const dist = Math.abs(pt.x - targetX);
      if (dist < bestDist) {
        bestDist = dist;
        best = { x: pt.x, y: pt.y };
      }
    }
    setTraveler(best);
  }

  return (
    <div
      className="relative mx-auto h-[340px] min-w-[1040px] cursor-crosshair md:h-[380px]"
      onMouseMove={handleMove}
      onMouseLeave={() => setTraveler(null)}
    >
      <svg
        className="absolute inset-0 h-full w-full text-sage"
        viewBox={`0 0 ${VBW} ${VBH}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="1 12"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* mouse-following traveler */}
      {traveler && (
        <span
          className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out"
          style={{
            left: `${(traveler.x / VBW) * 100}%`,
            top: `${(traveler.y / VBH) * 100}%`,
          }}
          aria-hidden="true"
        >
          <span className="block h-3 w-3 rounded-full bg-moss-deep shadow-[0_0_0_4px_var(--paper),0_0_18px_4px_rgba(79,97,56,0.45)]" />
          <span className="absolute inset-0 animate-ping rounded-full bg-moss-deep/40" />
        </span>
      )}

      {stops.map((stop, i) => {
        const p = points[i];
        const c = DOT[stop.accent];
        const isHigh = i % 2 === 0;
        return (
          <div
            key={`${stop.city}-${i}`}
            className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${(p.x / VBW) * 100}%`,
              top: `${(p.y / VBH) * 100}%`,
            }}
          >
            <span
              className={`block h-4 w-4 rounded-full ${c.bg} shadow-[0_0_0_5px_var(--paper),0_2px_5px_rgba(44,40,31,0.25)] transition-transform duration-300 group-hover:scale-150`}
            />

            <div
              className={`absolute left-1/2 w-36 -translate-x-1/2 text-center transition-transform duration-300 group-hover:-translate-y-0.5 ${
                isHigh
                  ? "bottom-full mb-4 group-hover:mb-5"
                  : "top-full mt-4 group-hover:mt-5"
              }`}
            >
              <p className="font-display text-lg leading-tight text-ink">
                {stop.org}
              </p>
              <p className={`font-mono text-xs ${c.text}`}>{stop.city}</p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                {stop.term}
              </p>
              <p className="mt-1 text-xs leading-snug text-ink-soft">
                {stop.role}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
