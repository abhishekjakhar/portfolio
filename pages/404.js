import Layout from '../components/Layout'
import Button from '../components/Button'
import Link from 'next/link'
import {
  errorHeading,
  errorSubHeadingTop,
  errorSubHeadingBottom,
} from '../config/website'

export default function Custom404() {
  return (
    <Layout>
      <div className="pt-16 u-textAlignCenter">
        <h1 className="u-fontSize48 u-phone-fontSize38 u-fontWeightBold u-textColorDarkest u-lineHeight1x u-letterSpacingHalf mb-6">
          {errorHeading}
        </h1>
        <h2
          className={`u-fontSize20 u-phone-fontSize18 u-fontWeightRegular u-textColorDarker u-lineHeight26 u-letterSpacingHalf mb-6`}>
          {errorSubHeadingTop}
          <br className="u-phoneHide" />
          {errorSubHeadingBottom}
        </h2>
        <Button>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Button>
      </div>
    </Layout>
  )
}
