"use client";

import { AnimatedHeroSection } from "@/components/animated-hero-section";
import { CompetitionsSection } from "@/components/sections/competitions";
import { motion } from "framer-motion";

export default function Competitions() {
  return (
    <>
      <AnimatedHeroSection
        title="Cybersecurity Competitions"
        description="Test your skills against the best in our challenging tournaments"
        backgroundImage="/images/competitions-hero.jpeg"
      />
      <CompetitionsSection />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Want to Compete?
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-3xl mx-auto">
            Register for our upcoming competitions and showcase your skills
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-all hover:scale-105">
            View Upcoming Events
          </button>
        </div>
      </motion.div>
    </>
  );
}
