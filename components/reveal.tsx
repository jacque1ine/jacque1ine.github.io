"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** ms delay so siblings can stagger in */
  delay?: number;
  /** render as something other than a <div> */
  as?: ElementType;
  className?: string;
  /**
   * "scroll" (default): animate when scrolled into view.
   * "load": animate immediately on mount — use for above-the-fold content
   * so it never waits on (or gets stuck behind) the IntersectionObserver.
   */
  trigger?: "scroll" | "load";
};

/**
 * Adds `.is-visible` when the element scrolls into view, triggering the
 * CSS `rise-in` animation. Respects prefers-reduced-motion via globals.css
 * (the .reveal rule collapses to opacity:1 there).
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  trigger = "scroll",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (trigger === "load") {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [trigger]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
