import '../styles/index.css'
import Router from 'next/router'

import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageView(url))

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
