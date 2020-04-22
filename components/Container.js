import React from 'react'

const Container = props => (
  <div
    className={`u-maxWidth1140 mx-auto pt-8 pb-8 tabLand-pl-6 tabLand-pr-6 tabLand-pb-5 tabLand-pt-5 phone-pl-3 phone-pr-3 phone-pb-4 phone-pt-4`}>
    {props.children}
  </div>
)

export default Container
