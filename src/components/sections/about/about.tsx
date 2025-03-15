import { Icons } from "@/components/icons";
import SectionHeader from "@/components/ui/section-header";
import AboutMe from "./about-me";
import GitHubTrophies from "./githube-trophies";

export default function About() {
  return (
    <section className="container about-section h-screen flex-col gap-4 w-screen lg:w-[96%]">
      <SectionHeader label={"About Me"}>
        <Icons.role className="size-5" />
      </SectionHeader>

      <AboutMe />

      <GitHubTrophies />
    </section>
  );
}
