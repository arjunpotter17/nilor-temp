import Footer from "@/components/Footer";
import Image from "next/image";

export default function Demo() {
  return (
    <div className="w-full flex flex-col min-h-[calc(100vh-100px)] h-full items-center text-nilor-white gap-y-24">
      <h1 className="w-full max-w-[1152px] text-landing-section-title mt-24 font-nilor-bold">Book a Demo</h1>
      <div className="bg-nilor-accent w-full flex justify-center py-10">

    
      <div className="flex flex-col lg:flex-row lg:max-w-[1152px] w-full gap-x-10">
        <div className="relative lg:min-w-[50%] w-full ">
          <Image fill src="/demo.webp" alt="demo" />
        </div>
        <div  className=" flex flex-col gap-y-10 items-start flex-grow-0">
          <p className="text-landing-section-title-sm">
            Discover the Power of the Nilor Ecosystem
          </p>
          <p className="text-landing-section-text-small">
            Have a creative idea or upcoming project you&apos;re looking to
            bring to life? Book a demo with our team and discover the power of
            the platform for yourself.{" "}
          </p>
          <p className="text-landing-section-text-small">
            We can take you through the full lifecycle of a project,
            specialising in deep technical knowledge and creative ideation. Our
            unique end-to-end support can take you from consultation, creation,
            execution and into launch. Tell us about your project below and our
            team will be in touch.
          </p>
          <button className="text-nilor-white bg-transparent border rounded-full px-7 py-3 font-bold hover:bg-nilor-black hover:border-nilor-black transform hover:scale-95 transition-all duration-200">Book a Demo</button>
      
            </div>
            
      </div>
      </div>
      <Footer />
    </div>
  );
}
