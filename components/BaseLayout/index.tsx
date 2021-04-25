import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function BaseLayout({ children }: any) {
  const router = useRouter()
  const home = router.pathname === '/'

  return (
    <div className="min-h-screen py-2 bg-yellow-50 bg-opacity-25">
      <Head>
        <title> My website </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col justify-center w-full h-32 text-center border-b">
        <h1 className="text-2xl my-4"> Hello! I&apos;m Kuba! </h1>
        <h2> JS dev with 3 year commercial experience</h2>
        <h2>
          {' '}
          Lodz, Poland{' '}
          <span role="img" aria-label="polish-flag">
            🇵🇱
          </span>{' '}
          / remote{' '}
          <span role="img" aria-label="globe-icon">
            🌐
          </span>
        </h2>
      </header>

      <main>{children}</main>

      {!home && (
        <div className="flex justify-center items-center w-full h-16 text-center border-b">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Kuba Krymarys @ {new Date().getFullYear()}
      </footer>
    </div>
  )
}
