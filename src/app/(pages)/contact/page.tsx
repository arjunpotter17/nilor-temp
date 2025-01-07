"use client";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import { useRef, useState } from "react";
import ContactForm from "@/components/DemoForm";

export default function Contact() {
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
    <div className="w-full flex flex-col min-h-[calc(100vh-100px)] h-full items-center text-nilor-white gap-y-24">
      <HeroBanner
        type="image"
        src="/about-hero.webp"
        pre="LET'S CHAT"
        title="Contact Us"
        titleText="Nilor has a global presence, and expert teams on hand to help. Complete the form below or contact our office directly."
      />
      <div className="flex flex-col w-full bg-nilor-offwhite items-center justify-center py-20">
        <div className="max-w-[1152px] text-nilor-black gap-y-5 flex flex-col">
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
            />
          )}
        </div>
      </div>
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
