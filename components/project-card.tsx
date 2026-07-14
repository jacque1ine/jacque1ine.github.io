import Reveal from "./reveal";
import { Sparkle } from "./decor";
import type { Project, StampHue } from "@/data/projects";

// Static class maps so Tailwind keeps them — accent hues used only here.
const ACCENT: Record<
  StampHue,
  { text: string; border: string; tint: string; tape: string }
> = {
  dust: {
    text: "text-dust-ink",
    border: "border-dust/50",
    tint: "bg-dust/10",
    tape: "bg-dust/25",
  },
  ochre: {
    text: "text-ochre-ink",
    border: "border-ochre/50",
    tint: "bg-ochre/10",
    tape: "bg-ochre/25",
  },
  clay: {
    text: "text-clay-ink",
    border: "border-clay/50",
    tint: "bg-clay/10",
    tape: "bg-clay/25",
  },
  terracotta: {
    text: "text-terracotta-ink",
    border: "border-terracotta/50",
    tint: "bg-terracotta/10",
    tape: "bg-terracotta/25",
  },
  moss: {
    text: "text-moss-deep",
    border: "border-moss/50",
    tint: "bg-moss/10",
    tape: "bg-moss/25",
  },
};

export default function ProjectCard({
  project,
  index,
  className = "",
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  const a = ACCENT[project.accent];
  // Alternate the resting tilt so the grid feels hand-pinned, not stamped out.
  const tilt = index % 2 === 0 ? "-rotate-1" : "rotate-1";

  return (
    <Reveal as="article" delay={index * 80} className={`h-full ${className}`}>
      <div
        className={`group relative flex h-full flex-col rounded-2xl border border-line bg-paper-raised p-7 shadow-[var(--shadow-soft)] transition-all duration-300 ${tilt} hover:rotate-0 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]`}
      >
        {/* washi tape, pinning the card to the page */}
        <span
          aria-hidden="true"
          className={`absolute -top-2.5 left-9 h-5 w-16 -rotate-6 rounded-[2px] ${a.tape} opacity-80 shadow-[0_1px_2px_rgba(44,40,31,0.12)]`}
        />

        {/* index + award sticker */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <span className="font-mono text-xs tracking-[0.2em] text-ink-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.award && (
            <span
              className={`rotate-2 rounded-full border ${a.border} ${a.tint} ${a.text} px-3 py-1 text-center font-mono text-[10px] uppercase leading-tight tracking-wide`}
            >
              {project.award}
            </span>
          )}
        </div>

        {/* title */}
        <h3 className="flex items-center font-display text-xl text-ink">
          {project.name}
          {project.featured && (
            <Sparkle className="ml-2 inline-block h-3.5 w-3.5 text-ochre" />
          )}
        </h3>

        {/* context */}
        <p className={`mt-1.5 font-mono text-xs ${a.text}`}>{project.context}</p>

        {/* tagline */}
        <p className="mt-4 flex-1 text-base leading-relaxed text-ink-soft">
          {project.tagline}
        </p>

        {/* tech chips */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className={`rounded-full border ${a.border} ${a.tint} px-2.5 py-0.5 font-mono text-[11px] tracking-wide ${a.text}`}
            >
              {t}
            </li>
          ))}
        </ul>

        {/* links */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line/70 pt-4 font-mono text-xs uppercase tracking-[0.12em]">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1 text-ink-soft no-underline transition-colors hover:text-moss-deep"
            >
              {link.label}
              <span className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
