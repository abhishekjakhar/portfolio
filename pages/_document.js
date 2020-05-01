import Document, { Html, Head, Main, NextScript } from 'next/document'
import { lang } from '../config/website'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={lang}>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname
                });
              `,
            }}
          />
        </Head>
        <body className="light">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
