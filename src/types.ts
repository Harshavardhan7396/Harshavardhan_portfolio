export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Web' | 'Core CS' | 'AI & ML';
  status: 'Currently Learning' | 'Exploring' | 'Future Focus';
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technology: string;
  badge: string;
  pythonSnippet: string;
  type: 'grade-calc' | 'voting-calc';
}

export interface RoadmapStep {
  step: string;
  title: string;
  desc: string;
  current?: boolean;
}

export interface JourneyCard {
  number: string;
  title: string;
  description: string;
  topics: string[];
}
