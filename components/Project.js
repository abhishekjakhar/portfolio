import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Project = props => {
  const { title, type, image, pathname } = props

  const typeLength = props.type.length

  return (
    <article
      className={`u-relative u-backgroundColorWhite u-cursorPointer project`}>
      <Link as={`/projects/${pathname}`} href="/projects/[pathname]">
        <a className="u-block u-width100Percent u-height100Percent">
          <figure className="image">
            <img
              src={image}
              alt="Project"
              className="u-width100Percent u-height100Percent"
            />
          </figure>
        </a>
      </Link>
      <div className="u-absolute u-flex justify-content-center align-items-center u-textAlignCenter text-container">
        <h2 className="u-fontSize42 u-phone-fontSize30 u-textColorDarker u-fontWeightRegular">
          {title}
        </h2>
        <div>
          <p className="u-fontSize20 u-textColorDark u-fontWeightRegular">
            {type.map((type, i) => {
              if (typeLength === i + 1) return type
              return type + ' / '
            })}
          </p>
        </div>
      </div>
      <style jsx>{`
        .image {
          opacity: 1;
          transition: opacity 300ms cubic-bezier(0.33, 0, 0.2, 1);
          overflow: hidden;
          display: flex;
          width: 100%;
          height: 100%;
        }

        .text-container {
          position: absolute;
          top: 4vw;
          right: 2vw;
          left: 2vw;
          bottom: 4vw;
          width: calc(100% - 4vw);
          height: calc(100% - 4vw);
          margin: auto;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transition: opacity 300ms cubic-bezier(0.33, 0, 0.2, 1);
        }

        .project:hover .image {
          opacity: 0;
        }
        .project:hover .text-container {
          opacity: 1;
        }
      `}</style>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
}

export default Project
