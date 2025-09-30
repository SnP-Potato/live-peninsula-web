import Image from 'next/image';

export default function LogoIcon() {
  const rounded = 'rounded-[3rem]';

  return (
    <div className="relative mx-auto mb-8 flex h-48 w-48 items-center justify-center">

      {/* Glow layers */}
      <div className={`${rounded} absolute inset-0 bg-blue-500 opacity-50 blur-3xl`} />
      <div className={`${rounded} absolute inset-0 bg-blue-400 opacity-30 blur-2xl animate-pulse`} />

      {/* Logo image */}
      <Image
        src="/imgs/logo-wave.png"
        alt="Live Peninsula Logo"
        width={192}
        height={192}
        className={`${rounded} z-10 shadow-2xl`}
      />
    </div>
  );
}
