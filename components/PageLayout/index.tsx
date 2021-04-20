import Link from 'next/link'

import Layout from 'components/Layout'

export default function PageLayout({ children }: any) {
  return (
    <Layout>
      <Link href="/" key="nav-link-main">
        <a className="shadow w-full md:w-8/12 p-2 m-2 text-center hover:bg-gray-50  border-2 border-blue-300 rounded-md top-0">
          Return
        </a>
      </Link>
      {children}
    </Layout>
  )
}
