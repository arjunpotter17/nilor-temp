import Image from "next/image";
import { AnimatedSection } from "../AnimateComponent";
// import NilorButton from "../NilorButton";

interface ExpDataType {
  pre: string;
  title: string;
  para: string;
  buttonText: string;
  imgSrc: string;
  reverse?: boolean;
}

export default function ImmersiveExp({
  pre,
  title,
  para,
  imgSrc,
  reverse = false,
}: ExpDataType) {
  return (
    <AnimatedSection>


    <div className="bg-nilor-secondary w-full px-4 md:px-10 xl:px-0 py-20 md:py-32 flex justify-center items-center text-nilor-white">
      <div
        className={`w-full flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } lg:flex-row lg:justify-between lg:items-center max-w-[1152px] gap-y-10`}
      >
        <div className="flex flex-col lg:max-w-[50%] gap-y-10">
          <div className="flex flex-col items-start ~gap-y-2/4">
            <p className="nilor-pre text-nilor-accent">{pre.toLocaleLowerCase()}</p>
            <h1 className="nilor-title leading-none">{title}</h1>
          </div>
          <p className="nilor-text">{para}</p>
          {/* <NilorButton text="Learn More"/> */}
        </div>
        <div className="w-full lg:max-w-[40%] h-[300px] lg:h-[500px] relative perspective-800">
          <div
            className={`w-full h-full relative transform ${
              reverse ? "lg:rotate-y-[20deg]" : ""
            } lg:rotate-y-[-20deg]`}
          >
            <Image
              fill
              src={imgSrc}
              alt="immersive experiences"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    </AnimatedSection>
  );
}
