import Meta from './Meta'
import Header from './Header'

export default function Layout({ preview, children }) {
  return (
    <React.Fragment>
      <Meta />
      <Header />
      <main>{children}</main>
    </React.Fragment>
  )
}
