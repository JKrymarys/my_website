import Head from 'next/head'
import Link from 'next/link'

export default function BaseLayout({ children }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-yellow-50 bg-opacity-25">
      <Head>
        <title> My website </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center flex-start flex-1 w-full px-20 text-center">
        <Link href="/">
          <div className="flex flex-col justify-center  w-full border-b h-28">
            <h1 className="text-3xl"> Hello! I&apos;m Kuba! </h1>
            <h2> JavaScript developer with 3 year commercial experience</h2>
          </div>
        </Link>
        {children}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Kuba Krymarys @ {new Date().getFullYear()}
      </footer>
    </div>
  )
}
