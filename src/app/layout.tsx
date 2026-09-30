import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import DynamicIsland from '@/components/DynamicIsland';

export const metadata: Metadata = {
  title: 'Live Peninsula',
  description: 'Usable Notch',
};

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <DynamicIsland />
        <main>{children}</main>
      </body>
    </html>
  );
}
