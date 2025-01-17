"use client";
import Image from "next/image";
import PreTitle from "../PreTitle";
import NilorButton from "../NilorButton";
import { useRouter } from "next/navigation";
import { AnimatedSection } from "../AnimateComponent";

interface singleProjectProps {
  pre: string;
  title: string;
  btnTxt: string;
  linkTo: string;
  desc: string;
  imageUrl: string;
}
export default function SingleProject({
  pre,
  title,
  desc,
  imageUrl,
}: singleProjectProps) {
  const router = useRouter();
  return (
    <AnimatedSection>
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-full max-w-[1152px] gap-y-10">
          <PreTitle pre="featured project" title={title} />
          <div className="relative h-[20rem] w-full md:h-[30rem] md:w-[95%] mx-4 md:mx-0">
            <Image src={imageUrl} fill alt="project image" objectFit="cover " />
          </div>

          <div className="flex flex-col ~mt-2/10 px-4 md:px-10 xl:px-0 self-start text-nilor-white">
            <p className="nilor-pre text-nilor-accent">{pre}</p>
            <p className="nilor-section-title mt-2">{title}</p>
            <p className="nilor-section-text max-w-full md:max-w-[80%] mt-10">
              {desc}
            </p>

            <NilorButton
              onClick={() => router.push(`/projects/${title}`)}
              text="More"
              className="!mt-10"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
