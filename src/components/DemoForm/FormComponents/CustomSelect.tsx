import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLDivElement>, "onChange"> {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  placeholder?: string;
  onBlur?: () => void;
}

export function CustomSelect({
  options,
  value,
  onChange,
  error,
  placeholder,
  onBlur,
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [wasOpened, setWasOpened] = useState(false); // Track if dropdown was opened
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        if (isOpen && wasOpened && onBlur) {
          onBlur(); // Call onBlur only if the dropdown was opened
        }
        setIsOpen(false);
        setWasOpened(false); // Reset the flag
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, wasOpened, onBlur]);

  return (
    <div ref={selectRef} className="relative">
      <div
        className={`
          w-full bg-gray-800 text-white rounded-lg px-4 py-2 border cursor-pointer
          ${error ? "border-red-500" : "border-gray-600"}
          ${className}
        `}
        onClick={() => {
          setIsOpen(!isOpen);
          setWasOpened(true); // Mark as opened
        }}
      >
        <div className="flex items-center justify-between">
          <span className={!selectedOption ? "text-gray-400" : ""}>
            {selectedOption ? selectedOption.label : `Select ${placeholder}`}
          </span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-4 py-2 cursor-pointer hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
