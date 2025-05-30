"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";

const missionVisionVariants = {
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

const flipVariants = {
  initial: { rotateY: 0 },
  flipped: { rotateY: 180 },
};

const contentVariants = {
  initial: { opacity: 1 },
  flipped: { opacity: 0 },
};

const backVariants = {
  initial: { opacity: 0, rotateY: 180 },
  flipped: { opacity: 1, rotateY: 360 },
};

export function MissionVisionSection() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={missionVisionVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-blue-900 mb-4"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-blue-800 max-w-3xl mx-auto"
          >
            Driving innovation in cybersecurity education and defense
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            animate={flipped ? "flipped" : "initial"}
            variants={flipVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setFlipped(!flipped)}
            className="cursor-pointer perspective-1000 h-96"
          >
            <div className="relative w-full h-full preserve-3d">
              {/* Front of the card */}
              <motion.div
                variants={contentVariants}
                className="absolute w-full h-full backface-hidden"
              >
                <Card className="h-full bg-blue-900 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl text-yellow-400">
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      To empower individuals and organizations with cutting-edge
                      cybersecurity knowledge and practical skills through
                      innovative training programs and real-world simulations.
                    </p>
                    <p className="mt-4 text-blue-200">
                      Click to flip and see our vision
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Back of the card */}
              <motion.div
                variants={backVariants}
                className="absolute w-full h-full backface-hidden"
              >
                <Card className="h-full bg-yellow-400 text-blue-900">
                  <CardHeader>
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      To be the global leader in cybersecurity education,
                      creating a safer digital world by developing the next
                      generation of cyber defenders and innovative security
                      solutions.
                    </p>
                    <p className="mt-4 text-blue-800">
                      Click to flip back to mission
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="h-96 overflow-hidden rounded-lg"
          >
            <Image
              src="/images/cyber.jpeg"
              alt="Cybersecurity team working"
              className="w-full h-full object-cover"
              width={200}
              height={200}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
