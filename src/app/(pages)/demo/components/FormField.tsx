import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps {
  label: string;
  error?: string;
  touched?: boolean;
  children: React.ReactNode;
}

export function FormField({ label, error, touched, children }: FormFieldProps) {
  const labelClasses = "block text-sm font-nilor-medium text-gray-300 mb-1";
  return (
    <div className="mb-6">
      <label className={labelClasses}>{label}</label>
      {children}
      <div className={`
        flex items-center text-sm mt-1 h-5 transition-opacity duration-200
        ${error && touched ? 'text-red-500 opacity-100' : 'text-transparent opacity-0'}
      `}>
        <AlertCircle className="w-4 h-4 mr-1" />
        <span>{error || 'No error'}</span>
      </div>
    </div>
  );
}