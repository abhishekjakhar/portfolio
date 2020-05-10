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
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/favicon/site.webmanifest" />
    <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
    <meta name="theme-color" content="#000" />
  </Head>
)

export default Meta
