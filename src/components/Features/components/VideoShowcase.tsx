import React from 'react';
import { Content } from './Content';
import { VideoPlayer } from './VideoPlayer';
import Image from 'next/image';

interface VideoShowcaseBaseProps {
  title: string;
  points: string[];
  inverted?: boolean;
}

interface VideoShowcaseWithVideo extends VideoShowcaseBaseProps {
  videoUrl: string;
  imageUrl?: never; // Ensures imageUrl cannot be set
}

interface VideoShowcaseWithImage extends VideoShowcaseBaseProps {
  imageUrl: string;
  videoUrl?: never; // Ensures videoUrl cannot be set
}

type VideoShowcaseProps = VideoShowcaseWithVideo | VideoShowcaseWithImage;

export function VideoShowcase({ inverted = false, videoUrl, title, points, imageUrl }: VideoShowcaseProps) {
  const contentOrder = inverted ? 'lg:order-2' : '';
  const videoOrder = inverted ? 'lg:order-1' : '';

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={contentOrder}>
            <Content title={title} points={points} />
          </div>
         { videoUrl ? <div className={videoOrder}>
            <VideoPlayer videoUrl={videoUrl} />
          </div> : imageUrl ?
          <div className='relative aspect-video rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.2)] '>
            <Image src={imageUrl} alt="zen workflow" fill />
          </div> : null
          }
        </div>
      </div>
    </section>
  );
}