import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import Platform from "@/components/Platform";


export default function Learn() {
    return(
        <div className="flex flex-col w-full gap-y-[200px]">
        <HeroBanner type="bgVideo" src={`https://pub-05f59bf6323d4ee3a29185a0d7e91752.r2.dev/barbie.mp4`} pre={"LEARN"} title="Master the Art of Immersive Creation" text={`We empower you to harness the full potential of our platform through comprehensive learning resources. From AI-powered content generation to synchronized display management, our expert-led tutorials guide you through every aspect of creating transformative visual experiences. Learn at your own pace with tutorials crafted by the same artists and technologists who build our tools.`}/>
        <Platform slideCount={3} pre="Learn" title="Title about learning"/>
        <Footer/>
        </div>
    )
}