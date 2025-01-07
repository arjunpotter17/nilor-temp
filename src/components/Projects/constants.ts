
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

export const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    title: "seeing echoes in the mind of the whale",
    pre: "disseny hub, barcelona",
    description: "Extract reusable data from input videos to reconstruct an underwater world composed of many parts",
    buttonText: "Explore",
    url:"/disseny.webp",
    fullText: "Our innovative VR experience allows architects and clients to walk through designs before they're built, revolutionizing the way we approach architectural projects."
  },
  {
    id: 2,
    name: "Project 2",
    title: "Sweet Dreams",
    pre: "Aviva studios, Manchester",
    description: "2nd Unit Direction, Production and Execution of multimedia content across the whole production.",
    buttonText: "See AI in Action",
    url:"/sweet-dreams.jpg",
    fullText: "Our AI-powered animation tool brings characters to life with unprecedented realism, saving time and resources in the animation process."
  },
  {
    id: 3,
    name: "Project 3",
    title: "Zenon",
    pre: "Dubai Mall, Dubai",
    description: "Large format content and content creation tools.",
    buttonText: "Visualize Data",
    url:"/zenon.png",
    fullText: "Our interactive data visualization platform transforms complex datasets into intuitive, engaging visual stories, making data accessible to everyone."
  },
];