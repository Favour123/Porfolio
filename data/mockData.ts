import type { SocialLink, Service, Project, Experience, Education } from "@/types";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "github",
    label: "GITHUB",
    url: "https://github.com/Favour123",
    icon: "Github",
  },
  {
    platform: "linkedin",
    label: "LINKEDIN",
    url: "https://linkedin.com/in/onifade-ololade",
    icon: "Linkedin",
  },
  {
    platform: "email",
    label: "EMAIL",
    url: "onifadeololadefavour1@gmail.com",
    icon: "Mail",
  },
];

export const SERVICES: Service[] = [
  {
  id: "web-dev",
  icon: "Code2",
  title: "Web Development",
  description: "Computer Science graduate specializing in the development of scalable and secure web applications using React, Next.js, TypeScript, and TailwindCSS, with a strong focus on performance and maintainability.",
},
{
  id: "virtual-ops",
  icon: "Briefcase",
  title: "Executive & Virtual Assistance",
  description: "Udemy-certified Executive and Virtual Assistant with expertise in administrative support, task management, documentation, and efficient coordination to enhance organizational productivity.",
},
{
  id: "backend-dev",
  icon: "Server",
  title: "Backend Development",
  description: "Developing secure and scalable APIs using Node.js, Express, TypeScript, MongoDB, and Redis, with a focus on performance, authentication, and clean architecture.",
},

];

export const PROJECTS: Project[] = [
  {
    id: "anettcom",
    title: "Ngo website",
    description: "Built an engagement-driven web platform for an NGO featuring secure authentication, rewards tracking, daily streaks, and a referral system to boost community participation.",
    image: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg",
    technologies: [" Next.js 16", "React 19", "TailwindCSS", "Framer Motion", "Radix UI", "Recharts",
],
    liveUrl: "https://ngo-project-amber.vercel.app/",
  },
  {
    id: "study-timer",
    title: "E-Commerce",
    description: "Designed and developed a scalable full-stack e-commerce application for a fashion brand serving both men and womenArchitected the backend with Node.js, Express.js, TypeScript, and MongoDB, implementing authentication, product management and responsive frontend using React.js, JavaScript, and TailwindCSS, ensuring optimal performance.",
    image: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=srgb&fm=jpg&q=85",
    technologies: ["React Js", "TypeScript", "TailwindCSS"],
    liveUrl: "https://vogue-vault1.vercel.app",
  },
  {
    id: "study-timer",
    title: "Flowhub",
    description: "Implemented a secure authentication system with email/password login, protected routes and persistent session handling.Developed a comprehensive points  and filter rewards by status,Built a daily streak feature with check-in functionality and weekday progress indicators to drive user engagement.",
    image: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=srgb&fm=jpg&q=85",
    technologies: ["React Js", "TypeScript", "TailwindCSS", "shadcn/ui", "Framer Motion", "Lucide React", "Zustand", "Supabase"],
    liveUrl: "flowva-two.vercel.app",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "kilefehomes",
    company: "Medicx",
    position: "Frontend Developer",
    startDate: "Jul 2024",
    endDate: null,
    location: "Remote",
    logo: "/icons/kilefehomes.svg",
    responsibilities: [
      "Developing a Next.js Medical web-app using Javascript, TailwindCSS, and Framer motion.",
      "Assinged as the lead developer on code reviews and peer coding sessions to ensure seamless integration and maintain high code quality.",
      "Work closely with the CEO to discuss design and user experience, creating pixel-perfect UIs for an optimal user journey.",
    ],
  },
  {
    id: "kilefehomes",
    company: "CreditPay",
    position: "Fullstack Developer",
    startDate: "Jul 2024",
    endDate: null,
    location: "Remote",
    logo: "/icons/kilefehomes.svg",
    responsibilities: [
      "Collaborated with a loan services company to architect and develop their backend system, migrating the codebase from JavaScript to TypeScript for improved scalability and maintainability.",
"Designed and implemented core backend infrastructure using Node.js, TypeScript, MongoDB, and Redis — handling everything from initial system architecture to final production deployment.",
"Contributed to the frontend development using TypeScript, TailwindCSS, and Framer Motion, building responsive high-performance interfaces aligned with business and user requirements.",
    ],
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "meta-cert",
    institution: "CareerEx",
    degree: "Front-End Web Development Professional Certificate",
    startDate: "Dec 2024",
    endDate: "May 2025",
    logo: "/icons/meta.svg",
  },
  {
    id: "university",
    institution: "Adeleke University",
    degree: "B.Sc. Computer Science",
    startDate: "Jul 2021",
    endDate: "Jul 2025",
    location: "Nigeria",
    logo: "/icons/oau.svg",
  },
];