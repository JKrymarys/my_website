import Head from 'next/head';

import NavButton from 'components/NavButton';
import { LinkProps } from 'utils/types';
import { links } from 'utils/constants';
import useDisplayDesktopVersion from 'utils/useDisplayDesktopVersion';

export default function Home() {
  const displayDesktopVersion = useDisplayDesktopVersion();

  return (
    <>
      <Head>
        <title>Jakub Krymarys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-start items-center">
        {!displayDesktopVersion &&
          links.map((link: LinkProps, id: number) => (
            // eslint-disable-next-line react/jsx-key
            <NavButton link={link} index={id} />
          ))}
      </div>
    </>
  );
}
