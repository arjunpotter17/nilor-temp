import { HeroProps } from "@/lib/types";

export const landingHero: HeroProps = {
  text: "nilor transforms spaces through dynamic canvases, creating immersive visual experiences across the world's most ambitious display installations. Our work lives at the intersection of artistic vision and technological innovation, pushing the boundaries of what's possible in large-scale digital environments. We harness cutting-edge AI and real-time rendering to bring previously impossible creative visions to life.",
  type: "video",
  src: `${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}landing-video.mp4`,
};

export const solutionHero: HeroProps = {
  type: "image",
  src: "/solutions-hero.png",
  pre: "SOLUTIONS",
  title: "Nilor empowers immersive creation",
  text: `We empower people to collaborate and harmoniously bring bold ideas to life - without worrying about the tech. Our tools turn complex systems into intuitive workflows, so teams can focus on creating refined, real-time experiences together. `,
};

export const productsHero: HeroProps = {
  type: "image",
  src: "/product-hero.png",
  pre: "products",
  title: "An Orchestra of Instruments",
  text: `Our platform reimagines ideation and asset development, giving creative teams the tools to explore, experiment, and refine their vision—together. Designed for both technical and non-technical collaborators, it transforms collective input into tangible, cohesive results, unlocking new possibilities for visual storytelling.`,
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
  title: "World Class Projects. Throughout the World.",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  src: "/projects-hero.png",
};

export const learnHero: HeroProps = {
  type: "bgVideo",
  src: `${process.env.NEXT_PUBLIC_CLOUDFLARE_URL_2}barbie.mp4`,
  pre: "LEARN",
  title: "Master the Art of Immersive Creation",
  text: `We empower you to harness the full potential of our platform through comprehensive learning resources. From AI-powered content generation to synchronized display management, our expert-led tutorials guide you through every aspect of creating transformative visual experiences. Learn at your own pace with tutorials crafted by the same artists and technologists who build our tools.`,
};

export const aboutHero: HeroProps = {
  type: "bgVideo",
  src: `${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}landing-video.mp4`,
  pre: "ABOUT",
  title: "Our Mission",
  text: "We are dedicated to transforming physical spaces through the power of synchronized visual art. Our integrated platform unites visionaries, artists, and venues in the creation of immersive environments that push the boundaries of what's possible. By seamlessly blending technological innovation with artistic vision, we enable the creation of experiences that inspire connection and wonder.",
};

export const aboutContactSection: HeroProps = {
  type: "image",
  src: "/contactus-bg.webp",
  pre: "",
  title: "Have a technical question?",
  titleText: `Email: support@nilor.cool\nTelephone:\nUK +44 (0) 207 2349 841\nUS +1 (347) 934 9344 |\nHK +852 38928400`,
};
