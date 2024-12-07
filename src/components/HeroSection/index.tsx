interface HeroProps {
  type: "video" | "image";
  text: string;
  src: string;
}

function HeroBanner({ type, text, src }: HeroProps) {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center">
      {type == "video" ? (
        <video
          src={src}
          autoPlay
          loop
          controls={false}
          muted
          className="h-full w-full"
          disablePictureInPicture
        ></video>
      ) : type === "image" ? (
        <div
      className="w-full min-h-[calc(100vh-100px)] bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${src})` }}
    >
          <div className="flex flex-col text-nilor-white w-full h-full max-w-[1152px] gap-y-10">
          <p className="text-landing-section-pre">SOLUTIONS</p>
          <p className="text-landing-section-title max-w-[60%] font-nilor-semibold">A Complete Visual Experience Ecosystem</p>
          </div>
        </div>
      ) : null}
      {text && <p className="text-landing-section-text text-nilor-white max-w-[1152px] w-full text-justify pt-32">
        {text}
      </p>}
    </div>
  );
}

export default HeroBanner;
