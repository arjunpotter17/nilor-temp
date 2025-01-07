"use client";
import Carousel from "./components/Carousel";
import './styles/carousel.css'
import './styles/base.css'
import PreTitle from "../PreTitle/Index";

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
  projects:Project[]
}
function Projects({pre, title, projects}:projectProps) {
  return (
    <div className="flex flex-col w-full items-center ~gap-y-1/8">
      <PreTitle pre={pre} title={title}/>
      <Carousel slides={projects} options={{loop:true}}/>
    </div>
  );
}

export default Projects;
