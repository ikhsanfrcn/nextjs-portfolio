import Image from "next/image";
import { skillsData } from "@/data/skillsData";
import { SkillListItem } from "@/components/molecules/SkillCard";

export const SkillSection: React.FC = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 mt-16 lg:pl-20">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 md:gap-10">
          <h2 className="text-2xl font-bold text-primary">
            #<span className="text-white">skills</span>
          </h2>
          <hr className="w-14 md:w-60 h-0.5 mx-auto my-4 bg-primary border-0 rounded-sm" />
        </div>
      </div>

      <div className="md:flex justify-between md:mt-5">
        {/* Image */}
        <div className="md:w-[70%] lg:w-[50%] flex justify-center">
          <Image
            src="/skillsimg.png"
            width={0}
            height={0}
            alt="Skills Section"
            sizes="100vw"
            className="md:ml-5 w-[80%] h-auto object-contain"
          />
        </div>

        {/* Skills */}
        <div className="md:w-[100%] lg:w-[50%]">
          <div className="grid md:grid-cols-3 gap-5 mt-10 md:mt-0">
            <div className="flex flex-col gap-5">
              <SkillListItem
                title={skillsData[0].title}
                skills={skillsData[0].skills}
              />
            </div>
            <div className="flex flex-col gap-5">
              <SkillListItem
                title={skillsData[1].title}
                skills={skillsData[1].skills}
              />
              <SkillListItem
                title={skillsData[2].title}
                skills={skillsData[2].skills}
              />
            </div>
            <div className="flex flex-col gap-5">
              <SkillListItem
                title={skillsData[3].title}
                skills={skillsData[3].skills}
              />
              <SkillListItem
                title={skillsData[4].title}
                skills={skillsData[4].skills}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
