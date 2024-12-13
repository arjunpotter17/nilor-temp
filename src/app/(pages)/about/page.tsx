import HeroBanner from "@/components/HeroSection";
import Mission from "./components/mission";

export default function About() {
    return(
        <div className="w-full flex flex-col min-h-[calc(100vh-100px)] h-full items-center text-nilor-white gap-y-24">
        <HeroBanner type="image" src="/about-hero.webp" pre="ABOUT" title="Creating New Dimensions of Human Experience" text="Nilor is redefining how we experience shared spaces through the seamless fusion of art and technology. Our integrated platform transforms venues into dynamic visual environments, creating immersive experiences that turn ordinary moments into extraordinary memories."/>
        <div className="bg-nilor-white w-full flex items-center justify-center">
            <Mission/>
        </div>
        </div>
    )
}