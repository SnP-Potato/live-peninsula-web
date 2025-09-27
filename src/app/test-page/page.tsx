'use client';

import DynamicIsland from '@/components/DynamicIsland';
import HeaderIcon from '@/components/HeaderIcon';

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
        <h2 className="mb-4 text-xl font-semibold">Activity Item</h2>
        <h2 className="mb-4 text-xl font-semibold">File Tray</h2>
        <h2 className="mb-4 text-xl font-semibold">Acknowledge</h2>
      </section>
    </div>
  );
}
