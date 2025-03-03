"use client";

import Experience from "../experience/experience";
import Hero from "../hero/hero";

export default function Home() {
  return (
    <div className="container bg-background h-full p-0 pt-6 lg:p-11 group">
        <Hero />
        <Experience />
    </div>
  );
}
