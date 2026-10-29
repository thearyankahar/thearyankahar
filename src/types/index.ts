export interface ProjectFlowStep {
  step: string;
  label: string;
  description: string;
}

export interface ProjectTechnicalNote {
  label: string;
  detail: string;
}

export interface ArchitectureLayer {
  layer: string;
  components: string[];
  detail: string;
}

export interface EngineeringTradeoff {
  challenge: string;
  decision: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  year: string;
  status: 'Commercial Platform' | 'Web Application' | 'Machine Learning Service' | 'Concept & Working Prototype';
  isConcept?: boolean;
  technologies: string[];
  summary: string;
  problemStatement: string;
  intendedUsers?: string;
  myContribution: string;
  completedFeatures: string[];
  prototypeOrPlannedFeatures?: string[];
  architectureLayers?: ArchitectureLayer[];
  engineeringDecisions: string[];
  tradeoffs?: EngineeringTradeoff[];
  systemFlow?: ProjectFlowStep[];
  technicalNotes?: ProjectTechnicalNote[];
  accentColor: string;
  image?: string;
  bannerImage?: string;
  evidenceLabel?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Certification {
  id: string;
  issuer: string;
  title: string;
  date: string;
  category: string;
  skills: string[];
  description: string;
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
  internship?: {
    company: string;
    type: string;
    duration: string;
    status: string;
    description: string;
  };
}
