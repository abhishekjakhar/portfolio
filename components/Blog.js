import React from 'react'
import PropTypes from 'prop-types'

const Blog = props => {
  const { link, title, date, readTime, publication } = props

  return (
    <article className="pl-0 pr-0 u-transition-all150Ease u-cursorPointer u-inlineBlock u-transform-translateXHover">
      <a
        href={link}
        className="u-block"
        target="_blank"
        rel="noopener noreferrer">
        <main className="mb-1 u-flex align-items-center">
          <div className="mr-1 phone-mr-0">
            <h3 className="u-fontSize20 u-phone-fontSize18 u-fontWeightBold u-textColorDarker u-lineHeight26 u-letterSpacingHalf">
              {title}
            </h3>
          </div>
        </main>
        <footer className="u-flex justify-content-between">
          <p className="u-fontSize14 u-textColorNormal">
            {date}&nbsp;&#183;&nbsp;{readTime} min
            read&nbsp;&#183;&nbsp;In&nbsp;{publication}
          </p>
        </footer>
      </a>
    </article>
  )
}

Blog.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
  publication: PropTypes.string.isRequired,
}

export default Blog
