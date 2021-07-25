import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { links } from 'utils/constants';
import DesktopNavbar from './DesktopNavbar';
import EmojiWrapper from 'utils/EmojiWrapper';

export default function DesktopLayout({ children }: any) {
  const router = useRouter();

  useEffect(() => {
    const { route } = router;
    const defaultPath = links.find((x) => x.default)?.path || links[0].path || '/';

    if (route === '/') {
      router.push(defaultPath);
    }
  }, [router.route]);

  return (
    <div className="min-h-screen py-2 bg-yellow-50 bg-opacity-25">
      <Head>
        <title>jkrymarys - website </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between items-center">
        <header
          className="flex flex-col justify-center w-full h-33 text-center border-b p-2 mt-2"
          onClick={() => {
            router.push('/');
          }}
        >
          <h1 className="text-2xl my-2">
            Hello <EmojiWrapper label="waving-hand" emoji="👋" /> I&apos;m Jacob!
          </h1>
          <h2>Frontend developer - JS/TS, React.js</h2>
          <h2>Freelance - business websites, online stores</h2>

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
          <a href="/">jkrymarys.pl</a>
        </footer>
      </div>
    </div>
  );
}
