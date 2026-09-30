interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  /** Tailwind background classes for the icon tile. */
  color?: string;
}

/** One row of an inset grouped list — dividers come from the parent. */
export default function AcknowledgmentCard({
  icon,
  title,
  description,
  color = 'bg-surface-raised',
}: Props) {
  return (
    <div className="flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5">
      <div
        aria-hidden="true"
        className={`flex size-12 shrink-0 items-center justify-center rounded-[22.37%] text-2xl ${color}`}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-label">
          {title}
        </h3>
        <p className="mt-0.5 text-[15px] leading-snug text-label-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
