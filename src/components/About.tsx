"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { aboutParagraph } from "@/data/portfolio";
import { transitionEasing } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle>About</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: transitionEasing }}
          className="max-w-2xl"
        >
          <p className="leading-relaxed text-secondary">{aboutParagraph}</p>
        </motion.div>
      </div>
    </section>
  );
}
