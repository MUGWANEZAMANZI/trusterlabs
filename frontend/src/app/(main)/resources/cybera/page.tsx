import { ResourcePage } from "@/components/resources/resource-page";

const cyberSecurityResources = [
  {
    title: "OWASP Foundation",
    description: "Open Web Application Security Project resources",
    link: "https://owasp.org/",
    type: "Foundation",
  },
  {
    title: "MITRE ATT&CK",
    description: "Knowledge base of adversary tactics and techniques",
    link: "https://attack.mitre.org/",
    type: "Framework",
  },
  {
    title: "NIST Cybersecurity Framework",
    description: "Standards, guidelines, and best practices",
    link: "https://www.nist.gov/cyberframework",
    type: "Framework",
  },
  {
    title: "CyberA Academy",
    description: "Free cybersecurity training resources",
    link: "https://www.cybera.ca/",
    type: "Training",
  },
  {
    title: "Kali Linux Tools",
    description: "Documentation for penetration testing tools",
    link: "https://www.kali.org/tools/",
    type: "Tools",
  },
];

export default function CyberSecurityPage() {
  return (
    <ResourcePage
      title="Cyber Security Fundamentals"
      description="Essential resources for understanding cybersecurity principles and practices"
      resources={cyberSecurityResources}
      category="cybera"
    />
  );
}
