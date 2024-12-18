import { CardDemo } from "./components/InsightCard";
import { blogs } from "./constants";

export default function Insights() {
  return (
    <div className=" text-nilor-white max-w-[1152px] w-full mx-auto flex flex-col gap-y-10">
      <p className="text-landing-section-title">Insight Power-ups</p>
      <div className="flex w-full items-center justify-between">
        <p className="text-landing-section-pre">Get an edge and accelerate your vision.</p>
        <button className="text-nilor-white bg-transparent border rounded-full px-7 py-3 font-bold hover:bg-nilor-accent hover:border-nilor-accent">View More</button>
      </div>
      <div className="flex w-full justify-between">
        {blogs.map(blog => <CardDemo details={blog} key={blog.type}/>)}
      </div>
    </div>
  );
}
