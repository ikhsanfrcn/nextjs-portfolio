import { SkillListItem } from "@/components/molecules/SkillCard";
import { skillsData } from "@/data/skillsData";

export const SkillSection: React.FC = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 mt-16">
      <h2 className="text-2xl text-primary">
        #<span className="text-white">skills</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
        {skillsData.map((item) => (
          <SkillListItem key={item.title} title={item.title} skills={item.skills} />
        ))}
      </div>
    </section>
  );
};
