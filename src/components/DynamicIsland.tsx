'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Releases', href: '/releases' },
  { label: 'Home', href: '/' },
  { label: 'FAQ', href: '/faq' },
  // /issues redirects off-site, so it gets a plain anchor instead of <Link>.
  { label: 'Issues', href: '/issues', external: true },
];

export default function DynamicIsland() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  // Hide when scrolling down, return on scroll up. Never hide while in use.
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolledDown(currentScrollY > lastScrollY && currentScrollY > 100);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Touch has no hover: tapping anywhere else dismisses the open island.
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setIsOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isOpen]);

  const isHidden = isScrolledDown && !isOpen;

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      className={`fixed top-11 left-1/2 z-50 -translate-x-1/2 transition-[transform,opacity] duration-700 ease-(--spring) motion-reduce:duration-200 motion-reduce:ease-out ${
        isHidden
          ? 'pointer-events-none -translate-y-[180%] opacity-0 motion-reduce:translate-y-0'
          : 'translate-y-0 opacity-100'
      }`}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setIsOpen(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setIsOpen(false)}
      onFocus={(e) => e.target.matches(':focus-visible') && setIsOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setIsOpen(false);
      }}
    >
      <div
        className={`island relative overflow-hidden rounded-full transition-[width,height] duration-700 ease-(--spring) motion-reduce:duration-150 motion-reduce:ease-out ${
          isOpen ? 'h-12 w-[min(92vw,26rem)]' : 'h-10 w-44'
        }`}
      >
        {/* Resting state: who am I, and a way in. */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="island-links"
          onClick={() => setIsOpen(true)}
          className={`absolute inset-0 flex items-center justify-center gap-2 text-[13px] font-semibold tracking-[-0.01em] text-label transition-[opacity,filter,scale] duration-500 ease-(--spring) motion-reduce:transition-opacity ${
            isOpen
              ? 'pointer-events-none scale-95 opacity-0 blur-sm'
              : 'scale-100 opacity-100 blur-0'
          }`}
        >
          <Image
            src="/imgs/image-wave.png"
            alt=""
            width={20}
            height={20}
            className="size-5"
          />
          Live Peninsula
        </button>

        {/* Expanded state: where can I go. */}
        <ul
          id="island-links"
          className={`absolute inset-0 flex items-center justify-around px-2 transition-[opacity,filter,scale] duration-500 ease-(--spring) motion-reduce:transition-opacity ${
            isOpen
              ? 'scale-100 opacity-100 blur-0'
              : 'pointer-events-none scale-105 opacity-0 blur-sm'
          }`}
        >
          {navItems.map((item) => {
            const isCurrent =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            const className = `pressable block rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-[-0.01em] no-underline ${
              isCurrent
                ? 'bg-white/15 text-white'
                : 'text-label-secondary hover:bg-white/10 hover:text-white'
            }`;

            return (
              <li key={item.href}>
                {item.external ? (
                  <a href={item.href} className={className}>
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={isCurrent ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                    className={className}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
