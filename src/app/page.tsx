'use client';

import LogoIcon from '@/components/LogoIcon';
import DownloadButton from '@/components/DownloadButton';
import FeatureCard, { SoonTag } from '@/components/FeatureCard';
import FileTray from '@/components/FileTray';
import AcknowledgmentCard from '@/components/AcknowledgmentCard';
import IntroVideo from '@/components/IntroVideo';
import Reveal from '@/components/Reveal';
import {
  Battery80,
  Bolt,
  Brightness4,
  CalendarMonth,
  Cloud,
  Headphones,
  Keyboard,
  Lock,
  Mouse,
  MusicNote,
  TimerOutlined,
} from '@mui/icons-material';

const sectionClass = 'mx-auto max-w-6xl px-6 py-20 sm:py-28';

export default function Home() {
  return (
    <div className="overflow-x-clip bg-canvas text-label">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-40 pb-16 text-center sm:pt-48">
        <div className="rise" style={{ '--i': 0 } as React.CSSProperties}>
          <LogoIcon />
        </div>
        <h1
          className="type-display rise mt-8"
          style={{ '--i': 1 } as React.CSSProperties}
        >
          Live Peninsula
        </h1>
        <p
          className="type-lead rise mt-4 text-label-secondary"
          style={{ '--i': 2 } as React.CSSProperties}
        >
          Dynamic Island on Mac
        </p>
        <p
          className="rise mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-label-secondary"
          style={{ '--i': 3 } as React.CSSProperties}
        >
          {`We've applied the iPhone's Dynamic Island to the MacBook. The iPhone's Dynamic Island exists independently on the screen—that's probably why it's called an 'island'. In our case, since it connects to the top of the screen and gives a peninsula feel, we've decided to name it the 'Live Peninsula'.`}
        </p>
        <div
          className="rise mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8"
          style={{ '--i': 4 } as React.CSSProperties}
        >
          <DownloadButton />
          <a
            href="#intro"
            className="text-[17px] tracking-[-0.01em] text-link no-underline hover:underline"
          >
            Watch the video <span aria-hidden="true">›</span>
          </a>
        </div>
        <p
          className="rise mt-6 text-[13px] text-label-tertiary"
          style={{ '--i': 5 } as React.CSSProperties}
        >
          Requires macOS 14.6 or later.
        </p>
      </section>

      {/* Intro video */}
      <section id="intro" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-8">
        <Reveal>
          <IntroVideo />
        </Reveal>
      </section>

      {/* Bento features */}
      <section className={sectionClass}>
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h2 className="type-headline">
              Powerful Widgets. Zero Distraction.
            </h2>
            <p className="type-lead mt-6 text-label-secondary">
              {`Live Peninsula brings the information you need right to your eye-line, then vanishes when you're done.`}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-12">
          {/* Now Playing */}
          <Reveal className="md:col-span-8">
            <FeatureCard
              icon={<MusicNote fontSize="large" />}
              title="Now Playing"
              tint="from-[#ff6a85] to-[#fa2d55]"
            >
              <p>
                Control your music without switching apps. Real-time playback
                progress and beautiful album art integrations for Apple Music
                and Spotify.
              </p>
            </FeatureCard>
          </Reveal>

          {/* Calendar */}
          <Reveal delay={70} className="md:col-span-4">
            <FeatureCard
              icon={<CalendarMonth fontSize="large" />}
              title="Calendar"
              tint="from-[#ff7a70] to-[#ff3b30]"
            >
              <p>
                Upcoming meetings at a glance. Tap to join Zoom or Teams
                directly from the notch.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between rounded-2xl bg-surface-raised px-4 py-3">
                  <span className="font-medium text-label">Design Sync</span>
                  <span className="text-sm font-semibold text-link">
                    10:00 AM
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-surface-raised px-4 py-3 opacity-50">
                  <span className="font-medium text-label">Product Review</span>
                  <span className="text-sm">1:30 PM</span>
                </div>
              </div>
            </FeatureCard>
          </Reveal>

          {/* Focus Timer */}
          <Reveal className="md:col-span-4">
            <FeatureCard
              icon={<TimerOutlined fontSize="large" />}
              title="Focus Timer"
              tint="from-[#ffb340] to-[#ff9500]"
            >
              <p>
                A minimalist Pomodoro timer that lives in the periphery of your
                vision.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="relative flex size-24 items-center justify-center">
                  <svg
                    className="size-full -rotate-90"
                    viewBox="0 0 96 96"
                    aria-hidden="true"
                  >
                    <circle
                      className="text-white/10"
                      cx="48"
                      cy="48"
                      fill="transparent"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="6"
                    />
                    <circle
                      className="text-[#ff9f0a]"
                      cx="48"
                      cy="48"
                      fill="transparent"
                      r="40"
                      stroke="currentColor"
                      strokeDasharray="251.2"
                      strokeDashoffset="60"
                      strokeLinecap="round"
                      strokeWidth="6"
                    />
                  </svg>
                  <span className="absolute font-semibold tracking-tight text-label tabular-nums">
                    18:42
                  </span>
                </div>
              </div>
            </FeatureCard>
          </Reveal>

          {/* Devices */}
          <Reveal delay={70} className="md:col-span-4">
            <FeatureCard
              icon={<Battery80 fontSize="large" />}
              title="Devices"
              tint="from-[#5ee07a] to-[#30d158]"
            >
              <p>
                Monitor battery levels and connected Bluetooth devices
                effortlessly.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  {
                    icon: <Headphones className="size-6" />,
                    level: '84%',
                    color: 'text-[#30d158]',
                    soon: false,
                  },
                  {
                    icon: <Mouse className="size-6" />,
                    level: '100%',
                    color: 'text-[#30d158]',
                    soon: true,
                  },
                  {
                    icon: <Keyboard className="size-6" />,
                    level: '22%',
                    color: 'text-[#ff9f0a]',
                    soon: true,
                  },
                ].map((device, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <SoonTag hidden={!device.soon} />
                    <div className="text-label">{device.icon}</div>
                    <span
                      className={`text-xs font-semibold tabular-nums ${device.color}`}
                    >
                      {device.level}
                    </span>
                  </div>
                ))}
              </div>
            </FeatureCard>
          </Reveal>

          {/* File Tray */}
          <Reveal delay={140} className="md:col-span-4">
            <FileTray />
          </Reveal>

          {/* Shipped: Lock Screen, Brightness */}
          <Reveal className="md:col-span-6">
            <FeatureCard
              icon={<Lock fontSize="large" />}
              title="Lock Screen"
              tint="from-[#a1a1a6] to-[#636366]"
            >
              <p>Quickly secure your Mac with a single click from the notch.</p>
            </FeatureCard>
          </Reveal>

          <Reveal delay={70} className="md:col-span-6">
            <FeatureCard
              icon={<Brightness4 fontSize="large" />}
              title="Brightness"
              tint="from-[#ffe259] to-[#ffb800]"
            >
              <p>Adjust your display brightness right from the notch.</p>
            </FeatureCard>
          </Reveal>

          {/* Coming soon: Weather, Shortcut */}
          <Reveal className="md:col-span-6">
            <FeatureCard
              icon={<Cloud fontSize="large" />}
              title="Weather"
              tint="from-[#5ac8fa] to-[#0a84ff]"
              soon
            >
              <p>Precise local forecasting at your fingertips.</p>
            </FeatureCard>
          </Reveal>

          <Reveal delay={70} className="md:col-span-6">
            <FeatureCard
              icon={<Bolt fontSize="large" />}
              title="Shortcut"
              tint="from-[#ff6bcb] to-[#7d5cf6]"
              soon
            >
              <p>Custom automation triggers for your daily workflow.</p>
            </FeatureCard>
          </Reveal>
        </div>
      </section>

      {/* Acknowledgments */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-24 sm:pt-28">
        <Reveal>
          <h2 className="type-headline mb-12 text-center sm:mb-16">
            Acknowledgments
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="divide-y divide-hairline overflow-hidden rounded-[28px] bg-surface">
            <AcknowledgmentCard
              icon="🎨"
              title="Park Joo-yeon"
              description="We express our gratitude for overseeing the overall app design."
              color="bg-gradient-to-br from-pink-500 to-purple-500"
            />
            <AcknowledgmentCard
              icon="💬"
              title="Koo Geon-mo"
              description="We also thank for advice and feedback during app development."
              color="bg-gradient-to-br from-green-500 to-green-600"
            />
            <AcknowledgmentCard
              icon="🛠️"
              title="Kim Seung-woo"
              description="Thank you for creating the website."
              color="bg-white"
            />
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-12">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-hairline pt-8 text-[13px] text-label-tertiary md:flex-row">
          <span className="font-semibold text-label-secondary">
            Live Peninsula
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a
              className="no-underline transition-colors hover:text-label"
              href="/issues"
            >
              Issues
            </a>
            <a
              className="no-underline transition-colors hover:text-label"
              href="/faq"
            >
              FAQ
            </a>
            <a
              className="no-underline transition-colors hover:text-label"
              href="/releases"
            >
              Releases
            </a>
          </div>
          <span>© 2026 Live Peninsula. Completely Free.</span>
        </div>
      </footer>
    </div>
  );
}
