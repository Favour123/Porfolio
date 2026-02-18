"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export default function Contact() {
  return (
    <div className="space-y-12 max-w-4xl">
      {/* Header */}
      <motion.section {...fadeInUp}>
        <div className="relative inline-block">
          <h1 className="text-4xl font-bold text-(--color-text-primary)">
            Contact
          </h1>
          <div className="h-1 w-20 gradient-purple rounded-full mt-3" />
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section {...fadeInUp}>
        <ContactForm />
      </motion.section>
    </div>
  );
}