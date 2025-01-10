"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectImage } from './ProjectImage';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  title: string;
  brief: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const router = useRouter();
  return (
    <div 
      className={`flex flex-col items-center w-full gap-8 py-3 px-8 transition-all duration-500 ${props.className}`}
    >
      <ProjectImage {...props}/>
      
      <div className={`w-full md:w-1/2 space-y-3 transition-all duration-500 
        ${'opacity-100'}`}>
        {/* <div className="text-sm uppercase tracking-wider text-nilor-grey">{props.category}</div> */}
        <h3 className="text-3xl font-nilor-light text-nilor-accent">{props.title}</h3>
        <p className={`text-nilor-white leading-relaxed transition-opacity duration-500
          ${'opacity-100'}`}>
          {props.brief}
        </p>
        <button onClick={() => router.push(`/projects/${props.title}`)} className="group flex items-center gap-2 mt-4 text-sm font-medium text-nilor-white">
          Learn More 
          <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-nilor-white group-hover:text-nilor-accent" />
        </button>
      </div>
    </div>
  );
}