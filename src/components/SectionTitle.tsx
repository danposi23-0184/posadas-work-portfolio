"use client";

import { motion } from "framer-motion";
import { transitionEasing } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: transitionEasing }}
      className="mb-12"
    >
      <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
        {children}
      </h2>
      <div className="mt-3 h-0.5 w-10 bg-accent" />
    </motion.div>
  );
}
