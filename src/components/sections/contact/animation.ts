import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimationProps {
  trigger: string;
  elements: { selector: string; x?: number; y?: number; scale?: number }[];
  start?: string;
}

const Animation: React.FC<AnimationProps> = ({ trigger, elements, start }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      elements.forEach(({ selector, x = 0, y = 0, scale = 0.4 }) => {
        gsap.fromTo(
          selector,
          { x, y, opacity: 0, scale },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "power4.out",
            scrollTrigger: {
              trigger,
              start: start || "top 40%",
              end: "top 50%",
              scrub: 1.5,
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
};

export default Animation;
