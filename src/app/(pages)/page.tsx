import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import NilorLabs from "@/components/NilorLabs";
import Projects from "@/components/Projects";
import TabSwitch from "@/components/TabSliders";
import { projects } from "@/components/Projects/constants";
import {
  landingPageTabConstants,
  landingPageTabDetails,
} from "@/app/constants/tabDetails";
import { landingHero } from "../constants/heroSectionDetails";
import { landingPageProjects } from "../constants/projectsDetails";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-y-[100px] md:gap-y-[200px]">
      <HeroBanner
        text={landingHero.text as string}
        type="bgVideo"
        src={landingHero.src as string}
        pre={landingHero.pre as string}
        title={landingHero.title as string}
      />

      <Projects
        pre={landingPageProjects.pre}
        title={landingPageProjects.title}
        projects={projects}
      />

      <Clients />

      <TabSwitch
        pre=" "
        title={landingPageTabConstants.title}
        para={landingPageTabConstants.para}
        tabs={landingPageTabDetails}
        tabIndication={false}
      />

      <Features />

      <NilorLabs />

      <Footer />
    </div>
  );
}
