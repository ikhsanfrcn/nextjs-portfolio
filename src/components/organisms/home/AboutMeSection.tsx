import { AboutContent } from "../../molecules/home/AboutContent";
import { AboutImage } from "../../molecules/home/AboutImage";

export const AboutMeSection: React.FC = () => {
  return (
    <section className="container mx-auto px-5 md:px-10 mt-16">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 md:gap-10">
          <h2 className="text-2xl font-bold">#about-me</h2>
          <hr className="w-14 md:w-80 h-0.5 mx-auto my-4 bg-primary border-0 rounded-sm" />
        </div>
      </div>
      <div className="md:flex justify-between items-center">
        <AboutContent showButton={true} />
        <AboutImage />
      </div>
    </section>
  );
};
