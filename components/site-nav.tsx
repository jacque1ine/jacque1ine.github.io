import { Sprig } from "./decor";

const LINKS = [
  { label: "home", href: "#", active: true },
  { label: "builds", href: "#builds" },
  { label: "photos", href: "#photos" },
  { label: "field notes", href: "#field-notes" },
];

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-paper/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#"
          className="group flex items-center gap-2 font-display text-lg text-ink no-underline"
        >
          <span className="tracking-tight">jacqueline fung</span>
          <Sprig className="h-5 w-4 text-moss transition-transform duration-500 group-hover:-rotate-6" />
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`group relative py-1 text-sm no-underline transition-colors ${
                  link.active
                    ? "text-moss-deep"
                    : "text-ink-soft hover:text-moss-deep"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-moss transition-all duration-300 ${
                    link.active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: compact menu affordance (non-functional stub for this pass) */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="open menu"
        >
          <span className="h-px w-6 bg-ink" />
          <span className="h-px w-6 bg-ink" />
          <span className="h-px w-4 bg-ink" />
        </button>
      </nav>
    </header>
  );
}
