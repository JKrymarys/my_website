export interface LinkProps {
  label: string;
  path: string;
  default?: boolean;
}

export interface Project {
  title: string;
  stack: string[];
  description?: string;
  link?: string;
  github?: string;
}

export interface BlogPost {
  type: 'external' | 'internal';
  link: string;
  title: string;
}

export interface CommercialExperience {
  companyName: string;
  start: string;
  end: string;
  description?: string;
}
