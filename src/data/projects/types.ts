import { LucideIcon } from 'lucide-react';

export interface ProjectLink {
  title: string;
  url: string;
  icon?: LucideIcon;
}

export interface Project {
  id: number;
  title: string;
  category: 'electrical' | 'battery' | 'embedded' | 'web';
  image: string;
  images: string[];
  description: string;
  fullDescription: string;
  tags: string[];
  icon: LucideIcon;
  startDate: string;
  duration: string;
  scope: string;
  role: string;
  technologies: string[];
  responsibilities: string[];
  outcomes: string[];
  links?: ProjectLink[];
  githubUrl?: string;  // Optional GitHub repository URL
}
