import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

type Step = {
  title: string;
  description: string;
  details: string;
  color: string;
};

const steps: Step[] = [
  {
    title: "Ideas",
    description: "brainstorming",
    details: "Rapid ideation within a team",
    color: "#FFE4C4",
  },
  {
    title: "Iterations",
    description: "pre-production",
    details: "Pre-visualization, storyboarding, toolmaking across 2D/3D",
    color: "#FFFF99",
  },
  {
    title: "Production Ready",
    description: "asset creation",
    details: "Refining imagination into reality and final assets",
    color: "#98FB98",
  },
  {
    title: "Playback",
    description: "unleashing",
    details: "From assets to audiences, across all manner of canvases",
    color: "#ADD8E6",
  },
];

const TimeLine = () => {
  return (
    <div className="bg-black text-white py-4 sm:py-8">
      <div className="max-w-[1152px] mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-start gap-4 lg:gap-8">
          {steps.map((step, index) => {
            const isLastStep = index === steps.length - 1;
            return (
              <React.Fragment key={step.title}>
                <div className="flex-1 flex flex-col items-center text-center min-w-[150px]">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${
                      isLastStep ? "glowing-circle" : ""
                    }`}
                    style={{ backgroundColor: step.color }}
                  ></div>
                  <h2 className="text-xl sm:text-2xl font-bold text-nilor-accent mt-4 mb-2 text-nowrap">
                    {step.title}
                  </h2>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base text-nowrap font-nilor-light">
                    {step.description}
                  </p>
                  <p className="text-xs sm:text-sm text-nilor-grey">
                    {step.details}
                  </p>
                </div>
                {!isLastStep && (
                  <div className="flex-[2] flex items-center justify-center mt-6">
                    <div className="w-full h-[2px] bg-gray-600 relative">
                      <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          {steps.map((step, index) => {
            const isLastStep = index === steps.length - 1;
            return (
              <React.Fragment key={step.title}>
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-12 h-12 rounded-full ${
                      isLastStep ? "glowing-circle" : ""
                    }`}
                    style={{ backgroundColor: step.color }}
                  ></div>
                  <h2 className="text-xl font-bold text-nilor-accent mt-4 mb-2">
                    {step.title}
                  </h2>
                  <p className="text-gray-400 mb-1 text-sm">
                    {step.description}
                  </p>
                  <p className="text-xs text-gray-500 max-w-[200px]">
                    {step.details}
                  </p>
                </div>
                {!isLastStep && (
                  <div className="h-12 w-[2px] bg-gray-600 relative">
                    <ArrowDown className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 text-gray-600 w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
