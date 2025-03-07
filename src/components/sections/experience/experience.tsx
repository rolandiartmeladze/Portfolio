"use client";

import { useEffect, useRef, useCallback } from "react";
import { WorkExperience } from "@/config/experience";
import ExperienceCards from "./experience-cards";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MarkedCircle from "@/components/ui/marked-circle";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const setupScrollAnimation = useCallback(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    const isMobile = window.innerWidth < 1024;

    if (!isMobile) {
      wrapper.style.width = `${container.clientWidth * WorkExperience.length}px`;
    }

    const scrollTween = !isMobile
      ? gsap.to(wrapper, {
          x: () => -container.clientWidth * (WorkExperience.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: `+=${container.clientWidth * (WorkExperience.length - 1)}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })
      : undefined;

    const animateElement = (
      element: Element | null,
      start: string,
      sectionClass: HTMLElement,
      {
        x,
        y,
        opacity,
        scale,
        ease,
      }: {
        x: [number, number];
        y: [number, number];
        opacity: number;
        scale: [number, number];
        ease?: string;
      }
    ) => {
      if (!element) return;

      gsap.fromTo(
        element,
        { x: x[0], y: y[0], opacity: 0, scale: scale[0] },
        {
          x: x[1],
          y: y[1],
          opacity,
          scale: scale[1],
          duration: 3,
          ease: ease || "power4.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionClass,
            start: start,
            toggleActions: "play none none reverse",
            containerAnimation: isMobile ? undefined : scrollTween,
            once: true,
          },
        }
      );
    };

    const sections = gsap.utils.toArray<HTMLElement>(
      WorkExperience.map((exp) => `.${exp.indicator}`)
    );
    sections.forEach((section) => {
      const circle = section.querySelector(
        ".doercircle, .freelancecircle, .stemucircle"
      );
      const header = section.querySelector(
        ".doerheader, .freelanceheader, .stemuheader"
      );
      const description = section.querySelector(
        ".doerdescription, .freelancedescription, .stemudescription"
      );
      const skills = section.querySelector(
        ".doerskills, .freelanceskills, .stemuskills"
      );

      animateElement(circle, "top 80%", section, {
        x: [400, 10],
        y: [0, 0],
        opacity: 1,
        scale: [0, 1],
      });

      animateElement(header, "top 80%", section, {
        x: [0, 0],
        y: [150, 0],
        opacity: 1,
        scale: [0, 1],
      });

      animateElement(description, "top 80%", section, {
        x: [-300, 0],
        y: [0, 0],
        opacity: 1,
        scale: [0, 1],
      });

      animateElement(skills, "top 80%", section, {
        x: [500, 0],
        y: [0, 0],
        opacity: 1,
        scale: [0, 1],
      });
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
  
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  
    gsap.fromTo(
      ".exp-header",
      { opacity: 0, x: 350, scale: 0 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "top 10%",
          scrub: true,
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  
    gsap.fromTo(
      ".exp-circle",
      { opacity: 0, x: 350, rotate: 360 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        rotate: 0,
        duration: 2,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "top 10%",
          scrub: true,
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  
    setupScrollAnimation();
  
    window.addEventListener("resize", setupScrollAnimation);
  
    return () => {
      window.removeEventListener("resize", setupScrollAnimation);
    };
  }, [setupScrollAnimation]);
  
  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-start relative p-1 gap-3 lg:p-6 overflow-hidden lg:h-svh lg:w-[96%]"
    >
      <h1 className="exp-header flex gap-2 justify-start items-center text-4xl lg:text-6xl text-primary px-2 border-l-8 border-l-primary rounded-tl-md">
        {"Work Experience"} 
        <MarkedCircle className="exp-circle size-12 text-xs  relative animate-bounce" className2="size-8">
          +1.5
        </MarkedCircle>
      </h1>
      <div
        ref={wrapperRef}
        className="flex flex-col h-[85%] gap-8 relative lg:flex-row"
      >
        <ExperienceCards />
      </div>
    </div>
  );
}
