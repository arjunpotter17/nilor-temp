"use client";
import { useState } from 'react';
import { TimelinePhase } from '../data';
import { useTimeline } from './TimelineContext';

interface TimelineNodeProps {
  phase: TimelinePhase;
  isLast: boolean;
}

export const TimelineNode = ({ phase, isLast }: TimelineNodeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { activePhase, setActivePhase } = useTimeline();
  const isActive = activePhase === phase.id;

  return (
    <div className={`relative flex-1 flex flex-col items-center transition-all duration-500
      ${isActive ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
      {/* Node */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setActivePhase(phase.id)}
        className={`w-16 h-16 rounded-full ${phase.color} relative group 
          transform transition-all duration-300
          hover:scale-95 cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        style={{
          transform: isHovered ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <div className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-100 transition-transform duration-300" />
      </button>

      {/* Connector Line */}
      {!isLast && (
        <div className={`absolute md:left-[calc(50%+32px)] md:w-[calc(100%-64px)] w-[2px] h-[calc(100%-32px)] md:h-[2px] bg-gray-300
          left-8 md:top-8 top-16 transition-opacity duration-300 ${isActive ? 'opacity-0' : ''}`}>
          <div className="h-full md:h-[2px] bg-gray-400 transform origin-left transition-transform duration-1000 animate-expand" />
        </div>
      )}

      {/* Labels */}
      <div className={`mt-6 text-center transition-all duration-300 ${isActive ? 'opacity-0 scale-0' : ''}`}>
        <h3 className="text-2xl font-bold text-nilor-accent">{phase.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{phase.subtitle}</p>
        <p className="text-sm text-gray-500 mt-2 max-w-xs">{phase.description}</p>
      </div>
    </div>
  );
};