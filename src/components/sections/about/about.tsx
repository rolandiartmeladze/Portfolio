import { Icons } from "@/components/icons";
import SectionHeader from "@/components/ui/section-header";
import AboutMe from "./about-me";

export default function About() {
  return (
    <section className="container section flex-col gap-4 w-[96%] h-screen">
      <SectionHeader label={"About Me"}>
        <Icons.role className="size-5" />
      </SectionHeader>

      <AboutMe />

    </section>
  );
}
