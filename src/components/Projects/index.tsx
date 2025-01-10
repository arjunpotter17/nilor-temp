"use client";
import Carousel from "./components/Carousel";
import './styles/carousel.css'
import './styles/base.css'
import PreTitle from "../PreTitle";

interface Project {
  id: number;
  name: string;
  title: string;
  pre: string;
  description: string;
  buttonText: string;
  fullText: string;
  url:string
}

interface projectProps {
  pre:string;
  title:string;
  projects?:Project[];
  tutorials?:string[];
}
function Projects({pre, title, projects, tutorials}:projectProps) {
  return (
    <div className="flex flex-col w-full items-center ~gap-y-1/8">
      <PreTitle pre={pre} title={title}/>
      <Carousel slides={projects} options={{loop:true}} tutorials={tutorials}/>
    </div>
  );
}

export default Projects;
