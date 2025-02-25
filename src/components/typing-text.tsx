import { useEffect, useRef } from "react";
import TypeIt from "typeit";

interface TypingTextProps {
  text: string[];
  speed?: number;
  loop?: boolean;
}

export default function TypingText({
  text,
  speed = 100,
  loop = true,
}: TypingTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current && text.length > 0) {
      const instance = new TypeIt(textRef.current, {
        speed,
        loop,
        cursor: false,
        waitUntilVisible: true,
      });

      text.forEach((t) => {
        instance.type(t).pause(1000).delete();
      });

      instance.go();
    }
  }, [text, speed, loop]);

  return <div className="" ref={textRef}></div>;
}
