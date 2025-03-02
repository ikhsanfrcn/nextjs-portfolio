'use client'
import Slider from "react-slick";
import { ProjectCard } from "../ProjectCard";
import { projectsData } from "@/data/projects";

export const ProjectMobile: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="pt-10">
      <Slider {...settings}>
        {projectsData.map((project, index) => (
          <div key={index}>
            <ProjectCard
              img={project.img}
              caption={project.caption}
              title={project.title}
              description={project.description}
              buttons={project.buttons}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
