"use client";
import Carousel from "./components/Carousel";
import './styles/carousel.css'
import './styles/base.css'
import { projects } from "./constants";

function Projects() {
  return (
    <div className="flex flex-col w-full items-center gap-y-8">
      <div className="flex flex-col w-full gap-y-8">
      <p className="w-full text-center text-nilor-pre text-nilor-grey">our work</p>
      <p className="w-full text-center text-nilor-white text-nilor-title">&quot;Insert title here&quot;</p>
      </div>
      <Carousel slides={projects} options={{loop:true}}/>
    </div>
  );
}

export default Projects;
