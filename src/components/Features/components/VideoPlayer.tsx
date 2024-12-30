import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
}

export function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  return (
    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.2)]">
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