import Link from 'next/link'

import { LinkProps } from 'utils/types'

interface NavButtonProps {
  link: LinkProps
  key: number
}

export default function NavButton({ link: { path, label }, key }: NavButtonProps) {
  return (
    <Link href={path} key={`nav-link-${key}`}>
      <a className="shadow w-full md:w-8/12 p-2 m-2 text-center hover:bg-gray-50  border-2 border-blue-300 rounded-md">
        {label}
      </a>
    </Link>
  )
}
