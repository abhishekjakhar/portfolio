import Meta from './Meta'
import Header from './Header'
import Container from './Container'
import PropTypes from 'prop-types'

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Meta />
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
    </React.Fragment>
  )
}

Layout.propType = {
  children: PropTypes.element.isRequired,
}
