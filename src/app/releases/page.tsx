const releases = [
  {
    id: 3,
    version: '1.1.4',
    title: 'Live Peninsula 1.1.4',
    date: 'July 7, 2026',
    highlights: [
      'Added Lock Screen control from the notch.',
      'Fixed a bug where reconnecting an external monitor could leave a ghost notch window floating over other apps.',
    ],
  },
  {
    id: 2,
    version: '1.1.3',
    title: 'Live Peninsula 1.1.3',
    date: 'July 4, 2026',
    highlights: [
      'Fixed a bug related to Calendar.',
      'Added a Calendar access permission prompt that links directly to Settings.',
      'Replaced the battery icon with one that matches the macOS 27 design.',
    ],
  },
  {
    id: 1,
    version: '1.1.2',
    title: 'Live Peninsula 1.1.2',
    date: 'July 1, 2026',
    highlights: [
      'Implemented Bluetooth device connection.',
      'Made animations feel more natural.',
      'Redesigned the app icon with a Liquid Glass effect for a deeper, more dimensional look.',
      'Fixed a bug that caused the Charging Live Activity to appear repeatedly on its own.',
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
