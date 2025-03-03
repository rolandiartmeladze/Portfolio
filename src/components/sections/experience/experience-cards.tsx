import MarkedCircle from "@/components/ui/marked-circle";
import { WorkExperience } from "@/config/experience";

export default function ExperienceCards() {
  return (
    <>
      {WorkExperience.map((work, index) => (
        <div key={index} className={`container ${work.indicator}`}>
          <MarkedCircle
            className={`size-24 relative m-2 ${work.indicator}circle`}
            className2="size-20"
          >
            <samp>{work.indicator}</samp>
          </MarkedCircle>

          <div className={`${work.indicator}header`}>
            <h3 className="text-2xl font-bold text-white">{work.position}</h3>
            <span className="company-name text-lg text-gray-200">
              {work.company}
            </span>
            <span className="duration text-sm text-gray-300">
              {work.duration}
            </span>
          </div>

          <div className="card-body mt-4">
            <p className="text-white">{work.description}</p>
            <div className="skills mt-3 flex flex-wrap gap-2">
              {work.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="skill bg-white text-gray-800 py-1 px-3 rounded-full text-sm"
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
