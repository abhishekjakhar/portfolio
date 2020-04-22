import Layout from '../components/Layout'
import Container from '../components/Container'
import Button from '../components/Button'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout>
      <Container>
        <div className="pt-16 u-textAlignCenter">
          <h1 className="u-fontSize48 u-phone-fontSize38 u-fontWeightBold u-textColorDarkest u-lineHeight1x u-letterSpacingHalf mb-6">
            I lost this page
          </h1>
          <h2
            className={`u-fontSize20 u-phone-fontSize18 u-fontWeightRegular u-textColorDarker u-lineHeight26 u-letterSpacingHalf mb-6`}>
            I searched high and low but couldn’t find what you’re{' '}
            <br className="u-phoneHide" />
            looking for. Let’s find a better place for you to go.
          </h2>
          <Button>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Button>
        </div>
      </Container>
    </Layout>
  )
}
