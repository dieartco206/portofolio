export type ProjectCategory = 'all' | 'golang' | 'enterprise' | 'saas' | 'frontend';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectColorTheme {
  gradient: string;       // e.g. 'from-indigo-600 to-blue-600'
  badgeBg: string;        // e.g. 'bg-indigo-50 text-indigo-700 border-indigo-200'
  cardBorder: string;     // e.g. 'hover:border-indigo-400'
  accentText: string;     // e.g. 'text-indigo-600'
  lightBg: string;        // e.g. 'bg-indigo-50/50'
  iconBg: string;         // e.g. 'bg-indigo-500'
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
  colorTheme: ProjectColorTheme;
  image: string;
  gallery?: string[];
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
  themeColor: string;
  borderTheme: string;
  bgTheme: string;
  items: SkillItem[];
}

export interface TimelineProjectHighlight {
  name: string;
  desc: string;
  tech?: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  companyOrContext: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  badgeColor: string;
  projectHighlights?: TimelineProjectHighlight[];
}

export interface EducationItem {
  degree: string;
  campus: string;
  period: string;
  grade: string;
  status: string;
  description: string;
  highlights: string[];
}
