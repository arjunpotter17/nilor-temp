import React from 'react';
// import { CheckCircle } from 'lucide-react';

interface BulletPointProps {
  text: string;
}

export function BulletPoint({ text }: BulletPointProps) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 mr-3 mt-1.5">
        <div className="h-3 w-3 rounded-full bg-nilor-accent" />
      </div>
      <span className="text-lg text-nilor-offwhite">{text}</span>
    </li>
  );
}