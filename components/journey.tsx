import Reveal from "./reveal";
import { Sprig } from "./decor";

const FIELD_NOTES = [
  {
    icon: "📍",
    title: "studied abroad at NTU Singapore",
    body: "spent a term at Nanyang Technological University taking Data Science and Artificial Intelligence courses. then spent every free weekend exploring Southeast Asia, from buzzing cities to volcano summits to quiet beaches.",
  },
  {
    icon: "🛠️",
    title: "hack the north organizer",
    body: "hackathons are where i fell in love with building. now i help run Canada's largest one, so the next person can find that spark too.",
  },
];

const NIGHTSTAND = [
  {
    title: "When Breath Becomes Air",
    author: "Paul Kalanithi",
    spine: "bg-terracotta",
    note: "on meaning, mortality, and doing work that matters.",
  },
  {
    title: "Educated",
    author: "Tara Westover",
    spine: "bg-ochre",
    note: "on curiosity as a way out, and forward.",
  },
];

export default function Journey() {
  return (
    <section id="field-notes" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-faint">
            <span className="h-px w-9 bg-moss" />
            off the clock
          </p>
        </Reveal>

        <Reveal as="h2" delay={60}>
          <span className="mt-5 block max-w-xl font-display text-3xl leading-[0.95] tracking-[-0.03em] text-ink">
            a few true things about me.
          </span>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* left: the human field notes */}
          <div className="space-y-8">
            <Reveal delay={100}>
              <p className="max-w-md text-base leading-relaxed text-ink-soft">
                i&rsquo;m driven by curiosity and a desire to build things that
                make life a little simpler, more meaningful, and more beautiful.
                the rest is coffee, cameras, and long walks in new cities.
              </p>
            </Reveal>

            <ul className="space-y-6">
              {FIELD_NOTES.map((note, i) => (
                <Reveal as="li" key={note.title} delay={160 + i * 90}>
                  <div className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 text-xl leading-none"
                    >
                      {note.icon}
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-ink">
                        {note.title}
                      </h3>
                      <p className="mt-1.5 max-w-sm text-base leading-relaxed text-ink-soft">
                        {note.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* right: on my nightstand */}
          <Reveal delay={200}>
            <div className="relative rounded-2xl border border-line bg-paper-raised p-7 shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  on my nightstand
                </p>
                <Sprig className="h-8 w-6 -rotate-6 text-sage" />
              </div>

              <ul className="mt-5 space-y-4">
                {NIGHTSTAND.map((book) => (
                  <li key={book.title} className="flex gap-4">
                    {/* book spine */}
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 h-14 w-2 shrink-0 rounded-sm ${book.spine}`}
                    />
                    <div>
                      <p className="font-display text-lg leading-tight text-ink">
                        {book.title}
                      </p>
                      <p className="font-mono text-xs text-ink-faint">
                        {book.author}
                      </p>
                      <p className="mt-1 text-sm leading-snug text-ink-soft">
                        {book.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
