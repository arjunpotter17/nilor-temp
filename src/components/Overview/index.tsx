import { Timeline } from "../Timeline";
// import FlipCard from "./components/FlipCard";
// import { content } from "./constants";

export default function Overview() {
    return(
        <div className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center text-nilor-white gap-y-10">
        <div className="flex flex-col gap-y-4 items-center">
        <p className="text-nilor-pre text-nilor-grey">overview</p>
        <h1 className="text-nilor-title">Pre to Post</h1>
        </div>
        <div className=" max-w-[1152px]">
        {/* {content.map(card => <FlipCard key={card.content} title={card.title} content={card.content}/>)} */}
        <Timeline/>
        </div>
        </div>
    )
}