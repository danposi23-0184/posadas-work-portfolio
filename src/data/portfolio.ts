export interface ExperienceItem {
  title: string;
  organization: string;
  dates: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  demoUrl: string | null;
}

export interface EducationItem {
  degree: string;
  school: string;
  dates: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

export const personalInfo = {
  name: "Daniel Posadas",
  initials: "DP",
  titles: [
    "Customer Support Specialist",
    "Content Editor",
  ] as string[],
  email: "dposadas003@gmail.com",
  github: "https://github.com/danposi23-0184",
  linkedin: "https://www.linkedin.com/in/daniel-posadas/",
  resumeUrl: "/posadas-work-portfolio/Daniel_Posadas_Resume.pdf",
};

export const heroParagraph = `Customer support specialist and content editor who builds practical software. Background in troubleshooting, editing, and administrative work means clear communication and strong problem-solving skills — applied to every project.`;

export const aboutParagraph = `Daniel Posadas is a Computer Science student and support professional based in the Philippines. He builds practical, maintainable software and adapts quickly to new tools and technologies. His experience spans technical support, freelance web development, content editing, and administrative roles — giving him a broad perspective on how technology serves real people. He values clean interfaces, straightforward communication, and solutions that actually work.`;

export const experience: ExperienceItem[] = [
  {
    title: "News & Literary Editor",
    organization: "The Phoenix — City College of Angeles",
    dates: "Aug 2024 — Present",
    description:
      "Edit and manage content for the official college publication. Coordinate with writers, review submissions, and ensure quality and consistency across published pieces. Develop workflows for content production and deadlines.",
  },
  {
    title: "Freelance Video Editor",
    organization: "Self-Employed",
    dates: "Oct 2023 — Feb 2026",
    description:
      "Edited video content for clients across multiple projects. Managed timelines, delivered polished cuts, and communicated directly with clients to meet creative and technical requirements.",
  },
  {
    title: "Lead Generation / Growth Support Assistant",
    organization: "Remote Contract",
    dates: "Mar 2026 — May 2026",
    description:
      "Supported lead generation and growth operations. Conducted research, organized data, and assisted with outreach workflows to support business development goals.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "M-CARE OB-GYN Clinic Management System",
    description:
      "A clinic management system built for OB-GYN practices. Handles patient records, appointment scheduling, billing, and analytics. Designed to streamline administrative workflows and improve patient care coordination.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl: null,
    demoUrl: null,
  },
  {
    title: "InternConnect",
    description:
      "An internship management platform connecting students with organizations. Features application tracking, document submission, and progress monitoring for both interns and coordinators.",
    technologies: ["PHP", "Bootstrap", "HTML", "CSS", "JavaScript"],
    githubUrl: null,
    demoUrl: null,
  },
  {
    title: "Portfolio Website",
    description:
      "A premium personal portfolio built from scratch. Emphasizes clean typography, restrained design, and thoughtful interactions. Demonstrates frontend engineering and design principles.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/danposi23-0184/posadas-work-portfolio",
    demoUrl: "https://danposi23-0184.github.io/posadas-work-portfolio",
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  Frontend: ["Responsive Design", "Bootstrap", "Figma", "Canva"],
  Backend: ["MySQL", "PHP"],
  Tools: ["Git & GitHub", "Linux", "Adobe Creative Cloud", "Microsoft Office", "Google Workspace"],
  Support: ["Technical Troubleshooting", "Customer Support", "Written Communication", "Data Entry", "Time Management", "Team Collaboration"],
};

export const education: EducationItem[] = [
  {
    degree: "B.S. Computer Science (3rd Year)",
    school: "City College of Angeles",
    dates: "Aug 2023 — Present",
  },
];

export const certifications: CertificationItem[] = [
  {
    name: "IT Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2024",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
