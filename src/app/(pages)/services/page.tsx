import Clients from "@/components/Clients";
import ImmersiveExp from "@/components/Experiences";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import Overview from "@/components/Overview";
import Platform from "@/components/Platform";

export default function Services() {
  return (
    <div className="flex flex-col w-full gap-y-[200px]">
      <HeroBanner
        type="image"
        src="/products-hero.png"
        pre="SERVICES"
        title="Visual Velocity"
        text="At Nilor, we blend technical innovation with artistic vision. Our team of VFX artists and technical experts work in harmony to both create and enable extraordinary visual experiences. Whether you need end-to-end creative development or the tools to bring your own vision to life, we provide the artistry, expertise, and infrastructure to make it possible

Turning imagination into reality through powerful tools"
      />
      <div className="flex flex-col">
      <ImmersiveExp pre="Technical Services" title="Power to Create" para="We provide the sophisticated infrastructure and tools that power immersive experiences. From hardware integration to AI-powered content generation, our technical solutions enable seamless creation and delivery of dynamic visual environments" imgSrc="/services-creative.webp" buttonText="Learn More"/>
      <ImmersiveExp reverse pre="Creative Services" title="Art in Motion" para="Our veteran VFX artists transform spaces through stunning visual narratives, from concept development to final execution. We craft custom content that pushes the boundaries of what's possible in immersive environments" imgSrc="/services-technical.webp" buttonText="Learn More"/>
      </div>
      <Platform slideCount={6} pre="Approach" title="Some text about detailed approach"/>
      <Clients/>
      <div className="bg-nilor-secondary">
      <Overview/>
      </div>
    
      <Footer/>
    </div>
  );
}
