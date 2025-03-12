import SectionHeader from "@/components/ui/section-header";
import { Icons } from "@/components/icons";
import EducationCard from "./education-card";
import { educationData } from "@/config/education";

export default function Education() {
  return (
    <section
      id="education"
      className="container flex flex-col gap-4 min-h-screen w-[96%]"
    >
      <SectionHeader label="Education">
        <Icons.education className="size-5" />
      </SectionHeader>
      {educationData.map((education) => (
        <EducationCard key={education.institution} education={education} />
      ))}
    </section>
  );
}
