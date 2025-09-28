'use client';

import React from 'react';

interface DownloadButtonProps {
  label?: string;
}

export default function DownloadButton({ label = 'Download For Mac' }: DownloadButtonProps) {
  return (
    <button
      className="group relative inline-block rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_35px_rgba(0,122,255,0.4)] overflow-hidden"
    >
      {/* Shimmer effect */}
      <div className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-[100%]" />

      {/* Label */}
      <span className="relative z-10">{label}</span>
    </button>
  );
}
