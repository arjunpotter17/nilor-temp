"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRef, useState } from "react";
// import DemoForm from "@/components/DemoForm";

export default function Demo() {

  const formRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      const topOffset = 120; // Adjust for fixed header or padding
      const element = formRef.current;
      if (element) {
        const topPosition = element.getBoundingClientRect().top + window.scrollY - topOffset;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <div className="w-full flex flex-col min-h-[calc(100vh-100px)] h-full items-center text-nilor-white gap-y-24">
      <h1 className="w-full max-w-[1152px] nilor-title mt-24 font-nilor-bold">
        Book a Demo
      </h1>
      <div className="bg-nilor-accent w-full flex justify-center py-10">
        <div className="flex flex-col lg:flex-row lg:max-w-[1152px] w-full gap-x-10">
          <div className="relative lg:min-w-[50%] w-full ">
            <Image fill src="/demo.webp" alt="demo" />
          </div>
          <div className=" flex flex-col gap-y-10 items-start flex-grow-0">
            <p className="nilor-title-sm">
              Discover the Power of the nilor Ecosystem
            </p>
            <p className="nilor-text-small">
              Have a creative idea or upcoming project you&apos;re looking to
              bring to life? Book a demo with our team and discover the power of
              the platform for yourself.{" "}
            </p>
            <p className="nilor-text-small">
              We can take you through the full lifecycle of a project,
              specialising in deep technical knowledge and creative ideation.
              Our unique end-to-end support can take you from consultation,
              creation, execution and into launch. Tell us about your project
              below and our team will be in touch.
            </p>
            <button onClick={scrollToForm} className="text-nilor-white border rounded-full px-7 py-3 font-bold bg-nilor-black border-nilor-black transform hover:scale-95 transition-all duration-200">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
      <div 
        ref={formRef} 
        className={`w-full transition-all duration-500 ${
          showForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* {showForm && <DemoForm hiddenFields={['comments']} />} */}
      </div>
      <Footer />
    </div>
  );
}
