import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, EyeOff, Cpu } from "lucide-react";

const projects = [
  {
    title: "Kagoma Sanitizer",
    description:
      "A dual-layer cybersecurity engine that ensures data leaving your company is free from hidden metadata, and incoming files are scanned for steganographic malware. Cross-platform support for Windows and Linux.",
    icon: EyeOff,
    tag: "Sanitization & Stego Defense",
  },
  {
    title: "Autonomous Threat Detection AI",
    description:
      "Continuously scans system activity and network traffic using machine learning. Identifies threats in real-time and adapts to novel attack vectors automatically.",
    icon: ShieldCheck,
    tag: "Threat Detection",
  },
  {
    title: "Unified Security Core",
    description:
      "Handles encrypted communication, telemetry, and secure event processing across all TrusterLabs tools. Designed to operate on both Windows and Linux with minimal overhead.",
    icon: Cpu,
    tag: "Core Engine",
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-2 text-center text-slate-800">TrusterLabs Projects</h1>
      <p className="text-center text-slate-500 mb-6 italic">A project solution by TrusterLabs</p>

      {/* Demo Video */}
      <div className="mb-12 flex justify-center">
        <video
          src="/assets/projects/demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl shadow-lg w-full max-w-4xl"
        />
      </div>

      <p className="text-center text-slate-600 mb-12">
        Explore our advanced cybersecurity tools designed for proactive defense, privacy, and secure
        communication. Kagoma Sanitizer leads the pack by defending against both traditional and
        covert file-based threats before they ever reach your systems.
      </p>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="rounded-2xl shadow-md hover:shadow-xl transition">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <project.icon className="w-8 h-8 text-blue-600" />
                <h2 className="text-xl font-semibold text-slate-800">{project.title}</h2>
              </div>
              <p className="text-slate-600">{project.description}</p>
              <span className="inline-block mt-4 text-sm text-blue-500 font-medium">
                #{project.tag}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
