import { ProjectDesktop } from "@/components/molecules/home/ProjectDesktop";
import { Icon } from "../../atoms/Icon";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ProjectMobile } from "@/components/molecules/home/ProjectMobile";

export const ProjectSection: React.FC = () => {
  return (
    <section className="container mx-auto px-5 md:px-10 mt-16">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 md:gap-10">
          <h2 className="text-2xl font-bold">#projects</h2>
          <hr className="w-14 md:w-80 h-0.5 mx-auto my-4 bg-primary border-0 rounded-sm" />
        </div>
        <a href="/projects" className="flex items-center text-sm col-start-10 col-span-2">
          View all
          <Icon Component={IoIosArrowRoundForward} className="text-2xl" />
        </a>
      </div>

      <div className="hidden md:block pt-10">
        <ProjectDesktop />
      </div>

      <div className="md:hidden mx-5">
        <ProjectMobile />
      </div>
    </section>
  );
};
