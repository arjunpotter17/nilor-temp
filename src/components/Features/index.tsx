import { AnimatedSection } from "../AnimateComponent";
import PreTitle from "../PreTitle";
import { VideoShowcase } from "./components/VideoShowcase";

export default function Features() {
  const feature1 = {
    title: "nilor.cool",
    points: [
      "Pool creative references as a team",
      "Collaborate and vote on a vision as a team",
      "Rapidly explore latent space – start with an idea, and our tools let you create and unearth connections and happy accidents",
      "Once you’ve created a collection, take it into our pro-user tools to instantly create high fidelity artworks for any canvas",
    ],
    imageUrl: `/nilor-cool.webp`,
    // videoUrl: `https://pub-05f59bf6323d4ee3a29185a0d7e91752.r2.dev/zenerator.mp4`,
  };
  const feature2 = {
    title: "Zenerator",
    points: [
      "Rapidly generate and iterate with less stress",
      "We’ve packaged up the custom workflows we can’t live without, and given them an easy to use interface",
      "Directly use images from our cloud platform to generate, or start here",
      "Upscale your work for those large, high resolution, immersive displays",
    ],
    imageUrl: `/zenerator-workflow.webp`,
  };
  return (
    <AnimatedSection>
      <div className="w-full bg-nilor-secondary flex flex-col items-center py-10 gap-y-10">
        <PreTitle pre="featured" title="Tools we can't put down" />

        <div className="max-w-[1152px] px-4 md:px-10 xl:px-0">
          <VideoShowcase {...feature1} />
          <VideoShowcase {...feature2} inverted />
        </div>
      </div>
    </AnimatedSection>
  );
}
