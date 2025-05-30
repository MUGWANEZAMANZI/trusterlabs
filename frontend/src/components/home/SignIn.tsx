"use client";

import { CustomMotion } from "@/components/animations/custom-motion";
import { SignInForm } from "@/components/auth/signin-form";

export default function SignIn() {
  return (
    <CustomMotion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <SignInForm />
    </CustomMotion.div>
  );
}
