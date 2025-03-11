import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

import image from "@/../public/placeholder.svg";

import Image from "next/image";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card
      className={`${className} flex flex-col justify-between h-full border border-primary p-2 lg:p-4 shadow-lg rounded-lg`}
    >
      <CardHeader className="p-2 border-b border-b-muted">
        <Carousel>
          <CarouselContent className="h-48 flex gap-3">
            {[0, 1, 2].map((_, index) => (
              <CarouselItem
                key={index}
                className="max-w-[230px]  flex justify-center"
              >
                <Image
                  width={220}
                  height={180}
                  alt={project.title}
                  src={image}
                  className="rounded-md object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 flex" />
          <CarouselNext className="right-0 flex" />
        </Carousel>
      </CardHeader>

      <CardContent className="p-1">
        <CardTitle className="text-lg font-bold text-primary">
          {project.title}
        </CardTitle>

        <div className="mt-1 flex flex-wrap items-center gap-2">
          {project.skills.map((skill, index) => (
            <div key={skill} className="flex items-center">
              <samp className="text-primary text-xs">
                {skill}
              </samp>

              {index < project.skills.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="m-1 h-3 bg-muted"
                />
              )}
            </div>
          ))}
        </div>

        <CardDescription className="text-sm">
          {project.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between">
        <a
          href={project.media}
          target="_blank"
          className="text-primary underline font-semibold transition-colors hover:text-secondary"
        >
          View Project
        </a>
      </CardFooter>
    </Card>
  );
}
