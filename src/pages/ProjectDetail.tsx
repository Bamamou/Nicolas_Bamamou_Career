import { useParams } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { projectsData } from '@/data/projects';
import { CalendarDays, Clock, Target, User, CheckSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === Number(id));

  if (!project) {
    return <div className="container mx-auto px-4 py-8">Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>        {/* Project Images Carousel */}
        <div className="mb-8">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {(project.images || [project.image]).map((image, index) => (
                <CarouselItem key={index}>
                  <div className="rounded-lg overflow-hidden">                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <CalendarDays className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Start Date</h3>
                <p>{project.startDate}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Clock className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Duration</h3>
                <p>{project.duration}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Target className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Project Scope</h3>
                <p>{project.scope}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <User className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Role</h3>
                <p>{project.role}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Description */}
        <div className="prose max-w-none mb-8">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="mb-6">{project.fullDescription}</p>
          
          <h2 className="text-2xl font-bold mb-4">Key Responsibilities</h2>
          <ul className="space-y-2">
            {project.responsibilities.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckSquare className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {project.outcomes && (
            <>
              <h2 className="text-2xl font-bold mb-4 mt-6">Project Outcomes</h2>
              <ul className="space-y-2">
                {project.outcomes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckSquare className="h-5 w-5 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
           {project.technologies && (
            <>
              <h2 className="text-2xl font-bold mb-4 mt-6">Technologies Used</h2>
              <ul className="space-y-2">
                {project.technologies.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckSquare className="h-5 w-5 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
            {project.links && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Project Resources</h3>
              <div className="flex flex-wrap gap-4">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      {link.icon && <link.icon className="h-4 w-4 mr-2" />}
                      {link.title}
                    </Button>
                  </a>
                ))}
              </div>
            </div>
            )}



        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
