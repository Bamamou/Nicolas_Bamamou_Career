import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Code } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projectsData } from '@/data/projects';

const Projects = () => {
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'electrical', name: 'Electrical Engineering' },
    { id: 'battery', name: 'Battery Design' },
    { id: 'embedded', name: 'Embedded Systems' },
    { id: 'web', name: 'Web Development' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects = projectsData.map(project => ({
    ...project,
    icon: project.icon ? <project.icon className="h-6 w-6" /> : null,
  }));

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Explore my engineering work across different disciplines</p>
        
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full ${activeCategory === category.id ? 'bg-primary' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                  {project.icon}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Link to={`/project/${project.id}`}>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" /> View Details
                  </Button>
                </Link>
                {project.category === 'embedded' || project.category === 'web' ? (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Code className="h-4 w-4 mr-2" /> View Code
                    </Button>
                  </a>
                ) : null}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-accent hover:bg-accent/90">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
