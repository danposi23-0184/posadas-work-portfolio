"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  ChevronDown,
  ArrowUpRight,
  Menu,
  X,
  Briefcase,
  Code2,
  GraduationCap,
  Award,
  FileText,
  MonitorSmartphone,
  Palette,
  Database,
  Shield,
  Globe,
  Layers,
} from "lucide-react";

/* ───────────────────────────────────────
   Animation helpers
   ─────────────────────────────────────── */

function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const dir = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { y: 0, x: 28 },
    right: { y: 0, x: -28 },
  }[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dir }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/* ───────────────────────────────────────
   Section number label
   ─────────────────────────────────────── */

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <FadeIn>
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-xs tracking-widest text-[oklch(0.45_0_0)]">
          {number}
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
        <div className="flex-1 h-px bg-[oklch(0.18_0_0)]" />
      </div>
    </FadeIn>
  );
}

/* ───────────────────────────────────────
   NAVIGATION
   ─────────────────────────────────────── */

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.07_0_0/85%)] backdrop-blur-md border-b border-[oklch(0.15_0_0)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm tracking-wider text-[oklch(0.78_0.12_85)] hover:opacity-80 transition-opacity"
        >
          DP
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[oklch(0.62_0_0)] hover:text-[oklch(0.96_0_0)] accent-underline transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[oklch(0.78_0_0)] p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[oklch(0.07_0_0/95%)] backdrop-blur-md border-b border-[oklch(0.15_0_0)]"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[oklch(0.62_0_0)] hover:text-[oklch(0.96_0_0)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

/* ───────────────────────────────────────
   HERO
   ─────────────────────────────────────── */

function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

  // ← Replace this string with your actual image path, e.g. "/my-photo.jpg" in /public
  const profilePhoto = "true";

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Decorative large monogram (behind photo card) */}
      <div className="absolute right-[-2%] sm:right-[5%] top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-40">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-[clamp(6rem,18vw,16rem)] font-bold tracking-tighter leading-none text-[oklch(0.11_0_0)]"
          style={{
            WebkitTextStroke: "1px oklch(0.16_0_0)",
          }}
        >
          DP
        </motion.span>
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-24 pb-16 w-full"
      >
        {/* Two-column layout: text left, photo card right */}
        <div className="grid lg:grid-cols-[1fr_240px] xl:grid-cols-[1fr_280px] gap-10 lg:gap-14 items-center">
          {/* Left — text content */}
          <div>
            {/* Status badge + location */}
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="flex items-center gap-2.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="font-mono text-xs tracking-wider text-[oklch(0.55_0_0)]">
                  Available for work
                </span>
              </motion.div>
              <span className="text-[oklch(0.20_0_0)]">|</span>
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="font-mono text-xs tracking-wider text-[oklch(0.40_0_0)]"
              >
                Angeles City, Pampanga, Philippines
              </motion.p>
            </div>

            {/* Name */}
            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
              >
                Daniel{" "}
                <span className="text-[oklch(0.78_0.12_85)]">Posadas</span>
              </motion.h1>
            </div>

            {/* Role line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-[oklch(0.62_0_0)] max-w-lg mb-10 leading-relaxed"
            >
              Computer Science undergraduate from Philippines. I am a developer, content creator, and aspiring technical support professional.
            </motion.p>

            {/* Contact row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="mailto:dposadas003@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.78_0.12_85)] text-[oklch(0.1_0_0)] text-sm font-medium rounded-md hover:brightness-110 transition-all"
              >
                <Mail size={15} />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/daniel-posadas-4237582b9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[oklch(0.22_0_0)] text-[oklch(0.85_0_0)] text-sm font-medium rounded-md hover:border-[oklch(0.78_0.12_85/40%)] hover:text-[oklch(0.78_0.12_85)] transition-all"
              >
                <Linkedin size={15} />
                LinkedIn
                <ArrowUpRight size={12} className="opacity-50" />
              </a>
              <a
                href="tel:09917460621"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[oklch(0.22_0_0)] text-[oklch(0.85_0_0)] text-sm font-medium rounded-md hover:border-[oklch(0.78_0.12_85/40%)] hover:text-[oklch(0.78_0.12_85)] transition-all"
              >
                <Phone size={15} />
                0991 746 0621
              </a>
            </motion.div>
          </div>

          {/* Right — photo card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-[200px] xl:w-[240px] rounded-xl overflow-hidden border border-[oklch(0.20_0_0)] bg-[oklch(0.10_0_0)]">
              {/* Gold accent top bar */}
              <div className="h-1 bg-[oklch(0.78_0.12_85)]" />

              
                <Image
                  src="/images/picopme.jpeg"
                  alt="Daniel Posadas"
                  width={240}
                  height={320}
                  className="w-full aspect-[3/4] object-cover"
                />
              
                <div className="w-full aspect-[3/4] flex flex-col items-center justify-center gap-4 bg-[oklch(0.10_0_0)]">
                  <div className="w-20 h-20 rounded-full bg-[oklch(0.15_0_0)] border border-[oklch(0.22_0_0)] flex items-center justify-center">
                    <span className="text-3xl font-bold text-[oklch(0.78_0.12_85)] font-mono select-none">
                      DP
                    </span>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-sm font-medium text-[oklch(0.75_0_0)]">Daniel Posadas</p>
                    <p className="text-xs text-[oklch(0.45_0_0)] mt-1">Computer Science & Developer</p>
                  </div>
                  <div className="flex items-center gap-2 text-[oklch(0.40_0_0)]">
                    <MapPin size={10} />
                    <span className="font-mono text-[10px] tracking-wider">Pampanga, PH</span>
                  </div>
                </div>
              )

              {/* Bottom info bar */}
              <div className="px-4 py-3 border-t border-[oklch(0.16_0_0)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  <span className="text-[10px] font-mono text-[oklch(0.45_0_0)] tracking-wider">
                    OPEN TO WORK
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[oklch(0.30_0_0)]">
                  2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-[oklch(0.3_0_0)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ───────────────────────────────────────
   ABOUT
   ─────────────────────────────────────── */

function About() {
  const stats = [
    { value: "3+", label: "Years of Experience" },
    { value: "2", label: "Web Apps Shipped" },
    { value: "2", label: "Cisco Certifications" },
    { value: "7+", label: "Role Targets" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionLabel number="01" title="About" />

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20">
          <FadeIn delay={0.1}>
            <p className="text-base sm:text-lg text-[oklch(0.75_0_0)] leading-relaxed max-w-2xl">
              Computer Science student at City College of Angeles with hands-on
              experience that spans more than just code. I have spent time in
              customer support roles where I learned to listen before
              troubleshooting, in newsrooms where accuracy was non-negotiable, and
              in freelance video editing where deadlines were real and clients had
              opinions. That mix means I can write a PHP backend, debug a network
              issue, edit a promo video, and draft a press release — sometimes in
              the same afternoon.
            </p>
            <p className="mt-5 text-base sm:text-lg text-[oklch(0.75_0_0)] leading-relaxed max-w-2xl">
              I am looking for entry-level work in technical support, web
              development, content operations, or virtual assistance — anywhere
              the ability to learn fast and communicate clearly actually matters.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:pt-2">
            <div className="grid grid-cols-2 gap-6 lg:min-w-[280px]">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold text-[oklch(0.78_0.12_85)] font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[oklch(0.50_0_0)] mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────
   EXPERIENCE
   ─────────────────────────────────────── */

const experiences = [
  {
    role: "Growth Support & Lead Generation Assistant",
    company: "Freelance / Growth Team",
    period: "Mar 2026 – May 2026",
    bullets: [
      "Conducted targeted online research and organized prospect databases to drive client acquisition initiatives.",
      "Executed customer outreach campaigns using Microsoft Outlook and Mailchimp, maintaining clear communication records.",
      "Provided daily operational and administrative support to optimize team outreach workflows.",
    ],
  },
  {
    role: "Freelance Video Editor & Content Creator",
    company: "Self-Employed",
    period: "Oct 2023 – Feb 2026",
    bullets: [
      "Produced and edited promotional and social media video assets for diverse client specifications using Adobe Premiere Pro and Photoshop.",
      "Managed end-to-end client communication, asset organization, and iterative revisions while consistently meeting project deadlines.",
      "Designed custom graphics and visual supporting materials using Canva and Photoshop.",
    ],
  },
  {
    role: "News & Literary Editor",
    company: "The Phoenix (Official School Publication)",
    period: "Aug 2024 – May 2026",
    bullets: [
      "Edited and fact-checked news and literary articles for accuracy, clarity, and publication compliance.",
      "Coordinated cross-functionally with student writers and editorial staff to manage production schedules and hit strict print/digital deadlines.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionLabel number="02" title="Experience" />

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group relative py-8 border-t border-[oklch(0.15_0_0)] hover:border-[oklch(0.78_0.12_85/20%)] transition-colors">
                <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                  {/* Meta column */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-xs text-[oklch(0.45_0_0)]">
                      {exp.period}
                    </span>
                    <span className="text-sm text-[oklch(0.55_0_0)]">
                      {exp.company}
                    </span>
                  </div>

                  {/* Content column */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 group-hover:text-[oklch(0.78_0.12_85)] transition-colors">
                      {exp.role}
                    </h3>
                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-sm sm:text-base text-[oklch(0.65_0_0)] leading-relaxed"
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-[oklch(0.35_0_0)] shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-[oklch(0.15_0_0)]" />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────
   PROJECTS
   ─────────────────────────────────────── */

const projects = [
  {
    title: "M-CARE OB-GYN Clinic Management System",
    description:
      "Web-based clinic management system featuring patient medical record storage, appointment scheduling, user authentication, and administrative analytics with a responsive interface.",
    stack: ["PHP", "MySQL", "HTML5", "CSS3", "Bootstrap", "JavaScript"],
    icon: <MonitorSmartphone size={22} />,
  },
  {
    title: "InternConnect – Internship Management Platform",
    description:
      "Platform connecting students with prospective employers. Includes user authentication, application tracking, company-student matching algorithms, and automated report generation.",
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    icon: <Globe size={22} />,
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionLabel number="03" title="Projects" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="group relative h-full p-6 sm:p-8 rounded-lg border border-[oklch(0.15_0_0)] bg-[oklch(0.09_0_0)] hover:border-[oklch(0.78_0.12_85/25%)] hover:bg-[oklch(0.10_0.005_85)] transition-all duration-300">
                {/* Icon */}
                <div className="mb-5 text-[oklch(0.45_0_0)] group-hover:text-[oklch(0.78_0.12_85)] transition-colors">
                  {project.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-[oklch(0.78_0.12_85)] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[oklch(0.60_0_0)] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded border border-[oklch(0.18_0_0)] text-[oklch(0.55_0_0)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight
                    size={18}
                    className="text-[oklch(0.78_0.12_85)]"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────
   SKILLS
   ─────────────────────────────────────── */

const skillGroups = [
  {
    category: "Customer Support & Operations",
    icon: <Briefcase size={16} />,
    skills: [
      "Customer Communication",
      "Email Support",
      "Technical Troubleshooting",
      "Issue Documentation",
      "CRM Workflow",
      "Administrative Support",
      "Data Entry",
      "File Management",
    ],
  },
  {
    category: "Web Development & Technical",
    icon: <Code2 size={16} />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Bootstrap",
      "Responsive Design",
      "CRUD Operations",
      "Git",
      "GitHub",
    ],
  },
  {
    category: "Media, Design & Content",
    icon: <Palette size={16} />,
    skills: [
      "Adobe Premiere Pro",
      "Photoshop",
      "Illustrator",
      "Figma",
      "Canva",
      "Video Editing",
      "Motion Graphics",
      "Journalism",
      "Proofreading",
      "Fact-Checking",
    ],
  },
  {
    category: "Systems, Networking & Tools",
    icon: <Shield size={16} />,
    skills: [
      "Linux",
      "Windows",
      "Basic Networking",
      "Cisco CCNA Fundamentals",
      "Google Workspace",
      "Microsoft Office",
      "Microsoft Outlook",
      "Mailchimp",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionLabel number="04" title="Skills" />

        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
          {skillGroups.map((group, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="flex items-start gap-3 mb-4">
                <span className="mt-0.5 text-[oklch(0.45_0_0)]">{group.icon}</span>
                <h3 className="text-base font-semibold text-[oklch(0.85_0_0)]">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 ml-7">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill px-3 py-1.5 text-xs sm:text-sm rounded-md border border-[oklch(0.16_0_0)] text-[oklch(0.60_0_0)] cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────
   EDUCATION & CERTIFICATIONS
   ─────────────────────────────────────── */

function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionLabel number="05" title="Education" />

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Education */}
          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <GraduationCap
                    size={18}
                    className="mt-1 text-[oklch(0.45_0_0)]"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      City College of Angeles
                    </h3>
                    <p className="text-sm text-[oklch(0.55_0_0)]">
                      Bachelor of Science in Computer Science
                    </p>
                    <p className="font-mono text-xs text-[oklch(0.40_0_0)] mt-1">
                      Aug 2023 – Present
                    </p>
                  </div>
                </div>
                <div className="ml-7 mt-3">
                  <p className="text-xs font-mono text-[oklch(0.40_0_0)] mb-2">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Data Structures", "Algorithms", "Database Management", "Computer Networking", "Software Engineering"].map(
                      (c) => (
                        <span
                          key={c}
                          className="px-2 py-0.5 text-xs rounded border border-[oklch(0.15_0_0)] text-[oklch(0.50_0_0)]"
                        >
                          {c}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-[oklch(0.13_0_0)] pt-8">
                <div className="flex items-start gap-3">
                  <GraduationCap
                    size={18}
                    className="mt-1 text-[oklch(0.45_0_0)]"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      Gov. Rafael L. Lazatin Integrated School
                    </h3>
                    <p className="text-sm text-[oklch(0.55_0_0)]">
                      General Academic Strand (High School)
                    </p>
                    <p className="font-mono text-xs text-[oklch(0.40_0_0)] mt-1">
                      Aug 2021 – Jun 2023
                    </p>
                    <div className="mt-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded bg-[oklch(0.78_0.12_85/10%)] text-[oklch(0.78_0.12_85)] border border-[oklch(0.78_0.12_85/20%)]">
                        <Award size={12} />
                        Graduated With High Honors
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Certifications & Languages */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <Award size={18} className="mt-1 text-[oklch(0.45_0_0)]" />
                  <h3 className="text-lg font-semibold">Certifications</h3>
                </div>
                <div className="ml-7 space-y-3">
                  <div className="p-4 rounded-lg border border-[oklch(0.15_0_0)] bg-[oklch(0.08_0_0)]">
                    <p className="text-sm font-medium">
                      Cisco Networking Academy
                    </p>
                    <p className="text-xs text-[oklch(0.50_0_0)] mt-1">
                      IT Essentials
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-[oklch(0.15_0_0)] bg-[oklch(0.08_0_0)]">
                    <p className="text-sm font-medium">
                      Cisco Networking Academy
                    </p>
                    <p className="text-xs text-[oklch(0.50_0_0)] mt-1">
                      CCNAv7: Introduction to Networks
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="border-t border-[oklch(0.13_0_0)] pt-8">
                <div className="flex items-start gap-3 mb-4">
                  <Globe size={18} className="mt-1 text-[oklch(0.45_0_0)]" />
                  <h3 className="text-lg font-semibold">Languages</h3>
                </div>
                <div className="ml-7 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">English</span>
                    <span className="text-xs text-[oklch(0.50_0_0)]">
                      Professional Working
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[oklch(0.13_0_0)] overflow-hidden">
                    <div className="h-full w-[85%] rounded-full bg-[oklch(0.78_0.12_85/60%)]" />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm">Filipino</span>
                    <span className="text-xs text-[oklch(0.50_0_0)]">
                      Native / Bilingual
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[oklch(0.13_0_0)] overflow-hidden">
                    <div className="h-full w-full rounded-full bg-[oklch(0.78_0.12_85/60%)]" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────
   FOOTER
   ─────────────────────────────────────── */

function Footer() {
  return (
    <footer className="py-16 border-t border-[oklch(0.13_0_0)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid sm:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <p className="font-mono text-xs tracking-wider text-[oklch(0.78_0.12_85)] mb-3">
              06 — CONTACT
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Let&apos;s work together.
            </h2>
            <p className="text-sm text-[oklch(0.55_0_0)] max-w-md leading-relaxed">
              If you are looking for someone who can handle technical tasks, talk
              to customers without sounding like a robot, and actually meet
              deadlines — reach out.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href="mailto:dposadas003@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-[oklch(0.75_0_0)] hover:text-[oklch(0.78_0.12_85)] accent-underline transition-colors"
            >
              <Mail size={14} />
              dposadas003@gmail.com
            </a>
            <a
              href="tel:09917460621"
              className="inline-flex items-center gap-2 text-sm text-[oklch(0.75_0_0)] hover:text-[oklch(0.78_0.12_85)] accent-underline transition-colors"
            >
              <Phone size={14} />
              0991 746 0621
            </a>
            <a
              href="https://linkedin.com/in/daniel-posadas-4237582b9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[oklch(0.75_0_0)] hover:text-[oklch(0.78_0.12_85)] accent-underline transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-[oklch(0.75_0_0)] hover:text-[oklch(0.78_0.12_85)] accent-underline transition-colors"
            >
              <MapPin size={14} />
              Angeles City, Pampanga
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[oklch(0.10_0_0)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[oklch(0.30_0_0)]">
            Daniel Posadas
          </p>
          <p className="font-mono text-xs text-[oklch(0.30_0_0)]">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────────────────────
   PAGE
   ─────────────────────────────────────── */

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
