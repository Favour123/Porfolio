export type NavTab = "about" | "portfolio" | "resume" | "contact";

export type SocialPlatform = "github" | "linkedin" | "email";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  icon: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  tag: string;
  description: string;
  resumeOnly?: boolean;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  imageSm: string;
  alt: string;
  technologies: string[];
  liveUrl: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  location: string;
  summary: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  location?: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  items: string;
}

export interface StackTool {
  id: string;
  name: string;
  icon?: string;
  ink?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
