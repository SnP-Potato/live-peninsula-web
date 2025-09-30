
const blogPosts = [
  {
    id: 1,
    title: 'DynamicLake - bring Liquid Glass to Dynamic Island',
    date: 'September 3, 2025',
    thumbnail: '/imgs/blog1.jpg',
    slug: 'dynamic-lake-liquid-glass',
  },
  {
    id: 2,
    title: 'Master the New Timer in Dynamic Lake',
    date: 'August 12, 2025',
    thumbnail: '/imgs/blog2.jpg',
    slug: 'new-timer-dynamic-lake',
  },
  {
    id: 3,
    title: 'DynaMusic: Music Control in Dynamic Island Style',
    date: 'July 11, 2025',
    thumbnail: '/imgs/blog3.jpg',
    slug: 'dynamusic-music-control',
  },
  {
    id: 4,
    title: 'Liquid Skeudd - Revive Skeudd Design in Live Peninsula',
    date: 'June 25, 2025',
    thumbnail: '/imgs/blog4.jpg',
    slug: 'liquid-skeudd-design',
  },
];

export default function ReleasesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        {/* 타이틀 */}
        <h1 className="mb-8 text-6xl font-bold">Releases</h1>

        {/* 구분선 */}
        <div className="mb-12 h-px bg-gray-700"></div>

        {/* 블로그 포스트 리스트 - 비어있음 */}
        <div className="space-y-12">
          {/* 여기에 블로그 포스트가 들어갑니다 */}
        </div>
      </div>
    </main>
  );
}