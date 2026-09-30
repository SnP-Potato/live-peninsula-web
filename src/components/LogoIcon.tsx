import Image from 'next/image';

export default function LogoIcon() {
  return (
    <Image
      src="/imgs/image-wave.png"
      alt="Live Peninsula Logo"
      width={144}
      height={144}
      priority
      className="mx-auto size-32 drop-shadow-[0_24px_40px_rgb(10_132_255/0.28)] sm:size-36"
    />
  );
}
