'use client';

import { useState } from 'react';

export default function DynamicIsland() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center my-16 mb-20">
      <div
        className={`bg-gray-800 rounded-b-3xl h-9 flex items-center justify-center cursor-pointer border border-gray-700 relative overflow-hidden transition-all duration-500 ease-out ${
          isHovered ? 'w-80 h-11' : 'w-35'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex items-center justify-around w-full text-sm font-medium transition-opacity duration-300 ${
            isHovered ? 'opacity-100 delay-200' : 'opacity-0'
          }`}
        >
          {['Realeases', 'FAQ', 'Download'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-textlight no-underline px-4 py-2 rounded-2xl transition-all duration-200 hover:bg-white/10 hover:scale-105"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
