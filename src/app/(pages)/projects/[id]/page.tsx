"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronDown, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { allProjects as projects } from "@/app/constants/indi_project_details";
import { usePathname, useRouter } from "next/navigation";

const ProjectDetails = () => {
  const params = usePathname();
  const router = useRouter();
  const projectName = decodeURIComponent(
    params.split("/")[params.split("/").length - 1]
  );
  const project = projects.find((p) => p.name.toLocaleLowerCase() === projectName.toLocaleLowerCase());
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  useEffect(() => {
    if (!showCarousel) {
      const timer = setTimeout(nextImage, 8000); // Wait for 8 seconds before switching
      return () => clearTimeout(timer);
    }
  }, [currentImageIndex, project, showCarousel]);

  const toggleView = () => {
    setShowCarousel((prev) => !prev);
  };

  const nextThumbnail = () => {
    if (project) {
      setSelectedThumbnailIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousThumbnail = () => {
    if (project) {
      setSelectedThumbnailIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-100px)] bg-black relative px-4 md:px-10 xl:px-0">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        {!showCarousel && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {" "}
            <div className="absolute inset-0 z-0 min-h-[calc(100vh-100px)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={project.images[currentImageIndex]}
                  alt={`${project.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ opacity: { duration: 1.5 } }} // Smooth transition duration
                />
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

        {/*Transparent layer*/}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 z-10" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full">
        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-center pt-5 lg:pt-10">
          <div className="max-w-[1152px] w-full flex justify-between items-center">
            <button
              onClick={() => router.back()}
              className="group inline-flex items-center text-nilor-offwhite hover:text-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5 mr-1 group-hover:text-nilor-accent" />
              Back
            </button>

            <button
              onClick={toggleView}
              className="text-white/80 group transition-colors w-fit h-fit flex items-center gap-x-2"
            >
              Media
              <motion.div
                animate={{ rotate: showCarousel ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-6 w-6 group-hover:text-nilor-accent" />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Text Content */}
        <AnimatePresence mode="wait">
          {!showCarousel && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="pb-5 self-end  mt-10"
            >
              <div className="w-full flex items-center justify-center min-h-[calc(100vh-150px)]">
                <div className="self-end w-full max-w-[1152px]">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {project.name}
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl max-w-3xl whitespace-pre-line">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        {showCarousel && (
          <motion.div
            key="carousel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="h-screen flex items-center justify-center"
          >
            <div className="w-full lg:max-w-[1152px] z-10">
              <div className="relative md:aspect-[16/9]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedThumbnailIndex}
                    src={project.images[selectedThumbnailIndex]}
                    alt={`${project.name} - Image ${
                      selectedThumbnailIndex + 1
                    }`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                <button
                  onClick={previousThumbnail}
                  className="absolute left-4 top-1/2 -translate-y-1/2  md:p-3 rounded-full transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-white hover:text-nilor-accent" />
                </button>
                <button
                  onClick={nextThumbnail}
                  className="absolute right-4 top-1/2 -translate-y-1/2 md:p-3 rounded-full transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-white hover:text-nilor-accent" />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedThumbnailIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === selectedThumbnailIndex
                        ? "bg-nilor-accent"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;
