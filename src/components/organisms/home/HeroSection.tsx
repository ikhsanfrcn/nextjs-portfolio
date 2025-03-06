import ToolsContent from "@/components/molecules/home/ToolsContent";
import { HeroContent } from "../../molecules/home/HeroContent";
import { HeroImage } from "../../molecules/home/HeroImage";

export const HeroSection: React.FC = () => {
  return (
    <section>
      {/* <div className="flex container mx-auto justify-between"> */}
      <div className="container mx-auto px-5 lg:px-10 max-sm:pt-10 md:flex justify-between md:items-center md:py-16">
        <HeroContent />
        <HeroImage />
      </div>
      <ToolsContent />
    </section>
  );
};
