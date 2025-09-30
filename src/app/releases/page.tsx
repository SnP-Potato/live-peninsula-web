import { DownloadDone } from '@mui/icons-material';

export default function ReleasesPage() {
  return (
    <main className="bg-primary text-textlight flex min-h-screen items-center justify-center px-6">
      <section className="bg-secondary w-full max-w-2xl rounded-2xl p-10 text-center shadow-lg">
        {/* 제목 */}
        <h2 className="mb-4 text-3xl font-bold">📦 다운로드</h2>
        <p className="text-textlight/80 mb-8">
          최신 버전: <span className="font-semibold">1.0.0</span>
        </p>

        {/* 다운로드 리스트 */}
        <ul className="space-y-4">
          <li>
            <a
              href="https://github.com/SnP-Potato/Live-Peninsula-Release/releases/download/prod/Live.Peninsula.1.0.4.dmg"
              download
              className="bg-accent hover:bg-secondary-alt flex items-center justify-center gap-3 rounded-xl px-6 py-3 font-medium text-white shadow-md transition"
            >
              <DownloadDone className="h-5 w-5" />
              최신 버전 (.dmg)
            </a>
          </li>
        </ul>

        {/* 하단 안내 */}
        <p className="text-textlight/60 mt-6 text-sm">
          설치 후 실행이 안 되면, 보안 설정에서 앱 실행을 허용해 주세요.
        </p>
      </section>
    </main>
  );
}
