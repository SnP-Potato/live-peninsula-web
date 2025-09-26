import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-primary text-textlight flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-textlight mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
        지금 다운로드, 간단하게 시작하세요
      </h1>
      <p className="text-textlight/80 mb-8 max-w-xl text-center text-lg sm:text-xl">
        지금 바로 다운로드하고 새로운 경험을 시작해보세요.
      </p>
      <Link
        href="/download"
        className="bg-secondary text-textlight hover:bg-secondary-alt rounded-xl px-6 py-3 shadow-md transition"
      >
        다운로드 페이지로 이동 →
      </Link>
    </main>
  );
}
