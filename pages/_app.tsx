import 'tailwindcss/tailwind.css'

import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import * as gtag from 'utils/gtag'
import useDisplayDesktopVersion from 'utils/useDisplayDesktopVersion'

import BaseLayout from 'components/BaseLayout'
import DesktopLayout from 'components/DesktopLayout'

import 'components/DesktopLayout/devices.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const displayDesktopVersion = useDisplayDesktopVersion()

  const Layout = displayDesktopVersion ? DesktopLayout : BaseLayout

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout>
      <Component {...pageProps} />{' '}
    </Layout>
  )
}

export default MyApp
