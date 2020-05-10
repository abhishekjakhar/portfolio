import '../styles/index.css'
import Router from 'next/router'
import Progress from '../components/progress'

import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageView(url))

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Progress />
    </>
  )
}
