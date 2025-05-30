"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

const historyItems = [
  {
    year: "2018",
    title: "Company Founded",
    description:
      "TRUSTER LABS was founded by Mr. Dominique HARELIMANA and his students",
  },
  {
    year: "2019",
    title: "African Project Breakthrough",
    description: "Identified need for practical cyber training platform",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description: "Launched services in 3 new continents",
  },
  {
    year: "2022",
    title: "TRUSTER LABS Launch",
    description: "Released groundbreaking real-time threat analysis product",
  },
];

export function HistorySection() {
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
            Our History
          </motion.h2>
          <motion.p
            variants={textVariant(0.2)}
            className="text-lg text-blue-800 max-w-3xl mx-auto"
          >
            Milestones in our journey to secure the digital world
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2" />

          <motion.div
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-16"
          >
            {historyItems.map((item, index) => (
              <motion.div
                key={item.year}
                variants={fadeIn(index % 2 === 0 ? "left" : "right")}
                className={`relative flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center`}
              >
                <div className="w-1/2 px-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-blue-50 rounded-lg shadow-md"
                  >
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-800">{item.description}</p>
                  </motion.div>
                </div>
                <div className="w-1/2 px-8 flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold text-xl border-4 border-white shadow-lg">
                      {item.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
