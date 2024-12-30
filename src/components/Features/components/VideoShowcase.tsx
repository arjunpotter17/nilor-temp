import React from 'react';
import { Content } from './Content';
import { VideoPlayer } from './VideoPlayer';

interface VideoShowcaseProps {
  inverted?: boolean;
  videoUrl: string;
  title: string;
  points: string[];
}

export function VideoShowcase({ inverted = false, videoUrl, title, points }: VideoShowcaseProps) {
  const contentOrder = inverted ? 'lg:order-2' : '';
  const videoOrder = inverted ? 'lg:order-1' : '';

  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={contentOrder}>
            <Content title={title} points={points} />
          </div>
          <div className={videoOrder}>
            <VideoPlayer videoUrl={videoUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}