"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ProjectImage } from "./ProjectImage";
import { useRouter } from "next/navigation";
import { AnimatedSection } from "@/components/AnimateComponent";

interface descriptionDetails {
  subtitle: string;
  text: string;
}

interface ProjectCardProps {
  title: string;
  brief: string;
  description: string | descriptionDetails[];
  imageUrl: string;
  videoUrl?: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const router = useRouter();
  return (
    <AnimatedSection>
      <div
        className={`flex flex-col items-center w-full gap-8 py-3 px-4 md:px-10 xl:px-0 transition-all duration-500 ${props.className}`}
      >
        <ProjectImage {...props} router={router} />

        <div
          className={`w-full md:w-1/2 space-y-3 transition-all duration-500 
        ${"opacity-100"}`}
        >
          {/* <div className="text-sm uppercase tracking-wider text-nilor-grey">{props.category}</div> */}
          <h3 onClick={() => router.push(`/projects/${props.title}`)} className="text-3xl font-nilor-light text-nilor-accent cursor-pointer">
            {props.title}
          </h3>
          <p
            className={`text-nilor-white leading-relaxed transition-opacity duration-500
          ${"opacity-100"}`}
          >
            {props.brief}
          </p>
          <button
            onClick={() => router.push(`/projects/${props.title}`)}
            className="group flex items-center gap-2 mt-4 text-sm font-medium text-nilor-white"
          >
            Learn More
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-nilor-white group-hover:text-nilor-accent" />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};
