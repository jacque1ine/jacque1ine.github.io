import Reveal from "./reveal";
import { Sprig } from "./decor";
import RoadmapRoute from "./roadmap-route";
import { ROADMAP } from "@/data/roadmap";

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative border-t border-line/60 py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-faint">
            <span className="h-px w-9 bg-moss" />
            the road so far
          </p>
        </Reveal>

        <div className="mt-5 flex items-end justify-between gap-6">
          <Reveal as="h2" delay={60}>
            <span className="block max-w-xl font-display text-3xl leading-[0.95] tracking-[-0.03em] text-ink">
              where i&rsquo;ve been building.
            </span>
          </Reveal>
          <Sprig className="hidden h-14 w-10 shrink-0 rotate-6 text-sage sm:block" />
        </div>

        <Reveal delay={120}>
          <p className="mt-4 font-mono text-xs text-ink-faint">
            ↳ hover the route to trace the journey
          </p>
        </Reveal>

        {/* winding, mouse-reactive route */}
        <Reveal delay={160}>
          <div className="mt-10 overflow-x-auto pb-4">
            <RoadmapRoute stops={ROADMAP} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
