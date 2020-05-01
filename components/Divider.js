import React from 'react'

const Divider = props => (
  <div>
    <style jsx>{`
      div {
        height: 1px;
        width: 100%;
        margin: ${'large' in props ? '8' : '6'}rem 0;
        background-color: rgba(0, 0, 0, 0.1);
      }
    `}</style>
  </div>
)

export default Divider
