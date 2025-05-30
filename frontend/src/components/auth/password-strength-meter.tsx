"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PasswordStrengthMeterProps {
  password: string;
  className?: string;
}

export function PasswordStrengthMeter({
  password,
  className,
}: PasswordStrengthMeterProps) {
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState<string[]>([]);

  useEffect(() => {
    if (!password) {
      setStrength(0);
      setFeedback([]);
      return;
    }

    let score = 0;
    const newFeedback: string[] = [];

    // Length check
    if (password.length >= 8) score += 1;
    else newFeedback.push("At least 8 characters");

    // Uppercase check
    if (/[A-Z]/.test(password)) score += 1;
    else newFeedback.push("Uppercase letter");

    // Lowercase check
    if (/[a-z]/.test(password)) score += 1;
    else newFeedback.push("Lowercase letter");

    // Number check
    if (/\d/.test(password)) score += 1;
    else newFeedback.push("Number");

    // Special char check
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    else newFeedback.push("Special character");

    setStrength(score);
    setFeedback(newFeedback);
  }, [password]);

  const getStrengthColor = () => {
    if (strength <= 2) return "bg-red-500";
    if (strength === 3) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getStrengthText = () => {
    if (strength <= 2) return "Weak";
    if (strength === 3) return "Medium";
    return "Strong";
  };

  return (
    <div className={cn("mt-2", className)}>
      <div className="flex items-center mb-1">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(strength / 5) * 100}%` }}
            transition={{ duration: 0.3 }}
            className={cn("h-1.5 rounded-full", getStrengthColor())}
          />
        </div>
        <span className="ml-2 text-xs font-medium text-gray-700 dark:text-gray-300">
          {getStrengthText()}
        </span>
      </div>
      {feedback.length > 0 && (
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Needs: {feedback.join(", ")}
        </div>
      )}
    </div>
  );
}
