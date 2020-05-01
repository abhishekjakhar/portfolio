import React from 'react'
import ActiveLink from './ActiveLink'

const ProjectNav = ({ projects }) => {
  return (
    <nav>
      <ul className="u-flex f-row f-wrap justify-content-between">
        {projects.map((project, index) => {
          return (
            <li key={index}>
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

export default ProjectNav
