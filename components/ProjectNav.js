import React from 'react'
import ActiveLink from './ActiveLink'

const ProjectNav = ({ projects }) => {
  return (
    <nav>
      <ul className="u-flex f-row f-wrap">
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
      <style jsx>{`
        li {
          display: flex;
          align-items: center;
        }

        li:not(:last-child) {
          margin-right: 2.4rem;
        }

        li::before {
          content: '•';
          display: inline-block;
          color: rgba(0, 0, 0, 0.8);
          font-size: 1.8rem;
          position: relative;
          margin: 0 1rem 0 1rem;
          height: 100%;
        }
      `}</style>
    </nav>
  )
}

export default ProjectNav
