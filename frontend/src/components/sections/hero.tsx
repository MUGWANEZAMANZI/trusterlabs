"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ParticleAnimation } from "@/components/animations/particles";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const heroItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950"
    >
      <ParticleAnimation />

      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-blue-950 opacity-80 z-10"></div>

            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <iframe
              className={`w-full h-full object-cover opacity-70 scale-150 transition-opacity duration-700 ${
                iframeLoaded ? "opacity-70" : "opacity-0"
              }`}
              src="https://www.youtube.com/embed/uPIJkkmpohs?si=nF3_oU8dIfAsMzn9&autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=uPIJkkmpohs"
              title="Background Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIframeLoaded(true)}
              onError={() => setVideoError(true)}
            ></iframe>
          </div>
        ) : (
          // Fallback if video fails to load
          <div className="w-full h-full bg-blue-950 opacity-50"></div>
        )}
      </div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={heroVariants}
        className="container mx-auto px-4 z-10 text-center"
      >
        <motion.div variants={heroItem}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="text-yellow-400">TRUSTER</span>LABS
          </h1>
        </motion.div>

        <motion.p
          variants={heroItem}
          className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto"
        >
          <span className="font-bold text-white">
            Fortify. Empower. Defend.
          </span>
          <br /> Advanced cybersecurity training and solutions
        </motion.p>

        <motion.div variants={heroItem} className="flex gap-4 justify-center">
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold"
          >
            Explore Programs
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </motion.div>

        <motion.div
          variants={heroItem}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
