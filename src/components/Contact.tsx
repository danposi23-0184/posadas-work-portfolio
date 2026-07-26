"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { personalInfo } from "@/data/portfolio";
import { transitionEasing } from "@/lib/utils";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
  {
    label: "Resume",
    href: personalInfo.resumeUrl,
    icon: FileText,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle>Contact</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: transitionEasing }}
          className="flex flex-wrap gap-6"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={
                  link.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary hover:text-primary"
              >
                <Icon size={18} />
                {link.label}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
