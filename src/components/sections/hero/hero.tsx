import TypingText from "@/components/typing-text";

export default function Hero() {
  return (
    <div className="flex w-full flex-col gap-3 text-center">
      <span className="text-5xl text-foreground animate-pulse">Hi 👋 I’M</span>
      <h1 className="text-6xl font-bold text-foreground animate-fadeIn">
        <span className="text-primary">Roland Artmeladze</span>
      </h1>
      <h3 className="text-5xl font-bold">
        <TypingText
          text={["Full-Stack Developer.", "MERN-Stack Developer.", "Coder."]}
        />
      </h3>
    </div>
  );
}
