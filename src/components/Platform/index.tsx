import Carousel from "../Projects/components/Carousel";
import "../Projects/styles/carousel.css";

export default function Platform() {
    const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return(
        <div className="flex flex-col w-full items-center gap-y-24">
        <p className="w-full text-center text-nilor-white text-landing-section-pre">OUR PLATFORM</p>
        <p className="w-full text-center text-nilor-white text-landing-section-title">Visionary Solutions</p>
        <div className="flex overflow-x-auto px-4  max-w-[1152px] w-full gap-x-3 h-full">
        <Carousel slides={SLIDES} options={{loop:true, dragFree:true}}/>
      </div>
        </div>
    )
}