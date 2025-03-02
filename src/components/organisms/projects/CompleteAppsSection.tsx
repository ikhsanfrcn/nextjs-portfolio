'use client'
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projectsData } from "@/data/projects";

export const CompleteAppsSection: React.FC = () => {
  return (
    <section className="mt-16">
      <div>
        <h2 className="text-2xl text-primary">
          #<span className="text-white">complete-apps</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-5">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
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
