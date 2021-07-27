import { LinkProps } from './types';

export const links: LinkProps[] = [
  {
    label: 'Bio',
    path: '/bio',
  },
  {
    label: 'Portfolio',
    path: '/portfolio',
    default: true,
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
    label: 'Articles',
    path: '/articles',
  },
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
];
