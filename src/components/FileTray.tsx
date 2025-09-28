'use client';

import React from 'react';

export default function FileTray() {
  return (
    <div className="group relative rounded-2xl border-2 border-dashed border-gray-600 bg-gray-800 p-10 text-center transition-all duration-300 hover:scale-102 hover:border-blue-500 hover:bg-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative mx-auto mb-5 flex h-15 w-15 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-80" />
        <svg className="relative z-10 h-8 w-8 fill-white" viewBox="0 0 24 24">
          <path d="M10 4H4c-1.11 0-2 0.89-2 2v12c0 1.11 0.89 2 2 2h16c1.11 0 2-0.89 2-2V8c0-1.11-0.89-2-2-2h-8l-2-2z" />
        </svg>
      </div>

      <p className="relative z-10 text-gray-300">
        Try dragging files to the peninsula! You can temporarily store files in
        the saving tray, and AirDrop is also possible!
      </p>
    </div>
  );
}
