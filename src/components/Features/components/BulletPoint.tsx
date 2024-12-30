import React from 'react';
// import { CheckCircle } from 'lucide-react';

interface BulletPointProps {
  text: string;
}

export function BulletPoint({ text }: BulletPointProps) {
  return (
    <li className="flex items-start">
      {/* <CheckCircle className="flex-shrink-0 h-6 w-6 text-emerald-400 mr-2" /> */}
      <div className="flex-shrink-0 mr-3 mt-1.5">
        <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.3)]" />
      </div>
      <span className="text-lg text-nilor-offwhite">{text}</span>
    </li>
  );
}