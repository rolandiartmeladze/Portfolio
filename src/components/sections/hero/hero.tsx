"use client";
import { useEffect } from "react";
import TypingText from "@/components/ui/typing-text";
import SliceText from "@/components/ui/slice-text";
import CvButton from "@/components/sections/hero/cv-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocIcons from "./soc-icons";
import ScrollDownButton from "./scroll-down-button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".scrollIconContainer",
        {
          x: 0,
          y: 0,
          opacity: 1,
        },
        {
          x: -400,
          y: 250,
          opacity: 0,
          duration: 3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero",
            start: "top 10%",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".scrollIcon",
        {
          x: 0,
          y: 0,
          opacity: 1,
        },
        {
          x: 750, 
          y: 150,
          opacity: 0,
          duration: 3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero",
            start: "top 10%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero flex w-full h-screen flex-col gap-3 text-center justify-start items-center">
      <span className="text-5xl text-slate-600 animate-slideDown">
        Hi <samp className="animate-pulse">👋</samp> I’M
      </span>
      <SliceText
        text="Roland&nbsp;Artmeladze"
        className="text-3xl font-bold text-primary lg:text-6xl"
      />
      <TypingText
        className="text-2xl font-bold lg:text-5xl animate-professional"
        text={["Full-Stack Developer.", "MERN-Stack Developer.", "Coder."]}
      />
      <CvButton />
      <SocIcons />

    <ScrollDownButton />
      
    </section>
  );
}
