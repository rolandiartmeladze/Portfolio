"use client";
import TypingText from "../typing-text";

export default function About() {
  return (
    <section className="container bg-background h-full">
      <div className="flex flex-col max-w-fit justify-start h-full py-11 overflow-hidden group">

        <div className="flex flex-col gap-3 text-center">
          <span className="text-5xl text-foreground animate-pulse">Hi 👋 I’M</span>
          <h1 className="text-6xl font-bold text-foreground animate-fadeIn">
            <span className="text-primary">Roland Artmeladze</span>
          </h1>
          <h3 className="text-5xl font-bold">
          <TypingText text={["Full-Stack Developer.", "MERN-Stack Developer.", "Coder."]} />
          </h3>
        </div>

        <p className="p-6 mx-auto shadow-sm text-lg shadow-primary  rounded-b-2xl lg:max-w-5xl">
          I am a dedicated full-stack web developer with strong expertise in both frontend and backend development. 
          My frontend skills include <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>React.js</b>, 
          with a focus on scalable, high-quality code using <b>TypeScript</b>. 
          On the backend, I have successfully built reliable server-side applications with 
          <b> Node.js</b>, <b>Express</b>, <b>Nest.js</b>, and <b>Python</b>. 
          I manage databases using <b>MongoDB</b>, <b>Mongoose</b>, and <b>Django</b> to ensure seamless data integration. 
          Passionate about pushing boundaries and embracing emerging technologies, 
          I thrive in collaborative environments and enjoy tackling challenges to deliver impactful results. 
          My goal is to contribute to innovative projects that drive growth and success.
        </p>
      </div>
    </section>
  );
}
