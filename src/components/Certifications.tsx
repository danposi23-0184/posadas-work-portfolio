"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { certifications } from "@/data/portfolio";
import { transitionEasing } from "@/lib/utils";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle>Certifications</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: transitionEasing,
              }}
              className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5"
            >
              <Award size={20} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <h3 className="text-sm font-medium text-primary">
                  {cert.name}
                </h3>
                <p className="mt-0.5 text-xs text-accent">{cert.issuer}</p>
                <span className="mt-1 block text-xs text-secondary">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
