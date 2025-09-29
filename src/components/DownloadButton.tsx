'use client';

import React from 'react';

interface DownloadButtonProps {
  label?: string;
  downloadUrl?: string;
}

export default function DownloadButton({ 
  label = 'Download For Mac',
  downloadUrl = '/downloads/live-peninsula-beta.dmg'
}: DownloadButtonProps) {
  return (
    <a
      href={downloadUrl}
      download
      className="group relative inline-block rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-lg font-semibold text-white transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_35px_rgba(34,211,238,0.4)] overflow-hidden"
    >
      {/* Shimmer effect */}
      <div className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-[100%]" />

      {/* Label */}
      <span className="relative z-10">{label}</span>
    </a>
  );
}