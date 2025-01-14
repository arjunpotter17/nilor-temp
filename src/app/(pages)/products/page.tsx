import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import SingleProject from "@/components/SingleProject";
import TabSwitch from "@/components/TabSliders";
import { productSingleProject } from "@/app/constants/singleProjectDetails";
import { productPageTabsConstants, productPageTabsDetails } from "@/app/constants/tabDetails";
import { productsHero } from "@/app/constants/heroSectionDetails";

export default function Solutions() {
  return (
    <div className="flex flex-col w-full gap-y-[200px]">
      <HeroBanner
        type="image"
        src={productsHero.src}
        pre={productsHero.pre as string}
        title={productsHero.title as string}
        text={productsHero.text}
      />

      <TabSwitch
        pre={productPageTabsConstants.pre}
        title={productPageTabsConstants.title}
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
