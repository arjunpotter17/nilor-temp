import Image from "next/image";

interface ExpDataType {
    pre:string;
    title:string;
    para:string;
    buttonText:string;
    imgSrc:string;
    reverse?:boolean;
}

export default function ImmersiveExp({pre, title, para, buttonText, imgSrc, reverse = false}:ExpDataType) {
  return (
    <div className="bg-nilor-accent w-full px-4 md:px-0 py-32 flex justify-center items-center">
      <div className={`w-full flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:flex-row lg:justify-between lg:items-center max-w-[1152px]`}>
        <div className="flex flex-col text-nilor-black lg:max-w-[50%] gap-y-10">
          <p className="text-landing-section-pre">{pre}</p>
          <h1 className="text-landing-section-title">{title}</h1>
          <p className="text-landing-section-text">
            {para}
          </p>
          <button className="text-nilor-black bg-transparent border border-nilor-black rounded-full px-7 py-3 hover:bg-nilor-black hover:border-nilor-black hover:text-nilor-white font-bold w-fit">
            {buttonText}
          </button>
        </div>
        <div className="w-full lg:max-w-[40%] h-[500px] relative perspective-800">
          <div className={`w-full h-full relative transform ${reverse ? 'rotate-y-[20deg]' : ''} rotate-y-[-20deg]`}>
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
  );
}
