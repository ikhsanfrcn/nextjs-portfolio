import { Text } from "@/components/atoms/Text";
import { MainTemplate } from "../../components/templates/MainTemplate";
import { SkillSection } from "@/components/organisms/about-me/SkillSection";
import { AboutMeSection } from "@/components/organisms/about-me/AboutMeSection";

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
    </MainTemplate>
  );
}
