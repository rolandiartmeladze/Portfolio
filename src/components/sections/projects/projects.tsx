"use client";

import { useState, useEffect } from "react";
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

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

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

  return (
    <section id="projects" className="container h-[98vh] lg:w-[96%] flex flex-col">
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
