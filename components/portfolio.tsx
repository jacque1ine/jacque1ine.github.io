"use client";

import { useEffect, useState } from "react";
import SiteNav from "./site-nav";
import Hero from "./hero";
import Projects from "./projects";
import Roadmap from "./roadmap";
import Photos from "./photos";
import Journey from "./journey";
import MinimalView from "./minimal-view";

type Mode = "full" | "minimal";

export default function Portfolio() {
  // Default to the full view so the static HTML (and no-JS visitors) get the
  // real page; restore a saved "minimal" preference after hydration.
  const [mode, setMode] = useState<Mode>("full");

  useEffect(() => {
    const saved = localStorage.getItem("view-mode");
    if (saved === "minimal") setMode("minimal");
  }, []);

  function toggle() {
    setMode((m) => {
      const next = m === "full" ? "minimal" : "full";
      localStorage.setItem("view-mode", next);
      return next;
    });
  }

  if (mode === "minimal") {
    return <MinimalView onToggleFull={toggle} />;
  }

  return (
    <>
      <SiteNav onToggleMinimal={toggle} />
      <main className="flex-1">
        <Hero />
        <Roadmap />
        <Projects />
        <Photos />
        <Journey />
      </main>
    </>
  );
}
