import PropTypes from 'prop-types'

export default function ProjectTitle({ children }) {
  return (
    <h1 className="u-fontSize32 u-fontWeightRegular u-textColorDarkest u-lineHeight1x u-letterSpacingHalf">
      {children}
    </h1>
  )
}

ProjectTitle.propType = {
  children: PropTypes.element.isRequired,
}
