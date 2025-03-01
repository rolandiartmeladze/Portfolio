"use client";

import TypingText from "@/components/ui/typing-text";
import SliceText from "@/components/ui/slice-text";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactIcons from "./contact-icons";
import ScrollDown from "./scroll-down";
import TextAniation from "@/components/ui/text-animation";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  return (
    <section
      id="home"
      className="hero flex w-full h-screen flex-col gap-3 text-center justify-start items-center"
    >
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
      <TextAniation text="Full-Stack Developer | React, TypeScript & Python" />
      <TextAniation text="MERN-Stack Developer | Node.js, Express, MongoDB" />
      <ScrollDown />
    </section>
  );
}
