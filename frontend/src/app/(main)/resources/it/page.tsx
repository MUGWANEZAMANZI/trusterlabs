import { ResourcePage } from "@/components/resources/resource-page";

const itResources = [
  {
    title: "ITIL Foundation",
    description: "IT service management best practices",
    link: "https://www.axelos.com/best-practice-solutions/itil",
    type: "Framework",
  },
  {
    title: "Red Hat Enterprise Linux",
    description: "Enterprise Linux documentation and resources",
    link: "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux",
    type: "Platform",
  },
  {
    title: "Microsoft Learn",
    description: "IT infrastructure training from Microsoft",
    link: "https://learn.microsoft.com/en-us/training/",
    type: "Training",
  },
  {
    title: "VMware Documentation",
    description: "Virtualization and cloud infrastructure resources",
    link: "https://docs.vmware.com/",
    type: "Documentation",
  },
  {
    title: "AWS Architecture Center",
    description: "Cloud infrastructure best practices",
    link: "https://aws.amazon.com/architecture/",
    type: "Cloud",
  },
];

export default function ITInfrastructurePage() {
  return (
    <ResourcePage
      title="IT Infrastructure Guides"
      description="Comprehensive resources for designing, implementing, and managing IT infrastructure"
      resources={itResources}
      category="it"
    />
  );
}
