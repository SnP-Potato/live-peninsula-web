'use client';

import { useState } from 'react';

interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  inDevelopment?: boolean;
  iconClass?: string;
}

export default function ActivityItem({
  icon,
  title,
  inDevelopment,
  iconClass,
}: ActivityItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 p-6 text-center transition-all duration-400"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? 'translateY(-8px) scale(1.02)'
          : 'translateY(0) scale(1)',
        backgroundColor: isHovered ? '#2c2c2e' : '#1c1c1e',
        borderColor: isHovered ? '#3c3c3e' : '#2c2c2e',
        boxShadow: isHovered ? '0 15px 35px rgba(0, 122, 255, 0.2)' : 'none',
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />

      <div
        className={`relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-600 transition-all duration-300 ${iconClass} ${isHovered ? 'scale-110 rotate-2' : 'scale-100 rotate-0'}`}
        style={{
          animation: isHovered ? 'pulse 1s infinite' : 'none',
        }}
      >
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/30 transition-all duration-300 ${isHovered ? 'h-15 w-15' : 'h-0 w-0'}`}
        />
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
