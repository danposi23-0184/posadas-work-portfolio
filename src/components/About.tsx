"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { personalInfo, aboutParagraph } from "@/data/portfolio";
import { sectionVariants, transitionEasing } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle>About</SectionTitle>

        <div className="grid gap-12 md:grid-cols-5 md:items-center md:gap-16">
          {/* Left: Portrait card */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-center md:col-span-2"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: transitionEasing }}
              className="group relative"
            >
              {/* Glow accent behind card */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Portrait card */}
              <div className="relative h-[320px] w-[320px] overflow-hidden rounded-3xl border border-border bg-surface shadow-lg shadow-black/20 transition-all duration-500 sm:h-[360px] sm:w-[360px]">
                <img
                  src="/posadas-work-portfolio/images/Daniel-photo.png"
                  alt={`${personalInfo.name} portrait`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient overlay at bottom */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />

                {/* Name badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                    {personalInfo.name}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-3"
          >
            <div className="space-y-5">
              {/* Intro line */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: transitionEasing, delay: 0.1 }}
                className="text-base leading-relaxed text-secondary sm:text-lg"
              >
                {aboutParagraph}
              </motion.p>

              {/* Quick details */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: transitionEasing, delay: 0.2 }}
                className="flex flex-wrap gap-x-8 gap-y-3 pt-2"
              >
                <div className="inline-flex items-center gap-2 text-sm text-secondary">
                  <MapPin size={15} className="text-accent" />
                  Philippines
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-secondary">
                  <GraduationCap size={15} className="text-accent" />
                  B.S. Computer Science — City College of Angeles
                </div>
              </motion.div>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: transitionEasing, delay: 0.3 }}
                className="origin-left"
              >
                <div className="mt-6 h-px w-16 bg-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
