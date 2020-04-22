import Head from 'next/head'
import { siteTitle, siteDescription, siteTitleAlt } from '../config/website'

const Meta = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>{siteTitle}</title>

    <meta name="title" content={siteTitleAlt} />
    <meta name="description" content={siteDescription} />
    <meta name="robots" content="index,follow" />
  </Head>
)

export default Meta
