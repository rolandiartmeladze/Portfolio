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

export default function Projects() {
  return (
    <section className="container h-[98vh] lg:w-[96%] flex flex-col">
      <SectionHeader label="Projects" className="mb-4">
        <Icons.work className="size-5" />
      </SectionHeader>

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <ProjectCard />
          </CarouselItem>
          <CarouselItem>
            <ProjectCard />
          </CarouselItem>
          <CarouselItem>
            <ProjectCard />
          </CarouselItem>
          <CarouselItem>
            <ProjectCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
