import { VideoShowcase } from "./components/VideoShowcase";

export default function Features() {
    const feature1 = {
        title: "Need a title",
        points: [
          "Pool creative references as a team",
          "Collaborate and vote on a vision as a team",
          "Rapidly explore latent space – start with an idea, and our tools let you effortlessly discover connections and happy accidents a-plenty!",
          "Once you’ve discovered a style, import the collection into our pro user tools to instantly create high fidelity artworks for immersive exhibition canvases",
        ],
        videoUrl: `${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}landing-video.mp4`
      };
    const feature2 = {
        title: "Need a title",
        points: [
          "Rapidly generate and iterate on our cloud platform",
          "We’ve packaged up the custom ComfyUI workflows we can’t live without, with an easy to use GUI",
          "Directly use images from our cloud platform to generate video",
          "Then upscale it for large, high resolution, immersive displays",
        ],
        videoUrl: `${process.env.NEXT_PUBLIC_CLOUDFLARE_URL}landing-video.mp4`
    }
  return (
    <div className="w-full bg-nilor-secondary flex flex-col items-center py-10 gap-y-10">
      <div className="flex flex-col gap-y-8 w-full items-center">
        <p className="text-nilor-pre text-nilor-grey text-justify">Features</p>
        <h1 className="text-nilor-title text-nilor-white mb-2">
          Empowering Creation
        </h1> 
      </div>
      <div className="max-w-[1152px]">
      <VideoShowcase {...feature1} />
      <VideoShowcase {...feature2} inverted />
      </div>
    </div>
  );
}
