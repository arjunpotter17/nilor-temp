import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import SingleProject from "@/components/SingleProject";
import TabSwitch from "@/components/TabSliders";
import { productSingleProject } from "@/app/constants/singleProjectDetails";
import { productPageTabsDetails } from "@/app/constants/tabDetails";

export default function Solutions() {
  return (
    <div className="flex flex-col w-full gap-y-[200px]">
      <HeroBanner
        type="image"
        src="/product-hero.png"
        pre="products"
        title="An Orchestra of Instruments"
        text={`Our platform reimagines ideation and asset development, giving creative teams the tools to explore, experiment, and refine their vision—together. Designed for both technical and non-technical collaborators, it transforms collective input into tangible, cohesive results, unlocking new possibilities for visual storytelling.`}
      />

      <TabSwitch
        pre="we DELIVER"
        title="Scalable and Versatile Products"
        tabs={productPageTabsDetails}
        tabIndication={false}
      />
      <SingleProject
        pre={productSingleProject.pre}
        title={productSingleProject.title}
        desc={productSingleProject.description}
        btnTxt={productSingleProject.buttonText}
        linkTo=""
        imageUrl={productSingleProject.url}
      />

      <Footer />
    </div>
  );
}
