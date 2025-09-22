import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen text-textlight bg-primary">
      <section className="w-full h-lvh flex flex-col items-center justify-center bg-primary text-textlight px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Live Peninsula 앱을 소개합니다
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-2">
          호연이 형이 이렇게 만들라고 했어요
        </p>
        <p className="text-lg sm:text-xl max-w-2xl">
          Live Peninsula는 저희가 하는 졸업 프로젝트로,
          <br />
          실패하면 졸업을 못해서 ㅈ되요
        </p>
      </section>

      <section className="w-full h-svh flex flex-col items-center justify-center bg-primary text-textlight px-6">
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
      </section>

      <section className="max-w-4xl mx-auto flex flex-col gap-16 px-6 pb-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-secondary-alt rounded-xl flex items-center justify-center text-textlight/60">
              <Image
                src="/imgs/test-img1.png"
                alt="기능 이미지"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">💻 간편한 설치</h2>
            <p className="text-textlight/80 leading-relaxed">
              클릭 한 번으로 앱을 다운로드하고 바로 사용하세요.
              <br />
              복잡한 설정 없이 즉시 시작할 수 있어요.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 md:order-2">
            <div className="aspect-video bg-secondary-alt rounded-xl flex items-center justify-center text-textlight/60">
              <video
                src="/vids/vid1.mp4"
                autoPlay
                muted
                loop
                className="rounded-xl w-full max-w-3xl shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:order-1">
            <h2 className="text-2xl font-bold mb-2">⚙️ 유연한 커스터마이징</h2>
            <p className="text-textlight/80 leading-relaxed">
              호연이 형이 좋아하는 기능을 넣었어요.
              <br />
              이 앱은 호연이 형의 졸업을 위해 만들어진 앱이기 때문에,
              <br />
              호연이 형이 좋아하는 기능을 넣는 것이 중요해요.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-secondary-alt rounded-xl flex items-center justify-center text-textlight/60">
              <video
                src="/vids/vid2.mp4"
                autoPlay
                muted
                loop
                className="rounded-xl w-full max-w-3xl shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">💦 좋아용 💦</h2>
            <p className="text-textlight/80 leading-relaxed">
              여러분 타입스크립트를 쓰세요
              <br />
              타입스크립트를 쓰면 빨라요
              <br />
              computer phile → comphile 😃
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24 text-center pb-24 px-6">
        <p className="text-md text-textlight/70">
          더 많은 기능은{' '}
          <span className="underline underline-offset-2">Docs</span>에서
          확인하세요.
        </p>
      </section>
    </main>
  );
}