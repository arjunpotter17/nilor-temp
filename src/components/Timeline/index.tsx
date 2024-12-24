import { timelineData } from './data';
import { TimelineNode } from './components/TimelineNode';
import { TimelineContent } from './components/TimelineContent';
import { TimelineProvider } from './components/TimelineContext';

export const Timeline = () => {
  return (
    <TimelineProvider>
      <div className=" bg-nilor-secondary py-20 w-full">
        <div className="container mx-auto px-4">
         
          
          <div className="flex md:flex-row flex-col gap-8 md:gap-4 items-start relative">
            {timelineData.map((phase, index) => (
              <TimelineNode
                key={phase.id}
                phase={phase}
                isLast={index === timelineData.length - 1}
              />
            ))}
          </div>

          {timelineData.map(phase => (
            <TimelineContent key={phase.id} phase={phase} />
          ))}
        </div>
      </div>
    </TimelineProvider>
  );
};