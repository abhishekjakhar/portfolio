import PropTypes from 'prop-types'

export default function ResumeHeading({ children }) {
  return (
    <main className="mb-2 u-flex align-items-center">
      <h2 className="u-fontSize20 u-phone-fontSize18 u-fontWeightBold u-textColorDarker u-lineHeight26 u-letterSpacingHalf">
        {children}
      </h2>
    </main>
  )
}

ResumeHeading.propType = {
  children: PropTypes.element.isRequired,
}
