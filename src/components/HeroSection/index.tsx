interface HeroPropsBase {
  text?: string;
  src: string;
  titleText?:string
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

function HeroBanner({ type, text, src, pre, title, titleText }: HeroProps) {
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
          <div className="flex flex-col text-nilor-white w-full h-full max-w-[1152px] gap-y-6">
            <p className="text-nilor-pre">{pre}</p>
            <p className="text-nilor-title max-w-[60%] font-nilor-semibold">
              {title}
            </p>
            {titleText && (
  <p className="text-nilor-hero-text font-nilor-light text-nilor-white w-[60%] text-justify whitespace-pre-wrap">
    {titleText.split('\n').map((line, index) => (
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
              <p className="text-nilor-pre">{pre}</p>
              <p className="text-nilor-title max-w-[60%] font-nilor-semibold">
                {title}
              </p>
            </div>
          </div>
        </>
      ) : null}

      {text && (
        <div className="max-w-[1152px] flex justify-center items-center pt-32">
        <p className="text-nilor-hero-text font-nilor-light text-nilor-white  w-[85%] text-justify">
          {text}
        </p>
        </div>
      )}
    </div>
  );
}

export default HeroBanner;
