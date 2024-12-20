"use client";
import Carousel from "./components/Carousel";
import './styles/carousel.css'
import './styles/base.css'


interface Project {
  id: number;
  name: string;
  title: string;
  pre: string;
  description: string;
  buttonText: string;
  fullText: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    title: "Innovative VR Experience",
    pre: "Virtual Reality",
    description: "Immersive virtual reality solution for architectural visualization.",
    buttonText: "Explore VR",
    fullText: "Our innovative VR experience allows architects and clients to walk through designs before they're built, revolutionizing the way we approach architectural projects."
  },
  {
    id: 2,
    name: "Project 2",
    title: "AI-Powered Animation",
    pre: "Artificial Intelligence",
    description: "Cutting-edge AI technology for creating lifelike animations.",
    buttonText: "See AI in Action",
    fullText: "Our AI-powered animation tool brings characters to life with unprecedented realism, saving time and resources in the animation process."
  },
  {
    id: 3,
    name: "Project 3",
    title: "Interactive Data Visualization",
    pre: "Data Science",
    description: "Dynamic and interactive data visualization platform.",
    buttonText: "Visualize Data",
    fullText: "Our interactive data visualization platform transforms complex datasets into intuitive, engaging visual stories, making data accessible to everyone."
  },
  {
    id: 4,
    name: "Project 4",
    title: "Augmented Reality for Education",
    pre: "Augmented Reality",
    description: "AR-enhanced learning experiences for students of all ages.",
    buttonText: "Learn with AR",
    fullText: "Our augmented reality educational tools bring textbooks to life, creating immersive learning experiences that improve engagement and retention."
  },
  {
    id: 5,
    name: "Project 5",
    title: "3D Holographic Displays",
    pre: "Holographic Technology",
    description: "Next-generation 3D holographic display technology.",
    buttonText: "See Holograms",
    fullText: "Our 3D holographic displays create stunning, floating images that can be viewed from any angle, perfect for advertising, entertainment, and scientific visualization."
  }
];


function Projects() {
  return (
    <div className="flex flex-col w-full items-center gap-y-8">
      <div className="flex flex-col w-full gap-y-8">
      <p className="w-full text-center text-nilor-pre text-nilor-grey">Our Work</p>
      {/* <p className="w-full text-center text-nilor-white text-landing-section-title">The Cutting Edge of Visual Experiences</p> */}
      </div>
      <Carousel slides={projects} options={{loop:true, dragFree:true}}/>
      
      
    </div>
  );
}

export default Projects;
