import Image from 'next/image';

export default function LogoIcon() {
  return (
    <div className="relative mx-auto mb-8 flex h-48 w-48 items-center justify-center">
      {/* Glow 효과 레이어 */}
      <div className="absolute inset-0 rounded-[3rem] bg-blue-500 opacity-50 blur-3xl"></div>
      <div className="absolute inset-0 rounded-[3rem] bg-blue-400 opacity-30 blur-2xl animate-pulse"></div>
      
      {/* 이미지 */}
      <Image
        src="/imgs/logo-wave.png"
        alt="Live Peninsula Logo"
        width={192}
        height={192}
        className="relative z-10 rounded-[3rem] shadow-2xl"
      />
    </div>
  );
}
