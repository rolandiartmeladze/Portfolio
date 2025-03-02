"use client";

import TypingText from "@/components/ui/typing-text";
import SliceText from "@/components/ui/slice-text";
import ContactIcons from "./contact-icons";
import ScrollDown from "./scroll-down";
import TextAniation from "@/components/ui/text-animation";
import GSAPAnimation from "@/components/GSAPAnimation";

export default function Hero() {
  return (
    <section className="hero overflow-hidden flex w-full h-screen flex-col gap-3 text-center justify-start items-center">
      <GSAPAnimation
        trigger=".hero"
        elements={[
          { selector: ".resume", x: 0, y: 250 },
          { selector: ".github", x: -150, y: 120 },
          { selector: ".linkedin", x: 120, y: 150 },
          { selector: ".animationText1", x: 200, y: 0 },
          { selector: ".animationText2", x: -200, y: 0 },
        ]}
      />
      <span className="text-5xl text-slate-600 animate-slideDown">
        Hi <samp className="animate-pulse">👋</samp> I’M
      </span>
      <SliceText
        text="Roland&nbsp;Artmeladze"
        className="text-3xl font-bold text-primary lg:text-6xl"
      />
      <TypingText
        className="text-2xl font-bold lg:text-5xl animate-professional"
        text={["Full-Stack Developer.", "MERN-Stack Developer.", "Coder."]}
      />
      <ContactIcons />
      <TextAniation
        className="animationText1"
        text="Full-Stack Developer | React, TypeScript & Python"
      />
      <TextAniation
        className="animationText2"
        text="MERN-Stack Developer | Node.js, Express, MongoDB"
      />
      <ScrollDown />
    </section>
  );
}
