import type {
  SocialLink,
  Service,
  Project,
  Experience,
  Education,
  SkillGroup,
  StackTool,
} from "@/types";

export const OWNER = {
  fullName: "Onifade Ololade Favour",
  shortName: "Onifade Ololade",
  firstName: "Favour",
  role: "Full-Stack Software Engineer",
  location: "Maryland, Ikeja, Lagos",
  workMode: "Nigeria · Remote",
  resumePdf: "/Onifade%20Ololade.pdf",
  formEndpoint: "https://formspree.io/f/xgolzpor",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "github",
    label: "GitHub",
    url: "https://github.com/Favour123",
    icon: "github",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/onifade-ololade-favour-feranmi",
    icon: "linkedin",
  },
  {
    platform: "email",
    label: "Email",
    url: "mailto:onifadeololadefavour1@gmail.com",
    icon: "mail",
  },
];

export const STACK_TOOLS: StackTool[] = [
  { id: "react", name: "React", icon: "/assets/icons/react.svg" },
  { id: "nextjs", name: "Next.js", icon: "/assets/icons/nextjs.svg", ink: true },
  { id: "typescript", name: "TypeScript", icon: "/assets/icons/typescript.svg" },
  { id: "nestjs", name: "NestJS", icon: "/assets/icons/nestjs.svg" },
  { id: "nodejs", name: "Node.js", icon: "/assets/icons/nodejs.svg" },
  { id: "postgres", name: "PostgreSQL", icon: "/assets/icons/postgres.svg" },
  { id: "sql", name: "SQL", icon: "/assets/icons/sql.svg" },
  { id: "mongodb", name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
  { id: "supabase", name: "Supabase", icon: "/assets/icons/supabase.svg" },
  { id: "firebase", name: "Firebase", icon: "/assets/icons/firebase.svg" },
  { id: "appwrite", name: "Appwrite" },
  { id: "redis", name: "Redis", icon: "/assets/icons/redis.svg" },
  { id: "express", name: "Express", icon: "/assets/icons/express.svg", ink: true },
  { id: "tailwindcss", name: "Tailwind CSS", icon: "/assets/icons/tailwindcss.svg" },
  { id: "jest", name: "Jest", icon: "/assets/icons/jest.svg" },
  { id: "git", name: "Git", icon: "/assets/icons/git.svg" },
];

export const CORE_SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    category: "Frontend Development",
    items:
      "React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Responsive Web Design, SEO, and Performance Optimization",
  },
  {
    id: "backend-db",
    category: "Backend & Databases",
    items:
      "Node.js, Express.js, NestJS 11, TypeScript, PostgreSQL, SQL, MongoDB (Mongoose 8), Redis, Supabase, Firebase, Appwrite, REST APIs, Authentication, and TTL Caching",
  },
  {
    id: "security",
    category: "Software Security",
    items:
      "OWASP Top 10, Vulnerability Reproduction & Proof-of-Vulnerability Testing, CodeQL, Evaluating Security Fixes & AI-Generated Patches, RBAC, Argon2id, HttpOnly Sessions, Injection Protection, IDOR Authorization & Rate Limiting",
  },
  {
    id: "tools",
    category: "Tools & Integrations",
    items:
      "Cloudinary, Paystack, Monnify, Webhooks, Formspree, HubSpot, Jest, ESLint, Prettier, Git, and Version Control",
  },
  {
    id: "ai-ops",
    category: "AI & Digital Operations",
    items:
      "Practical AI Solutions, AI Workflow Automation, Prompt Engineering, Content Management, and Social Media Strategy",
  },
  {
    id: "executive",
    category: "Executive & Leadership",
    items:
      "Executive Assistance, Office Administration, Official Correspondence & Venue Approvals, HR Clearance Coordination, Event Planning, IT Troubleshooting, and Customer Care",
  },
];

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    icon: "Code2",
    title: "Frontend & AI web apps",
    tag: "React · Next.js",
    description:
      "React, Next.js, TypeScript, and Tailwind CSS interfaces with Cloudinary image delivery and AI workflows.",
  },
  {
    id: "backend-dev",
    icon: "Server",
    title: "Backend, databases & caching",
    tag: "NestJS · SQL",
    description:
      "NestJS 11 and Express APIs over PostgreSQL, SQL, MongoDB, Redis, Supabase, Firebase, and Appwrite with TTL caching.",
  },
  {
    id: "security",
    icon: "Shield",
    title: "Software security & hardening",
    tag: "OWASP · CodeQL",
    description:
      "OWASP Top 10 reproduction, CodeQL, AI patch review, Argon2id, HttpOnly sessions, RBAC, and IDOR checks.",
  },
  {
    id: "virtual-ops",
    icon: "Briefcase",
    title: "Executive & virtual operations",
    tag: "Leadership",
    description:
      "Executive scheduling, official correspondence, HR clearance coordination, AI workflow automation, and technical support.",
    resumeOnly: true,
  },
];

export const PROJECTS: Project[] = [
  {
    id: "anettcom",
    title: "Hope Foundation",
    summary:
      "NGO community platform with authentication, rewards tracking, daily streaks, and referrals.",
    description:
      "Engagement-focused web platform for an NGO featuring account authentication, rewards tracking, daily check-in streaks, impact reporting charts, and a referral workflow.",
    image: "/projects/ngo-platform.jpg",
    imageSm: "/projects/ngo-platform-sm.jpg",
    alt: "Hope Foundation NGO website showing navigation, headline, volunteer buttons, and impact numbers",
    technologies: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
      "Recharts",
    ],
    liveUrl: "https://ngo-project-amber.vercel.app/",
    featured: true,
  },
  {
    id: "greenacy-clone",
    title: "Greenacy",
    summary:
      "Climate education platform with event listings, JWT authentication, and REST APIs.",
    description:
      "Full-stack climate education application built with React, TypeScript, Node.js, Express, and MongoDB, including event pages, JWT authentication, bcrypt password hashing, and REST endpoints.",
    image: "/projects/greenacy-events.jpg",
    imageSm: "/projects/greenacy-events-sm.jpg",
    alt: "Greenacy events listing showing dated climate education sessions and seat booking links",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    liveUrl: "https://greenacy-clone.vercel.app",
    featured: true,
  },
  {
    id: "study-timer3",
    title: "Complaint Management System",
    summary:
      "University student portal for submitting and tracking complaints with live validation.",
    description:
      "Web portal built with HTML5, JavaScript, Tailwind CSS, Express.js, and MongoDB that lets students file issues, validate entries in real time, and route cases to university administrators.",
    image: "/projects/complaint-system.jpg",
    imageSm: "/projects/complaint-system-sm.jpg",
    alt: "Complaint Management System portal showing university header, student submission headline, and portal links",
    technologies: [
      "HTML5",
      "JavaScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "https://complaint-management-pi.vercel.app",
    featured: true,
  },
  {
    id: "study-timer",
    title: "Vogue Vault",
    summary:
      "Full-stack fashion storefront for men's and women's lines with Node.js and MongoDB backend.",
    description:
      "Full-stack fashion e-commerce application covering men's and women's product catalogues, backed by a Node.js, Express, TypeScript, and MongoDB API with account authentication and product management.",
    image: "/projects/vogue-vault.jpg",
    imageSm: "/projects/vogue-vault-sm.jpg",
    alt: "Vogue Vault fashion storefront showing top category navigation and member sign-in form",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "https://vogue-vault1.vercel.app",
    featured: false,
  },
  {
    id: "study-timer2",
    title: "Flowhub",
    summary:
      "Rewards and daily check-in app with persistent sessions, Zustand state, and Supabase.",
    description:
      "Web application built with React, TypeScript, Tailwind CSS, Zustand, and Supabase featuring email-and-password authentication, protected routes, reward status filters, and daily weekday streak tracking.",
    image: "/projects/flowhub.jpg",
    imageSm: "/projects/flowhub-sm.jpg",
    alt: "Flowhub web application sign-in screen with email and password authentication fields",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Supabase",
    ],
    liveUrl: "https://flowva-two.vercel.app",
    featured: false,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "sdah",
    company: "Seventh-day Adventist Hospital",
    position: "Full-Stack Software Engineer",
    startDate: "Aug 2026",
    endDate: null,
    location: "Nigeria",
    summary:
      "Healthcare HR platform in React, NestJS 11, and Mongoose 8 with TTL caching, Argon2id, RBAC, and IDOR file checks.",
    responsibilities: [
      "Full-Stack Healthcare HR Architecture: Build and maintain an end-to-end HR management platform using React, TypeScript, and Tailwind CSS on the frontend and NestJS 11, MongoDB (Mongoose 8), and TypeScript on the backend, covering staff and admin portals, leave, appraisals, promotions, recruitment, ward census, and audit trails.",
      "Performance, Caching & Security: Architect an in-memory TTL cache with request deduplication and mutation invalidation across backend services (AppCacheService) and client requests, paired with HttpOnly cookie sessions (sdah_session), Argon2id password hashing, role-based access control (RBAC), rate limiting, and MongoSafetyPipe injection protection.",
      "Workflows, File Security & Quality: Implement validated document upload and download pipelines with MIME and extension checks and IDOR authorization (FilesService), automated notifications and onboarding emails, and Git version control with Jest unit tests, ESLint, and Prettier.",
    ],
  },
  {
    id: "medicx",
    company: "Medicx",
    position: "Senior Frontend Developer",
    startDate: "Jul 2025",
    endDate: null,
    location: "Nigeria",
    summary:
      "Lead frontend developer; cut image loads up to 10x with Cloudinary plus Formspree and HubSpot.",
    responsibilities: [
      "Frontend Leadership: Lead frontend development of a healthcare web platform using React.js, JavaScript, and Tailwind CSS.",
      "10x Faster Image Loading: Set up image optimization with Cloudinary, cutting image load times by up to 10x and improving overall page speed.",
      "Code Quality & Integrations: Maintain reusable components, lead peer code reviews, manage Git workflows, and integrate Formspree and HubSpot.",
    ],
  },
  {
    id: "flyrank",
    company: "FlyRank AI",
    position: "Front-End AI Engineer",
    startDate: "Jun 2026",
    endDate: null,
    location: "Lagos State, Nigeria",
    summary:
      "Build and deploy AI web features and production engineering projects alongside lead mentors and product partners.",
    responsibilities: [
      "AI Project Development: Build and deploy practical AI web applications through engineering projects and capstone deliveries.",
      "Model Implementation: Work with lead mentors and partners to integrate AI models into responsive web interfaces.",
    ],
  },
  {
    id: "hybridsecconsult",
    company: "HSC Consult",
    position: "Back End Developer",
    startDate: "Oct 2025",
    endDate: null,
    location: "Nigeria",
    summary:
      "Cybersecurity training backend for 100+ students in Node.js, Express, and MongoDB with Paystack and Monnify HMAC-SHA512 webhooks.",
    responsibilities: [
      "Backend System Development: Built and maintained a backend system for a cybersecurity training platform serving 100+ students using Node.js, Express.js, and MongoDB.",
      "Payment Gateway Integration: Integrated Monnify and Paystack payment systems, verifying amounts against MongoDB course records and checking HMAC-SHA512 webhooks to block duplicate payments.",
      "API Security: Hardened REST APIs with Helmet, CORS, Express Rate Limit, Express Mongo Sanitize, Zod schema validation, and invite-token admin registration.",
    ],
  },
  {
    id: "creditpay",
    company: "CreditPay",
    position: "Full-Stack Engineer",
    startDate: "Jan 2025",
    endDate: "2026",
    location: "Nigeria",
    summary:
      "Migrated a loan services backend from JavaScript to TypeScript using Node.js, MongoDB, and Redis.",
    responsibilities: [
      "TypeScript Migration: Refactored and migrated the loan services backend codebase from JavaScript to TypeScript to reduce runtime bugs and improve maintainability.",
      "Core Backend & UI: Built backend services in Node.js, TypeScript, MongoDB, and Redis and contributed responsive Tailwind CSS frontend views.",
    ],
  },
  {
    id: "anettcom-tech",
    company: "Anettcom Technologies",
    position: "Fullstack Developer",
    startDate: "Feb 2025",
    endDate: "Sep 2025",
    location: "Osun State, Nigeria",
    summary:
      "Built client web applications in React and Node.js, improved page speed and SEO, and mentored web development students.",
    responsibilities: [
      "Web Application Development: Built and maintained responsive websites and full-stack applications using HTML, CSS, JavaScript, React, Node.js, and databases.",
      "Website Optimization: Improved website speed, SEO, and mobile responsiveness for client businesses.",
      "Student Mentorship: Trained and mentored students in web development and Git workflows.",
    ],
  },
];

export const LEADERSHIP_EXPERIENCES: Experience[] = [
  {
    id: "babcock",
    company: "Babcock University",
    position: "Administrative Executive & President of NYSC Corps Members",
    startDate: "Dec 2025",
    endDate: null,
    location: "Ilishan-Remo, Ogun State",
    summary:
      "Office administration for the Vice Chancellor's office, NYSC corps leadership, HR clearance liaison, and staff IT troubleshooting.",
    responsibilities: [
      "Manage daily office administration, prepare official memos, handle dispatch tasks, and coordinate visitors and meetings for the Vice Chancellor.",
      "Serve as President for NYSC corps members at Babcock University, coordinating send-forth events, venue approvals, and welfare programs.",
      "Partner with Human Resources on monthly clearance updates and troubleshoot laptop, hardware, and software issues for staff.",
    ],
  },
  {
    id: "meetyourva",
    company: "MeetYourVA",
    position: "Senior Virtual Assistant",
    startDate: "Feb 2026",
    endDate: "Aug 2026",
    location: "United States (Remote)",
    summary:
      "Virtual assistance, AI workflow automation, content management, and software support for remote clients.",
    responsibilities: [
      "Delivered virtual assistance, AI workflow automation, content management, and custom software support for daily client operations.",
    ],
  },
  {
    id: "ghreatness",
    company: "Ghreatness & Unixy",
    position: "Virtual Assistant to Frontend Developer",
    startDate: "Oct 2024",
    endDate: "Nov 2025",
    location: "Lagos & Osun State, Nigeria",
    summary:
      "Transitioned from executive virtual operations to building web platforms with React, TypeScript, NestJS, PostgreSQL, SQL, Firebase, and Supabase.",
    responsibilities: [
      "Managed executive schedules, administrative tasks, and team communications before moving into frontend web development.",
      "Built and maintained company web platforms alongside the Senior Team Lead using React, TypeScript, NestJS, PostgreSQL, SQL, Firebase, and Supabase.",
    ],
  },
  {
    id: "pexcel",
    company: "Pexcel Global Services",
    position: "Customer Care Professional",
    startDate: "Jun 2020",
    endDate: "Jul 2024",
    location: "Nigeria",
    summary:
      "Resolved customer inquiries and complaints across a four-year tenure.",
    responsibilities: [
      "Resolved customer inquiries and complaints promptly across a four-year service period.",
    ],
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "university",
    institution: "Adeleke University",
    degree: "B.Sc. Computer Science",
    startDate: "Sep 2021",
    endDate: "Jul 2025",
    location: "Osun State, Nigeria",
  },
  {
    id: "careerex-cert",
    institution: "CareerEx",
    degree: "Frontend Web Development Certificate",
    startDate: "Jan 2025",
    endDate: "Oct 2025",
  },
  {
    id: "ai-fluency",
    institution: "Technical Training",
    degree: "AI Fluency: Framework & Foundations · Full-Stack React, Next.js & Node.js",
    startDate: "2025",
    endDate: "2025",
  },
  {
    id: "executive-cert",
    institution: "Professional Certifications",
    degree: "Executive Assistant Diploma & Customer Experience Management Certificate",
    startDate: "2024",
    endDate: "2024",
  },
];
