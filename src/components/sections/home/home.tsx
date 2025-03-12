"use client";

import About from "../about/about";
import Education from "../education/education";
import Experience from "../experience/experience";
import Hero from "../hero/hero";
import Projects from "../projects/projects";

export default function Home() {
  return (
    <div className="container bg-background h-full p-0 pt-6 lg:p-11 group">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
    </div>
  );
}
