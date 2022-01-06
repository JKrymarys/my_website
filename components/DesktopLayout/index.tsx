import { ReactNode } from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { useRouter } from 'next/router';

import { links } from 'utils/constants';
import DesktopNavbar from './DesktopNavbar';
import EmojiWrapper from 'utils/EmojiWrapper';

interface DesktopLayoutProps {
  children: ReactNode;
}

export default function DesktopLayout({ children }: DesktopLayoutProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const { route } = router;
    const defaultPath = links.find((x) => x.default)?.path || links[0].path || '/';

    if (route === '/') {
      router.push(defaultPath);
    }
  }, [router]);

  return (
    <div className="min-h-screen py-2 bg-gray-800 text-slate-200">
      <Head>
        <title>Jakub Krymarys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between items-center">
        <header
          className="flex flex-col justify-center w-full h-33 text-center border-b p-2 mt-2"
          onClick={() => router.push('/')}
        >
          <h1 className="text-2xl my-2">Jakub Krymarys</h1>
          <h2>Frontend developer - JS/TS, React.js</h2>
          <h2>business websites, ecommerce</h2>

          <h2>
            Lodz, Poland <EmojiWrapper label="polish-flag" emoji="🇵🇱" />
            <br /> remote <EmojiWrapper label="globe-icon" emoji="🌐" />
          </h2>
        </header>
        <main className="mx-auto w-9/12 l overflow-y-auto">
          <DesktopNavbar />
          {children}
        </main>

        <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
          <div>Jakub Krymarys @ {new Date().getFullYear()}</div>
          <Link href="/">jkrymarys.pl</Link>
        </footer>
      </div>
    </div>
  );
}
