'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search } from '@mui/icons-material';

export default function Navbar() {
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
      className={`bg-header fixed top-0 z-50 w-full shadow-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="text-textlight mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* 왼쪽: 로고 + 내비게이션 */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-semibold">
            Live Peninsula
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
            className="border-line bg-secondary text-textlight placeholder:text-textlight/60 focus:ring-line rounded-md border px-4 py-2 text-sm focus:ring-2 focus:outline-none"
          />
          <button
            type="submit"
            className="text-textlight hover:text-secondary-alt absolute top-1/2 right-1 -translate-y-1/2 px-2"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>
      </div>
    </nav>
  );
}
