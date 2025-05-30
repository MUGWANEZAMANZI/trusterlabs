"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const threats = [
  {
    id: 1,
    title: "Ransomware Attacks",
    description:
      "Latest techniques used by ransomware groups to bypass security measures.",
    trend: "Increasing",
  },
  {
    id: 2,
    title: "IoT Vulnerabilities",
    description:
      "Exploitation of insecure IoT devices for network infiltration.",
    trend: "Stable",
  },
  {
    id: 3,
    title: "Supply Chain Attacks",
    description:
      "Targeting software dependencies to compromise multiple organizations.",
    trend: "Rising",
  },
  {
    id: 4,
    title: "Zero-Day Exploits",
    description: "Previously unknown vulnerabilities being actively exploited.",
    trend: "Increasing",
  },
];

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

export function ThreatAnalysisSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-blue-900 mb-4"
          >
            Global Threat Analysis
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-blue-800 max-w-3xl mx-auto"
          >
            Real-time monitoring and analysis of emerging cybersecurity threats
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {threats.map((threat) => (
            <motion.div
              key={threat.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    {threat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-blue-800">{threat.description}</p>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-blue-600">
                      Trend:
                    </span>
                    <span
                      className={`ml-2 px-2 py-1 rounded text-xs font-bold ${
                        threat.trend === "Increasing"
                          ? "bg-red-100 text-red-800"
                          : threat.trend === "Rising"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {threat.trend}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
