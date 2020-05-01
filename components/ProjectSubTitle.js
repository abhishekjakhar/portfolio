import PropTypes from 'prop-types'

export default function ProjectSubTitle({ children }) {
  return (
    <div className="u-width80Percent u-phone-width100Percent">
      <h2 className="u-fontSize18 u-fontWeightRegular u-textColorDarker">
        {children}
      </h2>
    </div>
  )
}

ProjectSubTitle.propType = {
  children: PropTypes.element.isRequired,
}
