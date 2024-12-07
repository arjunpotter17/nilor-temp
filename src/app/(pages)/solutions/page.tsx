import ImmersiveExp from "@/components/Experiences";
import Film from "@/components/Film";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import Insights from "@/components/Insights";
import Platform from "@/components/Platform";

export default function Solutions() {
    const ImmersiveExpData = {
        pre: "IMMERSIVE GATHERING SPACES",
        para:"Make dreams reality or something with big screens etc, environments etc.",
        title:"Defining Tomorrow.",
        buttonText:"Learn More",
        imgSrc:"/solutions-immexp.webp"
    }

    const LiveEventsData = {
        pre: "LIVE EVENTS",
        title: "Reality Cubed",
        para:"Elevate events into mesmerising live moments, from creative festivals to branded launches.",
        buttonText:"Learn More",
        imgSrc:"/solutions-livevents.webp"

    }
  return (
    <div className="flex flex-col w-full gap-y-[200px]">
    <HeroBanner
      type="image"
      src="/solutions-landing-bg.webp"
      text={`At every point in the Visual Experience lifecycle, Disguise is here to provide the tools and knowledge you need to realise your vision. Our always-evolving ecosystem combines world-class expertise with the industry’s premium software for a holistic answer to every imaginable problem.`}
    />
    <Platform/>
    <ImmersiveExp {...ImmersiveExpData}/>
    <Film/>
    <ImmersiveExp {...LiveEventsData}/>
    <Insights/>
    <Footer/>

    </div>
  );
}
