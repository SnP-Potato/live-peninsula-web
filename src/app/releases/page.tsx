// import { DownloadDone } from '@mui/icons-material';

// export default function ReleasesPage() {
//   return (
//     <main className="bg-primary text-textlight flex min-h-screen items-center justify-center px-6">
//       <section className="bg-secondary w-full max-w-2xl rounded-2xl p-10 text-center shadow-lg">
//         {/* 제목 */}
//         <h2 className="mb-4 text-3xl font-bold">📦 다운로드</h2>
//         <p className="text-textlight/80 mb-8">
//           최신 버전: <span className="font-semibold">1.0.0</span>
//         </p>

//         {/* 다운로드 리스트 */}
//         <ul className="space-y-4">
//           <li>
//             <a
//               href="/downloads/live-peninsula-beta.dmg"
//               download
//               className="bg-accent hover:bg-secondary-alt flex items-center justify-center gap-3 rounded-xl px-6 py-3 font-medium text-white shadow-md transition"
//             >
//               <DownloadDone className="h-5 w-5" />
//               최신 버전 (.dmg)
//             </a>
//           </li>
//         </ul>

//         {/* 하단 안내 */}
//         <p className="text-textlight/60 mt-6 text-sm">
//           설치 후 실행이 안 되면, 보안 설정에서 앱 실행을 허용해 주세요.
//         </p>
//       </section>
//     </main>
//   );
// }
import Image from 'next/image';
import Link from 'next/link';

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