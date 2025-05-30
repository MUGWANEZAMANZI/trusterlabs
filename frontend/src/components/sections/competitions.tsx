"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

const competitions = [
  {
    id: 1,
    title: "Cyber Defense Challenge",
    date: "2025-11-15",
    prize: "RWF100,000",
    description:
      "Teams compete to defend simulated corporate networks against live attacks.",
  },
  {
    id: 2,
    title: "Ethical Hacking Tournament",
    date: "2025-12-10",
    prize: "RWF70,500",
    description:
      "Find vulnerabilities in provided systems and report them ethically.",
  },
  {
    id: 3,
    title: "CTF National Championship",
    date: "2026-01-20",
    prize: "RWF105,000",
    description:
      "Capture the flag competition with challenges ranging from crypto to forensics.",
  },
];

export function CompetitionsSection() {
  return (
    <section className="py-20 bg-blue-50">
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
            Cybersecurity Competitions
          </motion.h2>
          <motion.p
            variants={textVariant(0.2)}
            className="text-lg text-blue-800 max-w-3xl mx-auto"
          >
            Test your skills against the best in our challenging tournaments
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {competitions.map((competition) => (
            <motion.div key={competition.id} variants={fadeIn("up")}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    {competition.title}
                  </CardTitle>
                  <div className="text-yellow-500 font-bold">
                    Prize: {competition.prize}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-blue-800">
                    {competition.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-600">
                      Date: {new Date(competition.date).toLocaleDateString()}
                    </span>
                    <Button
                      variant="secondary"
                      className="bg-yellow-400 hover:bg-yellow-500 text-blue-900"
                    >
                      Register
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
