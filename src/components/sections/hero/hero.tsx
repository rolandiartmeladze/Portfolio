import TypingText from "@/components/ui/typing-text";
import SliceText from "@/components/ui/slice-text";
import CvButton from "@/components/sections/hero/cv-button";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

  return (
    <section className="flex w-full h-screen flex-col gap-3 text-center justify-start items-center">
      <span className="text-5xl text-slate-600 animate-slideDown">
        Hi
        <samp className="animate-pulse">👋</samp>
        I’M
      </span>
      <SliceText
        text="Roland&nbsp;Artmeladze"
        className="text-3xl font-bold text-primary lg:text-6xl"
      />
      <TypingText
        className="text-2xl font-bold lg:text-5xl"
        text={["Full-Stack Developer.", "MERN-Stack Developer.", "Coder."]}
      />

      <CvButton />

      <div className="p-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center rounded-lg shadow-lg  animate-scaleUp">
        <h2 className="text-3xl font-semibold mb-4 animate-fadeIn">
          Scroll Down to Discover
        </h2>
        <div className="mt-8">
          <span className="bg-white text-indigo-600 font-bold py-2 px-6 rounded-full hover:bg-indigo-600 hover:text-white cursor-pointer transition-all duration-300">
            Show My Experience
          </span>
        </div>
      </div>
    </section>
  );
}
