import PreTitle from "../PreTitle";
import Timeline from "../Timeline";
// import FlipCard from "./components/FlipCard";
// import { content } from "./constants";

export default function Overview() {
    return(
        <div className="w-full flex flex-col justify-center items-center text-nilor-white gap-y-10">
        <PreTitle pre="overview" title="Workflow"/>
        <div className=" max-w-[1152px]">
        {/* {content.map(card => <FlipCard key={card.content} title={card.title} content={card.content}/>)} */}
        <Timeline/>
        </div>
        </div>
    )
}