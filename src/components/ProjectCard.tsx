"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { ProjectItem } from "@/data/portfolio";
import { transitionEasing } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: transitionEasing,
      }}
      className="group flex flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:shadow-lg hover:shadow-black/20 sm:p-8"
    >
      <h3 className="text-lg font-medium text-primary">{project.title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-secondary">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded bg-background px-2.5 py-1 text-xs text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-5 flex gap-4 border-t border-border pt-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors duration-200 hover:text-primary"
          >
            <Github size={16} />
            Code
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors duration-200 hover:text-accent/80"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}
