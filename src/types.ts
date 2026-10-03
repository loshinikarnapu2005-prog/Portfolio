export interface SkillItem {
  name: string;
  category: 'programming' | 'automation' | 'tools' | 'competencies';
  level: number; // 0-100 percentage for visualization
  description: string;
  appliedIn: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  description: string;
  image: string;
  technologies: string[];
  keyFeatures: string[];
  testScenarios: {
    name: string;
    description: string;
    status: 'pass' | 'ready';
    duration: string;
  }[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa: string;
  maxGpa: string;
  description: string;
  highlights: string[];
}
