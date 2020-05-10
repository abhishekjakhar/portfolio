import PropTypes from 'prop-types'

export default function ResumeHeading({ children }) {
  return (
    <div className="mb-2 u-flex align-items-center">
      <h2 className="u-fontSize20 u-phone-fontSize18 u-fontWeightBold u-textColorDarker u-lineHeight26 u-letterSpacingHalf">
        {children}
      </h2>
    </div>
  )
}

ResumeHeading.propType = {
  children: PropTypes.element.isRequired,
}
