"use client";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";

export default function Contact() {


  return (
    <div className="w-full flex flex-col min-h-[calc(100vh-100px)] h-full items-center text-nilor-white gap-y-24">
      <HeroBanner
        type="image"
        src="/about-hero.webp"
        pre="LET'S CHAT"
        title="Contact Us"
        titleText="nilor has a global presence, and expert teams on hand to help. Complete the form below or contact our office directly."
      />
      
      <HeroBanner
        type="image"
        src="/contactus-bg.webp"
        pre=""
        title="Have a technical question?"
        titleText={`Email: support@nilor.cool\nTelephone:\nUK +44 (0) 207 2349 841\nUS +1 (347) 934 9344 |\nHK +852 38928400`}

      />

      <div className="bg-nilor-white w-full flex-col flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
}
