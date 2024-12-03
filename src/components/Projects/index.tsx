"use client";
import { useState } from "react";
import Card from "./components/ProjectCard";
import { projects } from "./constants";

function Projects() {
    const [selected, setSelected] = useState(projects[0])
  return (
    <div className="flex flex-col w-full items-center gap-y-24">
      <p className="w-full text-center text-nilor-white text-3xl">Our Work</p>
      <p className="w-full text-center text-nilor-white text-8xl">The Cutting Edge of Visual Experiences</p>
      <div className="flex overflow-x-auto px-4  max-w-[1152px] w-full gap-x-3">
        {projects.map((project) => (
          <Card details={project} setSelected={setSelected} key={project.name}/>
        ))}
      </div>
      <div className="flex flex-col gap-y-5 text-nilor-white max-w-[1152px] w-full">
        <p className="text-2xl">{selected.name}</p>
        <p className="text-xl">{selected.fullText}</p>
        <button className="text-nilor-white bg-transparent border rounded-full px-7 py-3 font-bold w-fit">View</button>
      </div>
    </div>
  );
}

export default Projects;
