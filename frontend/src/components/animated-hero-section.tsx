"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { ParticleAnimation } from "@/components/animations/particles";
import { CustomMotion } from "./animations/custom-motion";

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

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

export function AnimatedHeroSection({
  title,
  description,
  backgroundImage,
}: HeroSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  // Default background images for different pages
  const pageBackgrounds: Record<string, string> = {
    about: "/images/about-hero.jpeg",
    programs: "/images/programs-hero.jpeg",
    competitions: "/images/competitions-hero.jpeg",
    projects: "/images/projects-hero.jpeg",
    resources: "/images/resources-hero.jpeg",
    contact: "/images/contact-hero.jpeg",
    default: "/images/default-hero.jpeg",
  };

  // Determine which background to use
  const bgImage =
    backgroundImage ||
    pageBackgrounds[title.toLowerCase().split(" ")[0]] ||
    pageBackgrounds.default;

  console.log("bgImage", bgImage);

  return (
    <section
      ref={ref}
      className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950"
    >
      <ParticleAnimation />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-950 opacity-70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            filter: "blur(2px)",
          }}
        ></div>
      </div>

      <CustomMotion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={heroVariants}
        className="container mx-auto px-4 z-10 text-center"
      >
        <CustomMotion.div variants={heroItem}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
        </CustomMotion.div>

        <CustomMotion.p
          variants={heroItem}
          className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto"
        >
          {description}
        </CustomMotion.p>

        <CustomMotion.div
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
        </CustomMotion.div>
      </CustomMotion.div>
    </section>
  );
}
