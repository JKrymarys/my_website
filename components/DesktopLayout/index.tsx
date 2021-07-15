import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

/* eslint-disable jsx-a11y/accessible-emoji */

const EmojiWrapper = ({ children, label }: any) => (
  <span className="mx-2" role="img" aria-label={label}>
    {children}
  </span>
)

function Phone({ children }: any) {
  return (
    <div className="marvel-device iphone-x">
      <div className="notch">
        <div className="camera"></div>
        <div className="speaker"></div>
      </div>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="bottom-bar"></div>
      <div className="volume"></div>
      <div className="overflow">
        <div className="shadow shadow--tr"></div>
        <div className="shadow shadow--tl"></div>
        <div className="shadow shadow--br"></div>
        <div className="shadow shadow--bl"></div>
      </div>
      <div className="inner-shadow"></div>
      <div className="screen" style={{ overflow: 'scroll' }}>
        {children}
      </div>
    </div>
  )
}

export default function DesktopLayout({ children }: any) {
  const router = useRouter()
  const home = router.pathname === '/'

  return (
    <div className="min-h-screen py-2 bg-yellow-50 bg-opacity-25">
      <Head>
        <title>jkrymarys - website </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center">
        <Phone>
          <header className="flex flex-col justify-center w-full h-32 text-center border-b p-4 mt-6">
            <h1 className="text-2xl my-2">
              Hello
              <EmojiWrapper label="waving-hand">👋</EmojiWrapper>
              I&apos;m Kuba!
            </h1>
            <h2>Frontend developer - JS/TS, React.js</h2>
            <h2>Freelance - business websites, online stores</h2>

            <h2>
              Lodz, Poland
              <EmojiWrapper label="polish-flag">🇵🇱</EmojiWrapper>/ remote
              <EmojiWrapper label="globe-icon">🌐</EmojiWrapper>
            </h2>
          </header>
          <main className="mx-auto w-full l overflow-y-auto">{children}</main>

          {!home && (
            <div className="flex justify-center items-center w-full h-16 text-center border-b">
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}

          <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
            <div>Kuba Krymarys @ {new Date().getFullYear()}</div>
            <a href="/">jkrymarys.pl</a>
          </footer>
        </Phone>
      </div>
    </div>
  )
}
