import { ReactNode, useEffect, useRef } from "react";
import MarkedCircle from "./marked-circle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeaderProps {
  children: ReactNode;
  className?: string;
  label?: string;
}

export default function SectionHeader({
  children,
  className = "",
  label,
}: SectionHeaderProps) {
  const sectionHeaderRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionHeaderRef.current,
      { opacity: 0, rotate: 30, scale: 0.1 },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 2,
        ease: "elastic.out(1, 0.88)",
        scrollTrigger: {
          trigger: sectionHeaderRef.current,
          start: "top 60%",
          end: "top 10%",
          scrub: true,
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  }, []);

  return (
    <h1
      ref={sectionHeaderRef}
      className={`flex gap-2 justify-start items-center text-4xl lg:text-6xl text-primary px-2 border-l-8 border-l-primary rounded-tl-md ${className}`}
    >
      {label}
      <MarkedCircle
        className="section-circle size-12 text-xs relative animate-bounce"
        className2="size-8"
      >
        {children}
      </MarkedCircle>
    </h1>
  );
}
