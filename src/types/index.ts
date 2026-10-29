export interface ProjectFlowStep {
  step: string;
  label: string;
  description: string;
}

export interface MetricItem {
  label: string;
  value: string;
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
  status: 'Production Live' | 'Active Microservice' | 'Live Platform' | 'Architecture Concept / Working Prototype';
  isConcept?: boolean;
  technologies: string[];
  cloudServices?: string[];
  summary: string;
  architecturalHighlights: string[];
  keyFeatures: string[];
  systemFlow: ProjectFlowStep[];
  metricsOrSecurity?: MetricItem[];
  accentColor: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillItem {
  name: string;
  level: 'Production' | 'Advanced' | 'Core' | 'Applied';
  highlight: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  short: string;
  skills: SkillItem[];
}

export interface EducationRecord {
  institution: string;
  degree: string;
  period: string;
  status: string;
  resultDate: string;
  cgpa: string;
  lastSemesterSGPA: string;
  projectGrade: string;
  receiptNumber: string;
  focus: string;
  courses: string[];
  documents: {
    title: string;
    description: string;
    imagePath: string;
  }[];
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
  education: EducationRecord;
}
