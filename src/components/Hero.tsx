"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { personalInfo, heroParagraph } from "@/data/portfolio";
import { transitionEasing } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: transitionEasing },
  },
};

const headshotVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: transitionEasing },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center px-6">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 pt-24 md:grid-cols-2 md:items-center md:pt-0">
        {/* Left: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-4 space-y-1">
            {personalInfo.titles.map((title) => (
              <p
                key={title}
                className="text-lg text-secondary sm:text-xl"
              >
                {title}
              </p>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-md leading-relaxed text-secondary"
          >
            {heroParagraph}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 rounded bg-primary px-5 py-2.5 text-sm font-medium text-background transition-all duration-200 hover:bg-primary/90"
            >
              View Projects
              <ArrowDown size={16} />
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-border px-5 py-2.5 text-sm font-medium text-primary transition-all duration-200 hover:border-secondary hover:bg-white/5"
            >
              Download Resume
              <Download size={16} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Headshot */}
        <motion.div
          variants={headshotVariants}
          initial="hidden"
          animate="visible"
          className="hidden justify-center md:flex"
        >
          <div className="relative h-[360px] w-[360px] overflow-hidden rounded-full border border-border bg-surface lg:h-[420px] lg:w-[420px]">
            <img
              src="/posadas-work-portfolio/images/Daniel-photo.png"
              alt={`${personalInfo.name} portrait`}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
