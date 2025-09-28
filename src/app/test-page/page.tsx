'use client';

import DynamicIsland from '@/components/DynamicIsland';
import HeaderIcon from '@/components/HeaderIcon';
import DownloadButton from '@/components/DownloadButton';
import ActivityItem from '@/components/ActivityItem';
import FileTray from '@/components/FileTray';
import Acknowledgement from '@/components/Acknowledgement';
import { AlarmOutlined, Battery80, Bolt, Brightness4, CalendarMonth, Cloud, Lock, MusicNote, Star, Sunny, TimerOutlined, VolumeUp } from '@mui/icons-material';

export default function DraftPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black font-sans text-white">
      <div className="mx-auto max-w-4xl px-5">
        {/* Dynamic Island */}
        <DynamicIsland />

        {/* Header */}
        <header className="mb-16 text-center">
          <HeaderIcon />
          <h1 className="mb-5 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-6xl font-bold text-transparent">
            Live Peninsula
          </h1>
          <p className="mb-10 text-2xl text-gray-400">Dynamic Island on Mac</p>
          <DownloadButton />
        </header>

        {/* Description Section */}
        <section className="my-20 text-left">
          <h2 className="mb-5 text-4xl font-bold">Description</h2>
          <p className="mb-10 max-w-2xl text-xl text-gray-400">
            The Dynamic Island on iPhone exists independently on the screen,
            which seems to be why it's called an "Island." I think :) In our
            case, it connects to the top of the screen, giving it the feeling of
            a peninsula, so we decided to name it "Live Peninsula."
          </p>
        </section>

        {/* Live Activity Section */}
        <section className="my-20">
          <h2 className="mb-5 text-4xl font-bold">Live Activity</h2>
          <div className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ActivityItem
              icon={<Battery80 className="h-8 w-8 text-green-500" />}
              title="Battery"
            />
            <ActivityItem
              icon={<MusicNote className="h-8 w-8 text-red-500" />}
              title="Music"
            />
            <ActivityItem
              icon={<VolumeUp className="h-8 w-8 text-blue-500" />}
              title="Sound"
            />
            <ActivityItem
              icon={<Star className="h-8 w-8 text-yellow-500" />}
              title="Focus"
              inDevelopment
            />
            <ActivityItem
              icon={<TimerOutlined className="h-8 w-8 text-orange-500" />}
              title="Timer"
            />
            <ActivityItem
              icon={<Lock className="h-8 w-8 text-gray-500" />}
              title="Lock Screen"
              inDevelopment
            />
            <ActivityItem
              icon={<Brightness4 className="h-8 w-8 text-yellow-400" />}
              title="Brightness"
              inDevelopment
            />
            <ActivityItem
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

        {/* Live Activity Section */}
        <section className="my-20">
          <h2 className="mb-5 text-4xl font-bold">Other</h2>
          <div className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3
          ">
            <ActivityItem
              icon={<CalendarMonth className="h-8 w-8 text-green-500" />}
              title="Calendar"
            />
            <ActivityItem
              icon={<Cloud className="h-8 w-8 text-red-500" />}
              title="Weather"
              inDevelopment
            />
            <ActivityItem
              icon={<Bolt className="h-8 w-8 text-blue-500" />}
              title="Shortcut"
              inDevelopment
            />
          </div>
        </section>

        {/* Support Section */}
        <section className="my-20">
          <h2 className="mb-5 text-4xl font-bold">Support</h2>
          <div className="rounded-2xl border border-gray-700 bg-gray-800 p-10">
            <p className="text-xl font-semibold text-blue-500">
              Supports macOS 14.6 through macOS 26
            </p>
          </div>
        </section>

        {/* Acknowledgments */}
        <section className="my-20 mb-16">
          <h2 className="mb-5 text-4xl font-bold">Acknowledgments</h2>
          <div className="space-y-6 rounded-2xl border border-gray-700 bg-gray-800 p-10">
            <Acknowledgement
              icon="🎨"
              title="Park Joo-yeon"
              description="We express our gratitude for overseeing the overall app design."
              color="bg-gradient-to-br from-pink-500 to-purple-500"
            />
            <Acknowledgement
              icon="💬"
              title="Koo Geon-mo"
              description="We also thank for advice and feedback during app development."
              color="bg-gradient-to-br from-green-500 to-green-600"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
