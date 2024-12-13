import FlipCard from "./components/FlipCard";
import { content } from "./constants";

export default function Overview() {
    return(
        <div className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center text-nilor-white gap-y-10">
        
        <p className="text-landing-section-pre">OVERVIEW</p>
        <h1 className="text-landing-section-title">Pre to Post</h1>
        <div className="grid grid-cols-3 justify-center items-center gap-3 max-w-[1152px]">
        {content.map(card => <FlipCard key={card.content} title={card.title} content={card.content}/>)}
        </div>
        </div>
    )
}