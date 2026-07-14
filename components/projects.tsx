import Reveal from "./reveal";
import { Sprig } from "./decor";
import ProjectCard from "./project-card";
import { PROJECTS } from "@/data/projects";

/**
 * The main event: a SWE portfolio of real, shipped work.
 * Flagship (open-source infra) leads full-width, the rest fill a 2×2.
 */
export default function Projects() {
  return (
    <section
      id="builds"
      className="relative border-t border-line/60 bg-paper-sunk/40 py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        {/* section header */}
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-faint">
            <span className="h-px w-9 bg-moss" />
            selected work
          </p>
        </Reveal>

        <div className="mt-5 flex items-end justify-between gap-6">
          <Reveal as="h2" delay={60}>
            <span className="block max-w-xl font-display text-3xl leading-[0.95] tracking-[-0.03em] text-ink">
              things i&rsquo;ve built &amp; am proud of.
            </span>
          </Reveal>
          <Sprig className="hidden h-14 w-10 shrink-0 -rotate-6 text-sage sm:block" />
        </div>

        <Reveal delay={120}>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
            from Kubernetes-native streaming systems to award-winning hackathon
            hacks. here&rsquo;s what happens when curiosity meets a keyboard.
          </p>
        </Reveal>

        {/* grid: flagship spans full width, the rest fall into a 2×2 */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              className={i === 0 ? "sm:col-span-2" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
