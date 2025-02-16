export const NAVIGATION = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "4",
        isSelectable: true,
        name: "projects",
        children: [
          {
            id: "5",
            isSelectable: false,
            name: "main.tsx",
          },
          {
            id: "7",
            isSelectable: false,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];

export const NETWORKING_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/imesh97/",
    tooltip: "GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/imesh-nimsitha/",
    tooltip: "LinkedIn",
  },
  {
    name: "Email",
    href: "mailto:imesh.nimsitha@gmail.com",
    tooltip: "Email",
  },
  {
    name: "Resume",
    href: "/resume.pdf",
    tooltip: "Resume",
  },
];

export const PROJECTS = [
  {
    title: "bankrpc - distributed banking",
    description:
      "A distributed banking web app with data consistency and concurrent transactions.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["Python", "Streamlit", "gRPC", "Redis", "AWS EC2", "Docker"],
    demoUrl: "http://ec2-3-144-116-12.us-east-2.compute.amazonaws.com:8501/",
    githubUrl: "https://github.com/imesh97/bankrpc",
  },
  {
    title: "affinity.ai - crm",
    description:
      "A lead generation & automation CRM for car dealerships, powered by AI.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    demoUrl: "https://affinity.nimsitha.com",
    githubUrl: "https://github.com/imesh97/affinity",
  },
  {
    title: "nimdb - database server",
    description:
      "A nimble in-memory database server for caching and session storage.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    technologies: [
      "C",
      "Trees",
      "Hashing",
      "Bloom Filters",
      "Socket Programming",
    ],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
  {
    title: "raphael - ai image editor",
    description:
      "A SaaS web app that transforms images using external AI models.",
    image: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d",
    technologies: [
      "Next.js",
      "Cloudinary",
      "Stripe",
      "MongoDB",
      "Clerk",
      "Zod",
    ],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com/imesh97/raphael-ai",
  },
  {
    title: "kylian - ai soccer analysis",
    description:
      "A soccer analysis system for tracking and predicting player movement.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["Python", "YOLOv8", "OpenCV", "NumPy", "Colab"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com/imesh97/kylian",
  },
];

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  achievements: string[];
  logo: string;
  site: string;
}

export const EXPERIENCES: Experience[] = [
  {
    company: "Affinity Solutions",
    position: "Software Developer",
    period: "Dec. 2024 - Present",
    location: "Remote",
    achievements: [
      "Led development of AI-powered CRM prototype for automotive dealerships, focusing on lead management and sales pipeline automation",
      "Built responsive Next.js landing page to showcase platform features, resulting in 50% increase in user engagement",
      "Collaborated with key stakeholder to define technical requirements and architecture for specialized automotive CRM solution",
      "Implemented core prototype features including lead scoring algorithms and customer journey mapping",
    ],
    logo: "/assets/logo_affinity.svg",
    site: "https://affinity.nimsitha.com",
  },
  {
    company: "SymptomStream",
    position: "Chief Technology Officer",
    period: "July 2024 - Present",
    location: "Hamilton, CA",
    achievements: [
      "Led development of AI-powered software for optimizing hospital triage processes to enhance ER decision-making and operational efficiency",
      "Collaborated with 10+ stakeholders to gather technical requirements, refine architecture, and ensure alignment with business objectives",
      "Directed project toward prototype phase by defining technical milestones and ensuring timely delivery of development goals",
    ],
    logo: "/assets/logo_symptomstream.png",
    site: "https://symptomstream.ca",
  },
  {
    company: "ANVIROS Ventures Inc.",
    position: "Web Developer",
    period: "Jan. 2022 - Jan. 2023",
    location: "Brampton, CA",
    achievements: [
      "Built a commercial website for promoting Amazon products using WordPress, resulting in 200,000+ page hits",
      "Developed a lead capture page for collecting newsletter subscriptions using TypeScript, Next.js and Chakra UI",
      "Implemented API routes and serverless functions for subscription form emails, generating 25+ customer conversions",
      "Administered and configured a cPanel server which hosts over 10 sites, improving overall disk usage by 70%",
    ],
    logo: "/assets/logo_anviros.png",
    site: "https://anviroscreations.com",
  },
];

export interface Skill {
  name: string;
  category: string;
  icon?: string;
  img?: string;
}

export const SKILLS = [
  {
    name: "HTML",
    category: "Frontend",
    icon: "html5",
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: "css3",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "react",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: "bootstrap",
  },
  {
    name: "Tailwind",
    category: "Frontend",
    icon: "tailwindcss",
  },
  {
    name: "Python",
    category: "Backend",
    icon: "python",
  },
  {
    name: "Java",
    category: "Backend",
    icon: "java",
  },
  {
    name: "C",
    category: "Backend",
    icon: "c",
  },
  {
    name: "C++",
    category: "Backend",
    icon: "cplusplus",
  },
  {
    name: "JavaScript",
    category: "Backend",
    icon: "javascript",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "nodedotjs",
  },
  {
    name: "PHP",
    category: "Backend",
    icon: "php",
  },
  {
    name: "MySQL",
    category: "Backend",
    icon: "mysql",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "docker",
  },
  {
    name: "AWS",
    category: "DevOps",
    icon: "amazonwebservices",
  },
  {
    name: "Git",
    category: "Programs/Tools",
    icon: "git",
  },
  {
    name: "GitHub",
    category: "Programs/Tools",
    icon: "github",
  },
  {
    name: "Visual Studio Code",
    category: "Programs/Tools",
    icon: "visualstudiocode",
  },
  {
    name: "Eclipse",
    category: "Programs/Tools",
    icon: "eclipseide",
  },
  {
    name: "IntelliJ IDEA",
    category: "Programs/Tools",
    icon: "intellijidea",
  },
  {
    name: "PyCharm",
    category: "Programs/Tools",
    icon: "pycharm",
  },
  {
    name: "Linux",
    category: "Programs/Tools",
    icon: "linux",
  },
  {
    name: "Firebase",
    category: "Programs/Tools",
    icon: "firebase",
  },
  {
    name: "cPanel",
    category: "Programs/Tools",
  },
  {
    name: "UML",
    category: "Programs/Tools",
  },
  {
    name: "WordPress",
    category: "Programs/Tools",
    icon: "wordpress",
  },
  {
    name: "Microsoft Office",
    category: "Extra",
    icon: "microsoftoffice",
  },
  {
    name: "Adobe Photoshop",
    category: "Extra",
  },
  {
    name: "Adobe Premiere Pro",
    category: "Extra",
  },
  {
    name: "Leadership",
    category: "Extra",
  },
  {
    name: "Problem Solving",
    category: "Extra",
  },
  {
    name: "Communication",
    category: "Extra",
  },
];

export const SLUGS = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
