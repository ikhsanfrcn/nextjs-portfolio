'use client'
import { SmallProjectCard } from "@/components/molecules/SmallProjectCard";
import { officeProjectsData } from "@/data/officeProjectsData";

export const OfficeProjectSection: React.FC = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 mt-16">
      <div>
        <h2 className="text-2xl text-primary">
          #<span className="text-white">office-projects</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-5">
        {officeProjectsData.map((project, index) => (
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
