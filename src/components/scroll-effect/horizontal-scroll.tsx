import { useEffect, useRef, ReactNode, Children } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  const childCount = Children.count(children);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    wrapperRef.current.style.width = `${containerRef.current!.clientWidth * 3 }px`;

    const tween = gsap.to(wrapperRef.current, {
      x: () => -containerRef.current!.clientWidth * 2,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${containerRef.current!.clientWidth * 1.5}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
    
    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [childCount]);

  return (
    <div ref={containerRef} className="w-[96%] h-screen overflow-hidden relative">
      <div ref={wrapperRef} className={`flex ${className}`}>
        {children}
      </div>
    </div>
  );
}
