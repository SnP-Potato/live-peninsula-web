import { HiDownload } from "react-icons/hi";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-primary text-textlight flex items-center justify-center px-6">
      <section className="w-full max-w-2xl bg-secondary rounded-2xl shadow-lg p-10 text-center">
        {/* 제목 */}
        <h2 className="text-3xl font-bold mb-4">📦 다운로드</h2>
        <p className="text-textlight/80 mb-8">최신 버전: <span className="font-semibold">1.0.0</span></p>

        {/* 다운로드 리스트 */}
        <ul className="space-y-4">
          <li>
            <a
              href="/downloads/my-app-setup-v1.0.0.dmg"
              download
              className="flex items-center justify-center gap-3 px-6 py-3 bg-accent text-white rounded-xl hover:bg-secondary-alt transition font-medium shadow-md"
            >
              <HiDownload className="w-5 h-5" />
              macOS 설치 파일 (.dmg)
            </a>
          </li>
        </ul>

        {/* 하단 안내 */}
        <p className="mt-6 text-sm text-textlight/60">
          설치 후 실행이 안 되면, 보안 설정에서 앱 실행을 허용해 주세요.
        </p>
      </section>
    </main>
  );
}
