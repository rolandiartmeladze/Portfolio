"use client";

import TypingText from "@/components/ui/typing-text";
import SliceText from "@/components/ui/slice-text";
import CvButton from "./cv-button";

export default function Hero() {
  return (
    <div className="flex w-full flex-col gap-3 text-center">
      <span className="text-5xl text-slate-600 animate-slideDown">
        Hi
        <samp className="animate-pulse">👋</samp>
        I’M
      </span>
      <SliceText
        text="Roland&nbsp;Artmeladze"
        className="text-6xl font-bold text-primary"
      />
      <TypingText
        className="text-5xl font-bold"
        text={["Full-Stack Developer.", "MERN-Stack Developer.", "Coder."]}
      />

      <CvButton />
      
    </div>
  );
}
