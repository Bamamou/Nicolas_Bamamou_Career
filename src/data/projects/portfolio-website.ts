import { Globe } from 'lucide-react';
import type { Project } from './types';

export const portfolioWebsite: Project = {
  id: 7,
  title: 'Engineering Portfolio Website',
  category: 'web',
  image: './images/WebDev/WebDev1.png',
  description: 'Responsive personal portfolio website showcasing engineering projects and technical skills.',
  fullDescription: 'Designed and developed a modern, responsive portfolio website using React and TypeScript. The site features a clean, professional design with smooth animations and optimal performance.',
  tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'version control', 'GitHub', 'AI tools'],
  icon: Globe,
  startDate: 'March 2025',
  duration: '1 months',
  scope: 'Full-stack Development',
  role: 'Full-stack Developer',
  images: [
    '../images/WebDev/WebDev2.png',
    '../images/WebDev/WebDev4.png',
    '../images/WebDev/WebDev5.png',
    '../images/WebDev/WebDev6.png',
    '../images/WebDev/WebDev7.png',
  ],
  responsibilities: [
    'Designed and implemented responsive UI components',
    'Developed dynamic project showcase features',
    'Implemented performance optimizations',
    'Created animated transitions and interactions',
    'Deployed and maintained website infrastructure'
  ],
  outcomes: [
    'Achieved 95+ Lighthouse performance score',
    'Reduced load time by 40%',
    'Increased portfolio visibility and engagement',
    'Successfully deployed on Github Page and Vercel with continuous integration',
    'Created comprehensive documentation for project management and maintenance',
    'Ensured website accessibility and usability for all users'
  ],
  technologies: ['Node.js-Next.js-React.js-Express.js-Vue.js-Vite', 'VS Code/ Copilot', 'Tailwind CSS', 'HTML-CSS','version control/GitHub', 'AI tools'],
  githubUrl: 'https://github.com/Bamamou/Bamamou_Nicolas_Career',
};
