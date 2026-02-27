'use client';

import { Target } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-9999 bg-donezo-bg flex flex-col items-center justify-center">
      <div className="relative mb-8">
        {/* Outer pulsing ring */}
        <div className="absolute inset-0 bg-donezo-primary/20 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
        
        {/* Inner spinning ring */}
        <div className="absolute -inset-2.5 border-4 border-transparent border-t-donezo-primary border-r-donezo-accent rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
        
        {/* Center Logo */}
        <div className="relative bg-white w-20 h-20 rounded-full shadow-lg flex items-center justify-center text-donezo-primary z-10">
          <Target size={40} strokeWidth={2.5} className="animate-pulse" />
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-donezo-text mb-2 flex items-center justify-center min-w-30">
          Donezo<span className="text-donezo-primary w-6 text-left">{dots}</span>
        </h2>
        <p className="text-sm text-donezo-text-muted font-medium animate-pulse">
          Preparing your workspace
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-1.5 bg-gray-200 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-donezo-primary rounded-full animate-[loading_2s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
}