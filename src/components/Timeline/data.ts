export interface TimelinePhase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  details: {
    title: string;
    content: string[];
  }[];
}

export const timelineData: TimelinePhase[] = [
  {
    id: "ideation",
    title: "Ideas",
    subtitle: "brainstorming",
    color: "bg-orange-200",
    description: "Rapid ideation within a team",
    details: [
      {
        title: "Process",
        content: [
          "Collaborative brainstorming sessions",
          "Market research and analysis",
          "User needs assessment",
          "Initial concept development",
        ],
      },
      {
        title: "Deliverables",
        content: [
          "Project brief",
          "Initial sketches",
          "Market analysis report",
          "User personas",
        ],
      },
    ],
  },
  {
    id: "iterations",
    title: "Iteration",
    subtitle: "pre-production",
    color: "bg-yellow-200",
    description: "Pre-visualization, storyboarding, toolmaking across 2D/3D",
    details: [
      {
        title: "Design Phase",
        content: [
          "Wireframe development",
          "Interactive prototypes",
          "User feedback integration",
          "Design refinement",
        ],
      },
      {
        title: "Technical Planning",
        content: [
          "Architecture planning",
          "Technology stack selection",
          "Performance optimization strategy",
          "Security considerations",
        ],
      },
    ],
  },
  {
    id: "production",
    title: "Production Ready",
    subtitle: "asset creation",
    color: "bg-green-200",
    description: "Refining imagination into reality and final assets",
    details: [
      {
        title: "Development",
        content: [
          "Core functionality implementation",
          "Integration testing",
          "Performance optimization",
          "Quality assurance",
        ],
      },
      {
        title: "Infrastructure",
        content: [
          "Deployment pipeline setup",
          "Monitoring implementation",
          "Scaling strategy",
          "Backup solutions",
        ],
      },
    ],
  },
  {
    id: "playback",
    title: "Playback",
    subtitle: "unleashing",
    color: "bg-blue-200",
    description: "From assets to audiences, across all manner of canvases",
    details: [
      {
        title: "Features",
        content: [
          "Real-time rendering",
          "AI-powered optimization",
          "Multi-platform support",
          "Advanced analytics",
        ],
      },
      {
        title: "Benefits",
        content: [
          "Improved performance",
          "Reduced time-to-market",
          "Enhanced user experience",
          "Scalable solution",
        ],
      },
    ],
  },
];
