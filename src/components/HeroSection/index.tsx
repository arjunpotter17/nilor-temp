interface HeroPropsBase {
  text: string;
  src: string;
}

interface HeroPropsVideo extends HeroPropsBase {
  type: "video";
  pre?: never;
  title?: never;
}

interface HeroPropsImage extends HeroPropsBase {
  type: "image" | "bgVideo";
  pre: string;
  title: string;
}

type HeroProps = HeroPropsVideo | HeroPropsImage;

function HeroBanner({ type, text, src, pre, title }: HeroProps) {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center relative">
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
            <p className="text-landing-section-pre">{pre}</p>
            <p className="text-landing-section-title max-w-[60%] font-nilor-semibold">
              {title}
            </p>
          </div>
        </div>
      ) : type === "bgVideo" ? (
        <>
          <video
            className="absolute inset-0 w-full h-full object-cover z-10"
            src={src}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
          <div
            className="w-full min-h-[calc(100vh-100px)] bg-transparent flex items-center justify-center z-20"
           
          >
            <div className="flex flex-col text-nilor-white w-full h-full max-w-[1152px] gap-y-10">
              <p className="text-landing-section-pre">{pre}</p>
              <p className="text-landing-section-title max-w-[60%] font-nilor-semibold">
                {title}
              </p>
            </div>
          </div>
        </>
      ) : null}

      {text && (
        <p className="text-landing-section-text text-nilor-white max-w-[1152px] w-full text-justify pt-32">
          {text}
        </p>
      )}
    </div>
  );
}

export default HeroBanner;
