"use client";

import { AnimatedHeroSection } from "@/components/animated-hero-section";
import { TrainingProgramsSection } from "@/components/sections/training-programs";
import { motion } from "framer-motion";

export default function Programs() {
  return (
    <>
      <AnimatedHeroSection
        title="Our Training Programs"
        description="Specialized cybersecurity training tailored for different roles and expertise levels"
        backgroundImage="/images/programs-hero.jpeg"
      />
      <TrainingProgramsSection />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-blue-50"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Ready to Start Your Cybersecurity Journey?
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-3xl mx-auto">
            Join our programs today and gain the skills to defend against modern
            threats
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-all hover:scale-105">
            Enroll Now
          </button>
        </div>
      </motion.div>
    </>
  );
}
