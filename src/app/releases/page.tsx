const releases = [
  {
    id: 1,
    version: '1.1.2',
    title: 'Live Peninsula 1.1.2',
    date: 'July 1, 2026',
    highlights: [
      "Public beta is live — bring the iPhone's Dynamic Island to your MacBook.",
      'Added a homepage intro video showing Live Peninsula in action.',
      'The top navigation now auto-hides on scroll down and reappears on scroll up for a cleaner view.',
      'Redesigned the download button with a new gradient and shimmer effect, now shipping as "Live Peninsula Beta.dmg".',
      'Added a dedicated Issues page for bug reports, replacing the external GitHub link.',
      'Refreshed the FAQ with clearer platform, macOS version, and external monitor support info.',
      'Polished the logo, feature cards, and this Releases page.',
    ],
  },
];

export default function ReleasesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        {/* Title */}
        <h1 className="mb-8 text-6xl font-bold">Releases</h1>

        {/* Divider */}
        <div className="mb-12 h-px bg-gray-700"></div>

        {/* Release notes list */}
        <div className="space-y-16">
          {releases.map((release) => (
            <article key={release.id}>
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-400">
                  {release.version}
                </span>
                <span className="text-sm text-gray-500">{release.date}</span>
              </div>
              <h2 className="mb-5 text-3xl font-bold">{release.title}</h2>
              <ul className="space-y-3">
                {release.highlights.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-lg text-gray-400">
                    <span className="text-blue-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
