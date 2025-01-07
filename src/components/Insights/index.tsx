import NilorButton from "../NilorButton";
import { CardDemo } from "./components/InsightCard";
import { blogs } from "./constants";

export default function Insights() {
  return (
    <div className=" text-nilor-white max-w-[1152px] w-full mx-auto flex flex-col gap-y-10 ~px-4/0">
      <p className="nilor-title leading-none">Insight Power-ups</p>
      <div className="flex w-full items-center justify-between">
        <p className="text-nilor-pre">Get an edge and accelerate your vision.</p>
<NilorButton text="View All"/>
      </div>
      <div className="flex w-full gap-x-8 overflow-x-auto">
        {blogs.map(blog => <CardDemo details={blog} key={blog.type}/>)}
      </div>
    </div>
  );
}
