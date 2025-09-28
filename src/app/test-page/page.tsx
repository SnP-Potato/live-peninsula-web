'use client';

import DynamicIsland from '@/components/DynamicIsland';
import HeaderIcon from '@/components/HeaderIcon';
import DownlaodButton from '@/components/DownloadButton';
import ActivityItem from '@/components/ActivityItem';
import FileTray from '@/components/FileTray';
import AcknowledgmentItem from '@/components/Acknowledgement';

import { Battery80, MusicNote, Search, Star, VolumeUp } from '@mui/icons-material';

export default function TestPage() {
  return (
    <div className="mt-8 min-h-screen space-y-10 bg-black p-10 font-sans text-white">
      <h1 className="mb-8 text-3xl font-bold">Component Playground</h1>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Dynamic Island</h2>
        <DynamicIsland />
        <h2 className="mb-4 text-xl font-semibold">Header Icon</h2>
        <HeaderIcon />
        <h2 className="mb-4 text-xl font-semibold">Downlaod Button</h2>
        <DownlaodButton />
        <h2 className="mb-4 text-xl font-semibold">Activity Item</h2>
        <ActivityItem icon={<Battery80 />} title="Battery" />
        <ActivityItem icon={<MusicNote />} title="Music" />
        <ActivityItem icon={<VolumeUp />} title="Sound" />
        <ActivityItem icon={<Star />} title="Focus" />
        <ActivityItem icon={<Search />} title="Timer" />
        <ActivityItem icon={<MusicNote />} title="Lock Screen" />
        <ActivityItem icon={<MusicNote />} title="Screen Brightness" />
        <ActivityItem icon={<MusicNote />} title="Alarm" />
        <h2 className="mb-4 text-xl font-semibold">File Tray</h2>
        <FileTray />
        <h2 className="mb-4 text-xl font-semibold">Acknowledge</h2>
        <AcknowledgmentItem
              icon="🎨"
              title="Park Joo-yeon"
              description="We express our gratitude for overseeing the overall app design."
              color='bg-gradient-to-br from-red-500 to-orange-500'
            />
            <AcknowledgmentItem
              icon="💬"
              title="Koo Geon-mo"
              description="We also thank for advice and feedback during app development."
              color='bg-gradient-to-br from-blue-500 to-purple-500'
            />
      </section>
    </div>
  );
}
