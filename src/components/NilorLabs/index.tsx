function NilorLabs() {
    return (
      <div className="w-full h-[800px] flex flex-col justify-center items-center">
        <p className="text-4xl text-nilor-white text-justify mb-10" >
        Nilor Labs  
          </p>
          <p className="text-8xl text-nilor-white">Always State-of-the Art</p>
        <video
          src={`${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}labs.mp4`}
          autoPlay
          loop
          controls={false}
          muted
          className="h-full w-full"
          disablePictureInPicture
        ></video>
        <button className="text-nilor-white bg-transparent border rounded-full px-7 py-3 font-bold w-fit">View Services</button>
    
      </div>
    );
  }
  
  export default NilorLabs;
  