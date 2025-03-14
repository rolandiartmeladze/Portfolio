"use client";

import { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { education } from "@/types/education";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function EducationCard({ education }: { education: education }) {
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
          start: "top 40%",
          end: "top 60%",
          scrub: 1.5,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Card
      ref={cardRef}
      className="min-h-full rounded-lg border border-primary shadow-sm mt-6 md:max-w-[96%] lg:max-w-[30%]"
    >
      <CardHeader>
        <h1 className="text-primary">{education.institution}</h1>
        <samp>{education.period}</samp>
      </CardHeader>
      <CardContent className="px-4 py-3">
        <CardTitle className="text-lg font-semibold text-primary">
          {education.course}
        </CardTitle>
        <CardDescription className="text-sm text-primary mt-2">
          {education.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="px-4 py-3 text-sm font-medium text-foreground">
        <Button variant="default">Certificate</Button>
      </CardFooter>
    </Card>
  );
}
