import React from 'react';
import { ArrowRight } from 'lucide-react';

const LaunchSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="bg-black rounded-2xl p-6 md:p-8 text-white">
        {/* Desktop Layout - Side by Side */}
        <div className="hidden md:flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Launch the TrueFlow Experience
          </h2>
          <a
            href="#"
            className="
              flex items-center gap-2 px-6 py-3
              bg-green-500 hover:bg-green-600 rounded-lg font-semibold
              transition-all duration-200 transform hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50
              shadow-lg hover:shadow-xl
            "
          >
            <span>Launch App</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden text-center space-y-6">
          <h2 className="text-xl font-bold leading-tight">
            Launch the TrueFlow Experience
          </h2>
          <a
            href="#"
            className="
              inline-flex items-center justify-center gap-2 w-full py-4 px-6
              bg-green-500 active:bg-green-600 rounded-lg font-semibold text-lg
              transition-all duration-200 transform active:scale-95
              focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50
              shadow-lg active:shadow-xl
            "
          >
            <span>Launch App</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LaunchSection;