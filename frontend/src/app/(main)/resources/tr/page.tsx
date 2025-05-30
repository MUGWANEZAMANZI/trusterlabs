import { ResourcePage } from "@/components/resources/resource-page";

const threatResearchResources = [
  {
    title: "US-CERT Alerts",
    description: "Latest cybersecurity alerts from US government",
    link: "https://www.cisa.gov/uscert/ncas/alerts",
    type: "Alerts",
  },
  {
    title: "Krebs on Security",
    description: "Investigative cybersecurity journalism",
    link: "https://krebsonsecurity.com/",
    type: "Blog",
  },
  {
    title: "Threat Intelligence Platform",
    description: "Aggregated threat data and research",
    link: "https://threatintelligenceplatform.com/",
    type: "Platform",
  },
  {
    title: "VirusTotal",
    description: "Analyze suspicious files and URLs",
    link: "https://www.virustotal.com/gui/",
    type: "Tool",
  },
  {
    title: "MITRE Engenuity",
    description: "Advanced threat research and analysis",
    link: "https://mitre-engenuity.org/",
    type: "Research",
  },
];

export default function ThreatResearchPage() {
  return (
    <ResourcePage
      title="Threat Research Papers"
      description="Cutting-edge research and analysis on cybersecurity threats and vulnerabilities"
      resources={threatResearchResources}
      category="tr"
    />
  );
}
