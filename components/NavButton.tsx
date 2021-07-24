import Link from 'next/link';

import { LinkProps } from 'utils/types';

interface NavButtonProps {
  link: LinkProps;
  index: number;
}

export default function NavButton({ link: { path, label }, index }: NavButtonProps) {
  return (
    <Link href={path} key={`nav-link-${index}`}>
      <a className="w-8/12 p-2 m-2 text-center hover:bg-gray-50 border-2 border-purple-500 hover:border-purple-800 rounded-md">
        {label}
      </a>
    </Link>
  );
}
