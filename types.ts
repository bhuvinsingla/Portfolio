export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features?: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  details?: string;
}

export interface AwardItem {
  title: string;
  description: string;
  detail: string;
}
