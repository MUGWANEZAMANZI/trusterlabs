"use client";

import { MissionVisionSection } from "@/components/sections/mission-vision";
import { TeamSection } from "@/components/sections/team";
import { HistorySection } from "@/components/sections/history";
import { AnimatedHeroSection } from "@/components/animated-hero-section";

export default function About() {
  return (
    <>
      <AnimatedHeroSection
        title="About Truster Labs"
        description="Our mission, vision, and the team behind our cybersecurity solutions"
        backgroundImage="/images/about-hero.jpeg"
      />
      <MissionVisionSection />
      <TeamSection />
      <HistorySection />
    </>
  );
}
