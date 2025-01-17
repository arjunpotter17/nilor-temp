interface Project {
  id: number;
  name: string;
  title: string;
  pre: string;
  description: string;
  buttonText: string;
  fullText: string;
  url: string;
  btnLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    title: "seeing echoes in the mind of the whale",
    pre: "disseny hub, barcelona",
    description:
      "Extraction of reusable data from input videos to reconstruct an underwater world composed of many parts",
    buttonText: "Explore",
    url: "/disseny.webp",
    fullText:
      "Our innovative VR experience allows architects and clients to walk through designs before they're built, revolutionizing the way we approach architectural projects.",
  },
  {
    id: 2,
    name: "Project 2",
    title: "Sweet Dreams",
    pre: "aviva studios, manchester",
    description:
      "Creative Direction, Production and Execution of multimedia content across the whole production.",
    buttonText: "See AI in Action",
    url: "/sweet-dreams.jpg",
    fullText:
      "Our AI-powered animation tool brings characters to life with unprecedented realism, saving time and resources in the animation process.",
  },
  {
    id: 3,
    name: "Project 3",
    title: "Zenon",
    pre: "dubai mall, dubai",
    description:
      "Giant canvas content creation and toolmaking for updating visuals in a popular fine dining venue.",
    buttonText: "Visualize Data",
    url: "/zenon.png",
    btnLink: "/projects/zenon%20and%20trove",
    fullText:
      "Our interactive data visualization platform transforms complex datasets into intuitive, engaging visual stories, making data accessible to everyone.",
  },
];
