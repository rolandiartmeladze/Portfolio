"use client";

import { useState, useEffect, useRef } from "react";
import ProjectImages from "./project-images";
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

import CarouselPoints from "@/components/ui/carousel-points";
import { useCarouselSync } from "@/config/use-carousel-sync";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useCarouselSync(carouselApi, setCurrentIndex);

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
      },
    );
  }, []);



  useEffect(() => {
    const fetchImages = async () => {
      const images = await ProjectImages();
      console.log(images);
    };

    fetchImages();
  }, []);
  return (
    <section
      ref={containerRef}
      id="projects"
      className="container h-[98vh] lg:w-[96%] flex flex-col"
    >
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
        <CarouselPoints
          total={ProjectsData.length}
          currentIndex={currentIndex}
          onDotClick={(index) => carouselApi?.scrollTo(index)}
        />
      </Carousel>
    </section>
  );
}
