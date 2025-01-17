import { HeroProps } from "@/lib/types";

export const landingHero: HeroProps = {
  text: "nilor conjures immersive worlds through dynamic canvases, fusing artistic vision and technological innovation to transform spaces into other worlds. Harnessing AI, real-time rendering, and more traditional techniques, we summon visions once thought impossible.",
  type: "video",
  src: `${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}landing-video.mp4`,
};

export const solutionHero: HeroProps = {
  type: "image",
  src: "/solutions-hero.png",
  pre: "SOLUTIONS",
  title: "nilor empowers immersive creation",
  text: `We help teams craft bold ideas together—free from technical barriers. Our tools turn complex systems into intuitive workflows, so teams can focus on creating refined, real-time experiences together. `,
};

export const productsHero: HeroProps = {
  type: "image",
  src: "/nilor-cool-title-dark.png",
  pre: "products",
  title: "An orchestra of instruments",
  text: `We reimagine ideation and asset development, giving teams the tools to explore, experiment, and refine their vision—together. Designed for both technical and non-technical collaborators, it transforms collective input into tangible, cohesive results, unlocking new realms for storytelling.`,
};

export const servicesHero: HeroProps = {
  type: "image",
  src: "/services-hero.png",
  pre: "SERVICES",
  title: "Your composers and collaborators",
  text: `At nilor, we blend technical innovation with artistic vision. Our team of VFX artists and technical experts work in harmony to both create and enable extraordinary visual experiences. Whether you need end-to-end creative development or the tools to bring your own vision to life, we provide the artistry, expertise, and infrastructure to make it possible

Turning imagination into reality through powerful tools`,
};

export const projectsHero: HeroProps = {
  type: "image",
  pre: "PROJECTS",
  title: "World class projects, worldwide",
  text: "nilor has been trusted by some of the world's most ambitious venues and clients to deliver a rich variety of visual experiences. With extensive experience in a wide range of industries, nilor have been busy creating magic across the globe.",
  src: "/projects-hero.png",
};

export const learnHero: HeroProps = {
  type: "bgVideo",
  src: `${process.env.NEXT_PUBLIC_CLOUDFLARE_URL_2}barbie.mp4`,
  pre: "learn",
  title: "Carve your own path of discovery",
  text: `Our platform is the perfect entry point into unleashing the power of visually investigating your ideas. Whether you're a seasoned sensei or a curious kook, our tutorials will guide you through the process of exploration, creation, and collaboration, so you can inject life into that thing you've been thinking about.`,
};

export const aboutHero: HeroProps = {
  type: "bgVideo",
  src: `${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}landing-video.mp4`,
  pre: "ABOUT",
  title: "Our Agenda",
  text: `We want more stories to be told, more worlds to be explored, and more experiences to be shared. We believe that the best way to achieve this is to empower creators with the tools they need to bring their ideas to life. 
  
  Our mission is to provide the world with the tools to create, collaborate, and share their stories, as well as leading the way by doing those things ourselves. By building the things we need to do our work, we hope to build things that also help others look into the depths, over the horizon, or right in front of them.`,
};

export const aboutContactSection: HeroProps = {
  type: "image",
  src: "/contactus-bg.webp",
  pre: "",
  title: "Any questions?",
  titleText: `Use the form above, or email hello@nilor.cool`,
};
