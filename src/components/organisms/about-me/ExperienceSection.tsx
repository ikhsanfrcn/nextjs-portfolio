
import { experienceData } from "../../../data/experienceData";
import { ExperienceItem } from "../../molecules/ExperienceItem";
import { LanguageItem } from "../../molecules/LanguageItem";

export const ExperienceSection: React.FC = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 mt-16">
      <h3 className="text-2xl text-primary">
        #<span className="text-white">experience</span>
      </h3>
      <div className="flex max-sm:flex-col justify-between pt-10 max-sm:gap-10">
        {/* Left Side */}
        <div className="flex flex-col md:w-[70%] gap-5">
          {experienceData.map((item, index) => (
            <ExperienceItem
              key={index}
              startDate={item.startDate}
              endDate={item.endDate}
              companyName={item.companyName}
              description={item.description}
            />
          ))}
        </div>

        {/* Right Side */}
        <div className="md:w-[25%]">
          <h4 className="border border-grey p-2">Languages</h4>
          <div className="border border-grey p-2">
            <LanguageItem language="Indonesian" proficiency="Native" />
            <LanguageItem language="English" proficiency="Professional" />
            <LanguageItem language="Japanese" proficiency="A2" />
          </div>
        </div>
      </div>
    </section>
  );
};
