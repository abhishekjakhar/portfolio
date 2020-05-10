import PropTypes from 'prop-types'
import Meta from './Meta'
import Header from './Header'
import Container from './Container'

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
