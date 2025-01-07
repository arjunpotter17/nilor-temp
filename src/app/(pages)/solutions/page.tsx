import ImmersiveExp from "@/components/Experiences";
import Film from "@/components/Film";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import Projects from "@/components/Projects";

interface Project {
  id: number;
  name: string;
  title: string;
  pre: string;
  description: string;
  buttonText: string;
  fullText: string;
  url: string;
}

export default function Solutions() {
  const ImmersiveExpData = {
    pre: "dynamic worlds",
    para: "nilor transforms spaces into dynamic, living worlds, delivering immersive visual experiences across the world’s most ambitious displays.",
    title: "Venues are Ready for Cutting Edge AI",
    buttonText: "Learn More",
    imgSrc: "/solutions-immexp.webp",
  };

  const LiveEventsData = {
    pre: "live events",
    title: "Reality Cubed",
    para: "From intimate dining rooms to grand halls, our synchronized systems shape environments that captivate audiences and adapt seamlessly to their surroundings.",
    buttonText: "Learn More",
    imgSrc: "/reality-cubed.jpg",
  };

  const solutions: Project[] = [
   
    {
      id: 2,
      name: "Project 2",
      title: "Sweet Dreams",
      pre: "Aviva studios, Manchester",
      description:
        "2nd Unit Direction, Production and Execution of multimedia content across the whole production.",
      buttonText: "See AI in Action",
      url: "/sweet-dreams.jpg",
      fullText:
        "Our AI-powered animation tool brings characters to life with unprecedented realism, saving time and resources in the animation process.",
    },
  ];
  return (
    <div className="flex flex-col w-full gap-y-[100px] md:gap-y-[200px]">
      <HeroBanner
        type="image"
        src="/solutions-hero.png"
        pre="SOLUTIONS"
        title="Nilor empowers immersive creation"
        text={`We empower people to collaborate and harmoniously bring bold ideas to life - without worrying about the tech. Our tools turn complex systems into intuitive workflows, so teams can focus on creating refined, real-time experiences together. `}
      />
      <Projects
        pre="Our Platform"
        projects={solutions}
        title="Visionary Solutions"
      />

      <ImmersiveExp {...ImmersiveExpData} />
      <Film />
      <ImmersiveExp {...LiveEventsData} />
      <Footer />
    </div>
  );
}
