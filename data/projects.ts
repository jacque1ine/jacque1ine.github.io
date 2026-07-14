export type StampHue = "dust" | "ochre" | "clay" | "terracotta" | "moss";

export type ProjectLink = {
  label: string; // e.g. "code", "live", "devpost"
  href: string;
};

export type Project = {
  name: string;
  /** short, warm, accurate one-liner */
  tagline: string;
  /** where/why it was built — the human context */
  context: string;
  tech: string[];
  /** award / recognition sticker text, if any */
  award?: string;
  links: ProjectLink[];
  accent: StampHue;
  /** the strongest engineering work leads the page */
  featured?: boolean;
};

// Sourced from Jacqueline's real, pinned GitHub work (languages verified).
export const PROJECTS: Project[] = [
  {
    name: "Numaflow",
    tagline:
      "helped teach data pipelines to scale themselves: a Kubernetes-native, serverless platform for event-driven and streaming apps.",
    context: "open-source contributor · CNCF, built by Intuit's Argo team",
    tech: ["Rust", "Go", "Kubernetes"],
    links: [
      { label: "code", href: "https://github.com/numaproj/numaflow" },
      { label: "live", href: "https://numaflow.numaproj.io" },
    ],
    accent: "dust",
    featured: true,
  },
  {
    name: "Apache Pulsar ↔ Numaflow",
    tagline:
      "a user-defined source & sink connector that plumbs real-time events between Apache Pulsar and Numaflow pipelines.",
    context: "open-source contributor · numaproj-contrib",
    tech: ["Java", "Apache Pulsar", "Docker"],
    links: [
      {
        label: "code",
        href: "https://github.com/numaproj-contrib/apache-pulsar-java",
      },
    ],
    accent: "ochre",
    featured: true,
  },
  {
    name: "Children's Aid Society",
    tagline:
      "🧸 a supervised-access case-management platform so social workers can spend less time on paperwork and more with families.",
    context: "built pro-bono with UW Blueprint · nonprofit software",
    tech: ["Python", "TypeScript", "React"],
    links: [
      {
        label: "code",
        href: "https://github.com/uwblueprint/childrens-aid-society",
      },
    ],
    accent: "clay",
  },
  {
    name: "write:here",
    tagline:
      "point your camera at handwriting and it becomes an email. AI-powered OCR that turns a scrap of paper into a sent message.",
    context: "Hackville 2023",
    tech: ["TypeScript", "React", "Computer Vision"],
    award: "🏆 Most Creative Use of GitHub",
    links: [
      { label: "code", href: "https://github.com/jacque1ine/Hackville-write-here" },
    ],
    accent: "terracotta",
  },
  {
    name: "Gardenize",
    tagline:
      "turns an empty lot into a thriving community garden: personalized native-plant picks, care reminders, and a social hub for neighbors.",
    context: "ElleHacks 2023",
    tech: ["React", "Express", "Cohere AI"],
    award: "🥈 2nd Overall · 🥇 Best Use of Cohere API",
    links: [
      { label: "devpost", href: "https://devpost.com/software/gardenizer" },
      { label: "code", href: "https://github.com/jacque1ine/Ellehacks-Gardenize" },
    ],
    accent: "moss",
  },
  {
    name: "Zara, Redesigned",
    tagline:
      "a full Zara storefront rebuilt from scratch: no frameworks, no libraries, just hand-written HTML, CSS & JS and a lot of attention to every pixel.",
    context: "personal build · vanilla front-end",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [
      { label: "code", href: "https://github.com/jacque1ine/ZaraRedesigned" },
    ],
    accent: "dust",
  },
  {
    name: "Back to the Future: Zork",
    tagline:
      "🚗⚡ a text adventure through the Back to the Future universe: a love letter to 1980s interactive fiction, explored one typed command at a time.",
    context: "personal build · interactive fiction",
    tech: ["Java"],
    links: [
      {
        label: "code",
        href: "https://github.com/jacque1ine/BackToTheFutureZork",
      },
    ],
    accent: "clay",
  },
];
