import { SkillListItem } from "@/components/molecules/SkillCard";
import { skillsData } from "@/data/skillsData";

export const SkillSection: React.FC = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 mt-16">
      <h2 className="text-2xl text-primary">
        #<span className="text-white">skills</span>
      </h2>
      <div className="grid md:flex justify-between gap-5 mt-10">
          <SkillListItem title={skillsData[0].title} skills={skillsData[0].skills} />
          <SkillListItem title={skillsData[1].title} skills={skillsData[1].skills} />
          <SkillListItem title={skillsData[2].title} skills={skillsData[2].skills} />
          <SkillListItem title={skillsData[3].title} skills={skillsData[3].skills} />
          <SkillListItem title={skillsData[4].title} skills={skillsData[4].skills} />
      </div>
    </section>
  );
};
