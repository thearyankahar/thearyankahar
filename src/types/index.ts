export interface ProjectFlowStep {
  step: string;
  label: string;
  description: string;
}

export interface ProjectTechnicalNote {
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  year: string;
  status: 'Production System' | 'Marketing Web Platform' | 'Web Application' | 'Machine Learning Service' | 'Concept & Working Prototype';
  isConcept?: boolean;
  technologies: string[];
  summary: string;
  coreModules: string[];
  engineeringDecisions: string[];
  systemFlow?: ProjectFlowStep[];
  technicalNotes?: ProjectTechnicalNote[];
  accentColor?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillItem {
  name: string;
  area: string;
  verifiedIn: string;
}

export interface SkillCategory {
  title: string;
  short: string;
  skills: SkillItem[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  coordinates: string;
  timezone: string;
  status: string;
  bioHeadline: string;
  bioDescription: string;
  contact: {
    email: string;
    phone: string;
    website: string;
    websiteDisplay: string;
    linkedin: string;
    linkedinDisplay: string;
    github: string;
    githubDisplay: string;
  };
  education: {
    institution: string;
    degree: string;
    period: string;
    location: string;
  };
}
