'use client'
import Slider from "react-slick";
import { ProjectCard } from "../ProjectCard";
import { ProjectsData } from "@/data/projectsData";

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
        {ProjectsData.map((project, index) => (
          <div key={index}>
            <ProjectCard
              visuals={project.visuals}
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
