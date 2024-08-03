import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import './globals.css';
import { Providers } from '../store/Providers';

const spaceMono = Space_Mono({ subsets: ['latin'], weight: "400", style: 'normal' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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