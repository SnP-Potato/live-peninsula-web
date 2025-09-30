'use client';

import React from 'react';
import { Folder } from '@mui/icons-material';

export default function FileTray() {
  return (
    <div className="group relative rounded-2xl border-2 border-dashed border-gray-600 bg-gray-800 p-10 text-center transition-all duration-300 hover:scale-[1.02] hover:border-blue-500 hover:bg-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/20">

      <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-80" />
        <Folder sx={{ fontSize: 40 }} className="relative z-10 text-white" /> {/* Bigger, clean sizing */}
      </div>

      <p className="relative z-10 text-gray-300">
        Try dragging files to the peninsula! You can temporarily store files in
        the saving tray, and AirDrop is also possible!
      </p>
    </div>
  );
}

