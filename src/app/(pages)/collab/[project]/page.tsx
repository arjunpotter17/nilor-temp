"use client";
import { collaborationDetails } from "@/app/constants/collaborationDetails";
import { usePathname } from "next/navigation";

export default function ProjectPage() {
  const pathname = usePathname();
  const project = pathname.split("/").pop();

  const projectDetails = collaborationDetails.find(
    (item) => item.title === project
  );

  if (!projectDetails) {
    return (
      <div className="w-full h-[calc(100vh-72px)] flex justify-center items-center">
        <p className="text-nilor-white px-4 text-center">
          <span className="text-nilor-accent">Dang it.</span> This collab does
          not exist yet. Loving the optimism but wait for it to happen.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full h-[calc(100vh-72px)]">
        <iframe
          src={projectDetails?.videoSrc}
          allow="loop; picture-in-picture; clipboard-write; encrypted-media; web-share"
          className="absolute top-0 left-0 w-full h-full object-cover"
          title={projectDetails?.iframeTitle}
          frameBorder="0"
        ></iframe>
      </div>
    </>
  );
}
