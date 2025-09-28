import type { Metadata } from 'next';
import '../styles/globals.css';
import '../styles/fonts.css';
import Font from 'next/font/local';
import DynamicIsland from '@/components/DynamicIsland';

const NanumSquareNeo = Font({
  src: '../../public/fonts/NanumSquareNeo-Variable.woff2',
  display: 'swap',
  variable: '--font-nsn',
});

export const metadata: Metadata = {
  title: 'Live Peninsula',
  description: 'Usable Notch',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className={`antialiased ${NanumSquareNeo.variable}`}>
        <DynamicIsland />
        <main>{children}</main>
      </body>
    </html>
  );
}
