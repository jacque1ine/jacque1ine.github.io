import Reveal from "./reveal";
import { Seal, Sparkle, Sprig } from "./decor";

/**
 * Hero — "hi, i'm jacqueline."
 *
 * Editorial two-column spread: diaristic intro on the left, an organic
 * photo "blob" on the right framed by rationed marginalia (seal, sprig,
 * sparkle). Drop a real portrait at /public/hero.jpg and pass it below;
 * until then a warm misty-vista placeholder holds the shape.
 */
export default function Hero({ imageSrc }: { imageSrc?: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 pb-24 pt-16 md:pt-20 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-10 lg:pb-28">
        {/* ---- Left: the diaristic intro ---- */}
        <div className="relative">
          <Reveal delay={0} trigger="load">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-faint">
              <span className="h-px w-9 bg-moss" />
              code · cameras · collecting places
            </p>
          </Reveal>

          <Reveal delay={80} as="h1" trigger="load" className="mt-7">
            <span className="block font-display text-4xl leading-[0.9] tracking-[-0.035em]">
              hi, i&rsquo;m
            </span>
            <span className="block font-display text-4xl leading-[0.9] tracking-[-0.035em] text-moss-deep">
              jacqueline.
              <Sparkle className="ml-3 inline-block h-4 w-4 -translate-y-7 text-ochre" />
            </span>
          </Reveal>

          <Reveal delay={180} trigger="load">
            <p className="mt-8 max-w-[27rem] font-mono text-base leading-[1.75] text-ink-soft">
              i build software, travel for new places to collect on Beli, and
              always have a camera with me. this is my field journal: part
              portfolio, part travel log, part open notebook.
            </p>
          </Reveal>

          <Reveal delay={240} trigger="load">
            <p className="mt-7 flex items-start gap-2.5 font-mono text-sm leading-relaxed text-ink-soft">
              <span
                aria-hidden="true"
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-moss"
              />
              <span>
                systems design engineering @ university of waterloo, graduating
                may 2027, open to new-grad swe roles.
              </span>
            </p>
          </Reveal>

          <Reveal delay={320} trigger="load">
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
              <a
                href="#builds"
                className="group inline-flex items-center gap-2.5 rounded-full bg-moss-deep px-7 py-3.5 text-sm font-medium tracking-wide text-paper-raised no-underline shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
              >
                see what i&rsquo;ve built
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>

              <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
                {[
                  { label: "github", href: "https://github.com/jacque1ine" },
                  { label: "linkedin", href: "#" },
                  { label: "email", href: "mailto:fungjsl@gmail.com" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="no-underline underline-offset-4 transition-colors hover:text-moss-deep hover:underline"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---- Right: organic photo blob + marginalia ---- */}
        <Reveal
          delay={220}
          trigger="load"
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5]">
            {/* SVG clip-path defining the organic, lobed blob silhouette.
                objectBoundingBox → scales to whatever box we clip. */}
            <svg
              width="0"
              height="0"
              className="absolute"
              aria-hidden="true"
            >
              <defs>
                <clipPath id="heroBlob" clipPathUnits="objectBoundingBox">
                  <path d="M0.52,0.02 C0.72,0.00 0.90,0.09 0.95,0.28 C0.99,0.44 0.93,0.57 0.95,0.71 C0.97,0.88 0.76,1.00 0.54,0.98 C0.37,0.965 0.20,1.00 0.10,0.82 C0.02,0.68 0.075,0.53 0.05,0.38 C0.025,0.19 0.32,0.04 0.52,0.02 Z" />
                </clipPath>
              </defs>
            </svg>

            {/* soft shadow echo behind the blob, offset for an organic feel */}
            <div
              className="absolute inset-4 -rotate-6 bg-sage-soft/70 blur-2xl"
              style={{ clipPath: "url(#heroBlob)" }}
              aria-hidden="true"
            />

            {/* the blob itself — clipped to the organic shape; drop-shadow
                (not box-shadow) so the shadow follows the silhouette. */}
            <div
              className="animate-breathe relative h-full w-full -rotate-3 overflow-hidden"
              style={{
                clipPath: "url(#heroBlob)",
                filter:
                  "drop-shadow(0 24px 40px rgba(44,40,31,0.28)) drop-shadow(0 2px 6px rgba(44,40,31,0.10))",
              }}
            >
              {imageSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={imageSrc}
                  alt="jacqueline, on a hillside above the water"
                  className="h-full w-full object-cover"
                />
              ) : (
                <PlaceholderVista />
              )}
            </div>

            {/* wax seal, tucked at the lower-left where the blob curves in */}
            <Seal className="absolute bottom-2 -left-8 h-24 w-24 text-moss-deep" />

            {/* sprig, tucked onto the upper-right edge of the blob */}
            <Sprig className="absolute right-2 top-6 h-24 w-16 rotate-[18deg] text-moss/60" />
          </div>
        </Reveal>
      </div>

      {/* organic blob flourish bleeding off the bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 bg-sage/25 blur-3xl"
        style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
      />
    </section>
  );
}

/** Warm, stylized misty-vista placeholder that fills the blob shape. */
function PlaceholderVista() {
  return (
    <div className="relative h-full w-full bg-gradient-to-b from-[#cbd9c6] via-[#e6e2d2] to-[#dfe4d3]">
      {/* distant ridgelines */}
      <div
        className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#6d8560] to-transparent opacity-80"
        style={{
          clipPath:
            "polygon(0 55%, 18% 40%, 34% 52%, 52% 34%, 70% 50%, 86% 38%, 100% 52%, 100% 100%, 0 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#4f6138] to-transparent"
        style={{
          clipPath:
            "polygon(0 60%, 22% 44%, 46% 58%, 66% 42%, 84% 56%, 100% 46%, 100% 100%, 0 100%)",
        }}
      />
      {/* sun haze */}
      <div className="absolute right-8 top-8 h-20 w-20 rounded-full bg-[#f6efd8] opacity-70 blur-xl" />
      {/* gentle "drop your photo here" hint — kept quiet, lower-left */}
      <span className="absolute bottom-4 left-4 whitespace-nowrap rounded-full bg-paper/50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-ink-faint/80 backdrop-blur-sm">
        add /public/hero.jpg
      </span>
    </div>
  );
}
