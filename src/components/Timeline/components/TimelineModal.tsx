import { useEffect, useRef, RefObject } from 'react';
import { TimelinePhase } from '../data';
import { X } from 'lucide-react';

interface TimelineModalProps {
  phase: TimelinePhase;
  isOpen: boolean;
  onClose: () => void;
  buttonRef: RefObject<HTMLButtonElement>;
}

export const TimelineModal = ({ phase, isOpen, onClose, buttonRef }: TimelineModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalContentRef.current && buttonRef.current) {
      const button = buttonRef.current;
      const modal = modalContentRef.current;
      const buttonRect = button.getBoundingClientRect();
      const modalRect = modal.getBoundingClientRect();
      
      // Calculate the center positions
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;
      const modalCenterX = window.innerWidth / 2;
      const modalCenterY = window.innerHeight / 2;
      
      // Calculate the translation needed
      const translateX = buttonCenterX - modalCenterX;
      const translateY = buttonCenterY - modalCenterY;
      
      // Set initial position and scale
      modal.style.transition = 'none';
      modal.style.transform = `
        translate(${translateX}px, ${translateY}px) 
        scale(${button.offsetWidth / modalRect.width})
      `;
      
      // Force reflow
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      modal.offsetHeight;
      
      // Animate to final position
      modal.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      modal.style.transform = 'translate(0, 0) scale(1)';
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleClose = () => {
    if (modalContentRef.current && buttonRef.current) {
      const button = buttonRef.current;
      const modal = modalContentRef.current;
      const buttonRect = button.getBoundingClientRect();
      const modalRect = modal.getBoundingClientRect();
      
      // Calculate the center positions
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;
      const modalCenterX = window.innerWidth / 2;
      const modalCenterY = window.innerHeight / 2;
      
      // Calculate the translation needed
      const translateX = buttonCenterX - modalCenterX;
      const translateY = buttonCenterY - modalCenterY;
      
      modal.style.transform = `
        translate(${translateX}px, ${translateY}px) 
        scale(${button.offsetWidth / modalRect.width})
      `;
      
      setTimeout(onClose, 500);
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500"
        onClick={handleClose} 
      />
      <div 
        ref={modalContentRef}
        className={`bg-white rounded-xl shadow-2xl w-full max-w-4xl m-4 p-8 relative ${phase.color} will-change-transform`}
      >
        <button
          onClick={handleClose}
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