import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

const PoweredByBadge = ({ position = 'bottom-right', size = 'md' }) => {
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6',
  };

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-3',
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-40 group`}>
      <div className={`backdrop-blur-xl bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90 rounded-2xl shadow-2xl border-2 border-white/30 ${sizeClasses[size]} transform hover:scale-110 transition-all duration-300 cursor-pointer`}>
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-white animate-pulse" />
          <div className="flex flex-col">
            <span className="text-white font-black leading-tight">
              DoganConsult × Shahin-AI
            </span>
            <span className="text-white/70 text-xs font-semibold leading-tight flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              AI-Powered Solutions
            </span>
          </div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
    </div>
  );
};

export default PoweredByBadge;
