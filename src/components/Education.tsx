"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { education } from "@/data/portfolio";
import { transitionEasing } from "@/lib/utils";

export default function Education() {
  return (
    <section id="education" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-10">
          {education.map((item, index) => (
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
              className="relative pl-6"
            >
              <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-accent" />
              <h3 className="text-lg font-medium tracking-tight text-primary">
                {item.degree}
              </h3>
              <p className="mt-0.5 text-sm font-normal text-accent">
                {item.school}
              </p>
              <span className="mt-1 block text-xs text-secondary">
                {item.dates}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
