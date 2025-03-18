"use client";

import About from "../sections/about/about";
import Education from "../sections/education/education";
import Experience from "../sections/experience/experience";
import Hero from "../sections/hero/hero";
import Projects from "../sections/projects/projects";
import Skill from "../sections/skills/skills";
import Contact from "../sections/contact/contact";

export default function Home() {
  return (
    <div className="container bg-background h-full p-0 pt-6 lg:p-11 group">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skill />
      <Contact />
    </div>
  );
}
