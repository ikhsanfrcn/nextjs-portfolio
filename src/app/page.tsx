import { HeroSection } from "@/components/organisms/home/HeroSection";
import { MainTemplate } from "../components/templates/MainTemplate";
import { ProjectSection } from "@/components/organisms/home/ProjectSection";
import { QuoteSection } from "@/components/organisms/home/QuoteSection";
import { SkillSection } from "@/components/organisms/home/SkillSection";
import { AboutSection } from "@/components/organisms/home/AboutSection";
import { ContactSection } from "@/components/organisms/home/ContactSection";

export default function Home() {
  return (
    <MainTemplate>
      <HeroSection />
      <QuoteSection />
      <ProjectSection />
      <SkillSection />
      <AboutSection />
      <ContactSection />
    </MainTemplate>
  );
}
