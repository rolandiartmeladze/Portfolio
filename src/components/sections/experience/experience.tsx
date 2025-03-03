"use client";

import { useEffect, useRef } from "react";
import HorizontalScroll from "@/components/scroll-effect/horizontal-scroll";
import ExperienceCards from "./experience-cards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    gsap.fromTo(
      ".doercircle",
      { y: 350, scale: 0 },
      {
        y: 0,
        scale: 1,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".doer",
          start: "top 45%",
          end: "bottom 80%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".doercircle",
      { x: 0,  opacity: 1, scale: 1 },
      {
        x: 750,
        opacity: 0,
        scale: 0.3,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".doer",
          start: "bottom 80%",
          end: "bottom 10%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={experienceRef} id="experience" className="relative">
      <HorizontalScroll className="h-screen p-0 py-8 lg:p-8 lg:pt-4">
        <ExperienceCards />
      </HorizontalScroll>
    </section>
  );
}
