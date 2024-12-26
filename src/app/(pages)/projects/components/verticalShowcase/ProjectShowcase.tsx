import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from './data';

export const ProjectShowcase: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1152px] mx-auto py-20">
        <div className="space-y-1">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}