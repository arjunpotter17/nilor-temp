import { learnHero } from "@/app/constants/heroSectionDetails";
import { tutorials } from "@/app/constants/learnYoutubeLinks";
import { learnPageYoutubeTexts } from "@/app/constants/projectsDetails";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import Projects from "@/components/Projects";

export default function Learn() {
  return (
    <div className="flex flex-col w-full gap-y-[200px]">
      <HeroBanner
        type="bgVideo"
        src={learnHero.src}
        pre={learnHero.pre as string}
        title={learnHero.title as string}
        text={learnHero.text}
      />
      <Projects
        pre={learnPageYoutubeTexts.pre}
        title={learnPageYoutubeTexts.title}
        tutorials={tutorials}
      />
      <Footer />
    </div>
  );
}
