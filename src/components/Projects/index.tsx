"use client";
import { useState } from "react";
import { projects } from "./constants";
import Carousel from "./components/Carousel";
import './styles/carousel.css'

const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Projects() {
    const [selected, ] = useState(projects[0])
  return (
    <div className="flex flex-col w-full items-center gap-y-24">
      <p className="w-full text-center text-nilor-white text-landing-section-pre">Our Work</p>
      <p className="w-full text-center text-nilor-white text-landing-section-title">The Cutting Edge of Visual Experiences</p>
      <div className="flex overflow-x-auto px-4  max-w-[1152px] w-full gap-x-3 ">
        <Carousel slides={SLIDES} options={{loop:true, dragFree:true}}/>
      </div>
      
      <div className="flex flex-col gap-y-5 text-nilor-white max-w-[1152px] w-full">
        <p className="text-landing-section-pre">{selected.name}</p>
        <p className="text-landing-section-text">{selected.fullText}</p>
        <button className="text-nilor-white bg-transparent border rounded-full px-7 py-3 hover:bg-nilor-accent hover:border-nilor-accent font-bold w-fit">Visit</button>
      </div>
    </div>
  );
}

export default Projects;
