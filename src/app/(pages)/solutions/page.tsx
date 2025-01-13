import { ImmersiveExpData, LiveEventsData } from "@/app/constants/expDetails";
import { solutionSingleProject as projectDetails } from "@/app/constants/singleProjectDetails";
import ImmersiveExp from "@/components/Experiences";
import Film from "@/components/Film";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import SingleProject from "@/components/SingleProject";


export default function Solutions() {
  
  return (
    <div className="flex flex-col w-full gap-y-[100px] md:gap-y-[200px]">
      <HeroBanner
        type="image"
        src="/solutions-hero.png"
        pre="SOLUTIONS"
        title="Nilor empowers immersive creation"
        text={`We empower people to collaborate and harmoniously bring bold ideas to life - without worrying about the tech. Our tools turn complex systems into intuitive workflows, so teams can focus on creating refined, real-time experiences together. `}
      />
      <SingleProject pre={projectDetails.pre} title={projectDetails.title} desc={projectDetails.description} btnTxt={projectDetails.buttonText} linkTo="" imageUrl={projectDetails.url} />

      <ImmersiveExp {...ImmersiveExpData} />
      <Film />
      <ImmersiveExp {...LiveEventsData} />
      <Footer />
    </div>
  );
}
