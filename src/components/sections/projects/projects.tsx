"use client";

import SectionHeader from "@/components/ui/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Icons } from "@/components/icons";
import ProjectCard from "./project-card";
import { ProjectsData } from "@/config/projects";
import { Project } from "@/types/project";

export default function Projects() {
  return (
    <section className="container h-[98vh] lg:w-[96%] flex flex-col">
      <SectionHeader label="Projects" className="mb-4">
        <Icons.work className="size-5" />
      </SectionHeader>

      <Carousel>
        <CarouselContent className="gap-4">
          {ProjectsData.map((project: Project) => (
            <CarouselItem key={project.title} className="flex max-w-[375px] h-full">
              <ProjectCard project={project} className="h-full" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:inline-block" />
        <CarouselNext className="hidden lg:inline-block" />
      </Carousel>
    </section>
  );
}
