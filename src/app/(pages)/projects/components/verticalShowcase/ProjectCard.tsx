"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectImage } from './ProjectImage';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div 
      className="flex flex-col md:flex-row items-center w-full gap-8 py-3 px-8 transition-all duration-500"
    >
      <ProjectImage {...props}/>
      
      <div className={`w-full md:w-1/2 space-y-3 transition-all duration-500 
        ${'opacity-100'}`}>
        <div className="text-sm uppercase tracking-wider text-nilor-grey">{props.category}</div>
        <h3 className="text-3xl font-nilor-light text-nilor-accent">{props.title}</h3>
        <p className={`text-nilor-white leading-relaxed transition-opacity duration-500
          ${'opacity-100'}`}>
          {props.description}
        </p>
        <button className="group flex items-center gap-2 mt-4 text-sm font-medium text-nilor-white">
          Learn More 
          <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-nilor-white group-hover:text-nilor-accent" />
        </button>
      </div>
    </div>
  );
}
