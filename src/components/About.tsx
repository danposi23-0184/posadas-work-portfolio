"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { aboutParagraph } from "@/data/portfolio";
import { sectionVariants } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle>About</SectionTitle>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <p className="text-base leading-relaxed text-secondary sm:text-lg">
            {aboutParagraph}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
