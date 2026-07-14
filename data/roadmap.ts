import type { StampHue } from "./projects";

export type Stop = {
  city: string;
  org: string; // company
  term: string; // co-op season
  role: string; // team / focus
  accent: StampHue;
};

// Real co-op history (SWE internships), oldest → newest.
// Sourced from LinkedIn in Jacqueline's signed-in session.
export const ROADMAP: Stop[] = [
  {
    city: "Toronto",
    org: "RBC",
    term: "Summer 2022",
    role: "Innovation Developer Intern · InnerSource",
    accent: "dust",
  },
  {
    city: "Toronto",
    org: "RBC",
    term: "Winter 2023",
    role: "Software Developer Intern · HomeX",
    accent: "clay",
  },
  {
    city: "Toronto",
    org: "PointClickCare",
    term: "Fall 2023",
    role: "Software Engineering Intern · Point of Care",
    accent: "ochre",
  },
  {
    city: "San Francisco",
    org: "Carta",
    term: "Summer 2024",
    role: "Software Engineering Intern · Total Compensation",
    accent: "terracotta",
  },
  {
    city: "Toronto",
    org: "Intuit",
    term: "Winter 2025",
    role: "Software Engineering Intern · Numaflow, event-driven apps",
    accent: "moss",
  },
  {
    city: "Redmond",
    org: "Microsoft",
    term: "Fall 2025",
    role: "Software Engineering Intern · Azure Managed Redis",
    accent: "dust",
  },
  {
    city: "New York",
    org: "Ramp",
    term: "Summer 2026",
    role: "Software Engineering Intern · Forward Deployed Eng",
    accent: "moss",
  },
];
