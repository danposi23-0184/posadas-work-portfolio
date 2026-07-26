"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { experience } from "@/data/portfolio";
import { transitionEasing } from "@/lib/utils";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 h-full w-px bg-border md:left-8" />

          <div className="space-y-12">
            {experience.map((item, index) => (
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
                className="relative pl-6 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-[-4px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent md:left-[26px]" />

                <div>
                  <h3 className="text-lg font-medium tracking-tight text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-normal text-accent">
                    {item.organization}
                  </p>
                  <span className="mt-1 block text-xs text-secondary">
                    {item.dates}
                  </span>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
