import PropTypes from 'prop-types'
import Meta from './meta'
import Header from './header'
import Container from './container'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  )
}

Layout.propType = {
  children: PropTypes.element.isRequired,
}
