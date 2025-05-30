"use client";

import { CustomMotion } from "@/components/animations/custom-motion";
import { SignUpForm } from "@/components/auth/signup-form";

export default function SignUp() {
  return (
    <CustomMotion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <SignUpForm />
    </CustomMotion.div>
  );
}
