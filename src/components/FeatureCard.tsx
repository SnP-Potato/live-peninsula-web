import React from 'react';

export function SoonTag({ hidden = false }: { hidden?: boolean }) {
  return (
    <span
      aria-hidden={hidden || undefined}
      className={`rounded-full bg-white/10 px-2.5 py-1 text-[11px] leading-none font-medium whitespace-nowrap text-label-secondary ${
        hidden ? 'invisible' : ''
      }`}
    >
      Coming soon
    </span>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  /** Tailwind gradient stops for the icon tile, e.g. "from-green-400 to-green-600". */
  tint: string;
  soon?: boolean;
  children?: React.ReactNode;
}

/** An app-icon-style tile, title, and description on a flat surface. */
export default function FeatureCard({
  icon,
  title,
  tint,
  soon,
  children,
}: FeatureCardProps) {
  return (
    <div className="flex h-full flex-col rounded-[28px] bg-surface p-8 sm:p-10">
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex size-14 items-center justify-center rounded-[22.37%] bg-gradient-to-b text-white shadow-[inset_0_0.5px_0_rgb(255_255_255/0.35),0_6px_16px_rgb(0_0_0/0.35)] ${tint}`}
        >
          {icon}
        </div>
        {soon && <SoonTag />}
      </div>

      <h3 className="type-title mt-6">{title}</h3>
      <div className="mt-3 text-[17px] leading-snug text-label-secondary">
        {children}
      </div>
    </div>
  );
}
