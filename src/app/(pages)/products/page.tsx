import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import SingleProject from "@/components/SingleProject";
import TabSwitch from "@/components/TabSliders";


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

    const singleProject: Project =  {
      id: 1,
      name: "Project 1",
      title: "seeing echoes in the mind of the whale",
      pre: "disseny hub, barcelona",
      description: "Extract reusable data from input videos to reconstruct an underwater world composed of many parts",
      buttonText: "Explore",
      url:"/disseny.webp",
      fullText: "Our innovative VR experience allows architects and clients to walk through designs before they're built, revolutionizing the way we approach architectural projects."
    }
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
    <SingleProject pre={singleProject.pre} title={singleProject.title} desc={singleProject.description} btnTxt={singleProject.buttonText} linkTo="" imageUrl={singleProject.url} />

    <Footer/>

    </div>
  );
}
