'use client';

import { useState, useEffect } from 'react';

export default function DynamicIsland() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const navItems = [
    { label: 'Releases', href: '/releases' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Issues', href: '/issues' },
  ];

  const handleScroll = () => {
    const currentY = window.scrollY;
    // Hide when scrolling down, show when scrolling up or near top
    setIsVisible(currentY < lastScrollY || currentY < 100);
    lastScrollY = currentY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed p-10 top-4 left-1/2 z-50 -translate-x-1/2 transform transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-20'
      }`}
    >
      <div
        className={`relative flex cursor-pointer items-center justify-center overflow-hidden rounded-3xl border border-gray-700 bg-gray-800 transition-all duration-500 ease-out ${
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
