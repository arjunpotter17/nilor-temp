import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
}

export function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  return (
    <div className="aspect-video rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.2)] ">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={videoUrl}
      />
    </div>
  );
}