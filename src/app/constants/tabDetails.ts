import { TabDetails } from "@/lib/types";

export const landingPageTabConstants = {
  pre: "we offer",
  title: "Actually extraordinary",
  para: "Worldbuilding solutions. Wilderness exploration instruments. Idea unleashing services.",
};

export const productPageTabsConstants = {
  pre: "we deliver",
  title: "Scalable, versatile products",
};

export const landingPageTabDetails: TabDetails[] = [
  {
    tabName: "solutions",
    title: "Worldbuilders",
    buttonText: "Learn More",
    para: "nilor takes pride in being able to offer end-to-end solutions. Whether you want people to cross over into another realm, or have your stories come to them in familiar spaces, nilor's team have years of experience in summoning worlds from mere pixels.",
    imgSrc: "/worldbuilders.png",
  },
  {
    tabName: "products",
    title: "Toolmakers",
    buttonText: "Learn More",
    para: "nilor knows bleeding-edge. nilor also knows robust. We love making instruments that help uncover connections between things and use whatever is right for the task. We're about making things that are as exciting to use as the results they produce.",
    imgSrc: "/toolmakers.png",
  },
  {
    tabName: "services",
    title: "Shapeshifters",
    buttonText: "Learn More",
    para: "nilor is a team of transdisciplinary humans who offer everything from creative direction to technical development. We can help you with everything from the initial concept to the final execution, from a little piece to the whole pie.",
    imgSrc: "/shapeshifters.png",
  },
];

export const productPageTabsDetails = [
  {
    tabName: "nilor.cool",
    title: "Rapid Evolution",
    buttonText: "Learn More",
    para: "Back of the napkin sketch or the creative rabbithole? nilor.cool is the place to start. It lets you explore, experiment, and refine, together. It's designed for both technical and non-technical collaborators, and it transforms collective input into tangible, cohesive results.",
    imgSrc: "/nilor-cool-title.png",
  },
  {
    tabName: "depth plus",
    title: "Critical Data",
    buttonText: "Learn More",
    para: "Extracting data as if from the depths of the ocean, Depth Plus takes your input videos and constructs their many parts, allowing you to see the unseen. Imagine pulling your videos apart, and then putting them back together with each other in new and exciting ways.",
    imgSrc: "/depth-plus-title.png",
  },
  {
    tabName: "zenerator",
    title: "Zen Generation",
    buttonText: "Learn More",
    para: "Unlock creative freedom with Zenerator: advanced workflows with an easy, codeless interface. Effortlessly turn images into stunning videos and upscale them. Advanced users can even auto-generate GUIs for their own workflows. Create, iterate, and elevate with ease.",
    imgSrc: "/zenerator-title.png",
  },
];
