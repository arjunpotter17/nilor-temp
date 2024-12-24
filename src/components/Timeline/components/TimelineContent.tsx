"use client";
import { TimelinePhase } from '../data';
import { useTimeline } from './TimelineContext';
import { X } from 'lucide-react';

interface TimelineContentProps {
  phase: TimelinePhase;
}

export const TimelineContent = ({ phase }: TimelineContentProps) => {
  const { activePhase, setActivePhase } = useTimeline();
  const isActive = activePhase === phase.id;

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className={`w-full max-w-4xl m-4 p-8 rounded-xl shadow-2xl ${phase.color}
          animate-modalEntry`}
      >
        <button
          onClick={() => setActivePhase(null)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-4">
          <h2 className="text-2xl font-bold">{phase.title}</h2>
          <p className="text-sm opacity-75">{phase.subtitle}</p>
        </div>

        <p className="text-gray-600 mb-6">{phase.description}</p>

        <div className="space-y-6">
          {phase.details.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              <ul className="list-disc list-inside space-y-2">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};