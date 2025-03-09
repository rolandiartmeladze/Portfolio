import { useEffect, useRef } from "react";
import gsap from "gsap";
import { AboutText } from "@/config/about-text";

const TextAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, rotate: 12, scale: 0.1 },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 2,
        ease: "elastic.out(1, 0.88)",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 60%",
          end: "top 10%",
          scrub: true,
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  }, []);

  const highlightText = (text: string) => {
    const keywords = [
      "full-stack", "frontend", "backend", "JavaScript", "React", "TypeScript", 
      "Next.js", "Tailwind CSS", "Node.js", "Express.js", "Python", "Django", 
      "REST Framework", "MongoDB", "Mongoose Atlas", "Django ORM", "database management"
    ];

    return text.split(" ").map((word, index) => {
      const cleanWord = word.replace(/[.,]/g, "");

      if (keywords.includes(cleanWord)) {
        return (
          <span key={index} className="font-bold text-primary">
            {word} 
          </span>
        );
      }
      return <span key={index}>{word} </span>;
    });
  };

  return (
    <p
      className="border shadow-lg shadow-primary mt-5 lg:rounded-xl lg:p-8 lg:text-lg"
      ref={textRef}
    >
      {highlightText(AboutText)}
    </p>
  );
};

export default TextAnimation;
