import React from 'react'
import PropTypes from 'prop-types'
import ActiveLink from './ActiveLink'

const ProjectNav = ({ projects }) => {
  return (
    <nav>
      <ul className="u-flex f-row f-wrap">
        {projects.map((project, index) => {
          return (
            <li key={index} className="mr-4">
              <ActiveLink
                as={`/projects/${project.slug}`}
                href="/projects/[pathname]">
                <a
                  className={`u-fontSize20 u-fontWeightBold u-textColorDarkerHover u-transition-all300Custom`}>
                  {project.title}
                </a>
              </ActiveLink>
            </li>
          )
        })}
      </ul>
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

export default ProjectNav
