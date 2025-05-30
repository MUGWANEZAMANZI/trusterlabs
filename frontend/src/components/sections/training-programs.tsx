"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const trainingPrograms = [
  {
    id: "executive",
    title: "Executive Training",
    description:
      "Strategic cybersecurity leadership programs for C-level executives and decision-makers.",
    features: [
      "Cyber risk management",
      "Security governance",
      "Incident response planning",
      "Compliance frameworks",
    ],
  },
  {
    id: "people",
    title: "People Training",
    description:
      "Comprehensive security awareness programs for all employees to build human firewalls.",
    features: [
      "Phishing awareness",
      "Password security",
      "Social engineering defense",
      "Data protection best practices",
    ],
  },
  {
    id: "it",
    title: "IT Professionals",
    description:
      "Advanced technical training for IT staff to secure networks and systems effectively.",
    features: [
      "Penetration testing",
      "Network defense",
      "Malware analysis",
      "Secure coding practices",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function TrainingProgramsSection() {
  return (
    <section className="py-20 bg-blue-50">
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
            Our Training Programs
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-blue-800 max-w-3xl mx-auto"
          >
            Specialized cybersecurity training tailored for different roles and
            expertise levels
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="executive" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-blue-100">
              {trainingPrograms.map((program) => (
                <TabsTrigger
                  key={program.id}
                  value={program.id}
                  className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  {program.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {trainingPrograms.map((program) => (
              <TabsContent key={program.id} value={program.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl text-blue-900">
                        {program.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-6">{program.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {program.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-yellow-500 mt-1">✓</span>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
