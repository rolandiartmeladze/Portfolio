"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
  className?: string;
  children: ReactNode;
  ref?: React.RefObject<HTMLElement>;
  animation?: {
    from: gsap.TweenVars;
    to: gsap.TweenVars;
  };
}

export default function ScrollAnimation({
  className,
  children,
  animation,
}: ScrollAnimationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [animation]);

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
}
