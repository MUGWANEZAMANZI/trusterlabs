"use client";

import { CustomMotion } from "@/components/animations/custom-motion";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";

export default function ForgotPassword() {
  return (
    <CustomMotion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <ForgotPasswordForm />
    </CustomMotion.div>
  );
}
