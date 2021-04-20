import Head from 'next/head'

export default function Layout({ children }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title> My website </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <div className="absolute top-10">
          <h1 className="text-3xl"> Hello! I&apos;m Kuba! </h1>
          <h2> JavaScript developer with 3 year commercial experience</h2>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
          {children}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Kuba Krymarys @ {new Date().getFullYear()}
      </footer>
    </div>
  )
}
