"use client";

import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mb-14"
    >
      <h2 className="text-3xl font-medium leading-tight tracking-tight text-primary sm:text-4xl">
        {children}
      </h2>
      <div className="mt-4 h-px w-10 bg-accent" />
    </motion.div>
  );
}
