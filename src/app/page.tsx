"use client";
import React from "react";
import { HeroSection } from "@/components/organisms/home/HeroSection";
import { MainTemplate } from "../components/templates/MainTemplate";
import { ProjectSection } from "@/components/organisms/home/ProjectSection";
import { QuoteSection } from "@/components/organisms/home/QuoteSection";
import { SkillSection } from "@/components/organisms/home/SkillSection";
import { AboutSection } from "@/components/organisms/home/AboutSection";
import { ContactSection } from "@/components/organisms/home/ContactSection";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
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
