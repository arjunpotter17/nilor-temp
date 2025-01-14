import { servicesCreativeData, servicesTechnicalData } from "@/app/constants/expDetails";
import { servicesHero } from "@/app/constants/heroSectionDetails";
import { servicesPageProjectTexts } from "@/app/constants/projectsDetails";
import Clients from "@/components/Clients";
import ImmersiveExp from "@/components/Experiences";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import {projects} from '@/components/Projects/constants'

export default function Services() {
  return (
    <div className="flex flex-col w-full gap-y-[200px]">
      <HeroBanner
        type="image"
        src={servicesHero.src}
        pre={servicesHero.pre as string}
        title={servicesHero.title as string}
        text={servicesHero.text}
      />
      <div className="flex flex-col">
        <ImmersiveExp
          {...servicesTechnicalData}
        />
        <ImmersiveExp
          reverse
         {...servicesCreativeData}
        />
      </div>
      <Overview />
      <Projects title={servicesPageProjectTexts.title} pre={servicesPageProjectTexts.pre} projects={projects}/>
      <Clients />
      

      <Footer />
    </div>
  );
}
