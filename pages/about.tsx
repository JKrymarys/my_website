import Head from 'next/head'

import Layout from 'components/Layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About me</title>
      </Head>
      <div className="w-8/12 space-y-5">
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p className="text-justify">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="text-justify">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Layout>
  )
}
