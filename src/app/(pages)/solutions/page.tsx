import { ImmersiveExpData, LiveEventsData } from "@/app/constants/expDetails";
import { solutionHero } from "@/app/constants/heroSectionDetails";
import { solutionSingleProject as projectDetails } from "@/app/constants/singleProjectDetails";
import ImmersiveExp from "@/components/Experiences";
import Film from "@/components/Film";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import SingleProject from "@/components/SingleProject";
import { solutionsFilmSection } from "@/app/constants/filmDetails";

export default function Solutions() {
  return (
    <div className="flex flex-col w-full gap-y-[100px] md:gap-y-[200px]">
      <HeroBanner
        type="image"
        src={solutionHero.src}
        pre={solutionHero.pre as string}
        title={solutionHero.title as string}
        text={solutionHero.text}
      />
      <SingleProject
        pre={projectDetails.pre}
        title={projectDetails.title}
        desc={projectDetails.description}
        btnTxt={projectDetails.buttonText}
        linkTo=""
        imageUrl={projectDetails.url}
      />

      <ImmersiveExp {...ImmersiveExpData} />
      <Film
        title={solutionsFilmSection.title}
        imgSrc={solutionsFilmSection.imgsrc}
        para={solutionsFilmSection.text}
      />
      <ImmersiveExp {...LiveEventsData} />
      <Footer />
    </div>
  );
}
