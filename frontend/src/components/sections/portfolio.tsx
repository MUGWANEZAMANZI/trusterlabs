"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "Financial Sector Security",
    description: "Implemented advanced threat detection for major banks",
    tags: ["Threat Detection", "Fraud Prevention"],
    image: "/images/portfolio/finance.jpeg",
  },
  {
    id: 2,
    title: "Government Infrastructure",
    description: "Secured critical national infrastructure systems",
    tags: ["Critical Infrastructure", "National Security"],
    image: "/images/portfolio/government.jpeg",
  },
  {
    id: 3,
    title: "Healthcare Data Protection",
    description: "Protected sensitive patient data across hospital networks",
    tags: ["HIPAA Compliance", "Data Encryption"],
    image: "/images/portfolio/health.jpeg",
  },
];

export function PortfolioSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={textVariant(0.1)}
            className="text-4xl font-bold text-blue-900 mb-4"
          >
            Our Portfolio
          </motion.h2>
          <motion.p
            variants={textVariant(0.2)}
            className="text-lg text-blue-800 max-w-3xl mx-auto"
          >
            Trusted by leading organizations worldwide
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeIn("up")}
              className="group relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10" />
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                width={500}
                height={500}
              />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-blue-200 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-800/50 text-blue-100 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="secondary"
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900"
                >
                  View Case Study
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
