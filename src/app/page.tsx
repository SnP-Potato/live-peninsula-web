'use client';

import LogoIcon from '@/components/LogoIcon';
import DownloadButton from '@/components/DownloadButton';
import FeatureCard from '@/components/FeatureCard';
import FileTray from '@/components/FileTray';
import AcknowledgmentCard from '@/components/AcknowledgmentCard';
import {
  AlarmOutlined,
  Battery80,
  Bolt,
  Brightness4,
  CalendarMonth,
  Cloud,
  Lock,
  MusicNote,
  Star,
  TimerOutlined,
  VolumeUp,
} from '@mui/icons-material';

export default function DraftPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black font-sans text-white">
      <div className="mx-auto max-w-4xl px-5 pt-16">
        {/* Header */}
        <section className="mt-20 mb-20 text-center">
          <LogoIcon />
          <h1 className="mb-5 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-6xl font-bold text-transparent">
            Live Peninsula
          </h1>
          <p className="mb-10 text-2xl text-gray-400">Dynamic Island on Mac</p>
          <DownloadButton />
        </section>

        {/* Description Section */}
        <section className="my-20 text-left">
          <h2 className="mb-5 text-4xl font-bold">Description</h2>
          <p className="mb-10 max-w-4xl text-xl text-gray-400">
            {`We've applied the iPhone's Dynamic Island to the MacBook.
            The iPhone's Dynamic Island exists independently on the screen—that's probably why it's called an ‘island’,
            I think :) In our case, since it connects to the top of the screen and gives a peninsula feel,
            we've decided to name it the ‘Live Peninsula’."`}
          </p>
        </section>

        <section className="my-20">
          <video
            className="w-full rounded-2xl shadow-2xl"
            autoPlay
            muted
            loop
            controls
          >
            <source src="vids/Intro.mp4" type="video/mp4" />
            Your browser does not support the video tag
          </video>
        </section>

        {/* Live Activity Section */}
        <section className="my-20">
          <h2 className="mb-5 text-4xl font-bold">Live Activity</h2>
          <div className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Battery80 className="h-8 w-8 text-green-500" />}
              title="Battery"
            />
            <FeatureCard
              icon={<MusicNote className="h-8 w-8 text-red-500" />}
              title="Music"
            />
            <FeatureCard
              icon={<VolumeUp className="h-8 w-8 text-blue-500" />}
              title="Sound"
            />
            <FeatureCard
              icon={<Star className="h-8 w-8 text-yellow-500" />}
              title="Focus"
              inDevelopment
            />
            <FeatureCard
              icon={<TimerOutlined className="h-8 w-8 text-orange-500" />}
              title="Timer"
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8 text-gray-500" />}
              title="Lock Screen"
              inDevelopment
            />
            <FeatureCard
              icon={<Brightness4 className="h-8 w-8 text-yellow-400" />}
              title="Brightness"
              inDevelopment
            />
            <FeatureCard
              icon={<AlarmOutlined className="h-8 w-8 text-red-500" />}
              title="Alarm"
              inDevelopment
            />
          </div>
        </section>

        {/* File Tray Section */}
        <section className="my-20">
          <h2 className="mb-5 text-4xl font-bold">File Tray</h2>
          <FileTray />
        </section>

        {/* Other Section */}
        <section className="my-20">
          <h2 className="mb-5 text-4xl font-bold">Others</h2>
          <div className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<CalendarMonth className="h-8 w-8 text-green-500" />}
              title="Calendar"
            />
            <FeatureCard
              icon={<Cloud className="h-8 w-8 text-red-500" />}
              title="Weather"
              inDevelopment
            />
            <FeatureCard
              icon={<Bolt className="h-8 w-8 text-blue-500" />}
              title="Shortcut"
              inDevelopment
            />
          </div>
        </section>

        {/* Acknowledgments */}
        <section className="my-20 mb-16">
          <h2 className="mb-5 text-4xl font-bold">Acknowledgments</h2>
          <div className="space-y-6 rounded-2xl border border-gray-700 bg-gray-800 p-10">
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
      </div>
    </div>
  );
}
