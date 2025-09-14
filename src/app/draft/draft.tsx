import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-primary text-textlight px-6">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-textlight">
        지금 다운로드, 간단하게 시작하세요
      </h1>
      <p className="text-lg sm:text-xl mb-8 text-center max-w-xl text-textlight/80">
        지금 바로 다운로드하고 새로운 경험을 시작해보세요.
      </p>
      <Link
        href="/download"
        className="px-6 py-3 bg-secondary text-textlight rounded-xl hover:bg-secondary-alt transition shadow-md"
      >
        다운로드 페이지로 이동 →
      </Link>
    </main>
  );
}
