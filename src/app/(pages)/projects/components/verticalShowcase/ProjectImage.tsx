import React, { useState, useRef, useEffect } from "react";

interface ProjectImageProps {
  title: string;
  imageUrl: string;
  videoUrl?: string; // New prop for video source
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  title,
  imageUrl,
  videoUrl
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoUrl) {
      if (isHovered) {
        videoRef.current.play().catch((error) => {
          console.log("Video autoplay failed:", error);
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <div
      className={`overflow-hidden rounded-lg transition-all duration-500 
        ${isHovered && videoUrl ? "scale-125 z-50 cursor-pointer" : "scale-100"}
        w-full md:w-1/2 aspect-video`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 w-full h-full">
        {/* Image shown when not hovered */}
        <img
          src={imageUrl}
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-300
            ${isHovered && videoUrl ? "opacity-0" : "opacity-100"}`}
        />
        
        {/* Video shown when hovered */}
       {videoUrl && <video
          ref={videoRef}
          src={videoUrl}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300
            ${isHovered ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          playsInline
          loop
        />}
      </div>
    </div>
  );
};
