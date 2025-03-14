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
import { Icons } from "@/components/icons";
import Link from "next/link";

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
      className="min-h-full flex flex-col justify-between rounded-lg border border-primary shadow-sm mt-6 md:max-w-[96%] lg:max-w-[30%]"
    >
      <CardHeader>
        <CardTitle className="flex gap-2 items-center border-3 border-secondary text-lg font-semibold text-primary">
          <Icons.education className="p-1 rounded-full bg-primary size-7" />
          {education.institution}
        </CardTitle>
        <div className="flex gap-2 items-center">
          <Icons.time className="p-1 rounded-full bg-primary size-7" />
          <samp>{education.period}</samp>
        </div>
      </CardHeader>
      <CardContent className="px-4 py-3 pt-1">
        <samp className="text-md font-semibold text-foreground p-1 shadow shadow-primary rounded-md">
          {education.course}
        </samp>
        <CardDescription className="text-sm text-primary mt-4">
          {education.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="px-4 py-3 text-sm font-medium text-foreground">
        <Button asChild variant="default">
          <Link href={education.link} target="_blank" >
          Certificate
          </Link>
          </Button>
      </CardFooter>
    </Card>
  );
}
