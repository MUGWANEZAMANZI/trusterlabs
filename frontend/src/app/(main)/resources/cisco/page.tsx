import { ResourcePage } from "@/components/resources/resource-page";

const ciscoResources = [
  {
    title: "Cisco Networking Academy",
    description: "Free courses on networking, security, and automation",
    link: "https://www.netacad.com/",
    type: "Course",
  },
  {
    title: "Cisco Packet Tracer",
    description: "Network simulation tool for practicing configurations",
    link: "https://www.netacad.com/courses/packet-tracer",
    type: "Tool",
  },
  {
    title: "Cisco DevNet",
    description: "Resources for network automation and programmability",
    link: "https://developer.cisco.com/",
    type: "Developer Portal",
  },
  {
    title: "Cisco Security Advisories",
    description:
      "Latest security vulnerabilities and patches for Cisco products",
    link: "https://tools.cisco.com/security/center/publicationListing.x",
    type: "Security",
  },
  {
    title: "Cisco Learning Network",
    description: "Community and study resources for Cisco certifications",
    link: "https://learningnetwork.cisco.com/",
    type: "Certification",
  },
];

export default function CiscoPage() {
  return (
    <ResourcePage
      title="Cisco Networking Resources"
      description="Comprehensive collection of Cisco networking materials, tools, and learning resources"
      resources={ciscoResources}
      category="cisco"
    />
  );
}
