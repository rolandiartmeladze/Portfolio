import { Icons } from "@/components/icons";
import MarkedCircle from "@/components/ui/marked-circle";
import { WorkExperience } from "@/config/experience";

export default function ExperienceCards() {
  return (
    <>
      {WorkExperience.map((work, index) => (
        <div
          key={index}
          className={`container ${work.indicator} p-0 lg:p-5 border-t lg:border drop-shadow-xl overflow-hidden lg:rounded-3xl shadow-primary shadow-b-sm lg:border-primary lg:shadow-lg`}
        >
          <div className="flex mt-4 gap-5 items-center">
            <MarkedCircle
              className={` size-20 lg:size-24 relative ${work.indicator}circle`}
              className2="size-16 lg:size-20"
            >
              <samp className="text-xs lg:text-md">{work.indicator}</samp>
            </MarkedCircle>
            <div className={`${work.indicator}header flex flex-col gap-2`}>
              <h3 className="text-md lg:text-2xl font-bold text-primary flex items-center gap-1 lg:gap-2">
                <Icons.role className="size-5 lg:size-7 text-primary" />
                {work.position}
              </h3>
              <span className="company-name text-sm lg:text-lg text-foreground flex items-center gap-1 lg:gap-2">
                <Icons.work className="size-5 lg:size-7 text-foreground" />
                {work.company}
              </span>
              <span className="duration text-sm text-foreground flex items-center gap-2">
                <Icons.time className="size-5 lg:size-7 text-foreground" />
                {work.duration}
              </span>
            </div>
          </div>

          <div
            className={`${work.indicator}description p-3 mt-4 lg:p-12 gap-8 grid grid-cols-1 lg:grid-cols-3"`}
          >
            <div>
              <h3 className="text-primary text-xl underline">Description:</h3>

              <p className={`text-foreground lg:col-span-2`}>
                {work.description}
              </p>
            </div>
            <div
              className={`${work.indicator}skills mt-3 flex flex-wrap gap-2 lg:col-span-1`}
            >
              <h3 className="text-foreground text-xl underline">Skills:</h3>
              {work.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="skill flex items-center bg-primary text-foreground p-2 rounded-lg text-sm"
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
