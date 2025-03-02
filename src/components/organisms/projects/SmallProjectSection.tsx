'use client'
import { SmallProjectCard } from "@/components/molecules/SmallProjectCard";
import { smallProjectsData } from "@/data/projects";

export const SmallProjectSection: React.FC = () => {
  return (
    <section className="mt-16">
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
