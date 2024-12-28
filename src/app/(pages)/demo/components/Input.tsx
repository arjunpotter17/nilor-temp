import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ error, className = '', ...props }: InputProps) {
  const baseClasses = "w-full bg-gray-800 text-white rounded-lg px-4 py-2 border focus:border-blue-800 focus:outline-none";
  const errorClasses = error ? 'border-red-500' : 'border-gray-600';
  
  return (
    <input
      className={`${baseClasses} ${errorClasses} ${className}`}
      {...props}
    />
  );
}