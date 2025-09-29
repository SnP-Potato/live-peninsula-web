'use client';

import { useState } from 'react';

export default function DynamicIsland() {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { label: 'Releases', href: '/releases' },
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Issues', href: 'https://github.com/SnP-Potato/live-peninsula-web/issues' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 transform pt-7">
      <div
        className={`relative flex cursor-pointer items-center justify-center overflow-hidden rounded-3xl border border-gray-700 bg-black-800 transition-all duration-500 ease-out ${
          isHovered ? 'h-12 w-72 sm:w-80' : 'h-9 w-32 sm:w-40'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex w-full items-center justify-around text-sm font-medium transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-textlight rounded-2xl px-3 py-1 no-underline transition-transform duration-200 hover:scale-105 hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
