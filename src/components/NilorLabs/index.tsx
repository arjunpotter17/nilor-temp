import { AnimatedSection } from "../AnimateComponent";
import NilorButton from "../NilorButton";
import PreTitle from "../PreTitle";

function NilorLabs() {
  return (
    <AnimatedSection>
      <div className="w-full flex flex-col justify-center items-center">
        <PreTitle pre="services" title="Innovation across the board" />
        <video
          src={`https://pub-05f59bf6323d4ee3a29185a0d7e91752.r2.dev/labs.mp4`}
          autoPlay={true}
          loop
          controls={false}
          muted
          preload="auto"
          className="h-full w-full max-h-[800px]"
          disablePictureInPicture
        ></video>
        <NilorButton text="View Services" linkTo={"/services"} />
      </div>
    </AnimatedSection>
  );
}

export default NilorLabs;
