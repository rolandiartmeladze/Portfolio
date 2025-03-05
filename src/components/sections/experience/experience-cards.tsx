import { Icons } from "@/components/icons";
import MarkedCircle from "@/components/ui/marked-circle";
import { WorkExperience } from "@/config/experience";

export default function ExperienceCards() {
  return (
    <>
      {WorkExperience.map((work, index) => (
        <div
          key={index}
          className={`container ${work.indicator} p-5 border drop-shadow-xl overflow-hidden rounded-3xl border-primary shadow-lg shadow-primary`}
        >
          <div className="flex gap-5 items-center">
            <MarkedCircle
              className={`size-24 relative ${work.indicator}circle`}
              className2="size-20"
            >
              <samp>{work.indicator}</samp>
            </MarkedCircle>
            <div className={`${work.indicator}header flex flex-col gap-2`}>
              <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                <Icons.role className="size-7 text-primary" />
                {work.position}
              </h3>
              <span className="company-name text-lg text-foreground flex items-center gap-2">
                <Icons.work className="size-7 text-foreground" />
                {work.company}
              </span>
              <span className="duration text-sm text-foreground flex items-center gap-2">
                <Icons.time className="size-7 text-foreground" />
                {work.duration}
              </span>
            </div>
          </div>

          <div className="card-body mt-4 p-12 gap-8 grid grid-cols-1 lg:grid-cols-3">
            <p className={`${work.indicator}description text-foreground lg:col-span-2`}>{work.description}</p>
            <div className={`${work.indicator}skills mt-3 flex flex-wrap gap-2 lg:col-span-1`}>
              {work.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="skill flex items-center bg-primary text-secondary p-2 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
