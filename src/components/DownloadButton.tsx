export default function DownloadButton({
  label = 'Download For Mac',
}: {
  label?: string;
}) {
  return (
    <a
      href="/api/download"
      className="pressable inline-flex items-center justify-center rounded-full bg-action px-7 py-3.5 text-[17px] font-medium tracking-[-0.01em] text-white no-underline hover:bg-action-hover"
    >
      {label}
    </a>
  );
}
