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

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

interface Project {
  id: number;
  name?: string;
  title?: string;
  pre?: string;
  description?: string;
  buttonText?: string;
}

type PropType = {
  slides: Project[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
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
      <div className="embla__controls mb-10">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer flex flex-col gap-y-5 text-nilor-white ">
                  <div className="relative embla__slide__img ">
                    <Image
                      fill
                      src={`https://picsum.photos/600/350?v=${slide.id}`}
                      alt={slide.title || (slide.id as unknown as string)}
                    />
                     
                  </div>

                  {slide.pre &&
                    slide.title &&
                    slide.description &&
                    slide.buttonText && (
                      <div className="flex flex-col mt-10 pl-4">
                        <p className="text-nilor-pre text-nilor-grey">
                          {slide.pre}
                        </p>
                        <p className="text-nilor-section-title mt-5">
                          {slide.title}
                        </p>
                        <p className="text-nilor-section-text max-w-[50%] mt-10">
                          {slide.description}
                        </p>
                        <button className="text-nilor-white bg-transparent mt-10 border rounded-full px-7 py-3 hover:bg-nilor-accent hover:border-nilor-accent font-bold w-fit">
                          Visit
                        </button>
                      </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
