import HeroBanner from "@/components/HeroSection";
import { ProjectShowcase } from "./components/verticalShowcase/ProjectShowcase";

export default function Projects() {
  return (
    <div className="flex flex-col gap-y-20">
      <HeroBanner
        type="image"
        pre="PROJECTS"
        title="World Class Projects. Throughout the World."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
"
        src="/projects-hero.png"
      />
      <ProjectShowcase />
    </div>
  );
}
