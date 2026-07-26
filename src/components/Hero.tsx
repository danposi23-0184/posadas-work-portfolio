"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { personalInfo, heroParagraph } from "@/data/portfolio";
import { heroContainerVariants, heroItemVariants, headshotVariants, transitionEasing } from "@/lib/utils";

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center px-6">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 pt-24 md:grid-cols-2 md:items-center md:pt-0">
        {/* Left: Text */}
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.h1
            variants={heroItemVariants}
            className="text-5xl font-medium leading-none tracking-tighter text-primary sm:text-6xl lg:text-7xl"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div variants={heroItemVariants} className="mt-5 space-y-1">
            {personalInfo.titles.map((title) => (
              <p
                key={title}
                className="text-lg font-light text-secondary sm:text-xl"
              >
                {title}
              </p>
            ))}
          </motion.div>

          <motion.p
            variants={heroItemVariants}
            className="mt-6 max-w-md text-base leading-relaxed text-secondary sm:text-lg"
          >
            {heroParagraph}
          </motion.p>

          <motion.div
            variants={heroItemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: transitionEasing }}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-background shadow-sm transition-shadow duration-200 hover:shadow-md hover:shadow-white/10"
            >
              View Projects
              <ArrowDown size={16} />
            </motion.button>
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: transitionEasing }}
              className="group inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-primary shadow-sm transition-all duration-200 hover:border-secondary hover:bg-white/[0.03] hover:shadow-md hover:shadow-black/20"
            >
              <span>Download Resume</span>
              <Download
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Headshot */}
        <motion.div
          variants={headshotVariants}
          initial="hidden"
          animate="visible"
          className="hidden justify-center md:flex"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-[360px] w-[360px] overflow-hidden rounded-full border border-border bg-surface lg:h-[420px] lg:w-[420px]"
          >
            <img
              src="/posadas-work-portfolio/images/Daniel-photo.png"
              alt={`${personalInfo.name} portrait`}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

