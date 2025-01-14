import { HeroProps } from "@/lib/types";
import { AnimatedSection } from "../AnimateComponent";


function HeroBanner({ type, text, src, pre, title, titleText }: HeroProps) {
  return (
    <AnimatedSection className="!min-w-full">
      <div className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center relative">
        {type == "video" ? (
          <video
            src={src}
            autoPlay
            loop
            controls={false}
            muted
            className=" min-h-[calc(100vh-100px)] w-full object-cover"
            disablePictureInPicture
          ></video>
        ) : type === "image" ? (
          <div
            className="w-full min-h-[calc(100vh-100px)] bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className="flex flex-col text-nilor-white w-full h-full max-w-[1152px] px-4 md:px-10 xl:px-0">
              <p className="nilor-pre">{pre.toLocaleLowerCase()}</p>
              <p className="nilor-title md:max-w-[60%] font-nilor-semibold leading-tight">
                {title}
              </p>
              {titleText && (
                <p className="nilor-hero-text font-nilor-light text-nilor-white w-[60%] text-justify whitespace-pre-wrap mt-6">
                  {titleText.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        ) : type === "bgVideo" ? (
          <>
            <video
              className="absolute h-[calc(100vh-100px)] inset-0 w-full object-cover z-10"
              src={src}
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            />

            <div className="absolute h-[calc(100vh-100px)] inset-0 w-full bg-black bg-opacity-50 z-10"></div>

            <div className="w-full min-h-[calc(100vh-100px)] bg-transparent flex items-center justify-center z-20">
              <div className="flex flex-col text-nilor-white w-full h-full max-w-[1152px] px-4 md:px-10 xl:px-0">
                <p className="nilor-pre">{pre.toLocaleLowerCase()}</p>
                <p className="nilor-title w-full md:max-w-[60%] font-nilor-semibold leading-tight">
                  {title}
                </p>
              </div>
            </div>
          </>
        ) : null}

        {text && (
          <div className="max-w-[1152px] flex justify-center items-center ~pt-16/32 ~px-4/0">
            <p className="nilor-hero-text font-nilor-regular text-nilor-white w-full  md:w-[85%] text-justify">
              {text}
            </p>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

export default HeroBanner;
