function HeroVideo() {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center">
      <video
        src={`${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}landing-video.mp4`}
        autoPlay
        loop
        controls={false}
        muted
        className="h-full w-full"
        disablePictureInPicture
      ></video>
      <p className="text-4xl text-nilor-white max-w-[1152px] w-full text-justify pt-32" >
        Nilor creates, renders, and synchronizes cutting edge content for the
        worlds&apos; largest displays, building immersive and real-time visual
        experiences. We&apos;re driven to stay on top of the next generation AI stack
        (WIP closing sentence - key words/synonyms/ideas to convey tho: top of
        the stack, industry, results, magic) Walk into the
      </p>
    </div>
  );
}

export default HeroVideo;
