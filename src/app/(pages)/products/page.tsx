import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroSection";
import Platform from "@/components/Platform";
import TabSwitch from "@/components/TabSliders";


export default function Solutions() {
    const tabs = [
        {
            tabName:"Hardware 1",
            title:"Best Hardware 1",
            buttonText:"Learn More",
            para:"This is a great hardware that we offer. It is obviously not as good as the others on the list. You should pick the one that is most expensive.",
            imgSrc:'/hardware-placeholder.webp'
        },
        {
            tabName:"Hardware 2",
            title:"Best Hardware 2",
            buttonText:"Learn More",
            para:"This is a great hardware that we offer. It is obviously not as good as the others on the list. You should pick the one that is most expensive.",
            imgSrc:'/hardware-placeholder.webp'
        },
        {
            tabName:"Hardware 3",
            title:"Best Hardware 3",
            buttonText:"Learn More",
            para:"This is a great hardware that we offer. It is obviously not as good as the others on the list. You should pick the one that is most expensive.",
            imgSrc:'/hardware-placeholder.webp'
        },
        {
            tabName:"Hardware 4",
            title:"Best Hardware 4",
            buttonText:"Learn More",
            para:"This is a great hardware that we offer. It is obviously not as good as the others on the list. You should pick the one that is most expensive.",
            imgSrc:'/hardware-placeholder.webp'
        },
    ]
  return (
    <div className="flex flex-col w-full gap-y-[200px]">
    <HeroBanner
      type="image"
      src="/products-hero.png"
      pre="PRODUCTS"
      title="Some catchy title"
      text={`REWRITE THIS: Nilor creates, renders, and synchronizes cutting edge content for the worlds' largest displays, building immersive and real-time visual experiences. We're driven to stay on top of the next generation AI stack (WIP closing sentence - key words/synonyms/ideas to convey tho: top of the stack, industry, results, magic)`}
    />
    <Platform slideCount={6} pre="Design and Collaborate" title="High Powered Software"/>
    <TabSwitch pre="DELIVER" title="Scalable and Versatile Hardware" tabs={tabs}/>
    <Footer/>

    </div>
  );
}
