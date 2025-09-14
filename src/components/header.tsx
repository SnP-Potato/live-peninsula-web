'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { HiOutlineSearch } from 'react-icons/hi';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setQuery('');
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const navVisibility = () => {
      const curScrollY = window.scrollY;
      if (curScrollY > lastScrollY) {
        // 스크롤 내릴 때 숨김
        setIsVisible(false);
      } else {
        // 스크롤 올릴 때 보이기
        setIsVisible(true);
      }
      lastScrollY = curScrollY;
    };

    window.addEventListener('scroll', navVisibility);
    return () => {
      window.removeEventListener('scroll', navVisibility);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full bg-header shadow-md z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-textlight">
        {/* 왼쪽: 로고 + 내비게이션 */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-semibold">
            Dynamic Notch
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/document" className="hover:text-accent transition">
              Docs
            </Link>
            <Link href="/faq" className="hover:text-accent transition">
              FAQ
            </Link>
            <Link href="/download" className="hover:text-accent transition">
              Download
            </Link>
          </div>
        </div>

        {/* 오른쪽: 검색 */}
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 rounded-md border border-line bg-secondary text-textlight placeholder:text-textlight/60 focus:outline-none focus:ring-2 focus:ring-line text-sm"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 px-2 text-textlight hover:text-secondary-alt"
          >
            <HiOutlineSearch className="w-5 h-5" />
          </button>
        </form>
      </div>
    </nav>
  );
}
