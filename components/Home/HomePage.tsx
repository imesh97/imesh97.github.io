import React from "react";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";
import { ContactSection } from "./ContactSection";

export function HomePage() {
  return (
    <div
      className={`min-h-screen bg-grey-d home-page page container mx-auto`}
    >
      <HeroSection />
      {/* <AboutSection /> */}
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
