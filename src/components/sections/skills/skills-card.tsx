import { useEffect, useRef } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface CardProps {
  skills: string[];
  title: string;
  className:string;
}

const skillStyles = [
  "bg-blue-600",
  "bg-green-600",
  "bg-purple-600",
  "bg-red-600",
  "bg-yellow-500",
  "bg-pink-600",
];

gsap.registerPlugin(ScrollTrigger);

export default function SkillCard({ skills, title, className }: CardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;

    gsap.fromTo(
      card,
      { opacity: 0, scale: 0.8, y: 80, rotate: -10 },
      {
        opacity: 1,
        scale: 1.05,
        y: 0,
        rotate: 0,
        duration: 3.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          scrub: 1.5,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <Card
      ref={cardRef}
      className={`${className} rounded-sm lg:rounded-2xl border-0 border-t lg:border lg:bg-secondary p-5 shadow-lg`}
    >
      <CardTitle className="text-lg font-semibold mb-3">{title}</CardTitle>
      <CardContent className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className={`${skillStyles[index % skillStyles.length]} text-foreground px-3 py-1 rounded-lg shadow-md font-medium`}
          >
            {skill}
          </span>
        ))}
      </CardContent>
    </Card>
  );
}
