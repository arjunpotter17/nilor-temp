import { AnimatedSection } from "../AnimateComponent";
import PreTitle from "../PreTitle";
import Timeline from "../Timeline";

export default function Overview() {
    return(
        <AnimatedSection>


        <div className="w-full flex flex-col justify-center items-center text-nilor-white gap-y-10">
        <PreTitle pre="overview" title="Workflow"/>
        <div className=" max-w-[1152px] px-4 md:px-10 xl:px-0">
        <Timeline/>
        </div>
        </div>
        </AnimatedSection>
    )
}