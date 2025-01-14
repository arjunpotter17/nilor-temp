import React from 'react';
import { ProjectCard } from './ProjectCard';
import { allProjects } from '@/app/constants/indi_project_details';

export const ProjectShowcase: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <div className="max-w-[1152px] mx-auto py-20">
        <div className="space-y-1">
        {allProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              title={project.name}
              brief={project.brief}
              imageUrl={project.images[0]}
              className={index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}