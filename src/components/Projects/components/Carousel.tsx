"use client";
import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselButtons";
import Image from "next/image";
import NilorButton from "@/components/NilorButton";
import { useRouter } from "next/navigation";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

interface Project {
  id: number;
  url:string;
  name?: string;
  title?: string;
  pre?: string;
  description?: string;
  buttonText?: string;
  btnLink?:string;
}

type PropType = {
  slides?: Project[];
  options?: EmblaOptionsType;
  tutorials?:string[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, tutorials } = props;
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const opacity = numberWithinRange(tweenValue, 0, 1).toString()
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity
        });
      });
    },
    []
  );



  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi, tweenOpacity])

  return (
    <div className="embla">
      <div className="embla__controls ~mb-5/10">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="overflow-hidden " ref={emblaRef}>
        <div className="embla__container">
          {slides?.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer flex flex-col !justify-start gap-y-5 text-nilor-white">
                  <div className="relative embla__slide__img ">
                    <Image
                      fill
                      src={slide.url}
                      alt={slide.title || (slide.id as unknown as string)}
                    />
                     
                  </div>

                  {slide.pre &&
                    slide.title &&
                    slide.description &&
                    slide.buttonText && (
                      <div className="flex flex-col ~mt-2/10 pl-4">
                        <p className="nilor-pre text-nilor-accent">
                          {slide.pre}
                        </p>
                        <p className="nilor-section-title ~mt-1/5">
                          {slide.title}
                        </p>
                        <p className="nilor-section-text max-w-full md:max-w-[50%] mt-10">
                          {slide.description}
                        </p>
                        
                        <NilorButton onClick={() => router.push(slide.btnLink ? slide.btnLink : `/projects/${slide.title}`)} text="More" className="!mt-10"/>
                      </div>
                    )}
                </div>
              </div>
            </div>
          ))}
          {tutorials && tutorials.map((tutorial, index) => (
            <div className="embla__slide w-full" key={index} 
            dangerouslySetInnerHTML={{ __html: tutorial }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
