"use client";

import { PROJECTS } from "@/data/projects";
import { ROADMAP } from "@/data/roadmap";

const LINKS = [
  { label: "github", href: "https://github.com/jacque1ine" },
  { label: "linkedin", href: "#" },
  { label: "email", href: "mailto:fungjsl@gmail.com" },
];

const BOOKS = [
  { title: "When Breath Becomes Air", author: "Paul Kalanithi" },
  { title: "Educated", author: "Tara Westover" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-ink-faint">
      {children}
    </h2>
  );
}

export default function MinimalView({
  onToggleFull,
}: {
  onToggleFull: () => void;
}) {
  return (
    <div className="mx-auto min-h-screen max-w-2xl px-6 py-14 lg:py-20">
      {/* header + toggle */}
      <div className="flex items-start justify-between gap-6">
        <h1 className="font-display text-2xl tracking-tight text-ink">
          jacqueline fung
        </h1>
        <button
          onClick={onToggleFull}
          className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint underline-offset-4 transition-colors hover:text-moss-deep hover:underline"
        >
          full view ↗
        </button>
      </div>

      <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
        systems design engineering @ university of waterloo, graduating may
        2027. open to new-grad software engineering roles.
      </p>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.12em]">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-moss underline-offset-4 hover:underline"
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* experience */}
      <section className="mt-14">
        <SectionLabel>experience</SectionLabel>
        <ul className="space-y-4">
          {[...ROADMAP].reverse().map((s, i) => (
            <li
              key={`${s.org}-${i}`}
              className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <span className="text-ink">
                <span className="font-medium">{s.org}</span>
                <span className="text-ink-soft"> · {s.role}</span>
              </span>
              <span className="shrink-0 font-mono text-xs text-ink-faint">
                {s.city} · {s.term}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* selected work */}
      <section className="mt-14">
        <SectionLabel>selected work</SectionLabel>
        <ul className="space-y-5">
          {PROJECTS.map((p) => (
            <li key={p.name}>
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-medium text-ink">{p.name}</span>
                <span className="flex shrink-0 gap-3 font-mono text-xs">
                  {p.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-moss underline-offset-4 hover:underline"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {p.tagline}
              </p>
              <p className="mt-1 font-mono text-xs text-ink-faint">
                {p.tech.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* reading */}
      <section className="mt-14">
        <SectionLabel>reading</SectionLabel>
        <ul className="space-y-1.5">
          {BOOKS.map((b) => (
            <li key={b.title} className="text-sm text-ink-soft">
              <span className="text-ink">{b.title}</span>
              <span className="text-ink-faint"> · {b.author}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-16 font-mono text-xs text-ink-faint">
        © {new Date().getFullYear()} jacqueline fung
      </p>
    </div>
  );
}
