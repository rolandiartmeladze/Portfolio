import { Icons } from "@/components/icons";
import SectionHeader from "@/components/ui/section-header";

export default function Skill() {
    return(
        <section id="skills" className="container w-[96% min-h-screen mt-7">
            <SectionHeader label="Skills">
                <Icons.skill className="size-5" />
            </SectionHeader>
            <div>
                skills
            </div>
        </section>
    )
}