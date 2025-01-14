import HeroBanner from "@/components/HeroSection";
import { ProjectShowcase } from "./components/verticalShowcase/ProjectShowcase";
import { projectsHero } from "@/app/constants/heroSectionDetails";

export default function Projects() {
  return (
    <div className="flex flex-col gap-y-20">
      <HeroBanner
        type="image"
        pre={projectsHero.pre as string}
        title={projectsHero.title as string}
        text={projectsHero.text}
        src={projectsHero.src}
      />
      <ProjectShowcase />
    </div>
  );
}
