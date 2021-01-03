import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Children } from 'react'

export default function ActiveLink({ children, activeClassName, ...props }) {
  const { pathname } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const className =
    pathname === props.href
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

ActiveLink.propType = {
  children: PropTypes.element.isRequired,
  activeClassName: PropTypes.string.isRequired,
}
