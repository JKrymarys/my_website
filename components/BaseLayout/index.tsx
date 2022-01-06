import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import EmojiWrapper from 'utils/EmojiWrapper';

export default function BaseLayout({ children }: any) {
  const router = useRouter();
  const home = router.pathname === '/';

  return (
    <div className="min-h-screen py-2 bg-gray-900 text-slate-50">
      <Head>
        <title>Jakub Krymarys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col justify-center w-full h-34 text-center border-b p-2">
        <h1 className="text-2xl my-2">Jakub Krymarys</h1>
        <h2>Frontend developer - JS/TS, React.js</h2>
        <h2>business websites, ecommerce</h2>
        <h2>
          Lodz, Poland <EmojiWrapper label="polish-flag" emoji="🇵🇱" />
          <br /> remote <EmojiWrapper label="globe-icon" emoji="🌐" />
        </h2>
      </header>

      <main className="mx-auto w-full lg:w-8/12 ">{children}</main>

      {!home && (
        <div className="flex justify-center items-center w-full h-16 text-center border-b">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
        <div>Jakub Krymarys @ {new Date().getFullYear()}</div>
        <a href="/">jkrymarys.pl</a>
      </footer>
    </div>
  );
}
