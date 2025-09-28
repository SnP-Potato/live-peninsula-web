import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="text-textlight bg-primary min-h-screen">
      <section className="bg-primary text-textlight flex h-lvh w-full flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          Live Peninsula 앱을 소개합니다
        </h1>
        <p className="mb-2 max-w-2xl text-lg sm:text-xl">
          호연이 형이 이렇게 만들라고 했어요
        </p>
        <p className="max-w-2xl text-lg sm:text-xl">
          Live Peninsula는 저희가 하는 졸업 프로젝트로,
          <br />
          실패하면 졸업을 못해서 ㅈ되요
        </p>
      </section>

      <section className="bg-primary text-textlight flex h-svh w-full flex-col items-center justify-center px-6">
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
      </section>

      <section className="mx-auto flex max-w-4xl flex-col gap-16 px-6 pb-24">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="bg-secondary-alt text-textlight/60 flex aspect-video items-center justify-center rounded-xl">
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
            <h2 className="mb-2 text-2xl font-bold">💻 간편한 설치</h2>
            <p className="text-textlight/80 leading-relaxed">
              클릭 한 번으로 앱을 다운로드하고 바로 사용하세요.
              <br />
              복잡한 설정 없이 즉시 시작할 수 있어요.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:order-2 md:w-1/2">
            <div className="bg-secondary-alt text-textlight/60 flex aspect-video items-center justify-center rounded-xl">
              <video
                src="/vids/vid1.mp4"
                autoPlay
                muted
                loop
                className="w-full max-w-3xl rounded-xl shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:order-1 md:w-1/2">
            <h2 className="mb-2 text-2xl font-bold">⚙️ 유연한 커스터마이징</h2>
            <p className="text-textlight/80 leading-relaxed">
              호연이 형이 좋아하는 기능을 넣었어요.
              <br />
              이 앱은 호연이 형의 졸업을 위해 만들어진 앱이기 때문에,
              <br />
              호연이 형이 좋아하는 기능을 넣는 것이 중요해요.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="bg-secondary-alt text-textlight/60 flex aspect-video items-center justify-center rounded-xl">
              <video
                src="/vids/vid2.mp4"
                autoPlay
                muted
                loop
                className="w-full max-w-3xl rounded-xl shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="mb-2 text-2xl font-bold">💦 좋아용 💦</h2>
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

      <section className="mx-auto mt-24 max-w-4xl px-6 pb-24 text-center">
        <p className="text-md text-textlight/70">
          더 많은 기능은{' '}
          <span className="underline underline-offset-2">Docs</span>에서
          확인하세요.
        </p>
      </section>
    </main>
  );
}
