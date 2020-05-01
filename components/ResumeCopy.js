import PropTypes from 'prop-types'

export default function ResumeCopy({ children }) {
  return (
    <p className="u-textColorDarker fontWeightRegular u-fontSize16">
      {children}
    </p>
  )
}

ResumeCopy.propType = {
  children: PropTypes.element.isRequired,
}
