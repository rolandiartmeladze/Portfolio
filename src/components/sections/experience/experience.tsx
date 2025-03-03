"use client";

import { useEffect, useRef } from "react";
import HorizontalScroll from "@/components/scroll-effect/horizontal-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceCards from "./experience-cards";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const experienceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!experienceRef.current) return;
    gsap.fromTo(
      experienceRef.current,
      { opacity: 0 },
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
    <section ref={experienceRef} id="experience" className="relative">
      <HorizontalScroll className="h-screen p-8">
        <ExperienceCards />
      </HorizontalScroll>
    </section>
  );
}
