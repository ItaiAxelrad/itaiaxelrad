import Footer from '@components/layouts/Footer';
import Header from '@components/layouts/Header';
import { inter } from '@styles/fonts';
import '@styles/globals.css';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Itai Axelrad',
  description: "Itai's portfolio site",
  icons: {
    icon: {
      url: '/favicon.svg',
      type: 'image/svg+xml',
    },
    shortcut: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
  generator: 'Next.js',
  applicationName: 'Itai Axelrad',
  referrer: 'origin-when-cross-origin',
  keywords: ['Itai', 'Axelrad', 'portfolio', 'freelance', 'web', 'development'],
  creator: 'Itai Axelrad',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en-US' dir='ltr'>
      <body
        className={`flex flex-col h-screen scroll-smooth ${inter.className} bg-slate-50 text-slate-800 dark:text-slate-100 dark:bg-gray-900`}
      >
        <Header />
        <main className='flex grow mx-auto py-4 my-4'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}