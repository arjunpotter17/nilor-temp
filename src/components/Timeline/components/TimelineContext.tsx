"use client";
import { createContext, useContext, useState } from 'react';

interface TimelineContextType {
  activePhase: string | null;
  setActivePhase: (id: string | null) => void;
}

const TimelineContext = createContext<TimelineContextType>({
  activePhase: null,
  setActivePhase: () => {},
});

export const useTimeline = () => useContext(TimelineContext);

export const TimelineProvider = ({ children }: { children: React.ReactNode }) => {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  return (
    <TimelineContext.Provider value={{ activePhase, setActivePhase }}>
      {children}
    </TimelineContext.Provider>
  );
};