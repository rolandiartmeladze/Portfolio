import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimationProps {
  trigger: string;
  elements: { selector: string; x: number; y: number }[];
}

const GSAPAnimation: React.FC<AnimationProps> = ({ trigger, elements }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      elements.forEach(({ selector, x, y }) => {
        gsap.fromTo(
          selector,
          { x: 0, y: 0, opacity: 1 },
          {
            x,
            y,
            opacity: 0,
            duration: 3,
            ease: "power2.out",
            scrollTrigger: {
              trigger,
              start: "top 10%",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [trigger, elements]);

  return null;
};

export default GSAPAnimation;
