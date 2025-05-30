import { ResourcePage } from "@/components/resources/resource-page";

const forensicsResources = [
  {
    title: "SANS Digital Forensics",
    description: "Training and resources for digital forensics",
    link: "https://www.sans.org/digital-forensics/",
    type: "Training",
  },
  {
    title: "Autopsy",
    description: "Open source digital forensics platform",
    link: "https://www.autopsy.com/",
    type: "Tool",
  },
  {
    title: "DFIR Training",
    description: "Digital Forensics and Incident Response resources",
    link: "https://www.dfir.training/",
    type: "Training",
  },
  {
    title: "Forensics Wiki",
    description: "Collaborative knowledge base for forensics",
    link: "https://forensicswiki.xyz/",
    type: "Wiki",
  },
  {
    title: "FTK Imager",
    description: "Forensic toolkit for data preview and imaging",
    link: "https://accessdata.com/products-services/forensic-toolkit-ftk/ftkimager",
    type: "Tool",
  },
];

export default function ForensicsPage() {
  return (
    <ResourcePage
      title="Digital Forensics Resources"
      description="Tools, guides, and materials for digital investigations and forensic analysis"
      resources={forensicsResources}
      category="forensics"
    />
  );
}
