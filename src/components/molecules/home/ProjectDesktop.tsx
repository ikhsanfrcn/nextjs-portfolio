'use client'
import { ProjectsData } from "@/data/projectsData";
import { ProjectCard } from "../ProjectCard";

export const ProjectDesktop: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {ProjectsData.slice(0, 3).map((project, index) => ( // only show 3 projects
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
  );
};
