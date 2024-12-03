import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import HeroVideo from "@/components/HeroVideo";
import Insights from "@/components/Insights";
import NilorLabs from "@/components/NilorLabs";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-y-[200px]">
      <div className="b">
      <HeroVideo/>
      </div>
      <div className="b">
      <Projects/>
      </div>
      <div className="b">
      <Clients/>
      </div>
      <div className="b">
      <NilorLabs/>
      </div>
      <div className="b">
      <Insights/>
      </div>
      <Footer/>
      
      
      
      
      
    </div>

  );
}
