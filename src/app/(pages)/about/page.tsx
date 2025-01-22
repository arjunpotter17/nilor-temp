"use client";
import HeroBanner from "@/components/HeroSection";
import TeamSection from "./components/teamSection";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";
import ContactForm from "@/components/DemoForm";
import {
  aboutContactSection,
  aboutHero,
} from "@/app/constants/heroSectionDetails";
import NilorButton from "@/components/NilorButton";

export default function About() {
  const formRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      const topOffset = 320; // Adjust for fixed header or padding
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
        src={aboutHero.src}
        pre={aboutHero.pre as string}
        title={aboutHero.title as string}
        text={aboutHero.text}
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
            {!showForm && (
              <NilorButton
                onClick={scrollToForm}
                text="Reach Out"
                className="!bg-nilor-black border !border-nilor-black hover:!border-nilor-accent hover:!bg-nilor-accent"
              />
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
        <HeroBanner
          type="image"
          src={aboutContactSection.src}
          pre=""
          title={aboutContactSection.title as string}
          // titleText={aboutContactSection.titleText}
          mailTo="hello@nilor.cool"
        />
        
      </div>
      <Footer />
    </div>
  );
}
