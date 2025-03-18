import { Icons } from "@/components/icons";
import SectionHeader from "@/components/ui/section-header";
import { SkillsData } from "@/config/skills";
import SkillCard from "./skills-card";

export default function Skill() {
  return (
    <section
      id="skills"
      className="container flex gap-4 flex-col w-[96% min-h-screen mt-7"
    >
      <SectionHeader label="Skills">
        <Icons.skill className="size-5" />
      </SectionHeader>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Object.entries(SkillsData).map(([category, skills]) => (
          <SkillCard
            key={category}
            title={category}
            skills={skills}
            className={`lg:max-w-[96%]  ${category === "Personal Skills" ? "lg:col-span-2" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}
