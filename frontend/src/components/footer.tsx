"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Press", href: "/press" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Whitepapers", href: "/whitepapers" },
      { name: "Webinars", href: "/webinars" },
      { name: "Events", href: "/events" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
];

const socialLinks = [
  { icon: <Facebook size={20} />, href: "https://facebook.com" },
  { icon: <Twitter size={20} />, href: "https://twitter.com" },
  { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
  { icon: <Github size={20} />, href: "https://github.com" },
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

export function AnimatedFooter() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-blue-900 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              TRUSTER <span className="text-yellow-400">LABS</span>
            </h3>
            <p className="mb-4 text-blue-200">
              Fortify. Empower. Defend. Cutting-edge cybersecurity training and
              solutions for a safer digital world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: "#facc15" }}
                  className="text-blue-200 hover:text-yellow-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((column, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={link.href}
                      className="text-blue-200 hover:text-yellow-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300"
        >
          <p>© {new Date().getFullYear()} TRUSTER LABS. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
