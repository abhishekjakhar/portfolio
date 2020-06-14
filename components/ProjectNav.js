import React from 'react'
import PropTypes from 'prop-types'
import ActiveLink from './ActiveLink'

export default function ProjectNav({ projects }) {
  return (
    <nav>
      <ul className="u-flex f-row f-wrap">
        {projects.map(p => {
          return (
            <li key={p.slug}>
              <ActiveLink as={`/projects/${p.slug}`} href="/projects/[slug]">
                <a className="u-fontSize20 u-fontWeightBold u-textColorDarkerHover u-transition-all300Custom">
                  {p.title}
                </a>
              </ActiveLink>
            </li>
          )
        })}
      </ul>
      <style jsx>{`
        li {
          display: flex;
          align-items: center;
        }

        li:not(:last-child) {
          margin-right: 2.4rem;
        }
      `}</style>
    </nav>
  )
}

ProjectNav.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
}
