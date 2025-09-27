'use client';

import { useState } from 'react';

export default function DynamicIsland() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="my-16 mb-20 flex justify-center">
      <div
        className={`relative flex h-9 cursor-pointer items-center justify-center overflow-hidden rounded-3xl border border-gray-700 bg-gray-800 transition-all duration-500 ease-out ${
          isHovered ? 'h-11 w-80' : 'w-35'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex w-full items-center justify-around text-sm font-medium transition-opacity duration-300 ${
            isHovered ? 'opacity-100 delay-200' : 'opacity-0'
          }`}
        >
          {['Realeases', 'FAQ', 'Download'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-textlight rounded-2xl px-4 py-2 no-underline transition-all duration-200 hover:scale-105 hover:bg-white/10"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
