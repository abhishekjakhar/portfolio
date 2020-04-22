import Meta from './Meta'

export default function Layout({ preview, children }) {
  return (
    <React.Fragment>
      <Meta />
      <main>{children}</main>
    </React.Fragment>
  )
}
