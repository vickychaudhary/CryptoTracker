import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import './globals.css';
import { Providers } from '../store/Providers';

const spaceMono = Space_Mono({ subsets: ['latin'], weight: "400", style: 'normal' });

export const metadata: Metadata = {
  title: 'CryptoTracker',
  description: 'Realtime cryptocurrency tracker',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
