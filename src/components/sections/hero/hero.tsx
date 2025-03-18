"use client";

import TypingText from "@/components/ui/typing-text";
import SliceText from "@/components/ui/slice-text";
import ContactIcons from "./contact-icons";
import TextAniation from "@/components/ui/text-animation";
import GSAPAnimation from "@/components/GSAPAnimation";
import MarkedCircle from "@/components/ui/marked-circle";
import { Icons } from "@/components/icons";

export default function Hero() {
  return (
    <section className="hero overflow-hidden flex w-full h-screen flex-col gap-3 text-center justify-start items-center">
      <GSAPAnimation
        trigger=".hero"
        elements={[
          { selector: ".resume", x: 0, y: 250 },
          { selector: ".github-icon", x: -150, y: 120 },
          { selector: ".linkedin-icon", x: 120, y: 150 },
          { selector: ".FULLSTACK", x: 200, y: 0 },
          { selector: ".MERNSTACK", x: -200, y: 0 },
          { selector: ".MrakedCircleInset", x: 750, y: 150 },
          { selector: ".MrakedCircle", x: -400, y: 250 },
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
        className="FULLSTACK"
        text="Full-Stack Developer | React, TypeScript & Python"
      />
      <TextAniation
        className="MERNSTACK"
        text="MERN-Stack Developer | Node.js, Express, MongoDB"
      />
      <MarkedCircle
        className="MrakedCircle  relative z-40 size-28  m-5"
        className2="MrakedCircleInset size-24"
      >
        <Icons.scrollDown className="size-16 text-primary drop-shadow-lg" />
      </MarkedCircle>
    </section>
  );
}
