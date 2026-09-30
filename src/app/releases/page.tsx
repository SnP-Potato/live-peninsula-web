const releases = [
  {
    id: 4,
    version: '2.0.0',
    title: 'Live Peninsula 2.0.0',
    date: 'September 30, 2026',
    highlights: [
      'Liquid Glass on the notch is now controlled by a single Glass Clarity slider (Settings > Notch Material).',
      'Redesigned the Tray tab.',
      'Dragging a file to the notch now opens the Tray automatically.',
      'Added a gold border to the Lock Screen music card and replaced its controls with Heart and AirPlay buttons, realigned to match.',
      'Refined the Studio screen.',
      'Changed the Bluetooth battery ring colors.',
      'Added an AirPods 3D model. This grows the app from 11 MB to 22 MB.',
      'Fixed a bug where the connection HUD reappeared when an AirPods profile changed.',
      'Fixed a build error with Xcode 27.',
      'Improved the overall app architecture.',
      'Rotated the Sparkle update signing key.',
    ],
  },
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
    <div className="min-h-screen bg-canvas text-label">
      <div className="mx-auto max-w-3xl px-6 pt-40 pb-32 sm:pt-48">
        <h1
          className="type-display rise text-center"
          style={{ '--i': 0 } as React.CSSProperties}
        >
          Releases
        </h1>

        <div className="mt-16 space-y-4 sm:mt-20">
          {releases.map((release, i) => (
            <article
              key={release.id}
              className="rise rounded-[28px] bg-surface px-6 py-8 sm:px-12 sm:py-12"
              style={{ '--i': i + 1 } as React.CSSProperties}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[13px] font-semibold text-label">
                  {release.version}
                </span>
                <span className="text-[13px] text-label-tertiary">
                  {release.date}
                </span>
              </div>
              <h2 className="type-title mt-5">{release.title}</h2>
              <ul className="mt-6 divide-y divide-hairline">
                {release.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="py-3.5 text-[17px] leading-snug text-label-secondary first:pt-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
