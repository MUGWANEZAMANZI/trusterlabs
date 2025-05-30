"use client";

import { AnimatedHeroSection } from "@/components/animated-hero-section";
import Projects from "@/components/sections/Projects";
import { PortfolioSection } from "@/components/sections/portfolio";
import { motion } from "framer-motion";

export default function ProjectsComponent() {
  return (
    <>
      <AnimatedHeroSection
        title="Our Projects"
        description="Innovative cybersecurity solutions developed by our team"
        backgroundImage="/images/projects-hero.jpeg"
      />
      <PortfolioSection />
      <Projects />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-blue-50"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-3xl mx-auto">
            Let&apos;s collaborate on creating secure solutions for your
            organization
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-all hover:scale-105">
            Contact Our Team
          </button>
        </div>
      </motion.div>
    </>
  );
}
