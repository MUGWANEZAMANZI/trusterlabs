import { HeroSection } from "@/components/sections/hero";
import { MissionVisionSection } from "@/components/sections/mission-vision";
import { TrainingProgramsSection } from "@/components/sections/training-programs";
import { CompetitionsSection } from "@/components/sections/competitions";
import { TechnologySection } from "@/components/sections/technology";
import { ThreatAnalysisSection } from "@/components/sections/threat-analysis";
import { PortfolioSection } from "@/components/sections/portfolio";
import { TeamSection } from "@/components/sections/team";
import { HistorySection } from "@/components/sections/history";


export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionVisionSection />
      <TrainingProgramsSection />
      <CompetitionsSection />
      <TechnologySection />
      <ThreatAnalysisSection />
      <PortfolioSection />
      <TeamSection />
      <HistorySection />
      
      
    </>
  );
}
