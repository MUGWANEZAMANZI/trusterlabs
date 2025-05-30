"use client";

import { AnimatedHeroSection } from "@/components/animated-hero-section";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const resourceCategories = [
  {
    id: "cisco",
    title: "Cisco Networking",
    description: "Comprehensive resources for Cisco networking technologies",
    icon: "/icons/cisco.svg",
    color: "bg-blue-100 text-blue-800",
    link: "/resources/cisco",
  },
  {
    id: "cybera",
    title: "Cyber Security",
    description: "Fundamentals of cybersecurity and best practices",
    icon: "/icons/shield.svg",
    color: "bg-green-100 text-green-800",
    link: "/resources/cybera",
  },
  {
    id: "forensics",
    title: "Digital Forensics",
    description: "Tools and techniques for digital investigations",
    icon: "/icons/magnifying-glass.svg",
    color: "bg-purple-100 text-purple-800",
    link: "/resources/forensics",
  },
  {
    id: "it",
    title: "IT Infrastructure",
    description: "Guides for building secure IT infrastructure",
    icon: "/icons/server.svg",
    color: "bg-yellow-100 text-yellow-800",
    link: "/resources/it",
  },
  {
    id: "server",
    title: "Server Administration",
    description: "Tutorials for secure server management",
    icon: "/icons/cloud.svg",
    color: "bg-red-100 text-red-800",
    link: "/resources/server",
  },
  {
    id: "tr",
    title: "Threat Research",
    description: "Latest research papers on cybersecurity threats",
    icon: "/icons/document.svg",
    color: "bg-indigo-100 text-indigo-800",
    link: "/resources/tr",
  },
];

export default function Resources() {
  return (
    <>
      <AnimatedHeroSection
        title="Learning Resources"
        description="Access our curated collection of cybersecurity materials"
        backgroundImage="/images/resources-hero.jpeg"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="shadow shadow-black rounded-lg overflow-hidden group"
              >
                <Link
                  href={category.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="h-full p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all group-hover:border-blue-300">
                    <div
                      className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-4`}
                    >
                      <Image
                        src={category.icon}
                        alt={category.title}
                        className="w-6 h-6"
                        width={24}
                        height={24}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                      <span>Explore resources</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
