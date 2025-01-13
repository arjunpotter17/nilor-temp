import { AnimatedSection } from "../AnimateComponent";
import PreTitle from "../PreTitle";
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
        videoUrl: `https://pub-05f59bf6323d4ee3a29185a0d7e91752.r2.dev/zenerator.mp4`
      };
    const feature2 = {
        title: "Need a title",
        points: [
          "Rapidly generate and iterate on our cloud platform",
          "We’ve packaged up the custom ComfyUI workflows we can’t live without, with an easy to use GUI",
          "Directly use images from our cloud platform to generate video",
          "Then upscale it for large, high resolution, immersive displays",
        ],
        imageUrl: `/zenerator-workflow.png`
    }
  return (
    <AnimatedSection>


    <div className="w-full bg-nilor-secondary flex flex-col items-center py-10 gap-y-10">
      <PreTitle pre="features" title="Empowering Creation"/>
      
      <div className="max-w-[1152px] px-4 md:px-10 xl:px-0">
      <VideoShowcase {...feature1} />
      <VideoShowcase {...feature2} inverted />
      </div>
    </div>
    </AnimatedSection>
  );
}
