"use client";

import { useRef, useState } from "react";
import Reveal from "./reveal";
import { Sprig } from "./decor";
import { PHOTOS } from "@/data/photos";

// Scattered resting tilts (by grid position) so the wall feels hand-pinned.
const TILTS = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
];

const TAPES = [
  "bg-ochre/25",
  "bg-sage/40",
  "bg-terracotta/20",
  "bg-dust/25",
  "bg-clay/25",
  "bg-sage/40",
  "bg-ochre/25",
];

export default function Photos() {
  const [order, setOrder] = useState(PHOTOS);
  const dragFrom = useRef<number | null>(null);
  const [draggingSrc, setDraggingSrc] = useState<string | null>(null);

  function handleDragOver(e: React.DragEvent, overIndex: number) {
    e.preventDefault();
    const from = dragFrom.current;
    if (from === null || from === overIndex) return;
    setOrder((prev) => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(overIndex, 0, moved);
      return next;
    });
    dragFrom.current = overIndex;
  }

  return (
    <section
      id="photos"
      className="relative border-t border-line/60 bg-paper-sunk/40 py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-faint">
            <span className="h-px w-9 bg-moss" />
            moments
          </p>
        </Reveal>

        <div className="mt-5 flex items-end justify-between gap-6">
          <Reveal as="h2" delay={60}>
            <span className="block max-w-xl font-display text-3xl leading-[0.95] tracking-[-0.03em] text-ink">
              places i&rsquo;ve been lately.
            </span>
          </Reveal>
          <Sprig className="hidden h-14 w-10 shrink-0 -rotate-6 text-sage sm:block" />
        </div>

        <Reveal delay={120}>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
            shot on the road between co-ops, from taiwanese hot-spring towns to
            indonesian volcanoes at sunrise.
          </p>
          <p className="mt-3 font-mono text-xs text-ink-faint">
            ↔ drag the polaroids to rearrange them
          </p>
        </Reveal>

        {/* polaroid wall — drag to reorder */}
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {order.map((photo, i) => (
            <div key={photo.src} className="flex justify-center">
              <figure
                draggable
                onDragStart={() => {
                  dragFrom.current = i;
                  setDraggingSrc(photo.src);
                }}
                onDragOver={(e) => handleDragOver(e, i)}
                onDragEnd={() => {
                  dragFrom.current = null;
                  setDraggingSrc(null);
                }}
                className={`group relative w-full max-w-[300px] cursor-grab bg-paper-raised p-3 pb-0 shadow-[var(--shadow-lift)] transition-all duration-300 active:cursor-grabbing ${
                  TILTS[i % TILTS.length]
                } hover:rotate-0 hover:-translate-y-1.5 ${
                  draggingSrc === photo.src
                    ? "scale-105 opacity-60 rotate-0 shadow-[var(--shadow-lift)]"
                    : ""
                }`}
              >
                {/* washi tape */}
                <span
                  aria-hidden="true"
                  className={`absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-2 rounded-[2px] ${
                    TAPES[i % TAPES.length]
                  } shadow-[0_1px_2px_rgba(44,40,31,0.12)]`}
                />
                <div className="aspect-square overflow-hidden bg-ink/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="py-5 text-center font-mono text-xs lowercase tracking-wide text-ink-soft">
                  {photo.caption}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
