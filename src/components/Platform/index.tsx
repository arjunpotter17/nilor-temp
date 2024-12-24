import Carousel from "../Projects/components/Carousel";
import "../Projects/styles/carousel.css";


interface PlatformProps {
  slideCount?: number; // Default number of slides is 5
  pre?: string; // Title of the section
  title?: string; // Subtitle of the section
  carouselOptions?: {
    loop?: boolean;
    dragFree?: boolean;
  }; // Options for the carousel
}

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

export default function Platform({
  pre = "OUR PLATFORM", // Default value for title
  title = "Visionary Solutions", // Default value for subtitle
  carouselOptions = { loop: true, dragFree: true }, // Default carousel options
}: PlatformProps) {
 
  return (
    <div className="flex flex-col w-full items-center gap-y-24">
      <div className="flex flex-col w-full gap-y-4">
      <p className="w-full text-center text-nilor-pre text-nilor-grey">{pre.toLocaleLowerCase()}</p>
      <p className="w-full text-center text-nilor-white text-nilor-title">{title}</p>
      </div>
      <div className="flex overflow-x-auto px-4 max-w-[1152px] w-full gap-x-3 h-full">
        <Carousel slides={projects} options={carouselOptions} />
      </div>
    </div>
  );
}
