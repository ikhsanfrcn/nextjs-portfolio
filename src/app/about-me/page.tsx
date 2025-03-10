import { Text } from "@/components/atoms/Text";
import { MainTemplate } from "../../components/templates/MainTemplate";
import { SkillSection } from "@/components/organisms/about-me/SkillSection";
import { AboutMeSection } from "@/components/organisms/about-me/AboutMeSection";
// import { ExperienceSection } from "@/components/organisms/about-me/ExperienceSection";

export const metadata = {
  title: "About Me | Creative Web Portfolio",
  description: "Learn more about my background, skills, and journey as a web developer. Discover the passion behind the projects I create.",
  opengraph: {
      url: "" 
  }
};


export default function AboutMe() {
  return (
    <MainTemplate>
      <div className="container mx-auto px-5 lg:px-10">
        <h1 className="text-3xl text-primary mt-10">
          /<span className="text-white">about-me</span>
        </h1>
      <Text className="text-sm">Who am i?</Text>
      </div>
      <AboutMeSection />
      <SkillSection />
      {/* <ExperienceSection /> */}
    </MainTemplate>
  );
}
