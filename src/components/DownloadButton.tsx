'use client';

import { useState } from 'react';

export default function DownloadButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`relative inline-block cursor-pointer overflow-hidden rounded-3xl border-none bg-gradient-to-r from-blue-500 to-purple-600 px-12 py-6 text-xl font-bold text-white shadow-lg transition-all duration-500 ${
        isHovered ? 'bg-blue-600' : 'bg-blue-500'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? 'translateY(-4px) scale(1.07)'
          : 'translateY(0) scale(1)',
        boxShadow: isHovered
          ? '0 20px 40px rgba(0, 122, 255, 0.45)'
          : '0 8px 20px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div
        className={`absolute top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 ${
          isHovered ? 'left-full' : '-left-full'
        }`}
      />
      <span className="relative z-10">Download for Mac</span>
    </button>
  );
}
