import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import NilorLabs from "@/components/NilorLabs";
import Projects from "@/components/Projects";
import TabSwitch from "@/components/TabSliders";
import { projects } from "@/components/Projects/constants";

export default function Home() {
  const tabs = [
    {
      tabName: "Visualise",
      title: "Best Hardware 1",
      buttonText: "Learn More",
      para: "This is a great hardware that we offer. It is obviously not as good as the others on the list. You should pick the one that is most expensive.",
      imgSrc: "/hardware-placeholder.webp",
    },
    {
      tabName: "Design",
      title: "Best Hardware 2",
      buttonText: "Learn More",
      para: "This is a great hardware that we offer. It is obviously not as good as the others on the list. You should pick the one that is most expensive.",
      imgSrc: "/hardware-placeholder.webp",
    },
    {
      tabName: "Control",
      title: "Best Hardware 3",
      buttonText: "Learn More",
      para: "This is a great hardware that we offer. It is obviously not as good as the others on the list. You should pick the one that is most expensive.",
      imgSrc: "/hardware-placeholder.webp",
    },
    {
      tabName: "Connect",
      title: "Best Hardware 4",
      buttonText: "Learn More",
      para: "This is a great hardware that we offer. It is obviously not as good as the others on the list. You should pick the one that is most expensive.",
      imgSrc: "/hardware-placeholder.webp",
    },
  ];
  return (
    <div className="flex flex-col w-full gap-y-[100px] md:gap-y-[200px]">
      <HeroBanner
        text={`nilor transforms spaces through dynamic canvases, creating immersive visual experiences across the world's most ambitious display installations. Our work lives at the intersection of artistic vision and technological innovation, pushing the boundaries of what's possible in large-scale digital environments. We harness cutting-edge AI and real-time rendering to bring previously impossible creative visions to life.`}
        type="video"
        src={`${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}landing-video.mp4`}
      />

      <Projects
        pre="Our Work"
        title="Visual Masterpieces"
        projects={projects}
      />

      <Clients />

      <TabSwitch
        tabIndication = {false}
        title="Innovative tools. Exceptional content. Unmatched expertise."
        para="All-encompassing software. Fundamental hardware. Complete support and learning services. A fully integrated ecosystem for seamlessly delivering complex graphics in real-time to any surface."
        tabs={tabs}
      />

      <Features />

      <NilorLabs />

      <Footer />
    </div>
  );
}
