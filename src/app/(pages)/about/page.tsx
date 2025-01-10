"use client";
import HeroBanner from "@/components/HeroSection";
import TeamSection from "./components/teamSection";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";
import ContactForm from "@/components/DemoForm";

export default function About() {
  const formRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      const topOffset = 120; // Adjust for fixed header or padding
      const element = formRef.current;
      if (element) {
        const topPosition =
          element.getBoundingClientRect().top + window.scrollY - topOffset;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <div className="w-full flex flex-col min-h-[calc(100vh-100px)] h-full items-center text-nilor-white gap-y-[50px] lg:gap-y-[100px]">
      <HeroBanner
        type="bgVideo"
        src={`${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}landing-video.mp4`}
        pre="ABOUT"
        title="Our Mission"
        text="We are dedicated to transforming physical spaces through the power of synchronized visual art. Our integrated platform unites visionaries, artists, and venues in the creation of immersive environments that push the boundaries of what's possible. By seamlessly blending technological innovation with artistic vision, we enable the creation of experiences that inspire connection and wonder."
      />
      <div className="bg-nilor-white w-full flex-col flex items-center justify-center gap-y-10">
      {/* <Mission /> */}
      <TeamSection />
      <div className="flex flex-col w-full bg-nilor-offwhite items-center justify-center py-20">
        <div className="max-w-[1152px] text-nilor-black gap-y-5 flex flex-col px-4 md:px-0">
          <h1 className="nilor-title">Get in Touch</h1>
          <p className="nilor-text">
            Complete the form and a member of our team will get back to you as
            quickly as possible.
          </p>
          {!showForm && ( // Conditionally render the button
            <button
              onClick={scrollToForm}
              className="bg-nilor-black border border-nilor-black rounded-full px-7 py-3 hover:bg-nilor-accent hover:border-nilor-accent text-nilor-white font-bold w-fit"
            >
              Reach Out
            </button>
          )}
        </div>
        <div
          ref={formRef}
          className={`w-full transition-all duration-500 bg-nilor-offwhite ${
            showForm
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        >
          {showForm && (
            <ContactForm
              hiddenFields={["businessType"]}
              formClasses="!bg-nilor-white !text-nilor-black"
              setShowForm={setShowForm}
            />
          )}
        </div>
      </div>
      <Footer/>
      </div>
    
    </div>
  );
}
