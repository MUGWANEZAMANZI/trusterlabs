"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Particle = ({
  x,
  y,
  size,
  delay,
  dimensions,
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
  dimensions: { width: number; height: number };
}) => {
  const { width, height } = dimensions;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        x: [x, x + (Math.random() - 0.5) * width],
        y: [y, y + (Math.random() - 0.5) * height],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 5 + Math.random() * 10,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "#facc15",
      }}
    />
  );
};

export function ParticleAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    size: number;
    delay: number;
  }> | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        if (containerRef.current) {
          setDimensions({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
          });
        }
      };

      updateDimensions();

      // Generate particles only after we have dimensions
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          x: Math.random() * containerRef.current.offsetWidth,
          y: Math.random() * containerRef.current.offsetHeight,
          size: 2 + Math.random() * 3,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);

      const handleResize = () => {
        updateDimensions();
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (!particles) {
    return (
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {particles.map((particle, index) => (
        <Particle key={index} dimensions={dimensions} {...particle} />
      ))}
    </div>
  );
}
