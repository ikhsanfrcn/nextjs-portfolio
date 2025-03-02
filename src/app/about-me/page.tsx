import { Text } from "@/components/atoms/Text";
import { MainTemplate } from "../../components/templates/MainTemplate";
import { AboutContent } from "@/components/molecules/home/AboutContent";
import { AboutImage } from "@/components/molecules/home/AboutImage";
import { SkillSection } from "@/components/organisms/about-me/SkillSection";

export default function AboutMe() {
  return (
    <MainTemplate>
      <h1 className="text-3xl text-primary mt-10">
        /<span className="text-white">about-me</span>
      </h1>
      <Text className="text-sm">Who am i?</Text>
      <div className="md:flex justify-between items-center">
        <AboutContent showButton={false} />
        <AboutImage />
      </div>
      <SkillSection />
    </MainTemplate>
  );
}
