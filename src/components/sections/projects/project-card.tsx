import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }:ProjectCardProps) {
  return (
    <Card className={`${className} flex flex-col justify-between h-full border-primary p-4 shadow-lg`}>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="font-semibold">Skills:</p>
        <ul className="flex flex-wrap gap-2 mt-2">
          {project.skills.map((skill) => (
            <li key={skill} className="bg-primary text-foreground px-2 py-1 rounded-md text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex justify-between">
        <a
          href={project.media}
          target="_blank"
          className="text-primary underline hover:text-secondary"
        >
          View Project
        </a>
      </CardFooter>
    </Card>
  );
}
