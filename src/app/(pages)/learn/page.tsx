import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import Projects from "@/components/Projects";
import {projects} from '@/components/Projects/constants'



export default function Learn() {
    const tutorials = [
        `<iframe width="100%" height="400" src="https://www.youtube.com/embed/tf3lcSQDmYU?si=Xygz19D1YLtPTAIH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        `<iframe width="100%" height="400" src="https://www.youtube.com/embed/1RYoSqCjFsI?si=gYIqo6jLQBVvb1ja" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        `<iframe width="100%" height="400" src="https://www.youtube.com/embed/r88aOTtXfY8?si=mYugoHeBYVtWYh7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ]
    return(
        <div className="flex flex-col w-full gap-y-[200px]">
        <HeroBanner type="bgVideo" src={`https://pub-05f59bf6323d4ee3a29185a0d7e91752.r2.dev/barbie.mp4`} pre={"LEARN"} title="Master the Art of Immersive Creation" text={`We empower you to harness the full potential of our platform through comprehensive learning resources. From AI-powered content generation to synchronized display management, our expert-led tutorials guide you through every aspect of creating transformative visual experiences. Learn at your own pace with tutorials crafted by the same artists and technologists who build our tools.`}/>
        <Projects pre="learn" title="Effortless Mastery" tutorials={tutorials}/>
        <Footer/>
        </div>
    )
}