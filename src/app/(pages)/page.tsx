import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import Insights from "@/components/Insights";
import NilorLabs from "@/components/NilorLabs";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-y-[200px]">
      <div className="">
        <HeroBanner
          text={`Nilor transforms spaces through dynamic canvases, creating immersive visual experiences across the world's most ambitious display installations. Our work lives at the intersection of artistic vision and technological innovation, pushing the boundaries of what's possible in large-scale digital environments. We harness cutting-edge AI and real-time rendering to bring previously impossible creative visions to life

Breathing life into spaces through boundless imagination`}
          type="video"
          src={`${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}landing-video.mp4`}
        />
      </div>

      <div className="">
        <Projects />
      </div>

      <div className="">
        <Clients />
      </div>

      <div className="">
        <NilorLabs />
      </div>

      <div className="">
        <Insights />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
