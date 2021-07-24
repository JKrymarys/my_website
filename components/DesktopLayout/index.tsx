import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { links } from 'utils/constants';
import DesktopNavbar from './DesktopNavbar';

/* eslint-disable jsx-a11y/accessible-emoji */

const EmojiWrapper = ({ children, label }: any) => (
  <span className="mx-2" role="img" aria-label={label}>
    {children}
  </span>
);

function Phone({ children }: any) {
  return (
    <div className="marvel-device iphone-x">
      <div className="notch">
        <div className="camera"></div>
        <div className="speaker"></div>
      </div>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="bottom-bar"></div>
      <div className="volume"></div>
      <div className="overflow">
        <div className="shadow shadow--tr"></div>
        <div className="shadow shadow--tl"></div>
        <div className="shadow shadow--br"></div>
        <div className="shadow shadow--bl"></div>
      </div>
      <div className="inner-shadow"></div>
      <div className="screen" style={{ overflow: 'scroll' }}>
        {children}
      </div>
    </div>
  );
}

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
          className="flex flex-col justify-center w-full h-32 text-center border-b p-4 mt-6"
          onClick={() => {
            router.push('/');
          }}
        >
          <h1 className="text-2xl my-2">
            Hello
            <EmojiWrapper label="waving-hand">👋</EmojiWrapper>
            I&apos;m Kuba!
          </h1>
          <h2>Frontend developer - JS/TS, React.js</h2>
          <h2>Freelance - business websites, online stores</h2>

          <h2>
            Lodz, Poland
            <EmojiWrapper label="polish-flag">🇵🇱</EmojiWrapper>/ remote
            <EmojiWrapper label="globe-icon">🌐</EmojiWrapper>
          </h2>
        </header>
        <main className="mx-auto w-9/12 l overflow-y-auto">
          <DesktopNavbar />
          {children}
        </main>

        <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
          <div>Kuba Krymarys @ {new Date().getFullYear()}</div>
          <a href="/">jkrymarys.pl</a>
        </footer>
      </div>
    </div>
  );
}
