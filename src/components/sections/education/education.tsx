import SectionHeader from "@/components/ui/section-header";
import { Icons } from "@/components/icons";
import EducationCard from "./education-card";
import { educationData } from "@/config/education";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import GSAPAnimation from "@/components/GSAPAnimation";

export default function Education() {
  return (
    <section
      id="education"
      className="container education flex flex-col flex-wrap gap-4 min-h-screen w-full"
    >
      <GSAPAnimation
        trigger=".education"
        elements={[{ selector: ".costum-container", x: 0, y: 250 }]}
        start="top top"
      />

      <SectionHeader label="Education">
        <Icons.education className="size-5" />
      </SectionHeader>
      <div className="flex flex-col flex-wrap gap-2 justify-evenly lg:flex-row">
        {educationData.map((education) => (
          <EducationCard key={education.institution} education={education} />
        ))}
      </div>

      <Card className="w-full costum-container p-6 shadow-lg border rounded-2xl border-primary text-primary">
        <CardTitle className="text-xl font-bold mb-3">
          📚 Free Courses Completed
        </CardTitle>
        <CardContent className="space-y-4">
          I have independently completed several courses on YouTube and Udemy to
          strengthen my skills in backend development. These courses provided me
          with a solid foundation in Python, Django, and Nest.js, which I
          applied in the creation of multiple projects. By learning these
          technologies, I gained hands-on experience in building scalable
          applications and APIs, and I continue to implement this knowledge in
          real-world projects.
        </CardContent>
      </Card>
    </section>
  );
}
