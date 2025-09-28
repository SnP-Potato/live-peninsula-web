'use client';

import React from 'react';

interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  iconClass?: string;
  inDevelopment?: boolean;
}

export default function ActivityItem({
  icon,
  title,
  iconClass,
  inDevelopment,
}: ActivityItemProps) {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-gray-600 hover:bg-gray-900 hover:shadow-[0_15px_35px_rgba(0,122,255,0.2)]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div
        className={`relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 group-hover:animate-pulse ${iconClass}`}
      >
        <div className="absolute top-1/2 left-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 transition-all duration-300 group-hover:h-15 group-hover:w-15" />
        {icon}
      </div>

      <h3 className="relative z-10 mb-1 text-lg">{title}</h3>

      {inDevelopment && (
        <div className="mt-1 inline-block rounded-lg bg-orange-500/20 px-2 py-1 text-xs text-orange-400">
          in development
        </div>
      )}
    </div>
  );
}
