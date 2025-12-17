import React from 'react';
import { TrendingUp } from 'lucide-react';

interface ProgressBarProps {
  current: number;
  total: number;
  lang?: 'bn' | 'en';
}

function ProgressBar({ current, total, lang = 'bn' }: ProgressBarProps) {
  const percentage = Math.min(100, (current / total) * 100);

  const formatCurrency = (amount: number) => {
    if (lang === 'bn') {
      // show in লক্ষ if >= 100000
      if (amount >= 100000) {
        const lakhs = amount / 100000;
        return `${lakhs.toFixed(lakhs >= 10 ? 0 : 2)} লক্ষ`;
      }
      return `${amount.toLocaleString('en-IN')}`;
    }

    // English formatting - remove currency symbol
    if (amount >= 100000) {
      const lakhs = amount / 100000;
      return `${lakhs.toFixed(lakhs >= 10 ? 0 : 2)} L`;
    }
    return `${amount.toLocaleString()}`;
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="text-center flex-1">
          <p className="text-sm text-gray-400 mb-1">{lang === 'bn' ? 'সংগৃহীত' : 'Collected'}</p>
          <p className="text-2xl md:text-3xl font-bold text-[#b0db9c]">{formatCurrency(current)}</p>
        </div>
        <div className="flex items-center gap-2 text-[#b0db9c]">
          <TrendingUp className="w-8 h-8" />
        </div>
        <div className="text-center flex-1">
          <p className="text-sm text-gray-400 mb-1">{lang === 'bn' ? 'লক্ষ্যমাত্রা' : 'Target'}</p>
          <p className="text-2xl md:text-3xl font-bold text-white">{formatCurrency(total)}</p>
        </div>
      </div>

      <div className="relative w-full h-12 bg-gray-700 rounded-full overflow-hidden shadow-inner">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#b0db9c] via-[#78e0dc] to-[#b0db9c] rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-4"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 15 && (
            <span className="text-black font-bold text-lg">{percentage.toFixed(1)}%</span>
          )}
        </div>
        {percentage <= 15 && (
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 font-bold text-lg">
            {percentage.toFixed(1)}%
          </span>
        )}
      </div>

      <div className="mt-4 text-center">
        <p className="text-lg text-gray-300">
          {lang === 'bn' ? 'আরও প্রয়োজন:' : 'Remaining:'}{' '}
          <span className="font-bold text-red-400">{formatCurrency(total - current)}</span>
        </p>
      </div>
    </div>
  );
}

export default ProgressBar;