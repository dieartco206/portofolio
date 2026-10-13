export type ProjectCategory = 'all' | 'golang' | 'enterprise' | 'saas' | 'frontend';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  keyHighlights: string[];
  metrics: ProjectMetric[];
  tags: string[];
  role: string;
  badge?: string;
  featured: boolean;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface SkillItem {
  name: string;
  level: string;
  experience: string;
  description: string;
  tags: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  items: SkillItem[];
}

export interface TimelineItem {
  period: string;
  role: string;
  companyOrContext: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}
