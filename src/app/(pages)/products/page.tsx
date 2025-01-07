import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import Projects from "@/components/Projects";
import {projects} from '@/components/Projects/constants'
import TabSwitch from "@/components/TabSliders";


export default function Solutions() {
    const tabs = [
        {
            tabName:"nilor.cool",
            title:"Best Hardware 1",
            buttonText:"Learn More",
            para:"This is a great hardware that we offer. It is obviously not as good as the others on the list. You should pick the one that is most expensive.",
            imgSrc:'/hardware-placeholder.webp'
        },
        {
            tabName:"depth plus",
            title:"Best Hardware 2",
            buttonText:"Learn More",
            para:"This is a great hardware that we offer. It is obviously not as good as the others on the list. You should pick the one that is most expensive.",
            imgSrc:'/hardware-placeholder.webp'
        },
        {
            tabName:"zenerator",
            title:"Empowering Creation",
            buttonText:"Learn More",
            para:"Unlock creative freedom with our cloud platform, featuring custom ComfyUI workflows in an intuitive GUI—no coding required. Effortlessly turn images into stunning videos and upscale them for high-resolution displays. Advanced users can even auto-generate GUIs for their own workflows. Create, iterate, and elevate with ease.",
            imgSrc:'/hardware-placeholder.webp'
        },
    ]
  return (
    <div className="flex flex-col w-full gap-y-[200px]">
    <HeroBanner
      type="image"
      src="/product-hero.png"
      pre="products"
      title="An Orchestra of Instruments"
      text={`Our platform reimagines ideation and asset development, giving creative teams the tools to explore, experiment, and refine their vision—together. Designed for both technical and non-technical collaborators, it transforms collective input into tangible, cohesive results, unlocking new possibilities for visual storytelling.`}
    />
   
    <TabSwitch pre="we DELIVER" title="Scalable and Versatile Products" tabs={tabs} tabIndication={false}/>
    <Projects title="High Powered Software" pre="Design and Collaborate" projects={[projects[0]]}/>
    <Footer/>

    </div>
  );
}
