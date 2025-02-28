"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SliceTextProps {
  text: string;
  className?: string;
}

const SliceText: React.FC<SliceTextProps> = ({ text, className }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const letters = text.split("");
      textRef.current.innerHTML = letters
        .map((letter) => `<span class="inline-block opacity-0 translate-y-4">${letter}</span>`)
        .join("");

      gsap.to(textRef.current.children, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [text]);

  return (
    <div ref={textRef} className={`inline-block ${className}`}></div>
  );
};

export default SliceText;
