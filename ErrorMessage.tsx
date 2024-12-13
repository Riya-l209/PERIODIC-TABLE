import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="flex items-center justify-center h-64">
    <div className="flex items-center space-x-2 text-red-500">
      <AlertCircle size={24} />
      <span>{message}</span>
    </div>
  </div>
);