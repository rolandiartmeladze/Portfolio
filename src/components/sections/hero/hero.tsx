import TypingText from "@/components/ui/typing-text";
import SliceText from "@/components/ui/slice-text";
import CvButton from "@/components/sections/hero/cv-button";

export default function Hero() {
  return (
    <div className="flex w-full flex-col gap-3 text-center justify-center items-center">
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
    </div>
  );
}
