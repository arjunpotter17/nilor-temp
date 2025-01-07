import React from 'react';
import { BulletPoint } from './BulletPoint';

interface ContentProps {
  title: string;
  points: string[];
}

export function Content({ title, points }: ContentProps) {
  return (
    <div className="~space-y-8/14">
      <h2 className="nilor-section-title font-nilor-regular text-white">{title}</h2>
      <ul className="space-y-4">
        {points.map((point, index) => (
          <BulletPoint key={index} text={point} />
        ))}
      </ul>
    </div>
  );
}