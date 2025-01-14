import { FilmProps } from "@/lib/types";
import { AnimatedSection } from "../AnimateComponent";
import PreTitle from "../PreTitle";

export default function Film({ title, para, imgSrc }: FilmProps) {
  return (
    <AnimatedSection>
      <div className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center text-nilor-white gap-y-10">
        <PreTitle pre="Nilor in action" title="Creating Content and Contexts" />
        <div
          className="w-full min-h-[calc(100vh-100px)] bg-cover bg-center bg-no-repeat flex items-center justify-center mt-10"
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
        >
          <div className="flex flex-col text-nilor-white w-full h-full max-w-[1152px] gap-y-10 px-4 md:px-10 xl:px-0">
            <p className="nilor-title">{title}</p>
            <p className="nilor-text w-full lg:max-w-[60%] font-nilor-semibold">
              {para}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
