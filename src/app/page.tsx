'use client';

import LogoIcon from '@/components/LogoIcon';
import DownloadButton from '@/components/DownloadButton';
import FileTray from '@/components/FileTray';
import AcknowledgmentCard from '@/components/AcknowledgmentCard';
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

function DevTag() {
  return (
    <span className="rounded bg-blue-500/20 px-2 py-0.5 text-[10px] font-bold tracking-wide text-blue-400 uppercase">
      Dev
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="mx-auto max-w-6xl px-5 pt-16">
        {/* Hero */}
        <section className="mt-20 mb-16 text-center">
          <LogoIcon />
          <h1 className="mb-5 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-6xl font-bold text-transparent">
            Live Peninsula
          </h1>
          <p className="mb-6 text-2xl text-gray-400">Dynamic Island on Mac</p>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400">
            {`We've applied the iPhone's Dynamic Island to the MacBook. The iPhone's Dynamic Island exists independently on the screen—that's probably why it's called an 'island'. In our case, since it connects to the top of the screen and gives a peninsula feel, we've decided to name it the 'Live Peninsula'.`}
          </p>
          <DownloadButton />
        </section>

        {/* Intro video, framed like a MacBook screen */}
        <section className="my-20">
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-10 -z-10 rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="aspect-video overflow-hidden rounded-[32px] border-[12px] border-gray-800 bg-black shadow-2xl">
              <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
                <source src="/vids/Intro.mp4" type="video/mp4" />
                Your browser does not support the video tag
              </video>
            </div>
          </div>
        </section>

        {/* Bento Features */}
        <section className="my-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Powerful Widgets. Zero Distraction.</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Live Peninsula brings the information you need right to your eye-line, then
              vanishes when you&apos;re done.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {/* Now Playing */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:col-span-8">
              <MusicNote className="mb-4 h-9 w-9 text-blue-400" />
              <h3 className="mb-3 text-2xl font-semibold">Now Playing</h3>
              <p className="text-gray-400">
                Control your music without switching apps. Real-time playback progress and
                beautiful album art integrations for Apple Music and Spotify.
              </p>
            </div>

            {/* Calendar */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:col-span-4">
              <CalendarMonth className="mb-4 h-9 w-9 text-blue-400" />
              <h3 className="mb-3 text-2xl font-semibold">Calendar</h3>
              <p className="mb-6 text-gray-400">
                Upcoming meetings at a glance. Tap to join Zoom or Teams directly from the notch.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3">
                  <span className="font-medium text-white">Design Sync</span>
                  <span className="text-sm font-semibold text-blue-400">10:00 AM</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3 opacity-50">
                  <span className="font-medium text-white">Product Review</span>
                  <span className="text-sm">1:30 PM</span>
                </div>
              </div>
            </div>

            {/* Focus Timer */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:col-span-4">
              <TimerOutlined className="mb-4 h-9 w-9 text-blue-400" />
              <h3 className="mb-3 text-2xl font-semibold">Focus Timer</h3>
              <p className="mb-6 text-gray-400">
                A minimalist Pomodoro timer that lives in the periphery of your vision.
              </p>
              <div className="flex justify-center">
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <svg className="h-full w-full -rotate-90 transform">
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
                      className="text-blue-400"
                      cx="48"
                      cy="48"
                      fill="transparent"
                      r="40"
                      stroke="currentColor"
                      strokeDasharray="251.2"
                      strokeDashoffset="60"
                      strokeWidth="6"
                    />
                  </svg>
                  <span className="absolute font-bold text-white">18:42</span>
                </div>
              </div>
            </div>

            {/* Devices */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:col-span-4">
              <Battery80 className="mb-4 h-9 w-9 text-blue-400" />
              <h3 className="mb-3 text-2xl font-semibold">Devices</h3>
              <p className="mb-6 text-gray-400">
                Monitor battery levels and connected Bluetooth devices effortlessly.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-1">
                  <Headphones className="h-6 w-6 text-white" />
                  <span className="text-xs font-bold text-blue-400">84%</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <DevTag />
                  <Mouse className="h-6 w-6 text-white" />
                  <span className="text-xs font-bold text-blue-400">100%</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <DevTag />
                  <Keyboard className="h-6 w-6 text-white" />
                  <span className="text-xs font-bold text-yellow-500">22%</span>
                </div>
              </div>
            </div>

            {/* File Tray */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:col-span-4">
              <h3 className="mb-3 text-2xl font-semibold">File Tray</h3>
              <FileTray />
            </div>

            {/* Lock Screen */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:col-span-4">
              <div className="mb-4 flex items-start justify-between">
                <Lock className="h-9 w-9 text-blue-400" />
                <DevTag />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Lock Screen</h3>
              <p className="text-gray-400">
                Quickly secure your Mac with a single click from the notch.
              </p>
            </div>

            {/* Weather */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:col-span-4">
              <div className="mb-4 flex items-start justify-between">
                <Cloud className="h-9 w-9 text-blue-400" />
                <DevTag />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Weather</h3>
              <p className="text-gray-400">Precise local forecasting at your fingertips.</p>
            </div>

            {/* Shortcut */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:col-span-4">
              <div className="mb-4 flex items-start justify-between">
                <Bolt className="h-9 w-9 text-blue-400" />
                <DevTag />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Shortcut</h3>
              <p className="text-gray-400">Custom automation triggers for your daily workflow.</p>
            </div>

            {/* Brightness */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:col-span-4">
              <div className="mb-4 flex items-start justify-between">
                <Brightness4 className="h-9 w-9 text-blue-400" />
                <DevTag />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Brightness</h3>
              <p className="text-gray-400">Adjust your display brightness right from the notch.</p>
            </div>
          </div>
        </section>

        {/* Acknowledgments */}
        <section className="my-20">
          <h2 className="mb-5 text-4xl font-bold">Acknowledgments</h2>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
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
        </section>

        {/* Footer */}
        <footer className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-12 text-sm text-gray-500 md:flex-row">
          <span className="font-semibold text-gray-300">Live Peninsula</span>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a className="transition-colors hover:text-blue-400" href="/issues">
              Issues
            </a>
            <a className="transition-colors hover:text-blue-400" href="/faq">
              FAQ
            </a>
            <a className="transition-colors hover:text-blue-400" href="/releases">
              Releases
            </a>
          </div>
          <span>© 2026 Live Peninsula. Completely Free.</span>
        </footer>
      </div>
    </div>
  );
}
