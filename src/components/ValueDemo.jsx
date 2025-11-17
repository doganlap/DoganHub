import React from 'react';
import { TrendingUp, TrendingDown, Minus, DollarSign, Clock, Target, Award } from 'lucide-react';

const ValueDemo = ({ 
  title, 
  currentValue, 
  targetValue, 
  improvement, 
  timeline, 
  metric,
  color = 'blue',
  icon: Icon = Target 
}) => {
  const colorClasses = {
    blue: {
      bg: 'from-blue-500 to-blue-600',
      text: 'text-blue-600 dark:text-blue-400',
      badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
    },
    green: {
      bg: 'from-green-500 to-green-600',
      text: 'text-green-600 dark:text-green-400',
      badge: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      text: 'text-purple-600 dark:text-purple-400',
      badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
    },
    orange: {
      bg: 'from-orange-500 to-orange-600',
      text: 'text-orange-600 dark:text-orange-400',
      badge: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
    },
    red: {
      bg: 'from-red-500 to-red-600',
      text: 'text-red-600 dark:text-red-400',
      badge: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
    }
  };

  const colors = colorClasses[color] || colorClasses.blue;
  const improvementPercent = ((targetValue - currentValue) / currentValue * 100).toFixed(1);
  const isPositive = improvement > 0;
  const TrendIcon = isPositive ? TrendingUp : improvement < 0 ? TrendingDown : Minus;

  return (
    <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-xl shadow-lg p-6 border border-white/30 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${colors.bg}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
          {metric}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        {title}
      </h3>

      {/* Values */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50">
          <span className="text-sm text-slate-600 dark:text-slate-400">Current Value</span>
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            {typeof currentValue === 'number' ? `$${currentValue.toLocaleString()}` : currentValue}
          </span>
        </div>
        
        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50">
          <span className="text-sm text-slate-600 dark:text-slate-400">Target Value</span>
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            {typeof targetValue === 'number' ? `$${targetValue.toLocaleString()}` : targetValue}
          </span>
        </div>
      </div>

      {/* Improvement */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-2">
          <TrendIcon className={`w-5 h-5 ${isPositive ? 'text-green-600' : 'text-red-600'}`} />
          <span className="font-semibold text-slate-900 dark:text-white">
            {improvementPercent}% Improvement
          </span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
          <Clock className="w-4 h-4" />
          <span>{timeline}</span>
        </div>
      </div>

      {/* ROI Indicator */}
      {typeof improvement === 'number' && (
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Estimated ROI</span>
            <span className={`font-bold ${colors.text}`}>
              {improvement > 0 ? '+' : ''}{improvement}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValueDemo;
