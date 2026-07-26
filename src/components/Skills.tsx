"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skills } from "@/data/portfolio";
import { transitionEasing } from "@/lib/utils";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: transitionEasing,
              }}
            >
              <h3 className="text-xs font-medium tracking-[0.12em] text-accent uppercase">
                {category}
              </h3>
              <ul className="mt-4 space-y-1.5">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-secondary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
