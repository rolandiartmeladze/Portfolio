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

import image from "@/../public/placeholder.svg"

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
      <CardHeader className="p-2">
        <Carousel>
          <CarouselContent className="h-48 flex gap-3">
            {[0,1,2].map((_, index) => (
              <CarouselItem key={index} className="max-w-[230px] flex justify-center">
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
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </CardHeader>

      <CardContent>
        <CardTitle className="text-xl font-bold text-primary">
          {project.title}
        </CardTitle>
        <CardDescription className="text-sm">{project.description}</CardDescription>

        <div className="mt-4">
          <p className="font-semibold">Skills Used:</p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {project.skills.map((skill) => (
              <li
                key={skill}
                className="bg-primary text-background px-3 py-1 rounded-md text-xs font-medium shadow-md"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
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
