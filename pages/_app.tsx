import 'tailwindcss/tailwind.css'

import BaseLayout from 'components/BaseLayout'

function MyApp({ Component, pageProps }: any) {
  return (
    <BaseLayout>
      {' '}
      <Component {...pageProps} />{' '}
    </BaseLayout>
  )
}

export default MyApp
