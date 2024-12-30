import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string; }[];
  error?: boolean;
}

export function Select({ options, error, className = '', ...props }: SelectProps) {
  const baseClasses = "w-full bg-gray-800 text-white rounded-lg px-4 py-2 border focus:border-blue-500 focus:outline-none";
  const errorClasses = error ? 'border-red-500' : 'border-gray-600';
  
  return (
    <select className={`${baseClasses} ${errorClasses} ${className}`} {...props}>
      {/* <option value="">Select {props.placeholder}</option> */}
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}