import Head from 'next/head'

import NavButton from 'components/NavButton'
import { LinkProps } from 'utils/types'

const links: LinkProps[] = [
  {
    label: 'Projects',
    path: '/projects',
  },
  // {
  //   label: "Experience",
  //   path: "/experience",
  // },
  // {
  //   label: 'Skills',
  //   path: '/skills',
  // },
  {
    label: 'Contact me',
    path: 'mailto:kuba@jkrymarys.me',
  },
  {
    label: 'Github',
    path: 'https://github.com/JKrymarys',
  },
  {
    label: 'LinkedIn',
    path: 'https://www.linkedin.com/in/jkrymarys/',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>jkrymarys - website</title>
      </Head>
      <div className="flex flex-col justify-start items-center">
        {links.map((link: LinkProps, id: number) => (
          <NavButton link={link} key={id} />
        ))}
      </div>
    </>
  )
}
