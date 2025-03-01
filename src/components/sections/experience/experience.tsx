"use client";

import { useEffect, useRef } from "react";
import HorizontalScroll from "@/components/scroll-effect/horizontal-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const experienceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!experienceRef.current) return;

    

    gsap.fromTo(
      experienceRef.current,
      { opacity: 0},
      {
        opacity: 1,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={experienceRef} id="experience" className="experience">
      <h1 className="text-3xl font-bold text-center mb-8">Experience</h1>
      <HorizontalScroll  className="h-screen p-8">
        <div className="container bg-red-500">Section 1</div>
        <div className="container bg-green-400">Section 2</div>
        <div className="container bg-cyan-500">Section 3</div>
        <div className="container bg-slate-500">Section 4</div>
      </HorizontalScroll>
    </section>
  );
}
