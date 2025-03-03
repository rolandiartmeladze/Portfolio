import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WorkExperience } from "@/config/experience";

interface HorizontalScrollProps {
  className?: string;
  children: ReactNode;
}

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll({
  children,
  className,
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;
    wrapperRef.current.style.width = `${containerRef.current.clientWidth * WorkExperience.length}px`;
    const tween = gsap.to(wrapperRef.current, {
      x: () => -containerRef.current!.clientWidth * (WorkExperience.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${containerRef.current!.clientWidth * (WorkExperience.length - 1)}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative overflow-hidden lg:w-[96%]"
    >
      <div ref={wrapperRef} className={`flex ${className}`}>
        {children}
      </div>
    </div>
  );
}
