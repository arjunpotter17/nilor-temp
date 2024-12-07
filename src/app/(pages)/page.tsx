import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import Insights from "@/components/Insights";
import NilorLabs from "@/components/NilorLabs";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-y-[200px]">
      <div className="b">
        <HeroBanner
          text={`Nilor creates, renders, and synchronizes cutting edge content for the
        worlds&apos; largest displays, building immersive and real-time visual
        experiences. We&apos;re driven to stay on top of the next generation AI
        stack (WIP closing sentence - key words/synonyms/ideas to convey tho:
        top of the stack, industry, results, magic) Walk into the magic land.`}
          type="video"
          src={`${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}landing-video.mp4`}
        />
      </div>
      <div className="b">
        <Projects />
      </div>
      <div className="b">
        <Clients />
      </div>
      <div className="b">
        <NilorLabs />
      </div>
      <div className="b">
        <Insights />
      </div>
      <Footer />
    </div>
  );
}
