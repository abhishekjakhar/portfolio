import Document, { Head, Html, Main, NextScript } from 'next/document'
import { lang } from '../config/website'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={lang}>
        <Head />
        <body className="light">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
