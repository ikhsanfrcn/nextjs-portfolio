'use client'
import { SmallProjectCard } from "@/components/molecules/SmallProjectCard";
import { smallProjectsData } from "@/data/smallProjectData";

export const SmallProjectSection: React.FC = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 mt-16">
      <div>
        <h2 className="text-2xl text-primary">
          #<span className="text-white">small-projects</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-5">
        {smallProjectsData.map((project, index) => (
          <SmallProjectCard
            key={index}
            caption={project.caption}
            title={project.title}
            description={project.description}
            buttons={project.buttons}
          />
        ))}
      </div>
    </section>
  );
};
