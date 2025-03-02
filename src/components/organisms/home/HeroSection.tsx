import { HeroContent } from "../../molecules/home/HeroContent";
import { HeroImage } from "../../molecules/home/HeroImage";

export const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10">
      <div className="md:flex justify-between md:items-center md:py-16">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};
