export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  achievements: string[];
  tech?: string[];
};

export type Project = {
  name: string;
  link?: string;
  description: string;
  tech?: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  location?: string;
};

export type Profile = {
  name: string;
  title: string;
  summary: string;
  location?: string;
  email?: string;
  phone?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  skills: string[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
};

// TODO: populate from the provided resume HTML; placeholder content for now.
export const profile: Profile = {
  name: "Vinit Singhania",
  title: "Principal Software Engineer • Full-Stack Developer",
  summary:
    "Full-stack engineer focused on scalable systems and product velocity across the MERN stack, with strong experience in fintech and data-driven platforms.",
  location: "Bengaluru, India",
  website: "",
  linkedin: "",
  github: "",
  email: "",
  phone: "",
  skills: [
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "CI/CD",
  ],
  experiences: [
    {
      company: "Kinara Capital",
      role: "Principal Software Engineer (Full-Stack)",
      period: "2023 — Present",
      location: "Bengaluru, IN",
      achievements: [
        "Lead development of loan origination and underwriting modules with React + Node.js.",
        "Optimized service performance and reliability for high-volume fintech workflows.",
      ],
      tech: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    },
  ],
  projects: [
    {
      name: "Portfolio Website",
      link: "/",
      description: "Personal portfolio built with React + Vite and TypeScript.",
      tech: ["React", "TypeScript", "Vite"],
    },
  ],
  education: [
    {
      school: "University",
      degree: "B.Tech. in Computer Science",
      period: "2014 — 2018",
      location: "",
    },
  ],
};
