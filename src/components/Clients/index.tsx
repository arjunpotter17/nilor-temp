import { AnimatedSection } from "../AnimateComponent";
import { ClientShowcase } from "./components/ClientShowcase";

export default function Clients() {
  return (
    <AnimatedSection>


    <div className="w-full flex flex-col items-center ~gap-y-5/8 bg-nilor-accent py-10">
      <div className="w-full flex flex-col ~gap-y-1/4">
      <p className="w-full text-center nilor-pre font-nilor-semibold text-nilor-black ">our partners</p>
       <p className="w-full text-center nilor-title font-nilor-semibold text-nilor-white !leading-none">
          Who we work with
        </p>
      </div>
     <div className="w-full max-w-full min-w-full">
     <ClientShowcase />
     </div>
     <p className="w-full text-center px-4 md:px-10 xl:px-0 text-xs md:nilor-pre font-nilor-semibold text-nilor-white max-w-[1152px]">Our team has decades of experience working with and for a wide range of clients at the top of their industries;<br/> <span className="text-nilor-black font-nilor-bold">nilor</span> brings all that invaluable expertise together.
     </p>
   
    </div>
    </AnimatedSection>
  );
}
