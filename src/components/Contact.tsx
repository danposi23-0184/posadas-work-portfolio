"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { personalInfo } from "@/data/portfolio";
import { sectionVariants } from "@/lib/utils";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    showArrow: false,
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: Github,
    showArrow: true,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin,
    showArrow: true,
  },
  {
    label: "Resume",
    href: personalInfo.resumeUrl,
    icon: FileText,
    showArrow: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle>Contact</SectionTitle>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap gap-4"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={
                  link.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group inline-flex items-center gap-2.5 rounded-xl border border-border bg-surface px-5 py-3 text-sm text-secondary shadow-sm transition-all duration-200 hover:border-secondary hover:bg-white/[0.02] hover:text-primary hover:shadow-md hover:shadow-black/20"
              >
                <Icon size={18} />
                <span>{link.label}</span>
                {link.showArrow && (
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                )}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
