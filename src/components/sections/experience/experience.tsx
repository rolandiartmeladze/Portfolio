"use client";

import { useEffect, useRef, useCallback } from "react";
import { WorkExperience } from "@/config/experience";
import ExperienceCards from "./experience-cards";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const setupScrollAnimation = useCallback(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    // Wrapper-ის სიგრძის დინამიური დაყენება
    wrapper.style.width = `${container.clientWidth * WorkExperience.length}px`;

    const scrollTween = gsap.to(wrapper, {
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
    });

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
            containerAnimation: scrollTween,
            start: start,
            toggleActions: "restart none none reverse",
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

      animateElement(circle, "left 15%", section, {
        x: [400, 10],
        y: [0, 0],
        opacity: 1,
        scale: [0, 1],
      });

      animateElement(header, "left 15%", section, {
        x: [0, 0],
        y: [150, 0],
        opacity: 1,
        scale: [0, 1],
      });
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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

    const cleanup = setupScrollAnimation();

    window.addEventListener("resize", setupScrollAnimation);

    return () => {
      cleanup?.();
      window.removeEventListener("resize", setupScrollAnimation);
    };
  }, [setupScrollAnimation]);

  return (
    <div
      ref={containerRef}
      className="w-full h-svh relative p-6 overflow-hidden lg:w-[96%]"
    >
      <div ref={wrapperRef} className="flex h-full gap-3 relative">
        <ExperienceCards />
      </div>
    </div>
  );
}
