import { AnimatedSection } from "../AnimateComponent";
import NilorButton from "../NilorButton";
import PreTitle from "../PreTitle";

function NilorLabs() {
  console.log(process.env.NEXT_PUBLIC_CLOUDFRONT_URL);
  return (
    <AnimatedSection>
      <div className="w-full flex flex-col justify-center items-center">
        <PreTitle pre="services" title="Innovation across the board" />
        <video
          src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}hermes.mp4`}
          autoPlay={true}
          loop
          controls={false}
          muted
          preload="auto"
          className="h-full w-full max-h-[800px]"
          disablePictureInPicture
          playsInline
        ></video>
        <NilorButton text="View Services" linkTo={"/services"} />
      </div>
    </AnimatedSection>
  );
}

export default NilorLabs;
