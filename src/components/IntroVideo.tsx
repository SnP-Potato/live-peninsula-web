'use client';

import { useEffect, useRef } from 'react';

/** Framed like a MacBook screen. Autoplays silently — unless reduced motion is on. */
export default function IntroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ref.current?.pause();
    }
  }, []);

  return (
    <div className="aspect-video overflow-hidden rounded-[28px] border-[10px] border-surface-raised bg-black shadow-[0_30px_80px_rgb(0_0_0/0.6)] sm:rounded-[36px] sm:border-[12px]">
      <video
        ref={ref}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/vids/Intro.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>
    </div>
  );
}
