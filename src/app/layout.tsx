import type { Metadata } from 'next';
import '../styles/globals.css';
import '../styles/fonts.css';
import Font from 'next/font/local'
import Header from '../components/header';

const NanumSquareNeo = Font({
  src: "../../public/fonts/NanumSquareNeo-Variable.woff2",
  display: "swap",
  variable: "--font-nsn",
});

export const metadata: Metadata = {
  title: 'DNotch',
  description: '다이나믹 노치 - Dynamic Notch',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className={`antialiased ${NanumSquareNeo.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
