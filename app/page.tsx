import SiteNav from "@/components/site-nav";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Roadmap from "@/components/roadmap";
import Photos from "@/components/photos";
import Journey from "@/components/journey";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        {/* Drop a real portrait in /public/hero.jpg, then pass imageSrc="/hero.jpg" */}
        <Hero />
        {/* The winding intern/co-op route. */}
        <Roadmap />
        {/* Projects — the SWE portfolio. */}
        <Projects />
        {/* Moments — the polaroid wall. */}
        <Photos />
        {/* Then the person behind the commits. */}
        <Journey />
      </main>
    </>
  );
}
