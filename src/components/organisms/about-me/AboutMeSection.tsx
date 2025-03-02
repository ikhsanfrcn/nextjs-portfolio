import { AboutContent } from "../../molecules/home/AboutContent";
import { AboutImage } from "../../molecules/home/AboutImage";

export const AboutMeSection: React.FC = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 mt-16">
      <div className="md:flex justify-between items-center">
        <AboutContent showButton={false} />
        <AboutImage />
      </div>
    </section>
  );
};
