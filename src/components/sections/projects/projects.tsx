"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Icons } from "@/components/icons";
import ProjectCard from "./project-card";
import { ProjectsData } from "@/config/projects";
import { Project } from "@/types/project";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

    const containerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    onSelect();

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);


  useEffect(() => {
    if (!containerRef.current) return;
  
    const container = containerRef.current;
  
    gsap.fromTo(
      container,
      { opacity: 0, scale: 0.9, y: 50, rotate: -5 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotate: 0,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 40%",
          end: "top 20%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  

  return (
    <section ref={containerRef} id="projects" className="container h-[98vh] lg:w-[96%] flex flex-col">
      <SectionHeader label="Projects" className="mb-4">
        <Icons.work className="size-5" />
      </SectionHeader>

      <Carousel setApi={setCarouselApi}>
        <CarouselContent className="gap-4">
          {ProjectsData.map((project: Project) => (
            <CarouselItem key={project.title} className="max-w-[375px]">
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />

        <div className="mt-4 flex justify-center gap-2">
          {ProjectsData.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                activeIndex === index
                  ? "bg-primary w-4"
                  : "bg-background border border-primary"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
            ></div>
          ))}
        </div>
      </Carousel>
    </section>
  );
}
