"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Dominique HARELIMANA",
    role: "Founder & CEO",
    description: "Cybersecurity expert with 15+ years of experience",
    image: "/images/team/dominique.png",
  },
  {
    id: 2,
    name: "Audace MUGWANEZA MANZI",
    role: "Head Developer",
    description: "Lead architect of Truster Labs",
    image: "/assets/team/audace.jpg",
  },
  {
    id: 3,
    name: "Emmanuel SHYIRAMBERE",
    role: "Head Developer",
    description: "Lead architect of Truster Labs",
    image: "/images/team/emmanuel.png",
  },
];

export function TeamSection() {
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
            Our Team
          </motion.h2>
          <motion.p
            variants={textVariant(0.2)}
            className="text-lg text-blue-800 max-w-3xl mx-auto"
          >
            Cybersecurity experts dedicated to your protection
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeIn("up")}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-scale-down transition-transform duration-500 group-hover:scale-110"
                    width={500}
                    height={500}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-900">{member.name}</CardTitle>
                  <p className="text-yellow-500 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
