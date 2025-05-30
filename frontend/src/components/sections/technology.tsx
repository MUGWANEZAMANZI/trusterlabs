"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlobeAnimation } from "@/components/animations/globe";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export function TechnologySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 space-y-6 order-2 lg:order-1"
          >
            <h2 className="text-4xl font-bold">
              <span className="text-yellow-400">TRUSTERShield</span> Technology
            </h2>
            <p className="text-lg text-blue-200">
              Our proprietary technology goes beyond traditional honeypots by
              continuously monitoring, logging, and analyzing every attack
              technique in real-time.
            </p>
            <p className="text-lg text-blue-200">
              With TRUSTERShield, security professionals are no longer
              &quot;fighting the last war&quot; - they&apos;re studying
              techniques being used by hackers only seconds ago.
            </p>
            <div className="flex gap-4">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">
                Learn More
              </Button>
              <Button variant="outline" className="text-white border-white">
                Case Studies
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative h-96 w-full">
              <GlobeAnimation />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="h-64 w-64 rounded-full border-2 border-yellow-400 border-opacity-30" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="h-80 w-80 rounded-full border-2 border-yellow-400 border-opacity-20" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
