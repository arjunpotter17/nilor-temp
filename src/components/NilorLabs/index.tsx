function NilorLabs() {
  return (
    <div className="w-full min-h-[800px] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-y-8 w-full items-center">
        <p className="text-landing-section-pre text-nilor-grey text-justify">
          NILOR LABS
        </p>
        <p className="text-landing-section-title text-nilor-white mb-2">
          Always State-of-the Art
        </p>
      </div>
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
      <button className="text-nilor-white bg-transparent border rounded-full px-7 py-3 font-bold w-fit hover:bg-nilor-accent hover:border-nilor-accent">
        View Services
      </button>
    </div>
  );
}

export default NilorLabs;
