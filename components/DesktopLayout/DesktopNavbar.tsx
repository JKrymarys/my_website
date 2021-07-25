import Head from 'next/head';

import NavButton from 'components/NavButton';
import { LinkProps } from 'utils/types';
import { links } from 'utils/constants';

export default function DesktopNavbar() {
  return (
    <>
      <Head>
        <title>Hello - jkrymarys.pl</title>
      </Head>
      <div className="flex flex-row justify-start items-center">
        {links.map((link: LinkProps, id: number) => (
          // eslint-disable-next-line react/jsx-key
          <NavButton link={link} index={id} />
        ))}
      </div>
    </>
  );
}
