'use client'

import { ProjectCard } from "@/components/molecules/ProjectCard";
import { ProjectsData } from "@/data/projectsData";


export const FullProjectSection: React.FC = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 mt-16">
      <div>
        <h2 className="text-2xl text-primary">
          #<span className="text-white">projects</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-5">
        {ProjectsData.map((project, index) => (
          <ProjectCard
            key={index}
            visuals={project.visuals}
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
