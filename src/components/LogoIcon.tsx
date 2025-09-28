export default function LogoIcon() {
  return (
    <div
      className="relative mx-auto mb-8 flex h-30 w-30 animate-pulse items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 to-blue-800 shadow-2xl shadow-blue-500/50"
      style={{ animation: 'headerFloat 4s ease-in-out infinite' }}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-white/20 opacity-20" />
      {/* <div
        className="absolute top-1/5 left-3/20 h-3/5 w-3/5 rounded-full bg-white/30 opacity-60"
        style={{ animation: 'waveShimmer 3s ease-in-out infinite alternate' }}
      /> */}
    </div>
  );
}
