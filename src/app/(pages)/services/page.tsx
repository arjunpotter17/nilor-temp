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
        src="/services-hero.png"
        pre="SERVICES"
        title="Your composers and collaborators"
        text="At nilor, we blend technical innovation with artistic vision. Our team of VFX artists and technical experts work in harmony to both create and enable extraordinary visual experiences. Whether you need end-to-end creative development or the tools to bring your own vision to life, we provide the artistry, expertise, and infrastructure to make it possible

Turning imagination into reality through powerful tools"
      />
      <div className="flex flex-col">
        <ImmersiveExp
          pre="Technical Services"
          title="Sidekicks and Superheroes"
          para="Whether you need us to own every stage of the pipeline, you want to work alongside us while we tackle specific elements, or you just need us to 'take care of' something, our team can handle it."
          imgSrc="/power_to_create.jpg"
          buttonText="Learn More"
        />
        <ImmersiveExp
          reverse
          pre="Creative Services"
          title="Art in Motion"
          para="Our veteran VFX artists transform spaces through stunning visual narratives, from concept development to final execution. We craft custom content that pushes the boundaries of what's possible in immersive environments"
          imgSrc="/Art_in_motion.jpg"
          buttonText="Learn More"
        />
      </div>
      <Overview />
      <Projects title="Crafted with Vision, Delivered with Precision" pre="approach" projects={projects}/>
      <Clients />
      

      <Footer />
    </div>
  );
}
