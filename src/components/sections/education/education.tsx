import SectionHeader from "@/components/ui/section-header";
import { Icons } from "@/components/icons";
import EducationCard from "./education-card";
import { educationData } from "@/config/education";

export default function Education() {
  return (
    <section
      id="education"
      className="container flex flex-col flex-wrap gap-4 min-h-screen w-full"
    >
      <SectionHeader label="Education">
        <Icons.education className="size-5" />
      </SectionHeader>
      <div className="flex flex-col flex-wrap gap-2 justify-evenly lg:flex-row">
        {educationData.map((education) => (
          <EducationCard key={education.institution} education={education} />
        ))}
      </div>
    </section>
  );
}
