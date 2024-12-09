import Carousel from "../Projects/components/Carousel";
import "../Projects/styles/carousel.css";


interface PlatformProps {
  slideCount?: number; // Default number of slides is 5
  pre?: string; // Title of the section
  title?: string; // Subtitle of the section
  carouselOptions?: {
    loop?: boolean;
    dragFree?: boolean;
  }; // Options for the carousel
}

export default function Platform({
  slideCount = 5, // Default value for slideCount
  pre = "OUR PLATFORM", // Default value for title
  title = "Visionary Solutions", // Default value for subtitle
  carouselOptions = { loop: true, dragFree: true }, // Default carousel options
}: PlatformProps) {
  
  // Generate the slide items dynamically based on slideCount
  const slides = Array.from(Array(slideCount).keys());

  return (
    <div className="flex flex-col w-full items-center gap-y-24">
      <p className="w-full text-center text-nilor-white text-landing-section-pre">
        {pre}
      </p>
      <p className="w-full text-center text-nilor-white text-landing-section-title">
        {title}
      </p>
      <div className="flex overflow-x-auto px-4 max-w-[1152px] w-full gap-x-3 h-full">
        <Carousel slides={slides} options={carouselOptions} />
      </div>
    </div>
  );
}
